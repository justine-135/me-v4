import { Flex } from '@chakra-ui/react'
import { ToggleThemeButton } from '../Button/ToggleThemeButton'
import useThemeValues from '@/hooks/useThemeValues'

export default function Header() {
  const { border, background } = useThemeValues()

  return (
    <Flex
      position="fixed"
      top={0}
      justify="space-between"
      alignItems="center"
      h="48px"
      w="100%"
      paddingX={4}
      background={background}
      borderColor={border}
      borderBottomWidth="1px"
      zIndex={3}
    >
      <div>Justine Upano</div>
      <div>
        <ToggleThemeButton />
      </div>
    </Flex>
  )
}
