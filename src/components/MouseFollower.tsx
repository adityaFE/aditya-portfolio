import { useEffect, useState } from "react";

export const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-screen transition-opacity duration-300"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isMoving ? 1 : 0.3,
        }}
      >
        <div
          className="w-8 h-8 rounded-full bg-primary/30 blur-xl"
          style={{
            boxShadow: "0 0 60px 20px hsl(270 91% 65% / 0.6)",
          }}
        />
      </div>

      {/* Trail effect */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-screen transition-all duration-1000 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
      </div>
    </>
  );
};
