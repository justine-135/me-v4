import CardCustom from '@/components/CardCustom'
import TimelineCustom from '@/components/TimelineCustom'
import GridBoxItemLayout from '@/layout/GridBoxItemLayout'

interface IExperienceCardProps {
  experiences: {
    title: string
    company: string
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
    <GridBoxItemLayout>
      <CardCustom cardTitle="Experience">
        <TimelineCustom data={timelineData} />
      </CardCustom>
    </GridBoxItemLayout>
  )
}
