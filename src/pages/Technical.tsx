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
import LetterGlitch from "@/react-bits/LetterGlitch/LetterGlitch";

export default function Technical() {
  useEffect(() => {
    document.title = "Aditya Anand | Senior Frontend Engineer & Creative Developer";

    // Handle hash scrolling on mount (e.g., from LandingPage /technical#hero)
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small timeout to ensure animations/layout are settled
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between text-foreground relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* LetterGlitch Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <LetterGlitch
          glitchColors={['#ffffff', '#61dca3']}
          glitchAmount={0.3}
          speed={0.8}
          flow={0.4}
          clickEffect="tear"
          baseOpacity={0.08}
          density={0.7}
          interactive={true}
          cursorRadius={120}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
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
            <main id="main-content">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>
          </ClickSpark>
        </div>

        <Footer />
      </div>
    </div>
  );
}
