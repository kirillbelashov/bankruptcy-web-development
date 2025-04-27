
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Building, UserCog, Scale, ArrowRight, CheckCircle2, Hourglass } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Баннер */}
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
        
        {/* Табы с услугами */}
        <section className="container py-20">
          <Tabs defaultValue="physical" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="physical" className="py-3">
                  <User className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Физлица</span>
                </TabsTrigger>
                <TabsTrigger value="ip" className="py-3">
                  <UserCog className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">ИП</span>
                </TabsTrigger>
                <TabsTrigger value="company" className="py-3">
                  <Building className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Юрлица</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="physical" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Банкротство физических лиц</h2>
                  <p className="text-muted-foreground mb-6">
                    Банкротство физических лиц – это законная процедура, позволяющая гражданам, 
                    которые не в состоянии погасить свои долги, списать их и начать финансовую 
                    жизнь с чистого листа.
                  </p>
                  <div className="space-y-4 mb-8">
                    {physicalBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button>
                    Получить консультацию
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-8 rounded-xl">
                  <h3 className="text-xl font-medium mb-6">Этапы банкротства физического лица</h3>
                  <ol className="space-y-6">
                    {physicalStages.map((stage, index) => (
                      <li key={index} className="flex">
                        <div className="flex-none w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{stage.title}</h4>
                          <p className="text-sm text-muted-foreground">{stage.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <div className="bg-accent text-accent-foreground rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {physicalInfo.map((info, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold mb-2">{info.value}</div>
                      <p className="text-sm opacity-90">{info.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h3>
                <Accordion type="single" collapsible className="w-full">
                  {physicalFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="ip" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Банкротство индивидуальных предпринимателей</h2>
                  <p className="text-muted-foreground mb-6">
                    Банкротство ИП – особая процедура, которая позволяет предпринимателям 
                    списать как бизнес-долги, так и личные обязательства, защитить имущество 
                    и начать бизнес заново.
                  </p>
                  <div className="space-y-4 mb-8">
                    {ipBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button>
                    Получить консультацию
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-8 rounded-xl">
                  <h3 className="text-xl font-medium mb-6">Особенности банкротства ИП</h3>
                  <ul className="space-y-6">
                    {ipFeatures.map((feature, index) => (
                      <li key={index} className="flex">
                        <div className="flex-none w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                          <feature.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="company" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Банкротство юридических лиц</h2>
                  <p className="text-muted-foreground mb-6">
                    Банкротство юридического лица – это процедура, которая помогает компаниям, 
                    оказавшимся в сложной финансовой ситуации, законно ликвидировать бизнес 
                    и минимизировать риски для руководителей.
                  </p>
                  <div className="space-y-4 mb-8">
                    {companyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button>
                    Получить консультацию
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-muted p-8 rounded-xl">
                  <h3 className="text-xl font-medium mb-6">Процедуры банкротства юрлиц</h3>
                  <ul className="space-y-6">
                    {companyProcedures.map((procedure, index) => (
                      <li key={index} className="flex">
                        <div className="flex-none w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{procedure.title}</h4>
                          <p className="text-sm text-muted-foreground">{procedure.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Тарифы */}
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
                <Card key={index} className={`${price.featured ? 'border-primary shadow-md relative' : ''}`}>
                  {price.featured && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                      Популярный
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{price.title}</CardTitle>
                    <CardDescription>{price.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{price.price}</span>
                      <span className="text-muted-foreground ml-1">₽</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {price.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${price.featured ? '' : 'variant-outline'}`}>
                      Выбрать тариф
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8 text-sm text-muted-foreground">
              <p>* Возможна оплата в рассрочку. Окончательная стоимость определяется после консультации.</p>
            </div>
          </div>
        </section>
        
        {/* CTA */}
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
      </main>
      
      <Footer />
    </div>
  );
};

// Данные для вкладки "Физические лица"
const physicalBenefits = [
  {
    title: "Полное списание долгов",
    description: "Вы освобождаетесь от всех долговых обязательств, включая кредиты, займы, налоги и коммунальные платежи"
  },
  {
    title: "Прекращение исполнительных производств",
    description: "Прекращаются все исполнительные производства, снимаются аресты с имущества и счетов"
  },
  {
    title: "Остановка начисления пеней и штрафов",
    description: "С момента принятия заявления о банкротстве прекращается начисление штрафов, пеней и процентов"
  },
  {
    title: "Сохранение единственного жилья",
    description: "Закон защищает единственное жилье, которое не может быть изъято при банкротстве"
  }
];

const physicalStages = [
  {
    title: "Консультация и анализ ситуации",
    description: "Оценка финансового положения, анализ документов, определение стратегии"
  },
  {
    title: "Подготовка документов",
    description: "Сбор необходимых документов, подготовка заявления о банкротстве"
  },
  {
    title: "Подача заявления в суд",
    description: "Подача заявления о признании банкротом в арбитражный суд"
  },
  {
    title: "Реструктуризация или реализация имущества",
    description: "Проведение процедуры реструктуризации долгов или реализации имущества"
  },
  {
    title: "Завершение процедуры",
    description: "Вынесение судом определения о завершении процедуры банкротства и списании долгов"
  }
];

const physicalInfo = [
  {
    value: "от 6 мес.",
    label: "Срок процедуры"
  },
  {
    value: "от 80 000 ₽",
    label: "Стоимость услуг"
  },
  {
    value: "100%",
    label: "Списание долгов"
  },
  {
    value: "97%",
    label: "Успешных дел"
  }
];

const physicalFaqs = [
  {
    question: "Какие долги нельзя списать при банкротстве?",
    answer: "При банкротстве нельзя списать алименты, возмещение вреда жизни и здоровью, ущерб, причиненный преступлением, а также задолженности, возникшие в результате мошеннических действий."
  },
  {
    question: "Можно ли сохранить имущество при банкротстве?",
    answer: "По закону единственное жилье, предметы обихода и личного пользования, а также имущество, необходимое для профессиональной деятельности стоимостью до 10 000 рублей, не подлежат реализации при банкротстве."
  },
  {
    question: "Каковы последствия банкротства для физического лица?",
    answer: "В течение 5 лет нужно указывать статус банкрота при получении кредита, 3 года нельзя занимать руководящие должности в компаниях, 5 лет нельзя повторно инициировать процедуру банкротства."
  },
  {
    question: "Сколько длится процедура банкротства?",
    answer: "Процедура банкротства физического лица в среднем длится от 6 до 12 месяцев, в зависимости от сложности дела, количества кредиторов и имущества."
  }
];

// Данные для вкладки "ИП"
const ipBenefits = [
  {
    title: "Списание как бизнес, так и личных долгов",
    description: "В рамках одной процедуры списываются все долги ИП, включая личные кредиты и займы"
  },
  {
    title: "Сохранение личного имущества",
    description: "При грамотном подходе большую часть личного имущества можно защитить от взыскания"
  },
  {
    title: "Возможность начать бизнес заново",
    description: "После завершения процедуры банкротства можно снова зарегистрироваться как ИП через год"
  },
  {
    title: "Защита от субсидиарной ответственности",
    description: "Снижение рисков привлечения к ответственности по долгам бизнеса"
  }
];

const ipFeatures = [
  {
    icon: Scale,
    title: "Единая процедура для всех долгов",
    description: "При банкротстве ИП списываются все долги, как связанные с бизнесом, так и личные"
  },
  {
    icon: Building,
    title: "Особый статус имущества",
    description: "Имущество, используемое для бизнеса, рассматривается отдельно от личного имущества"
  },
  {
    icon: Hourglass,
    title: "Временные ограничения",
    description: "В течение 5 лет после банкротства нельзя повторно регистрироваться как ИП"
  },
  {
    icon: UserCog,
    title: "Защита от кредиторов",
    description: "Прекращение всех исполнительных производств и взысканий с момента принятия заявления"
  }
];

// Данные для вкладки "Юрлица"
const companyBenefits = [
  {
    title: "Законная ликвидация компании с долгами",
    description: "Возможность закрыть компанию, избежав претензий кредиторов и контролирующих органов"
  },
  {
    title: "Минимизация рисков для руководителей",
    description: "Снижение вероятности привлечения к субсидиарной ответственности директоров и учредителей"
  },
  {
    title: "Защита активов",
    description: "При правильном планировании можно защитить ключевые активы компании"
  },
  {
    title: "Контроль над процедурой",
    description: "Возможность влиять на ход процедуры банкротства при выборе дружественного управляющего"
  }
];

const companyProcedures = [
  {
    title: "Наблюдение",
    description: "Временный управляющий анализирует финансовое состояние компании и определяет перспективы восстановления платежеспособности"
  },
  {
    title: "Финансовое оздоровление",
    description: "Применяется, если есть возможность восстановить платежеспособность. Компания продолжает работу под контролем административного управляющего"
  },
  {
    title: "Внешнее управление",
    description: "Назначается внешний управляющий, который разрабатывает и реализует план по восстановлению платежеспособности"
  },
  {
    title: "Конкурсное производство",
    description: "Имущество должника реализуется для удовлетворения требований кредиторов, компания ликвидируется"
  },
  {
    title: "Мировое соглашение",
    description: "Возможно заключение мирового соглашения с кредиторами на любом этапе процедуры банкротства"
  }
];

// Данные для тарифов
const prices = [
  {
    title: "Базовый",
    description: "Для физических лиц с долгами до 500 000 ₽",
    price: "80 000",
    features: [
      "Анализ документов и ситуации",
      "Консультации на всех этапах",
      "Подготовка и подача заявления в суд",
      "Представление интересов в суде",
      "Сопровождение процедуры до списания долгов"
    ],
    featured: false
  },
  {
    title: "Стандарт",
    description: "Для физических лиц с долгами до 3 000 000 ₽",
    price: "120 000",
    features: [
      "Все услуги тарифа «Базовый»",
      "Расширенный анализ имущества и сделок",
      "Разработка стратегии защиты имущества",
      "Работа с кредиторами и приставами",
      "Решение нестандартных ситуаций",
      "Ускоренное проведение процедуры"
    ],
    featured: true
  },
  {
    title: "Премиум",
    description: "Для предпринимателей и юридических лиц",
    price: "от 200 000",
    features: [
      "Все услуги тарифа «Стандарт»",
      "Защита от субсидиарной ответственности",
      "Работа со сложными типами активов",
      "Индивидуальное сопровождение партнером",
      "Приоритетная поддержка 24/7",
      "Полное юридическое сопровождение"
    ],
    featured: false
  }
];

export default Services;
