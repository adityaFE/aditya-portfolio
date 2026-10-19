import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { projects } from "@/data";
import { Badge } from "@/components/ui/badge";
import ScrollStack, { ScrollStackItem } from "@/react-bits/ScrollStack/ScrollStack";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "featured"
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden scroll-mt-24"
      aria-label="Featured Projects and Works"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Projects ScrollStack */}
        <div className="w-full relative py-6">
          <ScrollStack
            useWindowScroll={false}
            itemDistance={100}
            itemStackDistance={32}
            stackPosition="20%"
            itemScale={0.03}
            baseScale={0.9}
            dimAmount={0.2}
            blurAmount={0}
            tiltAmount={2}
            rotationAmount={0}
            holdDistance={200}
            smoothScroll={true}
            snap={false}
            className="h-[650px]"
          >
            {filteredProjects.map((project, index) => (
              <ScrollStackItem key={project.id}>
                <div className="flex flex-col md:flex-row h-full gap-6 items-center">
                  {/* Image Container */}
                  <div className="relative w-full md:w-1/2 h-56 sm:h-64 rounded-xl overflow-hidden bg-muted/20 border border-white/10 shrink-0">
                    <img
                      src={project.image}
                      alt={`Screenshot preview of ${project.title}`}
                      width={600}
                      height={340}
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-40 pointer-events-none" aria-hidden="true" />

                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-md border border-white/10 text-muted-foreground text-[10px] font-mono tracking-wider tabular-nums uppercase">
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
                  <div className="flex flex-col flex-1 justify-between h-full py-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 space-y-4">
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5" aria-label={`Technologies used in ${project.title}`}>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title} (opens in new tab)`}
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 text-xs font-semibold transition-[background-color,border-color,color] duration-200"
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code of ${project.title} on GitHub (opens in new tab)`}
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-card/60 hover:bg-white/10 text-foreground border border-white/10 hover:border-white/20 text-xs font-semibold transition-[background-color,border-color,color] duration-200"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.551 0-1.003.375-1.824.979-2.465-.098-.258-.424-1.235.094-2.575 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.64 1.028 1.459 1.028 2.465 0 3.448-2.339 4.295-4.566 4.543.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
