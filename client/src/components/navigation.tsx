import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import mainLogoWord from "@/assets/logos/mainLogoWord.webp";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // useEffect to handle scrolling on route change.
  useEffect(() => {
    // If the URL contains '#contact', scroll to that element.
    if (window.location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Otherwise, scroll to the top of the page for normal navigation.
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToContact = () => {
    if (location === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Use window.location.href to navigate to the home page with the hash
      // The useEffect hook will now handle the scrolling correctly
      window.location.href = "/#contact";
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-medical-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src={mainLogoWord} alt="Blessing Pharma and Medical Supply" className="w-auto h-64" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location === "/" 
                    ? "text-medical-green-dark" 
                    : "text-gray-700 hover:text-medical-green"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location === "/about" 
                    ? "text-medical-green-dark" 
                    : "text-gray-700 hover:text-medical-green"
                }`}
              >
                About Us
              </Link>
              <Link 
                href="/products" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location === "/products" 
                    ? "text-medical-green-dark" 
                    : "text-gray-700 hover:text-medical-green"
                }`}
              >
                Products
              </Link>
              <Button 
                onClick={scrollToContact}
                className="bg-medical-green text-white hover:bg-medical-green-dark px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-medical-green"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location === "/" 
                    ? "text-medical-green-dark bg-gray-50" 
                    : "text-gray-700 hover:text-medical-green hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location === "/about" 
                    ? "text-medical-green-dark bg-gray-50" 
                    : "text-gray-700 hover:text-medical-green hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/products" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location === "/products" 
                    ? "text-medical-green-dark bg-gray-50" 
                    : "text-gray-700 hover:text-medical-green hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <button 
                onClick={scrollToContact}
                className="block w-full text-left px-3 py-2 text-base font-medium text-medical-green hover:text-medical-green-dark hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
