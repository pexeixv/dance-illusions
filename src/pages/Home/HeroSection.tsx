import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Music, Star } from 'lucide-react'
import { imageKitUrl } from '@/config'

const students = ['/ahren.jpg', '/danica.jpg', '/swizel.jpg', '/pex.jpg']

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-24 lg:pt-40 lg:py-24 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex max-lg:flex-col-reverse gap-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hidden">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                Ballroom & Latin Dance School
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-white">
              Dance <br />
              <span className="text-gradient-primary">Illusions</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              Learn Ballroom, Latin and Social dancing from professional instructors in Goa. Unleash
              your inner rhythm and join our vibrant community.
            </p>

            <div className="flex max-lg:flex-col gap-4 pt-4">
              <Link
                to="/schedule"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all active:scale-95 flex items-center gap-2 text-center justify-center"
              >
                View Schedule
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+919823014397"
                className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95 text-center"
              >
                Call to Join
              </a>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-white/5">
              <div className="flex -space-x-3">
                {students.map((student, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden"
                  >
                    <img
                      src={`${imageKitUrl}/testimonials${student}?tr=w-48,h-48,fo-auto`}
                      alt={student}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-slate-400 mt-1">
                  <span className="text-white font-bold">10,000+</span> Happy Students
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative max-lg:w-full"
          >
            {/* Stage Platform Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[100px] bg-purple-600/30 blur-[60px] rounded-[100%] pointer-events-none" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-cyan-400/20 blur-[30px] rounded-[100%] pointer-events-none" />

            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 lg:aspect-4/5 group flex flex-col items-center justify-center">
              <img
                src={`${imageKitUrl}/home/better-hero.jpg?tr=,fo-auto`}
                alt="Professional Dancers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105  lg:max-w-[500px] lg:hidden relative"
                referrerPolicy="no-referrer"
              />
              <img
                src={`${imageKitUrl}/home/better-hero.jpg?tr=w-800,h-1000,fo-auto`}
                alt="Professional Dancers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 lg:max-w-[500px] max-lg:hidden relative"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

              {/* Floating Elements */}
              <div
                className="absolute top-8 right-8 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl animate-bounce hidden"
                style={{ animationDuration: '3s' }}
              >
                <Music className="text-purple-400" size={32} />
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
