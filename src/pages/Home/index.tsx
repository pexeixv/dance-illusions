import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { DanceFormsSection } from './DanceFormsSection'
import { TestimonialsSection } from './TestimonialsSection'
import { FAQSection } from './FAQSection'
import { CTASection } from './CTASection'
import { UpcomingClassesPopup } from '@/components/UpcomingClassesPopup'
import Seo, { SITE_URL } from '@/components/Seo'
import UpcomingClassesSection from './UpcomingClassesSection'

export function Home() {
  return (
    <div className="flex flex-col">
      <UpcomingClassesPopup />
      <Seo
        title="Ballroom & Latin Dance Classes in Goa | Dance School India"
        description="Learn Ballroom, Latin, Salsa, Bachata & Jive at India's premier dance school in Goa. Expert instructors, flexible schedules. Margao, Vasco, Panjim locations."
        canonical={SITE_URL}
        keywords="ballroom dance goa, latin dance classes india, salsa classes goa, bachata dance, jive dance, dance school india, ballroom dance classes goa"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': SITE_URL,
          name: 'Dance Illusions Goa',
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.svg`,
          description: "India's largest Ballroom and Latin dance school in Goa since 2006.",
          foundingDate: '2006',
          founder: { '@type': 'Person', name: "Dr. Martin D'Costa" },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Goa',
            addressRegion: 'Goa',
            addressCountry: 'IN',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+919823014397',
          },
          sameAs: ['https://www.facebook.com/danceillusions'],
        }}
      />
      <HeroSection />
      <UpcomingClassesSection />
      <FeaturesSection />
      <DanceFormsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
