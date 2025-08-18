import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import type { IChallenges } from '@/types/Works'
import { Badge, Box, Stack } from '@chakra-ui/react'

type TChallengesSolutionsCard = {
  challenges?: IChallenges[]
}

export default function ChallengesSolutionsCard({ challenges }: TChallengesSolutionsCard) {
  return (
    <CardCustom cardTitle="Challenges & Solutions">
      <Stack gap={4}>
        <Typography>Technical obstacles overcome during development</Typography>
        <Stack gap={6}>
          {challenges?.map((item, idx) => {
            return (
              <Stack key={idx}>
                <Badge
                  colorPalette="orange"
                  p={4}
                  style={{
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'anywhere',
                    maxWidth: '100%',
                  }}
                >
                  <Stack>
                    <Typography variant="subheading" fontSize="sm">
                      Challenge:
                    </Typography>
                    <Box>{item.challenge}</Box>
                  </Stack>
                </Badge>
                <Badge
                  colorPalette="green"
                  p={4}
                  style={{
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    overflowWrap: 'anywhere',
                    maxWidth: '100%',
                  }}
                >
                  <Stack>
                    <Typography variant="subheading" fontSize="sm">
                      Solution:
                    </Typography>
                    <Box>{item.solution}</Box>
                  </Stack>
                </Badge>
              </Stack>
            )
          })}
        </Stack>
      </Stack>
    </CardCustom>
  )
}
