import AllProjects from "@/components/AllProjects";
import StyledLink from "@/components/StyledLink";
import Subtitle from "@/components/Subtitle";
import {
  type Locale,
  localeFromParams,
  localizedPath,
  useLocale,
} from "@/lib/i18n";
import { imageSrcSet, imageUrl } from "@/lib/image";
import { type Project, getProject, getProjectContent } from "@/lib/projects";
import { ShareImages, absoluteUrl, seo } from "@/lib/seo";
import { messages, useMessages } from "@/messages";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { preload } from "react-dom";

const IMAGE_SIZES = "(max-width: 768px) 100vw, 50vw";

function projectJsonLd({ slug, frontmatter: fm }: Project, locale: Locale) {
  const url = absoluteUrl(localizedPath(`/project/${slug}`, locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": fm.openSource ? "SoftwareSourceCode" : "CreativeWork",
        "@id": `${url}/#work`,
        name: fm.title,
        description: fm.summary,
        url,
        author: { "@id": "https://antoinedeveyrac.fr/#person" },
        keywords: fm.tags,
        ...(fm.images.length > 0 && { image: fm.images }),
        ...(fm.openSource &&
          fm.github && {
            codeRepository: fm.github.map((g) => g.url),
          }),
        isPartOf: { "@id": "https://antoinedeveyrac.fr/#website" },
        inLanguage: locale,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: messages[locale].project.breadcrumbHome,
            item: absoluteUrl(localizedPath("/", locale)),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: fm.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export const Route = createFileRoute("/{-$locale}/_withHeader/project/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug, localeFromParams(params));
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const locale = localeFromParams(params);
    const { slug, frontmatter: fm } = loaderData;
    return seo({
      title: `${fm.title} - Antoine de Veyrac`,
      description: fm.summary,
      locale,
      path: `/project/${slug}`,
      author: true,
      openGraph: {
        type: "article",
        title: fm.title,
        description: fm.summary,
        images: fm.images,
      },
      jsonLd: projectJsonLd(loaderData, locale),
    });
  },
  component: Page,
});

function Page() {
  const { slug, frontmatter: fm } = Route.useLoaderData();
  const m = useMessages().project;
  const Content = getProjectContent(slug, useLocale());
  const [firstImage] = fm.images;
  if (firstImage) {
    preload(imageUrl(firstImage, 3840), {
      as: "image",
      imageSrcSet: imageSrcSet(firstImage),
      imageSizes: IMAGE_SIZES,
    });
  }

  return (
    <>
      <ShareImages images={fm.images} />
      <div className="flex flex-col sm:flex-row mb-10">
        <article className="flex-1 order-2 mr-10">
          <h1 className="font-parnaso text-4xl sm:text-6xl leading-tight">
            {fm.title}
          </h1>
          <p className="font-parnaso text-2xl sm:text-4xl leading-tight mt-4">
            {fm.summary}
          </p>
          <div className="font-neue text-xl leading-relaxed mt-6 empty:hidden">
            {Content && <Content />}
          </div>
        </article>
        <aside className="order-1 sm:order-2 grid grid-cols-2 sm:grid-cols-1">
          <div>
            <Subtitle as="h3" className="mb-2">
              {m.tech}
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
              {m.roles(fm.roles.length)}
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
              {m.infos}
            </Subtitle>
            <div className="mb-4">
              <p className={`font-neue text-xl ${!fm.wip && "line-through"}`}>
                {m.finished}
              </p>
              <p
                className={`font-neue text-xl ${!fm.professional && "line-through"}`}
              >
                {m.professional}
              </p>
              <p
                className={`font-neue text-xl ${!fm.openSource && "line-through"}`}
              >
                {m.openSource}
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
                  {m.links(fm.links.length)}
                </Subtitle>
                <div className="mb-4">
                  {fm.links.map((link) => (
                    <p key={link.slug} className="pl-3">
                      <StyledLink href={link.url} small>
                        <span className="font-neue lowercase">{link.slug}</span>
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
          <img
            key={image}
            src={imageUrl(image, 3840)}
            srcSet={imageSrcSet(image)}
            sizes={IMAGE_SIZES}
            alt={m.screenshotAlt(fm.title, i + 1)}
            width={1100}
            height={618}
            loading={i === 0 ? undefined : "lazy"}
            decoding="async"
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
