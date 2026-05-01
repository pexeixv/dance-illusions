import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { imageKitUrl } from '@/config'

interface Props {
  images: string[]
}

export default function ImageCarousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const N = images.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => prev + 1)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => prev - 1)
  }, [])

  useEffect(() => {
    if (isHovered || lightboxOpen) return
    const timer = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(timer)
  }, [isHovered, lightboxOpen, nextSlide])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [])

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'ArrowRight') nextLightbox()
      if (e.key === 'ArrowLeft') prevLightbox()
      if (e.key === 'Escape') closeLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, nextLightbox, prevLightbox])

  return (
    <div className=" overflow-hidden">
      <main className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
        <motion.div
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center cursor-grab active:cursor-grabbing z-10 pb-40"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) {
              nextSlide()
            } else if (info.offset.x > 50) {
              prevSlide()
            }
          }}
        >
          {images.map((img, i) => {
            const centerIndex = ((currentIndex % N) + N) % N
            let diff = i - centerIndex
            if (diff > Math.floor(N / 2)) diff -= N
            if (diff < -Math.floor(N / 2)) diff += N

            let x = '0%'
            let rotateY = 0
            let z = 0
            let opacity = 1
            let scale = 1
            let zIndex = 10 - Math.abs(diff)

            if (diff === 0) {
              x = '0%'
              rotateY = 0
              z = 0
              scale = 1
              opacity = 1
            } else if (diff === -1) {
              x = '-85%'
              rotateY = 40
              z = -100
              scale = 0.85
              opacity = 1
            } else if (diff === 1) {
              x = '85%'
              rotateY = -40
              z = -100
              scale = 0.85
              opacity = 1
            } else {
              x = diff < 0 ? '-150%' : '150%'
              rotateY = diff < 0 ? 60 : -60
              z = -200
              scale = 0.6
              opacity = 0
            }

            return (
              <motion.div
                key={i}
                className="absolute w-[260px] md:w-[360px] lg:w-[460px] aspect-[4/5] overflow-hidden cursor-pointer shadow-2xl"
                initial={false}
                animate={{
                  x,
                  rotateY,
                  z,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => {
                  if (diff === 0) openLightbox(i)
                  else if (diff === -1) prevSlide()
                  else if (diff === 1) nextSlide()
                }}
              >
                <img
                  src={img.startsWith('http') ? img : `${imageKitUrl}/${img}`}
                  className="w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <motion.div
                  className="absolute inset-0 bg-black/40 pointer-events-none"
                  initial={false}
                  animate={{ opacity: diff === 0 ? 0 : 1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            )
          })}

          <div className="absolute bottom-0 flex items-center gap-8">
            <button
              onClick={prevSlide}
              onPointerDown={(e) => e.stopPropagation()}
              className=" bg-black/50 hover:bg-black/80 text-white p-3 backdrop-blur-sm transition-all "
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              onPointerDown={(e) => e.stopPropagation()}
              className=" bg-black/50 hover:bg-black/80 text-white p-3 backdrop-blur-sm transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </main>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center backdrop-blur-md"
          >
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
              <div className="text-white/70 text-sm font-mono tracking-widest">
                {lightboxIndex + 1} / {images.length}
              </div>
              <button
                onClick={closeLightbox}
                className="text-white/70 hover:text-white transition-colors p-2  hover:bg-white/10"
              >
                <X size={28} />
              </button>
            </div>

            <div
              className="absolute inset-y-0 left-0 w-1/4 cursor-pointer z-0"
              onClick={prevLightbox}
            />
            <div
              className="absolute inset-y-0 right-0 w-1/4 cursor-pointer z-0"
              onClick={nextLightbox}
            />

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevLightbox()
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 !z-100 hover:bg-white/10"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextLightbox()
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-10 hover:bg-white/10 "
            >
              <ChevronRight size={36} />
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center p-12"
              onClick={closeLightbox}
            >
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                src={
                  images[lightboxIndex].startsWith('http')
                    ? images[lightboxIndex]
                    : `${imageKitUrl}/${images[lightboxIndex]}`
                }
                alt={`Lightbox ${lightboxIndex + 1}`}
                className="max-w-full max-h-full object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
