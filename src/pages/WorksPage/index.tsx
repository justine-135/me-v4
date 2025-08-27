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
import type { MetaProps } from '../Meta'

const WORKS_URL = import.meta.env.VITE_APP_WORKS_URL

export default function WorksPage() {
  const { data, error, isLoading } = useSWR<IWorksData>(WORKS_JSON_PATH, fetcher)
  useScrollToId()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  const featureProjects = data?.featured_projects.filter((project) => project.is_featured)
  const sideProjects = data?.featured_projects
    .filter((project) => !project.is_featured)
    .sort((a, b) => b.timeline.localeCompare(a.timeline))

  const metaData: MetaProps = {
    title: 'Works',
    description: data?.intro,
    image: `/works.png`,
    url: WORKS_URL,
  }

  return (
    <PageLayout title="Works" subtitle={data?.intro} metaProps={metaData}>
      <Stack gap={8}>
        <FeaturedProjectsCard projects={featureProjects} />
        <SideProjects projects={sideProjects} />
        <Footer />
      </Stack>
    </PageLayout>
  )
}
