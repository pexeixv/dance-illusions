import { motion } from 'motion/react'
import { Music, Users, Calendar, Star, ArrowRight, CheckCircle2 } from 'lucide-react'
import Seo, { SITE_URL } from '@/components/Seo'
import { imageKitUrl } from '@/config'
import ImageCarousel from '@/components/ImageCarousel'

const upcomingEvents = [
  {
    title: 'Salsa & Bachata Night',
    date: 'March 15, 2026',
    time: '8:00 PM - 11:00 PM',
    location: 'Flora Grande Hotel, Vasco',
    image:
      'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1000&auto=format&fit=crop',
  },
]

const galleryImages = [
  '/forms/salsa.jpeg',
  '/forms/bachata.jpeg',
  '/forms/chacha.jpeg',
  '/forms/rumba.jpeg',
  '/forms/samba.jpeg',
  '/forms/paso-doble.jpeg',
  '/forms/quickstep.jpeg',
]

export function Socials() {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="Social Dance Events & Nights in Goa | Dance Socials"
        description="Join Dance Illusions Goa's social dance nights - fun, welcoming space to practice Ballroom & Latin dancing with fellow dancers. Salsa, Bachata, Jive socials in Goa."
        canonical={SITE_URL + '/socials'}
        keywords="dance socials goa, salsa socials, bachata night, dance events goa, latin dance party, ballroom dance socials"
        breadcrumbs={[
          { name: 'Home', url: SITE_URL },
          { name: 'Socials', url: `${SITE_URL}/socials` },
        ]}
      />
      <div className="container max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            Dance <span className="text-gradient-primary">Socials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Experience the joy of social dancing in a relaxed, friendly environment. Practice your
            skills, meet new people, and have a blast!
          </motion.p>
        </div>
        {/* What are Social Nights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">What are Social Dance Nights?</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Social dance nights are community gatherings where students and dance enthusiasts come
              together to practice in a relaxed environment. It's not a class, but a chance to
              dance, socialize, and enjoy the music.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Practice what you learned',
                'Meet the dance community',
                'Gain confidence on the floor',
                'Fun and relaxed atmosphere',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={20} className="text-purple-400" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <a
                href="tel:+919823014397"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all active:scale-95 inline-flex items-center gap-2"
              >
                Join Next Event
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-600/20 blur-[100px] rounded-full" />
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
              <img
                src={`${imageKitUrl}/socials/group.jpg?tr=w-1200,h-675,fo-auto`}
                alt="Social Dance Night"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
        {/* Upcoming Events */}
        <div className="mb-32 hidden">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-white">Upcoming Events</h2>
            <a
              href="tel:+919823014397"
              className="text-purple-400 font-bold hover:text-purple-300 transition-colors flex items-center gap-2"
            >
              Inquire for More
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, idx) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden group hover:shadow-purple-500/20"
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                      Featured
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-cyan-400" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Music size={16} className="text-pink-400" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-purple-400" />
                        {event.location}
                      </div>
                    </div>
                    <button className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95">
                      Book Tickets
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center glass-card border-dashed border-white/10">
                <Calendar size={48} className="text-slate-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No events soon</h3>
                <p className="text-slate-400">Check back later for upcoming social dance nights!</p>
              </div>
            )}
          </div>
        </div>

        {/* Gallery */}
        {/* <ImageCarousel images={galleryImages} /> */}
      </div>
    </div>
  )
}
