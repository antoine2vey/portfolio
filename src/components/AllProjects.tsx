import { projects } from "@/lib/projects";
import { Link } from "@tanstack/react-router";
import Project from "./Project";
import Subtitle from "./Subtitle";

export default function AllProjects({
  excludedSlug,
}: { excludedSlug?: string }) {
  return (
    <>
      <div className="px-6 sm:px-12">
        <Subtitle>
          Mes projets ({" "}
          <span
            className="
          relative
          before:absolute
          before:content-['']
          before:w-full
          before:bg-green-300
          before:h-1
          before:-skew-x-[20deg]
          before:translate-y-1
          before:bottom-0"
          >
            Professionel
          </span>{" "}
          )
        </Subtitle>
      </div>
      <ul className="border-b border-current mt-4">
        {projects
          .filter((project) => project.slug !== excludedSlug)
          .map((project) => (
            <li key={project.slug}>
              <Link
                className="transition-colors ease-in hover:bg-green-300 block"
                to="/{-$locale}/project/$slug"
                params={{ slug: project.slug }}
              >
                <Project project={project} />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
