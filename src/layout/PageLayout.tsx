import { Typography } from '@/components/Typography'
import { Stack } from '@chakra-ui/react/stack'
import type React from 'react'
import { Button } from '@chakra-ui/react/button'
import FlexboxLayout from './FlexLayout'
import { useNavigate } from 'react-router'
import { BsArrowLeft } from 'react-icons/bs'
import useThemeValues from '@/hooks/useThemeValues'
import StackLayout from './StackLayout'

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
  showBackBtn?: boolean
  topSection?: React.ReactNode
  asideSection?: React.ReactNode
}

export default function PageLayout({
  title,
  children,
  showBackBtn = false,
  topSection,
  asideSection,
}: IPageLayoutProps) {
  return (
    <Stack gap={4} as="section">
      <Stack alignItems="start">
        {showBackBtn && <BackButton />}
        {title && (
          <Typography variant="heading" as="h1">
            {title}
          </Typography>
        )}
      </Stack>
      <Stack gap={6} maxW="4xl">
        {/* Top section */}
        {topSection && <StackLayout>{topSection}</StackLayout>}
        <FlexboxLayout>
          {/* Main section */}
          <StackLayout flex={1} as="section" w={{ mdToLg: '100%', md: '70%' }}>
            {children}
          </StackLayout>
          {/* Right side section */}
          {asideSection && (
            <StackLayout as="aside" w={{ mdToLg: '100%', md: '30%' }}>
              {asideSection}
            </StackLayout>
          )}
        </FlexboxLayout>
      </Stack>
    </Stack>
  )
}
