
import { CheckCircle2 } from "lucide-react";

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem = ({ title, description }: BenefitItemProps) => {
  return (
    <div className="flex items-start">
      <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
