import { Box } from '@chakra-ui/react/box'
import useThemeValues from '@/hooks/useThemeValues'

import NavLinks from './NavLinks'
import AvatarSection from './AvatarSection'
import { Separator, Stack } from '@chakra-ui/react'
import { Typography } from '../Typography'
import { DEV_JSON_PATH } from '@/constants/paths'
import { fetcher } from '@/util'
import type { IDev } from '@/types/Dev'
import useSWR from 'swr'
import CurrentlySection from './CurrentlySection'
import SocialsSection from './SocialsSection'

export default function Sidebar() {
  const { data } = useSWR<IDev>(DEV_JSON_PATH, fetcher)

  const { background } = useThemeValues()

  return (
    <Box
      position="fixed"
      h="100vh"
      w="18rem"
      px="2rem"
      py="2rem"
      background={background}
      borderRightWidth="1px"
      zIndex={0}
      as="aside"
    >
      <Stack gap={4}>
        <AvatarSection name={data?.name} subtitle={data?.subtitle} />
        <Separator />
        <Typography fontWeight={500} fontSize="xs">
          NAVIGATION
        </Typography>
        <NavLinks />
        <Separator />
        <Typography fontWeight={500} fontSize="xs">
          CURRENTLY
        </Typography>
        <CurrentlySection
          working_on={data?.working_on}
          learning_on={data?.learning_on}
          time={data?.time}
          location={data?.location}
        />
        <Separator />
        <Typography fontWeight={500} fontSize="xs">
          CONNECT
        </Typography>
        <SocialsSection socials={data?.socials} />
      </Stack>
    </Box>
  )
}
