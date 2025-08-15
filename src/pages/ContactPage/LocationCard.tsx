import { Typography } from '@/components/Typography'
import CardCustom from '@/components/CardCustom'
import { Stack } from '@chakra-ui/react'

export default function LocationCard() {
  return (
    <CardCustom cardTitle="Location & Time">
      <Stack>
        <Typography>📍 Manila, PH</Typography>
        <Typography>🕐 PHT (UTC+8)</Typography>
        <Typography>💼 Available for remote & local projects</Typography>
      </Stack>
    </CardCustom>
  )
}
