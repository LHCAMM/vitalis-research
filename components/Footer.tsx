import Link from 'next/link'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  company: [{ name: 'About Us', href: '/about' }, { name: 'Contact', href: '/contact' }],
  resources: [{ name: 'Articles', href: '/articles' }, { name: 'Creatine', href: '/topics/creatine' }, { name: 'Collagen', href: '/topics/collagen' }, { name: 'Electrolytes', href: '/topics/electrolytes' }],
  legal: [{ name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' }, { name: 'Disclaimer', href: '/disclaimer' }],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <span className="font-semibold text-white text-xl block">Vitalis Research</span>
                <span className="text-white/60 text-sm">Co.</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">Science-backed insights for better performance, recovery, and wellness. Educating, not selling.</p>
            <div className="space-y-3">
              <a href="tel:419-098-7764" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"><Phone className="w-5 h-5" /><span>419-098-7764</span></a>
              <a href="mailto:hello@vitalisresearchco.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"><Mail className="w-5 h-5" /><span>hello@vitalisresearchco.com</span></a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (<li key={link.name}><Link href={link.href} className="text-white/70 hover:text-white text-sm">{link.name}</Link></li>))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (<li key={link.name}><Link href={link.href} className="text-white/70 hover:text-white text-sm">{link.name}</Link></li>))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (<li key={link.name}><Link href={link.href} className="text-white/70 hover:text-white text-sm">{link.name}</Link></li>))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">New research delivered to your inbox.</p>
            <form className="space-y-2">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 text-sm" />
              <button type="submit" className="w-full px-4 py-2.5 bg-white text-navy rounded-lg text-sm font-medium hover:bg-white/90 flex items-center justify-center gap-2">Subscribe <ArrowUpRight className="w-4 h-4" /></button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} Vitalis Research Co. All rights reserved.</p>
          <p className="text-white/50 text-sm">For informational purposes only. Not medical advice.</p>
        </div>
      </div>
    </footer>
  )
}
