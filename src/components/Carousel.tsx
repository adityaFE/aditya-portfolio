import React, { useRef, useEffect } from "react";

interface CarouselProps {
  children: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // ✅ Duplicate once (for infinite scroll)
  const duplicatedChildren = [...children, ...children];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const applyPadding = () => {
      const vw = window.innerWidth;
      let cardWidth: number;

      // Responsive card width
      if (vw < 640) cardWidth = Math.round(vw * 0.8); // Mobile: 80% of screen
      else if (vw < 1024) cardWidth = 256; // Tablet
      else cardWidth = 400; // Desktop

      // ✅ Apply centering padding only on mobile
      if (vw < 640) {
        const pad = Math.max(0, Math.round((vw - cardWidth) / 2));
        container.style.paddingLeft = `${pad}px`;
        container.style.paddingRight = `${pad}px`;
      } else {
        container.style.paddingLeft = "0px";
        container.style.paddingRight = "0px";
      }
    };

    applyPadding();
    window.addEventListener("resize", applyPadding);
    return () => window.removeEventListener("resize", applyPadding);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const totalWidth = container.scrollWidth;
      const halfWidth = totalWidth / 2;

      // ✅ If user scrolls past the end of first set, jump back seamlessly
      if (container.scrollLeft >= halfWidth) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft -= halfWidth;
        container.style.scrollBehavior = "smooth";
      }

      // ✅ If user scrolls too far back, jump to the end half
      if (container.scrollLeft <= 0) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft += halfWidth;
        container.style.scrollBehavior = "smooth";
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scroll-smooth touch-pan-x scrollbar-hide cursor-grab"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {duplicatedChildren.map((child, idx) => (
          <div
            key={idx}
            className="flex-shrink-0"
            style={{
              scrollSnapAlign: "center",
              width: "80vw",
              maxWidth: "400px",
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Edge gradients */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};