import { Typography } from '@/components/Typography'
import { HOME_JSON_PATH } from '@/constants/paths'
import PageLayout from '@/layout/PageLayout'
import { fetcher } from '@/util'
import useSWR from 'swr'

export default function HomePage() {
  const { data, error, isLoading } = useSWR(HOME_JSON_PATH, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  return (
    <PageLayout>
      <Typography>{data?.intro}</Typography>
    </PageLayout>
  )
}
