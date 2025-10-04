import { motion } from "framer-motion";

export const CyberGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Animated scan lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-32"
        animate={{
          y: ["-100%", "200%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Floating energy orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary glow-cyber"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/3 w-3 h-3 rounded-full bg-accent glow-neon-magenta"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-secondary glow-secondary"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Corner accent lines */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
};
