import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import StyledLink from "./components/StyledLink";
import Title from "./components/Title";

export const metadata: Metadata = {
  metadataBase: new URL("https://antoinedeveyrac.fr"),
};

const parnasoFont = localFont({
  src: "./fonts/Parnaso-Regular.woff2",
  display: "swap",
  variable: "--font-parnaso",
});

const neueFont = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/NeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neue",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="antialiased font-neue">
      <body className={`${parnasoFont.variable} ${neueFont.variable}`}>
        <GoogleAnalytics gaId="G-9V6Z03HPR3" />
        <div className="bg-green-300 w-full h-3 fixed z-[-1]" />
        <main className="pt-10 sm:pt-20">{children}</main>
        <footer className="container px-6 sm:px-12 mb-10 sm:mb-20">
          <nav className="flex gap-4 font-neue text-sm uppercase tracking-wider mb-6">
            <Link href="/" className="hover:underline">
              Accueil
            </Link>
            <Link href="/resume" className="hover:underline">
              CV
            </Link>
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>
          </nav>
          <Title as="p">
            Si vous souhaitez en savoir plus, contactez moi{" "}
            <StyledLink href="mailto:antoine.2vey@gmail.com">ici</StyledLink> ou
            sur{" "}
            <StyledLink href="https://www.linkedin.com/in/antoine-de-veyrac-31b467112/">
              Linkedin
            </StyledLink>
          </Title>
        </footer>
      </body>
    </html>
  );
}
