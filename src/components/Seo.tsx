import { Helmet } from 'react-helmet-async'

export const SITE_URL = 'https://danceillusions.in'
const SITE_NAME = 'Dance Illusions Goa'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og.jpg`
const TWITTER_HANDLE = '@'

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

type SeoProps = {
  title?: string | null
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noIndex?: boolean
  schema?: Record<string, unknown> | null
  breadcrumbs?: Array<{ name: string; url: string }>
  keywords?: string
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

export default function Seo({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  schema = null,
  keywords,
  breadcrumbs,
}: SeoProps) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} - India's Premier Ballroom & Latin Dance School in Goa`

  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }
    : null

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical || SITE_URL} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
      {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
    </Helmet>
  )
}
