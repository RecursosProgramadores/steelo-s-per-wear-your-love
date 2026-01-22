import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ParticleHeartsProps {
  count?: number;
  className?: string;
}

export const ParticleHearts = ({ count = 15, className = "" }: ParticleHeartsProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 16 + 8,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
      });
    }
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            x: `${particle.x}vw`, 
            y: "110vh",
            opacity: 0,
            scale: 0 
          }}
          animate={{ 
            y: "-10vh",
            opacity: [0, 0.6, 0.6, 0],
            scale: [0, 1, 1, 0.5],
            x: [
              `${particle.x}vw`,
              `${particle.x + (Math.random() - 0.5) * 10}vw`,
              `${particle.x + (Math.random() - 0.5) * 20}vw`,
            ]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
          className="absolute"
          style={{ fontSize: particle.size }}
        >
          <Heart 
            className="fill-primary/30 text-primary/50" 
            style={{ width: particle.size, height: particle.size }}
          />
        </motion.div>
      ))}
    </div>
  );
};
