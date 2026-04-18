import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { DanceFormsSection } from './DanceFormsSection'
import { TestimonialsSection } from './TestimonialsSection'
import { FAQSection } from './FAQSection'
import { CTASection } from './CTASection'

export function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <DanceFormsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
