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
  const { data, isLoading } = useSWR<IWorksData>(WORKS_JSON_PATH, fetcher)
  useScrollToId()

  const featureProjects = data?.featured_projects.filter((project) => project.is_featured)
  const sideProjects = data?.featured_projects
    .filter((project) => !project.is_featured)
    .sort((a, b) => b.timeline.localeCompare(a.timeline))

  const metaData: MetaProps = {
    title: 'Works',
    description:
      'A collection of my design work including featured projects with detailed case studies and side projects that showcase my exploration and learning journey',
    image: `/works.png`,
    url: WORKS_URL,
  }

  return (
    <PageLayout
      title="Works"
      subtitle="A collection of my design work including featured projects with detailed case studies and side projects that showcase my exploration and learning journey"
      metaProps={metaData}
      isLoading={isLoading}
    >
      <Stack gap={8}>
        <FeaturedProjectsCard projects={featureProjects} />
        <SideProjects projects={sideProjects} />
        <Footer />
      </Stack>
    </PageLayout>
  )
}
