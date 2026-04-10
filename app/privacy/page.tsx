export default function Privacy() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Privacy Policy</h1>
            <p className="text-lg md:text-xl text-white/70">Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <p className="text-gray-text">Last updated: December 2024</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-text">Vitalis Research Co. is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-text">We may collect personal information (name, email), usage data (IP address, browser type), and use cookies to enhance your experience.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-text">We use your information to provide and maintain our website, respond to inquiries, send newsletters, and analyze website performance.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Information Sharing</h2>
            <p className="text-gray-text">We do not sell your personal information. We may share information with service providers or when required by law.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Contact Us</h2>
            <p className="text-gray-text">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@vitalisresearchco.com" className="text-blue-600 hover:underline">hello@vitalisresearchco.com</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}
