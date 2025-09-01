import PageLayout from '@/layout/PageLayout'
import FormalEducationCard from './FormalEducationCard'
import CurrentLearning from './CurrentLearning'
import DevelopmentSkillsCard from './DevelopmentSkillsCard'
import { EDUCATION_JSON_PATH } from '@/constants/paths'
import type { IEducationData } from '@/types/Education'
import type { SEOProps } from '../../components/SEO'
import EducationSkeleton from '@/components/Skeleton/EducationSkeleton'
import useCustomSWR from '@/hooks/useCustomSWR'

const EDUCATION_URL = import.meta.env.VITE_APP_EDUCATION_URL

export default function EducationPage() {
  const { data, isLoading } = useCustomSWR<IEducationData>({ path: EDUCATION_JSON_PATH })

  const metaData: SEOProps = {
    title: 'Education | Justine Upano',
    description: 'My academic background and continuous learning journey in design and technology.',
    image: `/education.png`,
    url: EDUCATION_URL,
  }

  return (
    <PageLayout
      title="Education"
      subtitle="My academic background and continuous learning journey in design and technology."
      SEOProps={metaData}
      isLoading={isLoading}
      skeleton={<EducationSkeleton />}
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
