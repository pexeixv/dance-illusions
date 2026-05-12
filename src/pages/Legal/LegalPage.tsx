import Seo, { SITE_URL } from '@/components/Seo'
import { motion } from 'motion/react'
import ReactMarkdown from 'react-markdown'
import termsContent from './terms-of-service.md?raw'
import privacyContent from './privacy-policy.md?raw'

interface LegalPageProps {
  type: 'terms-of-service' | 'privacy-policy'
}

export function LegalPage({ type }: LegalPageProps) {
  const titles: Record<string, string> = {
    'terms-of-service': 'Terms of Service',
    'privacy-policy': 'Privacy Policy',
  }

  const descriptions: Record<string, string> = {
    'terms-of-service': 'Read the Terms of Service for Dance Illusions Goa (danceillusions.in).',
    'privacy-policy': 'Read the Privacy Policy for Dance Illusions Goa (danceillusions.in).',
  }

  const content = type === 'terms-of-service' ? termsContent : privacyContent
  const title = titles[type]
  const description = descriptions[type]
  const path = `/${type}`

  return (
    <div className="pt-32 pb-24">
      <Seo title={title} description={description} canonical={SITE_URL + path} noIndex={true} />
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-12 space-y-8"
        >
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold text-white mt-8 mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-white mt-6 mb-3">{children}</h2>
                ),
                p: ({ children }) => <p className="mb-4 text-slate-400">{children}</p>,
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 ml-2">{children}</ul>
                ),
                li: ({ children }) => <li className="mb-2 text-slate-400">{children}</li>,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
