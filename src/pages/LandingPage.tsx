import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import ProfileCard from "../../react-bits/ProfileCard/ProfileCard";
import TextType from "../../react-bits/TextType/TextType";
import GradientText from "../../react-bits/GradientText/GradientText";
import "../index.css";
import ClickSpark from "../../react-bits/ClickSpark/ClickSpark";
import { MouseFollower } from "@/components/MouseFollower";
import { greetings } from "@/data";
import { PORTFOLIO_GRADIENT, GRADIENT_ANIMATION_SPEED } from "@/lib/constants";

const LandingPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

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
    const handleResize = () => setViewportHeight(window.innerHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentGreeting = greetings[index];

  return (
    <div className="relative text-blue-500 overflow-x-hidden">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <MouseFollower />
        <div
          className="md:hidden w-full flex flex-col items-center justify-between relative px-6 py-10 space-y-10"
          style={{ minHeight: viewportHeight }}
        >
          <div className="flex-1 flex items-center justify-center">
            <ProfileCard
              name="Aditya Anand"
              showBehindGradient={true}
              avatarUrl="/aditya-updated-bg.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              behindGradient={`radial-gradient(circle at 30% 30%, hsl(180, 100%, 60%, 0.6), transparent 70%),
  radial-gradient(circle at 70% 70%, hsl(220, 100%, 65%, 0.5), transparent 70%),
  repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(0,0,0,0.02) 1px)`}
              mobileTiltSensitivity={6}
            />
          </div>

          <motion.div
            className="mb-6 text-blue-300 text-sm flex flex-col items-center"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-primary">Scroll Down</span>
            <motion.span
              className="text-xl"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-4 md:gap-12 min-h-screen">
          <motion.div
            className="w-full md:flex-1 max-w-md flex flex-col items-center md:items-start justify-center
                     px-6 md:px-0 py-16 md:py-12 text-center md:text-left space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentGreeting.text}
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <TextType
                  text={currentGreeting.text}
                  textColors={["hsl(var(--primary))"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </motion.h1>
            </AnimatePresence>

            <motion.p
              className="text-lg md:text-lg mb-8 max-w-md text-blue-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <GradientText
                colors={PORTFOLIO_GRADIENT}
                animationSpeed={GRADIENT_ANIMATION_SPEED}
                showBorder={false}
                className="gradient-text-landing-page"
              >
                I make pixels move and moments freeze. If it’s not responsive,
                it’s not mine.
              </GradientText>
              <br />
              <GradientText
                colors={PORTFOLIO_GRADIENT}
                animationSpeed={GRADIENT_ANIMATION_SPEED}
                showBorder={false}
                className="gradient-text-landing-page"
              >
                Warning: I may start explaining aperture or React hooks
                unprovoked.
              </GradientText>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link href="/technical">
                <motion.div
                  className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 text-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GradientText
                    colors={PORTFOLIO_GRADIENT}
                    animationSpeed={GRADIENT_ANIMATION_SPEED}
                    showBorder={false}
                    className="custom-class"
                  >
                    Technical
                  </GradientText>
                </motion.div>
              </Link>
              <Link href="/photography">
                <motion.div
                  className="bg-secondary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GradientText
                    colors={PORTFOLIO_GRADIENT}
                    animationSpeed={GRADIENT_ANIMATION_SPEED}
                    showBorder={false}
                    className="custom-class"
                  >
                    Creator
                  </GradientText>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:flex justify-center items-center flex-shrink-0 max-w-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ProfileCard
              name="Aditya Anand"
              showBehindGradient={true}
              avatarUrl="/aditya-updated-bg.png"
              showUserInfo={true}
              behindGradient={`radial-gradient(circle at 30% 30%, hsl(180, 100%, 60%, 0.6), transparent 70%),
  radial-gradient(circle at 70% 70%, hsl(220, 100%, 65%, 0.5), transparent 70%),
  repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(0,0,0,0.02) 1px)`}
              enableTilt={true}
              enableMobileTilt={true}
              mobileTiltSensitivity={6}
            />
          </motion.div>
        </div>
      </ClickSpark>
    </div>
  );
};

export default LandingPage;
