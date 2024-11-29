import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import CostCalculator from '../components/CostCalculator';

// ... rest of the imports

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Edmonton Appliance Repair | Book Service"
        description="Book your appliance repair service in Edmonton. Same-day appointments available. Licensed technicians for all major appliance brands. Emergency repairs available."
        keywords="book appliance repair Edmonton, schedule appliance repair Edmonton, appliance repair quote Edmonton, emergency appliance repair Edmonton"
        canonical="/contact"
      />
      <main className="bg-white">
        {/* Header Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Schedule your <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">appliance repair</Link> service or request a quote. Our <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">expert technicians</Link> are ready to help.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Cost Calculator Section */}
          <div id="calculator" className="mx-auto max-w-2xl mb-24 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Calculate Repair Cost
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Get an instant estimate for your appliance repair
              </p>
            </div>
            <CostCalculator />
          </div>

          {/* Contact Form Section */}
          <div className="mx-auto max-w-2xl mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Schedule Your Service
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below for a service request or quote
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-xl">
              <ContactForm />
            </div>
          </div>

          {/* Rest of the contact page content... */}
        </div>
      </main>
    </>
  );
}