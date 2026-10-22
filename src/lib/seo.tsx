import {
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
  localizedPath,
  ogLocale,
} from "./i18n";

export const SITE_URL = "https://antoinedeveyrac.fr";
const SITE_NAME = "Antoine de Veyrac - Portfolio";
const AUTHOR = "Antoine de Veyrac";

type Seo = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  author?: boolean;
  applicationName?: string;
  openGraph?: {
    type?: "website" | "article";
    title: string;
    description: string;
    images?: string[];
  };
  twitter?: {
    card: "summary" | "summary_large_image";
    title: string;
    description: string;
  };
  jsonLd?: Record<string, unknown>;
};

export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function alternates(path: string) {
  return [
    ...LOCALES.map((locale) => ({
      hrefLang: locale,
      href: absoluteUrl(localizedPath(path, locale)),
    })),
    {
      hrefLang: "x-default",
      href: absoluteUrl(localizedPath(path, DEFAULT_LOCALE)),
    },
  ];
}

export function seo({
  locale,
  title,
  description,
  path,
  noindex,
  author,
  applicationName,
  openGraph,
  twitter,
  jsonLd,
}: Seo) {
  const url = absoluteUrl(localizedPath(path, locale));
  const images = openGraph?.images ?? [];
  const card: Seo["twitter"] =
    twitter ??
    (openGraph && {
      card: images.length > 0 ? "summary_large_image" : "summary",
      title: openGraph.title,
      description: openGraph.description,
    });

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(applicationName
        ? [{ name: "application-name", content: applicationName }]
        : []),
      ...(author
        ? [
            { name: "author", content: AUTHOR },
            { name: "publisher", content: AUTHOR },
          ]
        : []),
      ...(noindex ? [{ name: "robots", content: "noindex" }] : []),
      ...(openGraph
        ? [
            { property: "og:title", content: openGraph.title },
            { property: "og:description", content: openGraph.description },
            { property: "og:url", content: url },
            { property: "og:site_name", content: SITE_NAME },
            { property: "og:locale", content: ogLocale(locale) },
            ...LOCALES.filter((other) => other !== locale).map((other) => ({
              property: "og:locale:alternate",
              content: ogLocale(other),
            })),
            ...(openGraph.type
              ? [{ property: "og:type", content: openGraph.type }]
              : []),
          ]
        : []),
      ...(card
        ? [
            { name: "twitter:card", content: card.card },
            { name: "twitter:title", content: card.title },
            { name: "twitter:description", content: card.description },
          ]
        : []),
      ...(jsonLd ? [{ "script:ld+json": jsonLd }] : []),
    ],
    links: [
      { rel: "canonical", href: url },
      ...alternates(path).map((alternate) => ({
        rel: "alternate",
        ...alternate,
      })),
      ...(author ? [{ rel: "author", href: SITE_URL }] : []),
    ],
  };
}

// head() keeps one meta per name/property, so repeated image tags render
// here and React hoists them into <head>.
export function ShareImages({ images }: { images: string[] }) {
  return images.flatMap((image) => [
    <meta key={`og:${image}`} property="og:image" content={image} />,
    <meta key={`twitter:${image}`} name="twitter:image" content={image} />,
  ]);
}
