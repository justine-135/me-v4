import { Typography } from '@/components/Typography'
import { Stack } from '@chakra-ui/react/stack'
import type React from 'react'
import { Button, type FlexProps } from '@chakra-ui/react'
import FlexboxLayout from './FlexLayout'
import { useNavigate } from 'react-router'
import { BsArrowLeft } from 'react-icons/bs'
import useThemeValues from '@/hooks/useThemeValues'

const BackButton = () => {
  const navigate = useNavigate()
  const { backgroundAccent } = useThemeValues()

  return (
    <Button
      onClick={() => navigate(-1)}
      variant="plain"
      size="sm"
      _hover={{ background: backgroundAccent }}
    >
      <BsArrowLeft /> <Typography>Back</Typography>
    </Button>
  )
}

interface IPageLayoutProps {
  title?: string
  children: React.ReactNode
  flexboxLayoutProps?: FlexProps
  showBackBtn?: boolean
}

export default function PageLayout({
  title,
  children,
  flexboxLayoutProps,
  showBackBtn = false,
}: IPageLayoutProps) {
  return (
    <Stack gap={4}>
      <Stack alignItems="start">
        {showBackBtn && <BackButton />}
        {title && <Typography variant="heading">{title}</Typography>}
      </Stack>
      <FlexboxLayout {...flexboxLayoutProps}>{children}</FlexboxLayout>
    </Stack>
  )
}
