import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { validateEmail, validatePhone, validateRequired } from '../../utils/validation';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
import SubmitButton from './SubmitButton';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
}

const INITIAL_STATE: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  location: '',
  service: '',
  message: '',
};

const locationOptions = [
  { value: '', label: 'Select your area' },
  { value: 'Downtown Edmonton', label: 'Downtown Edmonton' },
  { value: 'West Edmonton', label: 'West Edmonton' },
  { value: 'South Edmonton', label: 'South Edmonton' },
  { value: 'North Edmonton', label: 'North Edmonton' },
  { value: 'Sherwood Park', label: 'Sherwood Park' },
  { value: 'St. Albert', label: 'St. Albert' },
  { value: 'Other', label: 'Other' },
];

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'Refrigerator Repair', label: 'Refrigerator Repair' },
  { value: 'Washer Repair', label: 'Washer Repair' },
  { value: 'Dryer Repair', label: 'Dryer Repair' },
  { value: 'Dishwasher Repair', label: 'Dishwasher Repair' },
  { value: 'Stove/Oven Repair', label: 'Stove/Oven Repair' },
  { value: 'Other', label: 'Other' },
];

const validateForm = (values: ContactFormData) => {
  const errors: { [key: string]: string } = {};

  if (!validateRequired(values.name)) {
    errors.name = 'Name is required';
  }

  if (!validateEmail(values.email)) {
    errors.email = 'Valid email is required';
  }

  if (!validatePhone(values.phone)) {
    errors.phone = 'Valid phone number is required';
  }

  if (!validateRequired(values.location)) {
    errors.location = 'Location is required';
  }

  if (!validateRequired(values.service)) {
    errors.service = 'Service type is required';
  }

  if (!validateRequired(values.message)) {
    errors.message = 'Message is required';
  }

  return errors;
};

export default function ContactForm() {
  const location = useLocation();

  const handleSubmit = async (values: ContactFormData) => {
    const response = await fetch('https://formsubmit.co/ajax/ezappliance03@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...values,
        _subject: `New Service Request - ${values.service}`,
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
  };

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit: onSubmit
  } = useForm<ContactFormData>(
    INITIAL_STATE,
    validateForm,
    handleSubmit
  );

  useEffect(() => {
    if (location.state?.service) {
      const { service, estimatedCost } = location.state;
      const serviceFormatted = service.charAt(0).toUpperCase() + service.slice(1);
      const costRange = estimatedCost ? `$${estimatedCost.min} - $${estimatedCost.max}` : '';
      
      handleChange({
        target: {
          name: 'service',
          value: serviceFormatted
        }
      } as React.ChangeEvent<HTMLSelectElement>);

      handleChange({
        target: {
          name: 'message',
          value: `Requesting quote for ${serviceFormatted} repair. Estimated cost range: ${costRange}`
        }
      } as React.ChangeEvent<HTMLTextAreaElement>);
    }
  }, [location.state]);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <FormInput
          label="Name"
          id="name"
          name="name"
          type="text"
          required
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />

        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormInput
          label="Phone"
          id="phone"
          name="phone"
          type="tel"
          required
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <FormSelect
          label="Location"
          id="location"
          name="location"
          required
          value={values.location}
          onChange={handleChange}
          options={locationOptions}
          error={errors.location}
        />
      </div>

      <FormSelect
        label="Service Needed"
        id="service"
        name="service"
        required
        value={values.service}
        onChange={handleChange}
        options={serviceOptions}
        error={errors.service}
      />

      <FormTextArea
        label="Description of Issue"
        id="message"
        name="message"
        rows={4}
        required
        value={values.message}
        onChange={handleChange}
        error={errors.message}
      />

      <SubmitButton isLoading={isSubmitting}>
        Schedule Service
      </SubmitButton>
      
      {/* Success Message */}
      {isSubmitting === false && values === INITIAL_STATE && (
        <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
          Thank you! We'll contact you shortly to confirm your appointment.
        </div>
      )}
    </form>
  );
}