import { education_data } from '@/data/education'
import PageLayout from '@/layout/PageLayout'
import FormalEducationCard from './FormalEducationCard'
import IntroductionCard from './IntroductionCard'
import CurrentLearning from './CurrentLearning'
import DevelopmentSkillsCard from './DevelopmentSkillsCard'

export default function EducationPage() {
  const { education, intro, soft_skills_learn, hard_skills_learn } = education_data

  return (
    <PageLayout title="Education">
      <IntroductionCard intro={intro} />
      <FormalEducationCard education={education} />
      <CurrentLearning skills={hard_skills_learn} />
      <DevelopmentSkillsCard skills={soft_skills_learn} />
    </PageLayout>
  )
}
