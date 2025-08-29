import { HStack, SkeletonText, Stack, Text } from '@chakra-ui/react'
import CardCustom from '../CardCustom'
import type { ReactNode } from 'react'
import { Typography } from '../Typography'
import { BiLaptop } from 'react-icons/bi'
import { FaChartLine } from 'react-icons/fa'
import { PiNeedle } from 'react-icons/pi'
import type { IconType } from 'react-icons'
import { motion } from 'motion/react'

const MotionText = motion.create(Text)

interface ISectionsProps {
  title: ReactNode
  Icon: IconType
  value: ReactNode
  index: number
  isLoading: boolean
}

const Section = ({ title, value, Icon, index, isLoading }: ISectionsProps) => {
  return (
    <CardCustom p={0} cardBodyProps={{ p: 2 }}>
      <Stack>
        <HStack>
          <Icon />
          <Typography fontWeight={500} fontSize="xs">
            {title}
          </Typography>
        </HStack>
        {isLoading ? (
          <SkeletonText noOfLines={1} w="90%" />
        ) : (
          <MotionText
            fontSize="xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: 2 * 0.1 * index,
            }}
          >
            {value}
          </MotionText>
        )}
      </Stack>
    </CardCustom>
  )
}

interface ICurrentlySectionProps {
  working_on?: string
  learning_on?: string
  location?: string
  time?: string
  isLoading: boolean
}

export default function CurrentlySection({
  working_on,
  learning_on,
  location,
  time,
  isLoading,
}: ICurrentlySectionProps) {
  const arrCardDetails = [
    {
      title: 'WORKING ON',
      Icon: BiLaptop,
      value: working_on,
    },
    {
      title: 'LEARNING ON',
      Icon: FaChartLine,
      value: learning_on,
    },
    {
      title: 'LOCATION & TIME',
      Icon: PiNeedle,
      value: `${location} - ${time}`,
    },
  ]
  return (
    <Stack>
      {arrCardDetails.map((detail, idx) => {
        return (
          <Section
            key={idx}
            title={detail.title}
            Icon={detail.Icon}
            value={detail.value}
            index={idx}
            isLoading={isLoading}
          />
        )
      })}
    </Stack>
  )
}
