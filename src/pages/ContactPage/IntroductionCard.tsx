import { Typography } from '@/components/Typography'
import GridCard from '@/layout/GridCard'
import { Badge, Stack } from '@chakra-ui/react'

export default function IntroductionCard() {
  return (
    <GridCard
      cardCustomProps={{ cardTitle: <Badge colorPalette="green">Available for work</Badge> }}
    >
      <Stack gap={2}>
        <Typography variant="heading">Let's work together</Typography>
        <Typography>
          I'm always excited to hear about new projects and opportunities. Drop me a message and
          let's discuss how I can contribute to your business.
        </Typography>
      </Stack>
    </GridCard>
  )
}
