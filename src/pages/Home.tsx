import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollScene } from "@/components/3d/ScrollScene";
import { ScrollContent } from "@/components/3d/ScrollContent";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";
import { 
  Code, 
  Shield, 
  Brain, 
  Cloud, 
  Smartphone, 
  BarChart3,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="relative">
      {/* Fixed 3D Background */}
      <ScrollScene />
      
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>
      
      {/* Scroll Content Overlay */}
      <ScrollContent />

      {/* Traditional Sections (appear after scroll experience) */}
      <div className="relative z-10 bg-background/95 backdrop-blur-xl">
        {/* Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 space-y-4"
            >
              <h2 className="font-heading font-bold text-4xl md:text-5xl">
                Our <span className="gradient-cosmic-text">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard {...service} />
                </motion.div>
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
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="font-heading font-bold text-4xl md:text-5xl">
                  Innovating for a{" "}
                  <span className="gradient-cosmic-text">Digital Future</span>
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
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-strong rounded-2xl p-8 space-y-6 neon-border">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl gradient-cosmic glow-cyber flex items-center justify-center">
                      <Brain className="w-8 h-8" />
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
