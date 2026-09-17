import React, { useRef, useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

export interface InfiniteReelProps<T> {
  items: T[];
  speed?: number; // pixels per second
  cardWidth?: number; // px
  gap?: number; // px
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  showEdgeFade?: boolean;
}

export function InfiniteReel<T>({
  items,
  speed = 40,
  cardWidth = 320,
  gap = 24,
  renderItem,
  className = "",
  showEdgeFade = true,
}: InfiniteReelProps<T>) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);

  // Duplicate items array for seamless looping
  const reelItems = [...items, ...items];
  const totalWidth = reelItems.length * (cardWidth + gap);
  const [offset, setOffset] = useState(0);

  // RAF-based continuous auto-scroll
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

  // Touch and drag handlers for manual scrolling
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
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex items-center"
        style={{
          width: totalWidth,
          transform: `translateX(-${offset}px)`,
        }}
      >
        {reelItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0"
            style={{ width: cardWidth, marginRight: gap }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderItem(item, idx)}
          </motion.div>
        ))}
      </div>

      {showEdgeFade && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent" />
        </>
      )}
    </div>
  );
}

export default InfiniteReel;
