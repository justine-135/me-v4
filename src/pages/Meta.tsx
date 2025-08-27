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
    <head>
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />

      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image || defaultImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </head>
  )
}
