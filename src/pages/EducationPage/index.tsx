import PageLayout from '@/layout/PageLayout'
import FormalEducationCard from './FormalEducationCard'
import IntroductionCard from './IntroductionCard'
import CurrentLearning from './CurrentLearning'
import DevelopmentSkillsCard from './DevelopmentSkillsCard'
import useSWR from 'swr'
import { fetcher } from '@/util'
import { EDUCATION_JSON_PATH } from '@/constants/paths'
import type { IEducationData } from '@/types/Education'

export default function EducationPage() {
  const { data, error, isLoading } = useSWR<IEducationData>(EDUCATION_JSON_PATH, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  return (
    <PageLayout
      title="Education"
      asideSection={
        <>
          <CurrentLearning skills={data?.hard_skills_learn} />
          <DevelopmentSkillsCard skills={data?.soft_skills_learn} />
        </>
      }
    >
      <IntroductionCard intro={data?.intro} />
      <FormalEducationCard education={data?.education} />
    </PageLayout>
  )
}
