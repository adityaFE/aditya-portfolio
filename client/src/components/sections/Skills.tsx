import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ScrollReveal from "../ScrollReveal";
import SkillCube from "../SkillCube";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiThreedotjs,
  SiTailwindcss,
  SiWebgl,
} from "react-icons/si";

const skills = [
  { 
    name: "React", 
    icon: SiReact, 
    level: 95,
    color: "#61DAFB",
    description: "Building complex web applications with React and its ecosystem"
  },
  { 
    name: "TypeScript", 
    icon: SiTypescript, 
    level: 90,
    color: "#3178C6",
    description: "Writing type-safe code for scalable applications"
  },
  { 
    name: "Next.js", 
    icon: SiNextdotjs, 
    level: 85,
    color: "#000000",
    description: "Creating server-side rendered React applications"
  },
  { 
    name: "Three.js", 
    icon: SiThreedotjs, 
    level: 80,
    color: "#000000",
    description: "Developing 3D visualizations and interactive experiences"
  },
  { 
    name: "Tailwind CSS", 
    icon: SiTailwindcss, 
    level: 90,
    color: "#38B2AC",
    description: "Crafting beautiful user interfaces with utility-first CSS"
  },
  { 
    name: "WebGL", 
    icon: SiWebgl, 
    level: 75,
    color: "#990000",
    description: "Creating high-performance graphics and animations"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Card className="h-full backdrop-blur-sm bg-background/30 border-primary/10 hover:border-primary/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6 mb-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <SkillCube icon={skill.icon} color={skill.color} />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-foreground/70 mt-1">
                            {skill.description}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                      >
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-primary/10"
                        />
                        <p className="text-sm text-foreground/70 mt-2">
                          {skill.level}% proficiency
                        </p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Background gradient orbs */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>
    </section>
  );
}