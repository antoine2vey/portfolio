import {
  DEFAULT_LOCALE,
  chosenLocale,
  localizedPath,
  pathLocale,
  preferredLocale,
} from "@/lib/i18n";
import { redirect } from "@tanstack/react-router";
import {
  createCsrfMiddleware,
  createMiddleware,
  createStart,
} from "@tanstack/react-start";
import { appendResponseHeader } from "@tanstack/react-start/server";

function isPageNavigation(request: Request, pathname: string) {
  return (
    request.method === "GET" &&
    request.headers.get("Accept")?.includes("text/html") === true &&
    pathname !== "/image" &&
    !pathname.startsWith("/assets/") &&
    !/\.[^/]*$/.test(pathname)
  );
}

const localeRedirect = createMiddleware().server(
  ({ request, pathname, handlerType, next }) => {
    if (
      handlerType !== "router" ||
      !isPageNavigation(request, pathname) ||
      pathLocale(pathname) !== DEFAULT_LOCALE
    ) {
      return next();
    }
    appendResponseHeader("Vary", "Accept-Language, Cookie");
    const preferred = preferredLocale(
      request.headers.get("Accept-Language") ?? undefined,
    );
    if (
      chosenLocale(request.headers.get("Cookie")) !== undefined ||
      preferred === undefined ||
      preferred === DEFAULT_LOCALE
    ) {
      return next();
    }
    throw redirect({
      href: localizedPath(pathname, preferred) + new URL(request.url).search,
      statusCode: 302,
    });
  },
);

export const startInstance = createStart(() => ({
  requestMiddleware: [
    // A start instance replaces Start's default CSRF guard on server functions.
    createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" }),
    localeRedirect,
  ],
}));
