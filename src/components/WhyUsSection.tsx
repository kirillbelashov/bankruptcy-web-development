
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, BookOpen, Briefcase } from "lucide-react";

const WhyUsSection = () => {
  return (
    <div className="bg-muted py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Почему мы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Профессиональный подход к банкротству</h2>
          <p className="text-muted-foreground">
            Наша команда экспертов специализируется исключительно на процедурах банкротства и антикризисном управлении. Мы знаем все нюансы законодательства и судебной практики.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-none shadow-sm bg-background">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 rounded-lg flex items-center justify-center bg-accent/10">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-accent text-accent-foreground rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Получите бесплатную консультацию прямо сейчас
              </h3>
              <p className="mb-6 opacity-90">
                Наши эксперты проанализируют вашу ситуацию и предложат оптимальное решение проблемы с долгами
              </p>
              <Button size="lg" variant="secondary">
                Записаться на консультацию
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/10 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">
                  97%
                </div>
                <div className="text-sm">
                  Успешных дел
                </div>
              </div>
              <div className="bg-background/10 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">
                  7+
                </div>
                <div className="text-sm">
                  Лет опыта
                </div>
              </div>
              <div className="bg-background/10 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">
                  1500+
                </div>
                <div className="text-sm">
                  Клиентов
                </div>
              </div>
              <div className="bg-background/10 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">
                  3+
                </div>
                <div className="text-sm">
                  Млрд ₽ списано
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const advantages = [
  {
    icon: <Award className="h-6 w-6 text-accent" />,
    title: "Опытные специалисты",
    description: "В нашей команде только сертифицированные юристы и арбитражные управляющие с опытом от 5 лет."
  },
  {
    icon: <Clock className="h-6 w-6 text-accent" />,
    title: "Быстрое решение",
    description: "Мы сопровождаем процедуру банкротства от начала до конца в максимально сжатые сроки."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-accent" />,
    title: "Индивидуальный подход",
    description: "Для каждого клиента мы разрабатываем уникальную стратегию с учетом всех обстоятельств дела."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-accent" />,
    title: "Прозрачность работы",
    description: "Вы всегда знаете, на каком этапе находится ваше дело и какие действия предпринимаются."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-accent" />,
    title: "Законные методы",
    description: "Мы используем только легальные способы решения проблем с долгами в рамках действующего законодательства."
  },
  {
    icon: <Award className="h-6 w-6 text-accent" />,
    title: "Гарантия результата",
    description: "Мы берем на себя ответственность за результат и гарантируем успешное завершение процедуры."
  }
];

export default WhyUsSection;
