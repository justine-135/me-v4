import { Typography } from '@/components/Typography'
import GridCard from '@/layout/GridCard'
import { Stack } from '@chakra-ui/react'

export default function LocationCard() {
  return (
    <GridCard
      cardCustomProps={{ cardTitle: 'Location & Time', maxW: { mdToLg: 'full', md: 'sm' } }}
    >
      <Stack>
        <Typography>📍 Manila, PH</Typography>
        <Typography>🕐 PHT (UTC+8)</Typography>
        <Typography>💼 Available for remote & local projects</Typography>
      </Stack>
    </GridCard>
  )
}
