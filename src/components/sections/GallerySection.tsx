import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ShoppingBag, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";
import { LetterReveal } from "../animations/TextReveal";

import galeria1 from "@/assets/galeria.png";
import galeria2 from "@/assets/galeria2.png";
import galeria3 from "@/assets/galeria3.png";
import galeria4 from "@/assets/galeria4.png";
import galeria5 from "@/assets/galeria5.png";
import galeria6 from "@/assets/galeria6.png";
import galeria7 from "@/assets/galeria7.png";
import galeria8 from "@/assets/galeria8.png";
import galeria9 from "@/assets/galeria9.png";
import galeria10 from "@/assets/galeria10.png";
import galeria11 from "@/assets/galeria11.png";
import galeria12 from "@/assets/galeria12.png";
import galeria13 from "@/assets/galeria13.png";
import galeria14 from "@/assets/galeria14.png";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  span: "normal" | "tall" | "wide" | "big";
  color: string;
}

const galleryItems: GalleryItem[] = [
  { id: "1", src: galeria1, alt: "Polera Steelo's", category: "Premium", span: "normal", color: "from-rose-500/10 to-transparent" },
  { id: "2", src: galeria2, alt: "Diseño Exclusivo", category: "Personalizado", span: "normal", color: "from-blue-500/10 to-transparent" },
  { id: "3", src: galeria3, alt: "Detalle Bordado", category: "Bordado", span: "normal", color: "from-amber-500/10 to-transparent" },
  { id: "4", src: galeria4, alt: "Estilo Urbano", category: "Premium", span: "normal", color: "from-purple-500/10 to-transparent" },
  { id: "5", src: galeria5, alt: "Colección Love", category: "Parejas", span: "normal", color: "from-pink-500/10 to-transparent" },
  { id: "6", src: galeria6, alt: "Arte en Textil", category: "Personalizado", span: "normal", color: "from-emerald-500/10 to-transparent" },
  { id: "7", src: galeria7, alt: "Hoodie Biker", category: "Bikers", span: "normal", color: "from-zinc-500/10 to-transparent" },
  { id: "8", src: galeria8, alt: "Polera Anime", category: "Anime", span: "normal", color: "from-indigo-500/10 to-transparent" },
  { id: "9", src: galeria9, alt: "Calidad Premium", category: "Premium", span: "normal", color: "from-orange-500/10 to-transparent" },
  { id: "10", src: galeria10, alt: "Streetwear", category: "Estilo", span: "normal", color: "from-cyan-500/10 to-transparent" },
  { id: "11", src: galeria11, alt: "Pareja Matching", category: "Parejas", span: "normal", color: "from-red-500/10 to-transparent" },
  { id: "12", src: galeria12, alt: "Hoodie Oversize", category: "Colección", span: "normal", color: "from-violet-500/10 to-transparent" },
  { id: "13", src: galeria13, alt: "Diseño Único", category: "Personalizado", span: "normal", color: "from-teal-500/10 to-transparent" },
  { id: "14", src: galeria14, alt: "Steelo's Style", category: "Premium", span: "normal", color: "from-fuchsia-500/10 to-transparent" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  }, [selectedImage]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex]);
  }, [selectedImage]);

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
            <p className="text-zinc-500 text-lg md:text-2xl max-w-3xl mx-auto font-serif italic leading-relaxed">
              &ldquo;Donde la creatividad se encuentra con el hilo premium.&rdquo;
            </p>
          </ScrollReveal>
        </div>

        {/* Masonry Grid (Now Uniform) */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
          staggerDelay={0.05}
        >
          {galleryItems.map((item) => (
            <StaggerItem
              key={item.id}
              className="group relative"
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
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                  <motion.img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-xs font-bold uppercase tracking-wider mb-1 opacity-70">
                      {item.category}
                    </p>
                    <h3 className="text-white font-heading text-lg font-bold">
                      {item.alt}
                    </h3>
                  </div>
                </div>

                {/* Action Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-primary border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-primary border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 delay-75">
                    <Heart className="w-5 h-5 fill-primary" />
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
              <div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none">
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

                <div className="mt-8 text-center bg-zinc-900/40 backdrop-blur-xl p-6 md:p-6 rounded-[2.5rem] border border-white/5 w-full shadow-2xl md:hidden">
                  <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] border border-primary/30">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white font-heading text-2xl md:text-3xl font-black mt-4 tracking-tighter">
                    {selectedImage.alt}
                  </h3>
                  <p className="text-zinc-500 mt-2 font-medium">Original Steelo's Perú • Calidad Premium</p>
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
                  +500
                </div>
              </div>
              <p className="text-sm font-medium text-zinc-600">
                Más de <span className="font-bold text-zinc-900 font-serif italic text-lg">500 clientes satisfechos</span> confían en nuestra calidad.
              </p>
              <a
                href="https://instagram.com/con_steelos"
                target="_blank"
                className="btn-passion py-2 px-6 text-sm flex items-center gap-2"
              >
                Ver más en Instagram
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GallerySection;
