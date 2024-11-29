import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface RepairCost {
  serviceCall: number;
  labour: number;
  parts: {
    min: number;
    max: number;
  };
}

const repairCosts: Record<string, RepairCost> = {
  refrigerator: {
    serviceCall: 79,
    labour: 60,
    parts: { min: 20, max: 500 }
  },
  washer: {
    serviceCall: 79,
    labour: 60,
    parts: { min: 20, max: 400 }
  },
  dryer: {
    serviceCall: 79,
    labour: 60,
    parts: { min: 20, max: 350 }
  },
  dishwasher: {
    serviceCall: 79,
    labour: 60,
    parts: { min: 20, max: 400 }
  },
  stove: {
    serviceCall: 79,
    labour: 60,
    parts: { min: 30, max: 450 }
  },
  microwave: {
    serviceCall: 79,
    labour: 60,
    parts: { min: 20, max: 300 }
  }
};

const surroundingAreas = [
  'Spruce Grove',
  'Nisku',
  'Leduc',
  'Devon',
  'Stony Plain',
  'Fort Saskatchewan'
];

export default function CostCalculator() {
  const [appliance, setAppliance] = useState('');
  const [location, setLocation] = useState('');
  const [showEstimate, setShowEstimate] = useState(false);
  const navigate = useNavigate();

  const handleCalculate = () => {
    if (appliance && location) {
      setShowEstimate(true);
    }
  };

  const handleGetQuote = () => {
    const cost = repairCosts[appliance];
    if (cost) {
      const additionalServiceFee = surroundingAreas.includes(location) ? 20 : 0;
      navigate('/contact', {
        state: {
          service: appliance,
          estimatedCost: {
            min: cost.serviceCall + cost.labour + cost.parts.min + additionalServiceFee,
            max: cost.serviceCall + cost.labour + cost.parts.max + additionalServiceFee
          }
        }
      });
    }
  };

  const cost = appliance ? repairCosts[appliance] : null;
  const additionalServiceFee = surroundingAreas.includes(location) ? 20 : 0;
  const estimatedTotal = cost ? {
    min: cost.serviceCall + cost.labour + cost.parts.min + additionalServiceFee,
    max: cost.serviceCall + cost.labour + cost.parts.max + additionalServiceFee
  } : null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Repair Cost Calculator
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="appliance" className="block text-sm font-medium text-gray-700 mb-1">
            Select Appliance
          </label>
          <select
            id="appliance"
            value={appliance}
            onChange={(e) => {
              setAppliance(e.target.value);
              setShowEstimate(false);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Choose appliance</option>
            <option value="refrigerator">Refrigerator</option>
            <option value="washer">Washer</option>
            <option value="dryer">Dryer</option>
            <option value="dishwasher">Dishwasher</option>
            <option value="stove">Stove/Oven</option>
            <option value="microwave">Microwave</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Select Location
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setShowEstimate(false);
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Choose location</option>
            <optgroup label="Edmonton & Area">
              <option value="Downtown Edmonton">Downtown Edmonton</option>
              <option value="North Edmonton">North Edmonton</option>
              <option value="South Edmonton">South Edmonton</option>
              <option value="West Edmonton">West Edmonton</option>
              <option value="Sherwood Park">Sherwood Park</option>
              <option value="St. Albert">St. Albert</option>
            </optgroup>
            <optgroup label="Surrounding Areas*">
              <option value="Spruce Grove">Spruce Grove</option>
              <option value="Nisku">Nisku</option>
              <option value="Leduc">Leduc</option>
              <option value="Devon">Devon</option>
              <option value="Stony Plain">Stony Plain</option>
              <option value="Fort Saskatchewan">Fort Saskatchewan</option>
            </optgroup>
          </select>
        </div>

        <button
          onClick={handleCalculate}
          disabled={!appliance || !location}
          className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50"
        >
          Calculate Estimate
        </button>

        {showEstimate && cost && (
          <div className="mt-4 space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Estimated Cost Breakdown:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Service Call Fee:</span>
                  <span>${cost.serviceCall}</span>
                </li>
                <li className="flex justify-between">
                  <span>Labour:</span>
                  <span>${cost.labour}</span>
                </li>
                {additionalServiceFee > 0 && (
                  <li className="flex justify-between">
                    <span>Additional Service Fee (Surrounding Area)*:</span>
                    <span>${additionalServiceFee}</span>
                  </li>
                )}
                <li className="flex justify-between">
                  <span>Parts (estimated):</span>
                  <span>${cost.parts.min} - ${cost.parts.max}</span>
                </li>
                <li className="flex justify-between font-semibold border-t border-gray-200 pt-2 mt-2">
                  <span>Total Estimate:</span>
                  <span>${estimatedTotal?.min} - ${estimatedTotal?.max}</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-gray-500">
              * Actual costs may vary depending on the specific repair needed. Contact us for an accurate quote.
              {additionalServiceFee > 0 && ' Additional $20 service fee applies for surrounding areas.'}
            </p>
            <button
              onClick={handleGetQuote}
              className="w-full text-center rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-200"
            >
              Get Accurate Quote
            </button>
          </div>
        )}
      </div>
    </div>
  );
}