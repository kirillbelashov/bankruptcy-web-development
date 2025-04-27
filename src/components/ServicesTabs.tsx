
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Building, UserCog } from "lucide-react";
import PhysicalTab from "./PhysicalTab";
import IpTab from "./IpTab";
import CompanyTab from "./CompanyTab";

const ServicesTabs = () => {
  return (
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
        
        <TabsContent value="physical">
          <PhysicalTab />
        </TabsContent>
        
        <TabsContent value="ip">
          <IpTab />
        </TabsContent>
        
        <TabsContent value="company">
          <CompanyTab />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ServicesTabs;
