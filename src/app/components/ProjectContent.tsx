import { compileMDX } from "next-mdx-remote/rsc";

export default async function ProjectContent({
  source,
  className,
}: { source: string; className?: string }) {
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: false },
  });

  return <div className={className}>{content}</div>;
}
