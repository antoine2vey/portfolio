import { IMAGE_WIDTHS } from "@/lib/image";
import { createFileRoute } from "@tanstack/react-router";
import sharp, { type Sharp } from "sharp";

const ENCODERS = {
  avif: (image: Sharp) => image.avif({ quality: 55, effort: 3 }),
  webp: (image: Sharp) => image.webp({ quality: 75 }),
  png: (image: Sharp) => image.png({ quality: 75 }),
};

type Format = keyof typeof ENCODERS;

const cache = new Map<string, Promise<Buffer | number>>();

function parseSource(raw: string | null): URL | undefined {
  if (!raw || !URL.canParse(raw)) return undefined;
  const url = new URL(raw);
  const allowed =
    url.protocol === "https:" &&
    url.hostname === "storage.googleapis.com" &&
    url.pathname.startsWith("/portfolio-adv-projects/");
  return allowed ? url : undefined;
}

function negotiateFormat(accept: string): Format {
  if (accept.includes("image/avif")) return "avif";
  if (accept.includes("image/webp")) return "webp";
  return "png";
}

async function optimize(
  source: URL,
  width: number,
  format: Format,
): Promise<Buffer | number> {
  const upstream = await fetch(source);
  if (!upstream.ok) return upstream.status;
  const image = sharp(Buffer.from(await upstream.arrayBuffer()))
    .timeout({ seconds: 7 })
    .rotate()
    .resize({ width, withoutEnlargement: true });
  return ENCODERS[format](image).toBuffer();
}

export const Route = createFileRoute("/image")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const params = new URL(request.url).searchParams;
        const source = parseSource(params.get("url"));
        const width = Number(params.get("w"));
        if (!source || !IMAGE_WIDTHS.includes(width)) {
          return new Response("Bad Request", { status: 400 });
        }

        const format = negotiateFormat(request.headers.get("accept") ?? "");
        const key = `${source.href}|${width}|${format}`;
        let body = cache.get(key);
        if (!body) {
          body = optimize(source, width, format);
          cache.set(key, body);
        }
        const image = await body.catch(() => 502);
        if (typeof image === "number") {
          cache.delete(key);
          return new Response(null, { status: image });
        }

        return new Response(new Uint8Array(image), {
          headers: {
            "Content-Type": `image/${format}`,
            "Cache-Control": "public, max-age=2592000, must-revalidate",
            Vary: "Accept",
            "Content-Security-Policy":
              "script-src 'none'; frame-src 'none'; sandbox;",
          },
        });
      },
    },
  },
});
