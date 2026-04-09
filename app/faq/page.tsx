import Link from 'next/link'
import { HelpCircle, Mail, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about Vitalis Research Co., our content, and our approach to wellness research.',
}

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What type of information do you publish?',
        answer: 'We publish research summaries, educational articles, and evidence-based insights on wellness topics including creatine, collagen peptides, electrolytes, hydration, recovery, and foundational health. All content is based on peer-reviewed scientific research.',
      },
      {
        question: 'How do you choose what topics to write about?',
        answer: 'We focus on wellness topics that have substantial scientific research behind them. Our editorial team reviews emerging research, tracks scientific trends, and considers reader interest to identify topics that would be most valuable to cover.',
      },
      {
        question: 'Is your content really free?',
        answer: 'Yes, all of our content is completely free to access. We believe that quality health information should be accessible to everyone, not locked behind paywalls.',
      },
    ],
  },
  {
    category: 'Medical & Safety',
    questions: [
      {
        question: 'Is this medical advice?',
        answer: 'No. Our content is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.',
      },
      {
        question: 'Can I follow your recommendations without consulting a doctor?',
        answer: 'We strongly recommend consulting with a qualified healthcare provider before making any significant changes to your diet, supplement regimen, or exercise routine. Individual needs and health situations vary.',
      },
      {
        question: 'Are supplements safe for everyone?',
        answer: 'Supplement safety depends on many factors including individual health status, medications, and specific circumstances. Always consult a healthcare provider before starting any new supplement.',
      },
    ],
  },
  {
    category: 'Our Approach',
    questions: [
      {
        question: 'Do you sell products?',
        answer: 'No. Vitalis Research Co. is purely an informational resource. We do not sell supplements, and we do not accept payment for product recommendations.',
      },
      {
        question: 'How do you make money?',
        answer: 'Currently, Vitalis Research Co. operates as a free educational resource. We may explore sustainable funding models in the future, but we will never compromise our editorial independence.',
      },
      {
        question: 'How do you ensure your information is accurate?',
        answer: 'We base every article on peer-reviewed research from reputable scientific journals. Our content goes through a multi-step review process that includes fact-checking against primary sources.',
      },
    ],
  },
  {
    category: 'Contact & Feedback',
    questions: [
      {
        question: 'How can I contact your team?',
        answer: 'You can reach us via email at hello@vitalisresearchco.com or by phone at 419-098-7764. We also have a contact form on our Contact page.',
      },
      {
        question: 'Can I suggest a topic for an article?',
        answer: 'Absolutely! We welcome topic suggestions from our readers. If there\'s a wellness topic you\'d like us to explore, please reach out via our contact page.',
      },
      {
        question: 'Do you accept guest contributions?',
        answer: 'We occasionally work with qualified experts in nutrition, exercise science, and related fields. If you\'re interested in contributing, please contact us with your credentials.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">FAQ</span>
            <h1 className="text-white mt-4 mb-6">Frequently Asked Questions</h1>
            <p className="text-white/70 text-xl">
              Find answers to common questions about our content, approach, and how we work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-offwhite rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-navy mb-3">{faq.question}</h3>
                      <p className="text-gray-text">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="mb-4">Still Have Questions?</h2>
            <p className="text-gray-text text-lg mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="mailto:hello@vitalisresearchco.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-navy rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <Mail className="w-5 h-5" /> hello@vitalisresearchco.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}