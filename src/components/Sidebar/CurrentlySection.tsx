import { HStack, Stack, Text } from '@chakra-ui/react'
import CardCustom from '../CardCustom'
import type { ReactNode } from 'react'
import { Typography } from '../Typography'
import { BiLaptop } from 'react-icons/bi'
import { FaChartLine } from 'react-icons/fa'
import { PiNeedle } from 'react-icons/pi'
import type { IconType } from 'react-icons'

interface ISectionsProps {
  title: ReactNode
  Icon: IconType
  value: ReactNode
}

const Section = ({ title, value, Icon }: ISectionsProps) => {
  return (
    <CardCustom p={0} cardBodyProps={{ p: 2 }}>
      <Stack>
        <HStack>
          <Icon />
          <Typography fontWeight={500} fontSize="xs">
            {title}
          </Typography>
        </HStack>
        <Text fontSize="xs">{value}</Text>
      </Stack>
    </CardCustom>
  )
}

interface ICurrentlySectionProps {
  working_on?: string
  learning_on?: string
  location?: string
  time?: string
}

export default function CurrentlySection({
  working_on,
  learning_on,
  location,
  time,
}: ICurrentlySectionProps) {
  return (
    <Stack>
      <Section title="WORKING ON" Icon={BiLaptop} value={working_on} />
      <Section title="LEARNING ON" Icon={FaChartLine} value={learning_on} />
      <Section
        title="
              LOCATION & TIME"
        Icon={PiNeedle}
        value={
          <>
            <>{location}</>-<>{time}</>
          </>
        }
      />
    </Stack>
  )
}
