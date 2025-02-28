import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

export default function Card3D({ children, className }: Card3DProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-xl backdrop-blur-sm transition-all duration-200",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: mousePosition.y * 10,
        rotateY: mousePosition.x * -10,
        transformPerspective: 1000,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl"
        animate={{
          background: `radial-gradient(circle at ${
            (mousePosition.x + 0.5) * 100
          }% ${(mousePosition.y + 0.5) * 100}%, rgba(0,0,0,0.1), transparent)`,
        }}
      />
    </motion.div>
  );
}
