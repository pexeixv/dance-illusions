import { SITE_URL } from '@/components/Seo'

export type BreadcrumbItem = {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Common breadcrumb paths
export const breadcrumbs = {
  home: { name: 'Home', url: SITE_URL },
  forms: { name: 'Dance Forms', url: `${SITE_URL}/forms` },
  locations: { name: 'Locations', url: `${SITE_URL}/locations` },
  schedule: { name: 'Schedule', url: `${SITE_URL}/schedule` },
  wedding: { name: 'Wedding Dance', url: `${SITE_URL}/wedding` },
  socials: { name: 'Socials', url: `${SITE_URL}/socials` },
  gallery: { name: 'Gallery', url: `${SITE_URL}/gallery` },
  crashCourse: { name: 'Crash Course', url: `${SITE_URL}/crash-course` },
}

export function forDanceDetail(danceTitle: string, danceSlug: string) {
  return generateBreadcrumbSchema([
    breadcrumbs.home,
    breadcrumbs.forms,
    { name: danceTitle, url: `${SITE_URL}/forms/${danceSlug}` },
  ])
}
