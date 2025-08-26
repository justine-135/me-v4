import TimelineCustom from '@/components/TimelineCustom'
import { Typography } from '@/components/Typography'
import type { IExperience } from '@/types/About'
import { Stack } from '@chakra-ui/react/stack'

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
    <Stack gap={4}>
      <Typography variant="subheading">Experience</Typography>
      <TimelineCustom data={timelineData || []} />
    </Stack>
  )
}
