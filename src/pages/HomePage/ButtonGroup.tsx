import LinkButton from '@/components/Button/LinkButton'
import { ReadMoreButton } from '@/components/Button/ReadMoreButton'
import { Flex } from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface IButtonGroup {
  github_link?: string
  works_link: string
  resume_url?: string
}

export default function ButtonGroup({ github_link, works_link, resume_url }: IButtonGroup) {
  return (
    <Flex gap={2} wrap="wrap">
      <ReadMoreButton path={works_link}>View my works</ReadMoreButton>
      <LinkButton to={resume_url || ''} target="_blank" buttonProps={{ variant: 'outline' }}>
        Download Resume
      </LinkButton>
      <LinkButton to={github_link || ''} target="_blank" buttonProps={{ variant: 'subtle' }}>
        <FaExternalLinkAlt /> Github
      </LinkButton>
    </Flex>
  )
}
