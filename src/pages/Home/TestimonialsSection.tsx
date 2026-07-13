import { Star } from 'lucide-react'
import { testimonials } from '@/data/data'

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Student <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Hear what our vibrant community has to say about their journey with us.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee group-hover:pause gap-8 py-4">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="glass-card p-8 w-[350px] shrink-0 hover:border-purple-500/50 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3">
                {t.avatar ? (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold text-xs overflow-hidden">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-bold text-xs">
                    {t.name.charAt(0)}
                  </div>
                )}
                <span className="text-white font-bold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
