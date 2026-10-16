export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Synchrony Financial",
    role: "Senior Frontend Developer",
    period: "August 2022 – Present",
    location: "Hyderabad, India",
    description: [
      "Architected and delivered core UI features across high-traffic fintech flows using React, TypeScript, and Tailwind CSS, increasing end-user task completion rates.",
      "Migrated enterprise applications from CRA to Vite, boosting build speeds by 40% and drastically reducing HMR latency for 30+ engineers.",
      "Transitioned component testing architecture to Cypress + Cucumber (BDD), establishing comprehensive end-to-end regression suites with over 95% critical path coverage.",
      "Designed finite state machines with XState for complex multi-step checkout and verification flows, reducing UI edge-case bugs by 40%.",
      "Optimized asynchronous server state using TanStack Query, reducing redundant network requests by 25% and implementing resilient optimistic updates.",
      "Built an internal real-time Mock Data Generator and automated CI/CD pipeline validations in Jenkins, cutting release deployment cycle times by 50%.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "XState",
      "TanStack Query",
      "Redux Toolkit",
      "Cypress",
      "Jest",
      "Cucumber",
      "Jenkins",
    ],
  },
  {
    company: "Apisero Inc",
    role: "Software Developer",
    period: "May 2021 – July 2022",
    location: "Bengaluru, India",
    description: [
      "Engineered robust RESTful API integration pipelines connecting enterprise systems with Snowflake and CloudHub, improving cross-platform interoperability.",
      "Delivered scalable microservices following Agile methodologies with strict code quality standards, unit testing, and automated deployment pipelines.",
      "Authored modular RAML specifications and DataWeave transformations handling high-throughput asynchronous payloads.",
    ],
    technologies: [
      "Java",
      "REST APIs",
      "Snowflake",
      "CloudHub",
      "MuleSoft",
      "DataWeave",
      "RAML",
      "Maven",
    ],
  },
];
