import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Vitalis Research Co. | Science-Backed Wellness Insights',
    template: '%s | Vitalis Research Co.',
  },
  description: 'Premium educational wellness brand focused on science-backed information for better performance, recovery, and wellness. Explore research on creatine, collagen peptides, electrolytes, and more.',
  keywords: ['wellness', 'health research', 'creatine', 'collagen peptides', 'electrolytes', 'hydration', 'recovery', 'science-backed'],
  authors: [{ name: 'Vitalis Research Co.' }],
  creator: 'Vitalis Research Co.',
  publisher: 'Vitalis Research Co.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Vitalis Research Co.',
    title: 'Vitalis Research Co. | Science-Backed Wellness Insights',
    description: 'Premium educational wellness brand focused on science-backed information for better performance, recovery, and wellness.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitalis Research Co. | Science-Backed Wellness Insights',
    description: 'Premium educational wellness brand focused on science-backed information for better performance, recovery, and wellness.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}