import { Link } from 'react-router-dom'
import { phase, PhaseEnum, phaseConfig } from '@/config'

export function CTASection() {
  const config = phaseConfig[phase]

  const primaryButtonContent = () => {
    switch (phase) {
      case PhaseEnum.BATCH_ONGOING:
      case PhaseEnum.ADMISSIONS_OPEN:
        return { text: 'Call Now', action: () => (window.location.href = 'tel:+919823014397') }
      case PhaseEnum.COMING_SOON:
      case PhaseEnum.BREAK:
        return {
          text: 'Call to Register',
          action: () => (window.location.href = 'tel:+919823014397'),
        }
    }
  }

  const secondaryButtonContent = () => {
    switch (phase) {
      case PhaseEnum.BATCH_ONGOING:
        return { text: 'View Schedule', to: '/schedule' }
      case PhaseEnum.ADMISSIONS_OPEN:
        return { text: 'Enroll Now', to: '/schedule' }
      case PhaseEnum.COMING_SOON:
      case PhaseEnum.BREAK:
        return { text: 'Learn More', to: '/dance-forms' }
    }
  }

  const getHeading = () => {
    switch (phase) {
      case PhaseEnum.BATCH_ONGOING:
        return 'Ready to take your first step?'
      case PhaseEnum.ADMISSIONS_OPEN:
        return 'Join our next batch and start dancing!'
      case PhaseEnum.COMING_SOON:
        return 'New batch coming soon!'
      case PhaseEnum.BREAK:
        return 'Classes resume soon. Save your spot!'
    }
  }

  const getDescription = () => {
    switch (phase) {
      case PhaseEnum.BATCH_ONGOING:
        return "Join Goa's most prestigious dance academy today. Whether you're a beginner or an advanced dancer, we have the perfect class for you."
      case PhaseEnum.ADMISSIONS_OPEN:
        return 'Enroll in our new batch starting June 1st. Limited spots available—secure your seat today!'
      case PhaseEnum.COMING_SOON:
        return 'Our next batch is launching soon. Register early to get exclusive early bird discounts.'
      case PhaseEnum.BREAK:
        return "We're taking a brief break, but our new batch is coming. Register now to reserve your spot."
    }
  }

  const primary = primaryButtonContent()
  const secondary = secondaryButtonContent()

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 opacity-50" />
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-card p-8 lg:p-12 text-center space-y-6 border-purple-500/30">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            {getHeading()}
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">{getDescription()}</p>
          <div className="flex max-md:flex-col justify-center gap-4 pt-2">
            <button
              onClick={primary.action}
              className="bg-white text-slate-950 px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-purple-50 transition-all active:scale-95"
            >
              {primary.text}
            </button>
            <Link
              to={secondary.to}
              className="bg-transparent border-2 border-white/20 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-white/5 transition-all active:scale-95"
            >
              {secondary.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
