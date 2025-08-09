'use client'

import { useColorMode } from '@/hooks/useColorMode'
import type { IconButtonProps, SpanProps } from '@chakra-ui/react'
import { ClientOnly, IconButton, Skeleton, Span } from '@chakra-ui/react'
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

type ColorModeButtonProps = Omit<IconButtonProps, 'aria-label'>

export const ToggleThemeButton = React.forwardRef<HTMLButtonElement, ColorModeButtonProps>(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle color mode"
          size="sm"
          ref={ref}
          {...props}
          css={{
            _icon: {
              width: '5',
              height: '5',
            },
          }}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    )
  }
)

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  }
)

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(function DarkMode(props, ref) {
  return (
    <Span
      color="fg"
      display="contents"
      className="chakra-theme dark"
      colorPalette="gray"
      colorScheme="dark"
      ref={ref}
      {...props}
    />
  )
})
