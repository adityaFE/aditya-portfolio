import { motion } from "framer-motion";
import SkillReel from "../SkillReel";
import { skills } from "@/data";
import { Sparkles } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-background relative overflow-hidden scroll-mt-24"
      aria-label="Technical Skills and Stack"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-mono tracking-[0.25em] uppercase mb-4 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            Capabilities // Tooling & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground [text-wrap:balance]">
            Technical Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto [text-wrap:balance]">
            Modern technologies and precision engineering practices leveraged to ship fast, accessible, and resilient applications.
          </p>
        </motion.div>

        <SkillReel skills={skills} speed={35} />

        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" aria-hidden="true" />
      </div>
    </section>
  );
}
