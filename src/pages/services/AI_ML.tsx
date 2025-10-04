import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Brain, Bot, TrendingUp, Target, CheckCircle } from "lucide-react";

const offerings = [
  "Machine Learning Model Development",
  "Natural Language Processing (NLP)",
  "Computer Vision Solutions",
  "Predictive Analytics",
  "Recommendation Systems",
  "AI Strategy & Consulting",
];

const technologies = [
  "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", 
  "Python", "Keras", "Hugging Face", "LangChain"
];

const AI_ML = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <div className="w-16 h-16 rounded-xl gradient-secondary glow-accent flex items-center justify-center">
                <Brain className="w-8 h-8" />
              </div>
              
              <h1 className="font-heading font-bold text-5xl md:text-6xl">
                AI & <span className="gradient-text">Machine Learning</span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Building intelligent systems that evolve with your business
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
                  Artificial Intelligence and Machine Learning are no longer future technologies — they're reshaping businesses today. We help organizations harness the power of AI to automate processes, gain deeper insights, and create innovative solutions that give them a competitive edge.
                </p>
                <p className="text-lg text-muted-foreground">
                  From predictive analytics to natural language processing, our AI solutions are tailored to solve real business challenges and deliver measurable results.
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
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{offering}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Bot, title: "Automation", description: "Intelligent process automation" },
                  { icon: TrendingUp, title: "Predictive Analytics", description: "Data-driven forecasting" },
                  { icon: Target, title: "Personalization", description: "Tailored user experiences" },
                ].map((feature, index) => (
                  <div
                    key={feature.title}
                    className="glass rounded-2xl p-6 text-center space-y-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg gradient-secondary glow-accent flex items-center justify-center mx-auto">
                      <feature.icon className="w-6 h-6" />
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
                        className="px-4 py-2 rounded-lg bg-accent/10 border border-accent/20 text-sm font-medium hover:bg-accent/20 transition-colors"
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

export default AI_ML;
