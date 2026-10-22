import type { Messages } from "./fr";

export const en: Messages = {
  languageName: "English",
  nav: {
    home: "Home",
    resume: "Resume",
    legal: "Legal notice",
  },
  footer: {
    contactIntro: "Want to know more? Get in touch",
    contactEmail: "here",
    contactOr: "or on",
    contactLinkedin: "LinkedIn",
  },
  allProjects: {
    heading: "My projects",
    professional: "Professional",
  },
  home: {
    seo: {
      title: "Antoine de Veyrac - Freelance React Developer | Portfolio",
      description:
        "Freelance fullstack React and React Native developer with 10 years of experience building web, mobile and web3 apps. Browse my professional projects and get in touch.",
      socialTitle: "Antoine de Veyrac - Freelance React Developer",
      socialDescription:
        "Freelance fullstack React and React Native developer with 10 years of experience building web, mobile and web3 apps.",
      websiteDescription:
        "Portfolio of Antoine de Veyrac, freelance fullstack developer and React expert",
      jobTitle: "Freelance Fullstack React Developer",
    },
    intro: {
      name: "Antoine de Veyrac,",
      body: "fullstack developer with 10 years of experience, React expert and backend architect. I build robust, scalable web, mobile and web3 apps with functional programming (Effect.js), strong typing and event-driven architectures. Feel free to",
      contact: "get in touch",
      outro: "if you want to work together.",
    },
    pitch:
      "I believe backend quality decides product quality. I design APIs with dependency injection, typed errors and functional composition, which keeps systems testable, maintainable and ready to scale. From the TypeScript monorepo to automated CI/CD, I hold myself to the same standard on technical rigor as on shipping.",
    lists: [
      {
        title: "Services",
        items: [
          "APIs & backend architecture",
          "web apps",
          "mobile apps (ios & android)",
          "AI & RAG integrations",
          "web3 & smart contracts",
          "CI/CD & DevOps",
        ],
      },
      {
        title: "Expertise",
        items: [
          "react - 10 years",
          "react native - 8 years",
          "tailwind - 6 years",
          "html/css - 12 years",
          "nodejs - 10 years",
          "javascript - 12 years",
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
        title: "Languages & tools",
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
      title: "Resume - Antoine de Veyrac, Freelance React Developer",
      description:
        "Work history of Antoine de Veyrac, freelance fullstack React and React Native developer with 10 years of experience.",
      socialTitle: "Resume - Antoine de Veyrac",
      socialDescription:
        "Work history of Antoine de Veyrac, freelance fullstack React developer.",
    },
    title: "Resume",
    headings: {
      experiences: "Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
    },
    experiences: [
      {
        period: "07/2025 - Present",
        location: "Amiens, France",
        title: "Developer / Founder",
        company: "Lily",
        description:
          "Built a plant care mobile app end to end, from the first idea to a product live on the App Store (rated 4.8). Sole developer and product owner, in charge of technical architecture, UI/UX design, development, marketing, SEO, acquisition and monetization. Over 3,500 plants added and 1,200 active users in 4 months of beta.",
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
          "TypeScript monorepo of 9 packages (api, app, db, shared, web, admin, mcp, knowledge-db, plant-scanner) with Bun and Turborepo.",
          "Backend API written 100% in Effect.js, with dependency injection through Layers, typed errors with Schema.TaggedError and 40+ services (auth, AI, push, gamification, social, weather, scheduling).",
          "Streaming AI chat (Vercel AI SDK) with per-plant RAG context through pgvector (care history, health and environment of each plant). 73% engagement rate among active users.",
          "Native plant scanner (custom Expo module) that identifies 15,000+ species and diagnoses diseases with AI vision.",
          "Full gamification system with achievements, milestones and care streaks. Raised D7 retention by 40%.",
          "Event-driven system (Redis pub/sub) for push notifications, care scheduling and daily tips, run by 6 dedicated schedulers.",
          "Social features with public profiles, follows, rooms for each part of the home and care delegation between users.",
          "Bilingual (en/fr) Next.js 16 marketing site with an SEO blog, JSON-LD, sitemap and i18n. 8,000 organic visits per month.",
          "Admin dashboard (Vite + React 19) for moderation, analytics and gift code management.",
          "MCP (Model Context Protocol) server for advanced AI interactions with the API through @effect/ai and @effect/rpc.",
          "Full CI/CD pipeline with 5 GitHub Actions workflows (CI, iOS build, OTA update, manual build), automated tests and TestFlight builds in under 8 min.",
          "Freemium model (€4.99/month or €29.99/year) with RevenueCat and a 7-day free trial. 6.2% free-to-paid conversion rate.",
        ],
      },
      {
        period: "06/2024 - 07/2025",
        location: "Lille, France",
        title: "Fullstack Developer",
        company: "Miles Republic",
        description:
          "Marketplace platform for running race organizers (trail, marathon, ultra). Rebuilt the e-commerce layer that serves 150,000+ registered runners and 800+ events a year. Worked in a team of 4 developers using Scrum.",
        techs: ["Next.js", "Node.js", "Prisma", "React", "MedusaJS", "Stripe"],
        missions: [
          "Built custom MedusaJS modules that automate the whole payment cycle, covering Stripe charges, partial cancellations, automatic refunds and dispute handling. Cut support ticket volume by 60%.",
          "Advanced Stripe integration with webhooks, payment intents, multi-currency support, conditional refunds and automated accounting reconciliation.",
          "Optimized critical queries and added caching strategies, bringing average load time down from 3.2s to 1.1s.",
          "Designed a read replication architecture (leader-based replication) that handles 15,000 requests/min at registration peaks.",
          "Migrated the REST API step by step to optimized Prisma endpoints, cutting payload size by 45%.",
        ],
      },
      {
        period: "10/2021 - 06/2024",
        location: "France",
        title: "Fullstack Developer",
        company: "Freelance",
        description:
          "Freelance work focused on web3 and mobile apps. Worked with 12+ clients on projects ranging from MVPs to full rebuilds, for €180K in total revenue over the period.",
        techs: [
          "GraphQL",
          "Rust",
          "Solidity",
          "Anchor",
          "CosmWasm",
          "React Native",
        ],
        missions: [
          "Built 3 smart contracts running in production on Solana and Ethereum, handling €250K+ in transaction volume.",
          "Created Smashpros (open source, 400+ active users), a performance tracking tool for local gaming communities.",
          "Built Discord and Telegram bots for crypto trading, with 1,200+ active users across the servers they run on.",
          "Shipped 8 mobile apps (React Native) and 4 web apps for clients in finance, gaming and real estate.",
          "Designed distributed systems for high-load applications (10K+ concurrent users).",
        ],
      },
      {
        period: "09/2016 - 10/2021",
        location: "Amiens, France",
        title: "Fullstack Developer",
        company: "Ewill",
        description:
          "Web and mobile development agency in Amiens. Went from junior developer to technical lead on mobile projects in 2 years. Set up the company's mobile team, which brought in 35% of annual revenue from its second year.",
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
          "Built 15+ mobile and web apps for clients such as the Chambre des Notaires de Paris, Decayeux and Enedis.",
          "Set up the mobile development team (React Native), with 6 apps published on the stores and 50K+ total downloads.",
          "Trained and mentored 8 interns and junior developers on React and React Native.",
          "R&D on new kinds of projects, including a drone control app (Enedis partnership), connected IoT kiosks and 3D printer prototyping.",
          "Owned the client relationship on 10+ concurrent projects, with a 95% satisfaction rate.",
        ],
      },
    ],
    education: [
      {
        period: "2017 - 2019",
        location: "Lille, France",
        title: "Master's in Computer Science",
        school: "ENIGMA",
        details: [
          "Fullstack and mobile development project",
          "Database management (SQL, NoSQL)",
          "Data science (R, Pandas, NumPy)",
          "Hacking frameworks (Metasploit, Wireshark, Nmap)",
          "Agile and Scrum methodologies",
        ],
      },
      {
        period: "2016 - 2017",
        location: "Lille, France",
        title: "Bachelor's in Web Development",
        school: "Efficom",
        details: [
          "Programming languages (PHP, JavaScript)",
          "Management fundamentals",
          "E-commerce project from scratch (Node.js, React, React Native)",
        ],
      },
      {
        period: "2014 - 2016",
        location: "Lens, France",
        title: "DUT MMI (2-year degree in Multimedia and Internet)",
        school: "IUT",
        details: [
          "Programming (PHP, SQL, JavaScript, HTML/CSS)",
          "Design (Adobe suite)",
          "Mathematics (statistics, algorithms)",
          "Server administration, networking",
        ],
      },
    ],
    skills: [
      {
        category: "languages",
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
      { name: "French", level: "Native" },
      { name: "English", level: "Bilingual" },
      { name: "Spanish", level: "Elementary" },
    ],
  },
  legal: {
    seo: {
      title: "Legal notice - Antoine de Veyrac",
      description: "Legal notice for antoinedeveyrac.fr",
    },
    title: "Legal notice",
    publisher: {
      heading: "Site publisher",
      lines: ["Antoine de Veyrac", "Freelance developer"],
      contactLabel: "Contact:",
    },
    sections: [
      {
        heading: "Hosting",
        text: "This site runs on a dedicated server (nginx/Ubuntu).",
      },
      {
        heading: "Intellectual property",
        text: "All content on this site (text, images, code) belongs to Antoine de Veyrac unless stated otherwise. Do not reproduce it without prior permission.",
      },
      {
        heading: "Personal data",
        text: "This site uses Google Analytics to measure traffic. No personal data is collected for commercial purposes. You can turn off tracking in your browser settings.",
      },
    ],
  },
  project: {
    breadcrumbHome: "Home",
    tech: "tech",
    roles: (count: number) => (count > 1 ? "roles" : "role"),
    infos: "info",
    finished: "finished",
    professional: "pro",
    openSource: "open source",
    links: (count: number) => (count > 1 ? "links" : "link"),
    screenshotAlt: (title: string, index: number) =>
      `${title} - screenshot ${index}`,
  },
};
