import { motion } from "framer-motion";
import { Play, Heart, Eye, Music } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { GlassCard } from "../animations/GlassCard";
import { MagneticButton } from "../animations/MagneticButton";

import tiktokThumb1 from "@/assets/tiktok-thumb-1.jpg";
import tiktokThumb2 from "@/assets/tiktok-thumb-2.jpg";
import tiktokThumb3 from "@/assets/tiktok-thumb-3.jpg";

interface TikTokVideo {
  id: string;
  thumbnail: string;
  title: string;
  views: string;
  likes: string;
  category: string;
  url: string;
}

const tiktokVideos: TikTokVideo[] = [
  {
    id: "1",
    thumbnail: tiktokThumb1,
    title: "Unboxing ÉPICO 🎁 Reacción de pareja",
    views: "125K",
    likes: "15.2K",
    category: "Unboxing",
    url: "https://tiktok.com/@con_steelos",
  },
  {
    id: "2",
    thumbnail: tiktokThumb2,
    title: "Proceso de bordado ✨ Así creamos tu diseño",
    views: "89K",
    likes: "12.1K",
    category: "Behind Scenes",
    url: "https://tiktok.com/@con_steelos",
  },
  {
    id: "3",
    thumbnail: tiktokThumb3,
    title: "Pareja Biker Goals 🏍️❤️",
    views: "203K",
    likes: "28.5K",
    category: "Clientes",
    url: "https://tiktok.com/@con_steelos",
  },
  {
    id: "4",
    thumbnail: tiktokThumb1,
    title: "Regalo sorpresa de aniversario 😭💕",
    views: "156K",
    likes: "22.3K",
    category: "Reacciones",
    url: "https://tiktok.com/@con_steelos",
  },
  {
    id: "5",
    thumbnail: tiktokThumb2,
    title: "De Huánuco con amor 🇵🇪 Nuestro taller",
    views: "67K",
    likes: "9.8K",
    category: "Behind Scenes",
    url: "https://tiktok.com/@con_steelos",
  },
];

const TikTokSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-card/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      </div>
      
      {/* TikTok Color Glow */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#00f2ea]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#ff0050]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Music className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">@con_steelos en TikTok</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Contenido <span className="text-gradient-passion">Viral</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Mira cómo creamos magia y las reacciones de nuestros clientes felices
          </p>
        </ScrollReveal>

        {/* TikTok Grid - Horizontal Scroll on Mobile */}
        <div className="relative">
          <StaggerContainer 
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible"
            staggerDelay={0.1}
          >
            {tiktokVideos.map((video, index) => (
              <StaggerItem 
                key={video.id}
                className="flex-shrink-0 w-[200px] lg:w-auto"
              >
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard 
                    className="overflow-hidden group cursor-pointer"
                    glowColor={index % 2 === 0 ? "red" : "pink"}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Play Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
                        >
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </motion.div>
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 glass-card px-2 py-1 rounded-full">
                        <span className="text-[10px] font-medium">{video.category}</span>
                      </div>

                      {/* Stats Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background to-transparent">
                        <div className="flex items-center gap-3 text-xs">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {video.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3 text-primary" />
                            {video.likes}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="p-3">
                      <p className="text-xs font-medium line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </p>
                    </div>
                  </GlassCard>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Scroll Hint (Mobile) */}
          <p className="text-center text-muted-foreground text-sm mt-4 lg:hidden">
            ← Desliza para ver más →
          </p>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-12">
          <MagneticButton
            href="https://tiktok.com/@con_steelos"
            target="_blank"
            className="inline-flex"
          >
            <motion.div 
              className="btn-outline-passion flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <Music className="w-5 h-5" />
              Síguenos en TikTok
              <span className="text-lg">🔥</span>
            </motion.div>
          </MagneticButton>
          
          <p className="text-muted-foreground text-sm mt-4">
            +50K seguidores nos acompañan cada día
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TikTokSection;
