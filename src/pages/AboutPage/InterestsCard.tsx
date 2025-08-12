import { Typography } from '@/components/Typography'
import GridCard from '@/layout/GridCard'
import { Stack } from '@chakra-ui/react/stack'

export const InterestsCard = ({ interests }: { interests: string[] }) => {
  return (
    <GridCard cardCustomProps={{ cardTitle: 'Interests', maxW: { mdToLg: 'full', md: 'sm' } }}>
      <Stack wrap="wrap">
        {interests.map((interest) => {
          return <Typography key={interest}>{interest}</Typography>
        })}
      </Stack>
    </GridCard>
  )
}
