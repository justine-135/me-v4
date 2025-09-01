import { HOME_JSON_PATH, WORKS_JSON_PATH } from '@/constants/paths'
import PageLayout from '@/layout/PageLayout'
import IntroductionCard from './IntroductionCard'
import type { IHomeData } from '@/types/Home'
import ButtonGroup from './ButtonGroup'
import OverviewCard from './OverviewCard'
import Expertise from './Expertise'
import type { IWorksData } from '@/types/Works'
import RecentProjects from './RecentProjects'
import Footer from '@/components/Footer'
import type { MetaProps } from '../Meta'
import useCustomSWR from '@/hooks/useCustomSWR'

const HOME_URL = import.meta.env.VITE_APP_HOME_URL

export default function HomePage() {
  const {
    data,
    // error,
    isLoading,
  } = useCustomSWR<IHomeData>({ path: HOME_JSON_PATH })
  const {
    data: works,
    // error: errorWorks,
    isLoading: isLoadingWorks,
  } = useCustomSWR<IWorksData>({ path: WORKS_JSON_PATH })

  const worksData = works?.featured_projects
    ?.sort((a, b) => b.timeline.localeCompare(a.timeline))
    .slice(0, 3)

  const metaData: MetaProps = {
    title: 'Home | Justine Upano',
    description:
      "I'm a passionate web developer currently working as a ReactJS developer while building my portfolio through academic projects and personal side projects. I love creating responsive, user-friendly web applications and continuously learning new technologies.",
    image: `/home.png`,
    url: HOME_URL,
  }

  return (
    <PageLayout
      title="Justine Upano"
      subtitle="Web Developer"
      metaProps={metaData}
      isLoading={isLoading || isLoadingWorks}
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
      footerSection={<Footer />}
    >
      <Expertise
        frontend={data?.frontend}
        backend={data?.backend}
        database={data?.database}
        tools={data?.tools}
      />
      <RecentProjects projects={worksData} />
    </PageLayout>
  )
}
