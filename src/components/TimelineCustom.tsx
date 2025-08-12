import { LuCheck } from 'react-icons/lu'
import { HStack, Timeline, Badge, type TimelineRootProps, Stack } from '@chakra-ui/react'
import { SKILL_COLORS } from '@/constants/badge'

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
        <Timeline.Separator />
        <Timeline.Indicator background={`${current && 'green.300'}`}>
          <LuCheck />
        </Timeline.Indicator>
      </Timeline.Connector>
      <Timeline.Content>
        <Stack mb={2} gap={0}>
          <HStack justifyContent="space-between">
            <Timeline.Title>{title}</Timeline.Title>
            <Badge variant="outline">{date}</Badge>
          </HStack>
          <Timeline.Description>{subtitle}</Timeline.Description>
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
                const color = SKILL_COLORS[badge] || 'transparent'
                return (
                  <Badge key={idx} colorPalette={color}>
                    {badge}
                  </Badge>
                )
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
    <Timeline.Root variant="subtle" {...rest}>
      {data.map((items, idx) => {
        return <TimelineItem {...items} key={idx} />
      })}
    </Timeline.Root>
  )
}
