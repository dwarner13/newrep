import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CalculatorCTA from '../components/CalculatorCTA';

const faqs = [
  {
    question: "How quickly can you respond to service calls?",
    answer: "We offer same-day service in most cases, with emergency repairs available 24/7 throughout Edmonton and surrounding areas."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we provide free estimates before starting any repair work. You can also use our online cost calculator to get an instant estimate."
  },
  {
    question: "What brands do you service?",
    answer: "We repair all major appliance brands including Samsung, LG, Whirlpool, GE, Maytag, Kenmore, Frigidaire, and more."
  },
  {
    question: "Are your technicians licensed?",
    answer: "Yes, all our technicians are fully licensed, insured, and factory-trained to provide expert appliance repair services."
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer: "Yes, we provide a 90-day warranty on all parts and labor for complete peace of mind."
  },
  {
    question: "What areas do you serve?",
    answer: "We service Edmonton and surrounding areas including St. Albert, Sherwood Park, Spruce Grove, and more."
  }
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | Edmonton Appliance Repair"
        description="Common questions about our appliance repair services in Edmonton. Learn about our service coverage, pricing, and repair process."
        keywords="appliance repair FAQ Edmonton, appliance repair questions, Edmonton repair service FAQ"
        canonical="/faq"
      />
      <main className="bg-white">
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Find answers to common questions about our <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">appliance repair services</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={index} className="py-8">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-4 text-gray-600">
                  {faq.answer}
                </p>
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