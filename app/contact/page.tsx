import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '419-098-7764', href: 'tel:419-098-7764' },
  { icon: Mail, label: 'Email', value: 'hello@vitalisresearchco.com', href: 'mailto:hello@vitalisresearchco.com' },
  { icon: MapPin, label: 'Address', value: '123 Research Drive, Science City, SC 12345', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9AM - 5PM EST', href: '#' },
]

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/70">Have questions about our research or want to learn more? We&apos;d love to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <h2 className="mb-6">Send Us a Message</h2>
              <p className="text-gray-text mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label htmlFor="firstName">First Name</label><input type="text" id="firstName" placeholder="John" required /></div>
                  <div><label htmlFor="lastName">Last Name</label><input type="text" id="lastName" placeholder="Doe" required /></div>
                </div>
                <div><label htmlFor="email">Email Address</label><input type="email" id="email" placeholder="john@example.com" required /></div>
                <div><label htmlFor="subject">Subject</label><input type="text" id="subject" placeholder="How can we help?" required /></div>
                <div><label htmlFor="message">Message</label><textarea id="message" rows={5} placeholder="Tell us more..." required /></div>
                <button type="submit" className="btn-primary w-full justify-center"><Send className="w-5 h-5" />Send Message</button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h2 className="mb-6">Get in Touch</h2>
                <p className="text-gray-text mb-8">Whether you have a question about our research or just want to say hello, we&apos;re here to help.</p>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors"><item.icon className="w-5 h-5 text-blue-600" /></div>
                      <div><p className="text-sm text-gray-400 mb-1">{item.label}</p><p className="font-medium group-hover:text-blue-600 transition-colors">{item.value}</p></div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-navy rounded-2xl p-8 text-white">
                <h3 className="text-white mb-4">Response Time</h3>
                <p className="text-white/70 text-sm mb-4">We aim to respond to all inquiries within 24-48 business hours.</p>
                <p className="text-white/70 text-sm">For urgent matters, please call us at <a href="tel:419-098-7764" className="text-blue-400 hover:text-blue-300">419-098-7764</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
