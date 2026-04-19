import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft, Play, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { danceForms } from '../data/danceForms'
import Seo, { SITE_URL } from '@/components/Seo'

export function DanceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const dance = danceForms.find((d) => d.slug === slug)

  if (!dance) {
    return <Navigate to="/forms" replace />
  }

  return (
    <div className="pt-32 pb-24">
      <Seo
        title={`${dance.title} Dance Classes in Goa`}
        description={`Learn ${dance.title} at Dance Illusions Goa. ${dance.description || 'Expert-led classes for all levels in Margao, Vasco and Panjim.'}`}
        canonical={SITE_URL + '/dance-forms/' + dance.slug}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: `${dance.title} Dance Class`,
          description: dance.description,
          provider: {
            '@type': 'Organization',
            name: 'Dance Illusions Goa',
            url: SITE_URL,
          },
        }}
      />
      <div className="container max-w-7xl mx-auto px-6">
        <Link
          to="/forms"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dance Forms
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                {dance.category} Dance
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white">
              {dance.title}
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed">{dance.fullDescription}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="glass-card p-6 border-purple-500/20">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                  <Calendar size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">Flexible Schedule</h3>
                <p className="text-slate-400 text-sm">
                  Classes available throughout the week across Goa.
                </p>
              </div>
              <div className="glass-card p-6 border-cyan-500/20">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <MapPin size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">Multiple Locations</h3>
                <p className="text-slate-400 text-sm">
                  Join us in Margao, Fatorda, Porvorim, or Vasco.
                </p>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <h3 className="text-xl font-bold text-white">What you'll learn:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Basic steps and footwork',
                  'Proper posture and frame',
                  'Rhythm and timing',
                  'Leading and following',
                  'Musicality and expression',
                  'Social dance etiquette',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={18} className="text-purple-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link
                to="/schedule"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all active:scale-95 inline-flex items-center gap-2"
              >
                View Class Schedule
                <ArrowLeft size={20} className="rotate-180" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video group">
              <iframe
                src={dance.videoUrl}
                title={dance.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 pointer-events-none border-2 border-white/5 rounded-3xl" />
            </div>

            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Play size={24} className="text-purple-400" />
                Watch Demo
              </h3>
              <p className="text-slate-400">
                See our professional instructors demonstrate the beauty and technique of{' '}
                {dance.title}. This video showcases the basic patterns and the overall character of
                the dance.
              </p>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">Ready to try it?</p>
                  <p className="text-slate-400 text-sm">Join us for a session!</p>
                </div>
                <a
                  href="tel:+919823014397"
                  className="bg-white text-slate-950 px-6 py-2.5 rounded-xl font-bold hover:bg-purple-50 transition-all active:scale-95"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
