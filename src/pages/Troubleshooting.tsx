import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CalculatorCTA from '../components/CalculatorCTA';
import { troubleshootingGuides } from '../data/troubleshootingGuides';

export default function Troubleshooting() {
  return (
    <>
      <SEO
        title="Appliance Troubleshooting Guide | Edmonton Appliance Repair"
        description="Expert troubleshooting tips for common appliance problems. Learn when to DIY and when to call a professional for your appliance repairs."
        keywords="appliance troubleshooting, appliance repair tips, DIY appliance repair, when to call repair service, Edmonton appliance help"
        canonical="/troubleshooting"
      />
      <main className="bg-white">
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Appliance Troubleshooting Guide
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Common appliance problems and their solutions. Learn when to DIY and when to call a <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">professional repair service</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {troubleshootingGuides.map((guide) => (
              <div key={guide.id} id={guide.id} className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{guide.title}</h2>
                <p className="text-gray-600 mb-8">{guide.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Fixes to Try</h3>
                    <ul className="space-y-2">
                      {guide.quickFixes.map((fix, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{fix}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Call a Professional</h3>
                    <ul className="space-y-2">
                      {guide.whenToCall.map((reason, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span className="text-gray-600">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    Schedule Professional Repair
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Calculator CTA */}
          <div className="mt-24">
            <CalculatorCTA />
          </div>
        </div>
      </main>
    </>
  );
}