import PageLayout from '@/layout/PageLayout'
import IntroductionCard from './IntroductionCard'
import { FormCard } from './FormCard'
import LinksCard from './LinksCard'
import LocationCard from './LocationCard'
import type { SEOProps } from '../../components/SEO'
import EducationSkeleton from '@/components/Skeleton/EducationSkeleton'

const CONTACT_URL = import.meta.env.VITE_APP_CONTACT_URL

export default function ContactPage() {
  const metaData: SEOProps = {
    title: 'Contact',
    description:
      "I'm always excited to hear about new projects and opportunities. Drop me a message and let's discuss how I can contribute to your business.",
    image: `/contact.png`,
    url: CONTACT_URL,
  }

  return (
    <PageLayout
      title="Contact me"
      SEOProps={metaData}
      skeleton={<EducationSkeleton />}
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
