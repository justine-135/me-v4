import { Typography } from '@/components/Typography'
import CardCustom from '@/components/CardCustom'
import { Stack } from '@chakra-ui/react'

export default function LocationCard() {
  return (
    <CardCustom
      cardCustomProps={{ cardTitle: 'Location & Time', maxW: { mdToLg: 'full', md: 'sm' } }}
    >
      <Stack>
        <Typography>📍 Manila, PH</Typography>
        <Typography>🕐 PHT (UTC+8)</Typography>
        <Typography>💼 Available for remote & local projects</Typography>
      </Stack>
    </CardCustom>
  )
}
