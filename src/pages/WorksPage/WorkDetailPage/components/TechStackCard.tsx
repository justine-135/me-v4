import CardCustom from '@/components/CardCustom'
import { Badge, Flex } from '@chakra-ui/react'

interface ITechStackCardProps {
  technologies?: string[]
}

export default function TechStackCard({ technologies }: ITechStackCardProps) {
  return (
    <CardCustom cardTitle="⚙️ Technology used">
      <Flex wrap="wrap" w="full">
        {technologies?.map((tech, idx) => {
          return (
            <Badge key={idx} variant="outline" mt={2} mr={2}>
              {tech}
            </Badge>
          )
        })}
      </Flex>
    </CardCustom>
  )
}
