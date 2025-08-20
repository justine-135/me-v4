import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { Flex, Stack, Text } from '@chakra-ui/react'

interface ISectionProps {
  title: string
  values?: string[]
}

const Section = ({ title, values }: ISectionProps) => {
  return (
    <Stack flex={1} as="section">
      <Typography fontWeight="500">{title}</Typography>
      <Stack as="ul">
        {values?.map((value, idx) => {
          return (
            <Text key={idx} as="li" fontSize="sm">
              {value}
            </Text>
          )
        })}
      </Stack>
    </Stack>
  )
}

interface IExpertiseProps {
  frontend?: string[]
  backend?: string[]
  database?: string[]
  tools?: string[]
}

export default function Expertise({ frontend, backend, database, tools }: IExpertiseProps) {
  return (
    <CardCustom cardTitle="Skills & expertise">
      <Stack gap={4}>
        <Typography>
          Technologies and tools I'm mastering to build modern web applications
        </Typography>
        <Flex>
          <Section title="Frontend" values={frontend} />
          <Section title="Backend" values={backend} />
          <Section title="Database" values={database} />
          <Section title="Tools" values={tools} />
        </Flex>
      </Stack>
    </CardCustom>
  )
}
