import { DEV_JSON_PATH } from '@/constants/paths'
import type { IDev } from '@/types/Dev'
import { fetcher } from '@/util'
import useSWR from 'swr'
import AvatarSection from './AvatarSection'
import { Stack, Separator } from '@chakra-ui/react'
import { Typography } from '../Typography'
import CurrentlySection from './CurrentlySection'
import NavLinks from './NavLinks'
import SocialsSection from './SocialsSection'

export default function SidebarContent() {
  const { data } = useSWR<IDev>(DEV_JSON_PATH, fetcher)

  return (
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
  )
}
