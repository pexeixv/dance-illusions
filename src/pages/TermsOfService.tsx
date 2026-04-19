import Seo, { SITE_URL } from '@/components/Seo'
import { motion } from 'motion/react'

export function TermsOfService() {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="Terms of Service"
        description="Read the Terms of Service for Dance Illusions Goa (di.gavn.in)."
        canonical={SITE_URL + '/terms-of-service'}
        noIndex={true}
      />
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-12 space-y-8"
        >
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p>
              Welcome to Dance Illusions Goa. By using our website and enrolling in our classes, you
              agree to the following terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-white">Class Enrollment</h2>
            <p>
              Enrollment in our classes is subject to availability. We reserve the right to change
              class schedules or instructors as needed.
            </p>

            <h2 className="text-2xl font-bold text-white">Conduct</h2>
            <p>
              We expect all students to maintain a respectful and supportive environment. Any
              disruptive behavior may result in dismissal from classes.
            </p>

            <h2 className="text-2xl font-bold text-white">Liability</h2>
            <p>
              Dance involves physical activity. By participating in our classes, you assume all
              risks of injury and release Dance Illusions Goa from any liability.
            </p>

            <h2 className="text-2xl font-bold text-white">Refund Policy</h2>
            <p>Fees for classes and workshops are non-refundable unless otherwise specified.</p>

            <h2 className="text-2xl font-bold text-white">Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Your continued use of our
              services constitutes acceptance of the updated terms.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
