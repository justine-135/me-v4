import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'

export default function AboutSkeleton() {
  return (
    <Flex gap={10} align="flex-start">
      <Box flex="3">
        <Flex align="center" gap={4} mb={6}>
          <SkeletonCircle size="12" />
          <Box>
            <Skeleton height="20px" width="150px" mb={2} />
            <Skeleton height="15px" width="100px" />
            <Skeleton height="25px" width="120px" mt={3} borderRadius="md" />
          </Box>
        </Flex>

        <Box mb={8}>
          <Skeleton height="20px" width="80px" mb={3} />
          <SkeletonText mt="2" noOfLines={4} />
        </Box>

        <Box>
          <Skeleton height="20px" width="100px" mb={3} />
          <Stack>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Skeleton height="16px" width="120px" mb={2} />
              <Skeleton height="14px" width="180px" mb={2} />
              <SkeletonText mt="2" noOfLines={3} />
              <Flex gap={2} mt={3}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} height="20px" width="60px" borderRadius="md" />
                ))}
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box flex="1">
        <Box mb={8}>
          <Skeleton height="20px" width="80px" mb={3} />
          <Flex gap={2} flexWrap="wrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} height="25px" width="70px" borderRadius="md" />
            ))}
          </Flex>
        </Box>

        <Box>
          <Skeleton height="20px" width="100px" mb={3} />
          <Stack>
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} height="20px" width="120px" borderRadius="md" />
            ))}
          </Stack>
        </Box>
      </Box>
    </Flex>
  )
}
