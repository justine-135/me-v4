import { HStack, Stack } from '@chakra-ui/react/stack'
import AvatarCustom from '../AvatarCustom'
import { Typography } from '../Typography'
import { SkeletonCircle, SkeletonText } from '@chakra-ui/react/skeleton'

interface IAvatarSectionProps {
  name?: string
  subtitle?: string
  isLoading?: boolean
}

export default function AvatarSection({ name, subtitle, isLoading }: IAvatarSectionProps) {
  if (isLoading)
    return (
      <HStack gap={3}>
        <SkeletonCircle size="12" />
        <SkeletonText noOfLines={2} />
      </HStack>
    )

  return (
    <HStack gap={3}>
      <AvatarCustom variant="solid" fallback={name || ''} />
      <Stack gap="0">
        <Typography variant="heading" fontSize="md">
          {name}
        </Typography>
        <Typography>{subtitle}</Typography>
      </Stack>
    </HStack>
  )
}
