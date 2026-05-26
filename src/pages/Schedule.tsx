import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Clock, MapPin, ExternalLink, X, ArrowUpRightIcon } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { locations } from './Locations'
import Seo, { SITE_URL } from '@/components/Seo'
import { imageKitUrl } from '@/config'
import UpcomingClassesSection from './Home/UpcomingClassesSection'
import { Link } from 'react-router-dom'
import { getStartsLabel, slugify } from '@/utils/functions'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'

type ScheduleItem = {
  day: string
  location: string
  time: string
  level: Level[]
  dance: string
  starts?: string
}

type ScheduleTableProps = {
  title: string
  data: ScheduleItem[]
  onLocationClick: (locationName: string) => void
}

const currentScheduleLabel = 'April, May 2026'
const nextScheduleLabel = 'June, July 2026'

const currentSchedule: ScheduleItem[] = [
  {
    day: 'Monday',
    location: 'Fatorda',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'Rumba',
  },
  {
    day: 'Tuesday',
    location: 'Porvorim',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'Salsa',
  },
  {
    day: 'Wednesday',
    location: 'Vasco',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'Cha Cha',
  },
  {
    day: 'Thursday',
    location: 'Fatorda',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'Rumba',
  },
  {
    day: 'Friday',
    location: 'Porvorim',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'Salsa',
  },
  {
    day: 'Saturday',
    location: 'Vasco',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'Cha Cha',
  },
]

const nextSchedule: ScheduleItem[] = [
  {
    day: 'Monday',
    location: 'Fatorda',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'Bachata',
    starts: '1 June 2026',
  },
  {
    day: 'Tuesday',
    location: 'Porvorim',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'International Jive',
    starts: '2 June 2026',
  },
  {
    day: 'Wednesday',
    location: 'Vasco',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'Salsa',
    starts: '3 June 2026',
  },
  {
    day: 'Thursday',
    location: 'Fatorda',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'Bachata',
    starts: '1 June 2026',
  },
  {
    day: 'Friday',
    location: 'Porvorim',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'International Jive',
    starts: '2 June 2026',
  },
  {
    day: 'Saturday',
    location: 'Vasco',
    time: '7:00 PM - 9:00 PM',
    level: ['Beginner', 'Intermediate'],
    dance: 'Salsa',
    starts: '3 June 2026',
  },
]

