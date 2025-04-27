
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Building, UserCog, Scale, ArrowRight, Check } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="container py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">Наши услуги</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Решения для любых финансовых проблем</h2>
        <p className="text-muted-foreground">
          Мы предлагаем комплексный подход к решению ваших финансовых проблем.
          Наши специалисты помогут выбрать оптимальный вариант выхода из долговой ямы.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.iconBg}`}>
                {service.icon}
              </div>
              <CardTitle className="mt-4">{service.title}</CardTitle>
              <CardDescription>{service.shortDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full group">
                Подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button size="lg">
          Все услуги
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const services = [
  {
    icon: <User className="h-6 w-6 text-primary" />,
    iconBg: "bg-primary/10",
    title: "Банкротство физических лиц",
    shortDesc: "Законное списание всех долгов для граждан",
    features: [
      "Полное освобождение от долгов",
      "Прекращение звонков коллекторов",
      "Снятие всех ограничений",
      "Сохранение единственного жилья",
      "Сопровождение до завершения процедуры"
    ]
  },
  {
    icon: <UserCog className="h-6 w-6 text-primary" />,
    iconBg: "bg-primary/10",
    title: "Банкротство ИП",
    shortDesc: "Списание долгов для индивидуальных предпринимателей",
    features: [
      "Списание как личных, так и бизнес-долгов",
      "Защита от претензий кредиторов",
      "Возможность начать бизнес заново",
      "Сохранение возможности работать по найму",
      "Детальный анализ ситуации и стратегия"
    ]
  },
  {
    icon: <Building className="h-6 w-6 text-primary" />,
    iconBg: "bg-primary/10",
    title: "Банкротство юридических лиц",
    shortDesc: "Ликвидация компаний с долгами",
    features: [
      "Полное юридическое сопровождение",
      "Защита интересов руководителей",
      "Минимизация субсидиарной ответственности",
      "Работа с налоговыми органами",
      "Ведение процедуры в арбитражном суде"
    ]
  }
];

export default ServicesSection;
