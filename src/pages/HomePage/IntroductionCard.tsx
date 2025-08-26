import { Text } from '@chakra-ui/react'

interface IIntroductionCardProps {
  description?: string
  subtitle?: string
}

export default function IntroductionCard({ description }: IIntroductionCardProps) {
  return <Text maxW="3xl">{description}</Text>
}
