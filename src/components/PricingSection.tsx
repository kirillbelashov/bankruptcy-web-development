
import { Badge } from "@/components/ui/badge";
import PricingCard from "./PricingCard";
import { prices } from "./data/servicesData";

const PricingSection = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Наши тарифы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Прозрачные цены на наши услуги
          </h2>
          <p className="text-muted-foreground">
            Мы предлагаем несколько тарифных планов для разных типов клиентов и различных ситуаций
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prices.map((price, index) => (
            <PricingCard key={index} {...price} />
          ))}
        </div>
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>* Возможна оплата в рассрочку. Окончательная стоимость определяется после консультации.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
