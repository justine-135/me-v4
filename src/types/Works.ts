export interface IProjects {
  id: number
  title: string
  image: string
  description: string
  is_featured: boolean
  tags: string[]
  project_type: string
  role?: string
  link_url: string
  duration?: string
  timeline: string
  live_url?: string
}

export interface IWorksData {
  intro: string
  featured_projects: IProjects[]
}

export interface IProcess {
  title: string
  details: string[]
}

export type IWorkDetail = {
  title: string
  description: string
  problem: string
  answer: string
  image_urls: string[]
  duration: string
  timeline: string
  role: string
  future_improvements: string[]
  people: string[]
  project_type: string
  functions: string[]
  improvements: string[]
  process: IProcess[]
}
