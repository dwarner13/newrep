import { StarIcon } from '@heroicons/react/24/solid';

export default function GoogleReview() {
  const GOOGLE_BUSINESS_URL = "https://g.page/r/YOUR_GOOGLE_BUSINESS_ID";

  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Love Our Service? Leave a Review!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your feedback helps us serve the Edmonton community better
          </p>
          
          <div className="mt-8 flex flex-col items-center">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-8 w-8 text-yellow-400" />
              ))}
            </div>
            
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-500"
            >
              Rate Us on Google
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
                className="ml-2 h-6 w-6"
              />
            </a>
            
            <p className="mt-6 text-sm text-gray-500">
              Your review helps other Edmonton residents find reliable appliance repair services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}