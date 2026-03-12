import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Music,
  Star,
  CheckCircle2,
  MessageCircle,
  Plus,
  Minus,
  Award,
} from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { config } from '../config'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const features = [
  {
    title: 'Beginner-Friendly Classes',
    description:
      'Our classes are designed so anyone can start dancing, even with no prior experience.',
    icon: Star,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: '18+ Years of Experience',
    description:
      'Learn ballroom and Latin dance from instructors with over 18 years of teaching and competition experience.',
    icon: Award,
    color: 'from-cyan-500 to-sky-500',
  },
  {
    title: 'Multiple Dance Styles',
    description:
      'Explore a wide range of dances including Waltz, Tango, Salsa, Bachata, Cha Cha and more.',
    icon: Music,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Classes Across Goa',
    description:
      'Attend classes at multiple locations across Goa including Vasco, Margao (Fatorda), and Porvorim.',
    icon: MapPin,
    color: 'from-amber-500 to-orange-500',
  },
]

const danceCategories = [
  {
    title: 'Latin',
    dances: ['Rumba', 'Cha Cha', 'Samba', 'International Jive'],
    image: '/latin.jpeg',
    slug: 'latin',
  },
  {
    title: 'Ballroom',
    dances: ['American Waltz', 'Viennese Waltz', 'Tango', 'Foxtrot'],
    image: '/ballroom.jpeg',
    slug: 'ballroom',
  },
  {
    title: 'Social',
    dances: ['Salsa', 'Bachata', 'Social Jive'],
    image: '/social.jpeg',
    slug: 'social',
  },
]

const testimonials = [
  {
    name: 'Anjali S.',
    text: 'Dance Illusions has completely transformed my confidence on the dance floor. The instructors are patient and professional.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Rahul M.',
    text: "The best place in Goa to learn Ballroom. Dr. Martin's technique is world-class.",
  },
  {
    name: 'Sneha P.',
    text: 'I joined for the crash course and stayed for the community. The social nights are the highlight of my week!',
  },
  {
    name: 'Vikram D.',
    text: 'Professional, fun, and highly addictive! I never thought I could dance until I joined here.',
  },
  {
    name: 'Maria L.',
    text: 'The wedding choreography was perfect. Our guests were amazed by our first dance!',
  },
  {
    name: 'Kevin F.',
    text: 'Great energy, great people. A must-visit for anyone interested in Latin dance in Goa.',
  },
  {
    name: 'Priya R.',
    text: 'The instructors break down complex moves into simple steps. Highly recommended for absolute beginners.',
  },
  {
    name: 'Jason K.',
    text: "Amazing atmosphere and top-notch teaching. I've learned so much in just a few months.",
  },
  {
    name: 'Deepa G.',
    text: "Dance Illusions is more than just a dance school; it's a family. I love the vibe here!",
  },
  {
    name: 'Amit B.',
    text: 'The schedule is flexible enough for my busy work life. The Margao studio is beautiful.',
  },
  {
    name: 'Sonia V.',
    text: 'Learning Salsa here was the best decision I made this year. So much fun!',
  },
  {
    name: 'Rohan T.',
    text: 'Dr. Martin is a legend. His passion for dance is contagious.',
  },
  {
    name: 'Anita C.',
    text: 'The social jive workshops are a blast. I met so many great people.',
  },
  {
    name: 'Neil P.',
    text: 'Excellent teaching methods. They focus on both technique and the joy of dancing.',
  },
  {
    name: 'Zara H.',
    text: 'I love the neon aesthetic of the studios. It makes every class feel like a party.',
  },
  {
    name: 'Leo S.',
    text: 'The best investment in myself. Dancing has improved my posture and my social life.',
  },
  {
    name: 'Tanya K.',
    text: 'The instructors are so encouraging. I always leave class with a big smile.',
  },
  {
    name: 'Chris M.',
    text: 'Highly professional and well-organized. The best dance school in Goa, hands down.',
  },
  {
    name: 'Maya D.',
    text: 'The Bachata classes are fun. Martin is an amazing teacher.',
  },
  {
    name: 'Sam W.',
    text: "I've tried other schools, but nothing compares to the quality of instruction at Dance Illusions.",
  },
]

