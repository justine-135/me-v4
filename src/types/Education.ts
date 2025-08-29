export interface IEducationItem {
  subtitle: string
  title: string
  date: string
  details: string[]
  badges: string[]
}

export interface IHardSkill {
  title: string
  description: string
}

export interface IEducationData {
  education: IEducationItem[]
  soft_skills_learn: string[]
  hard_skills_learn: IHardSkill[]
}
