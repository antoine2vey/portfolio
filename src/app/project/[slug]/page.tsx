import AllProjects from "@/app/components/AllProjects";
import JsonLd from "@/app/components/JsonLd";
import ProjectContent from "@/app/components/ProjectContent";
import StyledLink from "@/app/components/StyledLink";
import Subtitle from "@/app/components/Subtitle";
import Title from "@/app/components/Title";
import { getAllSlugs, getProject } from "@/lib/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const { frontmatter: fm, content } = project;

  return {
    title: `${fm.title} — Antoine de Veyrac`,
    description: content.slice(0, 160),
    publisher: "Antoine de Veyrac",
    authors: [
      {
        url: "https://antoinedeveyrac.fr",
        name: "Antoine de Veyrac",
      },
    ],
    openGraph: {
      type: "article",
      title: fm.title,
      description: content.slice(0, 160),
      siteName: "Antoine de Veyrac — Portfolio",
      images: fm.images.map((image) => ({ url: image })),
    },
  };
}

export default async function Page({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { frontmatter: fm, content } = project;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": fm.openSource ? "SoftwareSourceCode" : "CreativeWork",
        "@id": `https://antoinedeveyrac.fr/project/${slug}/#work`,
        name: fm.title,
        description: content.slice(0, 200),
        url: `https://antoinedeveyrac.fr/project/${slug}`,
        author: { "@id": "https://antoinedeveyrac.fr/#person" },
        keywords: fm.tags,
        ...(fm.images.length > 0 && { image: fm.images }),
        ...(fm.openSource &&
          fm.github && {
            codeRepository: fm.github.map((g) => g.url),
          }),
        isPartOf: { "@id": "https://antoinedeveyrac.fr/#website" },
        inLanguage: "fr",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://antoinedeveyrac.fr",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: fm.title,
            item: `https://antoinedeveyrac.fr/project/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={projectJsonLd} />
      <div className="flex flex-col sm:flex-row mb-10">
        <article className="flex-1 order-2 sm:order-1 mr-10 sm:order-2">
          <Subtitle as="h1">{fm.title}</Subtitle>
          <ProjectContent
            source={content}
            className="font-parnaso text-3xl sm:text-5xl leading-tight"
          />
        </article>
        <aside className="order-1 sm:order-2 grid grid-cols-2 sm:grid-cols-1">
          <div>
            <Subtitle as="h3" className="mb-2">
              tech
            </Subtitle>
            <ul className="mb-4">
              {fm.tags.map((tag) => (
                <li className="font-neue text-xl" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Subtitle as="h3" className="mb-2">
              role{fm.roles.length > 1 ? "s" : ""}
            </Subtitle>
            <ul className="mb-4">
              {fm.roles.map((role) => (
                <li className="font-neue text-xl" key={role}>
                  {role}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Subtitle as="h3" className="mb-2">
              infos
            </Subtitle>
            <div className="mb-4">
              <p
                className={`font-neue text-xl ${!fm.wip && "line-through"}`}
              >
                finished
              </p>
              <p
                className={`font-neue text-xl ${!fm.professional && "line-through"}`}
              >
                pro
              </p>
              <p
                className={`font-neue text-xl ${!fm.openSource && "line-through"}`}
              >
                open source
              </p>
              {fm.github?.map((app) => (
                <p key={app.name} className="pl-3">
                  <StyledLink href={app.url} small>
                    <span className="font-neue lowercase">{app.name}</span>
                  </StyledLink>
                </p>
              ))}
            </div>
          </div>
          <div>
            {fm.links.length > 0 && (
              <>
                <Subtitle as="h3" className="mb-2">
                  lien{fm.links.length > 1 ? "s" : ""}
                </Subtitle>
                <div className="mb-4">
                  {fm.links.map((link) => (
                    <p key={link.slug} className="pl-3">
                      <StyledLink href={link.url} small>
                        <span className="font-neue lowercase">
                          {link.slug}
                        </span>
                      </StyledLink>
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </aside>
      </div>
      <div className="mb-10 sm:mb-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        {fm.images.map((image, i) => (
          <Image
            key={image}
            src={image}
            alt={`${fm.title} - screenshot ${i + 1}`}
            width={1100}
            height={618}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
            className="rounded-md"
          />
        ))}
      </div>
      <div className="mb-10 sm:mb-20 -mx-6 sm:-mx-12">
        <AllProjects excludedSlug={slug} />
      </div>
    </>
  );
}
