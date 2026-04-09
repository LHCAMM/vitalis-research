export const metadata = {
  title: 'Terms of Service',
  description: 'Vitalis Research Co. Terms of Service - Please read these terms carefully before using our website.',
}

export default function TermsPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Legal</span>
            <h1 className="text-white mt-4 mb-6">Terms of Service</h1>
            <p className="text-white/70">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-text">
                Please read these Terms of Service carefully before using the Vitalis Research Co. website.
              </p>

              <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">1. Use of the Service</h2>
              <p className="text-gray-text">
                Vitalis Research Co. provides an informational and educational resource about wellness topics. The content on this website is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>

              <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">2. Intellectual Property</h2>
              <p className="text-gray-text">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Vitalis Research Co. The Service is protected by copyright, trademark, and other laws.
              </p>

              <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">3. Disclaimer of Warranties</h2>
              <p className="text-gray-text">
                The information provided on this website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy or completeness of any information.
              </p>

              <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">4. Medical Disclaimer</h2>
              <p className="text-gray-text">
                The content on Vitalis Research Co. is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
              </p>

              <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-text">
                In no event shall Vitalis Research Co. be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>

              <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">6. Contact Us</h2>
              <p className="text-gray-text">If you have any questions about these Terms, please contact us:</p>
              <div className="mt-4 text-gray-text">
                <p>Vitalis Research Co.</p>
                <p>Email: hello@vitalisresearchco.com</p>
                <p>Phone: 419-098-7764</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}