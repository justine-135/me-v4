import PageLayout from '@/layout/PageLayout'
import type { ISideProject } from '@/types/Works'
import { fetcher } from '@/util'
import { useParams } from 'react-router'
import useSWR from 'swr'
import ProjectVisualsCard from '../components/ProjectVisualsCard'
import IntroductionCard from '../components/IntroductionCard'
import TechStackCard from '../components/TechStackCard'
import ImprovementsCard from '../components/ImprovementsCard'
import ViewCodeCard from '../components/ViewCodeCard'
import FunctionalitiesCard from '../components/FunctionalitiesCard'
import ChallengesSolutionsCard from './components/ChallengesSolutionsCard'
import OverviewCard from '../components/OverviewCard'
import Footer from '@/components/Footer'

export default function SideProjectsPage() {
  const param = useParams()
  const { id } = param
  const { data, error, isLoading } = useSWR<ISideProject>(`/data/work-${id}.json`, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  return (
    <PageLayout
      showBackBtn
      topSection={<IntroductionCard title={data?.title} description={data?.description} />}
      asideSection={
        <>
          <TechStackCard technologies={data?.technology} />
          <ImprovementsCard improvements={data?.improvements} />
          <ViewCodeCard href={data?.link_url} />
        </>
      }
      footerSection={<Footer />}
    >
      <OverviewCard description={data?.description} />
      <ProjectVisualsCard imageUrls={data?.image_urls} />
      <FunctionalitiesCard functions={data?.functions} />
      <ChallengesSolutionsCard challenges={data?.challenges} />
    </PageLayout>
  )
}
