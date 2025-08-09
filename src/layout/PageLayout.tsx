import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Box } from '@chakra-ui/react'
import React from 'react'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box pt="48px">
      <Header />
      <Sidebar />
      <Box ml="18rem" p={4}>
        {children}
      </Box>
    </Box>
  )
}
