import { useColorModeValue } from './useColorModeValue'

export default function useThemeValues() {
  const border = useColorModeValue('borderLight', 'borderDark')
  const background = useColorModeValue('backgroundLight', 'backgroundDark')

  return { border, background }
}
