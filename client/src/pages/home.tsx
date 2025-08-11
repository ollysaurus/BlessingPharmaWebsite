import HeroSection from "@/components/hero-section";
import CompanyOverview from "@/components/company-overview";
import FeaturedProducts from "@/components/featured-products";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyOverview />
      <FeaturedProducts />
      <ContactSection />
    </main>
  );
}
