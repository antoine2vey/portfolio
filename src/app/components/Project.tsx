import { Project as IProject } from "@/app/hooks/useProject";

export default function Project({ project }: { project: IProject }) {
  return (
    <div className={`
      border-t border-current px-12 py-5 text-xl font-neue font-normal text-xl
    `}>
      <div className="container grid grid-cols-3">
        <div>
          <span className={
          `${project.data.professional 
            ? `relative
              before:absolute
              before:content-['']
              before:w-full
              before:bg-green-300
              before:h-1
              before:-skew-x-[20deg]
              before:translate-y-1
              before:bottom-0`
            : ``}
          `
        }>{project.data.title}</span>
        </div>
        <div className="col-span-2 hidden sm:block">
          {project.data.tags.map((tag, i) => {
            return (
              <span key={`${tag}-${i}`}>
                {tag}{i === project.data.tags.length - 1 || ', '}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}