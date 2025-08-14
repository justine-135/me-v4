import { Flex, type FlexProps } from '@chakra-ui/react/flex'
import React from 'react'

interface IFlexboxLayoutProps extends FlexProps {
  children: React.ReactNode
}

export default function FlexboxLayout({ children, ...rest }: IFlexboxLayoutProps) {
  return (
    <Flex gap={4} direction={{ sm: 'column', mdToLg: 'column', md: 'row' }} {...rest}>
      {children}
    </Flex>
  )
}
