import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Heart, Users, Package, Star } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { ParticleHearts } from "../animations/ParticleHearts";

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: <Heart className="w-6 h-6" />, value: 2500, suffix: "+", label: "Parejas felices" },
  { icon: <Package className="w-6 h-6" />, value: 5000, suffix: "+", label: "Prendas personalizadas" },
  { icon: <Star className="w-6 h-6" />, value: 4.9, suffix: "★", label: "Calificación promedio" },
  { icon: <Users className="w-6 h-6" />, value: 15, suffix: "", label: "Jóvenes empleados" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-gradient-passion font-heading text-4xl md:text-5xl font-extrabold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ImpactSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <ParticleHearts count={10} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Nuestro <span className="text-gradient-passion">Impacto</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Transformamos sentimientos en prendas que cuentan historias. 
            Creamos empleo y oportunidades para jóvenes en Perú.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <StaggerContainer 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          staggerDelay={0.15}
        >
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon with Pulse */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4"
                >
                  {stat.icon}
                </motion.div>

                {/* Counter */}
                <div className="mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Emotional Quote */}
        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-heading font-semibold italic text-foreground/90 mb-4">
              "Cada prenda que creamos lleva un pedazo de nuestro corazón huanuqueño"
            </p>
            <cite className="text-muted-foreground">— Equipo Steelo's ❤️‍🔥</cite>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ImpactSection;
