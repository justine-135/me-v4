import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { Box, List, Stack } from '@chakra-ui/react'
import { LuCircleCheck } from 'react-icons/lu'

interface IFunctionalitiesCardProps {
  functions?: string[]
}

export default function FunctionalitiesCard({ functions }: IFunctionalitiesCardProps) {
  return (
    <CardCustom cardTitle="Key functionalities">
      <Stack gap={4}>
        <Typography>Core features and capabilities of the project</Typography>
        <List.Root variant="plain" gap={2}>
          {functions?.map((string, idx) => {
            return (
              <List.Item key={idx}>
                <List.Indicator asChild color="green.500">
                  <LuCircleCheck />
                </List.Indicator>
                <Box fontSize="sm">{string}</Box>
              </List.Item>
            )
          })}
        </List.Root>
      </Stack>
    </CardCustom>
  )
}
