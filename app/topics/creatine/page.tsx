import Link from 'next/link'
import { ArrowRight, Beaker, BookOpen, HelpCircle, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Creatine Research & Information',
  description: 'Comprehensive research-based information about creatine supplementation, its mechanisms, and what the science shows.',
}

const faqs = [
  {
    question: 'What is creatine exactly?',
    answer: 'Creatine is a compound that occurs naturally in the body and is found in certain foods like meat and fish. It plays a key role in energy production, particularly during short bursts of high-intensity activity.',
  },
  {
    question: 'How does creatine work in the body?',
    answer: 'Creatine helps regenerate ATP (adenosine triphosphate), which is the primary energy currency of cells. By increasing phosphocreatine stores in muscles, it supports rapid energy production during intense exercise.',
  },
  {
    question: 'Who might be interested in creatine research?',
    answer: 'Athletes, fitness enthusiasts, researchers studying exercise performance, and individuals interested in cognitive function research often explore creatine supplementation.',
  },
  {
    question: 'Is creatine only for athletes?',
    answer: 'While much research focuses on athletic performance, studies have also explored creatine\'s potential effects on cognitive function, particularly in older adults and during periods of sleep deprivation.',
  },
  {
    question: 'What does the research say about safety?',
    answer: 'Decades of research have consistently shown creatine monohydrate to be well-tolerated in healthy individuals when used as directed. However, as with any supplement, individual responses may vary.',
  },
]

export default function CreatinePage() {
  return (
    <>
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-offwhite" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/articles" className="text-gray-text hover:text-blue-600 transition-colors text-sm">Articles</Link>
              <span className="text-gray-300">/</span>
              <span className="text-blue-600 text-sm font-medium">Topics</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Beaker className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Performance Research</span>
            </div>
            <h1 className="mb-6">Creatine</h1>
            <p className="text-xl text-gray-text max-w-2xl">
              One of the most extensively researched supplements in sports nutrition, with studies spanning performance, recovery, and cognitive function.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Overview</span>
              <h2 className="mt-4 mb-6">What is Creatine?</h2>
              <div className="space-y-4 text-gray-text">
                <p>
                  Creatine is a naturally occurring compound found primarily in muscle cells. It&apos;s synthesized in the body from amino acids (arginine, glycine, and methionine) and is also obtained through dietary sources like meat and fish.
                </p>
                <p>
                  In the body, creatine is stored as phosphocreatine (or creatine phosphate), which serves as a rapid energy reserve. This storage system is particularly important for activities requiring short bursts of high-intensity effort.
                </p>
                <p>
                  Creatine monohydrate, the most common supplemental form, has been the subject of hundreds of peer-reviewed studies over the past several decades, making it one of the most well-researched nutritional supplements available.
                </p>
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Key Research Areas
                </h4>
                <ul className="space-y-2 text-sm text-gray-text">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />High-intensity exercise performance</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />Muscle strength and power output</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />Recovery between exercise bouts</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />Cognitive function and brain health</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-offwhite rounded-2xl p-6 sticky top-24">
                <h4 className="font-semibold text-navy mb-4">Quick Facts</h4>
                <div className="space-y-4">
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Type</span><p className="font-medium text-navy">Nitrogenous organic acid</p></div>
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Natural Sources</span><p className="font-medium text-navy">Meat, fish, poultry</p></div>
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Primary Storage</span><p className="font-medium text-navy">Skeletal muscle (95%)</p></div>
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Research Status</span><p className="font-medium text-navy">Extensively studied</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Mechanism</span>
            <h2 className="mt-4 mb-6">How It Works</h2>
            <div className="space-y-6 text-gray-text">
              <p>The primary mechanism of creatine involves the creatine-phosphocreatine energy system:</p>
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">ATP Depletion</h4>
                    <p className="text-sm">During high-intensity exercise, muscles rapidly deplete their ATP stores.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Phosphocreatine Donation</h4>
                    <p className="text-sm">Stored phosphocreatine donates its phosphate group to ADP, rapidly regenerating ATP.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Energy Replenishment</h4>
                    <p className="text-sm">This rapid ATP regeneration helps maintain energy availability during intense activity.</p>
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
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Research</span>
            <h2 className="mt-4 mb-6">What the Research Shows</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Performance Research</h3>
                <p className="text-gray-text mb-4">
                  Numerous studies have examined creatine&apos;s effects on exercise performance. Research has consistently shown that creatine supplementation can increase intramuscular creatine stores, which may support improved performance in high-intensity, short-duration activities.
                </p>
                <p className="text-gray-text">
                  A comprehensive review published in the Journal of the International Society of Sports Nutrition analyzed hundreds of studies and found that creatine supplementation, when combined with resistance training, was associated with greater gains in strength and lean body mass compared to resistance training alone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Cognitive Function Studies</h3>
                <p className="text-gray-text mb-4">
                  Beyond physical performance, researchers have also investigated creatine&apos;s potential effects on cognitive function. The brain requires significant energy, and some studies suggest that creatine supplementation may support cognitive performance, particularly during periods of sleep deprivation or mental fatigue.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Safety Profile</h3>
                <p className="text-gray-text">
                  The safety of creatine monohydrate has been extensively studied. Peer-reviewed research spanning several decades has consistently shown that creatine supplementation is well-tolerated in healthy individuals. However, as with any dietary change, individual responses may vary.
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
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">FAQ</span>
              <h2 className="mt-4 mb-6">Common Questions About Creatine</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-navy mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
                    <p>The information provided is for educational and informational purposes only. It is not intended as medical advice, diagnosis, or treatment recommendations.</p>
                    <p>Individual responses to creatine supplementation may vary. Before starting any new supplement regimen, consult with a qualified healthcare provider.</p>
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
            <p className="text-white/70 text-lg mb-8">Explore our full collection of articles on creatine and other wellness topics.</p>
            <Link href="/articles" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy rounded-lg font-medium hover:bg-white/90 transition-colors">
              Browse All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}