function ScheduleTable({ title, data, onLocationClick }: ScheduleTableProps) {
  return (
    <div className="space-y-6">
      {/* Section Title */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-[2px] bg-gradient-to-r from-violet-500 to-fuchsia-500" />

        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden border-purple-500/20">
        <div className="relative">
          {/* Right edge fade hint for mobile */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-slate-900/90 to-transparent z-10 md:hidden" />

          <div
            className="
              overflow-x-auto
              overflow-y-auto
              overscroll-x-contain
            "
          >
            <table className="w-full min-w-[680px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 md:px-8 py-6 text-slate-300 font-bold uppercase tracking-wider text-sm sticky top-0 bg-slate-900/90 backdrop-blur z-20">
                    Day
                  </th>

                  <th className="px-4 md:px-8 py-6 text-slate-300 font-bold uppercase tracking-wider text-sm sticky top-0 bg-slate-900/90 backdrop-blur z-20">
                    Location
                  </th>

                  <th className="px-4 md:px-8 py-6 text-slate-300 font-bold uppercase tracking-wider text-sm sticky top-0 bg-slate-900/90 backdrop-blur z-20">
                    Time
                  </th>

                  <th className="px-4 md:px-8 py-6 text-slate-300 font-bold uppercase tracking-wider text-sm sticky top-0 bg-slate-900/90 backdrop-blur z-20 whitespace-nowrap">
                    Dance Form
                  </th>

                  <th className="px-4 md:px-8 py-6 text-slate-300 font-bold uppercase tracking-wider text-sm sticky top-0 bg-slate-900/90 backdrop-blur z-20">
                    Level
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {data.map((item, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="group hover:bg-white/5 transition-colors cursor-default"
                  >
                    {/* Day */}
                    <td className="px-4 md:px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <span className="text-white font-bold whitespace-nowrap">{item.day}</span>
                          {item.starts && (
                            <span className="text-purple-400 text-xs font-medium mt-0.5 whitespace-nowrap">
                              {getStartsLabel(item.starts)} {item.starts}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-4 md:px-8 py-6">
                      <button
                        onClick={() => onLocationClick(item.location)}
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-bold group/loc whitespace-nowrap"
                      >
                        <MapPin
                          size={16}
                          className="text-cyan-400 group-hover/loc:scale-110 transition-transform shrink-0"
                        />

                        <span className="border-b border-purple-400/30 group-hover:border-purple-300 transition-all">
                          {item.location}
                        </span>
                      </button>
                    </td>

                    {/* Time */}
                    <td className="px-4 md:px-8 py-6">
                      <div className="flex items-center gap-2 text-slate-300 whitespace-nowrap">
                        <Clock size={16} className="text-pink-400 shrink-0" />

                        <span>{item.time}</span>
                      </div>
                    </td>

                    {/* Dance */}
                    <td className="px-4 md:px-8 py-6">
                      <Link
                        to={`/forms/${slugify(item.dance)}`}
                        className="text-white font-medium whitespace-nowrap flex gap-1 group/location w-fit"
                      >
                        {item.dance}
                        <ArrowUpRightIcon className="text-xs group-hover/location:opacity-40 size-4 opacity-0" />
                      </Link>
                    </td>

                    {/* Level */}
                    <td className="px-4 md:px-8 py-6">
                      <div className="flex flex-wrap gap-2 min-w-[160px]">
                        {item.level.map((lvl, i) => (
                          <span
                            key={i}
                            className={cn(
                              'inline-block px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap',
                              lvl === 'Beginner' && 'bg-green-500/20 text-green-400',
                              lvl === 'Intermediate' && 'bg-yellow-500/20 text-yellow-400',
                              lvl === 'Advanced' && 'bg-red-500/20 text-red-400',
                              lvl === 'All Levels' && 'bg-blue-500/20 text-blue-400'
                            )}
                          >
                            {lvl}
                          </span>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Schedule() {
  const [selectedLocation, setSelectedLocation] = useState<(typeof locations)[0] | null>(null)

  const handleLocationClick = (locationName: string) => {
    const loc = locations.find((l) => l.name === locationName)

    if (loc) {
      setSelectedLocation(loc)
    }
  }

  return (
    <div className="pt-32 pb-24">
      <Seo
        title="Dance Class Schedule & Timings in Goa | Batch Timing"
        description="View Dance Illusions Goa class schedule & batch timings for Ballroom & Latin dance classes across Margao, Vasco, Fatorda & Porvorim locations."
        canonical={SITE_URL + '/schedule'}
        keywords="dance class schedule goa, dance timings, ballroom classes timing, salsa class schedule, batch timings goa"
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Schedule', url: `${SITE_URL}/schedule` },
        ]}
      />

      <div className="container max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            Class <span className="text-gradient-primary">Schedule</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Find the perfect time and location to start your dance journey. We offer classes across
            multiple locations in Goa.
          </motion.p>
        </div>

        {/* Schedule Tables */}
        <div className="space-y-16">
          <ScheduleTable
            title={currentScheduleLabel}
            data={currentSchedule}
            onLocationClick={handleLocationClick}
          />

          <ScheduleTable
            title={nextScheduleLabel}
            data={nextSchedule}
            onLocationClick={handleLocationClick}
          />
        </div>
      </div>

      <UpcomingClassesSection hideTitle />

      {/* Location Modal */}
      <AnimatePresence>
        {selectedLocation && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLocation(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-card overflow-hidden border-purple-500/30 shadow-2xl shadow-purple-500/20"
            >
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:text-purple-400 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square md:aspect-auto relative overflow-hidden">
                  <img
                    src={`${imageKitUrl}${selectedLocation.image}?w=600&h=600&fit=crop`}
                    alt={selectedLocation.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-3xl font-bold">{selectedLocation.name}</h2>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{selectedLocation.venue}</h3>

                    <div className="flex items-start gap-2 text-slate-400">
                      <MapPin size={18} className="text-purple-500 shrink-0 mt-1" />

                      <span className="text-sm">{selectedLocation.address}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                        <Clock size={18} />
                      </div>

                      <div className="text-sm">
                        <p className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">
                          Schedule
                        </p>

                        <p className="font-medium">{selectedLocation.schedule}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href={selectedLocation.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                    >
                      <ExternalLink size={18} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
