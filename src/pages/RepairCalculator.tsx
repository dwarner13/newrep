import { Helmet } from 'react-helmet-async';
import CostCalculator from '../components/CostCalculator';

export default function RepairCalculator() {
  return (
    <>
      <Helmet>
        <title>Appliance Repair Cost Calculator Edmonton | Instant Repair Estimate</title>
        <meta 
          name="description" 
          content="Get an instant estimate for your appliance repair in Edmonton. Calculate repair costs for refrigerators, washers, dryers, dishwashers, and more. Free online estimate tool with transparent pricing."
        />
        <meta 
          name="keywords" 
          content="appliance repair cost calculator, Edmonton repair estimate, appliance repair pricing, instant repair quote Edmonton, refrigerator repair cost, washer repair cost, dryer repair cost"
        />
        <link rel="canonical" href="https://appliancerepairsedmonton.com/calculator" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Appliance Repair Cost Calculator Edmonton | Get Instant Estimate" />
        <meta property="og:description" content="Calculate your appliance repair costs instantly. Get accurate estimates for refrigerator, washer, dryer, and dishwasher repairs in Edmonton and surrounding areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://appliancerepairsedmonton.com/calculator" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Edmonton Appliance Repair Cost Calculator",
            "description": "Calculate appliance repair costs instantly for Edmonton and surrounding areas",
            "url": "https://appliancerepairsedmonton.com/calculator",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "79.00",
              "priceCurrency": "CAD",
              "description": "Service call fee starting at $79"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Edmonton Appliance Repair",
              "telephone": "(825) 888-3333",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 53.5461,
                  "longitude": -113.4938
                },
                "geoRadius": "50000"
              }
            }
          })}
        </script>
      </Helmet>

      <main className="bg-white">
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Appliance Repair Cost Calculator
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get an instant estimate for your appliance repair in Edmonton and surrounding areas. 
                Our transparent pricing calculator helps you plan your repair budget.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <CostCalculator />
            
            {/* SEO Content */}
            <div className="mt-24 prose prose-lg max-w-none">
              <h2>How Our Appliance Repair Calculator Works</h2>
              <p>
                Our appliance repair cost calculator provides instant estimates based on your specific 
                appliance type and location. The calculator factors in:
              </p>
              <ul>
                <li>Standard service call fee ($79)</li>
                <li>Labour costs (starting at $60)</li>
                <li>Estimated parts costs based on common repairs</li>
                <li>Additional service fees for surrounding areas</li>
              </ul>

              <h2>Understanding Appliance Repair Costs in Edmonton</h2>
              <p>
                Appliance repair costs in Edmonton can vary based on several factors. Our calculator 
                helps you understand potential costs for common repairs including:
              </p>
              <ul>
                <li>Refrigerator repairs (cooling issues, ice maker problems)</li>
                <li>Washer repairs (spin cycle issues, drainage problems)</li>
                <li>Dryer repairs (heating problems, noise issues)</li>
                <li>Dishwasher repairs (cleaning performance, leaks)</li>
                <li>Stove/oven repairs (heating elements, temperature control)</li>
              </ul>

              <h2>Service Areas and Additional Fees</h2>
              <p>
                We service Edmonton and surrounding areas including St. Albert, Sherwood Park, 
                Spruce Grove, Nisku, Leduc, and Devon. Additional service fees may apply for 
                locations outside central Edmonton.
              </p>

              <h2>Why Choose Our Repair Service</h2>
              <ul>
                <li>Licensed and insured technicians</li>
                <li>Same-day service available</li>
                <li>90-day warranty on parts and labour</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>All major brands serviced</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}