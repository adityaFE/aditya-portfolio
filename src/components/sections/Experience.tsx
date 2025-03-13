import { motion } from "framer-motion";
import {  CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Card3D from "../Card3D";

const experiences = [
  {
    company: "Synchrony Financial",
    role: "Senior Frontend Developer",
    period: "August 2022 - Present",
    description: `
      Successfully migrated applications from Create React App (CRA) to Vite.
      Led the migration from Jest to Cypress for end-to-end (e2e) testing integrating Cucumber for behavior-driven development.
      Developed a dynamic Mock Data Generator enabling seamless testing of user stories in real-time.
      Experienced with XState for managing complex application states.
      Optimized data queries and CI/CD pipelines for improved performance.`,
    technologies: ["ReactJs", "TypeScript", "Cypress", "XState", "Vite", "Jest", "Cucumber", "Redux Toolkit"],
  },
  {
    company: "Apisero Inc",
    role: "Software Developer",
    period: "May 2021 - July 2022",
    description: `
      Led the creation of APIs tailored to business needs, improving system functionality and interoperability.
      Developed and advanced software solutions using cutting-edge methodologies in an agile environment.
      Applied both manual and automated testing methods to ensure high-quality deliverables.
      Enhanced workflows through POCs and RnD initiatives, contributing to operational efficiency.
      Integrated APIs with Snowflake and optimized deployment with Maven and CloudHub.`,
    technologies: ["Java", "Mulesoft", "Rest API", "DataWeave", "Maven", "Snowflake", "RAML", "Anypoint Studio", "CloudHub"],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Work Experience
          </h2>

          <div className="space-y-8 mt-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card3D>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-primary/80 font-medium mt-1">
                          {exp.role}
                        </p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>

                    {/* Bullet Point List for Description */}
                    <ul className="list-disc list-inside text-foreground/80 mb-6 leading-relaxed">
                      {exp.description.trim().split("\n").map((line, i) => (
                        <li key={i}>{line.trim()}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card3D>
              </motion.div>
            ))}
          </div>

          {/* Background gradient effects */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <div 
              className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '4s' }}
            />
            <div 
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: '6s', animationDelay: '2s' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}