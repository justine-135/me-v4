import { Typography } from '@/components/Typography'
import { Stack } from '@chakra-ui/react'

interface IIntroductionCardProps {
  title?: string
  description?: string
}

export default function IntroductionCard({ title, description }: IIntroductionCardProps) {
  return (
    <Stack as="section">
      <Typography variant="heading" as="h1">
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Stack>
  )
}
