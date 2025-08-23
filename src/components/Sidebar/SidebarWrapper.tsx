import { Box } from '@chakra-ui/react/box'

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display={{ base: 'none', sm: 'block' }}
      position="fixed"
      h="100vh"
      w={{ smToLg: '14rem', md: '18rem' }}
      px="2rem"
      py="2rem"
      borderRightWidth="1px"
      zIndex={0}
      as="aside"
    >
      {children}
    </Box>
  )
}
