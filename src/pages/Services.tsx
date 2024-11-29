import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CalculatorCTA from '../components/CalculatorCTA';
import ServiceList from '../components/services/ServiceList';
import { services } from '../data/services';

export default function Services() {
  return (
    <>
      <SEO
        title="Appliance Repair Services Edmonton | All Major Brands | Same-Day Service"
        description="Professional appliance repair services in Edmonton. Expert repairs for refrigerators, washers, dryers, dishwashers, stoves, and more. Licensed technicians and competitive rates."
        keywords="appliance repair services Edmonton, refrigerator repair Edmonton, washer repair Edmonton, dryer repair Edmonton, dishwasher repair Edmonton, stove repair Edmonton, oven repair Edmonton"
        canonical="/services"
      />
      <main className="bg-white">
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Repair Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Professional <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">appliance repair services</Link> in Edmonton. 
                Our <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">licensed technicians</Link> provide 
                <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">same-day service</Link> at competitive rates.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <ServiceList services={services} />

          {/* Calculator CTA */}
          <div className="mt-24">
            <CalculatorCTA />
          </div>
        </div>
      </main>
    </>
  );
}