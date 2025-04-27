
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BenefitItem from "./BenefitItem";

interface ServiceContentProps {
  title: string;
  description: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
}

const ServiceContent = ({ title, description, benefits }: ServiceContentProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
      <div className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} title={benefit.title} description={benefit.description} />
        ))}
      </div>
      <Button>
        Получить консультацию
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default ServiceContent;
