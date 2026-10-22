import type { ComponentType } from "react";

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

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
};

type ProjectModule = {
  frontmatter: ProjectFrontmatter;
  default: ComponentType;
};

const modules = import.meta.glob<ProjectModule>("../content/projects/*.mdx", {
  eager: true,
});

const entries = Object.entries(modules).map(([file, module]) => ({
  slug: file.replace(/^.*\/(.+)\.mdx$/, "$1"),
  module,
}));

export const projects: Project[] = entries.map(({ slug, module }) => ({
  slug,
  frontmatter: module.frontmatter,
}));

export const projectContent: Record<string, ComponentType> = Object.fromEntries(
  entries.map(({ slug, module }) => [slug, module.default]),
);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
