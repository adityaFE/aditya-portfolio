import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AnimatedShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the center of the container
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="w-full md:w-[300px] h-[300px] relative flex items-center justify-center"
    >
      <div className="relative w-full h-full max-w-[240px] max-h-[240px]">
        {/* Purple Rectangle */}
        <motion.div 
          className="absolute right-4 top-0 w-[80px] h-[100px] bg-purple-600 rounded-sm z-10"
          animate={{
            rotateZ: mousePosition.x * 5,
            x: mousePosition.x * 10,
            y: mousePosition.y * 5,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 15 
          }}
        >
          {/* Eyes */}
          <div className="absolute top-3 left-3 w-3 h-3 bg-white rounded-full">
            <motion.div 
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-black rounded-full"
              animate={{ 
                x: mousePosition.x * 1, 
                y: mousePosition.y * 1 
              }}
              style={{ translateX: "-50%", translateY: "-50%" }}
            />
          </div>
          <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full">
            <motion.div 
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-black rounded-full"
              animate={{ 
                x: mousePosition.x * 1, 
                y: mousePosition.y * 1 
              }}
              style={{ translateX: "-50%", translateY: "-50%" }}
            />
          </div>
          {/* Mouth */}
          <div className="absolute top-8 left-1/2 w-1 h-5 bg-black rounded-sm" style={{ transform: 'translateX(-50%)' }}></div>
        </motion.div>
        
        {/* Black Rectangle */}
        <motion.div 
          className="absolute right-8 top-10 w-[60px] h-[80px] bg-black rounded-sm z-20"
          animate={{
            rotateZ: mousePosition.x * 8,
            x: mousePosition.x * 15,
            y: mousePosition.y * 8,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 250, 
            damping: 12 
          }}
        >
          {/* Eyes */}
          <div className="absolute top-3 left-3 w-2.5 h-2.5 bg-white rounded-full">
            <motion.div 
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-black rounded-full"
              animate={{ 
                x: mousePosition.x * 0.8, 
                y: mousePosition.y * 0.8 
              }}
              style={{ translateX: "-50%", translateY: "-50%" }}
            />
          </div>
          <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-white rounded-full">
            <motion.div 
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-black rounded-full"
              animate={{ 
                x: mousePosition.x * 0.8, 
                y: mousePosition.y * 0.8 
              }}
              style={{ translateX: "-50%", translateY: "-50%" }}
            />
          </div>
        </motion.div>
        
        {/* Yellow Shape */}
        <motion.div 
          className="absolute right-0 bottom-0 w-[70px] h-[90px] bg-yellow-400 rounded-t-[35px] z-30"
          animate={{
            rotateZ: mousePosition.x * 3,
            x: mousePosition.x * 8,
            y: mousePosition.y * 3,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 350, 
            damping: 18 
          }}
        >
          {/* Eye */}
          <div className="absolute top-5 right-5 w-2 h-2 bg-black rounded-full"></div>
          {/* Mouth */}
          <div className="absolute top-10 left-1/2 w-10 h-1 bg-black rounded-sm" style={{ transform: 'translateX(-50%)' }}></div>
        </motion.div>
        
        {/* Orange Semi-circle */}
        <motion.div 
          className="absolute left-0 bottom-0 w-[100px] h-[50px] bg-orange-500 rounded-t-full z-0"
          animate={{
            rotateZ: mousePosition.x * 2,
            x: mousePosition.x * 5,
            y: mousePosition.y * 2,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 20 
          }}
        >
          {/* Eyes */}
          <div className="absolute top-4 left-8 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-4 left-14 w-2 h-2 bg-black rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedShapes;