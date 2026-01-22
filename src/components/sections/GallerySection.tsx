import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  span: "normal" | "tall" | "wide";
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: gallery1,
    alt: "Pareja con hoodies matching",
    category: "Parejas",
    span: "tall",
  },
  {
    id: "2",
    src: gallery2,
    alt: "Biker con hoodie personalizado",
    category: "Bikers",
    span: "wide",
  },
  {
    id: "3",
    src: gallery3,
    alt: "Polera anime kawaii",
    category: "Anime",
    span: "normal",
  },
  {
    id: "4",
    src: gallery4,
    alt: "Pareja con sudaderas personalizadas",
    category: "Matching",
    span: "wide",
  },
];

const GallerySection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Nuestra <span className="text-gradient-passion">Comunidad</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Clientes reales, momentos reales, amor real. #SteelosFam ❤️‍🔥
          </p>
        </ScrollReveal>

        {/* Masonry Gallery */}
        <StaggerContainer 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          staggerDelay={0.1}
        >
          {galleryImages.map((image, index) => (
            <StaggerItem
              key={image.id}
              className={`
                ${image.span === "tall" ? "row-span-2" : ""}
                ${image.span === "wide" ? "col-span-2" : ""}
              `}
            >
              <motion.div
                className="relative group cursor-pointer overflow-hidden rounded-2xl h-full min-h-[200px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.div
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    className="text-center"
                  >
                    <Heart className="w-8 h-8 text-primary mx-auto mb-2 heart-pulse" />
                    <span className="text-sm font-medium text-foreground">
                      Hecho con amor ❤️
                    </span>
                  </motion.div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full">
                  <span className="text-xs font-medium">{image.category}</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Instagram CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Quieres aparecer aquí? Etiquétanos en tus fotos
          </p>
          <a
            href="https://instagram.com/con_steelos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gradient-passion font-semibold hover:underline"
          >
            @con_steelos en Instagram →
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GallerySection;
