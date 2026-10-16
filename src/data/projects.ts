export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Gemini AI Assistant",
    description:
      "Real-time conversational AI client powered by Google Gemini API featuring response streaming, markdown formatting, session history persistence, and responsive mobile-first UI.",
    image: "https://i.ibb.co/j9Dp5w8d/Screenshot-2025-02-28-at-21-23-08.png",
    technologies: ["JavaScript", "Gemini API", "CSS3", "HTML5"],
    liveUrl: "https://gemini-flash-ai.netlify.app/",
    githubUrl: "https://github.com/adityaFE/gemini-ai-bot",
    featured: true,
  },
  {
    id: "2",
    title: "Match-n-Hire",
    description:
      "Full-stack recruitment portal featuring Firebase authentication, candidate profile management, recruiter candidate shortlisting, and real-time application status tracking.",
    image: "https://i.ibb.co/YFgxdbqT/Screenshot-2025-03-14-at-02-11-07.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Firebase",
      "MongoDB",
      "Node.js",
    ],
    liveUrl: "https://match-n-hire.netlify.app/",
    githubUrl: "https://github.com/adityaFE/match-n-hire",
    featured: true,
  },
  {
    id: "3",
    title: "Trade Assist Dashboard",
    description:
      "Financial market intelligence dashboard displaying real-time stock quotes, interactive historical candlestick charts, customizable watchlists, and secure Google OAuth integration.",
    image: "https://i.ibb.co/jv5xTDNV/Screenshot-2025-04-10-at-00-53-56.png",
    technologies: ["React", "TypeScript", "Chart.js", "OAuth 2.0", "Tailwind CSS"],
    liveUrl: "https://trade-assist.netlify.app/",
    githubUrl: "https://github.com/adityaFE/trade-assist",
    featured: true,
  },
  {
    id: "4",
    title: "Stack-lite",
    description:
      "Developer community Q&A platform engineered with threaded discussions, reputation scoring, code snippet syntax highlighting, and reactive vote state management.",
    image: "https://i.ibb.co/bgnSXHbS/Screenshot-2025-04-24-at-11-03-09.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "MongoDB",
    ],
    liveUrl: "https://stack-lite.netlify.app/",
    githubUrl: "https://github.com/adityaFE/stack-overflow",
    featured: true,
  },
  {
    id: "5",
    title: "Accessible AI Chatbot",
    description:
      "Production-grade conversational interface with strict WCAG 2.1 AA keyboard accessibility, conversation export, file attachments, and offline sync resilience.",
    image: "https://i.ibb.co/dsjv6SRH/Screenshot-2025-02-28-at-21-55-59.png",
    technologies: ["React", "TypeScript", "Emotion.js", "Material UI", "Web APIs"],
    liveUrl: "https://ai-chat-bot-client.netlify.app/",
    githubUrl: "https://github.com/adityaFE/ai-chat-bot",
    featured: false,
  },
  {
    id: "6",
    title: "Creative Developer Portfolio",
    description:
      "Modern portfolio and creative showcase featuring custom Three.js shader meshes, Framer Motion transitions, responsive design system tokens, and photographer gallery.",
    image: "https://i.ibb.co/7PKT3TF/Screenshot-2025-02-28-at-22-34-50.png",
    technologies: [
      "React",
      "TypeScript",
      "Three.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://portfolio-adityafe.netlify.app/",
    githubUrl: "https://github.com/adityaFE/aditya-portfolio",
    featured: false,
  },
];
