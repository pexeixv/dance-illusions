import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Clock, MapPin, Calendar, Info, ExternalLink, X, Phone } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { locations } from './Locations'
import Seo, { SITE_URL } from '@/components/Seo'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const scheduleData = [
  {
    day: 'Monday',
    location: 'Fatorda',
    time: '6:30 PM - 8:00 PM',
    level: 'Beginner',
    dance: 'Samba',
  },
  {
    day: 'Tuesday',
    location: 'Porvorim',
    time: '7:00 PM - 8:30 PM',
    level: 'Intermediate',
    dance: 'Cha cha',
  },
  {
    day: 'Wednesday',
    location: 'Vasco',
    time: '6:30 PM - 8:00 PM',
    level: 'Intermediate',
    dance: 'Tango',
  },
  {
    day: 'Thursday',
    location: 'Fatorda',
    time: '6:30 PM - 8:00 PM',
    level: 'Beginner',
    dance: 'Samba',
  },
  {
    day: 'Friday',
    location: 'Porvorim',
    time: '7:00 PM - 8:30 PM',
    level: 'Beginner',
    dance: 'Cha cha',
  },
  {
    day: 'Saturday',
    location: 'Vasco',
    time: '5:00 PM - 6:30 PM',
    level: 'Intermediate',
    dance: 'Tango',
  },
  {
    day: 'Sunday',
    location: 'Margao',
    time: '10:30 AM - 1:00 PM',
    level: 'Beginner',
    dance: 'Crash Course',
  },
]

export function Schedule() {
  const [selectedLocation, setSelectedLocation] = useState<(typeof locations)[0] | null>(null)

  return (
    <div className="pt-32 pb-24">
      <Seo
        title="Dance Class Schedule & Timings"
        description="View the latest Dance Illusions Goa class schedule - batch timings for Ballroom & Latin dance classes across Margao, Vasco and Panjim."
        canonical={SITE_URL + '/schedule'}
      />
      <div className="container max-w-7xl mx-auto px-6">
        {/* Title */}
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

        {/* Schedule Table */}
        <div className="glass-card overflow-hidden border-purple-500/20">
          {/* Scroll container */}
          <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
            <table className="w-full text-left border-collapse">
              {/* Sticky Header */}
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-8 py-6 text-slate-300 font-bold uppercase tracking-wider text-sm sticky top-0 bg-slate-900/90 backdrop-blur z-20">
                    Day
                  </th>

                  <th className="px-8 py-6 text-slate-300 font-bold uppercase tracking-wider text-sm sticky top-0 bg-slate-900/90 backdrop-blur z-20">
                    Location
                  </th>

                  <th className="px-8 py-6 text-slate-300 font-bold uppercase tracking-wider text-sm sticky top-0 bg-slate-900/90 backdrop-blur z-20">
                    Time
                  </th>

                  <th className="px-8 py-6 text-slate-300 font-bold uppercase tracking-wider text-sm sticky top-0 bg-slate-900/90 backdrop-blur z-20 whitespace-nowrap">
                    Dance Form
                  </th>

                  <th className="px-8 py-6 text-slate-300 font-bold uppercase tracking-wider text-sm sticky top-0 bg-slate-900/90 backdrop-blur z-20">
                    Level
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {scheduleData.map((item, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="group hover:bg-white/5 transition-colors cursor-default"
                  >
                    {/* Day */}
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                          <Calendar size={18} />
                        </div>
                        <span className="text-white font-bold">{item.day}</span>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-8 py-6">
                      <button
                        onClick={() => {
                          const loc = locations.find((l) => l.name === item.location)
                          if (loc) setSelectedLocation(loc)
                        }}
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-bold group/loc"
                      >
                        <MapPin
                          size={16}
                          className="text-cyan-400 group-hover/loc:scale-110 transition-transform"
                        />
                        <span className="border-b border-purple-400/30 group-hover:border-purple-300 transition-all">
                          {item.location}
                        </span>
                      </button>
                    </td>

                    {/* Time */}
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Clock size={16} className="text-pink-400" />
                        <span className="whitespace-nowrap">{item.time}</span>
                      </div>
                    </td>

                    {/* Dance */}
                    <td className="px-8 py-6">
                      <span className="text-white font-medium whitespace-nowrap">{item.dance}</span>
                    </td>

                    {/* Level */}
                    <td className="px-8 py-6">
                      <span
                        className={cn(
                          'px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border',
                          item.level === 'Beginner'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : item.level === 'Intermediate'
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                              : item.level === 'Advanced'
                                ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                                : 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                        )}
                      >
                        {item.level}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-8 glass-card bg-purple-600/5 border-purple-500/20 flex flex-col md:flex-row items-center gap-6 hidden">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
            <Info size={24} />
          </div>

          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-white font-bold text-lg">Important Note:</h3>
            <p className="text-slate-400">
              Please arrive 10 minutes before the class starts. Wear comfortable clothing and
              appropriate dance shoes.
            </p>
          </div>

          <a
            href="tel:+919823014397"
            className="md:ml-auto bg-white text-slate-950 px-8 py-3 rounded-xl font-bold hover:bg-purple-50 transition-all active:scale-95 shrink-0"
          >
            Call to Inquire
          </a>
        </div>
      </div>

      {/* Location Modal (unchanged) */}
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
                    src={selectedLocation.mapUrl}
                    alt={selectedLocation.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
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
