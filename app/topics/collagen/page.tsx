import Link from 'next/link'
import { ArrowLeft, Check, Beaker, Shield, AlertCircle } from 'lucide-react'

const benefits = ['Improved skin elasticity and hydration', 'Reduced appearance of fine lines and wrinkles', 'Support for joint health and mobility', 'Potential benefits for hair and nail strength', 'May aid in exercise recovery']
const researchHighlights = [{ stat: '200+', label: 'Clinical studies' }, { stat: '10g', label: 'Typical daily dose' }, { stat: '8-12', label: 'Weeks to see results' }, { stat: 'Type I', label: 'Most common type' }]
const faqs = [
  { question: 'What are collagen peptides?', answer: 'Collagen peptides are short chains of amino acids derived from collagen protein. They are produced through hydrolysis, making them highly bioavailable.' },
  { question: 'How long does it take to see results?', answer: 'Most studies show visible results after 8-12 weeks of consistent daily supplementation.' },
  { question: 'What types of collagen are best?', answer: 'Type I collagen is most abundant in the body. Marine collagen is primarily Type I, while bovine contains Types I and III.' },
  { question: 'Are there any side effects?', answer: 'Collagen peptides are generally well-tolerated. Some may experience mild digestive discomfort when first starting.' },
]

export default function CollagenPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-rose-500 to-rose-600 py-20 md:py-28">
        <div className="container-custom">
          <Link href="/articles" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-6">Skin & Joint Health</span>
            <h1 className="text-white mb-6">Collagen Peptides: Science vs. Hype</h1>
            <p className="text-lg md:text-xl text-white/80">Separating fact from fiction about collagen supplementation.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-offwhite border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchHighlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-1">{item.stat}</div>
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
                <h2 className="mb-6">What is Collagen?</h2>
                <p className="text-gray-text mb-6">Collagen is the most abundant protein in the human body, making up about 30% of total protein content. It serves as the primary structural component of connective tissues.</p>
                <p className="text-gray-text mb-8">As we age, our bodies naturally produce less collagen, contributing to visible signs of aging and joint stiffness.</p>

                <h2 className="mb-6">Research-Backed Benefits</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-rose-600" /></div>
                      <span className="text-gray-text text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-rose-50 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Beaker className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">Key Finding</h4>
                      <p className="text-gray-text text-sm">A study of 69 women found that those who took 2.5-5g of collagen daily for 8 weeks showed significantly improved skin elasticity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h4 className="font-semibold mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-blue-600" />Quick Facts</h4>
                <ul className="space-y-3 text-sm">
                  {[{ label: 'Best form', value: 'Hydrolyzed peptides' }, { label: 'Daily dose', value: '5-10 grams' }, { label: 'Best source', value: 'Marine or bovine' }, { label: 'Time to results', value: '8-12 weeks' }].map((fact) => (
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
