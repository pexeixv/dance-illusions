import { motion } from 'motion/react'
import { CheckCircle2, ArrowRight, Star, Zap, Users, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

const benefits = [
  {
    title: 'Multi-Style Introduction',
    description:
      'Learn the basics of Waltz, Tango, Foxtrot, Cha Cha and Jive in one comprehensive course.',
    icon: Zap,
  },
  {
    title: 'No Partner Required',
    description:
      'Come alone or with a friend. We rotate partners to ensure everyone gets to dance.',
    icon: Users,
  },
  {
    title: 'Expert Guidance',
    description: "Learn from Dr. Martin D'Costa and our team of professional instructors.",
    icon: Star,
  },
  {
    title: 'Certificate of Completion',
    description: 'Receive a recognized certificate upon successfully completing the course.',
    icon: Trophy,
  },
]

export function CrashCourse() {
  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                Intensive Beginner Program
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Beginner <br />
              <span className="text-gradient-primary">Crash Course</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed">
              The crash course introduces beginners to multiple ballroom and Latin styles including
              Waltz, Tango, Foxtrot, Cha Cha and Jive. Perfect for those who want to jumpstart their
              dance journey.
            </p>

            <ul className="space-y-4">
              {[
                '8 Intensive Sessions',
                '5 Different Dance Styles',
                'Basic Technique & Musicality',
                'Social Dance Etiquette',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-purple-400" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="tel:+919823014397"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all active:scale-95 inline-flex items-center gap-2"
              >
                Enroll Now
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full" />
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop"
                alt="Dance Class"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:shadow-purple-500/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Dance Forms Learned */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Dance Forms You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'American Waltz',
                description: 'The elegant and flowing classic ballroom dance.',
              },
              {
                name: 'Viennese Waltz',
                description: 'A faster, more rhythmic version of the traditional waltz.',
              },
              {
                name: 'Social Cha Cha',
                description: 'A fun, cheeky, and energetic Latin dance.',
              },
              {
                name: 'Social Jive',
                description: 'High-energy, fast-paced, and incredibly fun.',
              },
              {
                name: 'Social Foxtrot',
                description: 'A smooth, progressive dance that is perfect for social events.',
              },
              {
                name: 'Tango, Rumba & Bachata',
                description: "If you're lucky, we might even dive into these passionate styles!",
              },
            ].map((dance, idx) => (
              <motion.div
                key={dance.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 border-white/5 hover:border-purple-500/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{dance.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{dance.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
