import Link from 'next/link'
import { Beaker, BookOpen, Shield, Users, Target, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'About Us',
  description: 'Learn about Vitalis Research Co. - our mission, values, and commitment to providing science-backed wellness information.',
}

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">About Us</span>
            <h1 className="text-white mt-4 mb-6">We&apos;re Here to Make Wellness Research Accessible</h1>
            <p className="text-white/70 text-xl">
              Vitalis Research Co. is a team of researchers, writers, and wellness enthusiasts committed to translating complex science into clear, actionable information.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Our Story</span>
              <h2 className="mt-4 mb-6">Why We Started</h2>
              <div className="space-y-4 text-gray-text">
                <p>
                  Vitalis Research Co. was born from frustration. The wellness industry is flooded with conflicting information, exaggerated claims, and marketing disguised as science. We saw a need for a trusted source that puts research first.
                </p>
                <p>
                  Our founders—researchers and health professionals—started Vitalis with a simple mission: read the actual studies, consult with experts, and present findings in a way that anyone can understand.
                </p>
                <p>
                  We don&apos;t have products to sell. We don&apos;t have affiliate links to push. We simply believe that when people have access to quality information, they can make better decisions about their health.
                </p>
              </div>
            </div>
            <div className="bg-offwhite rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Beaker className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-navy mb-1">500+</div>
                  <p className="text-gray-text text-sm">Papers Reviewed</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-navy mb-1">50+</div>
                  <p className="text-gray-text text-sm">Articles Published</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-navy mb-1">10+</div>
                  <p className="text-gray-text text-sm">Expert Contributors</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-navy mb-1">100%</div>
                  <p className="text-gray-text text-sm">Independent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Our Mission</span>
            <h2 className="mt-4 mb-6">What We Stand For</h2>
            <p className="text-gray-text text-lg">
              Our mission is simple: empower people with accurate, research-backed information about wellness and performance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scientific Integrity</h3>
              <p className="text-gray-text">
                We base every article on peer-reviewed research. No cherry-picking studies. No exaggerating findings. Just honest analysis of what the science shows.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Clarity First</h3>
              <p className="text-gray-text">
                Scientific papers are complex. We translate that complexity into clear, accessible language without losing accuracy or nuance.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">No Agenda</h3>
              <p className="text-gray-text">
                We don&apos;t sell supplements. We don&apos;t take sponsorships. Our only goal is to provide information you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Our Values</span>
              <h2 className="mt-4 mb-6">How We Work</h2>
              <p className="text-gray-text text-lg mb-8">
                These principles guide everything we publish and every decision we make.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Evidence Over Opinion</h4>
                    <p className="text-gray-text text-sm">We follow where the research leads, even when it contradicts popular beliefs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Transparency Always</h4>
                    <p className="text-gray-text text-sm">We cite our sources, acknowledge limitations, and correct errors when we make them.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Accessibility Matters</h4>
                    <p className="text-gray-text text-sm">Great research is useless if people can&apos;t understand it. We prioritize clarity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Independence is Non-Negotiable</h4>
                    <p className="text-gray-text text-sm">No brand partnerships. No affiliate revenue. No conflicts of interest.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-8 lg:p-12">
              <h3 className="text-white text-2xl font-semibold mb-6">Our Research Process</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">1</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Literature Review</h4>
                    <p className="text-white/60 text-sm">We start by reviewing peer-reviewed studies from reputable journals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">2</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Expert Consultation</h4>
                    <p className="text-white/60 text-sm">We consult with professionals in relevant fields to ensure accuracy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">3</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Synthesis</h4>
                    <p className="text-white/60 text-sm">We synthesize findings into clear, comprehensive articles.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">4</div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Review & Publish</h4>
                    <p className="text-white/60 text-sm">Content is reviewed by experts before publication.</p>
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
            <h2 className="text-white mb-6">Want to Get in Touch?</h2>
            <p className="text-white/70 text-lg mb-8">
              Have questions about our research process, suggestions for topics, or feedback on our content? We&apos;d love to hear from you.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy rounded-lg font-medium hover:bg-white/90 transition-colors">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}