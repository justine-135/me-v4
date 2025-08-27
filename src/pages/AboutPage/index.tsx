import { IntroductionCard } from './IntroductionCard'
import { ExperienceCard } from './ExperienceCard'
import { SkillsCard } from './SkillsCard'
import { InterestsCard } from './InterestsCard'
import PageLayout from '@/layout/PageLayout'
import { ABOUT_JSON_PATH } from '@/constants/paths'
import useSWR from 'swr'
import { fetcher } from '@/util'
import type { IAboutData } from '@/types/About'
import type { MetaProps } from '../Meta'

const ABOUT_URL = import.meta.env.VITE_APP_ABOUT_URL

export default function AboutPage() {
  const { data, error, isLoading } = useSWR<IAboutData>(ABOUT_JSON_PATH, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  const metaData: MetaProps = {
    title: 'About',
    description: 'Learn more about my background and experience',
    image: `/about.png`,
    url: ABOUT_URL,
  }

  return (
    <PageLayout
      title="About"
      subtitle="Learn more about my background and experience"
      metaProps={metaData}
      asideSection={
        <>
          <SkillsCard skills={data?.skills} />
          <InterestsCard interests={data?.interests} />
        </>
      }
    >
      <IntroductionCard name={data?.name} jobTitle={data?.job_title} intros={data?.intros} />
      <ExperienceCard experiences={data?.experiences} />
    </PageLayout>
  )
}
