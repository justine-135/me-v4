import PageLayout from '@/layout/PageLayout'
import FormalEducationCard from './FormalEducationCard'
import CurrentLearning from './CurrentLearning'
import DevelopmentSkillsCard from './DevelopmentSkillsCard'
import useSWR from 'swr'
import { fetcher } from '@/util'
import { EDUCATION_JSON_PATH } from '@/constants/paths'
import type { IEducationData } from '@/types/Education'
import type { MetaProps } from '../Meta'

const EDUCATION_URL = import.meta.env.VITE_APP_EDUCATION_URL

export default function EducationPage() {
  const { data, error, isLoading } = useSWR<IEducationData>(EDUCATION_JSON_PATH, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  const metaData: MetaProps = {
    title: 'Education',
    description: data?.intro,
    image: `/education.png`,
    url: EDUCATION_URL,
  }

  return (
    <PageLayout
      title="Education"
      subtitle={data?.intro}
      metaProps={metaData}
      asideSection={
        <>
          <CurrentLearning skills={data?.hard_skills_learn} />
          <DevelopmentSkillsCard skills={data?.soft_skills_learn} />
        </>
      }
    >
      <FormalEducationCard education={data?.education} />
    </PageLayout>
  )
}
