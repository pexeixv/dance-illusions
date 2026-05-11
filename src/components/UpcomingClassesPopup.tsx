import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, ArrowRight } from 'lucide-react'

export function UpcomingClassesPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handleScroll = () => {
      // Show popup when user scrolls past the fold (viewport height)
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed z-40 max-w-sm bottom-6 right-6"
        >
          <div className="overflow-hidden border shadow-2xl bg-slate-900/95 backdrop-blur-xl border-purple-500/30 rounded-2xl shadow-purple-500/20">
            {/* Header */}
            <div
              className="flex items-center justify-between gap-4 px-3 py-2 md:px-6 md:py-4 transition-all cursor-pointer bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-fuchsia-600/40"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-white">Upcoming Classes</h3>
              </div>
              <motion.div
                animate={{ rotate: isCollapsed ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-slate-300" />
              </motion.div>
            </div>

            {/* Content */}
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-200">June-July 2026</p>
                      <p className="mt-2 text-sm text-slate-400">
                        As the monsoon rhythms roll in, step into a season of movement and magic
                        with our exciting June-July sessions! Whether you're a beginner taking your
                        very first steps or a dancer looking to sharpen your skills, we've got the
                        perfect class waiting for you.
                      </p>
                    </div>

                    <div className="p-3 space-y-2 border rounded-lg bg-white/5 border-white/10">
                      <p className="text-xs font-semibold tracking-wide text-purple-300 uppercase">
                        What's New This Season
                      </p>
                      <ul className="space-y-1 text-xs list-disc list-inside text-slate-400">
                        <li>
                          <span className="font-bold text-white">Margao</span> Bachata
                        </li>
                        <li>
                          <span className="font-bold text-white">Porvorim</span> Int'l Jive
                        </li>
                        <li>
                          <span className="font-bold text-white">Vasco</span> Salsa
                        </li>
                      </ul>
                    </div>

                    <Link
                      to="/schedule"
                      className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-semibold text-white transition-all shadow-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 active:scale-95"
                    >
                      Check Full Schedule
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
