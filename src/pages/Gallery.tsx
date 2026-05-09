import { motion } from 'motion/react'
import { useState } from 'react'
import Seo, { SITE_URL } from '@/components/Seo'
import { imageKitUrl } from '@/config'
import Masonry from 'react-masonry-css'

const galleryImages = [
  '/gallery/IMG-20260508-WA0006.jpg',
  '/gallery/IMG-20260509-WA0036.jpg',
  '/gallery/IMG-20260509-WA0000.jpg',
  '/gallery/IMG-20260509-WA0037.jpg',
  '/gallery/IMG-20260509-WA0001.jpg',
  '/gallery/IMG-20260509-WA0038.jpg',
  '/gallery/IMG-20260509-WA0002.jpg',
  '/gallery/IMG-20260509-WA0039.jpg',
  '/gallery/IMG-20260509-WA0003.jpg',
  '/gallery/IMG-20260509-WA0040.jpg',
  '/gallery/IMG-20260509-WA0004.jpg',
  '/gallery/IMG-20260509-WA0041.jpg',
  '/gallery/IMG-20260509-WA0005.jpg',
  '/gallery/IMG-20260509-WA0042.jpg',
  '/gallery/IMG-20260509-WA0006.jpg',
  '/gallery/IMG-20260509-WA0043.jpg',
  '/gallery/IMG-20260509-WA0007.jpg',
  '/gallery/IMG-20260509-WA0044.jpg',
  '/gallery/IMG-20260509-WA0008.jpg',
  '/gallery/IMG-20260509-WA0045.jpg',
  '/gallery/IMG-20260509-WA0009.jpg',
  '/gallery/IMG-20260509-WA0046.jpg',
  '/gallery/IMG-20260509-WA0010.jpg',
  '/gallery/IMG-20260509-WA0047.jpg',
  '/gallery/IMG-20260509-WA0011.jpg',
  '/gallery/IMG-20260509-WA0048.jpg',
  '/gallery/IMG-20260509-WA0012.jpg',
  '/gallery/IMG-20260509-WA0049.jpg',
  '/gallery/IMG-20260509-WA0013.jpg',
  '/gallery/IMG-20260509-WA0050.jpg',
  '/gallery/IMG-20260509-WA0014.jpg',
  '/gallery/IMG-20260509-WA0051.jpg',
  '/gallery/IMG-20260509-WA0015.jpg',
  '/gallery/IMG-20260509-WA0052.jpg',
  '/gallery/IMG-20260509-WA0016.jpg',
  '/gallery/IMG-20260509-WA0053.jpg',
  '/gallery/IMG-20260509-WA0017.jpg',
  '/gallery/IMG-20260509-WA0054.jpg',
  '/gallery/IMG-20260509-WA0018.jpg',
  '/gallery/IMG-20260509-WA0055.jpg',
  '/gallery/IMG-20260509-WA0019.jpg',
  '/gallery/IMG-20260509-WA0056.jpg',
  '/gallery/IMG-20260509-WA0020.jpg',
  '/gallery/IMG-20260509-WA0057.jpg',
  '/gallery/IMG-20260509-WA0021.jpg',
  '/gallery/IMG-20260509-WA0058.jpg',
  '/gallery/IMG-20260509-WA0022.jpg',
  '/gallery/IMG-20260509-WA0059.jpg',
  '/gallery/IMG-20260509-WA0023.jpg',
  '/gallery/IMG-20260509-WA0060.jpg',
  '/gallery/IMG-20260509-WA0024.jpg',
  '/gallery/IMG-20260509-WA0061.jpg',
  '/gallery/IMG-20260509-WA0025.jpg',
  '/gallery/IMG-20260509-WA0062.jpg',
  '/gallery/IMG-20260509-WA0026.jpg',
  '/gallery/IMG-20260509-WA0063.jpg',
  '/gallery/IMG-20260509-WA0027.jpg',
  '/gallery/IMG-20260509-WA0064.jpg',
  '/gallery/IMG-20260509-WA0028.jpg',
  '/gallery/IMG-20260509-WA0065.jpg',
  '/gallery/IMG-20260509-WA0029.jpg',
  '/gallery/IMG-20260509-WA0066.jpg',
  '/gallery/IMG-20260509-WA0030.jpg',
  '/gallery/IMG-20260509-WA0067.jpg',
  '/gallery/IMG-20260509-WA0031.jpg',
  '/gallery/IMG-20260509-WA0068.jpg',
  '/gallery/IMG-20260509-WA0032.jpg',
  '/gallery/IMG-20260509-WA0069.jpg',
  '/gallery/IMG-20260509-WA0033.jpg',
  '/gallery/IMG-20260509-WA0070.jpg',
  '/gallery/IMG-20260509-WA0034.jpg',
  '/gallery/IMG-20260509-WA0071.jpg',
  '/gallery/IMG-20260509-WA0035.jpg',
  '/gallery/IMG-20260509-WA0072.jpg',
  '/gallery/IMG-20260510-WA0035.jpg',
  '/gallery/IMG-20260510-WA0036.jpg',
  '/gallery/IMG-20260510-WA0037.jpg',
  '/gallery/IMG-20260510-WA0034.jpg',
  '/gallery/IMG-20260510-WA0033.jpg',
]

interface GalleryImage {
  path: string
  aspectRatio: number
}

const imagesWithAspectRatio: GalleryImage[] = galleryImages.map((path, index) => ({
  path,
  aspectRatio: (index % 5) + 0.8,
}))

function buildImageKitUrl(imagePath: string): string {
  return `${imageKitUrl}${imagePath}?tr=w-500,h-600,c-at_max,q-80,f-auto`
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const breakpointColumns = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 1,
  }

  return (
    <div className="pt-32 pb-24">
      <Seo
        title="Dance Illusions Gallery"
        description="Blast from the past. 20 years of memories from Dance Illusions. Browse our gallery of unforgettable dance events, socials and celebrations."
        canonical={SITE_URL + '/gallery'}
      />

      <div className="container max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white"
          >
            Dance <span className="text-gradient-primary">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Blast from the past. 20 years of memories from Dance Illusions. Browse our gallery of
            unforgettable dance events, socials and celebrations.
          </motion.p>
        </div>

        {/* Masonry Gallery */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Masonry
            breakpointCols={breakpointColumns}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {imagesWithAspectRatio.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 10) * 0.05 }}
                className="masonry-item cursor-pointer group"
                onClick={() => setSelectedImage(buildImageKitUrl(image.path))}
              >
                <div className="relative h-full overflow-hidden rounded-xl bg-slate-900/50 border border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/20">
                  <img
                    src={buildImageKitUrl(image.path)}
                    alt="Gallery"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white text-sm font-medium">View</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <img src={selectedImage} alt="Gallery" className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
