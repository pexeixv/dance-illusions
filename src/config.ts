import {
  breakResumeDate,
  formatDateLong,
  formatDateWithOrdinal,
  getEarliestStartDate,
} from './utils/functions'
import { BatchConfig, DanceEnum, DayEnum, LevelEnum, LocationEnum, PhaseEnum } from './utils/types'

export const imageKitUrl = import.meta.env.VITE_IMAGEKIT_URL
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

export const nextBatch: BatchConfig | null = null

export const currentBatch: BatchConfig | null = {
  month1: 'August',
  month2: 'September',
  year: 2026,
  seasonDescription:
    "As the monsoon rhythms roll in, step into a season of movement and magic with our exciting August-September sessions! Whether you're a beginner taking your very first steps or a dancer looking to sharpen your skills, we've got the perfect class waiting for you.",
  locations: [
    {
      location: LocationEnum.FATORDA,
      dance: DanceEnum.INTL_JIVE,
      day: [DayEnum.MONDAY, DayEnum.THURSDAY],
      time: '7:00 PM - 9:00 PM',
      level: [LevelEnum.BEGINNER, LevelEnum.INTERMEDIATE],
      startDate: '2026-08-06',
      poster: '/posters/august-fatorda.png',
    },
    {
      location: LocationEnum.PORVORIM,
      dance: DanceEnum.BACHATA,
      day: [DayEnum.TUESDAY, DayEnum.FRIDAY],
      time: '7:00 PM - 9:00 PM',
      level: [LevelEnum.BEGINNER, LevelEnum.INTERMEDIATE],
      startDate: '2026-08-07',
      poster: '/posters/august-porvorim.png',
    },
    {
      location: LocationEnum.VASCO,
      dance: DanceEnum.SAMBA,
      day: [DayEnum.WEDNESDAY, DayEnum.SATURDAY],
      time: '7:00 PM - 9:00 PM',
      level: [LevelEnum.BEGINNER, LevelEnum.INTERMEDIATE],
      startDate: '2026-08-05',
      poster: '/posters/august-vasco.png',
    },
    {
      location: LocationEnum.MARGAO,
      dance: DanceEnum.CRASH_COURSE,
      day: [DayEnum.SUNDAY],
      time: '7:00 PM - 9:00 PM',
      level: [LevelEnum.BEGINNER],
      startDate: '2026-08-30',
      poster: '/posters/sunday-august-banner.png',
    },
  ],
}

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
