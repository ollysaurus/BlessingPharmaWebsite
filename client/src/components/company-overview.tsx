import { useEffect, useRef } from "react";
import { CheckCircle, Zap, LifeBuoy } from "lucide-react";

export default function CompanyOverview() {
  // We use useRef to create a reference to an array that will hold our DOM elements
  const animatedElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // The useEffect hook runs once when the component mounts
  useEffect(() => {
    // We create a new IntersectionObserver
    // It will watch for elements entering the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is currently visible in the viewport
          if (entry.isIntersecting) {
            // Add the 'is-visible' class to trigger the animation
            entry.target.classList.add("is-visible");
            // Stop observing the element once it has been animated
            observer.unobserve(entry.target);
          }
        });
      },
      // The threshold option specifies how much of the element must be visible
      // 0.1 means 10% of the element must be in the viewport
      { threshold: 0.1 }
    );

    // We loop through the array of elements we want to observe
    animatedElementsRef.current.forEach((element) => {
      if (element) {
        // Start observing each element
        observer.observe(element);
      }
    });

    // This is the cleanup function that runs when the component unmounts
    // It stops observing the elements to prevent memory leaks
    return () => {
      animatedElementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animate the main text content. We use the ref prop to get a reference to this div. */}
        <div 
          className="text-center mb-12 opacity-0 transform translate-y-4 transition-all duration-1000 ease-in-out"
          ref={(el) => (animatedElementsRef.current[0] = el)}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Blessing Pharma and Medical Supplies Trading</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of FDA-certified medical equipment and pharmaceutical supplies, serving healthcare professionals with quality products and exceptional service since 2015.
          </p>
        </div>

        {/* Animate the three cards. We add a delay to each for a staggered effect. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="bg-white p-8 rounded-xl shadow-lg text-center opacity-0 transform translate-y-4 transition-all duration-1000 ease-in-out"
            ref={(el) => (animatedElementsRef.current[1] = el)}
          >
            <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">FDA Certified</h3>
            <p className="text-gray-600">All our products meet FDA standards and regulatory requirements for medical device safety and effectiveness.</p>
          </div>
          <div 
            className="bg-white p-8 rounded-xl shadow-lg text-center opacity-0 transform translate-y-4 transition-all duration-1000 ease-in-out delay-200"
            ref={(el) => (animatedElementsRef.current[2] = el)}
          >
            <div className="w-16 h-16 bg-medical-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-medical-green-dark" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
            <p className="text-gray-600">Same-day and next-day delivery options available for urgent medical supply needs across all major cities.</p>
          </div>
          <div 
            className="bg-white p-8 rounded-xl shadow-lg text-center opacity-0 transform translate-y-4 transition-all duration-1000 ease-in-out delay-500"
            ref={(el) => (animatedElementsRef.current[3] = el)}
          >
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
