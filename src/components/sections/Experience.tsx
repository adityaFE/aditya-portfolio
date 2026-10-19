import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown } from "lucide-react";
import { experiences } from "@/data";

export default function Experience() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleExperience = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden scroll-mt-24"
      aria-label="Work Experience & Career Journey"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-mono tracking-[0.25em] uppercase mb-4 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
            <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
            Chronology // Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground [text-wrap:balance]">
            Work Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto [text-wrap:balance]">
            Demonstrated history of engineering high-impact web products, scaling frontend architectures, and collaborating across cross-functional teams.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline marker */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-[transform,background-color] duration-300 shadow-lg shadow-primary/30" aria-hidden="true" />

                {/* Card content */}
                <div
                  className="rounded-2xl bg-card/40 border border-white/10 hover:border-primary/40 backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:shadow-xl hover:shadow-primary/5"
                >
                  <button
                    className="w-full text-left p-6 sm:p-8 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/50 outline-none"
                    onClick={() => toggleExperience(index)}
                    aria-expanded={isOpen}
                    aria-label={`${exp.role} at ${exp.company} ${isOpen ? 'Collapse' : 'Expand'}`}
                  >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-mono tracking-wider border border-primary/20 shrink-0">
                          {isOpen ? "Collapse" : "Expand Details"}
                        </span>
                      </div>
                      <p className="text-base sm:text-lg font-medium text-accent">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3">
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
                          <MapPin className="w-3 h-3 text-muted-foreground/80" aria-hidden="true" />
                          {exp.location}
                        </span>
                      )}
                      <Badge
                        variant="outline"
                        className="text-xs font-mono px-2.5 py-1 bg-primary/10 text-primary border-primary/20 tabular-nums"
                      >
                        <Calendar className="w-3 h-3 mr-1 inline" aria-hidden="true" />
                        {exp.period}
                      </Badge>

                      {/* Accordion Toggle Arrow Indicator */}
                      <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-transform duration-300 ${isOpen ? "rotate-180 bg-primary/10 text-primary border-primary/20" : ""}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Technologies Preview (Always visible) */}
                  <div className="pt-4 mt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </button>

                  {/* Collapsible Detailed Experience Bullets */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 pt-6 mt-6 border-t border-white/10">
                          {exp.description.map((bullet) => (
                            <li
                              key={bullet.slice(0, 30)}
                              className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 opacity-90" aria-hidden="true" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
