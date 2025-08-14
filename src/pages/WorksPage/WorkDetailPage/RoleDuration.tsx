import { Typography } from '@/components/Typography'
import GridCard from '@/layout/GridCard'
import { Box, HStack, Stack } from '@chakra-ui/react'

interface ICardSummaryProps {
  icon: string
  title?: string
  body?: string
  footer?: string
}

const CardSummary = ({ icon, title, body, footer }: ICardSummaryProps) => {
  return (
    <GridCard cardCustomProps={{ h: '95px' }}>
      <HStack gap={2}>
        <Box>{icon}</Box>
        <Stack gap={0}>
          <Typography>{title}</Typography>
          <Typography variant="subheading">{body}</Typography>
          <Typography fontSize="xs">{footer}</Typography>
        </Stack>
      </HStack>
    </GridCard>
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
    <Box columnCount={{ sm: 1, mdToLg: 2, md: 3 }} columnGap={4}>
      <CardSummary icon="⌛" title="Timeline" body={timeline} footer={duration} />
      <CardSummary icon="👨‍💻" title="My role" body={role} />
      <CardSummary icon="⚒️" title="Project type" body={projectType} />
    </Box>
  )
}
