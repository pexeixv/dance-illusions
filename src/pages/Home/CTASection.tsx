import { Link } from 'react-router-dom'

export function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 opacity-50" />
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-card p-8 lg:p-12 text-center space-y-6 border-purple-500/30">
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            Ready to take your <br />
            <span className="text-gradient-primary">first step?</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Join Goa's most prestigious dance academy today. Whether you're a beginner or an
            advanced dancer, we have the perfect class for you.
          </p>
          <div className="flex max-md:flex-col justify-center gap-4 pt-2">
            <a
              href="tel:+919823014397"
              className="bg-white text-slate-950 px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-purple-50 transition-all active:scale-95"
            >
              Call Now
            </a>
            <Link
              to="/schedule"
              className="bg-transparent border-2 border-white/20 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-white/5 transition-all active:scale-95"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
