import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { Badge, Box, Flex, Stack, VStack } from '@chakra-ui/react'

interface ISectionProps {
  title: string
  values?: string[]
}

const Section = ({ title, values }: ISectionProps) => {
  return (
    <Stack flex={1} as="section">
      <Typography fontWeight="500">{title}</Typography>
      <VStack as="ul" alignItems="start">
        {values?.map((value, idx) => {
          return (
            <Box key={idx} as="li" w="auto">
              <Badge>{value}</Badge>
            </Box>
          )
        })}
      </VStack>
    </Stack>
  )
}

interface IExpertiseProps {
  core?: string[]
  database?: string[]
  tools?: string[]
}

export default function Expertise({ core, database, tools }: IExpertiseProps) {
  return (
    <CardCustom cardTitle="Skills & expertise">
      <Stack gap={4}>
        <Typography>
          Technologies and tools I'm mastering to build modern web applications
        </Typography>
        <Flex wrap="wrap" gap={4}>
          <Section title="Core Technologies" values={core} />
          <Section title="Database" values={database} />
          <Section title="Tools" values={tools} />
        </Flex>
      </Stack>
    </CardCustom>
  )
}
