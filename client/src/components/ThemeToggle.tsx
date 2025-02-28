import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import Card3D from "./Card3D";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Card3D className="fixed bottom-4 right-4 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-3 rounded-lg bg-background/30 backdrop-blur-sm border border-primary/10"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 180 : 0,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {theme === "dark" ? (
            <Moon className="w-5 h-5 text-primary" />
          ) : (
            <Sun className="w-5 h-5 text-primary" />
          )}
        </motion.div>
      </motion.button>
    </Card3D>
  );
}