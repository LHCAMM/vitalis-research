export const metadata = {
  title: 'Privacy Policy',
  description: 'Vitalis Research Co. Privacy Policy - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Legal</span>
            <h1 className="text-white mt-4 mb-6">Privacy Policy</h1>
            <p className="text-white/70">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-text">
                At Vitalis Research Co., we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">Information We Collect</h2>
              <p className="text-gray-text">We may collect information about you in a variety of ways:</p>

              <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Personal Data</h3>
              <p className="text-gray-text">
                Personally identifiable information, such as your name and email address, that you voluntarily give to us when you choose to participate in various activities related to the Site, such as newsletter subscriptions or contact forms.
              </p>

              <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Derivative Data</h3>
              <p className="text-gray-text">
                Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and pages viewed.
              </p>

              <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">Use of Your Information</h2>
              <p className="text-gray-text">We may use information collected about you to:</p>
              <ul className="list-disc list-inside text-gray-text space-y-2 mt-4">
                <li>Email you regarding your account or inquiries.</li>
                <li>Send you our newsletter, if you have opted in.</li>
                <li>Respond to your comments, questions, and provide customer service.</li>
                <li>Monitor and analyze usage and trends to improve your experience.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">Security of Your Information</h2>
              <p className="text-gray-text">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>

              <h2 className="text-2xl font-semibold text-navy mt-12 mb-4">Contact Us</h2>
              <p className="text-gray-text">If you have questions about this Privacy Policy, please contact us:</p>
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