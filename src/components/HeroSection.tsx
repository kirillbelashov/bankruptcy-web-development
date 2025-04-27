
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Award, Hourglass, CreditCard } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 hero-gradient opacity-10 -z-10"></div>
      
      {/* Контент */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-2">
              <ShieldCheck className="h-4 w-4 mr-1" />
              Юридическая защита ваших финансов
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Избавьтесь от долгов <span className="text-accent">законно и навсегда</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Мы помогаем людям и компаниям пройти процедуру банкротства, 
              защитить имущество и начать жизнь с чистого листа.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium">
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Наши услуги
              </Button>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Hourglass className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Быстрое решение</p>
                  <p className="text-xs text-muted-foreground">От 3 месяцев</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">97% успешных дел</p>
                  <p className="text-xs text-muted-foreground">За 2024 год</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Гибкая оплата</p>
                  <p className="text-xs text-muted-foreground">Рассрочка платежей</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto lg:mr-0">
            <div className="relative z-10 bg-background rounded-xl shadow-xl p-6 md:p-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl font-semibold mb-4">Рассчитайте стоимость списания долгов</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Общая сумма долгов:</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>До 500 000 ₽</option>
                    <option>От 500 000 ₽ до 1 000 000 ₽</option>
                    <option>От 1 000 000 ₽ до 3 000 000 ₽</option>
                    <option>Более 3 000 000 ₽</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Тип должника:</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Физическое лицо</option>
                    <option>Индивидуальный предприниматель</option>
                    <option>Юридическое лицо</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Кому должны:</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Банки</option>
                    <option>Микрофинансовые организации</option>
                    <option>Налоговая служба</option>
                    <option>Другие кредиторы</option>
                    <option>Смешанная задолженность</option>
                  </select>
                </div>
                
                <Button className="w-full">Рассчитать стоимость</Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Консультация бесплатная и не обязывает к сотрудничеству
                </p>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full -z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
