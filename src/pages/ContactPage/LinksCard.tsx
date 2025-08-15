import LinkButton from '@/components/Button/LinkButton'
import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import useThemeValues from '@/hooks/useThemeValues'
import { Box, HStack, Stack } from '@chakra-ui/react'
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
    <CardCustom cardTitle="Get in touch" as="section">
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
                  <Box mt={2}>
                    <LinkButton to={link} target="_blank">
                      {link_label} <LuExternalLink />
                    </LinkButton>
                  </Box>
                </Stack>
              </HStack>
            </Box>
          )
        })}
      </Stack>
    </CardCustom>
  )
}
