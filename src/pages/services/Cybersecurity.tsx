import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from "lucide-react";

const offerings = [
  "Security Audits & Assessments",
  "Penetration Testing",
  "Threat Detection & Monitoring",
  "Data Protection & Encryption",
  "Compliance Management (GDPR, HIPAA)",
  "Security Training & Awareness",
];

const technologies = [
  "Firewalls", "IDS/IPS", "SIEM", "Encryption", 
  "VPN", "Zero Trust", "SOC", "Vulnerability Scanning"
];

const Cybersecurity = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <div className="w-16 h-16 rounded-xl bg-secondary/20 border-2 border-secondary glow-secondary flex items-center justify-center">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              
              <h1 className="font-heading font-bold text-5xl md:text-6xl">
                <span className="gradient-text">Cybersecurity</span> Solutions
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Comprehensive protection for your digital assets and sensitive data
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="glass rounded-2xl p-8 space-y-6 animate-fade-in">
                <h2 className="font-heading font-bold text-3xl">Overview</h2>
                <p className="text-lg text-muted-foreground">
                  In an era of increasing cyber threats, protecting your digital infrastructure is not optional — it's essential. Our cybersecurity services provide comprehensive protection against evolving threats, ensuring your business continuity and safeguarding your reputation.
                </p>
                <p className="text-lg text-muted-foreground">
                  We employ industry-leading practices and cutting-edge technologies to identify vulnerabilities, prevent breaches, and respond rapidly to security incidents.
                </p>
              </div>

              {/* Key Offerings */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="font-heading font-bold text-3xl mb-6">
                  Key <span className="gradient-text">Offerings</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {offerings.map((offering) => (
                    <div key={offering} className="flex items-start space-x-3 glass rounded-xl p-4">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{offering}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Lock, title: "Data Protection", description: "End-to-end encryption" },
                  { icon: Eye, title: "24/7 Monitoring", description: "Continuous threat detection" },
                  { icon: AlertTriangle, title: "Rapid Response", description: "Incident management" },
                ].map((feature, index) => (
                  <div
                    key={feature.title}
                    className="glass rounded-2xl p-6 text-center space-y-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 border-2 border-secondary glow-secondary flex items-center justify-center mx-auto">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="animate-fade-in">
                <h2 className="font-heading font-bold text-3xl mb-6">
                  Tools & <span className="gradient-text">Technologies</span>
                </h2>
                <div className="glass rounded-2xl p-8">
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20 text-sm font-medium hover:bg-secondary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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

export default Cybersecurity;
