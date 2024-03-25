import Link from "next/link";
import { Project } from "@/app/hooks/useProject";

export default function Project({ project }: { project: Project }) {
  return (
    <div className="border-t border-current px-12 py-5 text-xl font-neue font-normal text-xl">
      <div className="container grid grid-cols-3">
        <div>
          {project.data.title}
        </div>
        <div className="col-span-2 hidden sm:block">
          {project.data.tags.map((tag, i) => {
            return (
              <>
                {tag} {i === project.data.tags.length - 1 || ', '}
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}