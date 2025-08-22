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
import { BsEye } from 'react-icons/bs'
import useViewMore from '@/hooks/useViewMore'

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

const ImagesGrid = ({ imageUrls }: IProjectVisualsCardProps) => {
  const { limitedImageUrls, shouldShowButton, leftOverImages, handleIncreaseLimit } = useViewMore({
    arr: imageUrls,
  })

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
