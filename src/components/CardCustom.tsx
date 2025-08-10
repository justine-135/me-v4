import { Card } from '@chakra-ui/react'
import React from 'react'
import { Typography } from './Typography'

export default function CardCustom({
  title,
  children,
}: {
  title?: React.ReactNode | string
  children: React.ReactNode
}) {
  const isTitleString = typeof title === 'string'

  return (
    <Card.Root maxW="sm">
      <Card.Header>
        <Card.Title>
          {isTitleString ? <Typography variant="subheading">{title}</Typography> : title}
        </Card.Title>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card.Root>
  )
}
