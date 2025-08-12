import { Typography } from '@/components/Typography'
import { SKILL_COLORS } from '@/constants/badge'
import GridCard from '@/layout/GridCard'
import { Badge } from '@chakra-ui/react/badge'
import { HStack, Stack } from '@chakra-ui/react/stack'

interface ISkillsCardProps {
  skills: {
    title: string
    items: string[]
  }[]
}

export const SkillsCard = ({ skills }: ISkillsCardProps) => {
  return (
    <GridCard cardCustomProps={{ cardTitle: 'Skills', maxW: { mdToLg: 'full', md: 'sm' } }}>
      <Stack gap={4}>
        {skills.map((skill) => {
          return (
            <Stack key={skill.title}>
              <Typography variant="subheading">{skill.title}</Typography>
              <HStack wrap="wrap">
                {skill.items.map((item) => {
                  const color = SKILL_COLORS[item] || 'transparent'
                  return (
                    <Badge key={item} colorPalette={color}>
                      {item}
                    </Badge>
                  )
                })}
              </HStack>
            </Stack>
          )
        })}
      </Stack>
    </GridCard>
  )
}
