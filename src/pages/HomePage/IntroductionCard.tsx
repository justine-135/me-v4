import { Typography } from '@/components/Typography'
import { Separator, Stack, Text } from '@chakra-ui/react'

interface IIntroductionCardProps {
  description?: string
  subtitle?: string
}

export default function IntroductionCard({ description, subtitle }: IIntroductionCardProps) {
  return (
    <Stack as="section" gap={4}>
      <Typography>{subtitle}</Typography>
      <Separator />
      <Text w="3xl">{description}</Text>
    </Stack>
  )
}
