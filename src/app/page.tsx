import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import StyledLink from "./components/StyledLink";
import AllProjects from "./components/AllProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "antoine2vey - home", 
  description: "Antoine de Veyrac - Portfolio",
  generator: "Next.js",
  publisher: "Antoine de Veyrac",
  applicationName: "portfolio",
  authors: [{
    url: 'https://antoinedeveyrac.io',
    name: 'Antoine de Veyrac'
  }],
  keywords: ['react', 'react native', 'javascript', 'developpeur', 'france', 'expert', 'blockchain'],
  openGraph: {
    type: "website",
    title: "antoine2vey - home",
    description: "Antoine de Veyrac - Portfolio",
    siteName: 'antoine2vey portfolio'
  }
};

export default function Page() {
  return (
    <>
      <div className="container px-6 sm:px-12 mb-10 sm:mb-20">
        <Title>Antoine de Veyrac, <br/>
          développeur fullstack, spécialiste de React (7 ans d&apos;expérience) ainsi que de multiples technologies relatives au web, web3 et applications mobiles.
          N&apos;hésitez pas à me <StyledLink href="mailto:antoine.2vey@gmail.com">contacter</StyledLink> si vous souhaitez collaborer.
        </Title>
      </div>

      <div className="mb-10 sm:mb-20">
        <AllProjects />
      </div>

      <div className="container px-6 sm:px-12 mb-10 sm:mb-20">
        <Title>Avec 7 ans de pratique en développement React, je suis un expert efficace dans la création rapide d&apos;applications web et mobile hautement réactives. Ma capacité à produire un code de qualité garantit des solutions robustes et évolutives. Je mengage à fournir des résultats exceptionnels en répondant aux besoins spécifiques des clients, tout en assurant une communication transparente.</Title>
      </div>

      <div className="mb-10 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-0 px-6 sm:px-12 ">
          <div>
            <Subtitle>Mes services</Subtitle>
            <ul className="font-neue text-xl font-normal">
              <li>site web</li>
              <li>web apps</li>
              <li>appli mobiles (ios & android)</li>
              <li>discord/telegram bots</li>
              <li>web3 frontend integration</li>
              <li>smart contract integrations</li>
            </ul>
          </div>

          <div>
            <Subtitle>Expertise</Subtitle>
            <ul className="font-neue text-xl font-normal">
              <li>react - 7ans</li>
              <li>react native - 5ans</li>
              <li>tailwind - 5ans</li>
              <li>html/css - 9ans</li>
              <li>nodejs - 7ans</li>
              <li>javascript - 9ans</li>
            </ul>
          </div>

          <div>
            <Subtitle>Connaissance</Subtitle>
            <ul className="font-neue text-xl font-normal">
              <li>python</li>
              <li>solidity</li>
              <li>golang</li>
              <li>PHP</li>
              <li>mySQL/noSQL</li>
              <li>cloud (gcp, aws)</li>
            </ul>
          </div>

          <div>
            <Subtitle>Frameworks</Subtitle>
            <ul className="font-neue text-xl font-normal">
              <li>jest/mocha</li>
              <li>vuejs</li>
              <li>nextjs</li>
              <li>symfony</li>
              <li>flask</li>
              <li>django</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}