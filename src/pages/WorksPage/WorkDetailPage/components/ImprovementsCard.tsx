import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import useThemeValues from '@/hooks/useThemeValues'
import { Badge } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react/box'
import { HStack, Stack } from '@chakra-ui/react/stack'

interface IImprovementsCardProps {
  improvements?: string[]
}

export default function ImprovementsCard({ improvements }: IImprovementsCardProps) {
  const { backgroundAccent } = useThemeValues()
  return (
    <CardCustom cardTitle="🛠️ Feature improvements" as="section">
      <Stack gap={4}>
        <Typography>Potential enhancements and next steps</Typography>
        <Stack>
          {improvements?.map((string, idx) => {
            return (
              <Box bg={backgroundAccent} key={idx} p={2} rounded="lg">
                <HStack alignItems="start" gap={3}>
                  <Badge colorPalette="blue">{idx + 1}</Badge>
                  <Typography>{string}</Typography>
                </HStack>
              </Box>
            )
          })}
        </Stack>
      </Stack>
    </CardCustom>
  )
}
