import { motion } from 'motion/react'
import { Home, ArrowRight } from 'lucide-react'
import Seo, { SITE_URL } from '@/components/Seo'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="Page Not Found - Dance Illusions Goa"
        description="The page you're looking for doesn't exist. Return to Dance Illusions Goa and explore our dance classes and events."
        canonical={SITE_URL + '/404'}
      />
      <div className="container max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block"
          >
            <div className="text-8xl lg:text-9xl font-black text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text mb-4">
              404
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-white"
          >
            Page Not <span className="text-gradient-primary">Found</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Oops! It seems the page you're looking for has moved or doesn't exist. Let's get you
            back on track.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-white">What can you do?</h2>

            <div className="space-y-4">
              {[
                {
                  title: 'Explore Classes',
                  description:
                    'Check out our dance class schedule and pick a style that interests you',
                },
                {
                  title: 'Join Social Nights',
                  description:
                    'Meet our community and enjoy social dancing in a relaxed atmosphere',
                },
                {
                  title: 'Visit Our Locations',
                  description: 'Find a dance studio near you across Goa',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shrink-0">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all active:scale-95 inline-flex items-center gap-2"
              >
                <Home size={20} />
                Back to Home
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-[100px] rounded-full" />
            <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🕺</div>
                <p className="text-slate-400 font-medium">Lost on the dance floor?</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
