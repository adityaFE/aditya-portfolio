import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import TextType from "../../react-bits/TextType/TextType";
import "../index.css";
import ClickSpark from "../../react-bits/ClickSpark/ClickSpark";
import { MouseFollower } from "@/components/MouseFollower";
import SocialButtons from "@/components/SocialButtons";
import { greetings } from "@/data";
import { ArrowUpRight, ArrowDown, X } from "lucide-react";
import KineticGrid from "@/components/ui/kinetic-grid";
import Lanyard from "@/components/ui/lanyard";

// Geometric Sans Premium Typography Style
const geomSansClasses = {
  heading: "font-[family-name:var(--font-geist-sans)] font-bold tracking-[-0.02em]",
  subheading: "font-[family-name:var(--font-geist-sans)] font-semibold tracking-[-0.01em]",
  body: "font-[family-name:var(--font-geist-sans)] font-normal tracking-[0.002em]",
  badge: "font-[family-name:var(--font-geist-mono)] font-medium tracking-[0.05em]",
};

const LandingPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.title = "Aditya Anand";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isVideoOpen && videoRef.current) {
      void videoRef.current.play();
    }
  }, [isVideoOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentGreeting = greetings[index];

  const springTransition = {
    type: "spring" as const,
    stiffness: 350,
    damping: 30,
  };

  return (
    <KineticGrid globalColor="monochrome">
      <div className="relative text-foreground overflow-x-hidden">
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <MouseFollower />

          {/* Mobile Hero Section - Lanyard Only */}
          <section className="w-full md:hidden relative h-[100dvh] flex flex-col items-center justify-center">
            {/* Lanyard Hero */}
            <motion.div
              className="relative w-full flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full max-w-sm" style={{ height: "500px" }}>
                <Lanyard
                  frontImage="/Screenshot 2026-10-17 at 06.45.19.png"
                  cardColor="#ffffff"
                  orientation="portrait"
                  finish="glossy"
                  cornerRadius={0.2}
                  size={0.9}
                  anchor="center"
                  strapLength={0.2}
                  strapColor="#111111"
                  metal="silver"
                  gravity={0.8}
                  damping={0.6}
                  elasticity={0.4}
                  breeze={0.3}
                  interactive={true}
                  intro={false}
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <AnimatePresence>
              {!hasScrolled && (
                <motion.div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 2.5, duration: 0.6 }}
                >
                  <span className={`text-xs text-muted-foreground/60 uppercase tracking-widest ${geomSansClasses.badge}`}>
                    Scroll
                  </span>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="text-muted-foreground/60"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Mobile Content Section - Below Hero */}
          <section className="w-full md:hidden relative py-12 px-4">
            <motion.div
              className="w-full flex flex-col items-center text-center space-y-6 max-w-sm mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/50 text-black dark:text-white text-xs ${geomSansClasses.badge} w-max`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available Now</span>
              </motion.div>

              {/* Greeting */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentGreeting.text}
                    className={`text-3xl sm:text-4xl ${geomSansClasses.heading} text-foreground [text-wrap:balance]`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <TextType
                      text={currentGreeting.text}
                      textColors={["hsl(var(--foreground))"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                    />
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Tagline */}
              <motion.p
                className={`text-sm sm:text-base text-muted-foreground leading-relaxed [text-wrap:balance] ${geomSansClasses.body}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Building high-performance, accessible web applications where
                technical rigor meets visual precision.
              </motion.p>


              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col gap-3 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/technical">
                  <motion.button
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background ${geomSansClasses.subheading} text-sm hover:opacity-90 transition-opacity duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`}
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Explore my technical work"
                  >
                    <span>Explore Work</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </Link>

                <Link href="/photography">
                  <motion.button
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent hover:opacity-90 text-foreground ${geomSansClasses.subheading} text-sm transition-opacity duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`}
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View my photography"
                  >
                    View Gallery
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <SocialButtons />
              </motion.div>
            </motion.div>
          </section>

          {/* Desktop Layout: Centered with Lanyard and Text */}
          <section className="relative w-full">
            <div className="hidden md:flex w-full h-full items-center justify-center px-6 lg:px-8 py-20">
              <div className="w-full max-w-7xl grid grid-cols-2 gap-16 items-center">
                {/* Left: Lanyard Interactive Card */}
                <motion.div
                  className="relative flex items-center justify-center w-full"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ height: "800px" }}
                >
                  <Lanyard
                    frontImage="/Screenshot 2026-10-17 at 06.45.19.png"
                    cardColor="#ffffff"
                    orientation="portrait"
                    finish="glossy"
                    cornerRadius={0.2}
                    size={0.85}
                    anchor="center"
                    strapLength={0.2}
                    strapColor="#111111"
                    metal="silver"
                    gravity={1}
                    damping={0.5}
                    elasticity={0.5}
                    breeze={0.5}
                    interactive={true}
                    intro={true}
                    className="w-full h-full"
                  />
                </motion.div>

                {/* Right: Text Content */}
                <motion.div
                  className="flex flex-col justify-center space-y-8"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Status Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/50 text-black dark:text-white text-xs ${geomSansClasses.badge} w-max`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Available Now</span>
                  </motion.div>

                  {/* Greeting */}
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.h1
                        key={currentGreeting.text}
                        className={`text-6xl xl:text-7xl ${geomSansClasses.heading} text-foreground [text-wrap:balance]`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <TextType
                          text={currentGreeting.text}
                          textColors={["hsl(var(--foreground))"]}
                          typingSpeed={75}
                          pauseDuration={1500}
                          showCursor={true}
                          cursorCharacter="|"
                        />
                      </motion.h1>
                    </AnimatePresence>
                  </div>

                  {/* Tagline */}
                  <motion.p
                    className={`text-lg lg:text-xl text-muted-foreground leading-relaxed [text-wrap:balance] max-w-xl ${geomSansClasses.body}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Building high-performance, accessible web applications where
                    technical rigor meets visual precision.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex flex-col gap-3 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Link href="/technical">
                      <motion.button
                        className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background ${geomSansClasses.subheading} text-base hover:opacity-90 transition-opacity duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={springTransition}
                        aria-label="Explore my technical work"
                      >
                        <span>Explore Work</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.button>
                    </Link>

                    <Link href="/photography">
                      <motion.button
                        className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent hover:opacity-90 text-foreground ${geomSansClasses.subheading} text-base transition-opacity duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={springTransition}
                        aria-label="View my photography"
                      >
                        View Gallery
                      </motion.button>
                    </Link>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <SocialButtons />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Video Modal */}
          <AnimatePresence>
            {isVideoOpen && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsVideoOpen(false)}
              >
                <motion.div
                  className="relative w-full max-w-2xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <motion.button
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsVideoOpen(false)}
                    aria-label="Close video"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </ClickSpark>
      </div>
    </KineticGrid>
  );
};

export default LandingPage;
