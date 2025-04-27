
import { LucideIcon } from "lucide-react";

interface FeaturesProps {
  features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
}

const IpFeatures = ({ features }: FeaturesProps) => {
  return (
    <div className="bg-muted p-8 rounded-xl">
      <h3 className="text-xl font-medium mb-6">Особенности банкротства ИП</h3>
      <ul className="space-y-6">
        {features.map((feature, index) => (
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
  );
};

export default IpFeatures;
