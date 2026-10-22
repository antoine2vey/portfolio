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

export function pathLocale(pathname: string): Locale {
  return parseLocaleParam(pathname.split("/")[1]) ?? DEFAULT_LOCALE;
}

export function preferredLocale(
  acceptLanguage: string | undefined,
): Locale | undefined {
  const ranked = (acceptLanguage ?? "")
    .split(",")
    .map((entry) => {
      const [tag, ...params] = entry.split(";").map((part) => part.trim());
      const q = params.find((param) => param.startsWith("q="));
      return {
        language: tag.split("-")[0].toLowerCase(),
        q: q === undefined ? 1 : Number(q.slice(2)),
      };
    })
    .filter(({ q }) => q > 0)
    .sort((a, b) => b.q - a.q);
  for (const { language } of ranked) {
    const locale = LOCALES.find((candidate) => candidate === language);
    if (locale) return locale;
  }
  return undefined;
}

const LOCALE_COOKIE = "locale";

export function chosenLocale(cookieHeader: string | null): Locale | undefined {
  const value = cookieHeader
    ?.split(";")
    .map((cookie) => cookie.trim().split("="))
    .find(([name]) => name === LOCALE_COOKIE)?.[1];
  return LOCALES.find((locale) => locale === value);
}

export function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}
