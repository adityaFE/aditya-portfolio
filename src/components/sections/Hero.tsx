import { motion } from "framer-motion";
import SocialButtons from "../SocialButtons";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import TechText from "@/react-bits/TechText/TechText";
import TextLoop from "@/react-bits/TextLoop/TextLoop";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20 pb-12 scroll-mt-24"
      aria-label="Introduction & Overview"
    >

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability Telemetry Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-mono tracking-[0.25em] uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="tabular-nums">Available for Senior Roles</span>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="h-[100px] sm:h-[140px] md:h-[180px] w-full flex items-center justify-center text-foreground">
            <TechText
              text="Aditya Anand"
              fontSize={120}
              align="center"
              accentColor="hsl(var(--primary))"
            />
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 [text-wrap:balance]">
            Senior Frontend Engineer & Creative Developer
          </p>
        </motion.div>

        {/* TextLoop Component Integration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="my-2 py-1 max-w-xl mx-auto opacity-90 hover:opacity-100 transition-opacity"
        >
          <TextLoop
            text="React ✦ TypeScript ✦ Architecture ✦ UI Engineering ✦"
            shape="wave"
            speed={70}
            direction="forward"
            separator="✦"
            curviness={40}
            tilt={0}
            fontSize={52}
            fontWeight={900}
            letterSpacing={1.5}
            uppercase
            ribbon={true}
            ribbonColor="rgba(168, 85, 247, 0.2)"
            ribbonWidth={128}
            edgeFade={0.2}
            cross={false}
            draggable={false}
            outline={true}
            scrollBoost={0.1}
            pauseOnHover={true}
          />
        </motion.div>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed [text-wrap:balance]"
        >
          Building high-performance, accessible web applications and scalable design systems with modern JavaScript, React, and precision creative engineering.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 hover:shadow-xl hover:shadow-primary/25 border border-white/20 transition-[opacity,box-shadow,transform] duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <span>Explore Archive</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card/60 hover:bg-white/10 text-foreground font-semibold text-sm border border-white/10 hover:border-white/25 backdrop-blur-md transition-[background-color,border-color,transform] duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            Get in Touch
          </a>

          <a
            href="https://drive.google.com/file/d/18I7BT6WoCizAgM71R4_ePtTGUn-MY0S1/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground font-medium text-sm border border-white/10 transition-[background-color,color,border-color,transform] duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            aria-label="Download Resume (opens Google Drive in new tab)"
          >
            <FileText className="w-4 h-4 text-primary" aria-hidden="true" />
            Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <SocialButtons />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/60 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
