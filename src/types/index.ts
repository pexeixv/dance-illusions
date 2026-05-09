/**
 * Core enums for the Dance Illusions application
 */

export enum DanceCategoryType {
  LATIN = 'Latin',
  BALLROOM = 'Ballroom',
  SOCIAL = 'Social',
}

export enum DanceLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  ALL_LEVELS = 'All Levels',
}

export enum DayOfWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export enum LocationName {
  MARGAO = 'Margao',
  PORVORIM = 'Porvorim',
  VASCO = 'Vasco',
}

/**
 * Core interfaces and types
 */

export interface DanceForm {
  slug: string
  title: string
  category: DanceCategoryType
  description: string
  fullDescription: string
  videoUrl: string
  image: string
}

export interface DanceCategory {
  title: DanceCategoryType
  dances: string[]
  image: string
  slug: string
}

export interface Feature {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  color: string
}

export interface Testimonial {
  name: string
  text: string
  avatar: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Location {
  name: LocationName
  venue: string
  address: string
  image: string
  mapUrl: string
  googleMapsUrl: string
  schedule: string
}

export interface ScheduleItem {
  day: DayOfWeek
  location: LocationName
  time: string
  level: DanceLevel[]
  dance: string
}

export interface ScheduleSection {
  label: string
  items: ScheduleItem[]
}
