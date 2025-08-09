import type { ThemeProviderProps } from 'next-themes'

export type ColorMode = 'light' | 'dark'

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export type ColorModeProviderProps = ThemeProviderProps
