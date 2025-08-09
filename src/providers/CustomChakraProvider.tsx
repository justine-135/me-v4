'use client'

import type { ColorModeProviderProps } from '@/types/ColorModes'
import { ChakraProvider, createSystem, defineConfig, defaultConfig } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'

export function ColorModeProvider(props: ColorModeProviderProps) {
  return <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
}

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        backgroundLight: { value: 'white' },
        backgroundDark: { value: 'black' },
        borderLight: { value: '#c2c2c2' },
        borderDark: { value: '#383838' },
      },
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
