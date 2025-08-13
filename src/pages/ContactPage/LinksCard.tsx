import { Typography } from '@/components/Typography'
import useThemeValues from '@/hooks/useThemeValues'
import GridCard from '@/layout/GridCard'
import { Box, HStack, Stack } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { LuExternalLink } from 'react-icons/lu'

export default function LinksCard() {
  const { backgroundAccent } = useThemeValues()

  const socialLinks = [
    {
      icon: '📧',
      type: 'Email',
      name: 'justineupano87@gmail.com',
      link: 'mailto:justineupano87@gmail.com',
      link_label: 'Send email',
    },
    {
      icon: '💼',
      type: 'LinkedIn',
      name: '/in/justineupano',
      link: 'https://www.linkedin.com/in/justineupano/',
      link_label: 'Connect',
    },
  ]

  return (
    <GridCard cardCustomProps={{ cardTitle: 'Get in touch', maxW: { mdToLg: 'full', md: 'sm' } }}>
      <Stack>
        {socialLinks.map((social) => {
          const { icon, type, name, link, link_label } = social
          return (
            <Box key={type} _hover={{ background: backgroundAccent }} p={2} rounded="lg">
              <HStack alignItems="top">
                <Box>{icon}</Box>
                <Stack wrap="wrap" gap={0}>
                  <Box>
                    <Typography variant="subheading">{type}</Typography>
                  </Box>
                  <Box>
                    <Typography>{name}</Typography>
                  </Box>
                  <Box mt={1}>
                    <Link href={link} target="_blank">
                      <Typography>{link_label}</Typography> <LuExternalLink />
                    </Link>
                  </Box>
                </Stack>
              </HStack>
            </Box>
          )
        })}
      </Stack>
    </GridCard>
  )
}
