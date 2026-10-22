import { useParams } from "@tanstack/react-router";

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";

const LOCALE_CONFIG = {
  fr: { param: undefined, ogLocale: "fr_FR" },
  en: { param: "en", ogLocale: "en_US" },
} as const satisfies Record<Locale, { param?: string; ogLocale: string }>;

export function localeParam(locale: Locale) {
  return LOCALE_CONFIG[locale].param;
}

export function ogLocale(locale: Locale): string {
  return LOCALE_CONFIG[locale].ogLocale;
}

export function parseLocaleParam(
  param: string | undefined,
): Locale | undefined {
  return LOCALES.find((locale) => localeParam(locale) === param);
}

// Invalid params never reach a page: the {-$locale} route 404s on them.
export function localeFromParams(params: { locale?: string }): Locale {
  return parseLocaleParam(params.locale) ?? DEFAULT_LOCALE;
}

export function useLocale(): Locale {
  return localeFromParams(useParams({ strict: false }));
}

export function localizedPath(path: string, locale: Locale): string {
  const param = localeParam(locale);
  if (param === undefined) return path;
  return path === "/" ? `/${param}` : `/${param}${path}`;
}
