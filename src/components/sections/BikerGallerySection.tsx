import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    Maximize2,
    ChevronLeft,
    ChevronRight,
    ShoppingBag,
    Heart,
    ExternalLink
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";

// Import biker images dynamically
const bikerImages = import.meta.glob("@/assets/biker/**/*.png", { eager: true });

const BRANDS = ["HONDA", "KTM", "KAWASAKI", "PULSAR", "DUCATI", "YAMAHA"];

const BRAND_COLORS: Record<string, string> = {
    "HONDA": "from-red-500/10 to-transparent",
    "KTM": "from-orange-500/10 to-transparent",
    "KAWASAKI": "from-green-500/10 to-transparent",
    "PULSAR": "from-blue-500/10 to-transparent",
    "DUCATI": "from-red-600/10 to-transparent",
    "YAMAHA": "from-blue-600/10 to-transparent",
};

interface BikerItem {
    id: string;
    src: string;
    alt: string;
    brand: string;
    color: string;
}

// Generate gallery items from imported images
const bikerGalleryItems: BikerItem[] = Object.entries(bikerImages).map(([path, module]: [string, any]) => {
    // Extract brand from path (e.g., .../biker/DUCATI/ducati1.png -> DUCATI)
    const pathParts = path.split('/');
    const brandName = pathParts[pathParts.length - 2].toUpperCase();
    const fileName = pathParts[pathParts.length - 1].split('.')[0];

    return {
        id: `${brandName}-${fileName}`,
        src: module.default,
        alt: `${brandName} Style ${fileName}`,
        brand: brandName,
        color: BRAND_COLORS[brandName] || "from-zinc-500/10 to-transparent"
    };
});

const BikerGallerySection = () => {
    const [activeBrand, setActiveBrand] = useState(BRANDS[0]);
    const [selectedImage, setSelectedImage] = useState<BikerItem | null>(null);

    const filteredItems = bikerGalleryItems.filter(item => item.brand === activeBrand);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setSelectedImage(filteredItems[nextIndex]);
    }, [selectedImage, filteredItems]);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = filteredItems.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setSelectedImage(filteredItems[prevIndex]);
    }, [selectedImage, filteredItems]);

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter">
                        Colección por <span className="text-gradient-passion">Marca</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto font-medium">
                        Elige tu potencia favorita y personaliza tu pasión.
                    </p>
                </ScrollReveal>

                {/* Brand Selector */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
                    {BRANDS.map((brand) => (
                        <motion.button
                            key={brand}
                            onClick={() => setActiveBrand(brand)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2.5 rounded-xl text-[10px] font-black transition-all duration-300 border uppercase tracking-widest ${activeBrand === brand
                                ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                                : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-primary/50 hover:text-zinc-300"
                                }`}
                        >
                            {brand}
                        </motion.button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <StaggerContainer
                    key={activeBrand}
                    className="flex flex-wrap justify-center gap-4 md:gap-8"
                    staggerDelay={0.05}
                >
                    {filteredItems.map((item) => (
                        <StaggerItem
                            key={item.id}
                            className="group relative w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)] h-[280px] md:h-[380px]"
                        >
                            <motion.div
                                className="h-full w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 relative shadow-sm group-hover:shadow-xl transition-all duration-500 cursor-pointer"
                                whileHover={{ y: -8 }}
                                onClick={() => setSelectedImage(item)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-60 transition-opacity`} />
                                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                                    <motion.img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <div className="w-8 h-8 rounded-full bg-zinc-900/90 backdrop-blur-md shadow-lg flex items-center justify-center text-primary border border-zinc-800 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <Maximize2 className="w-4 h-4" />
                                    </div>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-lg inline-block">
                                        <span className="text-[8px] font-black text-primary uppercase tracking-widest">{item.brand} EDITION</span>
                                    </div>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/98 backdrop-blur-xl p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button className="absolute top-6 right-6 p-4 text-white hover:text-primary transition-colors z-[1001]">
                                <X className="w-8 h-8" />
                            </button>

                            <div className="absolute inset-0 hidden md:flex items-center justify-between px-12 pointer-events-none">
                                <motion.button
                                    className="pointer-events-auto p-4 rounded-full bg-white/5 text-white hover:bg-primary transition-all border border-white/5"
                                    whileHover={{ scale: 1.1, x: -5 }}
                                    onClick={handlePrev}
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </motion.button>
                                <motion.button
                                    className="pointer-events-auto p-4 rounded-full bg-white/5 text-white hover:bg-primary transition-all border border-white/5"
                                    whileHover={{ scale: 1.1, x: 5 }}
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
                                className="relative max-w-2xl w-full flex flex-col items-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="max-w-full max-h-[70vh] object-contain rounded-2xl"
                                />

                                <div className="flex md:hidden items-center justify-center gap-12 mt-8">
                                    <button onClick={handlePrev} className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-white shadow-xl">
                                        <ChevronLeft className="w-8 h-8" />
                                    </button>
                                    <button onClick={handleNext} className="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-white shadow-xl">
                                        <ChevronRight className="w-8 h-8" />
                                    </button>
                                </div>

                                <div className="mt-8 text-center">

                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-16 text-center">
                    <p className="text-zinc-600 text-xs font-bold uppercase tracking-[0.3em]">
                        Original Steelo's Perú • Calidad de Élite
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BikerGallerySection;
