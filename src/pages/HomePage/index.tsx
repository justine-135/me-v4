import { HOME_JSON_PATH, WORKS_JSON_PATH } from '@/constants/paths'
import PageLayout from '@/layout/PageLayout'
import { fetcher } from '@/util'
import useSWR from 'swr'
import IntroductionCard from './IntroductionCard'
import type { IHomeData } from '@/types/Home'
import ButtonGroup from './ButtonGroup'
import OverviewCard from './OverviewCard'
import Expertise from './Expertise'
import type { IWorksData } from '@/types/Works'
import RecentProjects from './RecentProjects'
import Footer from '@/components/Footer'
import type { MetaProps } from '../Meta'

const HOME_URL = import.meta.env.VITE_APP_HOME_URL

export default function HomePage() {
  const {
    data,
    // error,
    isLoading,
  } = useSWR<IHomeData>(HOME_JSON_PATH, fetcher)
  const {
    data: works,
    // error: errorWorks,
    // isLoading: isLoadingWorks,
  } = useSWR<IWorksData>(WORKS_JSON_PATH, fetcher)

  // if (isLoading || isLoadingWorks) return <p>Loading...</p>
  // if (error || errorWorks) return <p>Failed to load data</p>

  const worksData = works?.featured_projects
    ?.sort((a, b) => b.timeline.localeCompare(a.timeline))
    .slice(0, 3)

  const metaData: MetaProps = {
    title: 'Home',
    description: data?.description,
    image: `/home.png`,
    url: HOME_URL,
  }

  return (
    <PageLayout
      title="Justine Upano"
      subtitle="Web Developer"
      metaProps={metaData}
      isLoading={isLoading}
      topSection={
        <>
          <IntroductionCard description={data?.description} />
          <ButtonGroup
            github_link={data?.github_url}
            works_link="works"
            resume_url={data?.resume_url}
          />
          <OverviewCard
            private_contributions={data?.private_contributions}
            academic_projects={data?.academic_projects}
            learning_projects={data?.learning_projects}
            technologies={data?.technologies}
          />
        </>
      }
    >
      <Expertise
        frontend={data?.frontend}
        backend={data?.backend}
        database={data?.database}
        tools={data?.tools}
      />
      <RecentProjects projects={worksData} />
      <Footer />
    </PageLayout>
  )
}
