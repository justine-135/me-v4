export interface MetaProps {
  title?: string
  description?: string
  url?: string
  image?: string
}

export default function Meta({ title, description, url, image }: MetaProps) {
  const defaultTitle = title || 'Portfolio'
  const defaultDescription = description || 'Welcome to my portfolio page'
  const defaultImage = '/home.png'

  return (
    <head>
      <title>{`Justine Upano | ${defaultTitle}`}</title>
      <meta name="description" content={defaultDescription} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image || defaultImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </head>
  )
}
