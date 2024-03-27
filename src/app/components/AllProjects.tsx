import Subtitle from "./Subtitle";
import Project from "./Project";
import Link from "next/link";
import projects from '@/app/data/projects.json'
import { Project as IProject } from "../hooks/useProject";

export default function AllProjects({ excludedSlug }: { excludedSlug?: string }) {
  return (
    <>
      <div className="px-12">
        <Subtitle>Mes projets ( <span className="
          relative
          before:absolute
          before:content-['']
          before:w-full
          before:bg-green-300
          before:h-1
          before:-skew-x-[20deg]
          before:translate-y-1
          before:bottom-0"
        >Professionel</span> )</Subtitle>
      </div>
      <ul className="border-b border-current mt-4">
        {projects.filter(project => project.slug !== excludedSlug).map((project, i) => (
          <li key={project.slug}>
            <Link className="transition-colors ease-in hover:bg-green-300 block" href={`/project/${project.slug}`}>
              <Project
                project={project}
              />
            </Link>
          </li>
        ))} 
      </ul>
    </>
  )
}