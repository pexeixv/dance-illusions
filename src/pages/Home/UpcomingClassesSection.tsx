import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { imageKitUrl, phase, PhaseEnum, phaseConfig } from '@/config'

const posters = [
  `${imageKitUrl}/posters/june-bachata.png`,
  `${imageKitUrl}/posters/june-salsa.png`,
  `${imageKitUrl}/posters/june-jive.png`,
]

interface Props {
  hideTitle?: boolean
}

function UpcomingClassesSection({ hideTitle = false }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const config = phaseConfig[phase]

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posters.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posters.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posters.length) % posters.length)
  }

  if (!config.showUpcomingClasses || phase === PhaseEnum.BREAK) return null

  const title = config.upcomingClasses.title
  const description = config.upcomingClasses.description

  return (
    <section className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-6">
        {!hideTitle && title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {title}
              {phase === PhaseEnum.BATCH_ONGOING && (
                <>
                  {' '}
                  <span className="text-gradient-primary">Classes</span>
                </>
              )}
            </h2>
            {description && <p className="text-lg text-slate-300 mt-4">{description}</p>}
          </div>
        )}

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {posters.map((poster, index) => (
            <motion.div
              key={poster}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl glass-card group"
            >
              <img
                src={poster}
                alt={`Upcoming Class ${index + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative flex flex-col items-center">
          <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl glass-card bg-zinc-900/50">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden flex items-center justify-center touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={posters[currentIndex]}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  alt={`Upcoming Class ${currentIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 hover:bg-black/70 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm border border-white/10 hover:bg-black/70 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {posters.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-500 w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingClassesSection
