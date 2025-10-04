import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Target, Eye, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technology and creative solutions."
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your success is our priority. We build lasting partnerships based on trust."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering exceptional quality in every project, every time."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication and honest collaboration throughout the journey."
  },
];

const About = () => {
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
                About <span className="gradient-text">Horcrux</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're a team of innovators, developers, and strategists passionate about transforming businesses through technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass rounded-2xl p-8 space-y-4 animate-fade-in hover:glow-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-lg gradient-primary glow-primary flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="font-heading font-bold text-3xl">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  To empower businesses of all sizes with innovative digital solutions that drive growth, efficiency, and competitive advantage in an increasingly connected world.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 space-y-4 animate-fade-in hover:glow-accent transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-lg gradient-secondary glow-accent flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="font-heading font-bold text-3xl">Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  To be the leading technology partner for businesses worldwide, known for our innovation, reliability, and commitment to excellence in every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4 animate-fade-in">
              <h2 className="font-heading font-bold text-4xl md:text-5xl">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="glass rounded-2xl p-6 text-center space-y-4 animate-fade-in hover:bg-card/60 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary glow-primary flex items-center justify-center mx-auto">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-center">
                Our <span className="gradient-text">Story</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded with a vision to bridge the gap between innovative technology and practical business solutions, Horcrux Techventures has grown from a small team of passionate developers into a full-service digital transformation partner.
                </p>
                
                <p>
                  Over the years, we've had the privilege of working with businesses across various industries, helping them navigate the complexities of digital transformation. From startups looking to make their mark to established enterprises modernizing their infrastructure, we've been there every step of the way.
                </p>
                
                <p>
                  Today, we're proud to be at the forefront of technological innovation, constantly exploring new possibilities in AI, cloud computing, cybersecurity, and beyond. Our commitment to excellence and our passion for technology continue to drive us forward as we help shape the digital future.
                </p>
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

export default About;
