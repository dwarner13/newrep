import { Link } from 'react-router-dom';

export default function CalculatorCTA() {
  return (
    <div className="bg-blue-50 py-12 px-6 rounded-2xl">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Get an Instant Repair Estimate
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Use our cost calculator to get an estimated price range for your appliance repair
        </p>
        <div className="mt-8">
          <Link
            to="/contact#calculator"
            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-500"
          >
            Calculate Repair Cost
          </Link>
        </div>
      </div>
    </div>
  );
}