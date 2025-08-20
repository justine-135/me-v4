import { Typography } from '@/components/Typography'
import CardCustom from '@/components/CardCustom'
import { Stack } from '@chakra-ui/react'
import AvailableBadge from '@/components/Badge/AvailableBadge'

export default function IntroductionCard() {
  return (
    <CardCustom cardTitle={<AvailableBadge />} as="section">
      <Stack gap={2}>
        <Typography variant="heading">Let's work together</Typography>
        <Typography>
          I'm always excited to hear about new projects and opportunities. Drop me a message and
          let's discuss how I can contribute to your business.
        </Typography>
      </Stack>
    </CardCustom>
  )
}
