import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import GridBoxItemLayout from '@/layout/GridBoxItemLayout'
import { Stack } from '@chakra-ui/react/stack'

export const InterestsCard = ({ interests }: { interests: string[] }) => {
  return (
    <GridBoxItemLayout>
      <CardCustom cardTitle="Interests" maxW="sm">
        <Stack wrap="wrap">
          {interests.map((interest) => {
            return <Typography key={interest}>{interest}</Typography>
          })}
        </Stack>
      </CardCustom>
    </GridBoxItemLayout>
  )
}
