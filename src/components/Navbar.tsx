import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "Cybersecurity", path: "/services/cybersecurity" },
  { name: "AI & Machine Learning", path: "/services/ai-ml" },
  { name: "Cloud Solutions", path: "/services/cloud" },
  { name: "Mobile Development", path: "/services/mobile" },
  { name: "Data Analytics", path: "/services/data-analytics" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg gradient-primary glow-primary flex items-center justify-center font-heading font-bold text-xl">
              H
            </div>
            <span className="font-heading font-bold text-xl hidden md:block group-hover:gradient-text transition-all">
              Horcrux
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button
                variant="ghost"
                className={isActive("/") ? "text-primary" : ""}
              >
                Home
              </Button>
            </Link>
            
            <Link to="/about">
              <Button
                variant="ghost"
                className={isActive("/about") ? "text-primary" : ""}
              >
                About
              </Button>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="glass">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/internship">
              <Button
                variant="ghost"
                className={isActive("/internship") ? "text-primary" : ""}
              >
                Internship
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="hero" className="ml-2">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                >
                  Home
                </Button>
              </Link>
              
              <Link to="/about" onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                >
                  About
                </Button>
              </Link>

              <div className="pl-4 pt-2">
                <p className="text-sm text-muted-foreground mb-2">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start mb-1"
                    >
                      {service.name}
                    </Button>
                  </Link>
                ))}
              </div>

              <Link to="/internship" onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                >
                  Internship
                </Button>
              </Link>

              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="hero" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
