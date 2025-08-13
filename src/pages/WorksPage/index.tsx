import { WORKS_JSON_PATH } from '@/constants/paths'
import PageLayout from '@/layout/PageLayout'
import { fetcher } from '@/util'
import { Image } from '@chakra-ui/react'
import useSWR from 'swr'

export default function WorksPage() {
  const { data, error, isLoading } = useSWR(WORKS_JSON_PATH, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load data</p>

  console.log(data)

  return (
    <PageLayout title="Works">
      asd
      <Image rounded="md" src={data.featured_projects[0].image} alt="Dan Abramov" />
    </PageLayout>
  )
}
