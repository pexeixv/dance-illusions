import { motion } from 'motion/react'
import { Heart, Star, Music, CheckCircle2, ArrowRight, Calendar, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo, { SITE_URL } from '@/components/Seo'

const features = [
  {
    title: 'Personalized Choreography',
    description: 'We create a unique dance that reflects your personality and style as a couple.',
    icon: Heart,
    color: 'text-pink-400',
  },
  {
    title: 'Song Selection Help',
    description:
      'Not sure what to dance to? We can help you choose the perfect song for your first dance.',
    icon: Music,
    color: 'text-purple-400',
  },
  {
    title: 'Confidence Building',
    description: 'Our instructors will help you feel comfortable and confident on the dance floor.',
    icon: Star,
    color: 'text-amber-400',
  },
  {
    title: 'Flexible Scheduling',
    description:
      'We offer private lessons at times that work for your busy wedding planning schedule.',
    icon: Calendar,
    color: 'text-cyan-400',
  },
]

export function WeddingDance() {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="Wedding Dance Classes in Goa"
        description="Make your first dance unforgettable. Dance Illusions Goa offers personalised wedding dance choreography and couple classes for your special day."
        canonical={SITE_URL + '/wedding-dance'}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Wedding Dance Classes',
          provider: {
            '@type': 'Organization',
            name: 'Dance Illusions Goa',
            url: SITE_URL,
          },
          description: 'Personalised wedding dance choreography and couple classes in Goa.',
          areaServed: 'Goa, India',
        }}
      />
      <div className="container max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">
                Wedding First Dance
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Make Your <br />
              <span className="text-gradient-primary">First Dance</span> <br />
              Unforgettable
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed">
              Your first dance as a married couple is a moment you'll cherish forever. Our expert
              instructors will help you create a beautiful, personalized choreography that will
              leave your guests in awe. We specialize in making even the most nervous beginners look
              like pros on their big day.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="tel:+919823014397"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all active:scale-95 inline-flex items-center gap-2"
              >
                Book a Consultation
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+919823014397"
                className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95 inline-flex items-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-pink-600/20 blur-[100px] rounded-full" />
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1728713351269-79d2e63926f2?q=80&w=1000&auto=format&fit=crop"
                alt="Wedding Dance"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Previous Choreographies */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Previous Choreographies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Romantic Waltz First Dance',
                url: '',
              },
              {
                title: 'Energetic Latin Fusion',
                url: '',
              },
            ].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
                  <div className="absolute inset-0 pointer-none: grid place-items-center -z-10">
                    [VIDEO COMING SOON]
                  </div>
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="text-xl font-bold text-white text-center">{video.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:shadow-pink-500/20"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}
              >
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Packages Section */}
        <div className="mb-32 hidden">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Wedding Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Essential',
                price: '₹15,000',
                lessons: '5 Private Lessons',
                features: [
                  'Basic Choreography',
                  'Song Selection Help',
                  'Confidence Building',
                  'Final Rehearsal',
                ],
                color: 'border-slate-500/20',
              },
              {
                name: 'Premium',
                price: '₹25,000',
                lessons: '10 Private Lessons',
                features: [
                  'Full Custom Choreography',
                  'Song Selection Help',
                  'Confidence Building',
                  'Final Rehearsal',
                  'Video Recording',
                ],
                color: 'border-purple-500/50 shadow-purple-500/20',
                popular: true,
              },
              {
                name: 'Ultimate',
                price: '₹40,000',
                lessons: '15 Private Lessons',
                features: [
                  'Full Custom Choreography',
                  'Song Selection Help',
                  'Confidence Building',
                  'Final Rehearsal',
                  'Video Recording',
                  'Family Dance Help',
                ],
                color: 'border-pink-500/20',
              },
            ].map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card p-10 relative flex flex-col ${pkg.color}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{pkg.lessons}</p>
                  <p className="text-4xl font-bold text-white">{pkg.price}</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 size={18} className="text-purple-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+919823014397"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all active:scale-95 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  Choose {pkg.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
