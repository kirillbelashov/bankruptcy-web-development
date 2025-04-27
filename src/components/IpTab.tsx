
import ServiceContent from "./ServiceContent";
import IpFeatures from "./IpFeatures";
import { ipBenefits, ipFeatures } from "./data/servicesData";

const IpTab = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ServiceContent
          title="Банкротство индивидуальных предпринимателей"
          description="Банкротство ИП – особая процедура, которая позволяет предпринимателям 
          списать как бизнес-долги, так и личные обязательства, защитить имущество 
          и начать бизнес заново."
          benefits={ipBenefits}
        />
        <IpFeatures features={ipFeatures} />
      </div>
    </div>
  );
};

export default IpTab;
