import { IntroductionCard } from './IntroductionCard'
import { ExperienceCard } from './ExperienceCard'
import { SkillsCard } from './SkillsCard'
import { InterestsCard } from './InterestsCard'
import PageLayout from '@/layout/PageLayout'
import { ABOUT_JSON_PATH } from '@/constants/paths'
import useSWR from 'swr'
import { fetcher } from '@/util'

export default function AboutPage() {
  const { data, error, isLoading } = useSWR(ABOUT_JSON_PATH, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  const { name, job_title, intros, interests, experiences, skills } = data

  return (
    <PageLayout title="About">
      <IntroductionCard name={name} jobTitle={job_title} intros={intros} />
      <ExperienceCard experiences={experiences} />
      <SkillsCard skills={skills} />
      <InterestsCard interests={interests} />
    </PageLayout>
  )
}
