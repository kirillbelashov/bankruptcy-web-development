
import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="container py-10 mb-10">
      <div className="bg-accent text-accent-foreground rounded-xl p-8 md:p-12 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Начните путь к финансовой свободе уже сегодня
          </h2>
          <p className="mb-8 opacity-90">
            Первый шаг к избавлению от долгов — бесплатная консультация с нашими специалистами.
            Мы поможем вам разработать оптимальную стратегию решения финансовых проблем.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <MessagesSquare className="mr-2 h-5 w-5" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
              Подробнее об услугах
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
