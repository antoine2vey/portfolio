import { DEFAULT_LOCALE } from "@/lib/i18n";
import { getProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

const paths = [
  "/",
  "/resume",
  "/mentions-legales",
  ...getProjects(DEFAULT_LOCALE).map((project) => `/project/${project.slug}`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const lastmod = new Date().toISOString();
        const urls = paths
          .map(
            (path) =>
              `<url>\n<loc>${absoluteUrl(path)}</loc>\n<lastmod>${lastmod}</lastmod>\n</url>`,
          )
          .join("\n");
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
          { headers: { "Content-Type": "application/xml" } },
        );
      },
    },
  },
});
