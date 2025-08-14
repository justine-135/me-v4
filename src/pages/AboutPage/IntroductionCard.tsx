import { ProfileImg } from '@/assets'
import AvatarCustom from '@/components/AvatarCustom'
import CardCustom from '@/components/CardCustom'
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
    <CardCustom>
      <Stack gap={10}>
        <HStack gap={3}>
          <AvatarCustom size="2xl" src={ProfileImg} fallback={name || ''} />
          <Stack gap="0">
            <Typography variant="heading">{name}</Typography>
            <Typography>{jobTitle}</Typography>
          </Stack>
        </HStack>
        <Stack gap={2}>
          <Typography variant="subheading">About</Typography>
          {intros?.map((intro, idx) => {
            return <Typography key={idx}>{intro}</Typography>
          })}
        </Stack>
      </Stack>
    </CardCustom>
  )
}
