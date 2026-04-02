import type { Metadata } from "next";
import AllProjects from "./components/AllProjects";
import JsonLd from "./components/JsonLd";
import StyledLink from "./components/StyledLink";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://antoinedeveyrac.fr/#website",
      url: "https://antoinedeveyrac.fr",
      name: "Antoine de Veyrac — Portfolio",
      description:
        "Portfolio d'Antoine de Veyrac, développeur fullstack expert React",
      inLanguage: "fr",
      publisher: { "@id": "https://antoinedeveyrac.fr/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://antoinedeveyrac.fr/#profilepage",
      url: "https://antoinedeveyrac.fr",
      name: "Antoine de Veyrac — Portfolio",
      isPartOf: { "@id": "https://antoinedeveyrac.fr/#website" },
      mainEntity: { "@id": "https://antoinedeveyrac.fr/#person" },
      inLanguage: "fr",
    },
    {
      "@type": "Person",
      "@id": "https://antoinedeveyrac.fr/#person",
      name: "Antoine de Veyrac",
      url: "https://antoinedeveyrac.fr",
      email: "antoine.2vey@gmail.com",
      jobTitle: "Développeur Fullstack React",
      knowsAbout: [
        "React",
        "React Native",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "Next.js",
        "Solidity",
        "Python",
        "Golang",
        "Web3",
      ],
      knowsLanguage: "fr",
      sameAs: [
        "https://www.linkedin.com/in/antoine-de-veyrac-31b467112/",
        "https://github.com/antoine2vey",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Antoine de Veyrac — Développeur React Freelance | Portfolio",
  description:
    "Développeur fullstack React et React Native freelance. 10 ans d'expérience en applications web, mobile et web3. Découvrez mes projets professionnels et contactez-moi.",
  publisher: "Antoine de Veyrac",
  applicationName: "portfolio",
  authors: [
    {
      url: "https://antoinedeveyrac.fr",
      name: "Antoine de Veyrac",
    },
  ],
  openGraph: {
    type: "website",
    title: "Antoine de Veyrac — Développeur React Freelance",
    description:
      "Développeur fullstack React et React Native freelance. 10 ans d'expérience en applications web, mobile et web3.",
    siteName: "Antoine de Veyrac — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine de Veyrac — Développeur React Freelance",
    description:
      "Développeur fullstack React et React Native freelance. 10 ans d'expérience en applications web, mobile et web3.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={homepageJsonLd} />
      <div className="container px-6 sm:px-12 mb-10 sm:mb-20">
        <Title>
          Antoine de Veyrac, <br />
          développeur fullstack avec 10 ans d&apos;expérience, expert
          React et architecte backend. Adepte de la programmation fonctionnelle
          (Effect.js), du typage fort et des architectures event-driven pour des
          applications web, mobiles et web3 robustes et scalables.
          N&apos;hésitez pas à me{" "}
          <StyledLink href="mailto:antoine.2vey@gmail.com">
            contacter
          </StyledLink>{" "}
          si vous souhaitez collaborer.
        </Title>
      </div>

      <div className="mb-10 sm:mb-20">
        <AllProjects />
      </div>

      <div className="container px-6 sm:px-12 mb-10 sm:mb-20">
        <Title as="h2">
          Convaincu que la qualité du backend détermine la qualité du produit.
          Je conçois des APIs avec injection de dépendances, erreurs typées et
          composition fonctionnelle — des pratiques qui garantissent des
          systèmes testables, maintenables et prêts à scaler. Du monorepo
          TypeScript à la CI/CD automatisée, je m&apos;engage sur la rigueur
          technique autant que sur la livraison.
        </Title>
      </div>

      <div className="mb-10 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-0 px-6 sm:px-12 ">
          <div>
            <Subtitle as="h3">Mes services</Subtitle>
            <ul className="font-neue text-xl font-normal">
              <li>APIs & architecture backend</li>
              <li>applications web</li>
              <li>appli mobiles (ios & android)</li>
              <li>intégrations IA & RAG</li>
              <li>web3 & smart contracts</li>
              <li>CI/CD & DevOps</li>
            </ul>
          </div>

          <div>
            <Subtitle as="h3">Expertise</Subtitle>
            <ul className="font-neue text-xl font-normal">
              <li>react - 10ans</li>
              <li>react native - 8ans</li>
              <li>tailwind - 6ans</li>
              <li>html/css - 12ans</li>
              <li>nodejs - 10ans</li>
              <li>javascript - 12ans</li>
            </ul>
          </div>

          <div>
            <Subtitle as="h3">Backend & Infra</Subtitle>
            <ul className="font-neue text-xl font-normal">
              <li>effect.js</li>
              <li>postgresql / redis</li>
              <li>event-driven / pub-sub</li>
              <li>docker / CI-CD</li>
              <li>cloud (gcp, aws)</li>
              <li>monorepo / turborepo</li>
            </ul>
          </div>

          <div>
            <Subtitle as="h3">Langages & outils</Subtitle>
            <ul className="font-neue text-xl font-normal">
              <li>typescript / javascript</li>
              <li>python</li>
              <li>rust</li>
              <li>solidity</li>
              <li>nextjs / prisma / drizzle</li>
              <li>bun / vitest / biome</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
