import { Avatar, type AvatarRootProps } from '@chakra-ui/react/avatar'

interface IAvatarProps extends AvatarRootProps {
  src?: string
  fallback?: string
}

export default function AvatarCustom({ src, fallback, ...rest }: IAvatarProps) {
  return (
    <Avatar.Root {...rest}>
      <Avatar.Image src={src} />
      <Avatar.Fallback name={fallback} />
    </Avatar.Root>
  )
}
