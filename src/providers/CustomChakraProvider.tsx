'use client'

import type { ColorModeProviderProps } from '@/types/ColorModes'
import {
  ChakraProvider,
  createSystem,
  defineConfig,
  defaultConfig,
  defineSlotRecipe,
} from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'

export function ColorModeProvider(props: ColorModeProviderProps) {
  return <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
}

const card = defineSlotRecipe({
  className: 'card',
  slots: ['root', 'header', 'body', 'footer'],
  variants: {
    variant: {
      none: {
        root: { bg: 'transparent', border: '0', shadow: 'none' },
      },
    },
  },
})

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        backgroundLight: { value: 'white' },
        backgroundDark: { value: '#111111' },
        backgroundAccentLight: { value: '#f3f3f3' },
        backgroundAccentDark: { value: '#1d1d1d' },
        textDark: { value: '#a1a1aa' },
        textLight: { value: '#52525b' },
      },
    },
    breakpoints: {},
    slotRecipes: {
      card,
    },
  },
})

const system = createSystem(defaultConfig, config)

export function CustomChakraProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
