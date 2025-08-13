import { Typography } from '@/components/Typography'
import useThemeValues from '@/hooks/useThemeValues'
import GridCard from '@/layout/GridCard'
import { Stack } from '@chakra-ui/react/stack'
import { Box } from '@chakra-ui/react/box'
import type { IHardSkill } from '@/types/Education'

interface ICurrentLearningProps {
  skills?: IHardSkill[]
}
export default function CurrentLearning({ skills }: ICurrentLearningProps) {
  const { backgroundAccent } = useThemeValues()

  return (
    <GridCard
      cardCustomProps={{ cardTitle: 'Currently learning', maxW: { mdToLg: 'full', md: 'sm' } }}
    >
      <Stack gap={4}>
        {skills?.map((skill, idx) => {
          const { title, description } = skill

          return (
            <Box key={idx} background={backgroundAccent} p={2} rounded="lg">
              <Stack>
                <Typography variant="subheading" fontSize="sm">
                  {title}
                </Typography>
                <Typography fontSize="xs">{description}</Typography>
              </Stack>
            </Box>
          )
        })}
      </Stack>
    </GridCard>
  )
}
