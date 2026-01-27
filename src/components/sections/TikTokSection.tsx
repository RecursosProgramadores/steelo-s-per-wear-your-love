import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Heart, Eye, Music, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../animations/ScrollReveal";
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
    url: "https://vt.tiktok.com/ZSakaMKdg/",
  },
  {
    id: "2",
    thumbnail: tiktokThumb2,
    title: "Proceso de bordado ✨ Así creamos tu diseño",
    views: "89K",
    likes: "12.1K",
    category: "Behind Scenes",
    url: "https://vt.tiktok.com/ZSakaKKEJ/",
  },
  {
    id: "3",
    thumbnail: tiktokThumb3,
    title: "Pareja Biker Goals 🏍️❤️",
    views: "203K",
    likes: "28.5K",
    category: "Clientes",
    url: "https://vt.tiktok.com/ZSakaTptW/",
  },
];

const TikTokSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20 text-balance">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <Music className="w-4 h-4 text-primary animate-bounce" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400">@con_steelos en TikTok</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter text-white">
            Contenido <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">Viral</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Mira cómo creamos magia y las reacciones de nuestros clientes felices. ¡Súmate a la tendencia!
          </p>
        </ScrollReveal>

        {/* Static Grid Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiktokVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group h-full"
                >
                  <GlassCard
                    className="overflow-hidden h-full flex flex-col border-white/5 bg-zinc-900/40 backdrop-blur-3xl transition-all duration-500 group-hover:border-white/20 group-hover:bg-zinc-900/60"
                    glowColor={index % 2 === 0 ? "red" : "pink"}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[9/16] overflow-hidden bg-zinc-950">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        <div className="px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md">
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/90">{video.category}</span>
                        </div>
                      </div>

                      {/* Play Icon Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </motion.div>

                        {/* Pulsing indicator on mobile */}
                        <div className="lg:hidden absolute bottom-6 right-6 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/30">
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                      </div>

                      {/* Video Stats */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/20 to-transparent">
                        <div className="flex items-center gap-6 text-[12px] font-black tracking-widest text-white">
                          <span className="flex items-center gap-2 drop-shadow-md">
                            <Eye className="w-4 h-4 text-[#00f2ea]" />
                            {video.views}
                          </span>
                          <span className="flex items-center gap-2 drop-shadow-md">
                            <Heart className="w-4 h-4 text-[#ff0050] fill-[#ff0050]" />
                            {video.likes}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-6">
                      <p className="text-lg font-black leading-tight text-white line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-xs font-bold text-zinc-500">
                        <Music className="w-3.5 h-3.5 text-zinc-600" />
                        <span className="truncate">Sonido Original - Steelo's Perú</span>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <ScrollReveal delay={0.3} className="text-center mt-20">
          <MagneticButton
            href="https://tiktok.com/@con_steelos"
            target="_blank"
            className="inline-flex"
          >
            <div className="btn-passion flex items-center gap-4 px-10 py-5 group">
              <Music className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-black uppercase tracking-[0.2em]">Síguenos en TikTok</span>
              <span className="text-2xl group-hover:scale-125 transition-transform">🔥</span>
            </div>
          </MagneticButton>
          <p className="text-zinc-600 text-xs font-black uppercase tracking-[0.3em] mt-8">
            Únete a nuestra comunidad de +50K
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TikTokSection;
