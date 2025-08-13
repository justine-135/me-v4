import { Typography } from '@/components/Typography'
import GridCard from '@/layout/GridCard'
import { Stack } from '@chakra-ui/react/stack'

interface IDevelopmentSkillsCardProps {
  skills?: string[]
}
export default function DevelopmentSkillsCard({ skills }: IDevelopmentSkillsCardProps) {
  return (
    <GridCard
      cardCustomProps={{ cardTitle: 'Development skills', maxW: { mdToLg: 'full', md: 'sm' } }}
    >
      <Stack gap={2}>
        {skills?.map((skill, idx) => {
          return <Typography key={idx}>{skill}</Typography>
        })}
      </Stack>
    </GridCard>
  )
}
