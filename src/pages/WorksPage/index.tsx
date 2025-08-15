import { WORKS_JSON_PATH } from '@/constants/paths'
import PageLayout from '@/layout/PageLayout'
import { fetcher } from '@/util'
import useSWR from 'swr'
import IntroductionCard from './components/IntroductionCard'
import type { IWorksData } from '@/types/Works'
import FeaturedProjectsCard from './components/FeaturedProjectsCard'
import StackLayout from '@/layout/StackLayout'
import SideProjects from './components/SideProjects'

export default function WorksPage() {
  const { data, error, isLoading } = useSWR<IWorksData>(WORKS_JSON_PATH, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  const featureProjects = data?.featured_projects.filter((project) => project.is_featured)
  const sideProjects = data?.featured_projects
    .filter((project) => !project.is_featured)
    .sort((a, b) => b.timeline.localeCompare(a.timeline))

  return (
    <PageLayout title="Works">
      <StackLayout>
        <IntroductionCard intro={data?.intro} />
        <FeaturedProjectsCard projects={featureProjects} />
        <SideProjects projects={sideProjects} />
      </StackLayout>
    </PageLayout>
  )
}
