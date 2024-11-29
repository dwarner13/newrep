import { FormEvent, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
}

const INITIAL_FORM_STATE: FormData = {
  name: '',
  email: '',
  phone: '',
  location: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const location = useLocation();

  // Pre-fill form with calculator data if available
  useEffect(() => {
    if (location.state?.service) {
      const { service, estimatedCost } = location.state;
      const serviceFormatted = service.charAt(0).toUpperCase() + service.slice(1);
      const costRange = estimatedCost ? `$${estimatedCost.min} - $${estimatedCost.max}` : '';
      
      setFormData(prev => ({
        ...prev,
        service: serviceFormatted,
        message: `Requesting quote for ${serviceFormatted} repair. Estimated cost range: ${costRange}`
      }));
    }
  }, [location]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/ezappliance03@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Service Request - ${formData.service}`,
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(INITIAL_FORM_STATE);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <select
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select your area</option>
            <option>Downtown Edmonton</option>
            <option>West Edmonton</option>
            <option>South Edmonton</option>
            <option>North Edmonton</option>
            <option>Sherwood Park</option>
            <option>St. Albert</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a service</option>
          <option>Refrigerator Repair</option>
          <option>Washer Repair</option>
          <option>Dryer Repair</option>
          <option>Dishwasher Repair</option>
          <option>Stove/Oven Repair</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Description of Issue
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Schedule Service'}
      </button>
      
      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
          Thank you! We'll contact you shortly to confirm your appointment.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
          There was an error submitting your request. Please try again or call us directly.
        </div>
      )}
    </form>
  );
}