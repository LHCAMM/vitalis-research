import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Vitalis Research Co. We\'d love to hear from you. Reach out with questions, topic suggestions, or feedback.',
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Contact</span>
            <h1 className="text-white mt-4 mb-6">Get in Touch</h1>
            <p className="text-white/70 text-xl">
              Have questions, suggestions, or feedback? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <p className="text-gray-text mb-8">
                    Reach out to us through any of the channels below. We typically respond within 48 hours.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Phone</h4>
                      <a href="tel:419-098-7764" className="text-gray-text hover:text-blue-600 transition-colors">419-098-7764</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Email</h4>
                      <a href="mailto:hello@vitalisresearchco.com" className="text-gray-text hover:text-blue-600 transition-colors">hello@vitalisresearchco.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Response Time</h4>
                      <p className="text-gray-text">Within 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Location</h4>
                      <p className="text-gray-text">United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-offwhite rounded-2xl p-8 lg:p-12">
                <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>
                <p className="text-gray-text mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" name="firstName" placeholder="John" className="bg-white" />
                    </div>
                    <div>
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" name="lastName" placeholder="Doe" className="bg-white" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" className="bg-white" />
                  </div>
                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="How can we help?" className="bg-white" />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} placeholder="Tell us more about your question..." className="bg-white resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full md:w-auto">
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Our Office</h2>
            <p className="text-gray-text mb-8">
              While we primarily operate remotely to keep our overhead low and focus on producing quality content, our team is based in the United States.
            </p>
            <div className="bg-white rounded-2xl p-8 inline-block">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-navy mb-2">Vitalis Research Co.</h4>
              <p className="text-gray-text text-sm">United States</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}