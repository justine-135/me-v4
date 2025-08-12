import TimelineCustom from '@/components/TimelineCustom'
import GridCard from '@/layout/GridCard'

interface IExperienceCardProps {
  experiences: {
    title: string
    subtitle: string
    date: string
    details: string[]
    technologies: string[]
    current: boolean
  }[]
}

export const ExperienceCard = ({ experiences }: IExperienceCardProps) => {
  const timelineData = experiences.map((experience) => {
    const { technologies, ...rest } = experience
    return {
      ...rest,
      badges: technologies,
    }
  })

  return (
    <GridCard cardCustomProps={{ cardTitle: 'Experience' }}>
      <TimelineCustom data={timelineData} />
    </GridCard>
  )
}
