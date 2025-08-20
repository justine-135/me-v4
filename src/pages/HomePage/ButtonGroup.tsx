import LinkButton from '@/components/Button/LinkButton'
import { ReadMoreButton } from '@/components/Button/ReadMoreButton'
import { Button, Flex } from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface IButtonGroup {
  github_link?: string
  works_link: string
}

export default function ButtonGroup({ github_link, works_link }: IButtonGroup) {
  return (
    <Flex gap={2}>
      <ReadMoreButton path={works_link}>View my works</ReadMoreButton>
      <Button size="sm" variant="outline">
        Download Resume
      </Button>
      <LinkButton to={github_link || ''} target="_blank" buttonProps={{ variant: 'subtle' }}>
        <FaExternalLinkAlt /> Github
      </LinkButton>
    </Flex>
  )
}