const faqs = [
  {
    question: 'Do I need a partner to join classes?',
    answer:
      "No, you don't need a partner! Many of our students join individually. During classes, we often rotate partners so everyone gets a chance to dance and learn how to lead or follow different people. However, if you do come with a partner and prefer to dance only with them, that's perfectly fine too.",
  },
  {
    question: 'I have never danced before. Can beginners join?',
    answer:
      'Absolutely! Most of our students start as complete beginners. Our Beginner Crash Course and regular beginner classes are specifically designed for those with no prior experience. We break down every move step-by-step to ensure you feel comfortable and confident.',
  },
  {
    question: 'What should I wear to class?',
    answer:
      'For regular classes, wear comfortable clothing that allows you to move freely. For footwear, we recommend shoes with smooth soles (leather or suede) that allow you to turn easily on the floor. Avoid rubber-soled sneakers as they can grip the floor too much and strain your knees. As you progress, you might want to invest in professional dance shoes.',
  },
  {
    question: 'Which dance should I start with?',
    answer:
      'It depends on your personal preference! If you like romantic, slow music, you might enjoy Waltz or Rumba. If you prefer high energy, Cha Cha or Jive might be for you. Our Beginner Crash Course is a great way to try multiple styles (Waltz, Tango, Foxtrot, Cha Cha, and Jive) before deciding which one you want to focus on.',
  },
  {
    question: 'Are there age restrictions?',
    answer:
      'Dance is for everyone! We have students ranging from teenagers to senior citizens. Our classes are open to all age groups, and we ensure a supportive and inclusive environment for everyone.',
  },
  {
    question: 'How long does it take to learn a dance?',
    answer:
      "This varies from person to person, but most students feel comfortable with basic patterns after 8-10 sessions. Mastery takes time and practice, but you'll be able to enjoy yourself on the social dance floor much sooner than you think!",
  },
]

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  key?: any
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span
          className={`lg:text-lg font-bold transition-colors flex-1 ${isOpen ? 'text-purple-400' : 'text-white group-hover:text-purple-300'}`}
        >
          {question}
        </span>
        <div
          className={`size-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-purple-500 text-white rotate-180' : 'bg-white/5 text-slate-400 group-hover:bg-white/10'}`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-28 pb-24 lg:pt-40 lg:py-24 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
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
                Learn Ballroom, Latin and Social dancing from professional instructors in Goa.
                Unleash your inner rhythm and join our vibrant community.
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
                  className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95 text-center "
                >
                  Call to Join
                </a>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?u=${i}`}
                        alt="Student"
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
                    <span className="text-white font-bold">500+</span> Happy Students
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              {/* Stage Platform Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[100px] bg-purple-600/30 blur-[60px] rounded-[100%] pointer-events-none" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[40px] bg-cyan-400/20 blur-[30px] rounded-[100%] pointer-events-none" />

              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 lg:aspect-4/5 group  max-lg:max-h-100 flex flex-col items-center justify-center">
                <img
                  src="/hero.jpg"
                  alt="Professional Dancers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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

      {/* Feature Section */}
      <section className="py-24 max-lg:pt-4 relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 group hover:shadow-purple-500/20"
              >
                <div
                  className={cn(
                    'w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform',
                    feature.color
                  )}
                >
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Forms Section */}
      <section className="py-24 relative bg-slate-900/30">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Dance Forms</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Explore a wide range of dance styles from the elegance of Ballroom to the energy of
              Latin and Social dances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {danceCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[3/4]"
              >
                <img
                  src={`${config.imageKitUrl}/tr:w-450${category.image}`}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-90" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                  <ul className="space-y-2 mb-8">
                    {category.dances.map((dance) => (
                      <li key={dance}>
                        <Link
                          to={`/forms/${dance.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors group/item py-0.5"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-purple-400 group-hover/item:scale-110 transition-transform"
                          />
                          <span className="font-medium">{dance}</span>
                          <ArrowRight
                            size={14}
                            className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/forms#${category.slug}`}
                    className="inline-flex items-center gap-2 text-white font-bold hover:text-purple-400 transition-colors"
                  >
                    Explore More
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                className="glass-card p-8 w-[350px] shrink-0 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{t.text}"</p>
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

      {/* FAQ Section */}
      <section className="py-24 relative bg-slate-900/30">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Common <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Everything you need to know about starting your dance journey.
            </p>
          </div>

          <div className="glass-card p-8 lg:p-12 border-purple-500/20">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === idx}
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              />
            ))}
          </div>

          <div className="mt-16 glass-card p-10 text-center space-y-6 border-cyan-500/20 hidden">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">Still have questions?</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Feel free to reach out to us directly via WhatsApp for a quick response.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/919823012345"
                className="bg-[#25D366] text-white px-10 py-4 rounded-2xl font-bold hover:brightness-110 transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-green-500/20"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  )
}
