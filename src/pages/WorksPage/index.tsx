import { WORKS_JSON_PATH } from '@/constants/paths'
import PageLayout from '@/layout/PageLayout'
import { fetcher } from '@/util'
import useSWR from 'swr'
import type { IWorksData } from '@/types/Works'
import FeaturedProjectsCard from './components/FeaturedProjectsCard'
import SideProjects from './components/SideProjects'
import { useScrollToId } from '@/hooks/useScrollToId'
import { Stack } from '@chakra-ui/react/stack'
import Footer from '@/components/Footer'

export default function WorksPage() {
  const { data, error, isLoading } = useSWR<IWorksData>(WORKS_JSON_PATH, fetcher)
  useScrollToId()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  const featureProjects = data?.featured_projects.filter((project) => project.is_featured)
  const sideProjects = data?.featured_projects
    .filter((project) => !project.is_featured)
    .sort((a, b) => b.timeline.localeCompare(a.timeline))

  return (
    <PageLayout title="Works" subtitle={data?.intro}>
      <Stack gap={8}>
        <FeaturedProjectsCard projects={featureProjects} />
        <SideProjects projects={sideProjects} />
        <Footer />
      </Stack>
    </PageLayout>
  )
}
