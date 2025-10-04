import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { 
  Code, 
  Shield, 
  Brain, 
  Cloud, 
  Smartphone, 
  BarChart3,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience.",
    icon: Code,
    path: "/services/web-development"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security audits, threat detection, and protection strategies to safeguard your digital assets.",
    icon: Shield,
    path: "/services/cybersecurity"
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems and predictive models that learn from data to automate processes and drive innovation.",
    icon: Brain,
    path: "/services/ai-ml"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud architecture, migration services, and infrastructure management for modern businesses.",
    icon: Cloud,
    path: "/services/cloud"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    icon: Smartphone,
    path: "/services/mobile"
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence.",
    icon: BarChart3,
    path: "/services/data-analytics"
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="font-heading font-bold text-5xl md:text-6xl">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive technology solutions designed to accelerate your digital transformation journey
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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

        {/* Process Section */}
        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-4 animate-fade-in">
                <h2 className="font-heading font-bold text-4xl md:text-5xl">
                  How We <span className="gradient-text">Work</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our proven process ensures successful project delivery every time
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Discover", description: "Understanding your needs and goals" },
                  { step: "02", title: "Design", description: "Crafting the perfect solution" },
                  { step: "03", title: "Develop", description: "Building with precision and care" },
                  { step: "04", title: "Deploy", description: "Launching and ongoing support" },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="text-center space-y-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-5xl font-heading font-bold gradient-text">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-semibold text-xl">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
