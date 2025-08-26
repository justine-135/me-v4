import { DEV_JSON_PATH } from '@/constants/paths'
import type { IDev } from '@/types/Dev'
import { fetcher } from '@/util'
import { Badge, type BadgeProps } from '@chakra-ui/react/badge'
import useSWR from 'swr'

export default function AvailableBadge({ ...rest }: BadgeProps) {
  const { data } = useSWR<IDev>(DEV_JSON_PATH, fetcher)

  if (data?.is_available)
    return (
      <Badge colorPalette="green" {...rest}>
        Available for work
      </Badge>
    )
  return (
    <Badge colorPalette="grey" {...rest}>
      Not available for work
    </Badge>
  )
}
