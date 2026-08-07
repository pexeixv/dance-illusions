export enum LevelEnum {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  ALL_LEVELS = 'All Levels',
}

export type BatchLocation = {
  location: LocationEnum // Area name for schedule table (e.g. 'Fatorda')
  dance: DanceEnum // Dance form (e.g. 'Bachata')
  day: string // Primary class day (e.g. 'Monday')
  time: string // Class time (e.g. '7:00 PM - 9:00 PM')
  level: LevelEnum[] // Skill levels
  startDate: string // ISO date string (e.g. '2026-08-05')
  poster: string // Poster image path (e.g. '/posters/august-vasco.png')
}

export type BatchConfig = {
  month1: string // First month of the batch (e.g. 'June')
  month2?: string // Second month of the batch (e.g. 'July')
  year: number // Year of the batch (e.g. 2026)
  seasonDescription: string // Seasonal flavour text for popup body
  locations: BatchLocation[]
}

export enum PhaseEnum {
  BATCH_ONGOING = 'BATCH_ONGOING',
  BATCHES_ANNOUNCED = 'BATCHES_ANNOUNCED',
  BREAK = 'BREAK',
}

export type ScheduleItem = {
  day: string
  location: string
  time: string
  level: LevelEnum[]
  dance: string
  starts: string
}

export interface DanceForm {
  slug: string
  title: string
  category: 'Latin' | 'Ballroom' | 'Social'
  description: string
  fullDescription: string
  videoUrl: string
  image: string
}

export enum LocationEnum {
  MARGAO = 'Margao',
  FATORDA = 'Fatorda',
  PORVORIM = 'Porvorim',
  VASCO = 'Vasco',
}

export enum DanceEnum {
  BACHATA = 'Bachata',
  INTL_JIVE = "Int'l Jive",
  SALSA = 'Salsa',
  SAMBA = 'Samba',
  SOCIAL_JIVE = 'Social Jive',
  FOXTROT = 'Foxtrot',
  QUICKSTEP = 'Quickstep',
  PASO_DOBLE = 'Paso Doble',
  MERENGUE = 'Merengue',
  KIZOMBA = 'Kizomba',
  CHA_CHA = 'Cha Cha',
  RUMBA = 'Rumba',
  TANGO = 'Tango',
  VIENNESE_WALTZ = 'Viennese Waltz',
  AMERICAN_WALTZ = 'American Waltz',
}

export enum DanceCategoryEnum {
  LATIN = 'Latin',
  BALLROOM = 'Ballroom',
  SOCIAL = 'Social',
}

export enum DayEnum {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}
