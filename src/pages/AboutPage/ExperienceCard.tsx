import TimelineCustom from '@/components/TimelineCustom'
import GridCard from '@/layout/GridCard'
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
    <GridCard cardCustomProps={{ cardTitle: 'Experience' }}>
      <TimelineCustom data={timelineData || []} />
    </GridCard>
  )
}
