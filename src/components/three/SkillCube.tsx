import React from "react";
import { motion } from "framer-motion";

interface SkillCubeProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

export default function SkillCube({ icon: Icon, color }: SkillCubeProps) {
  return (
    <motion.div
      className="relative w-16 h-16 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color}25, ${color}08)`,
        border: `1px solid ${color}40`,
        boxShadow: `0 4px 20px -4px ${color}30`,
      }}
      whileHover={{ y: -4, rotateY: 15 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none"
        style={{ background: `${color}30` }}
      />
      <div className="relative z-10 text-2xl flex items-center justify-center" style={{ color }}>
        <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
      </div>
    </motion.div>
  );
}
