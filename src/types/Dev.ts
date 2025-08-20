export interface IDev {
  name: string
  subtitle: string
  is_available: boolean
  learning_on: string
  location: string
  time: string
  working_on: string
  socials: {
    name: string
    url: string
  }[]
}
