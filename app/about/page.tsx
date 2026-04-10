import { Beaker, Target, Users, BookOpen, Award, Shield } from 'lucide-react'

const values = [
  { icon: Beaker, title: 'Scientific Integrity', description: 'We only publish information backed by peer-reviewed research. No anecdotes, no marketing claims—just science.' },
  { icon: Target, title: 'Unbiased Education', description: 'We don&apos;t sell products or take sponsorships. Our only goal is to educate and inform.' },
  { icon: Users, title: 'Accessible Knowledge', description: 'We translate complex research into clear, actionable insights that anyone can understand.' },
]

const team = [
  { name: 'Dr. Sarah Mitchell', role: 'Chief Research Officer', bio: 'Ph.D. in Nutritional Biochemistry with 15+ years in supplement research.' },
  { name: 'James Chen', role: 'Senior Science Writer', bio: 'M.S. in Exercise Physiology, former research scientist at Stanford.' },
  { name: 'Dr. Michael Torres', role: 'Medical Advisor', bio: 'M.D., Board-certified physician specializing in sports medicine.' },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">About Vitalis Research Co.</h1>
            <p className="text-lg md:text-xl text-white/70">
              We&apos;re on a mission to cut through the noise in the wellness industry 
              and deliver research-backed information you can trust.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-gray-text mb-6">
                The wellness industry is flooded with conflicting information, exaggerated claims, 
                and pseudoscience. At Vitalis Research Co., we believe that everyone deserves 
                access to accurate, unbiased information about supplements and nutrition.
              </p>
              <p className="text-gray-text mb-6">
                Our team of researchers and medical professionals sifts through the latest 
                peer-reviewed studies to bring you insights that are both scientifically 
                rigorous and easy to understand.
              </p>
              <p className="text-gray-text">
                We don&apos;t sell products. We don&apos;t take sponsorships. We simply educate.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center card-hover border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-text text-sm">Studies Analyzed</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center card-hover border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-text text-sm">Articles Published</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center card-hover border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
                <p className="text-gray-text text-sm">Core Topics</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center card-hover border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-text text-sm">Independent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-gray-text">
              These principles guide everything we do, from research to publication.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-offwhite rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-gray-text text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-gray-text">
              Our researchers and advisors bring decades of combined experience 
              in nutrition, medicine, and scientific research.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 text-center card-hover border border-gray-200">
                <div className="w-24 h-24 rounded-full bg-navy mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-gray-text text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Our Research Process</h2>
              <div className="space-y-6">
                {['Literature Review', 'Quality Assessment', 'Synthesis', 'Expert Review'].map((step, i) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{step}</h4>
                      <p className="text-gray-text text-sm">We ensure rigorous standards at every step.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-10 h-10 text-blue-400" />
                <h3 className="text-white">Our Commitment</h3>
              </div>
              <p className="text-white/70 mb-6">
                Every article we publish undergoes rigorous fact-checking and review. 
                We cite our sources transparently and update our content as new research emerges.
              </p>
              <div className="flex items-center gap-4">
                <Shield className="w-10 h-10 text-blue-400" />
                <BookOpen className="w-10 h-10 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
