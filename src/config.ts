import {
  breakResumeDate,
  formatDateLong,
  formatDateWithOrdinal,
  getEarliestStartDate,
} from './utils/functions.ts'
import { BatchConfig, DanceEnum, DayEnum, LevelEnum, LocationEnum, PhaseEnum } from './utils/types.ts'

const metaEnv = (import.meta as unknown as { env?: Record<string, string> })?.env

export const imageKitUrl =
  metaEnv?.VITE_IMAGEKIT_URL ||
  (typeof process !== 'undefined' ? process.env?.VITE_IMAGEKIT_URL : '') ||
  'https://ik.imagekit.io/gavin/di'

export const hygraphEndpoint =
  metaEnv?.VITE_HYGRAPH_ENDPOINT ||
  (typeof process !== 'undefined' ? process.env?.VITE_HYGRAPH_ENDPOINT : '') ||
  'https://ap-south-1.cdn.hygraph.com/content/cmuv1k7800xn206wcfvc98h4f/master'
export const BLOG_POSTS_PER_PAGE = 9
export const startYear = 2006
export const currentYear = new Date().getFullYear()
export const yearsOfExperience = currentYear - startYear

// ─── Phase Configuration ───────────────────────────────────────

export const phase = PhaseEnum.BATCH_ONGOING
export const showDialog = true

// ─── Batch Data Types ──────────────────────────────────────────

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎯 EDIT BELOW WHEN BATCHES CHANGE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const currentBatch: BatchConfig | null = {
  month1: 'October',
  month2: 'November',
  year: 2026,
  seasonDescription:
    'Step into the wedding and Christmas season with our exciting October-November Social Jive sessions, perfect for beginners and dancers looking to sharpen their skills, at a location near you!',
  locations: [
    {
      location: LocationEnum.FATORDA,
      dance: DanceEnum.SOCIAL_JIVE,
      day: [DayEnum.MONDAY, DayEnum.THURSDAY],
      time: '7:00 PM - 9:00 PM',
      level: [LevelEnum.BEGINNER],
      startDate: '2026-10-08',
      poster: '/posters/fatorda-oct.jpeg',
    },
    {
      location: LocationEnum.PORVORIM,
      dance: DanceEnum.SOCIAL_JIVE,
      day: [DayEnum.TUESDAY, DayEnum.FRIDAY],
      time: '7:00 PM - 9:00 PM',
      level: [LevelEnum.BEGINNER],
      startDate: '2026-10-06',
      poster: '/posters/porvorim-oct.jpeg',
    },
    {
      location: LocationEnum.VASCO,
      dance: DanceEnum.SOCIAL_JIVE,
      day: [DayEnum.WEDNESDAY, DayEnum.SATURDAY],
      time: '7:00 PM - 9:00 PM',
      level: [LevelEnum.BEGINNER],
      startDate: '2026-10-07',
      poster: '/posters/vasco-oct.jpeg',
    },
  ],
}

export const nextBatch: BatchConfig | null = null
      

/** The batch to promote in popups, posters, and CTAs */
export const promotedBatch: BatchConfig = nextBatch ?? currentBatch

/** e.g. "August 5th" — used in CTA descriptions */
export const promotedBatchStartDate = formatDateWithOrdinal(getEarliestStartDate(promotedBatch))

/** e.g. "August 5, 2026" — used in full date displays */
export const promotedBatchStartDateLong = formatDateLong(getEarliestStartDate(promotedBatch))

/** Formatted resume date for the BREAK phase */
export const breakResumeDateDisplay = breakResumeDate ? formatDateLong(breakResumeDate) : null

// ─── Phase Config ──────────────────────────────────────────────
export const phaseConfig = {
  [PhaseEnum.BATCH_ONGOING]: {
    label: 'Classes Running',
    showSchedule: showDialog,
    showUpcomingClasses: showDialog,
    showPopup: showDialog,
    // CTA Section
    cta: {
      heading: 'Ready to take your first step?',
      description:
        "Join Goa's most prestigious dance academy today. Whether you're a beginner or an advanced dancer, we have the perfect class for you.",
      primaryButton: { text: 'Call Now', href: 'tel:+919823014397' },
      secondaryButton: { text: 'View Schedule', href: '/schedule' },
    },
    // Hero Section
    hero: {
      primaryButton: { text: 'View Schedule', href: '/schedule' },
      secondaryButton: { text: 'Call to Join', href: 'tel:+919823014397' },
    },
    // Upcoming Classes Section
    upcomingClasses: {
      title: 'Ongoing',
      title2: 'Classes',
      description: null as string | null,
    },
    // Popup
    popup: {
      header: 'Upcoming Classes',
      tableLabel: "What's New This Season",
      buttonText: 'Check Full Schedule',
    },
  },
  [PhaseEnum.BATCHES_ANNOUNCED]: {
    label: 'Enrollments Open',
    showSchedule: showDialog,
    showUpcomingClasses: showDialog,
    showPopup: showDialog,
    // CTA Section
    cta: {
      heading: 'Join our next batch and start dancing!',
      description: `Enroll in our new batch starting ${promotedBatchStartDate}. Limited spots available—secure your seat today!`,
      primaryButton: { text: 'Call Now', href: 'tel:+919823014397' },
      secondaryButton: { text: 'Enroll Now', href: '/schedule' },
    },
    // Hero Section
    hero: {
      primaryButton: { text: 'Enroll Now', href: '/schedule' },
      secondaryButton: { text: 'Call to Join', href: 'tel:+919823014397' },
    },
    // Upcoming Classes Section
    upcomingClasses: {
      title: 'Upcoming',
      title2: 'Classes',
      description: `Secure your spot in our new batch starting ${promotedBatchStartDate}`,
    },
    // Popup
    popup: {
      header: 'Upcoming Classes',
      tableLabel: "What's New This Season",
      buttonText: 'Check Full Schedule',
    },
  },
  [PhaseEnum.BREAK]: {
    label: 'Break Between Batches',
    showSchedule: showDialog,
    showUpcomingClasses: showDialog,
    showPopup: showDialog,
    // CTA Section
    cta: {
      heading: 'Classes resume soon. Save your spot!',
      description:
        "We're taking a brief break, but our new batch is coming. Register now to reserve your spot.",
      primaryButton: { text: 'Call to Register', href: 'tel:+919823014397' },
      secondaryButton: { text: 'Learn More', href: '/forms' },
    },
    // Hero Section
    hero: {
      primaryButton: { text: 'Call to Register', href: 'tel:+919823014397' },
      secondaryButton: { text: 'Learn More', href: '/forms' },
    },
    // Upcoming Classes Section
    upcomingClasses: {
      title: null as string | null,
      description: null as string | null,
    },
    // Popup (hidden during break)
    popup: {
      header: '',
      tableLabel: '',
      buttonText: '',
    },
  },
}
