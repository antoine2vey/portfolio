import {
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
  localizedPath,
} from "@/lib/i18n";
import { getProjects } from "@/lib/projects";
import { absoluteUrl, alternates } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

const paths = [
  "/",
  "/resume",
  "/mentions-legales",
  ...getProjects(DEFAULT_LOCALE).map((project) => `/project/${project.slug}`),
];

function urlEntry(path: string, locale: Locale, lastmod: string) {
  const links = alternates(path)
    .map(
      ({ hrefLang, href }) =>
        `<xhtml:link rel="alternate" hreflang="${hrefLang}" href="${href}"/>`,
    )
    .join("\n");
  return `<url>\n<loc>${absoluteUrl(localizedPath(path, locale))}</loc>\n${links}\n<lastmod>${lastmod}</lastmod>\n</url>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const lastmod = new Date().toISOString();
        const urls = paths
          .flatMap((path) =>
            LOCALES.map((locale) => urlEntry(path, locale, lastmod)),
          )
          .join("\n");
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
          { headers: { "Content-Type": "application/xml" } },
        );
      },
    },
  },
});
