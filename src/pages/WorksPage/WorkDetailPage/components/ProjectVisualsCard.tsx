import { Typography } from '@/components/Typography'
import CardCustom from '@/components/CardCustom'
import {
  Image,
  Dialog,
  useDisclosure,
  VStack,
  Stack,
  Box,
  Grid,
  GridItem,
  Button,
} from '@chakra-ui/react'
import { BsEye } from 'react-icons/bs'
import useViewMore from '@/hooks/useViewMore'

interface IProjectVisualsCardProps {
  imageUrls?: string[]
}

const Thumbnail = ({ src }: { src: string }) => {
  const { open, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Dialog.Root open={open} placement="center" size="lg" onOpenChange={onClose}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg="transparent" shadow="none">
            <Dialog.Body p={0}>
              <VStack>
                <Image src={src} h="auto" w="full" objectFit="contain" />
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
      <CardCustom
        imageProps={{ src }}
        onClick={onOpen}
        _hover={{ cursor: 'pointer' }}
        h="100px"
        flex="1fr"
      />
    </>
  )
}

const ImagesGrid = ({ imageUrls }: IProjectVisualsCardProps) => {
  const { limitedImageUrls, shouldShowButton, leftOverImages, handleIncreaseLimit } = useViewMore({
    arr: imageUrls,
  })

  return (
    <VStack>
      <Box>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)' }} gap={2}>
          {limitedImageUrls?.map((imageUrl, idx) => {
            return (
              <GridItem key={idx}>
                <Thumbnail src={imageUrl} />
              </GridItem>
            )
          })}
        </Grid>
      </Box>
      {shouldShowButton && (
        <Button onClick={handleIncreaseLimit} size="xs">
          <BsEye /> View more visuals ({leftOverImages})
        </Button>
      )}
    </VStack>
  )
}

export default function ProjectVisualsCard({ imageUrls }: IProjectVisualsCardProps) {
  return (
    <CardCustom cardTitle="Project visuals" as="section">
      <Stack gap={4}>
        <Typography>Key screens and design solutions</Typography>
        <ImagesGrid imageUrls={imageUrls} />
      </Stack>
    </CardCustom>
  )
}
