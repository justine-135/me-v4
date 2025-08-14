import { WORKS_JSON_PATH } from '@/constants/paths'
import PageLayout from '@/layout/PageLayout'
import { fetcher } from '@/util'
import useSWR from 'swr'
import IntroductionCard from './components/IntroductionCard'
import type { IWorksData } from '@/types/Works'
import FeaturedProjectsCard from './components/FeaturedProjectsCard'
import StackLayout from '@/layout/StackLayout'

export default function WorksPage() {
  const { data, error, isLoading } = useSWR<IWorksData>(WORKS_JSON_PATH, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  return (
    <PageLayout title="Works">
      <StackLayout>
        <IntroductionCard intro={data?.intro} />
        <FeaturedProjectsCard projects={data?.featured_projects} />
      </StackLayout>
    </PageLayout>
  )
}
