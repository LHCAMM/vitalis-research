import Link from 'next/link'
import { ArrowRight, Beaker, Shield, BookOpen, Microscope, Zap, Droplets, Heart, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center pt-12 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-offwhite to-offwhite" />
        <div className="container-custom relative z-10 py-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8">
              <Beaker className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Science-Backed Wellness Research</span>
            </div>
            <h1 className="text-navy mb-6">
              Science-Backed Insights for Better <span className="text-blue-600">Performance</span>, <span className="text-blue-600">Recovery</span>, and <span className="text-blue-600">Wellness</span>
            </h1>
            <p className="text-xl text-gray-text mb-10 max-w-2xl">
              Vitalis Research Co. translates complex scientific research into clear, actionable information about creatine, collagen peptides, electrolytes, and foundational wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/articles" className="btn-primary">
                Explore Research <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="btn-secondary">Learn More About Us</Link>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-text mb-4">Trusted by wellness enthusiasts and professionals</p>
              <div className="flex flex-wrap gap-8 items-center opacity-60">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-navy" />
                  <span className="text-sm font-medium text-navy">Evidence-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-navy" />
                  <span className="text-sm font-medium text-navy">Peer-Reviewed Sources</span>
                </div>
                <div className="flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-navy" />
                  <span className="text-sm font-medium text-navy">Research-First Approach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Our Focus Areas</span>
            <h2 className="mt-4 mb-6">Topics We Research Deeply</h2>
            <p className="text-gray-text text-lg">
              We focus on foundational wellness compounds that have been extensively studied and shown promising results in peer-reviewed research.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/topics/creatine" className="group">
              <div className="card-hover bg-offwhite rounded-2xl overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">Performance</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">Creatine</h3>
                  <p className="text-gray-text text-sm mb-4">
                    One of the most researched supplements for supporting strength, power output, and cognitive function.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-blue-600 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/topics/collagen" className="group">
              <div className="card-hover bg-offwhite rounded-2xl overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-purple-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">Recovery</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">Collagen Peptides</h3>
                  <p className="text-gray-text text-sm mb-4">
                    Structural protein research exploring connective tissue support, skin health, and joint function.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-purple-600 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/topics/electrolytes" className="group">
              <div className="card-hover bg-offwhite rounded-2xl overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center">
                  <Droplets className="w-16 h-16 text-cyan-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm font-medium text-cyan-600">Hydration</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-600 transition-colors">Electrolytes</h3>
                  <p className="text-gray-text text-sm mb-4">
                    Essential minerals that play critical roles in hydration, muscle function, and overall cellular health.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-cyan-600 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Our Approach</span>
              <h2 className="text-white mt-4 mb-6">Research-First. Always.</h2>
              <p className="text-white/70 text-lg mb-8">
                We don&apos;t sell products. We don&apos;t make exaggerated claims. We simply read the research, consult with experts, and present the findings in a way that&apos;s easy to understand.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Peer-Reviewed Sources</h4>
                    <p className="text-white/60 text-sm">Every article is built on studies published in reputable scientific journals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">No Hype, Just Facts</h4>
                    <p className="text-white/60 text-sm">We present what the research actually shows—not marketing spin.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Expert-Reviewed</h4>
                    <p className="text-white/60 text-sm">Our content is reviewed by professionals in nutrition and exercise science.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <p className="text-white/70 text-sm">Research Papers Reviewed</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <p className="text-white/70 text-sm">Articles Published</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <p className="text-white/70 text-sm">Free Information</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">0</div>
                <p className="text-white/70 text-sm">Products Sold</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Latest Insights</span>
              <h2 className="mt-4">Research Spotlight</h2>
            </div>
            <Link href="/articles" className="inline-flex items-center gap-2 text-navy font-medium hover:text-blue-600 transition-colors">
              View All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">Performance</span>
                <span className="text-gray-400 text-xs">8 min read</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 hover:text-blue-600 transition-colors">
                <Link href="/articles">What Creatine Actually Does</Link>
              </h3>
              <p className="text-gray-text text-sm mb-4">
                A comprehensive look at the mechanisms behind creatine supplementation and what the research really shows.
              </p>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-400">Published March 2024</span>
              </div>
            </article>
            <article className="bg-white rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">Recovery</span>
                <span className="text-gray-400 text-xs">6 min read</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 hover:text-blue-600 transition-colors">
                <Link href="/articles">Collagen Peptides and Connective Tissue Support</Link>
              </h3>
              <p className="text-gray-text text-sm mb-4">
                Exploring the research on collagen supplementation for joint health, skin elasticity, and tissue repair.
              </p>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-400">Published February 2024</span>
              </div>
            </article>
            <article className="bg-white rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-medium rounded-full">Hydration</span>
                <span className="text-gray-400 text-xs">5 min read</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 hover:text-blue-600 transition-colors">
                <Link href="/articles">Why Electrolytes Matter More Than Most People Think</Link>
              </h3>
              <p className="text-gray-text text-sm mb-4">
                Beyond sports drinks: understanding the critical role electrolytes play in everyday health and performance.
              </p>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-400">Published January 2024</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Have Questions? Let&apos;s Talk.</h2>
            <p className="text-white/70 text-lg mb-8">
              Whether you&apos;re curious about our research process, have a topic suggestion, or just want to say hello, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy rounded-lg font-medium hover:bg-white/90 transition-colors">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="mailto:hello@vitalisresearchco.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5" /> hello@vitalisresearchco.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Mail } from 'lucide-react'