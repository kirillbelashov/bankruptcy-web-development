
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceContent from "./ServiceContent";
import PhysicalStages from "./PhysicalStages";
import { physicalBenefits, physicalStages, physicalInfo, physicalFaqs } from "./data/servicesData";

const PhysicalTab = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ServiceContent 
          title="Банкротство физических лиц"
          description="Банкротство физических лиц – это законная процедура, позволяющая гражданам, 
          которые не в состоянии погасить свои долги, списать их и начать финансовую 
          жизнь с чистого листа."
          benefits={physicalBenefits}
        />
        <PhysicalStages stages={physicalStages} />
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
    </div>
  );
};

export default PhysicalTab;
