import { Box } from '@chakra-ui/react/box'
import React from 'react'

export default function GridBoxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box columnCount={{ mdToLg: 1, md: 2 }} columnGap={4}>
      {children}
    </Box>
  )
}
