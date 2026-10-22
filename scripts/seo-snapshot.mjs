import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";

const [baseUrl, outDir] = process.argv.slice(2);
if (!baseUrl || !outDir) {
  console.error("usage: node scripts/seo-snapshot.mjs <baseUrl> <outDir>");
  process.exit(1);
}

const slugs = fs
  .readdirSync("src/content/projects")
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => file.replace(/\.mdx$/, ""))
  .sort();

const pages = [
  "/",
  "/resume",
  "/mentions-legales",
  ...slugs.map((slug) => `/project/${slug}`),
];

const routes = [
  ...pages,
  ...pages.map((page) => (page === "/" ? "/en" : `/en${page}`)),
  "/project/does-not-exist",
  "/en/project/does-not-exist",
  "/fr",
  "/de/resume",
  "/does-not-exist",
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/favicon.ico",
];

const SECURITY_HEADERS = [
  "x-content-type-options",
  "x-frame-options",
  "referrer-policy",
  "permissions-policy",
];

const squash = (text) => text.replace(/\s+/g, " ").trim();

function unwrapImageSrc(src) {
  if (!src?.startsWith("/")) return src;
  return new URL(src, baseUrl).searchParams.get("url") ?? src;
}

function srcsetWidths(srcset) {
  return (srcset ?? "")
    .split(",")
    .map((candidate) => candidate.trim().split(/\s+/)[1])
    .filter(Boolean)
    .join(" ");
}

function snapshotHtml(html) {
  const root = parse(html);
  const head = root.querySelector("head");
  const body = root.querySelector("body");

  const meta = head
    .querySelectorAll("meta")
    .filter((m) => m.getAttribute("name") !== "next-size-adjust")
    .map((m) => {
      const key =
        m.getAttribute("name") ??
        m.getAttribute("property") ??
        m.getAttribute("http-equiv") ??
        (m.hasAttribute("charset") ? "charset" : "?");
      return [key, m.getAttribute("content") ?? m.getAttribute("charset")];
    })
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`);

  const links = root
    .querySelectorAll("link")
    .filter(
      (l) =>
        ["canonical", "author", "icon", "alternate"].includes(
          l.getAttribute("rel"),
        ) ||
        (l.getAttribute("rel") === "preload" &&
          l.getAttribute("as") === "image"),
    )
    .map((l) => {
      if (l.getAttribute("rel") === "preload") {
        return `preload-image=${srcsetWidths(l.getAttribute("imagesrcset"))} sizes=${l.getAttribute("imagesizes")}`;
      }
      const hreflang = l.getAttribute("hreflang");
      const rel = hreflang
        ? `${l.getAttribute("rel")}[hreflang=${hreflang}]`
        : l.getAttribute("rel");
      return `${rel}=${l.getAttribute("href")}`;
    })
    .sort();

  const jsonLd = root
    .querySelectorAll('script[type="application/ld+json"]')
    .map((s) => JSON.parse(s.textContent));

  for (const el of body.querySelectorAll("script, style, noscript, template")) {
    el.remove();
  }

  return {
    lang: root.querySelector("html").getAttribute("lang"),
    title: head.querySelector("title")?.textContent,
    meta,
    links,
    jsonLd,
    headings: body
      .querySelectorAll("h1, h2, h3")
      .map((h) => `${h.tagName.toLowerCase()}: ${squash(h.textContent)}`),
    images: body.querySelectorAll("img").map((img) => ({
      alt: img.getAttribute("alt"),
      src: unwrapImageSrc(img.getAttribute("src")),
      srcset: srcsetWidths(img.getAttribute("srcset")),
      sizes: img.getAttribute("sizes"),
      loading: img.getAttribute("loading"),
    })),
    anchors: body
      .querySelectorAll("a")
      .map((a) => `${a.getAttribute("href")} ${squash(a.textContent)}`),
    text: squash(body.textContent),
  };
}

function snapshotText(contentType, text) {
  if (contentType.includes("xml")) {
    return text
      .replace(/<lastmod>[^<]*<\/lastmod>/g, "<lastmod/>")
      .replace(/>\s+</g, "><")
      .trim();
  }
  return text.trim();
}

fs.mkdirSync(outDir, { recursive: true });

for (const route of routes) {
  const res = await fetch(new URL(route, baseUrl), { redirect: "manual" });
  const contentType = res.headers.get("content-type") ?? "";
  const snapshot = {
    route,
    status: res.status,
    contentType: contentType.split(";")[0],
    headers: Object.fromEntries(
      SECURITY_HEADERS.map((h) => [h, res.headers.get(h)]),
    ),
  };

  if (contentType.includes("text/html")) {
    Object.assign(snapshot, snapshotHtml(await res.text()));
  } else if (contentType.startsWith("image/")) {
    snapshot.bytes = (await res.arrayBuffer()).byteLength;
  } else {
    snapshot.body = snapshotText(contentType, await res.text());
  }

  const file = route === "/" ? "index" : route.slice(1).replaceAll("/", "__");
  fs.writeFileSync(
    path.join(outDir, `${file}.json`),
    `${JSON.stringify(snapshot, null, 2)}\n`,
  );
  console.log(`${snapshot.status} ${route}`);
}
