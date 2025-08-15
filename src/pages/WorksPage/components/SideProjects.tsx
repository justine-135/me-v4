import LinkButton from '@/components/Button/LinkButton'
import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import type { IProjects } from '@/types/Works'
import { Badge, Box, Grid, GridItem, HStack, Stack } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

interface ISideProjectsProps {
  projects?: IProjects[]
}

export default function SideProjects({ projects }: ISideProjectsProps) {
  return (
    <Box>
      <HStack justifyContent="space-between">
        <Box>
          <Typography variant="subheading">Side projects & learning</Typography>
          <Typography>Personal projects, design challenges, and experimental work</Typography>
        </Box>
        <Badge>{projects?.length} projects</Badge>
      </HStack>
      <Grid mt={4} gap={6} templateColumns="repeat(3, 1fr)" alignItems="stretch">
        {projects?.map((project) => {
          return (
            <GridItem key={project.id} h="100%">
              <CardCustom imageProps={{ src: project.image }} h="100%">
                <Stack gap={4}>
                  <HStack justifyContent="space-between">
                    <Badge variant="outline">{project.project_type}</Badge>
                    <Badge variant="outline">{project.timeline}</Badge>
                  </HStack>
                  <Typography variant="subheading" fontWeight="normal">
                    {project.title}
                  </Typography>
                  <Typography>{project.description}</Typography>
                  <HStack>
                    {project.live_url && (
                      <LinkButton
                        to={project.live_url}
                        buttonProps={{ size: 'sm' }}
                        target="_blank"
                      >
                        View live
                      </LinkButton>
                    )}
                    <LinkButton
                      to={project.link_url}
                      buttonProps={{ size: 'sm', variant: 'outline' }}
                      target="_blank"
                    >
                      See code
                      <FaGithub />
                    </LinkButton>
                  </HStack>
                </Stack>
              </CardCustom>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}
