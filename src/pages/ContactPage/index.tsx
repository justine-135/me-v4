import PageLayout from '@/layout/PageLayout'
import IntroductionCard from './IntroductionCard'
import { FormCard } from './FormCard'
import LinksCard from './LinksCard'
import LocationCard from './LocationCard'

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact me"
      asideSection={
        <>
          <LinksCard />
          <LocationCard />
        </>
      }
    >
      <IntroductionCard />
      <FormCard />
    </PageLayout>
  )
}
