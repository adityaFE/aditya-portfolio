import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ProjectShowcase3D from "../ProjectShowcase3D";

const projects = [
  {
    id: "1",
    title: "Gemini AI Assistant",
    description:
      "A smart AI chatbot built using the Google Gemini API delivering real-time responses and seamless interactions. Designed for simplicity and efficiency, it offers a smooth conversational experience with a clean UI.",
    image: "https://i.ibb.co/j9Dp5w8d/Screenshot-2025-02-28-at-21-23-08.png",
    technologies: ["Html", "Css", "Javascript", "Google's Gemini API"],
    liveUrl: "https://gemini-flash-ai.netlify.app/",
    githubUrl: "https://github.com/adityaFE/gemini-ai-bot",
  },
  {
    id: "2",
    title: "AI Chatbot",
    description:
      "A responsive chatbot built with keyboard navigation for seamless interaction. Designed as a client-facing app, it includes functionalities like file upload, offline mode, chat deletion, and chat download, with the potential for full-stack expansion",
    image: "https://i.ibb.co/dsjv6SRH/Screenshot-2025-02-28-at-21-55-59.png",
    technologies: ["React", "Emotion.js","MUI"],
    liveUrl: "https://ai-chat-bot-client.netlify.app/",
    githubUrl: "https://github.com/adityaFE/ai-chat-bot",
  },
  {
    id: "3",
    title: "Quiz App",
    description:
      "A mobile-responsive quiz app allowing users to select the number of questions and topics before starting a timed quiz. It records user responses, displays the final score, and enables answer review, with more features in progress",
    image: "https://i.ibb.co/vxRkq6sj/Screenshot-2025-02-28-at-22-13-22.png",
    technologies: ["React", "TypeScript", "Styled Components", "Vite"],
    liveUrl: "https://quiz-nexus.netlify.app/",
    githubUrl: "https://github.com/adityaFE/quiz-app",
  },
  {
    id: "4",
    title: "Covid 19 tracker",
    description:
      "A COVID-19 Tracker displaying real-time global and country-wise case data. It features an interactive map, live statistics, and a graph showing worldwide new cases over time.",
    image: "https://i.ibb.co/BHB2Nsb8/Screenshot-2025-02-28-at-22-29-44.png",
    technologies: ["React", "TypeScript", "Chart.js"],
    liveUrl: "https://react-covid-chart.netlify.app/",
    githubUrl: "https://github.com/adityaFE/covid19Tracker",
  },
  {
    id: "5",
    title: "Portfolio Website",
    description:
      "A modern, interactive portfolio featuring smooth animations, 3D effects and a dynamic UI and theme toggle. It includes a validated contact form, embla-carousel for project showcases",
    image: "https://i.ibb.co/7PKT3TF/Screenshot-2025-02-28-at-22-34-50.png",
    technologies: ["React", "TypeScript", "Vite", "Framer Motion" ,"Tailwind CSS","Radix UI"],
    liveUrl: "https://portfolio-adityafe.netlify.app/",
    githubUrl: "https://github.com/adityaFE/aditya-portfolio",
  }
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
          <h2 style={{position:"relative",zIndex:1}} className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>

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