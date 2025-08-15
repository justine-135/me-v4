import { Box } from '@chakra-ui/react/box'
import { Text } from '@chakra-ui/react/text'
import useThemeValues from '@/hooks/useThemeValues'

import NavLinks from './NavLinks'

export default function Sidebar() {
  const { background } = useThemeValues()

  return (
    <Box
      position="fixed"
      h="100vh"
      w="20rem"
      px="2rem"
      background={background}
      borderRightWidth="1px"
      zIndex={0}
      as="aside"
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
