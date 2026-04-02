import Subtitle from "@/app/components/Subtitle";
import Title from "@/app/components/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Antoine de Veyrac, Développeur React Freelance",
  description:
    "Parcours professionnel d'Antoine de Veyrac, développeur fullstack React et React Native freelance avec 10 ans d'expérience.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    url: "https://antoinedeveyrac.fr/resume",
    title: "CV — Antoine de Veyrac",
    description:
      "Parcours professionnel d'Antoine de Veyrac, développeur fullstack React freelance.",
    siteName: "Antoine de Veyrac — Portfolio",
  },
};

const experiences = [
  {
    period: "07/2025 – Présent",
    location: "Amiens, France",
    title: "Développeur / Founder",
    company: "Lily",
    description:
      "Création complète d'une application mobile de soin des plantes — du concept au produit publié sur l'App Store (note 4.8). Seul développeur et product owner : architecture technique, design UI/UX, développement, marketing, SEO, acquisition et monétisation. Plus de 3 500 plantes enregistrées et 1 200 utilisateurs actifs en 4 mois de beta.",
    techs: [
      "React Native",
      "Expo",
      "Effect.js",
      "PostgreSQL",
      "Redis",
      "OpenAI",
      "Drizzle",
      "pgvector",
      "Bun",
      "GitHub Actions",
    ],
    missions: [
      "Architecture monorepo 9 packages TypeScript (api, app, db, shared, web, admin, mcp, knowledge-db, plant-scanner) avec Bun et Turborepo.",
      "Backend API 100% Effect.js : injection de dépendances via Layers, erreurs typées avec Schema.TaggedError, 40+ services (auth, AI, push, gamification, social, weather, scheduling).",
      "Chat IA avec streaming (Vercel AI SDK) et contexte RAG personnalisé via pgvector — historique de soins, santé et environnement de chaque plante. Taux d'engagement de 73% sur les utilisateurs actifs.",
      "Scanner de plantes natif (module Expo custom) pour l'identification de 15 000+ espèces et le diagnostic de maladies via vision IA.",
      "Système de gamification complet : achievements, milestones, streaks de soins — augmentation de +40% de la rétention J7.",
      "Système event-driven (Redis pub/sub) pour notifications push, planification de soins et tips quotidiens via 6 schedulers dédiés.",
      "Fonctionnalités sociales : profils publics, follow, rooms par pièce, délégation de soins entre utilisateurs.",
      "Site marketing Next.js 16 bilingue (en/fr) avec blog SEO, JSON-LD, sitemap, i18n — 8 000 visites/mois organiques.",
      "Dashboard admin (Vite + React 19) pour modération, analytics et gestion des gift codes.",
      "Serveur MCP (Model Context Protocol) pour interactions IA avancées avec l'API via @effect/ai et @effect/rpc.",
      "Pipeline CI/CD complet : 5 workflows GitHub Actions (CI, build iOS, OTA update, manual build), tests automatisés, builds TestFlight en < 8 min.",
      "Modèle freemium (4,99€/mois ou 29,99€/an) avec RevenueCat, 7 jours d'essai gratuit — taux de conversion free-to-paid de 6,2%.",
    ],
  },
  {
    period: "06/2024 – 07/2025",
    location: "Lille, France",
    title: "Développeur fullstack",
    company: "Miles Republic",
    description:
      "Plateforme marketplace pour les organisateurs de courses à pied (trail, marathon, ultra). Refonte de la brique e-commerce servant 150 000+ coureurs inscrits et 800+ événements par an. Travail en équipe de 4 développeurs avec méthodologie Scrum.",
    techs: ["Next.js", "Node.js", "Prisma", "React", "MedusaJS", "Stripe"],
    missions: [
      "Développement de modules custom MedusaJS pour l'automatisation complète du cycle de paiement : encaissement Stripe, annulations partielles, remboursements automatiques et gestion des litiges — réduction de 60% du volume de tickets support.",
      "Intégration Stripe avancée : webhooks, payment intents, gestion multi-devises, remboursements conditionnels et réconciliation comptable automatisée.",
      "Optimisation des requêtes critiques et mise en place de stratégies de caching, réduisant le temps de chargement moyen de 3,2s à 1,1s.",
      "Conception d'une architecture de réplication en lecture (leader-based replication) supportant 15 000 requêtes/min en pic d'inscription.",
      "Migration progressive de l'API REST vers des endpoints optimisés avec Prisma, réduisant la taille des payloads de 45%.",
    ],
  },
  {
    period: "10/2021 – 06/2024",
    location: "France",
    title: "Développeur fullstack",
    company: "Freelance",
    description:
      "Activité freelance orientée web3 et applications mobiles. Collaboration avec 12+ clients sur des projets allant du MVP à la refonte complète, générant un chiffre d'affaires cumulé de 180K€ sur la période.",
    techs: [
      "GraphQL",
      "Rust",
      "Solidity",
      "Anchor",
      "CosmWasm",
      "React Native",
    ],
    missions: [
      "Développement de 3 smart contracts déployés en production sur Solana et Ethereum, gérant 250K€+ de volume transactionnel.",
      "Création de Smashpros (open source, 400+ utilisateurs actifs), outil de suivi de performances pour les communautés gaming locales.",
      "Développement de bots Discord et Telegram pour le trading crypto — 1 200+ utilisateurs actifs sur les serveurs déployés.",
      "Livraison de 8 applications mobiles (React Native) et 4 applications web pour des clients dans la finance, le gaming et l'immobilier.",
      "Architecture et design de systèmes distribués pour des applications à forte charge (10K+ utilisateurs simultanés).",
    ],
  },
  {
    period: "09/2016 – 10/2021",
    location: "Amiens, France",
    title: "Développeur fullstack",
    company: "Ewill",
    description:
      "Agence de développement web et mobile à Amiens. Évolution du poste de développeur junior à lead technique sur les projets mobiles en 2 ans. Responsable de la création du pôle mobile de l'entreprise, qui a généré 35% du CA annuel dès sa deuxième année.",
    techs: [
      "React",
      "Angular",
      "Vue.js",
      "React Native",
      "Node.js",
      "PHP",
      "Python",
    ],
    missions: [
      "Développement de 15+ applications mobiles et web pour des clients comme la Chambre des Notaires de Paris, Decayeux et Enedis.",
      "Création du pôle développement mobile (React Native) — 6 apps publiées sur les stores, 50K+ téléchargements cumulés.",
      "Formation et mentorat de 8 stagiaires et développeurs juniors sur React et React Native.",
      "R&D sur des sujets innovants : application de pilotage de drone (partenariat Enedis), bornes connectées IoT, prototypage imprimante 3D.",
      "Gestion directe de la relation client sur 10+ projets simultanés, avec un taux de satisfaction de 95%.",
    ],
  },
];

