import CardCustom from '@/components/CardCustom'
import TimelineCustom from '@/components/TimelineCustom'
import type { IExperience } from '@/types/About'

interface IExperienceCardProps {
  experiences?: IExperience[]
}

export const ExperienceCard = ({ experiences }: IExperienceCardProps) => {
  const timelineData = experiences?.map((experience) => {
    const { technologies, ...rest } = experience
    return {
      ...rest,
      badges: technologies,
    }
  })

  return (
    <CardCustom cardTitle="Experience" as="section">
      <TimelineCustom data={timelineData || []} />
    </CardCustom>
  )
}
