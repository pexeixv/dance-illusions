import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, X } from 'lucide-react'
import { phase, PhaseEnum, phaseConfig } from '@/config'

const upcomingClasses = [
  {
    city: 'Margao',
    style: 'Bachata',
    startDate: 'June 1',
  },
  {
    city: 'Porvorim',
    style: "Int'l Jive",
    startDate: 'June 2',
  },
  {
    city: 'Vasco',
    style: 'Salsa',
    startDate: 'June 3',
  },
]

export function UpcomingClassesPopup() {
  const [isOpen, setIsOpen] = useState(phase !== PhaseEnum.BREAK)

  if (phase === PhaseEnum.BREAK) return null

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed z-50 w-[92%] max-w-md overflow-hidden border shadow-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl border-purple-500/30 bg-slate-900/95 backdrop-blur-xl shadow-purple-500/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20">
              <div>
                <p className="text-sm font-medium text-purple-300">
                  {phase === PhaseEnum.COMING_SOON ? 'Coming Soon' : 'June-July 2026'}
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
                  {phase === PhaseEnum.COMING_SOON ? 'New Batch Announcement' : 'Upcoming Classes'}
                </h3>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 transition rounded-xl hover:bg-white/10"
              >
                <X size={18} className="text-slate-300" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              <p className="text-sm leading-relaxed text-slate-400">
                {phase === PhaseEnum.COMING_SOON
                  ? 'Exciting news! Our new batch is launching soon. Register early to get exclusive early bird discounts and secure your spot in our most popular classes.'
                  : "As the monsoon rhythms roll in, step into a season of movement and magic with our exciting June-July sessions! Whether you're a beginner taking your very first steps or a dancer looking to sharpen your skills, we've got the perfect class waiting for you."}
              </p>

              <p className="text-xs font-semibold tracking-wide uppercase text-purple-300">
                {phase === PhaseEnum.COMING_SOON ? 'Early Bird Benefits' : "What's New This Season"}
              </p>

              <div className="overflow-hidden border rounded-2xl border-white/10">
                <table className="w-full text-sm">
                  <thead className="bg-white/5">
                    <tr className="text-left">
                      <th className="px-4 py-3 font-semibold text-slate-300">Location</th>

                      <th className="px-4 py-3 font-semibold text-slate-300">Dance Form</th>

                      <th className="px-4 py-3 font-semibold text-slate-300">Starting From</th>
                    </tr>
                  </thead>

                  <tbody>
                    {upcomingClasses.map((item, index) => (
                      <tr
                        key={`${item.city}-${item.style}`}
                        className={`border-t border-white/10 ${
                          index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'
                        }`}
                      >
                        <td className="px-4 py-3 font-semibold text-white">{item.city}</td>

                        <td className="px-4 py-3 text-slate-300">{item.style}</td>

                        <td className="px-4 py-3 text-purple-300">{item.startDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Link
                to="/schedule"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-semibold text-white transition-all shadow-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-95"
              >
                {phase === PhaseEnum.COMING_SOON ? 'Register Early' : 'Check Full Schedule'}
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
