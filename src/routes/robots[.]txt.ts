import { absoluteUrl } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(
          `User-Agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`,
          { headers: { "Content-Type": "text/plain" } },
        ),
    },
  },
});
