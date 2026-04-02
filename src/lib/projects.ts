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

export function getAllProjects(): Project[] {
  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content: content.trim(),
    };
  });
}

export function getProject(slug: string): Project | undefined {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content: content.trim(),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
