import { Stack, type StackProps } from '@chakra-ui/react/stack'

interface IStackLayoutProps extends StackProps {
  children: React.ReactNode
}

export default function StackLayout({ children, ...rest }: IStackLayoutProps) {
  return (
    <Stack flex={2} gap={4} direction="column" {...rest}>
      {children}
    </Stack>
  )
}
