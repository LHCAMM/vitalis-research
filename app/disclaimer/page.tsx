import { AlertTriangle, Stethoscope, Info, FileText } from 'lucide-react'

export const metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimers regarding the information provided on Vitalis Research Co.',
}

export default function DisclaimerPage() {
  return (
    <>
      <section className="pt-24 pb-16 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Legal</span>
            <h1 className="text-white mt-4 mb-6">Disclaimer</h1>
            <p className="text-white/70 text-xl">Please read this disclaimer carefully before using our website.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-red-800 mb-3">Medical Disclaimer</h2>
                  <div className="text-red-700 space-y-3">
                    <p>
                      The information provided on this website is for <strong>informational and educational purposes only</strong>. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                    <p>
                      <strong>Always seek the advice of your physician or other qualified health provider</strong> with any questions you may have regarding a medical condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-navy mb-3">No Medical Advice</h2>
                  <p className="text-gray-text">
                    The content on Vitalis Research Co. is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-navy mb-3">Not FDA Evaluated</h2>
                  <p className="text-gray-text">
                    The information on this website has not been evaluated by the Food and Drug Administration. The content on this site is not intended to diagnose, treat, cure, or prevent any disease.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-navy mb-3">Accuracy of Information</h2>
                  <p className="text-gray-text">
                    While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the information on this website.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-offwhite rounded-2xl">
              <h2 className="text-xl font-semibold text-navy mb-4">Supplement Information</h2>
              <div className="space-y-4 text-gray-text">
                <p>Information about dietary supplements is provided for educational purposes. This information should not be interpreted as:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A recommendation to use any specific supplement</li>
                  <li>A claim that any supplement can diagnose, treat, cure, or prevent any disease</li>
                  <li>A substitute for consultation with a qualified healthcare provider</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 bg-navy rounded-2xl text-white">
              <h2 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-white/70">
                <p>
                  In no event will Vitalis Research Co. be liable for any loss or damage arising out of, or in connection with, the use of this website.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-text mb-4">If you have any questions about this disclaimer, please contact us:</p>
              <div className="text-navy">
                <p className="font-medium">Vitalis Research Co.</p>
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