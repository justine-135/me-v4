import { Flex, type FlexProps } from '@chakra-ui/react/flex'
import React from 'react'

interface IFlexboxLayoutProps extends FlexProps {
  children: React.ReactNode
}

export default function FlexboxLayout({ children, ...rest }: IFlexboxLayoutProps) {
  return (
    <Flex gap={4} direction={{ base: 'column', md: 'row' }} as="article" {...rest}>
      {children}
    </Flex>
  )
}
