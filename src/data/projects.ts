export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Gemini AI Assistant",
    description:
      "Real-time AI chatbot powered by the Google Gemini API, featuring streaming responses, conversation history, and a minimal UI optimized for fast, natural interactions.",
    image: "https://i.ibb.co/j9Dp5w8d/Screenshot-2025-02-28-at-21-23-08.png",
    technologies: ["Html", "Css", "Javascript", "Google's Gemini API"],
    liveUrl: "https://gemini-flash-ai.netlify.app/",
    githubUrl: "https://github.com/adityaFE/gemini-ai-bot",
  },
  {
    id: "2",
    title: "Match-n-Hire",
    description:
      "Full-stack job platform with Firebase auth, dynamic profile management, and application tracking — built for recruiters and candidates to match efficiently.",
    image: "https://i.ibb.co/YFgxdbqT/Screenshot-2025-03-14-at-02-11-07.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Framer Motion",
      "Tailwind CSS",
      "Radix UI",
      "MongoDB",
      "Firebase",
      "NodeJS",
    ],
    liveUrl: "https://match-n-hire.netlify.app/",
    githubUrl: "https://github.com/adityaFE/match-n-hire",
  },
  {
    id: "3",
    title: "Trade Assist App",
    description:
      "Stock market dashboard with real-time price charts, watchlist management, and financial news — styled for clarity using Chart.js and Google OAuth.",
    image: "https://i.ibb.co/jv5xTDNV/Screenshot-2025-04-10-at-00-53-56.png",
    technologies: ["React", "TypeScript", "Chart.js", "Google OAuth"],
    liveUrl: "https://trade-assist.netlify.app/",
    githubUrl: "https://github.com/adityaFE/trade-assist",
  },
  {
    id: "4",
    title: "Stack-lite",
    description:
      "Developer Q&A platform with real-time collaboration, threaded discussions, and responsive design — a lightweight Stack Overflow alternative.",
    image: "https://i.ibb.co/bgnSXHbS/Screenshot-2025-04-24-at-11-03-09.png",
    technologies: [
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Vite",
      "MongoDB",
      "Firebase",
      "NodeJS",
    ],
    liveUrl: "https://stack-lite.netlify.app/",
    githubUrl: "https://github.com/adityaFE/stack-overflow",
  },
  {
    id: "5",
    title: "Portfolio Website",
    description:
      "Interactive portfolio with 3D animations, particle effects, and a validated contact form — showcasing projects through embla-carousel and framer-motion.",
    image: "https://i.ibb.co/7PKT3TF/Screenshot-2025-02-28-at-22-34-50.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Framer Motion",
      "Tailwind CSS",
      "Radix UI",
    ],
    liveUrl: "https://portfolio-adityafe.netlify.app/",
    githubUrl: "https://github.com/adityaFE/aditya-portfolio",
  },
  {
    id: "6",
    title: "AI Chatbot",
    description:
      "Accessible chatbot with full keyboard navigation, file upload, offline mode, chat export, and deletion — designed as a production-ready client-facing app.",
    image: "https://i.ibb.co/dsjv6SRH/Screenshot-2025-02-28-at-21-55-59.png",
    technologies: ["React", "Emotion.js", "MUI"],
    liveUrl: "https://ai-chat-bot-client.netlify.app/",
    githubUrl: "https://github.com/adityaFE/ai-chat-bot",
  },
];
