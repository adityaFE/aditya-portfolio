import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileCard from '../../react-bits/ProfileCard/ProfileCard';
import TextType from '../../react-bits/TextType/TextType';
import GradientText from '../../react-bits/GradientText/GradientText';
import ShinyText from '../../react-bits/ShinyText/ShinyText';
import '../index.css'

const greetings = [
  { text: 'Namaste', lang: 'Hindi' },
  { text: 'Hello', lang: 'English' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'Ciao', lang: 'Italian' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: '안녕하세요', lang: 'Korean' },
  { text: 'Olá', lang: 'Portuguese' },
  { text: 'Привет', lang: 'Russian' },
  { text: '你好', lang: 'Chinese (Mandarin)' },
  { text: 'مرحباً', lang: 'Arabic' },
  { text: 'สวัสดี', lang: 'Thai' },
  { text: 'Selamat', lang: 'Indonesian' },
  { text: 'Habari', lang: 'Swahili' },
  { text: 'Guten Tag', lang: 'German' },
  { text: 'Hej', lang: 'Swedish' },
  { text: 'Kumusta', lang: 'Filipino' },
  { text: 'Aloha', lang: 'Hawaiian' },
  { text: 'Shalom', lang: 'Hebrew' },
  { text: 'Vanakkam', lang: 'Tamil' },
  { text: 'Sat Sri Akal', lang: 'Punjabi' },
  { text: 'Nomoshkar', lang: 'Bengali' },
  { text: 'Adaab', lang: 'Urdu' },
  { text: 'Sawubona', lang: 'Zulu' },
];

const LandingPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentGreeting = greetings[index];

  return (
    <div className="relative text-blue-500 overflow-x-hidden">

      <div
        className="md:hidden w-full flex flex-col items-center justify-between relative px-6 py-10 space-y-10"
        style={{ minHeight: viewportHeight }}
      >
        <div className="flex-1 flex items-center justify-center">
          <ProfileCard
            name="Aditya Anand"
            showBehindGradient={true}
            title="Software Engineer & Content Creator"
            avatarUrl="/Aditya.png"
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
          <span style={{ color: 'hsl(241, 85%, 68%)' }}>Scroll Down</span>
          <motion.span
            className="text-xl"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>

      <div
        className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-4 md:gap-12 min-h-screen"
      >
        <motion.div
          className="w-full md:flex-1 max-w-md flex flex-col items-center md:items-start justify-center
                     px-6 md:px-0 py-16 md:py-12 text-center md:text-left space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
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
                textColors={['hsl(241, 85%, 68%)']}
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
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="gradient-text-landing-page"
            >
              I make pixels move and moments freeze.
              If it’s not responsive, it’s not mine.

            </GradientText>
            <br></br>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="gradient-text-landing-page"
            >
              Warning: I may start explaining aperture or React hooks unprovoked.
            </GradientText>
            
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="/technical"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShinyText text="Technical" disabled={false} speed={1} />
            </motion.a>
            <motion.a
              href="/photography"
              className="bg-secondary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShinyText text="Creator" disabled={false} speed={1} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:flex justify-center items-center flex-shrink-0 max-w-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ProfileCard
            name="Aditya Anand"
            showBehindGradient={true}
            title="Software Engineer & Content Creator"
            avatarUrl="/Aditya.png"
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
    </div>
  );
};

export default LandingPage;