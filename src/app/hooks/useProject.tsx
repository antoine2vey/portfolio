import projects from '@/app/data/projects.json'

type Github = {
  name: string
  url: string
}

type Link = {
  slug: string
  url: string
}

export type Project = {
  slug: string
  data: {
    title: string
    tags: string[]
    roles: string[]
    description: string
    wip: boolean
    openSource: boolean
    professional: boolean
    github: Github[] | null
    images: string[]
    links: Link[]
  }
}

export function getProject(slug: string): Project {
  return projects.find(project => project.slug === slug)!
}