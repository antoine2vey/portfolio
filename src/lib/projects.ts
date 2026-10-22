import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

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
  content: string;
};

function projectPath(slug: string): string {
  return path.join(PROJECTS_DIR, `${slug}.mdx`);
}

function readProject(slug: string): Project {
  const { data, content } = matter(fs.readFileSync(projectPath(slug), "utf-8"));

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content: content.trim(),
  };
}

export function getAllProjects(): Project[] {
  return getAllSlugs().map(readProject);
}

export function getProject(slug: string): Project | undefined {
  if (!fs.existsSync(projectPath(slug))) {
    return undefined;
  }

  return readProject(slug);
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
