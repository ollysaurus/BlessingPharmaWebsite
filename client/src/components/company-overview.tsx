import { CheckCircle, Zap, LifeBuoy } from "lucide-react";

export default function CompanyOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About MedSupply Pro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of FDA-certified medical equipment and pharmaceutical supplies, serving healthcare professionals with quality products and exceptional service since 2015.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">FDA Certified</h3>
            <p className="text-gray-600">All our products meet FDA standards and regulatory requirements for medical device safety and effectiveness.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-medical-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-medical-green-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
            <p className="text-gray-600">Same-day and next-day delivery options available for urgent medical supply needs across all major cities.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
              <LifeBuoy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock customer support for medical professionals with dedicated account managers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
