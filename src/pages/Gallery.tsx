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
  '/gallery/118003742_1728439620657681_1036051660801416224_n.jpg',
  '/gallery/44035716_2244044032498323_8832579349208104960_n.jpg',
  '/gallery/44882441_1187023304781445_2491630937817743360_n.jpg',
  '/gallery/464812137_10230751568925782_2487306303939975475_n.jpg',
  '/gallery/468322948_10162434534443120_2237432829257694431_n.jpg',
  '/gallery/468428277_10162226861085944_8680494717123251517_n.jpg',
  '/gallery/468491559_10162140148910944_6263149966479059671_n.jpg',
  '/gallery/468574518_10169724063580128_2917789197086227417_n.jpg',
  '/gallery/468617737_10162390761712905_5267066852748254566_n.jpg',
  '/gallery/468707975_10161852194393260_6203087468016781343_n.jpg',
  '/gallery/468995584_10162347753900944_7261501968841053585_n.jpg',
  '/gallery/469019737_10162348856075944_3041192663997959352_n.jpg',
  '/gallery/472677858_10170649826065012_157903797864257968_n.jpg',
  '/gallery/48415069_1196870220481293_1980653614846181376_n.jpg',
  '/gallery/48418744_2182289945169099_5159092940471009280_n.jpg',
  '/gallery/489951430_3962212224028172_2448357504056279160_n.jpg',
  '/gallery/492395313_9040176632750087_4395723249305638015_n.jpg',
  '/gallery/495466452_10060242437355353_7385592869617181613_n.jpg',
  '/gallery/499208580_3166029133547509_9014574100484356132_n.jpg',
  '/gallery/500062401_9941101349260870_1047690723574279207_n.jpg',
  '/gallery/500325587_9939617569409248_8028059046346423313_n.jpg',
  '/gallery/500853503_3175769552573467_817828684508500677_n.jpg',
  '/gallery/502674425_3141292709372358_5149898602199416690_n.jpg',
  '/gallery/502936232_3143807169120912_8258277020112927753_n.jpg',
  '/gallery/502974423_3143271779174451_266677005106436995_n.jpg',
  '/gallery/503358974_3147390662095896_2102632715425799977_n.jpg',
  '/gallery/504218404_3149156068586022_4812141032056973267_n.jpg',
  '/gallery/504675354_3148532328648396_3585459163628595863_n.jpg',
  '/gallery/504685956_3151566025011693_8154137460047429293_n.jpg',
  '/gallery/504934705_3152282354940060_2813155898814655778_n.jpg',
  '/gallery/504940756_10011371588900512_4824079358275850018_n.jpg',
  '/gallery/504968253_3152267991608163_2052879828224425578_n.jpg',
  '/gallery/505401768_3157357224432573_608133003152529937_n.jpg',
  '/gallery/505856244_3155199531315009_8563456825230410766_n.jpg',
  '/gallery/505999763_23977438638558157_7748390020144976989_n.jpg',
  '/gallery/506017861_3156266807874948_2810479708421730464_n.jpg',
  '/gallery/506193949_3157502151084747_3710743168188600469_n.jpg',
  '/gallery/506353505_3158644957637133_6537264145564982692_n.jpg',
  '/gallery/506719913_10064229880281349_951787012374136135_n.jpg',
  '/gallery/508128750_24781661288089355_6912291934516253343_n.jpg',
  '/gallery/508320594_3051253711705913_868787379969473134_n.jpg',
  '/gallery/511910910_24064651879836832_4497215201250004599_n.jpg',
  '/gallery/513080340_23872483989078651_2429557659501990744_n.jpg',
  '/gallery/514278112_23867727502876234_4689387818801751916_n.jpg',
  '/gallery/514365487_23867727312876253_4929195447358612045_n.jpg',
  '/gallery/515438550_10233983643085616_2801812559451579854_n.jpg',
  '/gallery/516464579_10233981837680482_8750263509531783502_n.jpg',
  '/gallery/516709433_10234194773043733_8377076112729258899_n.jpg',
  '/gallery/516872692_10163323811548120_9215082667780971950_n.jpg',
  '/gallery/516987820_10234001151843324_8917701859206225615_n.jpg',
  '/gallery/517443077_10234249167483560_1641914467668491786_n.jpg',
  '/gallery/518003827_10163352443978120_8845115278499348846_n.jpg',
  '/gallery/518145972_10163415707705396_8641419591992991700_n.jpg',
  '/gallery/518271057_10163249486155944_1498253226650596046_n.jpg',
  '/gallery/518292173_10165536486474027_4605969923557991673_n.jpg',
  '/gallery/518309356_10163249945690944_2958934770991928214_n.jpg',
  '/gallery/518406866_10165536486244027_3154515602848155560_n.jpg',
  '/gallery/52151529_1232524103582571_7251065600754057216_n.jpg',
  '/gallery/545020697_10229730336033107_5131056332135860739_n.jpg',
  '/gallery/545611057_10229730339313189_869859611678701217_n.jpg',
  '/gallery/546628534_10162919554316006_3264998252797009304_n.jpg',
  '/gallery/546925639_10230915709422710_6579516450224266198_n.jpg',
  '/gallery/554665153_10235011390240150_1902964196427381662_n.jpg',
  '/gallery/555057787_10235011388920117_3157233179640811030_n.jpg',
  '/gallery/555087904_24791317070498683_2585903704298960144_n.jpg',
  '/gallery/555429849_24909058002047219_7784181071180581965_n.jpg',
  '/gallery/555465365_24949666294671474_6415825556385824384_n.jpg',
  '/gallery/555683239_24937948562509914_5775254151652645171_n.jpg',
  '/gallery/556460824_24963448893293214_4012464669979065529_n.jpg',
  '/gallery/557735719_24691425630465847_7690330186668191308_n.jpg',
  '/gallery/560428427_25046904354947667_8079572088292893953_n.jpg',
  '/gallery/60271936_1324068737743567_3676978827034099712_n.jpg',
  '/gallery/60300330_1296833227151658_8540867077429264384_n.jpg',
  '/gallery/62609559_1320383658129948_6819205423665512448_n.jpg',
  '/gallery/643548176_10239863735722306_6761016398325365323_n.jpg',
  '/gallery/643822630_10239863738162367_8276810161809084267_n.jpg',
  '/gallery/646359220_10163051774759825_4470849289995235627_n.jpg',
  '/gallery/647418895_10163051601624825_4330537009530018994_n.jpg',
  '/gallery/647429117_10163051599129825_5020743129329878918_n.jpg',
  '/gallery/650272418_10164396313245944_7427744573220823039_n.jpg',
  '/gallery/65169582_1329519860549661_9170837203775913984_n.jpg',
  '/gallery/66137959_10220078046450206_5142316488975187968_n.jpg',
  '/gallery/67074510_2455095411214168_3362105862507200512_n.jpg',
  '/gallery/68360038_10218985088329170_8588088911408922624_n.jpg',
  '/gallery/71344531_10220773634879482_7239446799390343168_n.jpg',
  '/gallery/71574209_10220773634599475_869009138250678272_n.jpg',
  '/gallery/88180701_10222265442253734_8798642716658368512_n.jpg',
  '/gallery/88212637_1560200027481642_4319345886854381568_n.jpg',
  '/gallery/95846312_1624200751081569_5724510850820079616_n.jpg',
  '/gallery/95847093_1624207927747518_2891158717066117120_n.jpg',
  '/gallery/FB_IMG_1477166997990.jpg',
  '/gallery/IMG_20160903_231002.jpg',
  '/gallery/IMG_20160909_175140.jpg',
  '/gallery/IMG_20161030_122622.jpg',
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

      <div className="container px-6 mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto mb-20 space-y-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white lg:text-7xl"
          >
            Dance <span className="text-gradient-primary">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
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
                className="cursor-pointer masonry-item group"
                onClick={() => setSelectedImage(buildImageKitUrl(image.path))}
              >
                <div className="relative h-full overflow-hidden transition-all duration-500 border rounded-xl bg-slate-900/50 border-white/5 hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/20">
                  <img
                    src={buildImageKitUrl(image.path)}
                    alt="Gallery"
                    loading="lazy"
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent group-hover:opacity-100">
                    <div className="text-sm font-medium text-white">View</div>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <img src={selectedImage} alt="Gallery" className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute p-2 text-white transition-colors rounded-full top-4 right-4 bg-slate-950/80 hover:bg-slate-900"
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
