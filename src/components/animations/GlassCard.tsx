import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "red" | "pink" | "gold";
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard = ({
  children,
  className = "",
  glowColor = "red",
  hoverEffect = true,
  onClick,
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
        boxShadow: `0 0 40px ${glowColors[glowColor]}, 0 0 80px ${glowColors[glowColor].replace('0.3', '0.15')}`,
      } : {}}
      transition={{ duration: 0.2 }}
      className={`glass-card-glow transition-colors duration-300 ${className}`}
      style={{
        boxShadow: `0 0 20px ${glowColors[glowColor].replace('0.3', '0.05')}`
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
