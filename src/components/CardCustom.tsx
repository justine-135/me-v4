import { Card, type CardRootProps } from '@chakra-ui/react/card'
import React from 'react'
import { Typography } from './Typography'

export interface ICardCustomProps extends CardRootProps {
  cardTitle?: React.ReactNode | string
  children?: React.ReactNode
}

export default function CardCustom({ cardTitle, children, ...rest }: ICardCustomProps) {
  const isTitleString = typeof cardTitle === 'string'

  return (
    <Card.Root {...rest}>
      <Card.Header pt={4} px={4}>
        <Card.Title>
          {isTitleString ? <Typography variant="subheading">{cardTitle}</Typography> : cardTitle}
        </Card.Title>
      </Card.Header>
      <Card.Body pt={!cardTitle ? '0rem' : '4rem'} p={4}>
        {children}
      </Card.Body>
    </Card.Root>
  )
}
