import { Box, type BoxProps } from '@chakra-ui/react/box'

interface IGrixBoxItemLayoutProps extends BoxProps {
  children: React.ReactNode
}

export default function GridBoxItemLayout({ children, ...rest }: IGrixBoxItemLayoutProps) {
  return (
    <Box mb={4} breakInside="avoid" {...rest}>
      {children}
    </Box>
  )
}
