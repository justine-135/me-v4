import LinkButton from '@/components/Button/LinkButton'
import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { VStack } from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'

interface IViewCodeCardProps {
  href?: string
}

export default function ViewCodeCard({ href }: IViewCodeCardProps) {
  return (
    <CardCustom cardTitle="Project link">
      <VStack>
        <LinkButton
          to={href || ''}
          target="_blank"
          buttonProps={{ w: 'full', variant: 'outline' }}
          style={{ width: '100%' }}
        >
          <BsGithub /> View source code
        </LinkButton>
        <Typography fontSize="xs">Live demo is not available for this project</Typography>
      </VStack>
    </CardCustom>
  )
}
