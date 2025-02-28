import { motion } from "framer-motion";
import { useRef } from "react";
import ThreeScene from "../ThreeScene";
import SocialButtons from "../SocialButtons";

export default function Hero() {
  const constraintsRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const name = "Aditya Anand";
  const title = "Senior Frontend Developer";

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <ThreeScene />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={constraintsRef}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Name Animation */}
          <motion.div className="mb-4 flex justify-center">
            {name.split("").map((char, index) => (
              <motion.span
                key={`name-${index}`}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                  ease: "easeOut"
                }}
                className="text-3xl sm:text-5xl font-bold text-primary inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Title Animation */}
          <motion.div className="mb-6 flex justify-center">
            {title.split("").map((char, index) => (
              <motion.span
                key={`title-${index}`}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.03,
                  ease: "easeOut"
                }}
                className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
          >
            <p className="text-lg sm:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto backdrop-blur-sm p-4 rounded-lg">
              Crafting beautiful, performant, and accessible web experiences with
              modern technologies
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          <SocialButtons />

          <motion.div
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <motion.svg
              className="w-6 h-6 text-foreground/50"
              whileHover={{ scale: 1.2 }}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}