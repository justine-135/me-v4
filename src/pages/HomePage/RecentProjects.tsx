import LinkButton from '@/components/Button/LinkButton'
import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import type { IProjects } from '@/types/Works'
import { Badge, Flex, HStack, Stack } from '@chakra-ui/react'
import { BsDot } from 'react-icons/bs'

interface IRecentProjectsProps {
  projects?: IProjects[]
}

export default function RecentProjects({ projects }: IRecentProjectsProps) {
  return (
    <CardCustom
      cardTitle={
        <Flex justifyContent="space-between">
          <Typography variant="subheading">Recent work</Typography>
          <LinkButton to="/works" buttonProps={{ variant: 'outline', size: 'sm' }}>
            View all
          </LinkButton>
        </Flex>
      }
    >
      <Stack gap={4}>
        <Typography>
          Academic projects and personal side projects showcasing my development journey
        </Typography>
        {projects?.map((project) => {
          return (
            <CardCustom
              cardTitle={
                <Flex justifyContent="space-between">
                  <Typography variant="subheading">{project.title}</Typography>
                  <LinkButton
                    to={`/works#${project.id}`}
                    buttonProps={{ variant: 'outline', size: 'xs' }}
                  >
                    View
                  </LinkButton>
                </Flex>
              }
              key={project.id}
            >
              <Stack>
                <HStack gap={2}>
                  {project.project_type.map((type, id) => {
                    return (
                      <Badge key={id} variant="outline">
                        {type}
                      </Badge>
                    )
                  })}
                  <BsDot />
                  <Typography>{project.timeline}</Typography>
                </HStack>
                <Typography>{project.description}</Typography>
              </Stack>
            </CardCustom>
          )
        })}
      </Stack>
    </CardCustom>
  )
}
