import { Stack, type StackProps } from '@chakra-ui/react/stack'

interface IStackLayoutProps extends StackProps {
  children: React.ReactNode
}

export default function StackLayout({ children, ...rest }: IStackLayoutProps) {
  return (
    <Stack gap={4} direction="column" {...rest}>
      {children}
    </Stack>
  )
}
