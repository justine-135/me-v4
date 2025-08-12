import useThemeValues from '@/hooks/useThemeValues'
import { Text, type TextProps } from '@chakra-ui/react'
import React from 'react'

interface TypographyProps extends TextProps {
  variant?: 'heading' | 'subheading' | 'body' | 'caption'
}

export const Typography: React.FC<TypographyProps> = ({ variant = 'body', children, ...rest }) => {
  const { color } = useThemeValues()

  const variantStyles = {
    heading: {
      fontSize: ['xl', '2xl'],
      fontWeight: 'semibold',
    },
    subheading: {
      fontSize: ['sm', 'md'],
      fontWeight: 'semibold',
    },
    body: {
      fontSize: ['xs', 'sm'],
      fontWeight: 'normal',
      color,
    },
    caption: {
      fontSize: 'sm',
      fontWeight: 'light',
      color: 'gray.500',
    },
  }

  return (
    <Text {...variantStyles[variant]} {...rest}>
      {children}
    </Text>
  )
}
