import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Box } from '@chakra-ui/react'
import React from 'react'

export default function WrapperLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box pt="48px">
      <Header />
      <Sidebar />
      <Box ml="19rem" p={8}>
        {children}
      </Box>
    </Box>
  )
}
