import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-background relative overflow-hidden scroll-mt-24"
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
          {experiences.map((exp, index) => (
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
              <div className="rounded-2xl bg-card/40 border border-white/10 hover:border-primary/40 backdrop-blur-md p-6 sm:p-8 transition-[border-color,box-shadow] duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base sm:text-lg font-medium text-accent mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
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
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 my-6">
                  {exp.description.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 opacity-80" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-muted-foreground group-hover:border-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
