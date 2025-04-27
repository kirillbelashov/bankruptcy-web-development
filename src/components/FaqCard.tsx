
import { HelpCircle } from "lucide-react";

interface FaqProps {
  question: string;
  answer: string;
}

const FaqCard = ({ question, answer }: FaqProps) => {
  return (
    <div className="bg-muted/50 rounded-xl p-6 border border-border">
      <div className="flex items-start">
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-4 shrink-0">
          <HelpCircle className="h-4 w-4 text-accent" />
        </div>
        <div>
          <h4 className="font-medium mb-2">{question}</h4>
          <p className="text-sm text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
