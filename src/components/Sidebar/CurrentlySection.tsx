import { HStack, Stack, Text } from '@chakra-ui/react'
import CardCustom from '../CardCustom'
import type { ReactNode } from 'react'
import { Typography } from '../Typography'
import { BiLaptop } from 'react-icons/bi'
import { FaChartLine } from 'react-icons/fa'
import { PiNeedle } from 'react-icons/pi'

interface ISectionsProps {
  title: ReactNode
  value: ReactNode
}

const Section = ({ title, value }: ISectionsProps) => {
  return (
    <CardCustom p={0} cardBodyProps={{ p: 2 }}>
      <Stack>
        {title}
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
      <Section
        title={
          <Typography fontWeight={500} fontSize="xs">
            <HStack>
              <BiLaptop />
              WORKING ON
            </HStack>
          </Typography>
        }
        value={working_on}
      />
      <Section
        title={
          <Typography fontWeight={500} fontSize="xs">
            <HStack>
              <FaChartLine />
              LEARNING ON
            </HStack>
          </Typography>
        }
        value={learning_on}
      />
      <Section
        title={
          <Typography fontWeight={500} fontSize="xs">
            <HStack>
              <PiNeedle />
              LOCATION & TIME
            </HStack>
          </Typography>
        }
        value={
          <>
            <Text>{location}</Text>
            <Text>{time}</Text>
          </>
        }
      />
    </Stack>
  )
}
