import { ProfileImg } from '@/assets'
import AvatarCustom from '@/components/AvatarCustom'
import AvailableBadge from '@/components/Badge/AvailableBadge'
import { Typography } from '@/components/Typography'
import { HStack, Stack } from '@chakra-ui/react/stack'

export const IntroductionCard = ({
  name,
  jobTitle,
  intros,
}: {
  name?: string
  jobTitle?: string
  intros?: string[]
}) => {
  return (
    <Stack gap={8}>
      <HStack gap={3}>
        <AvatarCustom size="2xl" src={ProfileImg} fallback={name || ''} />
        <Stack gap="1" alignItems="start">
          <Typography variant="heading">{name}</Typography>
          <Typography>{jobTitle}</Typography>
          <AvailableBadge mt={1} />
        </Stack>
      </HStack>
      <Stack gap={2}>
        <Typography variant="subheading">About</Typography>
        {intros?.map((intro, idx) => {
          return <Typography key={idx}>{intro}</Typography>
        })}
      </Stack>
    </Stack>
  )
}
