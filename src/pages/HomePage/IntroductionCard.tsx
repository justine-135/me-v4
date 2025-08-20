import { Typography } from '@/components/Typography'
import { Separator, Stack, Text } from '@chakra-ui/react'

interface IIntroductionCardProps {
  title?: string
  description?: string
  subtitle?: string
}

export default function IntroductionCard({ title, description, subtitle }: IIntroductionCardProps) {
  return (
    <Stack as="section">
      <Typography variant="heading" as="h1">
        {title}
      </Typography>
      <Typography>{subtitle}</Typography>
      <Separator />
      <Text w="3xl">{description}</Text>
    </Stack>
  )
}
