
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  featured: boolean;
}

const PricingCard = ({ title, description, price, features, featured }: PricingCardProps) => {
  return (
    <Card className={`${featured ? 'border-primary shadow-md relative' : ''}`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
          Популярный
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1">₽</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${featured ? '' : 'variant-outline'}`}>
          Выбрать тариф
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
