import { useColorModeValue } from './useColorModeValue'

export default function useThemeValues() {
  const background = useColorModeValue('backgroundLight', 'backgroundDark')
  const backgroundAccent = useColorModeValue('backgroundAccentLight', 'backgroundAccentDark')
  const color = useColorModeValue('textLight', 'textDark')

  return { background, backgroundAccent, color }
}
