import { Link, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Music, Star, Heart } from 'lucide-react'
import { danceForms } from '../data/danceForms'
import { imageKitUrl } from '@/config'
import { useEffect } from 'react'

const categories = [
  {
    name: 'Latin',
    icon: Music,
    slug: 'latin',
    color: 'text-purple-400',
    glow: 'shadow-purple-500/20',
  },
  {
    name: 'Ballroom',
    icon: Star,
    slug: 'ballroom',
    color: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
  },
  {
    name: 'Social',
    icon: Heart,
    slug: 'social',
    color: 'text-pink-400',
    glow: 'shadow-pink-500/20',
  },
]

export function DanceForms() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100) // small delay so layout finishes
      }
    }
  }, [location])

  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            Dance <span className="text-gradient-primary">Forms</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            From the passionate rhythms of Latin to the elegant flow of Ballroom, discover the
            perfect dance style for you.
          </motion.p>
        </div>

        {categories.map((category) => (
          <div key={category.name} className="mb-24" id={category.slug}>
            <div className="flex items-center gap-4 mb-12">
              <div
                className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${category.color}`}
              >
                <category.icon size={32} />
              </div>
              <h2 className="text-4xl font-bold text-white">{category.name}</h2>
              <div className="flex-grow h-px bg-gradient-to-r from-white/10 to-transparent ml-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {danceForms
                .filter((dance) => dance.category === category.name)
                .map((dance, idx) => (
                  <motion.div
                    key={dance.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative glass-card overflow-hidden hover:shadow-2xl transition-all"
                  >
                    <Link to={`/forms/${dance.slug}`} className="block h-full">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={`${imageKitUrl}/tr:w-350${dance.image}`}
                          alt={dance.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-[center_20%]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                      </div>
                      <div className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {dance.title}
                        </h3>
                        <p className="text-slate-400 text-sm line-clamp-2">{dance.description}</p>
                        <div className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:text-purple-400 transition-colors">
                          Learn More
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
