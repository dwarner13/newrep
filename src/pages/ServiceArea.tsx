import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { serviceAreas } from '../components/ServiceAreas';
import ContactForm from '../components/ContactForm';

const PhoneNumber = () => (
  <a href="tel:825-888-3333" className="text-blue-600 hover:text-blue-500 font-semibold">
    (825) 888-3333
  </a>
);

export default function ServiceArea() {
  const { slug } = useParams<{ slug: string }>();
  const area = serviceAreas.find((a) => a.slug === slug);

  if (!area) {
    return <div>Area not found</div>;
  }

  return (
    <>
      <SEO
        title={`${area.name} Appliance Repair | Same Day Service`}
        description={`Professional appliance repair services in ${area.name}. Expert technicians, same-day service available. All major brands serviced.`}
        keywords={`appliance repair ${area.name}, appliance service ${area.name}, same day repair ${area.name}`}
        canonical={`/areas/${slug}`}
      />
      <main className="bg-white">
        {/* Simple Header Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {area.name} Appliance Repair
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Professional appliance repair services throughout {area.name}. Expert repairs for all major brands with same-day service available.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Introduction */}
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Expert Appliance Repair in {area.name}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                For over two decades, <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">Edmonton Appliance Repair</Link> has been providing 
                <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">professional repair services</Link> throughout {area.name}. 
                Our commitment to excellence and <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">customer satisfaction</Link> has made us 
                the most trusted name in appliance repair in the area.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
                Our Services in {area.name}
              </h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {area.services.map((service) => (
                  <div key={service.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="mt-4 text-gray-600">{service.description}</p>
                    <ul className="mt-6 grid grid-cols-2 gap-4">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                      <Link
                        to="/contact"
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                      >
                        Book Service
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
                Neighborhoods We Serve
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {area.neighborhoods.map((neighborhood) => (
                  <div key={neighborhood.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{neighborhood.name}</h3>
                    <p className="text-gray-600">{neighborhood.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-24 bg-gray-50 rounded-2xl p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Schedule Your Service
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Whether you need <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">emergency repairs</Link> or 
                  <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">routine maintenance</Link>, our team is here to help.
                </p>
                <div className="mt-10">
                  <ContactForm />
                  <p className="mt-4 text-sm text-gray-500">
                    Emergency? Call us at <PhoneNumber /> for immediate assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}