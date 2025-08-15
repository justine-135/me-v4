import { Typography } from '@/components/Typography'
import CardCustom from '@/components/CardCustom'
import { Box, Flex, HStack, Stack } from '@chakra-ui/react'

interface ICardSummaryProps {
  icon: string
  title?: string
  body?: string
  footer?: string
}

const CardSummary = ({ icon, title, body, footer }: ICardSummaryProps) => {
  return (
    <CardCustom flex={1}>
      <HStack gap={2}>
        <Box>{icon}</Box>
        <Stack gap={0}>
          <Typography>{title}</Typography>
          <Typography variant="subheading">{body}</Typography>
          <Typography fontSize="xs">{footer}</Typography>
        </Stack>
      </HStack>
    </CardCustom>
  )
}

interface IRoleDurationProps {
  duration?: string
  timeline?: string
  role?: string
  projectType?: string
}

export default function RoleDuration({
  duration,
  timeline,
  role,
  projectType,
}: IRoleDurationProps) {
  return (
    <Flex
      gap={4}
      wrap="wrap"
      direction={{ sm: 'column', mdToLg: 'column', md: 'row' }}
      as="section"
    >
      <CardSummary icon="⌛" title="Timeline" body={timeline} footer={duration} />
      <CardSummary icon="👨‍💻" title="My role" body={role} />
      <CardSummary icon="⚒️" title="Project type" body={projectType} />
    </Flex>
  )
}
