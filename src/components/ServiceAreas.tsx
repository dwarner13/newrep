import { Link } from 'react-router-dom';

export interface ServiceArea {
  name: string;
  slug: string;
  description: string;
  services: {
    title: string;
    description: string;
    price: string;
    details: string[];
  }[];
  neighborhoods: {
    name: string;
    description: string;
  }[];
  brands: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  emergencyService: {
    title: string;
    description: string;
    phone: string;
  };
}

export const serviceAreas: ServiceArea[] = [
  {
    name: 'Downtown Edmonton',
    slug: 'downtown-edmonton',
    description: 'Expert appliance repair service in Downtown Edmonton. Specialized solutions for high-rise buildings, condos, and commercial properties.',
    services: [
      {
        title: 'Refrigerator Repair',
        description: 'Professional refrigerator repair in Downtown Edmonton. We service all major brands with same-day service available.',
        price: 'Starting at $85',
        details: [
          'Temperature control issues',
          'Ice maker repairs',
          'Water leaks',
          'Strange noises',
          'Door seal replacement',
          'Compressor repairs'
        ]
      },
      {
        title: 'Washer & Dryer Repair',
        description: 'Expert washer and dryer repair in Downtown Edmonton. Fast service for all major brands.',
        price: 'Starting at $75',
        details: [
          'Spin cycle issues',
          'Drainage problems',
          'Heating elements',
          'Control board repairs',
          'Belt replacement',
          'Motor repairs'
        ]
      }
    ],
    neighborhoods: [
      {
        name: 'Oliver',
        description: 'Full appliance repair coverage in Oliver neighborhood, including high-rise buildings and heritage homes.'
      },
      {
        name: 'Ice District',
        description: 'Specialized appliance repair service for luxury condos and commercial properties in Ice District.'
      },
      {
        name: 'Rossdale',
        description: 'Professional appliance repair for residential and commercial clients in historic Rossdale.'
      }
    ],
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE'],
    features: [],
    emergencyService: {
      title: '24/7 Emergency Service',
      description: 'Available for urgent repairs in Downtown Edmonton',
      phone: '825-888-3333'
    }
  },
  {
    name: 'South Edmonton',
    slug: 'south-edmonton',
    description: 'Comprehensive appliance repair service throughout South Edmonton. Expert repairs for all major brands and models.',
    services: [
      {
        title: 'Refrigerator Repair',
        description: 'Expert refrigerator repair in South Edmonton. Same-day service available for all major brands.',
        price: 'Starting at $85',
        details: [
          'Cooling issues',
          'Ice maker repairs',
          'Seal replacement',
          'Compressor issues',
          'Thermostat repairs',
          'Water line repairs'
        ]
      },
      {
        title: 'Dishwasher Repair',
        description: 'Professional dishwasher repair in South Edmonton. We fix all makes and models.',
        price: 'Starting at $80',
        details: [
          'Drainage issues',
          'Cleaning problems',
          'Water leaks',
          'Pump repairs',
          'Control panel issues',
          'Door repairs'
        ]
      }
    ],
    neighborhoods: [
      {
        name: 'Mill Woods',
        description: 'Complete appliance repair coverage for Mill Woods residents and businesses.'
      },
      {
        name: 'Southgate',
        description: 'Fast, reliable appliance repair service in the Southgate area.'
      },
      {
        name: 'Windermere',
        description: 'Expert appliance repairs for Windermere homes and businesses.'
      }
    ],
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE'],
    features: [],
    emergencyService: {
      title: '24/7 Emergency Service',
      description: 'Available for urgent repairs in South Edmonton',
      phone: '825-888-3333'
    }
  },
  {
    name: 'North Edmonton',
    slug: 'north-edmonton',
    description: 'Professional appliance repair service in North Edmonton. Fast response times and expert repairs for all major brands.',
    services: [
      {
        title: 'Stove & Oven Repair',
        description: 'Expert stove and oven repair in North Edmonton. Gas and electric appliance specialists.',
        price: 'Starting at $85',
        details: [
          'Heating elements',
          'Gas burners',
          'Temperature control',
          'Door repairs',
          'Control panel issues',
          'Igniter replacement'
        ]
      },
      {
        title: 'Washer Repair',
        description: 'Professional washer repair in North Edmonton. All major brands serviced.',
        price: 'Starting at $75',
        details: [
          'Spin problems',
          'Drainage issues',
          'Motor repairs',
          'Belt replacement',
          'Control board fixes',
          'Drum repairs'
        ]
      }
    ],
    neighborhoods: [
      {
        name: 'Castle Downs',
        description: 'Reliable appliance repair service throughout Castle Downs area.'
      },
      {
        name: 'Griesbach',
        description: 'Expert appliance repair coverage in Griesbach community.'
      },
      {
        name: 'Clareview',
        description: 'Professional appliance repairs for Clareview residents and businesses.'
      }
    ],
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE'],
    features: [],
    emergencyService: {
      title: '24/7 Emergency Service',
      description: 'Available for urgent repairs in North Edmonton',
      phone: '825-888-3333'
    }
  },
  {
    name: 'St. Albert',
    slug: 'st-albert',
    description: 'Trusted appliance repair service in St. Albert. Expert technicians providing same-day service for all major brands.',
    services: [
      {
        title: 'All Major Appliances',
        description: 'Comprehensive appliance repair service in St. Albert. We repair all types of home appliances.',
        price: 'Starting at $75',
        details: [
          'Refrigerators',
          'Washers & Dryers',
          'Dishwashers',
          'Stoves & Ovens',
          'Microwaves',
          'Wine Coolers'
        ]
      }
    ],
    neighborhoods: [
      {
        name: 'Downtown St. Albert',
        description: 'Fast appliance repair service in downtown St. Albert.'
      },
      {
        name: 'Erin Ridge',
        description: 'Professional appliance repairs for Erin Ridge residents.'
      },
      {
        name: 'Lacombe Park',
        description: 'Expert appliance service throughout Lacombe Park area.'
      }
    ],
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE'],
    features: [],
    emergencyService: {
      title: '24/7 Emergency Service',
      description: 'Available for urgent repairs in St. Albert',
      phone: '825-888-3333'
    }
  },
  {
    name: 'Sherwood Park',
    slug: 'sherwood-park',
    description: 'Professional appliance repair in Sherwood Park. Expert service for all major brands with same-day appointments available.',
    services: [
      {
        title: 'All Appliance Services',
        description: 'Complete appliance repair coverage in Sherwood Park. We service all major brands and models.',
        price: 'Starting at $75',
        details: [
          'Refrigerator Repair',
          'Washer & Dryer Service',
          'Dishwasher Repair',
          'Stove & Oven Fixes',
          'Microwave Service',
          'Small Appliances'
        ]
      }
    ],
    neighborhoods: [
      {
        name: 'Broadmoor',
        description: 'Expert appliance repair service in Broadmoor area.'
      },
      {
        name: 'Westboro',
        description: 'Professional appliance repairs for Westboro residents.'
      },
      {
        name: 'Mills Haven',
        description: 'Reliable appliance service throughout Mills Haven.'
      }
    ],
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE'],
    features: [],
    emergencyService: {
      title: '24/7 Emergency Service',
      description: 'Available for urgent repairs in Sherwood Park',
      phone: '825-888-3333'
    }
  },
  {
    name: 'Spruce Grove',
    slug: 'spruce-grove',
    description: 'Reliable appliance repair service in Spruce Grove. Expert technicians providing fast, professional repairs.',
    services: [
      {
        title: 'Complete Appliance Service',
        description: 'Full-service appliance repair in Spruce Grove. We handle all major brands and types of appliances.',
        price: 'Starting at $75',
        details: [
          'Refrigerator Service',
          'Washer Repair',
          'Dryer Repair',
          'Dishwasher Fixes',
          'Stove Repair',
          'Freezer Service'
        ]
      }
    ],
    neighborhoods: [
      {
        name: 'City Center',
        description: 'Fast appliance repair service in Spruce Grove city center.'
      },
      {
        name: 'Westwind',
        description: 'Professional appliance repairs in Westwind area.'
      },
      {
        name: 'Millgrove',
        description: 'Expert appliance service throughout Millgrove subdivision.'
      }
    ],
    brands: ['Samsung', 'LG', 'Whirlpool', 'GE'],
    features: [],
    emergencyService: {
      title: '24/7 Emergency Service',
      description: 'Available for urgent repairs in Spruce Grove',
      phone: '825-888-3333'
    }
  }
];

export default function ServiceAreas() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {serviceAreas.map((area) => (
        <Link
          key={area.slug}
          to={`/areas/${area.slug}`}
          className="flex flex-col bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{area.description}</p>
          <div className="mt-auto">
            <span className="text-blue-600 hover:text-blue-500 text-sm font-semibold">
              View service details →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}