import Link from 'next/link'
import { ArrowRight, Beaker, BookOpen, HelpCircle, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Electrolytes Research & Information',
  description: 'Comprehensive research-based information about electrolytes, hydration science, and their role in overall health and performance.',
}

const faqs = [
  {
    question: 'What are electrolytes?',
    answer: 'Electrolytes are minerals that carry an electric charge when dissolved in body fluids. The major electrolytes include sodium, potassium, magnesium, calcium, chloride, and bicarbonate.',
  },
  {
    question: 'Why are electrolytes important?',
    answer: 'Electrolytes are essential for numerous bodily functions including fluid balance, muscle contraction, nerve signaling, pH balance, and cellular energy production.',
  },
  {
    question: 'How do electrolytes relate to hydration?',
    answer: 'Electrolytes help regulate fluid balance in the body. They influence how water is distributed between fluid compartments and play a key role in thirst mechanisms.',
  },
  {
    question: 'Who might need to pay attention to electrolyte intake?',
    answer: 'Athletes, people who sweat heavily, individuals following specific dietary patterns, and those with certain medical conditions may need to be mindful of electrolyte balance.',
  },
  {
    question: 'Can you get electrolytes from food?',
    answer: 'Yes, many foods are rich in electrolytes. Fruits and vegetables, nuts, seeds, dairy products, and fortified foods all provide various electrolytes.',
  },
]

export default function ElectrolytesPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-50 to-offwhite" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/articles" className="text-gray-text hover:text-blue-600 transition-colors text-sm">Articles</Link>
              <span className="text-gray-300">/</span>
              <span className="text-blue-600 text-sm font-medium">Topics</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <Beaker className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-medium text-cyan-600">Hydration Research</span>
            </div>
            <h1 className="mb-6">Electrolytes</h1>
            <p className="text-xl text-gray-text max-w-2xl">
              Essential minerals that power cellular function, regulate hydration, and support overall health and physical performance.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="text-sm font-medium text-cyan-600 uppercase tracking-wider">Overview</span>
              <h2 className="mt-4 mb-6">What Are Electrolytes?</h2>
              <div className="space-y-4 text-gray-text">
                <p>
                  Electrolytes are minerals that carry an electric charge when dissolved in water or body fluids. These charged particles are essential for countless physiological processes that keep the body functioning properly.
                </p>
                <p>
                  The major electrolytes in the human body include sodium, potassium, magnesium, calcium, chloride, and bicarbonate. Each plays unique and overlapping roles in maintaining health.
                </p>
              </div>
              <div className="mt-8 p-6 bg-cyan-50 rounded-xl">
                <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-600" />
                  Key Research Areas
                </h4>
                <ul className="space-y-2 text-sm text-gray-text">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />Exercise performance and hydration</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />Fluid balance and kidney function</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />Muscle function and cramping</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />Cognitive function and fatigue</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-offwhite rounded-2xl p-6 sticky top-24">
                <h4 className="font-semibold text-navy mb-4">Major Electrolytes</h4>
                <div className="space-y-4">
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Sodium</span><p className="font-medium text-navy">Fluid balance, nerve function</p></div>
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Potassium</span><p className="font-medium text-navy">Muscle contraction, heart rhythm</p></div>
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Magnesium</span><p className="font-medium text-navy">Energy production, muscle function</p></div>
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Calcium</span><p className="font-medium text-navy">Bone health, muscle signaling</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-medium text-cyan-600 uppercase tracking-wider">Mechanism</span>
            <h2 className="mt-4 mb-6">How Electrolytes Work</h2>
            <div className="space-y-6 text-gray-text">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Nerve Signaling</h4>
                    <p className="text-sm">Electrolytes create electrochemical gradients across nerve cell membranes, enabling transmission of electrical impulses.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Muscle Contraction</h4>
                    <p className="text-sm">Calcium, sodium, and potassium work together to enable muscle fibers to contract and relax properly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Fluid Balance</h4>
                    <p className="text-sm">Electrolytes influence osmotic pressure, helping regulate water distribution in the body.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-medium text-cyan-600 uppercase tracking-wider">Research</span>
            <h2 className="mt-4 mb-6">What the Research Shows</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Exercise and Hydration</h3>
                <p className="text-gray-text mb-4">
                  Research in sports science has extensively studied electrolyte losses during exercise, particularly through sweat. Studies have shown that prolonged or intense physical activity can lead to significant sodium and potassium losses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Muscle Cramping</h3>
                <p className="text-gray-text mb-4">
                  The relationship between electrolytes and exercise-associated muscle cramps has been a topic of scientific investigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-cyan-600 uppercase tracking-wider">FAQ</span>
              <h2 className="mt-4 mb-6">Common Questions About Electrolytes</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-navy mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h4>
                  <p className="text-gray-text text-sm pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h4>
                  <div className="text-amber-700 text-sm space-y-2">
                    <p>The information provided is for educational purposes only. It is not intended as medical advice.</p>
                    <p>Consult with a qualified healthcare provider before making significant changes to your electrolyte intake.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Want to Learn More?</h2>
            <p className="text-white/70 text-lg mb-8">Explore our full collection of articles on electrolytes and other wellness topics.</p>
            <Link href="/articles" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy rounded-lg font-medium hover:bg-white/90 transition-colors">
              Browse All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}