import LinkButton from '@/components/Button/LinkButton'
import { ReadMoreButton } from '@/components/Button/ReadMoreButton'
import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import type { IProjects } from '@/types/Works'
import { Badge, Box, Flex, Grid, GridItem, HStack } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

interface ISideProjectsProps {
  projects?: IProjects[]
}

export default function SideProjects({ projects }: ISideProjectsProps) {
  return (
    <Box as="section">
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
            <GridItem
              key={project.id}
              id={project.id as unknown as string}
              h="100%"
              _open={{
                animation: 'fade-in 300ms ease-out',
              }}
            >
              <CardCustom imageProps={{ src: project.image }} h="full">
                <Flex flexDirection="column" gap={4} h="full">
                  <HStack justifyContent="space-between">
                    <HStack>
                      {project.project_type.map((type) => {
                        return (
                          <Badge variant="outline" key={type}>
                            {type}
                          </Badge>
                        )
                      })}
                    </HStack>
                    <Badge variant="outline">{project.timeline}</Badge>
                  </HStack>
                  <Typography variant="subheading" fontWeight="normal">
                    {project.title}
                  </Typography>
                  <Typography>{project.description}</Typography>
                  <HStack wrap="wrap">
                    {project.tags.map((tag, idx) => {
                      return (
                        <Badge key={idx} variant="outline">
                          {tag}
                        </Badge>
                      )
                    })}
                  </HStack>
                  <HStack mt="auto">
                    {project.is_showcase && (
                      <ReadMoreButton path={`/side/${project.id}`}>Read more</ReadMoreButton>
                    )}
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
                </Flex>
              </CardCustom>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}
