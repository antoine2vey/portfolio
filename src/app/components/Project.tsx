import type { Project as ProjectType } from "@/lib/projects";

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div
      className={`
      border-t border-current px-6 sm:px-12 py-3 sm:py-5 text-xl font-neue font-normal text-xl
    `}
    >
      <div className="container grid grid-cols-3">
        <div>
          <span
            className={`${
              project.frontmatter.professional
                ? `relative
              before:absolute
              before:content-['']
              before:w-full
              before:bg-green-300
              before:h-1
              before:-skew-x-[20deg]
              before:translate-y-1
              before:bottom-0`
                : ""
            }
          `}
          >
            {project.frontmatter.title}
          </span>
        </div>
        <div className="col-span-2 hidden sm:block">
          {project.frontmatter.tags.map((tag, i) => (
            <span key={tag}>
              {tag}
              {i === project.frontmatter.tags.length - 1 || ", "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
