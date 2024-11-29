import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceAreas from '../components/ServiceAreas';
import CalculatorCTA from '../components/CalculatorCTA';

const features = [
  {
    title: 'Fast Response Time',
    description: 'Our technicians are strategically located throughout Edmonton to provide quick service to all areas.'
  },
  {
    title: 'Local Expertise',
    description: 'Deep knowledge of Edmonton neighborhoods and common appliance issues in different areas.'
  },
  {
    title: 'Flexible Scheduling',
    description: 'Convenient appointment times that work with your schedule, including evenings and weekends.'
  },
  {
    title: 'Emergency Service',
    description: '24/7 emergency repairs available in all service areas for urgent appliance problems.'
  }
];

const coverage = [
  {
    region: 'Core Areas',
    description: 'Comprehensive coverage in central Edmonton including Downtown, Oliver, and University areas.',
    response: 'Average response time: 1-2 hours',
    services: [
      'Same-day refrigerator repair',
      'Emergency washer and dryer service',
      'Commercial appliance repairs',
      'Multi-unit building service'
    ]
  },
  {
    region: 'Suburban Areas',
    description: 'Full service to suburban communities including St. Albert, Sherwood Park, and Mill Woods.',
    response: 'Average response time: 2-3 hours',
    services: [
      'Residential appliance repair',
      'Smart appliance specialists',
      'Preventive maintenance',
      'All major brands serviced'
    ]
  },
  {
    region: 'Extended Coverage',
    description: 'Service available to surrounding communities within 30km of Edmonton city limits.',
    response: 'Average response time: 2-4 hours',
    services: [
      'Full appliance repair service',
      'Scheduled maintenance visits',
      'Emergency repair options',
      'Weekend appointments available'
    ]
  }
];

export default function Areas() {
  return (
    <>
      <SEO
        title="Service Areas | Edmonton Appliance Repair | Greater Edmonton Region"
        description="Professional appliance repair services throughout Edmonton and surrounding areas. Fast, reliable service in all neighborhoods. Same-day appointments available."
        keywords="appliance repair Edmonton service areas, Edmonton appliance repair coverage, St Albert appliance repair, Sherwood Park appliance repair"
        canonical="/areas"
      />
      <main className="bg-white">
        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Areas We Serve
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">Professional appliance repair</Link> services throughout Edmonton and surrounding areas. Our <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">expert technicians</Link> provide <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">fast, reliable service</Link> across the Greater Edmonton region.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Service Area Grid */}
          <div className="mx-auto max-w-2xl lg:max-w-none mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Service Locations
            </h2>
            <ServiceAreas />
          </div>

          {/* Coverage Details */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Service Coverage Details
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {coverage.map((area) => (
                <div key={area.region} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.region}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <p className="text-sm text-blue-600 font-medium mb-6">{area.response}</p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Available Services:</h4>
                  <ul className="space-y-2">
                    {area.services.map((service, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Service Features */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose Our Service Coverage
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-x-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
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