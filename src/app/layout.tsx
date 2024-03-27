import localFont from 'next/font/local'
import "./globals.css";
import Title from "./components/Title";
import StyledLink from "./components/StyledLink";
import { GoogleAnalytics } from "@next/third-parties/google";

const parnasoFont = localFont({
  src: './fonts/Parnaso-Regular.woff2',
  display: 'swap',
  variable: '--font-parnaso'
})

const neueFont = localFont({
  src: [
    {
      path: './fonts/NeueMontreal-Medium.woff2',
      weight: '500',
      style: 'medium'
    },
    {
      path: './fonts/NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-neue'
})

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
        <div className="pt-10 sm:pt-20">
          {children}
        </div>
        <footer className="container px-6 sm:px-12 mb-10 sm:mb-20">
          <Title>Si vous souhaitez en savoir plus, contactez moi <StyledLink href="mailto:antoine.2vey@gmail.com">ici</StyledLink> ou sur <StyledLink href="https://www.linkedin.com/in/antoine-de-veyrac-31b467112/">Linkedin</StyledLink></Title>
        </footer>
      </body>
    </html>
  );
}
