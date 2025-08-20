import { DEV_JSON_PATH } from '@/constants/paths'
import type { IDev } from '@/types/Dev'
import { fetcher } from '@/util'
import { Badge } from '@chakra-ui/react'
import useSWR from 'swr'

export default function AvailableBadge() {
  const { data } = useSWR<IDev>(DEV_JSON_PATH, fetcher)

  if (data?.is_available) return <Badge colorPalette="green">Available for work</Badge>
  return <Badge colorPalette="grey">Not available for work</Badge>
}
