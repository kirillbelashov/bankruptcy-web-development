
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Award, MapPin, Clock, ShieldCheck, BookOpen, FileText } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Баннер */}
        <div className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4">О компании</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Мы помогаем людям избавиться от долгов и начать новую жизнь
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Компания «ФинЗащита» – это команда профессионалов с многолетним опытом в сфере банкротства физических и юридических лиц.
              </p>
              <Button size="lg">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
        
        {/* История компании */}
        <section className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-medium">Наша история</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">
                От небольшой юридической фирмы до лидера рынка
              </h2>
              <p className="text-muted-foreground mb-6">
                Компания «ФинЗащита» была основана в 2018 году группой опытных юристов, 
                объединенных общей целью – помогать людям выходить из сложных финансовых ситуаций. 
                Изначально мы специализировались на защите прав заемщиков, но с принятием закона 
                о банкротстве физических лиц сфокусировались на этом направлении.
              </p>
              <p className="text-muted-foreground mb-6">
                За 7 лет работы мы помогли более 1500 клиентам списать долги на общую сумму 
                свыше 3 миллиардов рублей. Сегодня «ФинЗащита» – это команда из 25 профессионалов: 
                юристов, арбитражных управляющих, финансовых аналитиков и консультантов.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">7+</p>
                    <p className="text-sm text-muted-foreground">Лет опыта</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5</p>
                    <p className="text-sm text-muted-foreground">Городов</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">1500+</p>
                    <p className="text-sm text-muted-foreground">Клиентов</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Команда ФинЗащиты" 
                  className="rounded-xl object-cover h-48 w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Офис ФинЗащиты" 
                  className="rounded-xl object-cover h-56 w-full"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Консультация юриста" 
                  className="rounded-xl object-cover h-56 w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1453906971074-ce568cccbc63?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Документы по банкротству" 
                  className="rounded-xl object-cover h-48 w-full"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full"></div>
            </div>
          </div>
        </section>
        
        {/* Ценности компании */}
        <section className="bg-muted py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">Наши ценности</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Принципы нашей работы
              </h2>
              <p className="text-muted-foreground">
                В основе нашей деятельности лежат ключевые ценности, которые определяют подход к работе с каждым клиентом
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-none bg-background">
                  <CardContent className="pt-6">
                    <div className="mb-4 w-12 h-12 rounded-lg flex items-center justify-center bg-accent/10">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Команда */}
        <section className="container py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Наша команда</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Эксперты своего дела</h2>
            <p className="text-muted-foreground">
              В нашей команде работают опытные юристы, арбитражные управляющие и финансовые консультанты
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage src={member.photo} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-sm text-accent mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Сертификаты */}
        <section className="bg-muted py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">Наши достижения</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Сертификаты и награды
              </h2>
              <p className="text-muted-foreground">
                Профессионализм и качество наших услуг подтверждены многочисленными сертификатами и наградами
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-background rounded-lg p-4 flex items-center justify-center h-32">
                  <FileText className="h-12 w-12 text-accent opacity-80" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const values = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent" />,
    title: "Ответственность",
    description: "Мы несем полную ответственность за результат работы и всегда доводим дело до конца."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-accent" />,
    title: "Профессионализм",
    description: "Наши специалисты постоянно повышают квалификацию и следят за изменениями в законодательстве."
  },
  {
    icon: <Award className="h-6 w-6 text-accent" />,
    title: "Честность",
    description: "Мы всегда даем реалистичную оценку ситуации и работаем на прозрачных условиях."
  },
  {
    icon: <Clock className="h-6 w-6 text-accent" />,
    title: "Оперативность",
    description: "Мы ценим время наших клиентов и стремимся решить проблему в кратчайшие сроки."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent" />,
    title: "Конфиденциальность",
    description: "Мы гарантируем полную конфиденциальность всей информации о клиенте и его деле."
  },
  {
    icon: <Award className="h-6 w-6 text-accent" />,
    title: "Клиентоориентированность",
    description: "Индивидуальный подход к каждому клиенту и его ситуации — наш главный приоритет."
  }
];

const team = [
  {
    name: "Александр Петров",
    position: "Генеральный директор",
    description: "Более 15 лет опыта в юриспруденции, специализация в области банкротства",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Елена Соколова",
    position: "Руководитель юридического отдела",
    description: "Эксперт по банкротству физических лиц, автор методических пособий",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Дмитрий Иванов",
    position: "Арбитражный управляющий",
    description: "Специалист по сложным делам о банкротстве компаний и предпринимателей",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    name: "Наталья Смирнова",
    position: "Финансовый аналитик",
    description: "Разрабатывает стратегии реструктуризации долгов и финансового оздоровления",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

export default About;
