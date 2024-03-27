import { useProject } from "@/app/hooks/useProject";
import projects from '@/app/data/projects.json'
import { useRouter } from "next/router";
import Subtitle from "@/app/components/Subtitle";
import Title from "@/app/components/Title";
import Link from "next/link";
import StyledLink from "@/app/components/StyledLink";
import AllProjects from "@/app/components/AllProjects";
import Image from "next/image";

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
      <div className="flex mb-10">
        <article className="flex-1 mr-10">
          <Subtitle>{project.title}</Subtitle>
          <Title>{project.description}</Title>
        </article>
        <aside className="">
          <Subtitle className="mb-2">tech</Subtitle>
          <ul className="mb-4">
            {project.tags.map((tag, i) => (
              <li className="font-neue text-xl" key={`${tag}-${i}`}>{tag}</li>
            ))}
          </ul>
          <Subtitle className="mb-2">role{project.roles.length > 1 ? 's' : ''}</Subtitle>
          <ul className="mb-4">
            {project.roles.map((role, i) => (
              <li className="font-neue text-xl" key={`${role}-${i}`}>{role}</li>
            ))}
          </ul>
          <Subtitle className="mb-2">infos</Subtitle>
          <div className="mb-4">
            <p className={`font-neue text-xl ${!project.wip && `line-through`}`}>finished</p>
            <p className={`font-neue text-xl ${!project.professional && `line-through`}`}>pro</p>
            <p className={`font-neue text-xl ${!project.openSource && `line-through`}`}>open source</p>
            {project.github?.map(app => (
              <p key={app.name} className="pl-3">
                <StyledLink
                  href={app.url}
                  small
                >
                  <span className="font-neue lowercase">{app.name}</span>
                </StyledLink>
              </p>
            ))}
          </div>
          {project.links.length > 0 && (
            <>
              <Subtitle className="mb-2">lien{project.links.length > 1 ? 's' : ''}</Subtitle>
              <div className="mb-4">
                {project.links?.map(link => (
                  <p key={link.slug} className="pl-3">
                    <StyledLink
                      href={link.url}
                      small
                    >
                      <span className="font-neue lowercase">{link.slug}</span>
                    </StyledLink>
                  </p>
                ))}
              </div>
            </>
          )}
        </aside>
      </div>
      <div className="grid-element mb-20">
         {project.images.map(image => (
            <Image key={image} src={image} alt="" width={1500} height={1500} className="mb-5" />
         ))}
      </div>
      <div className="mb-20 -mx-12">
        <AllProjects excludedSlug={params.slug} />
      </div>
    </>
  )
}