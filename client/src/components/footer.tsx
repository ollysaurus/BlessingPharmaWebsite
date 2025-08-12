import { Link } from "wouter";
import mainLogoWord from "@/assets/logos/mainLogoWord.webp";

export default function Footer() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <footer className="bg-medical-green-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            {/* The parent div's mb-4 class has been removed */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                {/* The h-64 class has been changed to h-16 */}
                <img src={mainLogoWord} alt="Blessing Pharma and Medical Supply" className="w-auto h-64 -mt-24 -mb-16 -ml-6" />
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Professional medical equipment and supplies for healthcare facilities nationwide. FDA-certified and HIPAA compliant.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><button onClick={scrollToContact} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Product Catalog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Request Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Medical Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cardiology Equipment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Surgical Instruments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pharmaceutical Supplies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Emergency Equipment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Diagnostic Tools</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">General Supplies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Store Location</h3>
            <div className="text-gray-300 mb-4">
              <p>1250 Medical Center Drive</p>
              <p>Suite 400, Healthcare District</p>
              <p>Houston, TX 77030</p>
            </div>
            <div className="text-gray-300 mb-4">
              <p className="font-medium">Business Hours:</p>
              <p className="text-sm">Mon-Fri: 7:00 AM - 7:00 PM</p>
              <p className="text-sm">Saturday: 8:00 AM - 5:00 PM</p>
              <p className="text-sm">Sunday: Emergency Only</p>
            </div>
            <p className="text-gray-300">
              <span className="font-medium">Emergency Line:</span><br />
              <span>(713) 555-9911 (24/7)</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-green-600 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-300 text-sm">
              <p>&copy; 2024 MedSupply Pro. All rights reserved.</p>
              <p>FDA Registration: #12345678 | DEA: TX1234567890</p>
            </div>
            <div className="text-gray-300 text-sm md:text-right">
              <p>HIPAA Compliant | ISO 13485:2016 Certified</p>
              <div className="space-x-4 mt-2">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}