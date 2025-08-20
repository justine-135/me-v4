import { Box, Flex } from '@chakra-ui/react'
import { ToggleThemeButton } from './Button/ToggleThemeButton'
import useThemeValues from '@/hooks/useThemeValues'
import AvailableBadge from './Badge/AvailableBadge'

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
      paddingX="2rem"
      background={background}
      borderBottomWidth="1px"
      zIndex={3}
      as="header"
    >
      <Box>
        <AvailableBadge />
      </Box>
      <ToggleThemeButton />
    </Flex>
  )
}
