import SkillReel from "../SkillReel";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiStyledcomponents,
  SiFramer,
  SiJavascript,
  SiVite,
  SiCss3,
  SiHtml5,
  SiGit,
  SiRedux,
  SiXstate,
  SiJest,
  SiCypress,
  SiPython,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: SiHtml5,
    level: 99,
    color: "#E34F26",
    description: "Building semantic and accessible web pages",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    level: 98,
    color: "#1572B6",
    description: "Crafting visually appealing, responsive designs",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: 98,
    color: "#F7DF1E",
    description: "Mastering modern JavaScript for frontend development",
  },
  {
    name: "Python",
    icon: SiPython,
    level: 98,
    color: "#F7DF1E",
    description: "Can write code in Python for backend or scripting tasks",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 92,
    color: "#3178C6",
    description: "Developing robust, type-safe applications",
  },
  {
    name: "React.js",
    icon: SiReact,
    level: 98,
    color: "#61DAFB",
    description: "Building high-performance and scalable web applications",
  },
  {
    name: "Jest",
    icon: SiJest,
    level: 90,
    color: "#C21325",
    description: "Writing unit and integration tests with high coverage",
  },
  {
    name: "Cypress",
    icon: SiCypress,
    level: 88,
    color: "#17202C",
    description: "Automating end-to-end testing with BDD integration",
  },
  {
    name: "Vite",
    icon: SiVite,
    level: 95,
    color: "#646CFF",
    description: "Optimizing build times and HMR for better DX",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    level: 95,
    color: "#FF00FF",
    description: "Creating smooth, interactive UI animations",
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    level: 90,
    color: "#DB7093",
    description: "Writing maintainable, dynamic component styles",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 92,
    color: "#38B2AC",
    description: "Building modern and responsive UIs efficiently",
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    level: 90,
    color: "#764ABC",
    description: "Managing complex state in large-scale applications",
  },
  {
    name: "XState",
    icon: SiXstate,
    level: 85,
    color: "#EB5424",
    description: "Implementing state machines for better logic handling",
  },
  {
    name: "Git",
    icon: SiGit,
    level: 95,
    color: "#F05032",
    description: "Managing code efficiently with version control",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <SkillReel skills={skills} speed={40} />

        {/* Background gradient orbs */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  );
}
