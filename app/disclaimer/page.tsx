import Link from 'next/link'

export default function Disclaimer() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Disclaimer</h1>
            <p className="text-lg md:text-xl text-white/70">Important information about the content and limitations of our website.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <p className="text-gray-text">Last updated: December 2024</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Medical Disclaimer</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
              <p className="text-amber-800 font-medium mb-2">Important Notice</p>
              <p className="text-amber-700 text-sm">The information provided on this website is for educational and informational purposes only. It is not intended to be a substitute for professional medical advice.</p>
            </div>
            <p className="text-gray-text">Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">No Doctor-Patient Relationship</h2>
            <p className="text-gray-text">The use of this website does not create a doctor-patient relationship between you and Vitalis Research Co.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Supplement Disclaimer</h2>
            <p className="text-gray-text">Statements about dietary supplements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure, or prevent any disease.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">No Product Endorsements</h2>
            <p className="text-gray-text">Vitalis Research Co. does not sell supplements or receive compensation from supplement manufacturers.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-text">If you have any questions about this disclaimer, please contact us at <a href="mailto:hello@vitalisresearchco.com" className="text-blue-600 hover:underline">hello@vitalisresearchco.com</a></p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Have Questions?</h2>
            <p className="text-gray-text mb-8">If you have any concerns or questions about our content, please don&apos;t hesitate to reach out.</p>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
