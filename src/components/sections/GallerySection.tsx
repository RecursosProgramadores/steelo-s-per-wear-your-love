import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ShoppingBag, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { LetterReveal } from "../animations/TextReveal";

// Romántico
import romantico1 from "@/assets/galeria/romantico/romantico1.png";
import romantico2 from "@/assets/galeria/romantico/romantico2.png";
import romantico3 from "@/assets/galeria/romantico/romantico3.png";
import romantico4 from "@/assets/galeria/romantico/romantico4.png";

// Anime
import anime1 from "@/assets/galeria/anime/anime1.png";
import anime2 from "@/assets/galeria/anime/anime2.png";
import anime3 from "@/assets/galeria/anime/anime3.png";
import anime4 from "@/assets/galeria/anime/anime4.png";

// Fútbol
import futbol1 from "@/assets/galeria/futbol/futbol1.png";
import futbol2 from "@/assets/galeria/futbol/futbol2.png";
import futbol3 from "@/assets/galeria/futbol/futbol3.png";
import futbol4 from "@/assets/galeria/futbol/futbol4.png";

// Motociclismo
import biker1 from "@/assets/galeria/biker/biker1.png";
import biker2 from "@/assets/galeria/biker/biker2.png";
import biker3 from "@/assets/galeria/biker/biker3.png";
import biker4 from "@/assets/galeria/biker/biker4.png";

// Kawai
import kawai1 from "@/assets/galeria/kawai/biker1.png";
import kawai2 from "@/assets/galeria/kawai/biker2.png";
import kawai3 from "@/assets/galeria/kawai/biker3.png";
import kawai4 from "@/assets/galeria/kawai/biker4.png";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  span: "normal" | "tall" | "wide" | "big";
  color: string;
}

const galleryItems: GalleryItem[] = [
  // Romántico
  { id: "r1", src: romantico1, alt: "Diseño Romántico 1", category: "Pareja Romántica", span: "normal", color: "from-rose-500/10 to-transparent" },
  { id: "r2", src: romantico2, alt: "Diseño Romántico 2", category: "Pareja Romántica", span: "normal", color: "from-rose-500/10 to-transparent" },
  { id: "r3", src: romantico3, alt: "Diseño Romántico 3", category: "Pareja Romántica", span: "normal", color: "from-rose-500/10 to-transparent" },
  { id: "r4", src: romantico4, alt: "Diseño Romántico 4", category: "Pareja Romántica", span: "normal", color: "from-rose-500/10 to-transparent" },

  // Anime
  { id: "a1", src: anime1, alt: "Diseño Anime 1", category: "Parejas Fans del Anime", span: "normal", color: "from-blue-500/10 to-transparent" },
  { id: "a2", src: anime2, alt: "Diseño Anime 2", category: "Parejas Fans del Anime", span: "normal", color: "from-blue-500/10 to-transparent" },
  { id: "a3", src: anime3, alt: "Diseño Anime 3", category: "Parejas Fans del Anime", span: "normal", color: "from-blue-500/10 to-transparent" },
  { id: "a4", src: anime4, alt: "Diseño Anime 4", category: "Parejas Fans del Anime", span: "normal", color: "from-blue-500/10 to-transparent" },

  // Fútbol
  { id: "f1", src: futbol1, alt: "Diseño Fútbol 1", category: "Parejas Fans del Fútbol", span: "normal", color: "from-emerald-500/10 to-transparent" },
  { id: "f2", src: futbol2, alt: "Diseño Fútbol 2", category: "Parejas Fans del Fútbol", span: "normal", color: "from-emerald-500/10 to-transparent" },
  { id: "f3", src: futbol3, alt: "Diseño Fútbol 3", category: "Parejas Fans del Fútbol", span: "normal", color: "from-emerald-500/10 to-transparent" },
  { id: "f4", src: futbol4, alt: "Diseño Fútbol 4", category: "Parejas Fans del Fútbol", span: "normal", color: "from-emerald-500/10 to-transparent" },

  // Motociclismo
  { id: "m1", src: biker1, alt: "Diseño Biker 1", category: "Parejas Fans del Motociclismo", span: "normal", color: "from-zinc-500/10 to-transparent" },
  { id: "m2", src: biker2, alt: "Diseño Biker 2", category: "Parejas Fans del Motociclismo", span: "normal", color: "from-zinc-500/10 to-transparent" },
  { id: "m3", src: biker3, alt: "Diseño Biker 3", category: "Parejas Fans del Motociclismo", span: "normal", color: "from-zinc-500/10 to-transparent" },
  { id: "m4", src: biker4, alt: "Diseño Biker 4", category: "Parejas Fans del Motociclismo", span: "normal", color: "from-zinc-500/10 to-transparent" },

  // Kawai
  { id: "k1", src: kawai1, alt: "Diseño Kawai 1", category: "Parejas Kawai", span: "normal", color: "from-pink-500/10 to-transparent" },
  { id: "k2", src: kawai2, alt: "Diseño Kawai 2", category: "Parejas Kawai", span: "normal", color: "from-pink-500/10 to-transparent" },
  { id: "k3", src: kawai3, alt: "Diseño Kawai 3", category: "Parejas Kawai", span: "normal", color: "from-pink-500/10 to-transparent" },
  { id: "k4", src: kawai4, alt: "Diseño Kawai 4", category: "Parejas Kawai", span: "normal", color: "from-pink-500/10 to-transparent" },
];

