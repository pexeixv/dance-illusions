import { motion } from 'motion/react'
import { Music, Users, Calendar, Star, ArrowRight, CheckCircle2 } from 'lucide-react'
import Seo, { SITE_URL } from '@/components/Seo'
import { imageKitUrl } from '@/config'
import ImageCarousel from '@/components/ImageCarousel'

const galleryImages = [
  "/gallery/IMG-20260508-WA0006.jpg",
  "/gallery/IMG-20260509-WA0036.jpg",
  "/gallery/IMG-20260509-WA0000.jpg",
  "/gallery/IMG-20260509-WA0037.jpg",
  "/gallery/IMG-20260509-WA0001.jpg",
  "/gallery/IMG-20260509-WA0038.jpg",
  "/gallery/IMG-20260509-WA0002.jpg",
  "/gallery/IMG-20260509-WA0039.jpg",
  "/gallery/IMG-20260509-WA0003.jpg",
  "/gallery/IMG-20260509-WA0040.jpg",
  "/gallery/IMG-20260509-WA0004.jpg",
  "/gallery/IMG-20260509-WA0041.jpg",
  "/gallery/IMG-20260509-WA0005.jpg",
  "/gallery/IMG-20260509-WA0042.jpg",
  "/gallery/IMG-20260509-WA0006.jpg",
  "/gallery/IMG-20260509-WA0043.jpg",
  "/gallery/IMG-20260509-WA0007.jpg",
  "/gallery/IMG-20260509-WA0044.jpg",
  "/gallery/IMG-20260509-WA0008.jpg",
  "/gallery/IMG-20260509-WA0045.jpg",
  "/gallery/IMG-20260509-WA0009.jpg",
  "/gallery/IMG-20260509-WA0046.jpg",
  "/gallery/IMG-20260509-WA0010.jpg",
  "/gallery/IMG-20260509-WA0047.jpg",
  "/gallery/IMG-20260509-WA0011.jpg",
  "/gallery/IMG-20260509-WA0048.jpg",
  "/gallery/IMG-20260509-WA0012.jpg",
  "/gallery/IMG-20260509-WA0049.jpg",
  "/gallery/IMG-20260509-WA0013.jpg",
  "/gallery/IMG-20260509-WA0050.jpg",
  "/gallery/IMG-20260509-WA0014.jpg",
  "/gallery/IMG-20260509-WA0051.jpg",
  "/gallery/IMG-20260509-WA0015.jpg",
  "/gallery/IMG-20260509-WA0052.jpg",
  "/gallery/IMG-20260509-WA0016.jpg",
  "/gallery/IMG-20260509-WA0053.jpg",
  "/gallery/IMG-20260509-WA0017.jpg",
  "/gallery/IMG-20260509-WA0054.jpg",
  "/gallery/IMG-20260509-WA0018.jpg",
  "/gallery/IMG-20260509-WA0055.jpg",
  "/gallery/IMG-20260509-WA0019.jpg",
  "/gallery/IMG-20260509-WA0056.jpg",
  "/gallery/IMG-20260509-WA0020.jpg",
  "/gallery/IMG-20260509-WA0057.jpg",
  "/gallery/IMG-20260509-WA0021.jpg",
  "/gallery/IMG-20260509-WA0058.jpg",
  "/gallery/IMG-20260509-WA0022.jpg",
  "/gallery/IMG-20260509-WA0059.jpg",
  "/gallery/IMG-20260509-WA0023.jpg",
  "/gallery/IMG-20260509-WA0060.jpg",
  "/gallery/IMG-20260509-WA0024.jpg",
  "/gallery/IMG-20260509-WA0061.jpg",
  "/gallery/IMG-20260509-WA0025.jpg",
  "/gallery/IMG-20260509-WA0062.jpg",
  "/gallery/IMG-20260509-WA0026.jpg",
  "/gallery/IMG-20260509-WA0063.jpg",
  "/gallery/IMG-20260509-WA0027.jpg",
  "/gallery/IMG-20260509-WA0064.jpg",
  "/gallery/IMG-20260509-WA0028.jpg",
  "/gallery/IMG-20260509-WA0065.jpg",
  "/gallery/IMG-20260509-WA0029.jpg",
  "/gallery/IMG-20260509-WA0066.jpg",
  "/gallery/IMG-20260509-WA0030.jpg",
  "/gallery/IMG-20260509-WA0067.jpg",
  "/gallery/IMG-20260509-WA0031.jpg",
  "/gallery/IMG-20260509-WA0068.jpg",
  "/gallery/IMG-20260509-WA0032.jpg",
  "/gallery/IMG-20260509-WA0069.jpg",
  "/gallery/IMG-20260509-WA0033.jpg",
  "/gallery/IMG-20260509-WA0070.jpg",
  "/gallery/IMG-20260509-WA0034.jpg",
  "/gallery/IMG-20260509-WA0071.jpg",
  "/gallery/IMG-20260509-WA0035.jpg",
  "/gallery/IMG-20260509-WA0072.jpg"
];
  

export function Gallery() {

  <div className="pt-32 pb-24">
      <Seo
        title="Dance Illusions Gallery"
        description=""
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
            Experience the joy of social dancing in a relaxed, friendly environment. Practice your
            skills, meet new people, and have a blast!
          </motion.p>
        </div>

      <ImageCarousel images={galleryImages} />

    </div>
  </div>
    



}
