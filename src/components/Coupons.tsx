import { useState } from 'react';

const coupons = [
  {
    id: 'BOOK30',
    type: 'DISCOUNT',
    description: 'FOR BOOKING ONLINE',
    value: '$30',
    code: 'A123456791A'
  },
  {
    id: 'RETURN30',
    type: 'DISCOUNT',
    description: 'FOR RETURNING CUSTOMERS',
    value: '$30',
    code: 'A123456792A'
  },
  {
    id: 'SENIOR10',
    type: 'DISCOUNT',
    description: 'FOR SENIORS AND FRONT LINERS',
    value: '10%',
    code: 'A123456793A'
  }
];

export default function Coupons() {
  const [email, setEmail] = useState('');
  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCouponSelect = (couponId: string) => {
    setSelectedCoupon(couponId);
    setShowEmailForm(true);
    setStatus('idle');
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedCoupon) return;

    setStatus('sending');
    
    try {
      const response = await fetch('http://localhost:3000/api/claim-coupon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          couponId: selectedCoupon,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to claim coupon');
      }

      setStatus('success');
      setShowEmailForm(false);
      setEmail('');
      setSelectedCoupon(null);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to claim coupon');
    }
  };

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Appliance Repair Discount Coupons
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Save on your next repair service with our exclusive discount coupons
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="w-full max-w-sm transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative flex flex-col overflow-hidden rounded-lg border-2 border-dashed border-red-700 bg-white shadow-md">
                <div className="bg-red-700 p-6 text-white">
                  <div className="text-sm font-semibold uppercase tracking-wider">
                    {coupon.type}
                  </div>
                  <div className="mt-2 text-lg font-bold">
                    {coupon.description}
                  </div>
                  <div className="mt-4 text-4xl font-bold">
                    {coupon.value}
                  </div>
                  <button
                    onClick={() => handleCouponSelect(coupon.id)}
                    className="mt-6 w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-red-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    CLAIM COUPON
                  </button>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-4">
                  <div className="text-sm text-gray-500">
                    Code: {coupon.code}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Email Form Modal */}
        {showEmailForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">
                Claim Your Discount Coupon
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
                {status === 'error' && (
                  <p className="text-red-600 text-sm">{errorMessage}</p>
                )}
                {status === 'success' && (
                  <p className="text-green-600 text-sm">
                    Coupon sent! Check your email for the code.
                  </p>
                )}
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowEmailForm(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="px-4 py-2 text-sm font-medium text-white bg-red-700 hover:bg-red-800 rounded-md disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Coupon'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm text-gray-500">
            *Coupon will be sent to your email. One-time use only, provide the coupon code before work starts to redeem the discount. Not redeemable for preventive servicing or prior services, cannot be combined with other offers.
          </p>
        </div>
      </div>
    </div>
  );
}