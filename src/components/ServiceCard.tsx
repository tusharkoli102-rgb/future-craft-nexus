import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

export const ServiceCard = ({ title, description, icon: Icon, path }: ServiceCardProps) => {
  return (
    <Link to={path}>
      <div className="group glass rounded-2xl p-6 hover:bg-card/60 transition-all duration-300 hover:glow-primary animate-fade-in h-full">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 rounded-lg gradient-primary glow-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6" />
          </div>
          
          <h3 className="font-heading font-semibold text-xl mb-2 group-hover:gradient-text transition-all">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            {description}
          </p>
          
          <Button variant="ghost" className="w-full group-hover:text-primary">
            Learn More
          </Button>
        </div>
      </div>
    </Link>
  );
};
