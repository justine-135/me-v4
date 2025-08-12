import { about_data } from '@/data/about'
import { IntroductionCard } from './IntroductionCard'
import { ExperienceCard } from './ExperienceCard'
import { SkillsCard } from './SkillsCard'
import { InterestsCard } from './InterestsCard'
import PageLayout from '@/layout/PageLayout'

export default function AboutPage() {
  const { name, job_title, intros, interests, experiences, skills } = about_data

  return (
    <PageLayout title="About">
      <IntroductionCard name={name} jobTitle={job_title} intros={intros} />
      <ExperienceCard experiences={experiences} />
      <SkillsCard skills={skills} />
      <InterestsCard interests={interests} />
    </PageLayout>
  )
}
