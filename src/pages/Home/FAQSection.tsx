import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/config.ts'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span
          className={`lg:text-lg font-bold transition-colors flex-1 ${isOpen ? 'text-purple-400' : 'text-white group-hover:text-purple-300'}`}
        >
          {question}
        </span>
        <div
          className={`size-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-purple-500 text-white rotate-180' : 'bg-white/5 text-slate-400 group-hover:bg-white/10'}`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  return (
    <section className="py-24 relative bg-slate-900/30">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Common <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know about starting your dance journey.
          </p>
        </div>

        <div className="glass-card p-8 lg:p-12 border-purple-500/20">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === idx}
              onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
