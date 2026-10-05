export interface RouteSeo {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noIndex?: boolean
}

const metaEnv = (import.meta as unknown as { env?: Record<string, string> })?.env

export const SITE_URL =
  metaEnv?.VITE_SITE_URL ||
  metaEnv?.PUBLIC_SITE_URL ||
  (typeof process !== 'undefined'
    ? process.env?.VITE_SITE_URL || process.env?.PUBLIC_SITE_URL
    : '') ||
  'https://danceillusions.in'

export const SITE_NAME = 'Dance Illusions Goa'

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og.jpg`

export const staticRoutesSeo: Record<string, RouteSeo> = {
  '/': {
    title: "Ballroom & Latin Dance Classes in Goa | Dance School India",
    description:
      "Learn Ballroom, Latin, Salsa, Bachata & Jive at India's premier dance school in Goa. Expert instructors, flexible schedules. Margao, Vasco, Panjim locations.",
    canonical: `${SITE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/forms': {
    title: "Dance Forms - Ballroom, Latin, Salsa, Tango, Jive Classes",
    description:
      "Explore all dance forms at Dance Illusions Goa. Learn Waltz, Viennese Waltz, Tango, Foxtrot, Salsa, Jive, Cha Cha Cha, Samba, Bachata and more.",
    canonical: `${SITE_URL}/forms`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/locations': {
    title: "Dance Class Locations in Goa | Margao, Vasco, Fatorda, Porvorim",
    description:
      "Dance Illusions Goa has centres in Margao, Vasco, Fatorda & Porvorim. Find batch timings, class schedules and directions to the location closest to you.",
    canonical: `${SITE_URL}/locations`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/schedule': {
    title: "Dance Class Schedule & Timings in Goa | Batch Timing",
    description:
      "View Dance Illusions Goa class schedule & batch timings for Ballroom & Latin dance classes across Margao, Vasco, Fatorda & Porvorim locations.",
    canonical: `${SITE_URL}/schedule`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/crash-course': {
    title: "Ballroom & Latin Dance Crash Course in Goa | Quick Learning",
    description:
      "Intensive crash course for beginners! Learn basics of Waltz, Tango, Foxtrot, Cha Cha & Jive at Dance Illusions Goa. No partner required, all levels welcome.",
    canonical: `${SITE_URL}/crash-course`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/socials': {
    title: "Social Dance Events & Nights in Goa | Dance Socials",
    description:
      "Join Dance Illusions Goa's social dance nights - fun, welcoming space to practice Ballroom & Latin dancing with fellow dancers. Salsa, Bachata, Jive socials in Goa.",
    canonical: `${SITE_URL}/socials`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/gallery': {
    title: "Dance Events Gallery | Dance Illusions Goa Photos",
    description:
      "Browse Dance Illusions Goa's gallery of 20 years of dance events, socials, dance celebrations and unforgettable moments from our dance community in Goa.",
    canonical: `${SITE_URL}/gallery`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/wedding': {
    title: "Wedding Dance Choreography in Goa | First Dance Classes",
    description:
      "Make your first dance unforgettable. Dance Illusions Goa offers personalized wedding dance choreography and couple classes for your special day in Goa and India.",
    canonical: `${SITE_URL}/wedding`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/blog': {
    title: "Dance Blog Goa | Tips, Guides & Stories | Dance Illusions Goa",
    description:
      "Dance tips, event updates and stories from Dance Illusions Goa. Read about ballroom, Latin and social dancing from our instructors.",
    canonical: `${SITE_URL}/blog`,
    ogImage: DEFAULT_OG_IMAGE,
  },
  '/privacy-policy': {
    title: "Privacy Policy | Dance Illusions Goa",
    description: "Read the Privacy Policy for Dance Illusions Goa (danceillusions.in).",
    canonical: `${SITE_URL}/privacy-policy`,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  },
  '/terms-of-service': {
    title: "Terms of Service | Dance Illusions Goa",
    description: "Read the Terms of Service for Dance Illusions Goa (danceillusions.in).",
    canonical: `${SITE_URL}/terms-of-service`,
    ogImage: DEFAULT_OG_IMAGE,
    noIndex: true,
  },
}
