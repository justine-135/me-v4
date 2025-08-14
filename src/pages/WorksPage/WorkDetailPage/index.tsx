import PageLayout from '@/layout/PageLayout'
import type { IWorkDetail } from '@/types/Works'
import { fetcher } from '@/util'
import { useParams } from 'react-router'
import useSWR from 'swr'
import RoleDuration from './RoleDuration'
import IntroductionCard from './IntroductionCard'
import { Stack } from '@chakra-ui/react'
import GridBoxLayout from '@/layout/GridBoxLayout'
import ProjectVisualsCard from './ProjectVisualsCard'
import ProjectOverview from './ProjectOverview'

export default function WorkDetailPage() {
  const param = useParams()
  const { id } = param
  const { data, error, isLoading } = useSWR<IWorkDetail>(`/data/work-${id}.json`, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  console.log(data)

  return (
    <PageLayout showBackBtn gridBoxLayoutProps={{ columnCount: 1 }}>
      <Stack gap={6}>
        <GridBoxLayout columnCount={1} w="87%">
          <IntroductionCard title={data?.title} description={data?.description} />
          <RoleDuration
            duration={data?.duration}
            timeline={data?.timeline}
            role={data?.role}
            projectType={data?.project_type}
          />
        </GridBoxLayout>
        <GridBoxLayout columnCount={{ mdToLg: 1, md: 2 }}>
          <ProjectVisualsCard imageUrls={data?.image_urls} />
          <ProjectOverview problem={data?.problem} answer={data?.answer} />
        </GridBoxLayout>
      </Stack>
    </PageLayout>
  )
}
