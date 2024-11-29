export interface Service {
  id: string;
  name: string;
  description: string;
  details: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: 'refrigerator',
    name: 'Refrigerator Repair',
    description: 'Expert refrigerator repair in Edmonton. We service all major brands including Samsung, LG, Whirlpool, GE, and more. Common issues we fix include temperature problems, ice maker repairs, water leaks, and strange noises.',
    details: [
      'Temperature control issues',
      'Ice maker problems',
      'Water leaks',
      'Strange noises',
      'Door seal replacement',
      'Compressor repairs'
    ],
    price: 'Starting at $85'
  },
  {
    id: 'washer',
    name: 'Washer Repair',
    description: 'Professional washer repair service in Edmonton. We fix common issues like not spinning, leaking, excessive noise, and drainage problems. All brands serviced including Maytag, Kenmore, and Samsung.',
    details: [
      'Spin cycle issues',
      'Drainage problems',
      'Loud noises',
      'Leaks',
      'Door lock repairs',
      'Belt replacement'
    ],
    price: 'Starting at $75'
  },
  {
    id: 'dryer',
    name: 'Dryer Repair',
    description: 'Fast and reliable dryer repair in Edmonton. Our technicians fix issues like no heat, loud noises, long drying times, and thermal fuse problems. Same-day service available for all major brands.',
    details: [
      'No heat issues',
      'Long drying times',
      'Noisy operation',
      'Thermal fuse repairs',
      'Belt replacement',
      'Vent cleaning'
    ],
    price: 'Starting at $75'
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    description: 'Professional dishwasher repair services in Edmonton. We handle problems like poor cleaning, leaking, drainage issues, and strange noises. Expert service for all major brands.',
    details: [
      'Poor cleaning results',
      'Drainage issues',
      'Leaks',
      'Spray arm repairs',
      'Pump problems',
      'Door seal replacement'
    ],
    price: 'Starting at $80'
  },
  {
    id: 'stove',
    name: 'Stove & Oven Repair',
    description: 'Complete stove and oven repair service in Edmonton. We fix electric and gas appliances, addressing issues like uneven heating, temperature problems, and faulty elements.',
    details: [
      'Heating element repairs',
      'Temperature control',
      'Igniter replacement',
      'Burner repairs',
      'Door hinge fixes',
      'Control panel issues'
    ],
    price: 'Starting at $85'
  },
  {
    id: 'microwave',
    name: 'Microwave Repair',
    description: 'Expert microwave repair in Edmonton. We service all types including built-in and countertop models. Common fixes include turntable issues, door problems, and heating malfunctions.',
    details: [
      'Heating problems',
      'Turntable repairs',
      'Door issues',
      'Control panel fixes',
      'Power problems',
      'Interior light repairs'
    ],
    price: 'Starting at $70'
  }
];