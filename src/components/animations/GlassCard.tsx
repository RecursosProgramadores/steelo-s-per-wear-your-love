import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "red" | "pink" | "gold";
  hoverEffect?: boolean;
}

export const GlassCard = ({
  children,
  className = "",
  glowColor = "red",
  hoverEffect = true,
}: GlassCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const glowColors = {
    red: "hsla(350, 100%, 50%, 0.3)",
    pink: "hsla(330, 100%, 71%, 0.3)",
    gold: "hsla(45, 93%, 58%, 0.3)",
  };

  return (
    <motion.div
      ref={ref}
      whileHover={hoverEffect ? { 
        scale: 1.02, 
        y: -5,
        boxShadow: `0 20px 40px ${glowColors[glowColor]}, 0 0 60px ${glowColors[glowColor]}`
      } : {}}
      transition={{ duration: 0.3 }}
      className={`glass-card-glow ${className}`}
      style={{
        boxShadow: `0 0 20px ${glowColors[glowColor].replace('0.3', '0.1')}`
      }}
    >
      {children}
    </motion.div>
  );
};
