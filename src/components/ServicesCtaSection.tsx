
import { Button } from "@/components/ui/button";

const ServicesCtaSection = () => {
  return (
    <section className="container py-20">
      <div className="bg-accent text-accent-foreground rounded-xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Не откладывайте решение проблем с долгами
            </h2>
            <p className="mb-6 opacity-90">
              Запишитесь на бесплатную консультацию сегодня и начните путь к финансовой свободе
            </p>
            <Button variant="secondary" size="lg">
              Записаться на консультацию
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Бесплатная консультация</h3>
              <p className="text-sm opacity-80">Мы проанализируем вашу ситуацию и предложим оптимальное решение</p>
            </div>
            <div className="bg-background/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Индивидуальный подход</h3>
              <p className="text-sm opacity-80">Разработаем стратегию с учетом всех особенностей вашего дела</p>
            </div>
            <div className="bg-background/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Быстрое решение</h3>
              <p className="text-sm opacity-80">Оперативно подготовим документы и запустим процедуру</p>
            </div>
            <div className="bg-background/10 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Гарантия результата</h3>
              <p className="text-sm opacity-80">Берем на себя ответственность за успешное завершение дела</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCtaSection;
