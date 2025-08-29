import { Box } from '@chakra-ui/react'
import React from 'react'

export default function WrapperLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box mt="48px" ml={{ smToLg: '14rem', md: '19rem' }} p={{ base: 4, md: 8 }} as="main">
      {children}
    </Box>
  )
}
