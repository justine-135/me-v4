import { Typography } from '@/components/Typography'
import { SKILL_COLORS } from '@/constants/badge'
import GridCard from '@/layout/GridCard'
import type { IProjects } from '@/types/Works'
import { Badge, Box, Button, Card, HStack, Image, Stack } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router'

interface IFeaturedProjectsCardProps {
  projects?: IProjects[]
}

const ViewMoreBtn = ({ id }: { id: number }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = () => {
    navigate(`${location.pathname}/${id}`)
  }

  return <Button onClick={handleNavigate}>View link</Button>
}

export default function FeaturedProjectsCard({ projects }: IFeaturedProjectsCardProps) {
  return (
    <GridCard cardCustomProps={{ cardTitle: 'Featured projects' }}>
      <Typography>In-depth review of my work and design process.</Typography>
      <Stack mt={4} gap={2}>
        {projects?.map((project) => {
          return (
            <Box key={project.id}>
              <Card.Root>
                <Card.Body p={4}>
                  <HStack alignItems="start" gap={4}>
                    <Image
                      w={300}
                      objectFit="cover"
                      rounded="md"
                      src={project.image}
                      alt={project.title}
                    />
                    <Stack alignItems="start">
                      <Typography variant="subheading">{project.title}</Typography>
                      <Typography>{project.description}</Typography>
                      <HStack wrap="wrap">
                        {project.tags.map((tag, idx) => {
                          const color = SKILL_COLORS[tag] || 'transparent'
                          return (
                            <Badge key={idx} colorPalette={color}>
                              {tag}
                            </Badge>
                          )
                        })}
                      </HStack>
                      <ViewMoreBtn id={project.id} />
                    </Stack>
                  </HStack>
                </Card.Body>
              </Card.Root>
            </Box>
          )
        })}
      </Stack>
    </GridCard>
  )
}
