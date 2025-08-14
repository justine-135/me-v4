import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { Stack } from '@chakra-ui/react/stack'

interface IDevelopmentSkillsCardProps {
  skills?: string[]
}
export default function DevelopmentSkillsCard({ skills }: IDevelopmentSkillsCardProps) {
  return (
    <CardCustom cardTitle="Development skills">
      <Stack gap={2}>
        {skills?.map((skill, idx) => {
          return <Typography key={idx}>{skill}</Typography>
        })}
      </Stack>
    </CardCustom>
  )
}
