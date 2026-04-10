import Link from 'next/link'
import { ArrowRight, Beaker, Shield, BookOpen, Zap, Heart, Droplets, Activity } from 'lucide-react'

const topics = [
  { name: 'Creatine', description: 'Boost strength, power, and cognitive function with the most researched sports supplement.', icon: Zap, href: '/topics/creatine', color: 'bg-amber-100 text-amber-700' },
  { name: 'Collagen Peptides', description: 'Support skin elasticity, joint health, and recovery with bioavailable collagen.', icon: Heart, href: '/topics/collagen', color: 'bg-rose-100 text-rose-700' },
  { name: 'Electrolytes', description: 'Optimize hydration, muscle function, and endurance with essential minerals.', icon: Droplets, href: '/topics/electrolytes', color: 'bg-cyan-100 text-cyan-700' },
]

const features = [
  { icon: Beaker, title: 'Research-Backed', description: 'Every claim is supported by peer-reviewed studies and scientific literature.' },
  { icon: Shield, title: 'Unbiased Information', description: 'We educate, not sell. No product recommendations, just pure science.' },
  { icon: BookOpen, title: 'Easy to Understand', description: 'Complex research translated into clear, actionable insights for everyone.' },
]

const latestArticles = [
  { title: 'The Complete Guide to Creatine Monohydrate', excerpt: 'Discover why creatine is the most studied sports supplement and how it can benefit your performance.', href: '/topics/creatine', date: 'Dec 2024', readTime: '8 min read' },
  { title: 'Collagen Peptides: Science vs. Hype', excerpt: 'Separating fact from fiction about collagen supplementation for skin and joints.', href: '/topics/collagen', date: 'Nov 2024', readTime: '6 min read' },
  { title: 'Electrolytes 101: Hydration Science', excerpt: 'Understanding the role of sodium, potassium, and magnesium in optimal hydration.', href: '/topics/electrolytes', date: 'Oct 2024', readTime: '7 min read' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              <span>Science-Backed Wellness Research</span>
            </div>
            <h1 className="text-white mb-6">
              Unlock Your Potential with{' '}
              <span className="text-blue-400">Evidence-Based</span> Wellness
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl">
              Vitalis Research Co. delivers premium educational content on supplements, 
              nutrition, and performance—grounded in science, free from bias.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/articles" className="btn-primary">
                Explore Research <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white">
                About Our Mission
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-offwhite to-transparent" />
      </section>

      {/* Topics Section */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Explore Our Research Topics</h2>
            <p className="text-gray-text">
              Dive deep into the science behind supplements that matter. 
              Each topic is thoroughly researched and regularly updated.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <Link key={topic.name} href={topic.href} className="group bg-white rounded-2xl p-8 card-hover border border-gray-200">
                <div className={`w-14 h-14 rounded-xl ${topic.color} flex items-center justify-center mb-6`}>
                  <topic.icon className="w-7 h-7" />
                </div>
                <h3 className="mb-3 group-hover:text-blue-600 transition-colors">{topic.name}</h3>
                <p className="text-gray-text text-sm mb-4">{topic.description}</p>
                <span className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Why Trust Vitalis Research?</h2>
              <p className="text-gray-text mb-8">
                In a world filled with marketing hype and pseudoscience, we stand firm 
                on one principle: let the research speak for itself. Our team sifts 
                through peer-reviewed studies so you don&apos;t have to.
              </p>
              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-text text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">500+</div>
                <p className="text-white/70 text-lg mb-8">Peer-reviewed studies analyzed</p>
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">3</div>
                <p className="text-white/70 text-lg mb-8">Core research topics covered</p>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">100%</div>
                <p className="text-white/70 text-lg">Free educational content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="mb-4">Latest Research</h2>
              <p className="text-gray-text max-w-xl">
                Stay up to date with our latest findings and in-depth analyses 
                on wellness and performance topics.
              </p>
            </div>
            <Link href="/articles" className="btn-secondary mt-4 md:mt-0">
              View All Articles
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link key={article.title} href={article.href} className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-gray-text text-sm line-clamp-3">{article.excerpt}</p>
                </div>
                <div className="px-6 pb-6">
                  <span className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm">
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-white mb-4">Have Questions?</h2>
              <p className="text-white/80 text-lg mb-8">
                We&apos;re here to help you navigate the world of wellness research. 
                Reach out to our team for any inquiries.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Contact Us
                </Link>
                <Link href="/faq" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors">
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
