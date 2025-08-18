import PageLayout from '@/layout/PageLayout'
import type { IFeaturedProject } from '@/types/Works'
import { fetcher } from '@/util'
import { useParams } from 'react-router'
import useSWR from 'swr'

import ProcessCard from './components/ProcessCard'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import IntroductionCard from '../components/IntroductionCard'
import RoleDuration from './components/RoleDuration'
import TeamCard from './components/TeamCard'
import ImprovementsCard from '../components/ImprovementsCard'
import ProjectVisualsCard from '../components/ProjectVisualsCard'
import ProjectOverview from './components/ProjectOverview'
import FunctionalitiesCard from '../components/FunctionalitiesCard'
import ViewCodeCard from '../components/ViewCodeCard'
import TechStackCard from '../components/TechStackCard'

export default function FeaturedProjectsPage() {
  const param = useParams()
  const { id } = param
  const { data, error, isLoading } = useSWR<IFeaturedProject>(`/data/work-${id}.json`, fetcher)
  useScrollToTop()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  return (
    <PageLayout
      showBackBtn
      topSection={
        <>
          <IntroductionCard title={data?.title} description={data?.description} />
          <RoleDuration
            duration={data?.duration}
            timeline={data?.timeline}
            role={data?.role}
            projectType={data?.project_type}
          />
        </>
      }
      asideSection={
        <>
          <TechStackCard technologies={data?.technology} />
          <TeamCard people={data?.people} />
          <ImprovementsCard improvements={data?.improvements} />
          <ViewCodeCard href={data?.link_url} />
        </>
      }
    >
      <ProjectVisualsCard imageUrls={data?.image_urls} />
      <ProjectOverview problem={data?.problem} answer={data?.answer} />
      <FunctionalitiesCard functions={data?.functions} />
      <ProcessCard processes={data?.process} />
    </PageLayout>
  )
}
