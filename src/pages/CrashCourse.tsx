import { motion } from 'motion/react'
import { CheckCircle2, ArrowRight, Star, Zap, Users, Trophy } from 'lucide-react'
import Seo, { SITE_URL } from '@/components/Seo'
import { image } from 'motion/react-client'
import { imageKitUrl } from '@/config'

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
      <Seo
        title="Ballroom & Latin Dance Crash Course in Goa | Quick Learning"
        description="Intensive crash course for beginners! Learn basics of Waltz, Tango, Foxtrot, Cha Cha & Jive at Dance Illusions Goa. No partner required, all levels welcome."
        canonical={SITE_URL + '/crash-course'}
        keywords="crash course goa, ballroom dance beginners, intensive dance course, learn dance fast, quick dance learning"
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Crash Course', url: `${SITE_URL}/crash-course` },
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'Ballroom Dance Crash Course',
          description:
            'Intensive short-format ballroom and Latin dance course for beginners in Goa.',
          provider: {
            '@type': 'Organization',
            name: 'Dance Illusions Goa',
            url: SITE_URL,
          },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'In-person',
            location: 'Margao, Vasco, Panjim - Goa, India',
          },
        }}
      />
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="grid items-center grid-cols-1 gap-16 mb-32 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-white/5 border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">
                Intensive Beginner Program
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white lg:text-7xl">
              Beginner <br />
              <span className="text-gradient-primary">Crash Course</span>
            </h1>

            <p className="text-xl leading-relaxed text-slate-400">
              The crash course introduces beginners to multiple ballroom and Latin styles including
              Waltz, Tango, Foxtrot, Cha Cha and Jive. Perfect for those who want to jumpstart their
              dance journey.
            </p>

            <ul className="space-y-4">
              {[
                '5 Intensive Sessions',
                '5+ Different Dance Styles',
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
                className="inline-flex items-center gap-2 px-10 py-4 font-bold text-white transition-all shadow-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 active:scale-95"
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
                src={`${imageKitUrl}/crash/group.jpg?w=1200&h=600&fit=crop`}
                alt="Dance Class"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-8 mb-32 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass-card group hover:shadow-purple-500/20"
            >
              <div className="flex items-center justify-center mb-6 text-purple-400 transition-transform border w-14 h-14 rounded-2xl bg-white/5 border-white/10 group-hover:scale-110">
                <benefit.icon size={28} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">{benefit.title}</h3>
              <p className="leading-relaxed text-slate-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Dance Forms Learned */}
        <div className="mb-32">
          <h2 className="mb-12 text-4xl font-bold text-center text-white">
            Dance Forms You'll Learn
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                className="p-8 transition-colors glass-card border-white/5 hover:border-purple-500/30"
              >
                <h3 className="mb-3 text-xl font-bold text-white">{dance.name}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{dance.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
