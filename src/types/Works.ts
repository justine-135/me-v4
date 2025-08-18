export interface IProjects {
  id: number
  title: string
  image: string
  description: string
  is_featured: boolean
  tags: string[]
  project_type: string[]
  role?: string
  link_url: string
  duration?: string
  timeline: string
  live_url?: string
  is_showcase: boolean | null
}

export interface IWorksData {
  intro: string
  featured_projects: IProjects[]
}

export interface IProcess {
  title: string
  details: string[]
}

export interface IWorkDetail {
  title: string
  description: string
  image_urls: string[]
  future_improvements: string[]
  project_type: string[]
  functions: string[]
  improvements: string[]
  technology: string[]
  link_url: string
}

export interface IFeaturedProject extends IWorkDetail {
  problem: string
  answer: string
  process: IProcess[]
  role: string
  duration: string
  timeline: string
  people: string[]
}

export interface IChallenges {
  challenge: string
  solution: string
}

export interface ISideProject extends IWorkDetail {
  challenges: IChallenges[]
}
