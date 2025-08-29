import { Helmet } from 'react-helmet-async'

export interface MetaProps {
  title?: string
  description?: string
  url?: string
  image?: string
}

const IMAGE_URL = import.meta.env.VITE_APP_IMAGE_URL

export default function Meta({ title, description, url, image }: MetaProps) {
  const defaultTitle = `Justine Upano | ${title || 'Portfolio'}`
  const defaultDescription = description || 'Welcome to my portfolio page'
  const defaultImage = `${IMAGE_URL}${image || '/home.png'}`

  return (
    <Helmet>
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta property="author" content="Justine Upano" />
      <meta
        property="keywords"
        content="Justine Upano, tup graduate, tupc, computer engineer, frontend developer, developer, fullstack developer, reactjs developer, react js developer, react developer, php developer, web developer, software engineer"
      />

      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={defaultImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={defaultImage} />
    </Helmet>
  )
}
