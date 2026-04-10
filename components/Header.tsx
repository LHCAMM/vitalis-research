'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Articles', href: '/articles' },
  { name: 'Topics', href: '#', dropdown: [
    { name: 'Creatine', href: '/topics/creatine' },
    { name: 'Collagen Peptides', href: '/topics/collagen' },
    { name: 'Electrolytes', href: '/topics/electrolytes' },
  ]},
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-semibold text-navy text-lg tracking-tight hidden sm:block">Vitalis Research</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative" onMouseEnter={() => link.dropdown && setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <Link href={link.href} className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive(link.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-text hover:text-navy hover:bg-gray-100'}`}>
                  {link.name}
                  {link.dropdown && <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />}
                </Link>
                {link.dropdown && showDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                    {link.dropdown.map((item) => (
                      <Link key={item.name} href={item.href} className="block px-4 py-2.5 text-sm text-gray-text hover:text-navy hover:bg-gray-50">{item.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link href="/articles" className="btn-primary text-sm hidden lg:inline-flex">Explore Research</Link>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
            {isOpen ? <X className="w-6 h-6 text-navy" /> : <Menu className="w-6 h-6 text-navy" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link href={link.href} onClick={() => !link.dropdown && setIsOpen(false)} className={`block px-4 py-3 text-base font-medium rounded-lg ${isActive(link.href) ? 'text-blue-600 bg-blue-50' : 'text-gray-text hover:text-navy hover:bg-gray-50'}`}>{link.name}</Link>
                {link.dropdown && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.dropdown.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-text hover:text-navy hover:bg-gray-50 rounded-lg">{item.name}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
