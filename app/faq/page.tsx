import { HelpCircle, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    category: 'General',
    questions: [
      { question: 'What is Vitalis Research Co.?', answer: 'Vitalis Research Co. is an educational wellness platform dedicated to providing science-backed information about supplements, nutrition, and performance.' },
      { question: 'Is your content free?', answer: 'Yes, all of our educational content is completely free. We believe everyone deserves access to accurate wellness information.' },
      { question: 'Do you sell supplements?', answer: 'No, we do not sell any products. We are purely an educational resource.' },
    ],
  },
  {
    category: 'Research',
    questions: [
      { question: 'How do you source your information?', answer: 'All of our content is based on peer-reviewed scientific studies from reputable journals.' },
      { question: 'Who writes your articles?', answer: 'Our content is created by researchers, science writers, and medical professionals.' },
      { question: 'How often is content updated?', answer: 'We regularly review and update our articles to reflect the latest scientific findings.' },
    ],
  },
  {
    category: 'Supplements',
    questions: [
      { question: 'Should I take supplements?', answer: 'Whether to take supplements depends on your individual needs. We recommend consulting with a healthcare professional.' },
      { question: 'Are the supplements you discuss safe?', answer: 'We only discuss supplements with established safety profiles. Always consult your doctor before starting any supplement.' },
      { question: 'Which supplement brand should I buy?', answer: 'We do not recommend specific brands. Look for third-party tested products from reputable manufacturers.' },
    ],
  },
]

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-white/70">Find answers to common questions about our research, content, and mission.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {faqs.map((category) => (
              <div key={category.category} className="mb-12">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-3"><HelpCircle className="w-6 h-6 text-blue-600" />{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <div key={faq.question} className="bg-white rounded-xl p-6 border border-gray-200">
                      <h3 className="font-semibold mb-3">{faq.question}</h3>
                      <p className="text-gray-text text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-navy rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h2 className="text-white mb-4">Still Have Questions?</h2>
              <p className="text-white/70 mb-8">If you couldn&apos;t find the answer you were looking for, feel free to reach out.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy rounded-lg font-medium hover:bg-white/90 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
