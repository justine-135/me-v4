import type { ColorMode, UseColorModeReturn } from '@/types/ColorModes'
import { useTheme } from 'next-themes'

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme()
  const colorMode = forcedTheme || resolvedTheme

  const toggleColorMode = () => {
    document.documentElement.setAttribute('data-theme', colorMode === 'light' ? 'dark' : 'light')
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return {
    colorMode: colorMode as ColorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}
