import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ClickSpark from "../../react-bits/ClickSpark/ClickSpark";
import { MouseFollower } from "@/components/MouseFollower";

export default function Technical() {
  const [visitCount, setVisitCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const lastVisitTime = localStorage.getItem("lastVisitTime");
    const currentTime = new Date().getTime();
    const tenMinutes = 10 * 60 * 1000;

    if (!lastVisitTime || currentTime - parseInt(lastVisitTime) > tenMinutes) {
      const count = localStorage.getItem("visitCount");
      const newCount = count ? parseInt(count) + 1 : 1;
      localStorage.setItem("visitCount", newCount.toString());
      localStorage.setItem("lastVisitTime", currentTime.toString());
      setVisitCount(newCount);
    } else {
      setVisitCount(parseInt(localStorage.getItem("visitCount") || "0"));
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900 text-white">
      <MouseFollower />
      
      <div>
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </ClickSpark>
      </div>

      <motion.footer
        className="text-center mt-6 p-6 bg-gradient-to-r text-white text-sm w-full shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          style={{ position: "relative", zIndex: 1, marginBottom: "1rem" }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Page Visits: {visitCount}
        </motion.div>

        <div className="text-xl font-semibold animate-pulse">
          Current Time: {currentTime}
        </div>
        <motion.div
          className="mt-2 text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          © {new Date().getFullYear()} Made with ❤️ by Aditya. All rights
          reserved.
        </motion.div>
      </motion.footer>
    </div>
  );
}
