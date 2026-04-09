import Link from 'next/link'
import { Clock, ArrowRight, Zap, Heart, Droplets, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Articles & Research Library',
  description: 'Explore our collection of science-backed articles on creatine, collagen peptides, electrolytes, and foundational wellness.',
}

const categories = [
  { name: 'All', slug: 'all', icon: Sparkles },
  { name: 'Performance', slug: 'performance', icon: Zap },
  { name: 'Recovery', slug: 'recovery', icon: Heart },
  { name: 'Hydration', slug: 'hydration', icon: Droplets },
]

const articles = [
  {
    title: 'What Creatine Actually Does',
    excerpt: 'A comprehensive look at the mechanisms behind creatine supplementation and what decades of research really shows.',
    category: 'performance',
    readTime: '8 min read',
    date: 'March 2024',
    featured: true,
  },
  {
    title: 'Collagen Peptides and Connective Tissue Support',
    excerpt: 'Exploring the research on collagen supplementation for joint health, skin elasticity, and tissue repair mechanisms.',
    category: 'recovery',
    readTime: '6 min read',
    date: 'February 2024',
    featured: false,
  },
  {
    title: 'Why Electrolytes Matter More Than Most People Think',
    excerpt: 'Beyond sports drinks: understanding the critical role electrolytes play in everyday health and performance.',
    category: 'hydration',
    readTime: '5 min read',
    date: 'January 2024',
    featured: false,
  },
  {
    title: 'Hydration, Recovery, and Daily Performance',
    excerpt: 'The often-overlooked connection between proper hydration and optimal recovery after physical activity.',
    category: 'hydration',
    readTime: '7 min read',
    date: 'January 2024',
    featured: false,
  },
  {
    title: 'Understanding Foundational Wellness Support',
    excerpt: 'A holistic look at the basic pillars of wellness and how they interconnect to support overall health.',
    category: 'wellness',
    readTime: '6 min read',
    date: 'December 2023',
    featured: false,
  },
  {
    title: 'The Science of Muscle Recovery',
    excerpt: 'What happens in your body during recovery periods and how nutrition and rest support the process.',
    category: 'recovery',
    readTime: '8 min read',
    date: 'December 2023',
    featured: false,
  },
]

export default function ArticlesPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Research Library</span>
            <h1 className="text-white mt-4 mb-6">Articles & Insights</h1>
            <p className="text-white/70 text-xl">
              Explore our collection of science-backed articles on performance, recovery, hydration, and foundational wellness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button key={category.slug} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-offwhite text-navy text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <Icon className="w-4 h-4" /> {category.name}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Featured</span>
          <article className="mt-6 bg-offwhite rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <Zap className="w-24 h-24 text-blue-600" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full uppercase">{articles[0].category}</span>
                  <span className="text-gray-400 text-sm">{articles[0].readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 hover:text-blue-600 transition-colors">
                  <Link href="#">{articles[0].title}</Link>
                </h2>
                <p className="text-gray-text mb-6">{articles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" /> {articles[0].date}
                  </div>
                  <Link href="#" className="inline-flex items-center gap-2 text-navy font-medium hover:text-blue-600 transition-colors">
                    Read Article <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Latest Articles</h2>
            <span className="text-gray-text text-sm">Showing {articles.length - 1} articles</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden card-hover">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  {article.category === 'recovery' && <Heart className="w-16 h-16 text-purple-400" />}
                  {article.category === 'hydration' && <Droplets className="w-16 h-16 text-cyan-400" />}
                  {article.category === 'wellness' && <Sparkles className="w-16 h-16 text-gray-400" />}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full uppercase">{article.category}</span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 hover:text-blue-600 transition-colors">
                    <Link href="#">{article.title}</Link>
                  </h3>
                  <p className="text-gray-text text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{article.date}</span>
                    <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-blue-600 transition-colors">Read <ArrowRight className="w-4 h-4" /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Articles <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Browse by Topic</span>
            <h2 className="mt-4 mb-6">Explore Our Focus Areas</h2>
            <p className="text-gray-text">Dive deeper into specific topics with our comprehensive research collections.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/topics/creatine" className="group">
              <div className="bg-offwhite rounded-2xl p-8 card-hover">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">Creatine</h3>
                <p className="text-gray-text text-sm mb-4">Performance, cognitive function, and sports nutrition research.</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-blue-600 transition-colors">
                  Explore Topic <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
            <Link href="/topics/collagen" className="group">
              <div className="bg-offwhite rounded-2xl p-8 card-hover">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">Collagen Peptides</h3>
                <p className="text-gray-text text-sm mb-4">Connective tissue support, skin health, and joint function.</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-purple-600 transition-colors">
                  Explore Topic <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
            <Link href="/topics/electrolytes" className="group">
              <div className="bg-offwhite rounded-2xl p-8 card-hover">
                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mb-6">
                  <Droplets className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-600 transition-colors">Electrolytes</h3>
                <p className="text-gray-text text-sm mb-4">Hydration science, mineral balance, and cellular health.</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-cyan-600 transition-colors">
                  Explore Topic <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}