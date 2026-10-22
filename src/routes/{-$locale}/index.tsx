import AllProjects from "@/components/AllProjects";
import StyledLink from "@/components/StyledLink";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import {
  LOCALES,
  type Locale,
  localeFromParams,
  localizedPath,
} from "@/lib/i18n";
import { absoluteUrl, seo } from "@/lib/seo";
import { messages, useMessages } from "@/messages";
import { createFileRoute } from "@tanstack/react-router";

function homepageJsonLd(locale: Locale) {
  const m = messages[locale].home.seo;
  const pageUrl = absoluteUrl(localizedPath("/", locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://antoinedeveyrac.fr/#website",
        url: "https://antoinedeveyrac.fr",
        name: "Antoine de Veyrac - Portfolio",
        description: m.websiteDescription,
        inLanguage: locale,
        publisher: { "@id": "https://antoinedeveyrac.fr/#person" },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}/#profilepage`,
        url: pageUrl,
        name: "Antoine de Veyrac - Portfolio",
        isPartOf: { "@id": "https://antoinedeveyrac.fr/#website" },
        mainEntity: { "@id": "https://antoinedeveyrac.fr/#person" },
        inLanguage: locale,
      },
      {
        "@type": "Person",
        "@id": "https://antoinedeveyrac.fr/#person",
        name: "Antoine de Veyrac",
        url: "https://antoinedeveyrac.fr",
        email: "antoine.2vey@gmail.com",
        jobTitle: m.jobTitle,
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
        knowsLanguage: [...LOCALES],
        sameAs: [
          "https://www.linkedin.com/in/antoine-de-veyrac-31b467112/",
          "https://github.com/antoine2vey",
        ],
      },
    ],
  };
}

export const Route = createFileRoute("/{-$locale}/")({
  head: ({ params }) => {
    const locale = localeFromParams(params);
    const m = messages[locale].home.seo;
    return seo({
      title: m.title,
      description: m.description,
      locale,
      path: "/",
      author: true,
      applicationName: "portfolio",
      openGraph: {
        type: "website",
        title: m.socialTitle,
        description: m.socialDescription,
      },
      twitter: {
        card: "summary_large_image",
        title: m.socialTitle,
        description: m.socialDescription,
      },
      jsonLd: homepageJsonLd(locale),
    });
  },
  component: Page,
});

function Page() {
  const m = useMessages().home;
  return (
    <>
      <div className="container px-6 sm:px-12 mb-10 sm:mb-20">
        <Title>
          {m.intro.name} <br />
          {m.intro.body}{" "}
          <StyledLink href="mailto:antoine.2vey@gmail.com">
            {m.intro.contact}
          </StyledLink>{" "}
          {m.intro.outro}
        </Title>
      </div>

      <div className="mb-10 sm:mb-20">
        <AllProjects />
      </div>

      <div className="container px-6 sm:px-12 mb-10 sm:mb-20">
        <Title as="h2">{m.pitch}</Title>
      </div>

      <div className="mb-10 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-0 px-6 sm:px-12">
          {m.lists.map((list) => (
            <div key={list.title}>
              <Subtitle as="h3">{list.title}</Subtitle>
              <ul className="font-neue text-xl font-normal">
                {list.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
