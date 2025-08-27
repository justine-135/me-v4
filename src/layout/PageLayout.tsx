import { Typography } from '@/components/Typography'
import { Stack } from '@chakra-ui/react/stack'
import type React from 'react'
import { Button } from '@chakra-ui/react/button'
import FlexboxLayout from './FlexLayout'
import { useNavigate } from 'react-router'
import { BsArrowLeft } from 'react-icons/bs'
import useThemeValues from '@/hooks/useThemeValues'
import StackLayout from './StackLayout'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { Separator } from '@chakra-ui/react/separator'
import Meta, { type MetaProps } from '@/pages/Meta'

const BackButton = () => {
  const navigate = useNavigate()
  const { backgroundAccent } = useThemeValues()

  return (
    <Button
      onClick={() => navigate(-1)}
      variant="plain"
      size={{ base: 'xs', sm: 'sm' }}
      _hover={{ background: backgroundAccent }}
    >
      <BsArrowLeft /> <Typography>Back</Typography>
    </Button>
  )
}

interface IPageLayoutProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  showBackBtn?: boolean
  topSection?: React.ReactNode
  asideSection?: React.ReactNode
  footerSection?: React.ReactNode
  metaProps?: MetaProps
}

export default function PageLayout({
  title,
  subtitle,
  children,
  showBackBtn = false,
  topSection,
  asideSection,
  footerSection,
  metaProps,
}: IPageLayoutProps) {
  useScrollToTop()

  return (
    <>
      <Meta {...metaProps} />
      <Stack gap={4} as="section">
        <Stack gap={{ base: 2, sm: 6 }} maxW="4xl">
          <Stack alignItems="start">
            {showBackBtn && <BackButton />}
            <Stack w="full">
              {title && (
                <Typography variant="heading" as="h1">
                  {title}
                </Typography>
              )}
              {subtitle && <Typography>{subtitle}</Typography>}
              {subtitle && title && <Separator />}
            </Stack>
          </Stack>
          {/* Top section */}
          {topSection && <StackLayout>{topSection}</StackLayout>}
          <FlexboxLayout>
            {/* Main section */}
            <StackLayout flex={1} as="section" w={{ base: '100%', md: '70%' }}>
              {children}
            </StackLayout>
            {/* Right side section */}
            {asideSection && (
              <StackLayout as="aside" minW="186px" w={{ base: '100%', md: '30%' }}>
                {asideSection}
              </StackLayout>
            )}
          </FlexboxLayout>
          {/* Footer section */}
          <FlexboxLayout flexDirection="column" as="section" w="full">
            {footerSection}
          </FlexboxLayout>
        </Stack>
      </Stack>
    </>
  )
}
