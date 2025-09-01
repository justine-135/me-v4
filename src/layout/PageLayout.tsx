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
import { motion, useAnimate } from 'motion/react'
import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import HomeSkeleton from '@/components/Skeleton/HomeSkeleton'

const MotionStack = motion.create(StackLayout)

const motionVariants = {
  initial: { opacity: 0, scale: 0.95, y: -10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -30,
    transition: {
      duration: 0.2,
    },
  },
}

interface IMainContentSection {
  topSection?: React.ReactNode
  asideSection?: React.ReactNode
  footerSection?: React.ReactNode
  children: React.ReactNode
  isLoading?: boolean
  skeleton?: React.ReactNode
}

const MainContentSection = ({
  topSection,
  children,
  asideSection,
  footerSection,
  isLoading = false,
  skeleton = <HomeSkeleton />,
}: IMainContentSection) => {
  const [scope, animate] = useAnimate()
  const [scopeSkeleton, animateSkeleton] = useAnimate()

  useEffect(() => {
    if (isLoading) {
      animateSkeleton(scopeSkeleton.current, { opacity: [0, 1], y: [-10, 0] }, { duration: 0.4 })
      return
    }

    if (!isLoading) {
      animate(
        scopeSkeleton.current,
        {
          opacity: [1, 0],
          y: [0, -10],
          position: ['relative', 'absolute'],
          display: ['block', 'none'],
        },
        { duration: 0.4 }
      )
      animate(scope.current, { opacity: [0, 1], y: [10, 0] }, { duration: 0.4, delay: 0.6 })
    }
  }, [isLoading, animate, scope, animateSkeleton, scopeSkeleton])

  return (
    <Box position="relative" w="full">
      <Box ref={scopeSkeleton} pt={4}>
        {skeleton}
      </Box>
      {!isLoading && (
        <div ref={scope}>
          <MotionStack
            variants={motionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            {/* Top section */}
            {topSection && <Stack spaceY={4}>{topSection}</Stack>}
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
          </MotionStack>
        </div>
      )}
    </Box>
  )
}

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

interface IHeadingSection {
  showBackBtn: boolean
  title?: string
  subtitle?: string
}

const HeadingSection = ({ showBackBtn, title, subtitle }: IHeadingSection) => {
  return (
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
  isLoading?: boolean
  metaProps?: MetaProps
  skeleton?: React.ReactNode
}

export default function PageLayout({
  title,
  subtitle,
  children,
  showBackBtn = false,
  topSection,
  asideSection,
  footerSection,
  isLoading = false,
  metaProps,
  skeleton,
}: IPageLayoutProps) {
  useScrollToTop()

  return (
    <>
      <Meta {...metaProps} />
      <Stack gap={4} as="section">
        <Stack gap={{ base: 2, sm: 6 }} maxW="4xl">
          <HeadingSection showBackBtn={showBackBtn} title={title} subtitle={subtitle} />
          <MainContentSection
            asideSection={asideSection}
            topSection={topSection}
            footerSection={footerSection}
            isLoading={isLoading}
            skeleton={skeleton}
          >
            {children}
          </MainContentSection>
        </Stack>
      </Stack>
    </>
  )
}
