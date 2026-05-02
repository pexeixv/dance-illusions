import Seo, { SITE_URL } from '@/components/Seo'
import { motion } from 'motion/react'

export function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="Privacy Policy"
        description="Read the Privacy Policy for Dance Illusions Goa (danceillusions.in)."
        canonical={SITE_URL + '/privacy-policy'}
        noIndex={true}
      />
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-12 space-y-8"
        >
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p>
              At Dance Illusions Goa, we are committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, and safeguard your personal information.
            </p>

            <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, and phone number
              when you contact us or enroll in our classes.
            </p>

            <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            <p>
              We use your information to provide our services, communicate with you about classes
              and events, and improve our offerings.
            </p>

            <h2 className="text-2xl font-bold text-white">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from
              unauthorized access or disclosure.
            </p>

            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at
              +919823014397.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
