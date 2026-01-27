import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FloatingElement } from "../animations/FloatingElement";
import { GlassCard } from "../animations/GlassCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { MagneticButton } from "../animations/MagneticButton";
import whatsappIcon from "@/assets/iconos/whatsapp.svg";

import hoodieCouple from "@/assets/colecciones/parejaRomantica.png";
import poleraAnime from "@/assets/colecciones/parejaAnime.png";
import hoodieBiker from "@/assets/colecciones/parejaBiker.png";
import sudaderaParejas from "@/assets/colecciones/parejaFutbolera.png";
import sudaderaKawaii from "@/assets/colecciones/parejaKawai.png";

interface Collection {
  id: string;
  name: string;
  description: string;
  singlePrice: string;
  promoPrice: string;
  image: string;
  glowColor: "red" | "pink" | "gold";
}

const collections: Collection[] = [
  {
    id: "romantica",
    name: "Pareja Romántica",
    description: "Diseños que conectan corazones. Bordado con amor.",
    singlePrice: "S/89",
    promoPrice: "S/160",
    image: hoodieCouple,
    glowColor: "red",
  },
  {
    id: "anime",
    name: "Parejas Fans del Anime",
    description: "Sublimado premium de tus personajes favoritos.",
    singlePrice: "S/95",
    promoPrice: "S/170",
    image: poleraAnime,
    glowColor: "pink",
  },
  {
    id: "futbol",
    name: "Parejas Fans del Fútbol",
    description: "Lleva la pasión de tu equipo favorito a todos lados.",
    singlePrice: "S/89",
    promoPrice: "S/160",
    image: sudaderaParejas,
    glowColor: "gold",
  },
  {
    id: "bikers",
    name: "Parejas Fans del Motociclismo",
    description: "Para los que viven la libertad sobre dos ruedas.",
    singlePrice: "S/95",
    promoPrice: "S/170",
    image: hoodieBiker,
    glowColor: "gold",
  },
  {
    id: "kawai",
    name: "Parejas Kawai",
    description: "Estilo tierno y moderno para compartir momentos.",
    singlePrice: "S/89",
    promoPrice: "S/160",
    image: sudaderaKawaii,
    glowColor: "pink",
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

        {/* Collections Grid - Adjusted for 5 items */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <ScrollReveal
              key={collection.id}
              delay={index * 0.1}
              className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] xl:w-[calc(20%-2rem)] min-w-[280px]"
            >
              <FloatingElement intensity={10} delay={index * 0.5}>
                <GlassCard
                  glowColor={collection.glowColor}
                  className="group cursor-pointer h-full"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-2xl bg-zinc-900/40 p-6">
                    <motion.img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-72 object-contain transition-transform duration-500 group-hover:scale-110"
                    />



                    {/* Price Badge - Unit */}
                    <div className="absolute top-4 right-4 glass-card px-3 py-1.5 rounded-full z-20">
                      <span className="text-xs font-bold text-white">
                        1 x {collection.singlePrice}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="font-heading text-lg font-black mb-2 group-hover:text-primary transition-colors tracking-tight leading-tight">
                      {collection.name}
                    </h3>
                    <div className="flex items-start justify-between gap-4 mb-6 flex-grow">
                      <p className="text-zinc-500 text-xs line-clamp-2">
                        {collection.description}
                      </p>
                      <a
                        href={`https://wa.me/+51940257279?text=Hola!%20Me%20interesa%20la%20colección%20de%20${encodeURIComponent(collection.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#25D366]/20 group/wa"
                        title="Pedir por WhatsApp"
                      >
                        <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 invert contrast-200" />
                      </a>
                    </div>

                    {/* Promotion Price - Highlighted */}
                    <div className="mt-auto pt-6 border-t border-white/5 relative">
                      <div className="absolute -top-px left-0 w-1/2 h-px bg-gradient-to-r from-primary to-transparent opacity-50" />
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">Promoción</span>
                          <span className="text-[9px] font-bold text-zinc-600">Llevando x2</span>
                        </div>
                        <div className="text-right">
                          <span className="text-gradient-gold font-black text-2xl drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]">
                            2 x {collection.promoPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </FloatingElement>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5} className="text-center mt-12">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(236, 72, 153, 0)",
                "0 0 25px rgba(236, 72, 153, 0.5)",
                "0 0 0px rgba(236, 72, 153, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block rounded-full shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-shadow duration-300"
          >
            <MagneticButton
              href="https://wa.me/+51940257279?text=Hola!%20Quiero%20ver%20todas%20las%20colecciones%20disponibles"
              target="_blank"
              className="btn-outline-passion inline-flex items-center gap-3 bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              Ver Todas las Colecciones
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </MagneticButton>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CollectionsSection;
