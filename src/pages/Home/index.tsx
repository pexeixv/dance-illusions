import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { DanceFormsSection } from './DanceFormsSection'
import { TestimonialsSection } from './TestimonialsSection'
import { FAQSection } from './FAQSection'
import { CTASection } from './CTASection'
import Seo, { SITE_URL } from '@/components/Seo'

export function Home() {
  return (
    <div className="flex flex-col">
      <Seo
        title="Dance Illusions - Ballroom & Latin Dance Classes in Goa"
        description="India's largest Ballroom & Latin dance school founded by Dr. Martin. Learn Waltz, Salsa, Tango, Jive & more across Margao, Vasco and Panjim."
        canonical={SITE_URL}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'DanceGroup',
          name: 'Dance Illusions Goa',
          url: SITE_URL,
          description: "India's largest Ballroom and Latin dance school in Goa since 2006.",
          foundingDate: '2006',
          founder: { '@type': 'Person', name: "Dr. Martin D'Costa" },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Margao',
            addressRegion: 'Goa',
            addressCountry: 'IN',
          },
        }}
      />
      <HeroSection />
      <FeaturesSection />
      <DanceFormsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
