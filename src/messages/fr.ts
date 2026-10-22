export const fr = {
  languageName: "Français",
  nav: {
    home: "Accueil",
    resume: "CV",
    legal: "Mentions légales",
  },
  footer: {
    contactIntro: "Si vous souhaitez en savoir plus, contactez moi",
    contactEmail: "ici",
    contactOr: "ou sur",
    contactLinkedin: "Linkedin",
  },
  allProjects: {
    heading: "Mes projets",
    professional: "Professionel",
  },
  home: {
    seo: {
      title: "Antoine de Veyrac - Développeur React Freelance | Portfolio",
      description:
        "Développeur fullstack React et React Native freelance. 10 ans d'expérience en applications web, mobile et web3. Découvrez mes projets professionnels et contactez-moi.",
      socialTitle: "Antoine de Veyrac - Développeur React Freelance",
      socialDescription:
        "Développeur fullstack React et React Native freelance. 10 ans d'expérience en applications web, mobile et web3.",
      websiteDescription:
        "Portfolio d'Antoine de Veyrac, développeur fullstack expert React",
      jobTitle: "Développeur Fullstack React",
    },
    intro: {
      name: "Antoine de Veyrac,",
      body: "développeur fullstack avec 10 ans d'expérience, expert React et architecte backend. Adepte de la programmation fonctionnelle (Effect.js), du typage fort et des architectures event-driven pour des applications web, mobiles et web3 robustes et scalables. N'hésitez pas à me",
      contact: "contacter",
      outro: "si vous souhaitez collaborer.",
    },
    pitch:
      "Convaincu que la qualité du backend détermine la qualité du produit. Je conçois des APIs avec injection de dépendances, erreurs typées et composition fonctionnelle : des pratiques qui garantissent des systèmes testables, maintenables et prêts à scaler. Du monorepo TypeScript à la CI/CD automatisée, je m'engage sur la rigueur technique autant que sur la livraison.",
    lists: [
      {
        title: "Mes services",
        items: [
          "APIs & architecture backend",
          "applications web",
          "appli mobiles (ios & android)",
          "intégrations IA & RAG",
          "web3 & smart contracts",
          "CI/CD & DevOps",
        ],
      },
      {
        title: "Expertise",
        items: [
          "react - 10ans",
          "react native - 8ans",
          "tailwind - 6ans",
          "html/css - 12ans",
          "nodejs - 10ans",
          "javascript - 12ans",
        ],
      },
      {
        title: "Backend & Infra",
        items: [
          "effect.js",
          "postgresql / redis",
          "event-driven / pub-sub",
          "docker / CI-CD",
          "cloud (gcp, aws)",
          "monorepo / turborepo",
        ],
      },
      {
        title: "Langages & outils",
        items: [
          "typescript / javascript",
          "python",
          "rust",
          "solidity",
          "nextjs / prisma / drizzle",
          "bun / vitest / biome",
        ],
      },
    ],
  },
  resume: {
    seo: {
      title: "CV - Antoine de Veyrac, Développeur React Freelance",
      description:
        "Parcours professionnel d'Antoine de Veyrac, développeur fullstack React et React Native freelance avec 10 ans d'expérience.",
      socialTitle: "CV - Antoine de Veyrac",
      socialDescription:
        "Parcours professionnel d'Antoine de Veyrac, développeur fullstack React freelance.",
    },
    title: "CV",
    headings: {
      experiences: "Expériences",
      education: "Formation",
      skills: "Compétences",
      languages: "Langues",
    },
    experiences: [
      {
        period: "07/2025 – Présent",
        location: "Amiens, France",
        title: "Développeur / Founder",
        company: "Lily",
        description:
          "Création complète d'une application mobile de soin des plantes, du concept au produit publié sur l'App Store (note 4.8). Seul développeur et product owner : architecture technique, design UI/UX, développement, marketing, SEO, acquisition et monétisation. Plus de 3 500 plantes enregistrées et 1 200 utilisateurs actifs en 4 mois de beta.",
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
          "Chat IA avec streaming (Vercel AI SDK) et contexte RAG personnalisé via pgvector (historique de soins, santé et environnement de chaque plante). Taux d'engagement de 73% sur les utilisateurs actifs.",
          "Scanner de plantes natif (module Expo custom) pour l'identification de 15 000+ espèces et le diagnostic de maladies via vision IA.",
          "Système de gamification complet : achievements, milestones, streaks de soins. Augmentation de +40% de la rétention J7.",
          "Système event-driven (Redis pub/sub) pour notifications push, planification de soins et tips quotidiens via 6 schedulers dédiés.",
          "Fonctionnalités sociales : profils publics, follow, rooms par pièce, délégation de soins entre utilisateurs.",
          "Site marketing Next.js 16 bilingue (en/fr) avec blog SEO, JSON-LD, sitemap, i18n. 8 000 visites/mois organiques.",
          "Dashboard admin (Vite + React 19) pour modération, analytics et gestion des gift codes.",
          "Serveur MCP (Model Context Protocol) pour interactions IA avancées avec l'API via @effect/ai et @effect/rpc.",
          "Pipeline CI/CD complet : 5 workflows GitHub Actions (CI, build iOS, OTA update, manual build), tests automatisés, builds TestFlight en < 8 min.",
          "Modèle freemium (4,99€/mois ou 29,99€/an) avec RevenueCat, 7 jours d'essai gratuit. Taux de conversion free-to-paid de 6,2%.",
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
          "Développement de modules custom MedusaJS pour l'automatisation complète du cycle de paiement : encaissement Stripe, annulations partielles, remboursements automatiques et gestion des litiges. Réduction de 60% du volume de tickets support.",
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
          "Développement de bots Discord et Telegram pour le trading crypto, avec 1 200+ utilisateurs actifs sur les serveurs déployés.",
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
          "Création du pôle développement mobile (React Native) : 6 apps publiées sur les stores, 50K+ téléchargements cumulés.",
          "Formation et mentorat de 8 stagiaires et développeurs juniors sur React et React Native.",
          "R&D sur des sujets innovants : application de pilotage de drone (partenariat Enedis), bornes connectées IoT, prototypage imprimante 3D.",
          "Gestion directe de la relation client sur 10+ projets simultanés, avec un taux de satisfaction de 95%.",
        ],
      },
    ],
    education: [
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
    ],
    skills: [
      {
        category: "langages",
        items: [
          "JavaScript",
          "TypeScript",
          "Python",
          "HTML",
          "CSS",
          "Swift",
          "Rust",
          "Solidity",
        ],
      },
      {
        category: "frameworks",
        items: [
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
      },
      {
        category: "infra",
        items: [
          "Docker",
          "AWS",
          "GCP",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Git",
          "CI/CD",
        ],
      },
      {
        category: "architecture",
        items: [
          "Load balancing",
          "Caching",
          "Replication",
          "Monorepo",
          "BDD/TDD",
          "Event-driven",
        ],
      },
      {
        category: "blockchain",
        items: [
          "Solana",
          "Ethereum",
          "Avalanche",
          "Cosmos",
          "Hardhat",
          "Anchor",
        ],
      },
    ],
    languages: [
      { name: "Français", level: "Natif" },
      { name: "Anglais", level: "Bilingue" },
      { name: "Espagnol", level: "Élémentaire" },
    ],
  },
  legal: {
    seo: {
      title: "Mentions légales - Antoine de Veyrac",
      description: "Mentions légales du site antoinedeveyrac.fr",
    },
    title: "Mentions légales",
    publisher: {
      heading: "Éditeur du site",
      lines: ["Antoine de Veyrac", "Développeur freelance"],
      contactLabel: "Contact :",
    },
    sections: [
      {
        heading: "Hébergement",
        text: "Ce site est hébergé sur un serveur dédié (nginx/Ubuntu).",
      },
      {
        heading: "Propriété intellectuelle",
        text: "L'ensemble du contenu de ce site (textes, images, code) est la propriété d'Antoine de Veyrac, sauf mention contraire. Toute reproduction est interdite sans autorisation préalable.",
      },
      {
        heading: "Données personnelles",
        text: "Ce site utilise Google Analytics pour mesurer l'audience. Aucune donnée personnelle n'est collectée à des fins commerciales. Vous pouvez désactiver le suivi via les paramètres de votre navigateur.",
      },
    ],
  },
  project: {
    breadcrumbHome: "Accueil",
    tech: "tech",
    roles: (count: number): string => (count > 1 ? "roles" : "role"),
    infos: "infos",
    finished: "finished",
    professional: "pro",
    openSource: "open source",
    links: (count: number): string => (count > 1 ? "liens" : "lien"),
    screenshotAlt: (title: string, index: number) =>
      `${title} - screenshot ${index}`,
  },
};

export type Messages = typeof fr;
