import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";
import ClickSpark from "../../react-bits/ClickSpark/ClickSpark";
import { MouseFollower } from "@/components/MouseFollower";

export default function Technical() {
  useEffect(() => {
    document.title = "Aditya Anand | Frontend Developer";
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

      <Footer />
    </div>
  );
}
