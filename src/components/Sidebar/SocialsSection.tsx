import { HStack, Link, SkeletonText, Stack } from '@chakra-ui/react'
import { Typography } from '../Typography'
import useThemeValues from '@/hooks/useThemeValues'
import { motion } from 'motion/react'

const MotionLink = motion.create(Link)

interface ISocialsSectionProps {
  socials?: {
    name: string
    url: string
  }[]
  isLoading: boolean
}

export default function SocialsSection({ socials, isLoading }: ISocialsSectionProps) {
  const { backgroundAccent } = useThemeValues()

  if (isLoading)
    return (
      <Stack>
        <SkeletonText noOfLines={3} h="37px" />
      </Stack>
    )

  return (
    <Stack>
      {socials?.map((social, idx) => {
        return (
          <MotionLink
            key={idx}
            href={social.url}
            _hover={{ bg: backgroundAccent }}
            p={2}
            rounded="md"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.2,
              delay: 3 * 0.1 * idx,
            }}
          >
            <HStack justifyContent="space-between" w="full">
              <Typography>{social.name}</Typography>
            </HStack>
          </MotionLink>
        )
      })}
    </Stack>
  )
}
