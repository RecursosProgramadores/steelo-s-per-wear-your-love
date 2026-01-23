import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FloatingElement } from "../animations/FloatingElement";
import { GlassCard } from "../animations/GlassCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { MagneticButton } from "../animations/MagneticButton";

import hoodieCouple from "@/assets/hoodie-couple.png";
import poleraAnime from "@/assets/polera-anime.png";
import hoodieBiker from "@/assets/hoodie-biker.png";
import sudaderaParejas from "@/assets/sudadera-parejas.png";

interface Collection {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  glowColor: "red" | "pink" | "gold";
}

const collections: Collection[] = [
  {
    id: "parejas",
    name: "Parejas Románticas",
    description: "Diseños que conectan corazones. Bordado con amor.",
    price: "S/89",
    image: hoodieCouple,
    glowColor: "red",
  },
  {
    id: "anime",
    name: "Anime & Kawaii",
    description: "Sublimado premium de tus personajes favoritos.",
    price: "S/79",
    image: poleraAnime,
    glowColor: "pink",
  },
  {
    id: "bikers",
    name: "Biker Edition",
    description: "Para los que viven la libertad sobre dos ruedas.",
    price: "S/99",
    image: hoodieBiker,
    glowColor: "gold",
  },
  {
    id: "matching",
    name: "Matching Sets",
    description: "Conjuntos para parejas que quieren combinar estilo.",
    price: "S/169",
    image: sudaderaParejas,
    glowColor: "red",
  },
];

const CollectionsSection = () => {
  return (
    <section id="colecciones" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Colecciones <span className="text-gradient-passion">Destacadas</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Cada prenda cuenta una historia. Encuentra la tuya o crea una nueva.
          </p>
        </ScrollReveal>

        {/* Collections Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          staggerDelay={0.15}
        >
          {collections.map((collection, index) => (
            <StaggerItem key={collection.id}>
              <FloatingElement intensity={10} delay={index * 0.5}>
                <GlassCard 
                  glowColor={collection.glowColor}
                  className="group cursor-pointer h-full"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <motion.img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <MagneticButton
                        href="https://wa.me/+51921928668?text=Hola!%20Me%20interesa%20la%20colección%20de%20"
                        target="_blank"
                        className="btn-passion text-sm px-6 py-3 flex items-center gap-2"
                      >
                        Personalizar
                        <ExternalLink className="w-4 h-4" />
                      </MagneticButton>
                    </motion.div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 glass-card px-3 py-1.5 rounded-full">
                      <span className="text-sm font-bold text-gradient-gold">
                        Desde {collection.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {collection.description}
                    </p>
                  </div>
                </GlassCard>
              </FloatingElement>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.5} className="text-center mt-12">
          <MagneticButton
            href="https://wa.me/+51921928668?text=Hola!%20Quiero%20ver%20todas%20las%20colecciones%20disponibles"
            target="_blank"
            className="btn-outline-passion inline-flex items-center gap-3"
          >
            Ver Todas las Colecciones
            <ExternalLink className="w-5 h-5" />
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CollectionsSection;
