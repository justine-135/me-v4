import { HStack, Stack } from '@chakra-ui/react/stack'
import AvatarCustom from '../AvatarCustom'
import { Typography } from '../Typography'

interface IAvatarSectionProps {
  name?: string
  subtitle?: string
}

export default function AvatarSection({ name, subtitle }: IAvatarSectionProps) {
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
