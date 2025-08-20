import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { Flex, VStack, Text } from '@chakra-ui/react'

interface ICardSummaryProps {
  value?: string | number
  title: string
  subtitle: string
}

const CardSummary = ({ value, title, subtitle }: ICardSummaryProps) => {
  return (
    <CardCustom flex={1}>
      <VStack>
        <Typography variant="subheading" fontSize="lg" as="h3">
          {value}
        </Typography>
        <Text fontSize="sm">{title}</Text>
        <Typography>{subtitle}</Typography>
      </VStack>
    </CardCustom>
  )
}

interface IOverviewCardProps {
  private_contributions?: number
  academic_projects?: number
  learning_projects?: number
  technologies?: number
}

export default function OverviewCard({
  private_contributions,
  academic_projects,
  learning_projects,
  technologies,
}: IOverviewCardProps) {
  return (
    <Flex
      gap={4}
      wrap="wrap"
      direction={{ sm: 'column', mdToLg: 'column', md: 'row' }}
      as="section"
    >
      <CardSummary
        value={`${private_contributions}+`}
        title="Private contributions"
        subtitle="Active project"
      />
      <CardSummary
        value={academic_projects}
        title="Academic projects"
        subtitle="University works"
      />
      <CardSummary
        value={`${learning_projects}+`}
        title="Side projects"
        subtitle="Learning works"
      />
      <CardSummary value={technologies} title="Technologies" subtitle="Tech stack" />
    </Flex>
  )
}
