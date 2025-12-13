import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

interface ProjectReelProps {
  projects: Project[];
  speed?: number;
}

const CARD_WIDTH = 320;
const GAP = 24;

export default function ProjectReel({
  projects,
  speed = 40,
}: ProjectReelProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);

  const reelProjects = [...projects, ...projects];
  const totalWidth = reelProjects.length * (CARD_WIDTH + GAP);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    let raf: number;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = now - last;
      last = now;

      setOffset((prev) => {
        let next = prev + (speed * delta) / 1000;
        if (next >= totalWidth / 2) {
          next -= totalWidth / 2;
        }
        return next;
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPaused, speed, totalWidth]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const start = (x: number) => {
      setIsPaused(true);
      dragStartX.current = x;
    };

    const move = (x: number) => {
      if (dragStartX.current === null) return;
      const dx = x - dragStartX.current;

      setOffset((prev) => {
        let next = prev - dx;
        if (next < 0) next += totalWidth / 2;
        if (next >= totalWidth / 2) next -= totalWidth / 2;
        return next;
      });

      dragStartX.current = x;
    };

    const end = () => {
      dragStartX.current = null;
      setIsPaused(false);
    };

    const onMouseDown = (e: MouseEvent) => {
      start(e.clientX);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => move(e.clientX);
    const onMouseUp = () => {
      end();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    const onTouchStart = (e: TouchEvent) => start(e.touches[0].clientX);
    const onTouchMove = (e: TouchEvent) => move(e.touches[0].clientX);
    const onTouchEnd = end;

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [totalWidth]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex"
        style={{
          width: totalWidth,
          transform: `translateX(-${offset}px)`,
        }}
      >
        {reelProjects.map((project, idx) => (
          <motion.div
            key={project.id + idx}
            className="flex-shrink-0"
            style={{ width: CARD_WIDTH, marginRight: GAP }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full bg-card/80 backdrop-blur border-primary/20">
              <CardContent className="p-5 flex flex-col h-full">
                {/* Image */}
                <motion.div
                  className="overflow-hidden rounded-md"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-40 w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-4">{project.title}</h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 mt-2 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Actions */}
                <div className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
