import { HStack, Link, Stack } from '@chakra-ui/react'
import { Typography } from '../Typography'
import useThemeValues from '@/hooks/useThemeValues'

interface ISocialsSectionProps {
  socials?: {
    name: string
    url: string
  }[]
}

export default function SocialsSection({ socials }: ISocialsSectionProps) {
  const { backgroundAccent } = useThemeValues()

  return (
    <Stack>
      {socials?.map((social, idx) => {
        return (
          <Link key={idx} href={social.url} _hover={{ bg: backgroundAccent }} p={2} rounded="md">
            <HStack justifyContent="space-between" w="full">
              <Typography>{social.name}</Typography>
            </HStack>
          </Link>
        )
      })}
    </Stack>
  )
}
