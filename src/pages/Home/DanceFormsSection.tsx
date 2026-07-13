import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { danceCategories } from '@/data/data'
import { imageKitUrl } from '@/config.ts'

export function DanceFormsSection() {
  return (
    <section className="py-24 relative bg-slate-900/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Dance <span className="text-gradient-primary"> Forms</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Explore a wide range of dance styles from the elegance of Ballroom to the energy of
            Latin and Social dances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {danceCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[3/4]"
            >
              <img
                src={`${imageKitUrl}/tr:w-450${category.image}`}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-90" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2 mb-8">
                  {category.dances.map((dance) => (
                    <li key={dance}>
                      <Link
                        to={`/forms/${dance.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors group/item py-0.5"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-purple-400 group-hover/item:scale-110 transition-transform"
                        />
                        <span className="font-medium">{dance}</span>
                        <ArrowRight
                          size={14}
                          className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/forms#${category.slug}`}
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-purple-400 transition-colors"
                >
                  Explore More
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
