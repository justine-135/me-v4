import { accounts } from '@/assets/research_project'
import PageLayout from '@/layout/PageLayout'
import { Image } from '@chakra-ui/react'

export default function WorksPage() {
  return (
    <PageLayout title="Works">
      <Image rounded="md" src={accounts} alt="Dan Abramov" />
    </PageLayout>
  )
}
