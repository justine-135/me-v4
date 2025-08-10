import AvatarCustom from '@/components/AvatarCustom'
import CardCustom from '@/components/CardCustom'
import { Typography } from '@/components/Typography'
import { PROFILE_IMAGE } from '@/constants/assets'
import { Box, SimpleGrid, Card, HStack, Stack, GridItem } from '@chakra-ui/react'

const IntroductionCard = () => {
  return (
    <Card.Root>
      <Card.Body>
        <Box>
          <HStack mb="6" gap="3">
            <AvatarCustom size="2xl" src={PROFILE_IMAGE} fallback="Justine Upano" />
            <Stack gap="0">
              <Typography variant="subheading">Justine Upano</Typography>
              <Typography>Web Developer</Typography>
            </Stack>
          </HStack>
          <Box spaceY="2">
            <Typography variant="subheading">About</Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis placeat alias non
              minima porro nesciunt ducimus et mollitia exercitationem laboriosam autem inventore
              necessitatibus temporibus cupiditate, hic, doloribus excepturi, perferendis ullam
              officia optio laborum dolorum perspiciatis sapiente assumenda. Aliquam necessitatibus
              ut vel facere, fugit voluptatibus corrupti fuga hic consequatur ipsa nemo explicabo,
              quaerat sint a excepturi tempore illum voluptate suscipit neque unde aperiam!
              Distinctio sapiente vel enim exercitationem, pariatur a facilis?
            </Typography>
          </Box>
        </Box>
      </Card.Body>
    </Card.Root>
  )
}

export default function About() {
  return (
    <Box spaceY="4">
      <Typography variant="heading">About</Typography>
      <SimpleGrid columns={2} gap={4}>
        <GridItem>
          <IntroductionCard />
        </GridItem>
        <GridItem>
          <CardCustom title="Side">
            Hahsdhashda sdas das dasd asd asd as das dasd asd asdasd asd asd as dasd asd asasd asd a
          </CardCustom>
        </GridItem>
      </SimpleGrid>
    </Box>
  )
}
