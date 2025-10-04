import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { 
  Code, 
  Shield, 
  Brain, 
  Cloud, 
  Smartphone, 
  BarChart3,
  Palette,
  Users,
  CheckCircle
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies for optimal performance.",
    icon: Code,
    path: "/services/web-development"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and sensitive data.",
    icon: Shield,
    path: "/services/cybersecurity"
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn, adapt, and drive business innovation.",
    icon: Brain,
    path: "/services/ai-ml"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    icon: Cloud,
    path: "/services/cloud"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    path: "/services/mobile"
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics.",
    icon: BarChart3,
    path: "/services/data-analytics"
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4 animate-fade-in">
              <h2 className="font-heading font-bold text-4xl md:text-5xl">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* About Preview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading font-bold text-4xl md:text-5xl">
                  Innovating for a{" "}
                  <span className="gradient-text">Digital Future</span>
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  At Horcrux Techventures, we blend creativity with technology to deliver solutions that don't just meet expectations — they exceed them.
                </p>

                <div className="space-y-3">
                  {["Innovation-Driven Development", "Client-Centric Approach", "Expert Team"].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="glass rounded-2xl p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl gradient-primary glow-primary flex items-center justify-center">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl">Our Mission</h3>
                      <p className="text-sm text-muted-foreground">Empowering businesses through technology</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    We're committed to building digital solutions that drive real business value and create lasting impact in an ever-evolving technological landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
