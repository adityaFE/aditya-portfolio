import { motion } from "framer-motion";
import { User, Code2, Zap, Palette, Wrench } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Architecture",
      description: "Designing modular, type-safe, and scalable web apps using React, TypeScript, and statecharts.",
    },
    {
      icon: Zap,
      title: "Performance & DX",
      description: "Optimizing bundle sizes, Core Web Vitals, build tooling with Vite, and lightning-fast HMR.",
    },
    {
      icon: Palette,
      title: "Design Systems & UI",
      description: "Crafting accessible, pixel-perfect design systems with Tailwind CSS and fluid Framer Motion animations.",
    },
    {
      icon: Wrench,
      title: "Automated Testing",
      description: "End-to-end BDD testing with Cypress, Cucumber, and Jest to ensure zero-regression deployments.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden scroll-mt-24"
      aria-label="About Aditya Anand"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-mono tracking-[0.25em] uppercase mb-4 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
            <User className="w-3.5 h-3.5" aria-hidden="true" />
            Dossier // Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground [text-wrap:balance]">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto [text-wrap:balance]">
            Senior Frontend Engineer dedicated to architecting ultra-responsive digital products through clean code and modern design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-2xl bg-card/50 border border-white/10 hover:border-white/20 backdrop-blur-md p-8 sm:p-10 space-y-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-foreground [text-wrap:balance]">
              Passionate about engineering seamless, high-performance web experiences.
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              With over 4+ years of professional engineering experience, I specialize in architecting high-performance web applications using React, TypeScript, Vite, and modern state management ecosystems.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              I believe great software lives at the intersection of technical rigor and bespoke visual precision. My approach prioritizes strict type safety, responsive performance, accessible UX (WCAG), and frictionless developer workflows.
            </p>

            {/* Telemetry HUD Gauges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-[border-color,background-color] duration-300">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-primary tabular-nums">4+</div>
                <div className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase mt-1">Years Exp</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-[border-color,background-color] duration-300">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tabular-nums">15+</div>
                <div className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase mt-1">Shipped</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/40 transition-[border-color,background-color] duration-300">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">95%+</div>
                <div className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase mt-1">Coverage</div>
              </div>
            </div>
          </motion.div>

          {/* Competency Highlights */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card/50 border border-white/10 hover:border-primary/40 backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-[background-color,color] duration-300">
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-foreground text-base mt-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
