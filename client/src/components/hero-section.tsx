import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-medical-green to-medical-green-dark text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Medical Equipment & Supplies
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100">
              FDA-certified medical supplies and pharmaceutical products for healthcare professionals. Trusted by over 500+ medical facilities nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button className="bg-medical-yellow text-medical-green-dark hover:bg-white hover:text-medical-green-dark px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                  View Products
                </Button>
              </Link>
              <Button 
                onClick={scrollToContact}
                className="bg-white text-medical-green hover:bg-medical-green hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Request Quote
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://pixabay.com/get/g8977b9d284758d472b605332ab8f0dd00555e3a916e4aaf5d9e2f42a19b076968b9aba57931c3e5fc46ac25d6e61f4cffa49d6073674a3c852a4bc8cae43acf0_1280.jpg" 
              alt="Medical equipment and supplies" 
              className="rounded-xl shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
