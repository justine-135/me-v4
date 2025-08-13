import PageLayout from '@/layout/PageLayout'
import FormalEducationCard from './FormalEducationCard'
import IntroductionCard from './IntroductionCard'
import CurrentLearning from './CurrentLearning'
import DevelopmentSkillsCard from './DevelopmentSkillsCard'
import useSWR from 'swr'
import { fetcher } from '@/util'
import { EDUCATION_JSON_PATH } from '@/constants/paths'

export default function EducationPage() {
  const { data, error, isLoading } = useSWR(EDUCATION_JSON_PATH, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  const { education, intro, soft_skills_learn, hard_skills_learn } = data

  return (
    <PageLayout title="Education">
      <IntroductionCard intro={intro} />
      <FormalEducationCard education={education} />
      <CurrentLearning skills={hard_skills_learn} />
      <DevelopmentSkillsCard skills={soft_skills_learn} />
    </PageLayout>
  )
}
