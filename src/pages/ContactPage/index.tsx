import PageLayout from '@/layout/PageLayout'
import IntroductionCard from './IntroductionCard'
import { FormCard } from './FormCard'
import LinksCard from './LinksCard'
import LocationCard from './LocationCard'
import StackLayout from '@/layout/StackLayout'

export default function ContactPage() {
  return (
    <PageLayout title="Contact me">
      <StackLayout>
        <IntroductionCard />
        <FormCard />
      </StackLayout>
      <StackLayout flex={1}>
        <LinksCard />
        <LocationCard />
      </StackLayout>
    </PageLayout>
  )
}
