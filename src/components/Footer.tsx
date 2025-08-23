import { BsArrowRight, BsGithub } from 'react-icons/bs'
import LinkButton from './Button/LinkButton'
import CardCustom from './CardCustom'
import { Typography } from './Typography'
import { Flex, HStack, VStack } from '@chakra-ui/react'

export default function Footer() {
  return (
    <CardCustom
      variant="subtle"
      cardTitle={
        <HStack alignItems="center" justifyContent="center">
          <Typography variant="subheading">Contact me</Typography>
        </HStack>
      }
      as="footer"
    >
      <VStack gap={4}>
        <Typography textAlign="center" maxW="lg">
          I'm actively seeking opportunities to apply my React skills in real-world projects.
          Whether it's an internship, entry-level position, or collaborative project, I'd love to
          contribute and learn.
        </Typography>
        <Flex
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="center"
          maxW="md"
          gap={2}
        >
          <LinkButton to="/contact" buttonProps={{ w: 'full' }}>
            Get in touch <BsArrowRight />
          </LinkButton>
          <LinkButton
            to="https://github.com/justine-135"
            buttonProps={{ variant: 'outline', w: 'full' }}
            target="_blank"
          >
            Github <BsGithub />
          </LinkButton>
        </Flex>
      </VStack>
    </CardCustom>
  )
}
