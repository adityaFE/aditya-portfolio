import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export const AnimatedCounter = ({ value, duration = 2000 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
    const suffix = value.replace(/[\d.]/g, "");
    
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const steps = 60;
    const stepValue = numericValue / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentValue = (stepValue * currentStep).toFixed(1);
      setDisplayValue(currentValue + suffix);

      if (currentStep >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  return <span ref={counterRef}>{displayValue}</span>;
};
