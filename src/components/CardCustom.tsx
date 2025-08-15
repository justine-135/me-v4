import { Card, type CardRootProps, type CardBodyProps } from '@chakra-ui/react/card'
import { Image, type ImageProps } from '@chakra-ui/react/image'
import React from 'react'
import { Typography } from './Typography'
import { Box } from '@chakra-ui/react/box'

export interface ICardCustomProps extends CardRootProps {
  cardTitle?: React.ReactNode | string
  children?: React.ReactNode
  cardBodyProps?: CardBodyProps
  imageProps?: ImageProps
}

export default function CardCustom({
  cardTitle,
  children,
  cardBodyProps,
  imageProps,
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
      {imageProps?.src && (
        <Box overflow="hidden" rounded="md">
          <Image
            h={180}
            alt="Project image"
            transition="transform 0.4s ease"
            _hover={{ transform: 'scale(1.1)' }}
            objectFit="cover"
            w="full"
            {...imageProps}
          />
        </Box>
      )}
      {children && (
        <Card.Body pt={!cardTitle ? '0rem' : '4rem'} p={4} {...cardBodyProps}>
          {children}
        </Card.Body>
      )}
    </Card.Root>
  )
}
