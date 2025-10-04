import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl">
            Let's Build Something{" "}
            <span className="gradient-text">Great Together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Ready to transform your digital presence? Get in touch with our team of experts.
          </p>
          
          <Link to="/contact">
            <Button variant="hero" size="lg" className="group mt-4">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
