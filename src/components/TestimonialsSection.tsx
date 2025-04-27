
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

export interface Testimonial {
  type: string;
  name: string;
  avatar: string;
  location: string;
  text: string;
  debtCleared: string;
  date: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
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
              <TestimonialCard key={index} {...testimonial} />
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
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ip" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.filter(t => t.type === "ip").map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="company" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.filter(t => t.type === "company").map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default TestimonialsSection;
