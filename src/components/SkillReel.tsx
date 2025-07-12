import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SkillCube from "./SkillCube";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  icon?: React.ComponentType;
  color?: string;
  description?: string;
  level?: number;
};

interface SkillReelProps {
  skills: Skill[];
  speed?: number; // pixels per second
}

const CARD_WIDTH = 260; // px, adjust as needed for your card design
const GAP = 24; // px, gap between cards

export default function SkillReel({
  skills,
  speed = 60, // px per second
}: SkillReelProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch/drag state
  const dragStartX = useRef<number | null>(null);
  const dragOffset = useRef<number>(0);

  // Duplicate the skills array for seamless looping
  const reelSkills = [...skills, ...skills];

  // Calculate total width of one loop
  const totalWidth = reelSkills.length * (CARD_WIDTH + GAP);

  // Animation state
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    let animationFrame: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;
      setOffset((prev) => {
        let next = prev + (speed * delta) / 1000;
        if (next >= totalWidth / 2) {
          // Reset after one full loop (half, since we doubled the array)
          return next - totalWidth / 2;
        }
        return next;
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
    // eslint-disable-next-line
  }, [isPaused, speed, totalWidth]);

  // Touch and drag handlers for manual scrolling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      setIsPaused(true);
      dragStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (dragStartX.current !== null) {
        const dx = e.touches[0].clientX - dragStartX.current;
        dragOffset.current = dx;
        setOffset((prev) => {
          let next = prev - dx;
          // Looping logic
          if (next < 0) next += totalWidth / 2;
          if (next >= totalWidth / 2) next -= totalWidth / 2;
          return next;
        });
        dragStartX.current = e.touches[0].clientX;
      }
    };

    const handleTouchEnd = () => {
      setIsPaused(false);
      dragStartX.current = null;
      dragOffset.current = 0;
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsPaused(true);
      dragStartX.current = e.clientX;
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (dragStartX.current !== null) {
        const dx = e.clientX - dragStartX.current;
        dragOffset.current = dx;
        setOffset((prev) => {
          let next = prev - dx;
          if (next < 0) next += totalWidth / 2;
          if (next >= totalWidth / 2) next -= totalWidth / 2;
          return next;
        });
        dragStartX.current = e.clientX;
      }
    };

    const handleMouseUp = () => {
      setIsPaused(false);
      dragStartX.current = null;
      dragOffset.current = 0;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: false });
    container.addEventListener("mousedown", handleMouseDown);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [totalWidth]);

  return (
    <div
      className="relative w-full overflow-hidden py-8 bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={containerRef}
    >
      <div
        className="flex items-center"
        style={{
          width: totalWidth,
          transform: `translateX(-${offset}px)`,
          transition: isPaused ? "none" : "transform 0.1s linear",
        }}
      >
        {reelSkills.map((skill, idx) => (
          <motion.div
            key={idx + skill.name}
            className="flex-shrink-0"
            style={{ width: CARD_WIDTH, marginRight: GAP }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Card className="h-full bg-background/80 border-primary/30 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center">
                {skill.icon && (
                  <SkillCube icon={skill.icon} color={skill.color ?? "#000"} />
                )}
                <h3 className="text-lg font-semibold mt-4 bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent text-center">
                  {skill.name}
                </h3>
                {skill.description && (
                  <p className="text-xs text-foreground/70 mt-2 text-center">
                    {skill.description}
                  </p>
                )}
                {typeof skill.level === "number" && (
                  <div className="w-full mt-4">
                    <Progress
                      value={skill.level}
                      className="h-2 bg-primary/10"
                    />
                    <p className="text-xs text-foreground/60 mt-1 text-center">
                      {skill.level}% proficiency
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {/* Optional: subtle gradient fade on edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
