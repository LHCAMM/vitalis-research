import Link from 'next/link'
import { ArrowRight, Beaker, BookOpen, HelpCircle, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Collagen Peptides Research & Information',
  description: 'Comprehensive research-based information about collagen peptides, their role in connective tissue, and what the science shows.',
}

const faqs = [
  {
    question: 'What are collagen peptides?',
    answer: 'Collagen peptides are short chains of amino acids derived from collagen protein. They are created through a process called hydrolysis, which breaks down the larger collagen molecules into smaller, more easily absorbed peptides.',
  },
  {
    question: 'How do collagen peptides differ from regular collagen?',
    answer: 'Regular collagen is a large protein molecule that the body must break down before absorption. Collagen peptides are pre-digested through hydrolysis, resulting in smaller chains that may be more readily absorbed.',
  },
  {
    question: 'What types of collagen are most common in supplements?',
    answer: 'The most common types in supplements are Type I (found in skin, tendons, and bones), Type II (found in cartilage), and Type III (found in skin and blood vessels).',
  },
  {
    question: 'Who might be interested in collagen peptide research?',
    answer: 'Individuals interested in skin health, joint function, exercise recovery, and connective tissue support often explore collagen peptide research.',
  },
  {
    question: 'What does the research say about absorption?',
    answer: 'Studies suggest that hydrolyzed collagen peptides can be absorbed into the bloodstream and may reach target tissues.',
  },
]

export default function CollagenPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-50 to-offwhite" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/articles" className="text-gray-text hover:text-blue-600 transition-colors text-sm">Articles</Link>
              <span className="text-gray-300">/</span>
              <span className="text-blue-600 text-sm font-medium">Topics</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Beaker className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">Recovery Research</span>
            </div>
            <h1 className="mb-6">Collagen Peptides</h1>
            <p className="text-xl text-gray-text max-w-2xl">
              The most abundant protein in the body, playing a crucial structural role in connective tissues, skin, and joint health.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">Overview</span>
              <h2 className="mt-4 mb-6">What Are Collagen Peptides?</h2>
              <div className="space-y-4 text-gray-text">
                <p>
                  Collagen is the most abundant protein in the human body, making up approximately 30% of the body&apos;s total protein content. It serves as the primary structural component of connective tissues.
                </p>
                <p>
                  Collagen peptides, also known as hydrolyzed collagen, are created by breaking down full-length collagen molecules into smaller peptide chains through enzymatic hydrolysis.
                </p>
              </div>
              <div className="mt-8 p-6 bg-purple-50 rounded-xl">
                <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  Key Research Areas
                </h4>
                <ul className="space-y-2 text-sm text-gray-text">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />Skin elasticity and hydration</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />Joint health and function</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />Connective tissue support</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />Exercise recovery</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-offwhite rounded-2xl p-6 sticky top-24">
                <h4 className="font-semibold text-navy mb-4">Quick Facts</h4>
                <div className="space-y-4">
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Type</span><p className="font-medium text-navy">Structural protein</p></div>
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Natural Sources</span><p className="font-medium text-navy">Bone broth, meat, fish</p></div>
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Body Content</span><p className="font-medium text-navy">~30% of total protein</p></div>
                  <div><span className="text-xs text-gray-text uppercase tracking-wider">Common Types</span><p className="font-medium text-navy">I, II, and III</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">Mechanism</span>
            <h2 className="mt-4 mb-6">How Collagen Peptides Work</h2>
            <div className="space-y-6 text-gray-text">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Absorption</h4>
                    <p className="text-sm">Collagen peptides are absorbed through the intestinal barrier and enter the bloodstream.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Distribution</h4>
                    <p className="text-sm">These peptides circulate through the body and may reach target tissues.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Stimulation</h4>
                    <p className="text-sm">Research suggests collagen peptides may stimulate fibroblasts—cells responsible for producing collagen.</p>
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
            <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">Research</span>
            <h2 className="mt-4 mb-6">What the Research Shows</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Skin Health Studies</h3>
                <p className="text-gray-text mb-4">
                  Several studies have investigated the effects of collagen peptide supplementation on skin parameters. Research has explored outcomes such as skin elasticity, hydration, and wrinkle depth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Joint Health Research</h3>
                <p className="text-gray-text mb-4">
                  Collagen peptides have been studied for their potential role in supporting joint health, particularly in individuals with joint discomfort and athletes.
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
              <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">FAQ</span>
              <h2 className="mt-4 mb-6">Common Questions About Collagen Peptides</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-navy mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
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
                    <p>Consult with a qualified healthcare provider before starting any new supplement regimen.</p>
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
            <p className="text-white/70 text-lg mb-8">Explore our full collection of articles on collagen peptides and other wellness topics.</p>
            <Link href="/articles" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy rounded-lg font-medium hover:bg-white/90 transition-colors">
              Browse All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}