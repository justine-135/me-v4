import { Box, Flex } from '@chakra-ui/react'
import { ToggleThemeButton } from './Button/ToggleThemeButton'
import useThemeValues from '@/hooks/useThemeValues'
import AvailableBadge from './Badge/AvailableBadge'
import { SidebarDrawer } from './Sidebar/SidebarDrawer'

export default function Header() {
  const { background } = useThemeValues()

  return (
    <Flex
      position="fixed"
      top={0}
      justify="space-between"
      alignItems="center"
      h="48px"
      w="100%"
      paddingX={{ base: 4, sm: 8 }}
      background={background}
      borderBottomWidth="1px"
      zIndex={3}
      as="header"
    >
      <Box>
        <AvailableBadge />
      </Box>
      <Box display={{ base: 'none', sm: 'block' }}>
        <ToggleThemeButton />
      </Box>
      <Box display={{ base: 'block', sm: 'none' }}>
        <SidebarDrawer />
      </Box>
    </Flex>
  )
}
