import { motion } from "framer-motion";
import { Heart, Truck, Palette, Users } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { GlassCard } from "../animations/GlassCard";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "red" | "pink" | "gold";
}

const benefits: Benefit[] = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "100% Algodón Suave",
    description: "Tela premium que acaricia tu piel. Comodidad que se siente.",
    color: "red",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Personalización Ilimitada",
    description: "Tu diseño, tus palabras, tu estilo. Bordado y sublimado premium.",
    color: "pink",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Envíos a Todo Perú",
    description: "De Huánuco a tu puerta. Rápido y seguro.",
    color: "gold",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Empleo Joven Peruano",
    description: "Cada compra genera oportunidades para jóvenes en Huánuco.",
    color: "red",
  },
];

const WhySteelos = () => {
  return (
    <section className="relative py-24 md:py-32 bg-card/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            ¿Por qué <span className="text-gradient-passion">Steelo's</span>?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Porque el amor merece algo más que fast fashion.
          </p>
        </ScrollReveal>

        {/* Benefits Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <GlassCard 
                glowColor={benefit.color}
                className="p-6 h-full text-center group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    benefit.color === "red" 
                      ? "bg-primary/20 text-primary" 
                      : benefit.color === "pink"
                      ? "bg-secondary/20 text-secondary"
                      : "bg-accent/20 text-accent"
                  }`}
                >
                  {benefit.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhySteelos;
