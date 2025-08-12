import { LuCheck } from 'react-icons/lu'
import { HStack, Timeline, Badge, type TimelineRootProps } from '@chakra-ui/react'

interface ITimelineData {
  title: string
  company: string
  details: string[]
  date: string
  current: boolean
  badges: string[]
}

interface ITimelineCustomProps extends TimelineRootProps {
  data: ITimelineData[]
}

const TimelineItem = ({ title, company, details, date, current, badges }: ITimelineData) => {
  return (
    <Timeline.Item>
      <Timeline.Connector>
        <Timeline.Separator />
        <Timeline.Indicator background={`${current && 'green.300'}`}>
          <LuCheck />
        </Timeline.Indicator>
      </Timeline.Connector>
      <Timeline.Content>
        <HStack justifyContent="space-between">
          <Timeline.Title>
            {title} - {company}
          </Timeline.Title>
          <Badge variant="outline">{date}</Badge>
        </HStack>
        {details.map((detail, idx) => {
          return <Timeline.Description key={idx}>{detail}</Timeline.Description>
        })}
        <Timeline.Description spaceX="0.5rem">
          {badges.map((badge, idx) => {
            return <Badge key={idx}>{badge}</Badge>
          })}
        </Timeline.Description>
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
