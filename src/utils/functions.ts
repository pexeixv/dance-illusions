import { currentBatch, imageKitUrl, nextBatch, promotedBatch } from '@/config'
import { BatchConfig, ScheduleItem } from './types'

export const getStartsLabel = (startsDate: string): string => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const startDate = new Date(startsDate)
  startDate.setHours(0, 0, 0, 0)
  return startDate >= today ? 'Starts on' : 'Started on'
}

export const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single

// Only needed during BREAK phase — set to the expected resume date
export const breakResumeDate: string | null = null // e.g. '2026-10-01'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ─── Date Formatting Helpers ───────────────────────────────────
function getOrdinal(day: number): string {
  if (day > 3 && day < 21) return 'th'
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

function parseDate(isoDate: string): Date {
  return new Date(isoDate + 'T00:00:00')
}

export function formatDateLong(isoDate: string): string {
  return parseDate(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateWithOrdinal(isoDate: string): string {
  const date = parseDate(isoDate)
  const day = date.getDate()
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  return `${month} ${day}${getOrdinal(day)}`
}

export function formatDateForPopup(isoDate: string): string {
  return parseDate(isoDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
}

export function formatDateForSchedule(isoDate: string): string {
  const date = parseDate(isoDate)
  const day = date.getDate()
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

// ─── Derived Batch Data ────────────────────────────────────────

export function getEarliestStartDate(batch: BatchConfig): string {
  return batch.locations.reduce(
    (earliest, loc) => (loc.startDate < earliest ? loc.startDate : earliest),
    batch.locations[0].startDate
  )
}

// ─── Schedule & Popup Data Generators ──────────────────────────

// Each location's class runs twice per week (Mon→Thu, Tue→Fri, Wed→Sat)
export const repeatDayMap: Record<string, string> = {
  Monday: 'Thursday',
  Tuesday: 'Friday',
  Wednesday: 'Saturday',
}

/** Convert batch locations into schedule table rows (3 locations → 6 rows) */
export function generateSchedule(batch: BatchConfig): ScheduleItem[] {
  const primary: ScheduleItem[] = []
  const repeat: ScheduleItem[] = []
  for (const loc of batch.locations) {
    const base = {
      location: loc.location,
      time: loc.time,
      level: loc.level,
      dance: loc.dance,
      starts: formatDateForSchedule(loc.startDate),
    }
    primary.push({ ...base, day: loc.day })
    repeat.push({ ...base, day: repeatDayMap[loc.day] ?? loc.day })
  }
  return [...primary, ...repeat]
}

/** Generate popup table data from batch locations */
export function generatePopupData(batch: BatchConfig) {
  return batch.locations.map((loc) => ({
    location: loc.location,
    style: loc.dance,
    startDate: formatDateForPopup(loc.startDate),
  }))
}

/** Generate poster URLs from batch locations */
export function generatePosterUrls(batch: BatchConfig): string[] {
  return batch.locations.map((loc) => `${imageKitUrl}${loc.poster}`)
}

export function generateBatchLabel(batch: BatchConfig): string {
  return `${batch.month1}-${batch.month2} ${batch.year}`
}
