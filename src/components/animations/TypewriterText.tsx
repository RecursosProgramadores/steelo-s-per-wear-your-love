import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const TypewriterText = ({ 
  text, 
  className = "", 
  delay = 0,
  speed = 50 
}: TypewriterTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      const timeout = setTimeout(() => {
        setStarted(true);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay, started]);

  useEffect(() => {
    if (!started) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {started && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
        />
      )}
    </span>
  );
};
