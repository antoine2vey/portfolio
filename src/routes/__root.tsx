import StyledLink from "@/components/StyledLink";
import Title from "@/components/Title";
import neueMediumFont from "@/fonts/NeueMontreal-Medium.woff2?url";
import neueRegularFont from "@/fonts/NeueMontreal-Regular.woff2?url";
import parnasoFont from "@/fonts/Parnaso-Regular.woff2?url";
import { LOCALES, localeParam, useLocale } from "@/lib/i18n";
import { messages } from "@/messages";
import appCss from "@/styles.css?url";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";

const GA_ID = "G-9V6Z03HPR3";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      ...[parnasoFont, neueMediumFont, neueRegularFont].map((href) => ({
        rel: "preload",
        href,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous" as const,
      })),
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
        async: true,
      },
      {
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
      },
    ],
  }),
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  const locale = useLocale();
  const m = messages[locale];
  const params = { locale: localeParam(locale) };
  return (
    <html lang={locale} className="antialiased font-neue">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="bg-green-300 w-full h-3 fixed z-[-1]" />
        <main className="pt-10 sm:pt-20">
          <Outlet />
        </main>
        <footer className="container px-6 sm:px-12 mb-10 sm:mb-20">
          <nav className="flex gap-4 font-neue text-sm uppercase tracking-wider mb-6">
            <Link to="/{-$locale}" params={params} className="hover:underline">
              {m.nav.home}
            </Link>
            <Link
              to="/{-$locale}/resume"
              params={params}
              className="hover:underline"
            >
              {m.nav.resume}
            </Link>
            <Link
              to="/{-$locale}/mentions-legales"
              params={params}
              className="hover:underline"
            >
              {m.nav.legal}
            </Link>
            {LOCALES.filter((other) => other !== locale).map((other) => (
              <Link
                key={other}
                to="."
                params={(prev) => ({ ...prev, locale: localeParam(other) })}
                hrefLang={other}
                lang={other}
                className="hover:underline"
              >
                {messages[other].languageName}
              </Link>
            ))}
          </nav>
          <Title as="p">
            {m.footer.contactIntro}{" "}
            <StyledLink href="mailto:antoine.2vey@gmail.com">
              {m.footer.contactEmail}
            </StyledLink>{" "}
            {m.footer.contactOr}{" "}
            <StyledLink href="https://www.linkedin.com/in/antoine-de-veyrac-31b467112/">
              {m.footer.contactLinkedin}
            </StyledLink>
          </Title>
        </footer>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <>
      <title>404: This page could not be found.</title>
      <meta name="robots" content="noindex" />
      <div className="h-screen flex flex-col items-center justify-center text-center font-[system-ui,sans-serif]">
        <div>
          <h1 className="inline-block align-top mr-5 pr-6 text-2xl font-medium leading-[49px] border-r border-black/30 dark:border-white/30">
            404
          </h1>
          <div className="inline-block">
            <h2 className="text-sm font-normal leading-[49px]">
              This page could not be found.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
