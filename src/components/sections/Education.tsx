import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education } from "@/data";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden scroll-mt-24" aria-label="Academic Background & Education">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] font-mono tracking-[0.25em] uppercase mb-4 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
            <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
            Academy // Formal Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground [text-wrap:balance]">
            Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto [text-wrap:balance]">
            Formal foundations in Computer Science, Software Engineering, and Web Technologies.
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-card/40 border border-white/10 hover:border-primary/40 backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-accent mt-0.5">
                    {edu.institution}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="w-fit text-xs font-mono px-2.5 py-1 bg-primary/10 text-primary border-primary/20 tabular-nums"
                >
                  <Calendar className="w-3 h-3 mr-1 inline" aria-hidden="true" />
                  {edu.period}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
