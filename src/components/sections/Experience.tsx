import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Card3D from "../Card3D";
import ScrambledText from "../../../react-bits/ScrambledText/ScrambledText";
import { useState, useRef, useEffect } from "react";

const experiences = [
  {
    company: "Synchrony Financial",
    role: "Senior Frontend Developer",
    period: "August 2022 - Present",
    description: [
      "Developed and maintained multiple features using React and TypeScript, including dynamic forms,modals,improving user engagement and overall UX across core product flows.",
      "Migrated React apps from CRA to Vite, boosting build speed by 40 percent and streamlining development cycles with faster HMR and optimized bundling.",
      "Transitioned testing stack in React components from Jest to Cypress + Cucumber, enabling BDD and achieving 95 percent test coverage for UI flows.",
      "Built a real-time Mock Data Generator to accelerate story testing, enhancing developer velocity in Agile workflows.",
      "Leveraged XState in react apps to manage complex state logic, cutting state-related bugs by 40 percent and improving app reliability.",
      "Optimized API interactions with TanStack Query, reducing response times by 25 percent, and automated deployments with Jenkins, slashing errors by 50 percent and doubling release frequency.",
    ],

    technologies: [
      "HTML:5",
      "CSS:3",
      "JavaScript",
      "ReactJs",
      "TypeScript",
      "Cypress",
      "XState",
      "Vite",
      "Jest",
      "Cucumber",
      "Redux Toolkit",
      "Jotai",
    ],
  },
  {
    company: "Apisero Inc",
    role: "Software Developer",
    period: "May 2021 - July 2022",
    description: [
      "Led API development and system integrations, including Snowflake and CloudHub, improving interoper-ability and deployment reliability.",
      "Delivered Agile-first software solutions with strong emphasis on performance, scalability, and real-time adaptability and ensured code quality through manual and automated testing.",
    ],
    technologies: [
      "Java",
      "Mulesoft",
      "Rest API",
      "DataWeave",
      "Maven",
      "Snowflake",
      "RAML",
      "Anypoint Studio",
      "CloudHub",
    ],
  },
];

export default function Experience() {
  // Move carousel state outside the map to avoid React hook issues
  const [descIndexes, setDescIndexes] = useState(experiences.map(() => 0));
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
  const [resetAnim, setResetAnim] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Refs to store interval IDs for each carousel
  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>(
    experiences.map(() => null)
  );

  // Auto-advance carousel for each experience
  useEffect(() => {
    experiences.forEach((exp, expIdx) => {
      if (intervalRefs.current[expIdx]) {
        clearInterval(intervalRefs.current[expIdx]!);
      }
      if (!isPaused) {
        intervalRefs.current[expIdx] = setInterval(() => {
          setDirection(1);
          setDescIndexes((prev) =>
            prev.map((val, idx) => {
              if (idx === expIdx) {
                if (val === exp.description.length - 1) {
                  setResetAnim(true);
                  return 0;
                }
                return val + 1;
              }
              return val;
            })
          );
        }, 4000);
      }
    });
    return () => {
      intervalRefs.current.forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, [isPaused, experiences.length]);

  const handlePrev = (expIdx: number) => {
    setDirection(-1);
    setDescIndexes((prev) =>
      prev.map((val, idx) =>
        idx === expIdx
          ? val === 0
            ? experiences[expIdx].description.length - 1
            : val - 1
          : val
      )
    );
    setResetAnim(false);
  };

  const handleNext = (expIdx: number) => {
    setDirection(1);
    setDescIndexes((prev) =>
      prev.map((val, idx) => {
        if (idx === expIdx) {
          if (val === experiences[expIdx].description.length - 1) {
            setResetAnim(true);
            return 0;
          }
          return val + 1;
        }
        return val;
      })
    );
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden"
    >
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
            {experiences.map((exp, index) => {
              const descIndex = descIndexes[index];
              return (
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

                      {/* Description Carousel with Animation and Full Width */}
                      <div
                        className="relative flex items-center justify-center mb-6 w-full"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                      >
                        <button
                          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 rounded-full p-2 transition-colors disabled:opacity-50"
                          onClick={() => handlePrev(index)}
                          aria-label="Previous"
                          disabled={exp.description.length <= 1}
                        >
                          <span className="text-xl">&#8592;</span>
                        </button>
                        <div className="flex-1 px-2 sm:px-8 text-center overflow-hidden w-full">
                          <motion.div
                            className="p-4"
                            key={descIndex}
                            initial={{
                              x:
                                direction === 0
                                  ? 0
                                  : direction === 1
                                  ? 100
                                  : -100,
                              opacity: 0,
                            }}
                            animate={{
                              x: 0,
                              opacity: 1,
                            }}
                            exit={{
                              x:
                                direction === 1
                                  ? -100
                                  : direction === -1
                                  ? 100
                                  : 0,
                              opacity: 0,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                              duration: resetAnim ? 0.5 : 0.4,
                            }}
                          >
                            <ScrambledText
                              className="text-foreground/80 leading-relaxed text-sm m-0"
                              radius={100}
                              duration={1.2}
                              speed={0.5}
                              scrambleChars=":*"
                            >
                              {exp.description[descIndex]}
                            </ScrambledText>
                          </motion.div>
                        </div>
                        <button
                          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 rounded-full p-2 transition-colors disabled:opacity-50"
                          onClick={() => handleNext(index)}
                          aria-label="Next"
                          disabled={exp.description.length <= 1}
                        >
                          <span className="text-xl">&#8594;</span>
                        </button>
                      </div>
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
              );
            })}
          </div>

          {/* Background gradient effects */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <div
              className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "4s" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "6s", animationDelay: "2s" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
