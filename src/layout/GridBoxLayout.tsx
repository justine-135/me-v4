import { Box, type BoxProps } from '@chakra-ui/react/box'
import React from 'react'

interface IGridBoxLayoutProps extends BoxProps {
  children: React.ReactNode
}

export default function GridBoxLayout({ children, ...rest }: IGridBoxLayoutProps) {
  return (
    <Box columnCount={{ mdToLg: 1, md: 2 }} columnGap={4} {...rest}>
      {children}
    </Box>
  )
}
