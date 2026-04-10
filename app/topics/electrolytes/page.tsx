import Link from 'next/link'
import { ArrowLeft, Check, Beaker, Shield, AlertCircle } from 'lucide-react'

const benefits = ['Optimal hydration and fluid balance', 'Improved muscle function and contraction', 'Enhanced athletic performance', 'Better nerve signaling', 'Prevention of muscle cramps']
const researchHighlights = [{ stat: '5', label: 'Key electrolytes' }, { stat: '2-3L', label: 'Daily water needs' }, { stat: '500mg', label: 'Typical sodium dose' }, { stat: '98%', label: 'Population deficient' }]
const electrolytes = [
  { name: 'Sodium', role: 'Fluid balance, nerve function', sources: 'Salt, processed foods' },
  { name: 'Potassium', role: 'Muscle contraction, heart rhythm', sources: 'Bananas, potatoes' },
  { name: 'Magnesium', role: 'Muscle relaxation, energy', sources: 'Nuts, seeds' },
  { name: 'Calcium', role: 'Bone health, muscle function', sources: 'Dairy, fortified foods' },
  { name: 'Chloride', role: 'Fluid balance, digestion', sources: 'Salt, seaweed' },
]
const faqs = [
  { question: 'What are electrolytes and why do I need them?', answer: 'Electrolytes are minerals that carry an electric charge and regulate fluid balance, muscle contractions, and nerve signaling.' },
  { question: 'Do I need electrolyte supplements?', answer: 'For most people, a balanced diet provides adequate electrolytes. Athletes and those on low-carb diets may benefit from supplementation.' },
  { question: 'Can you consume too many electrolytes?', answer: 'Yes, excessive intake can be harmful. Follow recommended dosages and consult a healthcare provider if needed.' },
  { question: 'What are signs of electrolyte imbalance?', answer: 'Common signs include muscle cramps, fatigue, headaches, and irregular heartbeat.' },
]

export default function ElectrolytesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-cyan-500 to-cyan-600 py-20 md:py-28">
        <div className="container-custom">
          <Link href="/articles" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"><ArrowLeft className="w-4 h-4" />Back to Articles</Link>
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-6">Hydration & Performance</span>
            <h1 className="text-white mb-6">Electrolytes 101: The Science of Hydration</h1>
            <p className="text-lg md:text-xl text-white/80">Understanding how essential minerals power your body.</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-offwhite border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchHighlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-1">{item.stat}</div>
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
                <h2 className="mb-6">What Are Electrolytes?</h2>
                <p className="text-gray-text mb-6">Electrolytes are electrically charged minerals essential for maintaining homeostasis. They regulate hydration, muscle function, and nerve signaling.</p>
                <p className="text-gray-text mb-8">When you sweat, you lose both water and electrolytes. Rehydration requires restoring this delicate balance.</p>

                <h2 className="mb-6">Key Electrolytes and Their Functions</h2>
                <div className="space-y-4 mb-8">
                  {electrolytes.map((e) => (
                    <div key={e.name} className="flex items-start gap-4 p-4 bg-offwhite rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0"><span className="text-cyan-600 font-bold text-sm">{e.name[0]}</span></div>
                      <div><h4 className="font-semibold">{e.name}</h4><p className="text-gray-text text-sm">{e.role}</p><p className="text-gray-400 text-xs mt-1">Sources: {e.sources}</p></div>
                    </div>
                  ))}
                </div>

                <h2 className="mb-6">Benefits of Proper Electrolyte Balance</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3 text-cyan-600" /></div>
                      <span className="text-gray-text text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-cyan-50 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Beaker className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-2">Research Insight</h4>
                      <p className="text-gray-text text-sm">Athletes who consumed electrolyte-enhanced beverages maintained better performance and experienced less cramping.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h4 className="font-semibold mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-blue-600" />Quick Facts</h4>
                <ul className="space-y-3 text-sm">
                  {[{ label: 'Daily sodium', value: '1,500-2,300mg' }, { label: 'Daily potassium', value: '2,600-3,400mg' }, { label: 'Daily magnesium', value: '310-420mg' }, { label: 'Water intake', value: '2-3 liters' }].map((fact) => (
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
