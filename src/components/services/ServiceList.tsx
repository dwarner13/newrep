import ServiceCard from './ServiceCard';

export interface Service {
  id: string;
  name: string;
  description: string;
  details: string[];
  price: string;
}

interface ServiceListProps {
  services: Service[];
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          service={{
            title: service.name,
            description: service.description,
            details: service.details,
            price: service.price
          }}
        />
      ))}
    </div>
  );
}