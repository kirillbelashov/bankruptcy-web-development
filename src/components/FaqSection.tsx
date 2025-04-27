
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FaqCard from "./FaqCard";

export interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
}

const FaqSection = ({ faqs }: FaqSectionProps) => {
  return (
    <section className="container py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-accent font-medium">Часто задаваемые вопросы</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Ответы на популярные вопросы</h2>
        <p className="text-muted-foreground mt-4">
          Мы собрали ответы на самые распространенные вопросы о процедуре банкротства
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqCard key={index} {...faq} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline">
          Смотреть все вопросы
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default FaqSection;
