export interface IProjects {
  id: number
  title: string
  image: string
  description: string
  is_featured: boolean
  date: string
  tags: string[]
}

export interface IWorksData {
  intro: string
  featured_projects: IProjects[]
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
}