const education = [
  {
    period: "2017 – 2019",
    location: "Lille, France",
    title: "Master Informatique",
    school: "ENIGMA",
    details: [
      "Projet de développement fullstack et mobile",
      "Management de base de données (SQL, NoSQL)",
      "Data science (R, Pandas, NumPy)",
      "Framework de hacking (Metasploit, Wireshark, Nmap)",
      "Méthodologies Agile et Scrum",
    ],
  },
  {
    period: "2016 – 2017",
    location: "Lille, France",
    title: "Bachelor Développement web",
    school: "Efficom",
    details: [
      "Langages de programmation (PHP, JavaScript)",
      "Principes de base du management",
      "Projet e-commerce from scratch (Node.js, React, React Native)",
    ],
  },
  {
    period: "2014 – 2016",
    location: "Lens, France",
    title: "DUT MMI",
    school: "IUT",
    details: [
      "Programmation (PHP, SQL, JavaScript, HTML/CSS)",
      "Design (suite Adobe)",
      "Mathématiques (statistiques, algorithmes)",
      "Administration de serveurs, networking",
    ],
  },
];

const skills = {
  langages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML",
    "CSS",
    "Swift",
    "Rust",
    "Solidity",
  ],
  frameworks: [
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "AngularJS",
    "Vue.js",
    "Effect",
    "GraphQL",
    "Prisma",
  ],
  infra: [
    "Docker",
    "AWS",
    "GCP",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Git",
    "CI/CD",
  ],
  architecture: [
    "Load balancing",
    "Caching",
    "Replication",
    "Monorepo",
    "BDD/TDD",
    "Event-driven",
  ],
  blockchain: ["Solana", "Ethereum", "Avalanche", "Cosmos", "Hardhat", "Anchor"],
};

const languages = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "Bilingue" },
  { name: "Espagnol", level: "Élémentaire" },
];

export default function Page() {
  return (
    <div className="sm:max-w-[80%]">
      <Title>CV</Title>

      {/* Expériences */}
      <section className="mt-10 mb-16">
        <Subtitle className="mb-6">Expériences</Subtitle>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="border-t border-current pt-5"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-parnaso text-2xl sm:text-3xl">
                  {exp.title}
                </h3>
                <span className="font-neue text-sm uppercase tracking-wider text-neutral-500">
                  {exp.period}
                </span>
              </div>
              <p className="font-neue text-lg font-medium">
                {exp.company}{" "}
                <span className="text-neutral-500 font-normal">
                  — {exp.location}
                </span>
              </p>
              <p className="font-neue text-base text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3 mb-3">
                {exp.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-neue text-xs uppercase tracking-wider border border-current px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="font-neue text-base space-y-1.5">
                {exp.missions.map((mission) => (
                  <li key={mission} className="flex gap-2">
                    <span className="text-green-400 mt-1 shrink-0">—</span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Formation */}
      <section className="mb-16">
        <Subtitle className="mb-6">Formation</Subtitle>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="border-t border-current pt-5"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="font-parnaso text-2xl sm:text-3xl">
                  {edu.title}
                </h3>
                <span className="font-neue text-sm uppercase tracking-wider text-neutral-500">
                  {edu.period}
                </span>
              </div>
              <p className="font-neue text-lg font-medium">
                {edu.school}{" "}
                <span className="text-neutral-500 font-normal">
                  — {edu.location}
                </span>
              </p>
              <ul className="font-neue text-base mt-3 space-y-1">
                {edu.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="text-green-400 mt-1 shrink-0">—</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compétences */}
      <section className="mb-16">
        <Subtitle className="mb-6">Compétences</Subtitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-neue text-sm uppercase tracking-wider font-medium mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-neue text-sm border border-current px-2 py-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Langues */}
      <section className="mb-16">
        <Subtitle className="mb-6">Langues</Subtitle>
        <div className="grid grid-cols-3 gap-4 max-w-md">
          {languages.map((lang) => (
            <div key={lang.name}>
              <p className="font-neue text-lg">{lang.name}</p>
              <p className="font-neue text-sm text-neutral-500">
                {lang.level}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
