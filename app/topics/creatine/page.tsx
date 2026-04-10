import Link from 'next/link'
import { ArrowLeft, Check, Beaker, Shield, AlertCircle } from 'lucide-react'

const benefits = ['Increased muscle strength and power output', 'Enhanced high-intensity exercise performance', 'Improved muscle recovery between sets', 'Potential cognitive benefits', 'Safe for long-term use with no serious side effects']
const researchHighlights = [{ stat: '1,000+', label: 'Peer-reviewed studies' }, { stat: '30+', label: 'Years of research' }, { stat: '5g', label: 'Recommended daily dose' }, { stat: '95%', label: 'Creatine monohydrate purity' }]
const faqs = [
  { question: 'What is creatine and how does it work?', answer: 'Creatine is a naturally occurring compound found in muscle cells. It helps produce ATP, the primary energy currency of cells, which is especially important during high-intensity exercise.' },
  { question: 'Is creatine safe?', answer: 'Yes, creatine is one of the most extensively studied supplements with an excellent safety profile. Decades of research have shown no serious adverse effects when taken at recommended doses.' },
  { question: 'Do I need to load creatine?', answer: 'Loading is optional. While a loading phase can saturate muscles faster, taking a standard 5g daily dose will achieve the same saturation over 2-4 weeks.' },
  { question: 'Will creatine cause water retention?', answer: 'Creatine does cause muscles to hold slightly more water (intracellular water), which is actually beneficial for muscle function.' },
]

export default function CreatinePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-amber-600 to-amber-700 py-20 md:py-28">
        <div className="container-custom">
          <Link href="/articles" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-6">Performance & Strength</span>
            <h1 className="text-white mb-6">The Complete Guide to Creatine Monohydrate</h1>
            <p className="text-lg md:text-xl text-white/80">The most researched sports supplement in history. Discover why creatine monohydrate is the gold standard.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-offwhite border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchHighlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-1">{item.stat}</div>
                <p className="text-gray-text text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
                <h2 className="mb-6">What is Creatine?</h2>
                <p className="text-gray-text mb-6">Creatine is a naturally occurring compound synthesized from amino acids in the liver, kidneys, and pancreas. Approximately 95% of the body&apos;s creatine is stored in skeletal muscle.</p>
                <p className="text-gray-text mb-8">When you supplement with creatine, you increase your muscles&apos; phosphocreatine stores, allowing for more rapid ATP regeneration during high-intensity exercise.</p>

                <h2 className="mb-6">Proven Benefits</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-amber-600" /></div>
                      <span className="text-gray-text text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <h2 className="mb-6">How to Take Creatine</h2>
                <p className="text-gray-text mb-6">The most effective form is creatine monohydrate. The standard recommendation is 3-5 grams daily, taken at any time. Consistency is key.</p>

                <div className="bg-amber-50 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Beaker className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">The Science</h4>
                      <p className="text-gray-text text-sm">A 2017 meta-analysis confirmed that creatine monohydrate is the most effective nutritional supplement for increasing high-intensity exercise capacity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h4 className="font-semibold mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-blue-600" />Quick Facts</h4>
                <ul className="space-y-3 text-sm">
                  {[{ label: 'Best form', value: 'Monohydrate' }, { label: 'Daily dose', value: '3-5 grams' }, { label: 'Timing', value: 'Any time' }, { label: 'Loading', value: 'Optional' }].map((fact) => (
                    <li key={fact.label} className="flex justify-between"><span className="text-gray-text">{fact.label}:</span><span className="font-medium">{fact.value}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-offwhite rounded-xl p-6">
                  <h4 className="font-semibold mb-3 flex items-start gap-3"><AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />{faq.question}</h4>
                  <p className="text-gray-text text-sm pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
