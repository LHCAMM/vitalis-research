import Link from 'next/link'
import { ArrowRight, Clock, Calendar, Zap, Heart, Droplets } from 'lucide-react'

const articles = [
  { title: 'The Complete Guide to Creatine Monohydrate', excerpt: 'Discover why creatine monohydrate is the gold standard for sports performance.', href: '/topics/creatine', date: 'Dec 2024', readTime: '12 min read', category: 'Creatine', icon: Zap, color: 'bg-amber-100 text-amber-700' },
  { title: 'Collagen Peptides: Science vs. Marketing Hype', excerpt: 'Can collagen supplements really improve your skin and joints? We analyze the clinical evidence.', href: '/topics/collagen', date: 'Nov 2024', readTime: '10 min read', category: 'Collagen', icon: Heart, color: 'bg-rose-100 text-rose-700' },
  { title: 'Electrolytes 101: The Science of Hydration', excerpt: 'Understanding how sodium, potassium, and magnesium work together to optimize hydration.', href: '/topics/electrolytes', date: 'Oct 2024', readTime: '8 min read', category: 'Electrolytes', icon: Droplets, color: 'bg-cyan-100 text-cyan-700' },
  { title: 'Creatine Loading Phase: Is It Necessary?', excerpt: 'We examine whether the traditional creatine loading phase is required for optimal results.', href: '/topics/creatine', date: 'Sep 2024', readTime: '6 min read', category: 'Creatine', icon: Zap, color: 'bg-amber-100 text-amber-700' },
  { title: 'Types of Collagen: Which One Matters?', excerpt: 'Type I, II, III—what do these numbers mean, and which type should you look for?', href: '/topics/collagen', date: 'Aug 2024', readTime: '7 min read', category: 'Collagen', icon: Heart, color: 'bg-rose-100 text-rose-700' },
  { title: 'Electrolyte Imbalance: Signs and Solutions', excerpt: 'Learn to recognize the symptoms of electrolyte imbalance and how to restore optimal levels.', href: '/topics/electrolytes', date: 'Jul 2024', readTime: '9 min read', category: 'Electrolytes', icon: Droplets, color: 'bg-cyan-100 text-cyan-700' },
]

export default function Articles() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Research Library</h1>
            <p className="text-lg md:text-xl text-white/70">
              Browse our collection of science-backed articles on supplements, 
              nutrition, and wellness.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-12">
            {['All', 'Creatine', 'Collagen', 'Electrolytes'].map((cat) => (
              <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === 'All' ? 'bg-blue-600 text-white' : 'bg-white text-gray-text hover:bg-gray-100 border border-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.title} href={article.href} className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-200">
                <div className="p-6">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${article.color} mb-4`}>
                    <article.icon className="w-3 h-3" />
                    {article.category}
                  </span>
                  <h3 className="mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-gray-text text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm">
                    Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">Load More Articles</button>
          </div>
        </div>
      </section>
    </div>
  )
}
