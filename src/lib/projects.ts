import type { ComponentType } from "react";
import type { Locale } from "./i18n";

type GithubLink = {
  name: string;
  url: string;
};

type ExternalLink = {
  slug: string;
  url: string;
};

export type ProjectFrontmatter = {
  title: string;
  summary: string;
  tags: string[];
  roles: string[];
  wip: boolean;
  openSource: boolean;
  professional: boolean;
  github?: GithubLink[];
  images: string[];
  links: ExternalLink[];
};

// Fields absent here come from the French file.
type TranslatedFrontmatter = Pick<ProjectFrontmatter, "summary"> &
  Partial<Pick<ProjectFrontmatter, "title" | "roles" | "links">>;

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
};

type MdxModule<Frontmatter> = {
  frontmatter: Frontmatter;
  default: ComponentType;
};

type Catalog = {
  projects: Project[];
  content: Map<string, ComponentType>;
};

const slugOf = (file: string) => file.replace(/^.*\/(.+)\.mdx$/, "$1");

function bySlug<M>(modules: Record<string, M>): Map<string, M> {
  return new Map(
    Object.entries(modules).map(([file, module]) => [slugOf(file), module]),
  );
}

const frenchModules = bySlug(
  import.meta.glob<MdxModule<ProjectFrontmatter>>("../content/projects/*.mdx", {
    eager: true,
  }),
);

const englishModules = bySlug(
  import.meta.glob<MdxModule<TranslatedFrontmatter>>(
    "../content/projects/en/*.mdx",
    { eager: true },
  ),
);

function buildCatalogs(): Record<Locale, Catalog> {
  const fr: Catalog = { projects: [], content: new Map() };
  const en: Catalog = { projects: [], content: new Map() };

  for (const [slug, french] of frenchModules) {
    const english = englishModules.get(slug);
    if (!english) throw new Error(`Missing English translation for ${slug}`);
    fr.projects.push({ slug, frontmatter: french.frontmatter });
    fr.content.set(slug, french.default);
    en.projects.push({
      slug,
      frontmatter: { ...french.frontmatter, ...english.frontmatter },
    });
    en.content.set(slug, english.default);
  }

  return { fr, en };
}

const catalogs = buildCatalogs();

export function getProjects(locale: Locale): Project[] {
  return catalogs[locale].projects;
}

export function getProject(slug: string, locale: Locale): Project | undefined {
  return catalogs[locale].projects.find((project) => project.slug === slug);
}

export function getProjectContent(
  slug: string,
  locale: Locale,
): ComponentType | undefined {
  return catalogs[locale].content.get(slug);
}
