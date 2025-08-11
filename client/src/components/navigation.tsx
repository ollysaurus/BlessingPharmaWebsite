import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    if (location === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page and then scroll to contact
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
              <div className="w-10 h-10 bg-medical-green rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"></path>
                </svg>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Blessing Pharma and Medical Supply</span>
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
