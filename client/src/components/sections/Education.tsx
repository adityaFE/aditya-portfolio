import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Master of Computer Science",
    institution: "University of Technology",
    period: "2014 - 2016",
    description:
      "Specialized in Human-Computer Interaction and Advanced Web Technologies",
    achievements: [
      "Thesis on Responsive Web Design Patterns",
      "Published research paper on Web Accessibility",
      "GPA: 3.9/4.0",
    ],
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    period: "2010 - 2014",
    description:
      "Major in Software Engineering with focus on Web Development",
    achievements: [
      "Dean's List all semesters",
      "Web Development Club President",
      "First Place in Hackathon 2013",
    ],
  },
];
console.log(education)

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
        style={{position:"relative", zIndex: 1}}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-primary font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <Badge variant="secondary">{edu.period}</Badge>
                    </div>
                    
                    <p className="text-foreground/80 mb-4">{edu.description}</p>
                    
                    <ul className="list-disc list-inside space-y-2 text-foreground/70">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
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
