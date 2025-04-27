
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ServiceBanner = () => {
  return (
    <div className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-4">Наши услуги</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Полный спектр услуг по банкротству
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Мы предлагаем комплексные решения проблем с долгами для физических и юридических лиц.
          </p>
          <Button size="lg">
            Бесплатная консультация
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
