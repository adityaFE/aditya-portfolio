import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ProjectShowcase3D from "../ProjectShowcase3D";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with React, Next.js, and TypeScript. Features include real-time cart updates, payment integration, and responsive design.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "3D Product Configurator",
    description:
      "Interactive 3D product configurator using Three.js and React Three Fiber. Allows users to customize products in real-time with different materials and colors.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Three.js", "WebGL", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization. Built with React and D3.js for optimal performance.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "TypeScript", "D3.js", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col bg-card/30 backdrop-blur-sm border-primary/10">
                  <ProjectShowcase3D project={project} index={index} />
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-foreground/80 mb-4 text-sm sm:text-base">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-primary/5 text-primary/90"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 sm:gap-4 flex-wrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="flex-1 min-w-[120px]"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="flex-1 min-w-[120px]"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}