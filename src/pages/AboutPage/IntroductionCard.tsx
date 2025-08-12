import AvatarCustom from '@/components/AvatarCustom'
import { Typography } from '@/components/Typography'
import { PROFILE_IMAGE } from '@/constants/assets'
import GridCard from '@/layout/GridCard'
import { HStack, Stack } from '@chakra-ui/react/stack'

export const IntroductionCard = ({
  name,
  jobTitle,
  intros,
}: {
  name: string
  jobTitle: string
  intros: string[]
}) => {
  return (
    <GridCard>
      <Stack gap={10}>
        <HStack gap={3}>
          <AvatarCustom size="2xl" src={PROFILE_IMAGE} fallback={name} />
          <Stack gap="0">
            <Typography variant="heading">{name}</Typography>
            <Typography>{jobTitle}</Typography>
          </Stack>
        </HStack>
        <Stack gap={2}>
          <Typography variant="subheading">About</Typography>
          {intros.map((intro, idx) => {
            return <Typography key={idx}>{intro}</Typography>
          })}
        </Stack>
      </Stack>
    </GridCard>
  )
}
