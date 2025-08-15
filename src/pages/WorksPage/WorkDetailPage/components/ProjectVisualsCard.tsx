import { Typography } from '@/components/Typography'
import CardCustom from '@/components/CardCustom'
import {
  Image,
  Dialog,
  useDisclosure,
  CloseButton,
  VStack,
  Stack,
  Box,
  Grid,
  GridItem,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import { BsEye } from 'react-icons/bs'

interface IProjectVisualsCardProps {
  imageUrls?: string[]
}

const Thumbnail = ({ src }: { src: string }) => {
  const { open, onToggle } = useDisclosure()

  return (
    <>
      <Dialog.Root open={open} placement="center" size="lg">
        <Dialog.Backdrop onClick={onToggle} />
        <Dialog.Positioner>
          <Dialog.Content bg="transparent" shadow="none">
            <Dialog.CloseTrigger top="0" insetEnd="-12" asChild onClick={onToggle} bg="transparent">
              <CloseButton bg="bg" size="sm" color="white" />
            </Dialog.CloseTrigger>
            <Dialog.Body p={0}>
              <VStack>
                <Image src={src} h="auto" w="auto" objectFit="contain" />
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
      <CardCustom
        imageProps={{ src }}
        onClick={onToggle}
        _hover={{ cursor: 'pointer' }}
        h="100px"
        flex="1fr"
      />
    </>
  )
}

const SHOW_LIMIT = 3

const ImagesGrid = ({ imageUrls }: IProjectVisualsCardProps) => {
  const [limit, setLimit] = useState<number>(3)

  const limitedImageUrls = imageUrls?.slice(0, limit) ?? []
  const subtractedValue = (imageUrls?.length ?? 0) - limit
  const leftOverImages = Math.max((imageUrls?.length ?? 0) - limit, 0)

  const handleButtonClick = () => {
    setLimit((prevLimit) => prevLimit + SHOW_LIMIT)
  }

  return (
    <VStack>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {limitedImageUrls?.map((imageUrl, idx) => {
            return (
              <GridItem key={idx}>
                <Thumbnail src={imageUrl} />
              </GridItem>
            )
          })}
        </Grid>
      </Box>
      {subtractedValue > 0 && (
        <Button onClick={handleButtonClick} size="xs">
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
