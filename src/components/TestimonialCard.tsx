
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp } from "lucide-react";

interface TestimonialProps {
  name: string;
  avatar: string;
  location: string;
  text: string;
  debtCleared: string;
  date: string;
}

const TestimonialCard = ({ name, avatar, location, text, debtCleared, date }: TestimonialProps) => {
  return (
    <div className="bg-muted/50 rounded-xl p-6 border border-border">
      <div className="flex items-center mb-4">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
      
      <p className="text-sm mb-4">{text}</p>
      
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center">
          <ThumbsUp className="h-4 w-4 mr-1" />
          <span>Списано: {debtCleared}</span>
        </div>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
