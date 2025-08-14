import { Card, type CardRootProps, type CardBodyProps } from '@chakra-ui/react/card'
import React from 'react'
import { Typography } from './Typography'

export interface ICardCustomProps extends CardRootProps {
  cardTitle?: React.ReactNode | string
  children?: React.ReactNode
  cardBodyProps?: CardBodyProps
}

export default function CardCustom({
  cardTitle,
  children,
  cardBodyProps,
  ...rest
}: ICardCustomProps) {
  const isTitleString = typeof cardTitle === 'string'

  return (
    <Card.Root {...rest}>
      {cardTitle && (
        <Card.Header pt={4} px={4}>
          <Card.Title>
            {isTitleString ? <Typography variant="subheading">{cardTitle}</Typography> : cardTitle}
          </Card.Title>
        </Card.Header>
      )}
      <Card.Body pt={!cardTitle ? '0rem' : '4rem'} p={4} {...cardBodyProps}>
        {children}
      </Card.Body>
    </Card.Root>
  )
}
