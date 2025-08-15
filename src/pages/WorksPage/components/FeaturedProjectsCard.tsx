import LinkButton from '@/components/Button/LinkButton'
import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { SKILL_COLORS } from '@/constants/badge'
import type { IProjects } from '@/types/Works'
import { Badge, Box, HStack, Stack } from '@chakra-ui/react'
import { BsDot } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { useLocation } from 'react-router'

const ReadMoreButton = ({ id }: { id: number }) => {
  const location = useLocation()

  return <LinkButton to={`${location.pathname}/${id}`}>Read more</LinkButton>
}

interface IFeaturedProjectsCardProps {
  projects?: IProjects[]
}

export default function FeaturedProjectsCard({ projects }: IFeaturedProjectsCardProps) {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Box>
          <Typography variant="subheading">Featured projects</Typography>
          <Typography>In-depth review of my work and design process.</Typography>
        </Box>
        <Badge>{projects?.length} projects</Badge>
      </HStack>
      <Stack mt={4} gap={2}>
        {projects?.map((project) => {
          return (
            <Box key={project.id}>
              <CardCustom
                imageProps={{ src: project.image, w: '300px', h: 'full' }}
                flexDirection="row"
              >
                <Stack alignItems="start" flex={3}>
                  <Box mb={2}>
                    <Typography variant="subheading">{project.title}</Typography>
                  </Box>
                  <HStack>
                    <Typography fontSize="xs">{project.role}</Typography>
                    <BsDot />
                    <Typography fontSize="xs">{project.project_type}</Typography>
                    <BsDot />
                    <Badge variant="outline">{project.duration}</Badge>
                    <BsDot />
                    <Badge variant="outline">{project.timeline}</Badge>
                  </HStack>
                  <Typography lineHeight="2">{project.description}</Typography>
                  <HStack wrap="wrap" mb={4}>
                    {project.tags.map((tag, idx) => {
                      const color = SKILL_COLORS[tag] || 'transparent'
                      return (
                        <Badge key={idx} colorPalette={color}>
                          {tag}
                        </Badge>
                      )
                    })}
                  </HStack>
                  <HStack gap={2}>
                    <ReadMoreButton id={project.id} />
                    <LinkButton
                      to={project.link_url}
                      buttonProps={{ variant: 'outline' }}
                      target="_blank"
                    >
                      See code
                      <FaGithub />
                    </LinkButton>
                  </HStack>
                </Stack>
              </CardCustom>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}
