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
  HStack,
} from '@chakra-ui/react'

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
            <Dialog.CloseTrigger top="0" insetEnd="-12" asChild onClick={onToggle}>
              <CloseButton bg="bg" size="sm" />
            </Dialog.CloseTrigger>
            <Dialog.Body p={0}>
              <VStack>
                <Image src={src} h="auto" w="auto" objectFit="contain" />
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
      <Image
        onClick={onToggle}
        src={src}
        w={300}
        shadow="md"
        rounded="xl"
        _hover={{ cursor: 'pointer' }}
      />
    </>
  )
}

export default function ProjectVisualsCard({ imageUrls }: IProjectVisualsCardProps) {
  return (
    <CardCustom cardTitle="Project visuals">
      <Stack gap={4}>
        <Typography>Key screens and design solutions</Typography>
        <Box>
          <HStack overflow="auto">
            {imageUrls?.map((imageUrl, idx) => {
              return <Thumbnail src={imageUrl} key={idx} />
            })}
          </HStack>
        </Box>
      </Stack>
    </CardCustom>
  )
}
