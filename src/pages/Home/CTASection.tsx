import { Link } from 'react-router-dom'
import { phase, phaseConfig } from '@/config'

export function CTASection() {
  const config = phaseConfig[phase]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 opacity-50" />
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-card p-8 lg:p-12 text-center space-y-6 border-purple-500/30">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {config.cta.heading}
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">{config.cta.description}</p>
          <div className="flex max-md:flex-col justify-center gap-4 pt-2">
            <a
              href={config.cta.primaryButton.href}
              className="bg-white text-slate-950 px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-purple-50 transition-all active:scale-95 text-center"
            >
              {config.cta.primaryButton.text}
            </a>
            {config.cta.secondaryButton.href.startsWith('/') ? (
              <Link
                to={config.cta.secondaryButton.href}
                className="bg-transparent border-2 border-white/20 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-white/5 transition-all active:scale-95"
              >
                {config.cta.secondaryButton.text}
              </Link>
            ) : (
              <a
                href={config.cta.secondaryButton.href}
                className="bg-transparent border-2 border-white/20 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-white/5 transition-all active:scale-95 text-center"
              >
                {config.cta.secondaryButton.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
