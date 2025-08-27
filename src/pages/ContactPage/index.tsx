import PageLayout from '@/layout/PageLayout'
import IntroductionCard from './IntroductionCard'
import { FormCard } from './FormCard'
import LinksCard from './LinksCard'
import LocationCard from './LocationCard'
import type { MetaProps } from '../Meta'

const CONTACT_URL = import.meta.env.VITE_APP_CONTACT_URL

export default function ContactPage() {
  const metaData: MetaProps = {
    title: 'Contact',
    description:
      "I'm always excited to hear about new projects and opportunities. Drop me a message and let's discuss how I can contribute to your business.",
    image: `/contact.png`,
    url: CONTACT_URL,
  }

  return (
    <PageLayout
      title="Contact me"
      metaProps={metaData}
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
