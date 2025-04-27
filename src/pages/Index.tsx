
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, MessagesSquare, ThumbsUp, HelpCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        
        {/* Отзывы клиентов */}
        <section className="container py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium">Что говорят наши клиенты</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Истории успеха</h2>
            <p className="text-muted-foreground mt-4">
              Более 1500 клиентов уже освободились от долгов с нашей помощью и начали жизнь с чистого листа
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">Все отзывы</TabsTrigger>
                <TabsTrigger value="physical">Физ. лица</TabsTrigger>
                <TabsTrigger value="ip">ИП</TabsTrigger>
                <TabsTrigger value="company">Компании</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-4">{testimonial.text}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>Списано: {testimonial.debtCleared}</span>
                      </div>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline">
                  Смотреть все отзывы
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="physical" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.filter(t => t.type === "physical").map((testimonial, index) => (
                  <div key={index} className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-4">{testimonial.text}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>Списано: {testimonial.debtCleared}</span>
                      </div>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ip" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.filter(t => t.type === "ip").map((testimonial, index) => (
                  <div key={index} className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-4">{testimonial.text}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>Списано: {testimonial.debtCleared}</span>
                      </div>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="company" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.filter(t => t.type === "company").map((testimonial, index) => (
                  <div key={index} className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-4">{testimonial.text}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>Списано: {testimonial.debtCleared}</span>
                      </div>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* FAQ секция */}
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
              <div key={index} className="bg-muted/50 rounded-xl p-6 border border-border">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 shrink-0">
                    <HelpCircle className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">
              Смотреть все вопросы
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
        
        {/* CTA секция */}
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
      </main>
      
      <Footer />
    </div>
  );
};

const testimonials = [
  {
    type: "physical",
    name: "Алексей М.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
    location: "Москва",
    text: "Попал в сложную ситуацию с кредитами после потери работы. Юристы «ФинЗащиты» помогли мне пройти процедуру банкротства за 5 месяцев. Сейчас я свободен от долгов и начинаю новую жизнь!",
    debtCleared: "1,2 млн ₽",
    date: "Март 2025"
  },
  {
    type: "ip",
    name: "Марина К.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D",
    location: "Санкт-Петербург",
    text: "Моё ИП обанкротилось после пандемии, накопились долги перед поставщиками и налоговой. Команда «ФинЗащиты» разработала грамотную стратегию и защитила моё имущество. Благодарна за профессионализм!",
    debtCleared: "3,5 млн ₽",
    date: "Январь 2025"
  },
  {
    type: "company",
    name: "Сергей В.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    location: "Екатеринбург",
    text: "Наша компания столкнулась с финансовыми трудностями и огромными долгами. Юристы «ФинЗащиты» провели процедуру банкротства юрлица, минимизировав риски для директора. Рекомендую всем!",
    debtCleared: "12 млн ₽",
    date: "Февраль 2025"
  }
];

const faqs = [
  {
    question: "Сколько по времени длится процедура банкротства?",
    answer: "Срок процедуры банкротства физических лиц составляет от 6 до 12 месяцев, для юридических лиц — от 12 до 24 месяцев. Сроки зависят от сложности дела и количества кредиторов."
  },
  {
    question: "Можно ли сохранить имущество при банкротстве?",
    answer: "Да, законом предусмотрен перечень имущества, которое не может быть реализовано при банкротстве, включая единственное жилье, предметы обихода и профессиональной деятельности."
  },
  {
    question: "Какие последствия банкротства для физлица?",
    answer: "После завершения процедуры банкротства гражданин не может занимать руководящие должности в течение 3 лет, в течение 5 лет должен указывать статус банкрота при получении кредита."
  },
  {
    question: "Сколько стоит процедура банкротства?",
    answer: "Стоимость услуг зависит от сложности дела и объема долгов. Мы предлагаем гибкие условия оплаты и рассрочку. Точную стоимость можно узнать после бесплатной консультации."
  }
];

export default Index;
