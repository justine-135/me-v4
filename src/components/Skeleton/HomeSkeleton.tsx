import { Box, Flex, Skeleton, SkeletonText, Stack, VStack } from '@chakra-ui/react'
import CardCustom from '../CardCustom'

export default function HomeSkeleton() {
  return (
    <Flex gap={10} align="flex-start" w={{ base: 'full', xl: 800 }}>
      <Box flex={1}>
        <Stack gap={4} w="full" flex={1}>
          <SkeletonText noOfLines={3} />
          <Flex gap={4} wrap="wrap">
            <Skeleton h="36px" w="90px" />
            <Skeleton h="36px" w="90px" />
            <Skeleton h="36px" w="90px" />
          </Flex>
          <Flex justifyContent="space-between" gap={4} wrap="wrap">
            {Array.from({ length: 4 }).map((_, idx) => {
              return (
                <CardCustom flex={1} key={idx}>
                  <VStack>
                    <Skeleton h={5} w={20} /> <Skeleton h={5} w={20} />
                    <Skeleton w={20} />
                  </VStack>
                </CardCustom>
              )
            })}
          </Flex>
          <CardCustom>
            <Stack gap={4}>
              <Skeleton h={5} w="1/3" />
              <Skeleton h={5} w="2/3" />
              <Flex justifyContent="space-between" wrap="wrap">
                {Array.from({ length: 4 }).map((_, idx) => {
                  return (
                    <Stack key={idx}>
                      <Skeleton h={5} w={100} />
                      <Skeleton h={5} w={100} />
                      <Skeleton h={5} w={100} />
                      <Skeleton h={5} w={100} />
                      <Skeleton h={5} w={100} />
                    </Stack>
                  )
                })}
              </Flex>
            </Stack>
          </CardCustom>
          {Array.from({ length: 3 }).map((_, idx) => {
            return (
              <CardCustom key={idx}>
                <Stack gap={4}>
                  <Skeleton h={5} w="1/3" />
                  <Skeleton h={5} w="2/3" />
                  <CardCustom>
                    <Stack gap={2}>
                      <Skeleton h={5} w="1/3" />
                      <Flex gap={4}>
                        <Skeleton h={5} w="1/6" />
                        <Skeleton h={5} w="1/6" />
                        <Skeleton h={5} w="1/6" />
                      </Flex>
                      <Skeleton h={5} w="2/3" />
                    </Stack>
                  </CardCustom>
                </Stack>
              </CardCustom>
            )
          })}
        </Stack>
      </Box>
    </Flex>
  )
}
