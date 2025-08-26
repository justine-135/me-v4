import { HStack, Timeline, Badge, type TimelineRootProps, Stack, Separator } from '@chakra-ui/react'

interface ITimelineData {
  title: string
  subtitle: string
  details: string[]
  date: string
  current?: boolean
  badges: string[]
}

interface ITimelineCustomProps extends TimelineRootProps {
  data: ITimelineData[]
}

const TimelineItem = ({ title, subtitle, details, date, current, badges }: ITimelineData) => {
  return (
    <Timeline.Item>
      <Timeline.Connector>
        {/* <Timeline.Separator /> */}
        <Separator orientation="vertical" h="full" />
      </Timeline.Connector>
      <Timeline.Content pb={0}>
        <Stack mb={2} gap={1}>
          <HStack justifyContent="space-between">
            <Timeline.Title>{title}</Timeline.Title>
            {current && <Badge variant="outline">Current</Badge>}
          </HStack>
          <Timeline.Description>{subtitle}</Timeline.Description>
          <Timeline.Description>{date}</Timeline.Description>
        </Stack>
        <Stack gap={4}>
          <Stack>
            {details.map((detail, idx) => {
              return <Timeline.Description key={idx}>{detail}</Timeline.Description>
            })}
          </Stack>
          <Timeline.Description>
            <HStack gap={2} wrap="wrap">
              {badges.map((badge, idx) => {
                return <Badge key={idx}>{badge}</Badge>
              })}
            </HStack>
          </Timeline.Description>
        </Stack>
      </Timeline.Content>
    </Timeline.Item>
  )
}

export default function TimelineCustom({ data, ...rest }: ITimelineCustomProps) {
  return (
    <Timeline.Root variant="subtle" gap={6} {...rest}>
      {data.map((items, idx) => {
        return <TimelineItem {...items} key={idx} />
      })}
    </Timeline.Root>
  )
}
