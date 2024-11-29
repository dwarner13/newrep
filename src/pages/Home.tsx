import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Image, images } from '../components/Images';
import ContactForm from '../components/ContactForm';
import CalculatorCTA from '../components/CalculatorCTA';
import Coupons from '../components/Coupons';
import GoogleReview from '../components/GoogleReview';

const PhoneNumber = () => (
  <a href="tel:825-888-3333" className="text-white hover:text-gray-300">
    (825) 888-3333
  </a>
);

const services = [
  {
    title: 'Refrigerator Repair',
    description: 'Expert repair for all refrigerator brands including Samsung, LG, Whirlpool, and GE. We fix cooling issues, ice maker problems, water leaks, and strange noises.',
    image: images.refrigerator,
    link: '/services#refrigerator'
  },
  {
    title: 'Washer & Dryer Repair',
    description: 'Professional washer and dryer repairs. We service all major brands and fix issues like not spinning, leaking, no heat, and excessive noise.',
    image: images.washer,
    link: '/services#washer-dryer'
  },
  {
    title: 'Dishwasher Repair',
    description: 'Complete dishwasher repair service. From drainage issues to cleaning problems, our experts fix all dishwasher brands and models.',
    image: images.dishwasher,
    link: '/services#dishwasher'
  },
  {
    title: 'Stove & Oven Repair',
    description: 'Professional stove and oven repair service. We fix heating elements, temperature control issues, and gas problems for all major brands.',
    image: images.stove,
    link: '/services#stove-oven'
  }
];

const benefits = [
  {
    title: 'Licensed & Insured',
    description: 'Our technicians are fully licensed and insured, providing you with peace of mind and professional service.'
  },
  {
    title: 'Same-Day Service',
    description: 'Emergency repairs and same-day service available throughout Edmonton and surrounding areas.'
  },
  {
    title: '90-Day Warranty',
    description: 'All repairs come with a 90-day warranty on parts and labor for your complete satisfaction.'
  },
  {
    title: 'Competitive Pricing',
    description: 'Transparent pricing with no hidden fees. We provide upfront quotes before starting any repair.'
  }
];

const brands = [
  'Samsung', 'LG', 'Whirlpool', 'GE', 'Maytag', 'Kenmore', 'Frigidaire', 'KitchenAid', 'Bosch', 'Electrolux'
];

export default function Home() {
  return (
    <>
      <SEO
        title="Edmonton Appliance Repair | Same Day Service | Licensed Technicians"
        description="Expert appliance repair in Edmonton. Fast, reliable service for all major brands. Same-day appointments available. Licensed and insured technicians. Serving Edmonton, St. Albert, and Sherwood Park."
        keywords="appliance repair Edmonton, refrigerator repair Edmonton, washer repair Edmonton, dryer repair Edmonton, dishwasher repair Edmonton, stove repair Edmonton, oven repair Edmonton, appliance technician Edmonton, same day appliance repair Edmonton"
        canonical="/"
      />
      <main className="bg-white">
        {/* Hero Section */}
        <div className="relative isolate">
          <div className="relative h-[600px] overflow-hidden">
            <Image
              src={images.hero}
              alt="Professional appliance repair service in Edmonton"
              className="absolute h-full w-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Edmonton's Most Trusted Appliance Repair Service
                </h1>
                <p className="mt-6 text-lg leading-8">
                  Professional repairs for all major appliance brands. Same-day service available throughout Edmonton, St. Albert, and Sherwood Park.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to="/contact"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    Book Now
                  </Link>
                  <Link to="/services" className="text-sm font-semibold leading-6 text-white">
                    View Services <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="bg-blue-600 text-white py-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg">
                Need emergency appliance repair? Call us now at <PhoneNumber /> - Available 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Professional Appliance Repair Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Expert repair services for all major appliance brands. Our licensed technicians provide fast, reliable repairs throughout Edmonton.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <Link key={service.title} to={service.link} className="flex flex-col">
                  <div className="relative w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                    />
                  </div>
                  <div className="max-w-xl">
                    <h3 className="mt-8 text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Our Appliance Repair Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Professional, reliable appliance repair services you can trust
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-4 text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Major Brands We Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our expert technicians are trained to repair all major appliance brands
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-900 font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coupons Section */}
        <Coupons />

        {/* Google Review Section */}
        <GoogleReview />

        {/* Contact Form Section */}
        <div className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Schedule Your Appliance Repair
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Fill out the form below or call us at <PhoneNumber /> for immediate assistance
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl">
              <div className="bg-white p-8 shadow-lg rounded-xl">
                <ContactForm />
                <p className="mt-4 text-sm text-gray-500 text-center">
                  Emergency? Call us at <PhoneNumber /> for immediate assistance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <CalculatorCTA />
          </div>
        </div>
      </main>
    </>
  );
}