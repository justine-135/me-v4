import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { SKILL_COLORS } from '@/constants/badge'
import type { IProjects } from '@/types/Works'
import { Badge, Box, Button, HStack, Link, Stack } from '@chakra-ui/react'
import { BsDot } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router'

const ViewMoreBtn = ({ id }: { id: number }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = () => {
    navigate(`${location.pathname}/${id}`)
  }

  return (
    <Button onClick={handleNavigate} size="sm">
      Read more
    </Button>
  )
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
                  <HStack gap={6}>
                    <ViewMoreBtn id={project.id} />
                    <Link href={project.link_url} target="_blank">
                      <Typography>See code</Typography> <FaGithub />
                    </Link>
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
