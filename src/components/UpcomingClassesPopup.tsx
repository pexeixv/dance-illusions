import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, ArrowRight } from 'lucide-react'

export function UpcomingClassesPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

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
          className="fixed bottom-6 right-6 z-40 max-w-sm"
        >
          <div className="bg-slate-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden">
            {/* Header */}
            <div
              className="bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 gap-4 px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-fuchsia-600/40 transition-all"
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
                      <p className="text-slate-400 text-sm mt-2">
                        As the monsoon rhythms roll in, step into a season of movement and magic
                        with our exciting June-July sessions! Whether you're a beginner taking your
                        very first steps or a dancer looking to sharpen your skills, we've got the
                        perfect class waiting for you.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-lg p-3 space-y-2">
                      <p className="text-xs font-semibold text-purple-300 uppercase tracking-wide">
                        What's New This Season
                      </p>
                      <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
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
                      className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-2 text-sm"
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
