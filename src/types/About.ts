export interface IExperience {
  title: string
  subtitle: string
  date: string
  details: string[]
  technologies: string[]
  current: boolean
}

export interface ISkillCategory {
  title: string
  items: string[]
}

export interface IAboutData {
  name: string
  job_title: string
  intros: string[]
  experiences: IExperience[]
  skills: ISkillCategory[]
  interests: string[]
}
