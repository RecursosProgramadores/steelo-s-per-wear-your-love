import { motion } from "framer-motion";

interface AnimatedGradientProps {
  className?: string;
}

export const AnimatedGradient = ({ className = "" }: AnimatedGradientProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(350, 100%, 50%) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(330, 100%, 71%) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(45, 93%, 58%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 50, -100, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
