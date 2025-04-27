
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceBanner from "@/components/ServiceBanner";
import ServicesTabs from "@/components/ServicesTabs";
import PricingSection from "@/components/PricingSection";
import ServicesCtaSection from "@/components/ServicesCtaSection";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Баннер */}
        <ServiceBanner />
        
        {/* Табы с услугами */}
        <ServicesTabs />
        
        {/* Тарифы */}
        <PricingSection />
        
        {/* CTA */}
        <ServicesCtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
