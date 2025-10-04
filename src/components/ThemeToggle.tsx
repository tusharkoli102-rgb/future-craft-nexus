import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full glass p-1 transition-all duration-300 hover:glow-cyber"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-5 h-5 rounded-full bg-gradient-cosmic flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === "dark" ? (
          <Moon className="w-3 h-3 text-foreground" />
        ) : (
          <Sun className="w-3 h-3 text-foreground" />
        )}
      </motion.div>
    </motion.button>
  );
};
