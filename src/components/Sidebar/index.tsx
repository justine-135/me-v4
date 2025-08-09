import { Box } from '@chakra-ui/react/box'
import { Text } from '@chakra-ui/react/text'
import useThemeValues from '@/hooks/useThemeValues'

import NavLinks from './NavLinks'

export default function Sidebar() {
  const { border, background } = useThemeValues()

  return (
    <Box
      position="fixed"
      h="100vh"
      w="18rem"
      px="2rem"
      background={background}
      borderRightWidth="1px"
      borderRightColor={border}
      zIndex={0}
    >
      <Box>
        <Box py="3rem">
          <Text fontWeight="500">Navigation</Text>
        </Box>
        <NavLinks />
      </Box>
    </Box>
  )
}
