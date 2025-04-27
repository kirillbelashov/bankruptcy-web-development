
import ServiceContent from "./ServiceContent";
import CompanyProcedures from "./CompanyProcedures";
import { companyBenefits, companyProcedures } from "./data/servicesData";

const CompanyTab = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ServiceContent
          title="Банкротство юридических лиц"
          description="Банкротство юридического лица – это процедура, которая помогает компаниям, 
          оказавшимся в сложной финансовой ситуации, законно ликвидировать бизнес 
          и минимизировать риски для руководителей."
          benefits={companyBenefits}
        />
        <CompanyProcedures procedures={companyProcedures} />
      </div>
    </div>
  );
};

export default CompanyTab;
