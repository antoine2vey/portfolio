import { useProject } from "@/app/hooks/useProject";
import projects from '@/app/data/projects.json'
import { useRouter } from "next/router";
import Subtitle from "@/app/components/Subtitle";
import Title from "@/app/components/Title";
import Link from "next/link";
import StyledLink from "@/app/components/StyledLink";
import AllProjects from "@/app/components/AllProjects";

// Unknown project redirects to 404
export const dynamicParams = false

// Establish all links
export async function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }))
}

export default function Page({ params }: { params: { slug: string }}) {
  const { data: project } = useProject(params.slug)

  return (
    <>
      <div className="flex mb-20">
        <article className="flex-1 mr-10">
          <Subtitle>{project.title}</Subtitle>
          <Title>{project.description}</Title>
        </article>
        <aside className="">
          <Subtitle className="mb-2">tech</Subtitle>
          <ul className="mb-4">
            {project.tags.map(tag => (
              <li className="font-neue text-xl">{tag}</li>
            ))}
          </ul>
          <Subtitle className="mb-2">role</Subtitle>
          <ul className="mb-4">
            {project.roles.map(role => (
              <li className="font-neue text-xl">{role}</li>
            ))}
          </ul>
          <Subtitle className="mb-2">infos</Subtitle>
          <div className="mb-4">
            <p className={`font-neue text-xl ${!project.wip && `line-through`}`}>finished</p>
            <p className={`font-neue text-xl ${!project.professional && `line-through`}`}>pro</p>
            <p className={`font-neue text-xl ${!project.openSource && `line-through`}`}>open source :</p>
            {project.github?.map(app => (
              <p>
                <StyledLink
                  href={app.url}
                  small
                >
                  <span className="font-neue lowercase">{app.name}</span>
                </StyledLink>
              </p>
            ))}
          </div>
        </aside>
      </div>
      <div className="mb-20 -mx-12">
        <AllProjects excludedSlug={params.slug} />
      </div>
    </>
  )
}