import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

export const ServiceCard = ({ title, description, icon: Icon, path }: ServiceCardProps) => {
  return (
    <Link to={path}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 hover:glow-cyber h-full relative overflow-hidden"
      >
        {/* Animated border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1,
          }}
        />
        
        <div className="flex flex-col h-full relative z-10">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-lg gradient-cosmic glow-cyber flex items-center justify-center mb-4"
          >
            <Icon className="w-6 h-6 text-foreground" />
          </motion.div>
          
          <h3 className="font-heading font-semibold text-xl mb-2 group-hover:gradient-cosmic-text transition-all">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            {description}
          </p>
          
          <Button variant="ghost" className="w-full group-hover:text-primary group-hover:bg-primary/10 transition-all">
            Learn More
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
        </div>
      </motion.div>
    </Link>
  );
};
