import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { SKILL_COLORS } from '@/constants/badge'
import type { ISkillCategory } from '@/types/About'
import { Badge } from '@chakra-ui/react/badge'
import { HStack, Stack } from '@chakra-ui/react/stack'

interface ISkillsCardProps {
  skills?: ISkillCategory[]
}

export const SkillsCard = ({ skills }: ISkillsCardProps) => {
  return (
    <CardCustom cardTitle="Skills">
      <Stack gap={4}>
        {skills?.map((skill) => {
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
    </CardCustom>
  )
}
