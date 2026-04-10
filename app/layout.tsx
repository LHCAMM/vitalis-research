import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Vitalis Research Co. | Science-Backed Wellness Insights',
  description: 'Premium educational wellness brand focused on science-backed information for better performance, recovery, and wellness.',
  keywords: ['wellness', 'health research', 'creatine', 'collagen peptides', 'electrolytes'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://app.trafficshield.io/v2/js_code/b290177b3e.js" strategy="beforeInteractive" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
