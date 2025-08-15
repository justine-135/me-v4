import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { Stack } from '@chakra-ui/react/stack'

export const InterestsCard = ({ interests }: { interests?: string[] }) => {
  return (
    <CardCustom cardTitle="Interests" as="section">
      <Stack wrap="wrap">
        {interests?.map((interest) => {
          return <Typography key={interest}>{interest}</Typography>
        })}
      </Stack>
    </CardCustom>
  )
}
