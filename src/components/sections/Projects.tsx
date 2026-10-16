import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers, Sparkles } from "lucide-react";
import { projects, Project } from "@/data";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "featured"
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <section
      id="projects"
      className="py-24 bg-background relative overflow-hidden scroll-mt-24"
      aria-label="Featured Projects and Works"
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
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            Archive // Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground [text-wrap:balance]">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto [text-wrap:balance]">
            A curated selection of full-stack web applications, developer tooling, and AI interfaces built with production-grade architecture.
          </p>

          {/* Filter Pills */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Filter projects">
            <button
              role="tab"
              aria-selected={filter === "all"}
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-[background-color,color,border-color,box-shadow,transform] duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                filter === "all"
                  ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/25 border border-white/20"
                  : "bg-card/50 text-muted-foreground hover:text-foreground border border-white/10 hover:border-white/20"
              }`}
            >
              ALL WORKS (<span className="tabular-nums">{projects.length}</span>)
            </button>
            <button
              role="tab"
              aria-selected={filter === "featured"}
              onClick={() => setFilter("featured")}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-[background-color,color,border-color,box-shadow,transform] duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                filter === "featured"
                  ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/25 border border-white/20"
                  : "bg-card/50 text-muted-foreground hover:text-foreground border border-white/10 hover:border-white/20"
              }`}
            >
              FEATURED HIGHLIGHTS
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col h-full rounded-2xl bg-card/40 border border-white/10 hover:border-primary/40 backdrop-blur-md overflow-hidden transition-[border-color,box-shadow] duration-300 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-48 w-full overflow-hidden bg-muted/20 border-b border-white/5">
                  <img
                    src={project.image}
                    alt={`Screenshot preview of ${project.title}`}
                    width={600}
                    height={340}
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />

                  {/* Telemetry Spec Index */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-md border border-white/10 text-muted-foreground text-[10px] font-mono tracking-wider tabular-nums uppercase shadow-sm">
                      SPEC // {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary/90 text-primary-foreground text-[10px] font-mono px-2 py-0.5 border-none shadow-md">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5" aria-label={`Technologies used in ${project.title}`}>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title} (opens in new tab)`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 text-xs font-semibold transition-[background-color,border-color,color] duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code of ${project.title} on GitHub (opens in new tab)`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-card/60 hover:bg-white/10 text-foreground border border-white/10 hover:border-white/20 text-xs font-semibold transition-[background-color,border-color,color] duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                      >
                        <Github className="w-3.5 h-3.5" aria-hidden="true" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
