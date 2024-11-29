import { Link } from 'react-router-dom';

interface ServiceDetail {
  title: string;
  description: string;
  details: string[];
  price: string;
}

interface ServiceCardProps {
  service: ServiceDetail;
  id: string;
}

export default function ServiceCard({ service, id }: ServiceCardProps) {
  return (
    <div id={id} className="bg-white p-8 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
      <p className="text-gray-600 mb-6">{service.description}</p>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Fix:</h3>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
        {service.details.map((detail, index) => (
          <li key={index} className="text-gray-600 text-sm flex items-center">
            <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {detail}
          </li>
        ))}
      </ul>
      
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
        <p className="text-lg font-semibold text-blue-600">{service.price}</p>
        <Link
          to="/contact"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Book Service
        </Link>
      </div>
    </div>
  );
}