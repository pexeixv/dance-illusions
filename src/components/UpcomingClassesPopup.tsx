import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, X } from 'lucide-react'
import { phase, phaseConfig, promotedBatch } from '@/config'
import { generatePopupData } from '@/utils/functions'
import { PhaseEnum } from '@/utils/types'

const upcomingClasses = generatePopupData(promotedBatch)

export function UpcomingClassesPopup() {
  const config = phaseConfig[phase]
  const [isOpen, setIsOpen] = useState(config.showPopup)

  if (!config.showPopup) return null

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

  if (phase !== PhaseEnum.BATCHES_ANNOUNCED) return null

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
                <p className="text-sm font-medium text-purple-300">{promotedBatch.label}</p>

                <h3 className="mt-1 text-xl font-bold text-white">{config.popup.header}</h3>
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
                {promotedBatch.seasonDescription}
              </p>

              <p className="text-xs font-semibold tracking-wide uppercase text-purple-300">
                {config.popup.tableLabel}
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
                        key={`${item.location}-${item.style}`}
                        className={`border-t border-white/10 ${
                          index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'
                        }`}
                      >
                        <td className="px-4 py-3 font-semibold text-white">{item.location}</td>

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
                {config.popup.buttonText}
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
