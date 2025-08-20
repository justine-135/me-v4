import LinkButton from '@/components/Button/LinkButton'
import { ReadMoreButton } from '@/components/Button/ReadMoreButton'
import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import type { IProjects } from '@/types/Works'
import { Badge, Box, HStack, Stack } from '@chakra-ui/react'
import { BsDot } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

interface IFeaturedProjectsCardProps {
  projects?: IProjects[]
}

export default function FeaturedProjectsCard({ projects }: IFeaturedProjectsCardProps) {
  return (
    <Box as="section">
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
            <Box
              key={project.id}
              id={project.id as unknown as string}
              _open={{
                animation: 'fade-in 300ms ease-out',
              }}
            >
              <CardCustom
                h="275px"
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
                      return (
                        <Badge key={idx} variant="outline">
                          {tag}
                        </Badge>
                      )
                    })}
                  </HStack>
                  <HStack gap={2} mt="auto">
                    <ReadMoreButton path={`/featured/${project.id}`}>Read more</ReadMoreButton>
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
