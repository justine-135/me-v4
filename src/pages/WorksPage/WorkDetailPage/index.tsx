import PageLayout from '@/layout/PageLayout'
import type { IWorkDetail } from '@/types/Works'
import { fetcher } from '@/util'
import { useParams } from 'react-router'
import useSWR from 'swr'
import RoleDuration from './components/RoleDuration'
import IntroductionCard from './components/IntroductionCard'
import { Stack } from '@chakra-ui/react'
import FlexboxLayout from '@/layout/FlexLayout'
import ProjectVisualsCard from './components/ProjectVisualsCard'
import ProjectOverview from './components/ProjectOverview'
import StackLayout from '@/layout/StackLayout'
import TeamCard from './components/TeamCard'
import FunctionalitiesCard from './components/FunctionalitiesCard'
import ImprovementsCard from './components/ImprovementsCard'
import ProcessCard from './components/ProcessCard'
import { useScrollToTop } from '@/hooks/useScrollToTop'

export default function WorkDetailPage() {
  const param = useParams()
  const { id } = param
  const { data, error, isLoading } = useSWR<IWorkDetail>(`/data/work-${id}.json`, fetcher)
  useScrollToTop()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  return (
    <PageLayout showBackBtn>
      <Stack gap={6}>
        <StackLayout>
          <IntroductionCard title={data?.title} description={data?.description} />
          <RoleDuration
            duration={data?.duration}
            timeline={data?.timeline}
            role={data?.role}
            projectType={data?.project_type}
          />
        </StackLayout>
        <FlexboxLayout>
          <StackLayout>
            <ProjectVisualsCard imageUrls={data?.image_urls} />
            <ProjectOverview problem={data?.problem} answer={data?.answer} />
            <FunctionalitiesCard functions={data?.functions} />
            <ProcessCard processes={data?.process} />
          </StackLayout>
          <StackLayout flex={1}>
            <TeamCard people={data?.people} />
            <ImprovementsCard improvements={data?.improvements} />
          </StackLayout>
        </FlexboxLayout>
      </Stack>
    </PageLayout>
  )
}
