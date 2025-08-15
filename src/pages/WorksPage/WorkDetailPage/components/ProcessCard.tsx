import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import type { IProcess } from '@/types/Works'
import { Badge, Box, HStack, List, Stack } from '@chakra-ui/react'

interface IProcessCardProps {
  processes?: IProcess[]
}

export default function ProcessCard({ processes }: IProcessCardProps) {
  return (
    <CardCustom cardTitle="Project process">
      <Typography>Step-by-step approach from planning to implementation</Typography>
      <Stack mt={4} gap={4}>
        {processes?.map((process, idx) => {
          const { title, details } = process
          return (
            <Box key={idx}>
              <HStack alignItems="start" gap={3}>
                <Badge variant="solid" size="lg" rounded="full">
                  {idx}
                </Badge>
                <Stack>
                  <Typography variant="subheading">{title}</Typography>
                  <List.Root mt={2} gap={2}>
                    {details?.map((detail) => {
                      return (
                        <List.Item>
                          <Typography>{detail}</Typography>
                        </List.Item>
                      )
                    })}
                  </List.Root>
                </Stack>
              </HStack>
            </Box>
          )
        })}
      </Stack>
    </CardCustom>
  )
}