const CATEGORIES = [
  "Pareja Romántica",
  "Parejas Fans del Anime",
  "Parejas Fans del Fútbol",
  "Parejas Fans del Motociclismo",
  "Parejas Kawai",
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]); // Default to Romántica
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(item => item.category === activeCategory);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  }, [selectedImage, filteredItems]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  }, [selectedImage, filteredItems]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleNext, handlePrev]);

  return (
    <section id="galeria" className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">
      {/* Decorative Orbs & Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20 text-balance">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-primary text-xs font-black mb-6 border border-zinc-200 shadow-sm uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Catálogo de Producción
            </div>
          </ScrollReveal>

          <h2 className="font-heading text-5xl md:text-6xl lg:text-8xl font-black mb-8 tracking-tighter leading-none text-zinc-900">
            <LetterReveal text="NUESTRA" className="inline-block" delay={0.1} />
            <br className="md:hidden" />
            <span className="md:ml-4 text-gradient-passion filter drop-shadow-sm">
              PRODUCCIÓN
            </span>
          </h2>

          <ScrollReveal delay={0.4}>
            <p className="text-zinc-500 text-lg md:text-2xl max-w-3xl mx-auto font-serif italic leading-relaxed mb-12">
              &ldquo;Donde la creatividad se encuentra con el hilo premium.&rdquo;
            </p>
          </ScrollReveal>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-xs font-black transition-all duration-300 border shadow-sm uppercase tracking-widest ${activeCategory === category
                  ? "bg-primary text-white border-primary shadow-primary/20"
                  : "bg-white text-zinc-500 border-zinc-200 hover:border-primary hover:text-primary"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Masonry Grid (Now Uniform) */}
        <StaggerContainer
          key={activeCategory} // Reset animations when category changes
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 auto-rows-[280px] md:auto-rows-[380px]"
          staggerDelay={0.05}
        >
          {filteredItems.map((item) => (
            <StaggerItem
              key={item.id}
              className="group relative h-full"
            >
              <motion.div
                className="h-full w-full rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-100 relative shadow-sm group-hover:shadow-xl transition-all duration-500 cursor-pointer"
                whileHover={{ y: -8 }}
                onClick={() => setSelectedImage(item)}
              >
                {/* Background Decor */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-60 transition-opacity`} />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Image Container */}
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                  <motion.img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay - Simplified for pure visual focus */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Action Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-primary border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 className="w-5 h-5" />
                  </div>

                </div>

                {/* Quick Info Badge */}
                <div className="absolute top-4 left-4 glass-card-glow py-1.5 px-3 rounded-full border border-white/20 shadow-sm transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter flex items-center gap-1">
                    <ShoppingBag className="w-3 h-3 text-primary" />
                    Steelo's Fam
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Lightbox / Modal Overlay */}
        <AnimatePresence mode="wait">
          {selectedImage && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              {/* Desktop Side Navigation - Hidden on Mobile */}
              <div className="absolute inset-0 hidden md:flex items-center justify-between px-12 pointer-events-none">
                <motion.button
                  className="pointer-events-auto p-4 rounded-full bg-white/10 text-white hover:bg-primary transition-all border border-white/10 backdrop-blur-md"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                >
                  <ChevronLeft className="w-8 h-8" />
                </motion.button>
                <motion.button
                  className="pointer-events-auto p-4 rounded-full bg-white/10 text-white hover:bg-primary transition-all border border-white/10 backdrop-blur-md"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                >
                  <ChevronRight className="w-8 h-8" />
                </motion.button>
              </div>

              <motion.div
                key={selectedImage.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-2xl w-full h-fit flex flex-col items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button Overlaying Top-Right of Content Area */}
                <motion.button
                  className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-[1000] p-3 md:p-4 rounded-full bg-white text-zinc-950 hover:bg-primary hover:text-white transition-all shadow-2xl border border-white/20"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[65vh] md:max-h-[75vh] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.05)] rounded-3xl"
                />

                {/* Mobile Bottom Navigation - Visible only on Mobile */}
                <div className="flex md:hidden items-center justify-center gap-8 mt-8">
                  <motion.button
                    className="p-5 rounded-full bg-white text-zinc-950 shadow-xl"
                    whileTap={{ scale: 0.8 }}
                    onClick={handlePrev}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </motion.button>
                  <motion.button
                    className="p-5 rounded-full bg-white text-zinc-950 shadow-xl"
                    whileTap={{ scale: 0.8 }}
                    onClick={handleNext}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </motion.button>
                </div>


              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Info */}
        <ScrollReveal delay={0.4} className="mt-20 text-center">
          <div className="inline-block p-1 rounded-2xl bg-zinc-100 mb-6">
            <div className="px-6 py-4 rounded-xl bg-white border border-zinc-200 shadow-sm flex flex-col md:flex-row items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-[10px] font-bold">
                  +2000
                </div>
              </div>
              <p className="text-sm font-medium text-zinc-600">
                Más de <span className="font-bold text-zinc-900 font-serif italic text-lg">2000 clientes satisfechos</span> confían en nuestra calidad.
              </p>
              <a
                href="https://www.facebook.com/share/1a3dBcqp4g/"
                target="_blank"
                className="btn-passion py-2 px-6 text-sm flex items-center gap-2"
              >
                Ver más en facebook
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GallerySection;
