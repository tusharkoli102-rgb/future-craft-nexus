import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Rocket, Code } from 'lucide-react';

export const ScrollContent = () => {
  const { scrollYProgress } = useScroll();

  const section1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const section2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const section3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  const section4Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.95], [0, 1, 1]);

  return (
    <div className="relative z-10 pointer-events-none" style={{ minHeight: '400vh' }}>
      {/* Section 1: Hero */}
      <motion.section
        style={{ opacity: section1Opacity }}
        className="min-h-screen flex items-center justify-center px-4 sticky top-0"
      >
        <div className="max-w-4xl text-center space-y-6 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 text-sm neon-border"
          >
            <Sparkles className="w-5 h-5 text-neon-cyan animate-pulse-glow" />
            <span className="neon-text">Experience The Future</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-heading font-bold text-6xl md:text-8xl leading-tight"
          >
            <span className="gradient-cosmic-text">Digital Evolution</span>
            <br />
            Starts Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Scroll to witness the transformation of technology and humanity merging into one seamless experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Link to="/services">
              <Button variant="hero" size="lg" className="group">
                Begin Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="pt-12"
          >
            <div className="w-6 h-10 rounded-full border-2 border-neon-cyan/50 flex items-start justify-center p-2 mx-auto glow-neon">
              <motion.div
                animate={{ 
                  height: ["12px", "6px", "12px"],
                  opacity: [1, 0.3, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 rounded-full bg-neon-cyan"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Technology Integration */}
      <motion.section
        style={{ opacity: section2Opacity }}
        className="min-h-screen flex items-center justify-center px-4 sticky top-0"
      >
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="glass-strong rounded-3xl p-8 space-y-4 neon-border pointer-events-auto">
              <div className="w-16 h-16 rounded-2xl gradient-neon glow-neon-strong flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-background" />
              </div>
              <h3 className="font-heading font-bold text-3xl gradient-cosmic-text">
                Quantum Processing
              </h3>
              <p className="text-muted-foreground text-lg">
                Harness the power of next-generation computing to solve impossible problems in milliseconds.
              </p>
            </motion.div>

            <motion.div className="glass-strong rounded-3xl p-8 space-y-4 neon-border pointer-events-auto">
              <div className="w-16 h-16 rounded-2xl gradient-cosmic glow-cyber flex items-center justify-center mb-4">
                <Code className="w-8 h-8 text-background" />
              </div>
              <h3 className="font-heading font-bold text-3xl gradient-cosmic-text">
                Neural Networks
              </h3>
              <p className="text-muted-foreground text-lg">
                AI systems that learn, adapt, and evolve with every interaction, creating infinite possibilities.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Data Visualization */}
      <motion.section
        style={{ opacity: section3Opacity }}
        className="min-h-screen flex items-center justify-center px-4 sticky top-0"
      >
        <div className="max-w-4xl text-center space-y-8 pointer-events-auto">
          <div className="glass-strong rounded-3xl p-12 space-y-6 neon-border">
            <Rocket className="w-16 h-16 mx-auto text-neon-cyan glow-neon-strong" />
            <h2 className="font-heading font-bold text-5xl md:text-6xl gradient-cosmic-text">
              Beyond Boundaries
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just building technology — we're crafting experiences that transcend the digital realm and redefine what's possible.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '10M+', label: 'Users' },
                { value: '150+', label: 'Countries' },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-4xl font-bold gradient-cosmic-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4: Final CTA */}
      <motion.section
        style={{ opacity: section4Opacity }}
        className="min-h-screen flex items-center justify-center px-4 sticky top-0"
      >
        <div className="max-w-3xl text-center space-y-8 pointer-events-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-heading font-bold text-6xl md:text-7xl gradient-cosmic-text">
              Ready to Evolve?
            </h2>
            <p className="text-2xl text-muted-foreground">
              Join us in shaping the future of digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
