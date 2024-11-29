import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CalculatorCTA from '../components/CalculatorCTA';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Edmonton Appliance Repair | Licensed & Insured Technicians"
        description="Edmonton's trusted appliance repair experts since 2003. Licensed technicians, guaranteed workmanship, and comprehensive appliance repair services throughout Edmonton and surrounding areas."
        keywords="Edmonton appliance repair company, licensed appliance technicians Edmonton, professional appliance repair Edmonton, experienced appliance repair Edmonton"
        canonical="/about"
      />
      <main className="bg-white">
        {/* Simple Header Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About Us
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Your trusted partner in appliance repair since 2003
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Introduction */}
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Edmonton's Most Trusted Appliance Repair Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                For over two decades, <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">Edmonton Appliance Repair</Link> has been the go-to service provider 
                for <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">residential and commercial appliance repairs</Link> throughout the Greater Edmonton area. 
                Our commitment to excellence and <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">customer satisfaction</Link> has made us one of the most 
                trusted names in the industry.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                We take pride in our team of <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">licensed technicians</Link> who bring extensive experience in 
                repairing <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">all major appliance brands</Link> and models. Our technicians undergo regular 
                training to stay current with the latest appliance technologies and repair techniques.
              </p>
            </div>

            {/* Stats Section */}
            <div className="mt-24 bg-gray-50 rounded-2xl p-12">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Values */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our Core Values
              </h2>
              <div className="mt-8 space-y-8">
                {values.map((value) => (
                  <div key={value.title}>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="mt-2 text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-24 bg-white">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
                Our Certifications
              </h2>
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center justify-center p-8 bg-gray-50 rounded-xl text-center"
                  >
                    <span className="text-lg font-semibold text-gray-900">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="mt-24">
              <CalculatorCTA />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const stats = [
  { label: 'Years of Experience', value: '20+' },
  { label: 'Satisfied Customers', value: '15,000+' },
  { label: 'Service Areas', value: '6' },
  { label: 'Expert Technicians', value: '10+' },
];

const values = [
  {
    title: 'Quality Service',
    description: 'We believe in doing the job right the first time. Our technicians are factory-trained and continuously updated on the latest appliance technologies.',
  },
  {
    title: 'Transparency',
    description: 'No hidden fees or surprise charges. We provide detailed quotes before starting any repair work and explain everything in clear terms.',
  },
  {
    title: 'Reliability',
    description: 'When you schedule a service with us, we show up on time. Our same-day service and emergency repairs ensure your appliances are fixed when you need them.',
  },
  {
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We work around your schedule and ensure minimal disruption to your daily routine during repairs.',
  },
];

const certifications = [
  'Licensed Appliance Service Technicians',
  'EPA Certified',
  'Factory Authorized Warranty Service',
  'Fully Insured and Bonded',
  'Better Business Bureau Accredited',
  'Energy Star Partner',
];