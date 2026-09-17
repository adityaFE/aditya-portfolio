export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
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
