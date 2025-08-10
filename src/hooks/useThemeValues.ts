import { useColorModeValue } from './useColorModeValue'

export default function useThemeValues() {
  const background = useColorModeValue('backgroundLight', 'backgroundDark')
  const backgroundAccent = useColorModeValue('backgroundAccentLight', 'backgroundAccentDark')

  return { background, backgroundAccent }
}
