import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles, MessageCircle, Palette, Type, Shirt } from "lucide-react";
import { ScrollReveal } from "../animations/ScrollReveal";
import { GlassCard } from "../animations/GlassCard";
import { MagneticButton } from "../animations/MagneticButton";
import { FloatingElement } from "../animations/FloatingElement";

import mockupHoodieBlack from "@/assets/mockup-hoodie-black.png";
import mockupHoodieWhite from "@/assets/mockup-hoodie-white.png";
import mockupTshirtBlack from "@/assets/mockup-tshirt-black.png";

type GarmentType = "hoodie" | "tshirt" | "sudadera";
type ColorType = "black" | "white";
type DesignStyle = "parejas" | "biker" | "anime" | "custom";

interface DesignOption {
  id: DesignStyle;
  name: string;
  icon: string;
  preview: string;
}

const garmentOptions = [
  { id: "hoodie" as GarmentType, name: "Hoodie Oversize", icon: "🧥" },
  { id: "tshirt" as GarmentType, name: "Polera", icon: "👕" },
  { id: "sudadera" as GarmentType, name: "Sudadera", icon: "🧤" },
];

const colorOptions = [
  { id: "black" as ColorType, name: "Negro", hex: "#0a0a0a" },
  { id: "white" as ColorType, name: "Blanco", hex: "#f5f5f5" },
];

const designStyles: DesignOption[] = [
  { id: "parejas", name: "Parejas ❤️", icon: "💕", preview: "Diseño romántico con corazones y nombres" },
  { id: "biker", name: "Biker 🏍️", icon: "🔥", preview: "Estilo motero con calaveras y alas" },
  { id: "anime", name: "Anime 🌸", icon: "✨", preview: "Personajes kawaii y sublimado" },
  { id: "custom", name: "Tu diseño 🎨", icon: "🖌️", preview: "Envíanos tu idea y la hacemos realidad" },
];

const getMockupImage = (garment: GarmentType, color: ColorType) => {
  if (garment === "hoodie" || garment === "sudadera") {
    return color === "black" ? mockupHoodieBlack : mockupHoodieWhite;
  }
  return mockupTshirtBlack;
};

const DesignConfigurator = () => {
  const [selectedGarment, setSelectedGarment] = useState<GarmentType>("hoodie");
  const [selectedColor, setSelectedColor] = useState<ColorType>("black");
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>("parejas");
  const [customText, setCustomText] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const generateWhatsAppMessage = () => {
    const garment = garmentOptions.find(g => g.id === selectedGarment)?.name;
    const color = colorOptions.find(c => c.id === selectedColor)?.name;
    const style = designStyles.find(s => s.id === selectedStyle)?.name;
    
    let message = `¡Hola Steelo's! 🔥❤️ Quiero personalizar mi prenda:\n\n`;
    message += `📦 Prenda: ${garment}\n`;
    message += `🎨 Color: ${color}\n`;
    message += `✨ Estilo: ${style}\n`;
    
    if (selectedStyle === "parejas" && (name1 || name2)) {
      message += `💕 Nombres: ${name1} & ${name2}\n`;
    }
    
    if (customText) {
      message += `📝 Texto/Idea: ${customText}\n`;
    }
    
    message += `\n¡Espero su respuesta! 🙌`;
    
    return encodeURIComponent(message);
  };

  return (
    <section id="diseña" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Palette className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Configurador Interactivo</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Diseña tu <span className="text-gradient-passion">Prenda</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Personaliza tu prenda perfecta y envíanos tu diseño por WhatsApp
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Preview Section */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  boxShadow: selectedStyle === "parejas" 
                    ? "0 0 100px 20px hsla(350, 100%, 50%, 0.2)" 
                    : selectedStyle === "biker"
                    ? "0 0 100px 20px hsla(45, 93%, 58%, 0.2)"
                    : "0 0 100px 20px hsla(330, 100%, 71%, 0.2)"
                }}
              />

              <FloatingElement intensity={15} rotateIntensity={5}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedGarment}-${selectedColor}`}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* Mockup Image */}
                    <img
                      src={getMockupImage(selectedGarment, selectedColor)}
                      alt={`${selectedGarment} ${selectedColor}`}
                      className="w-64 md:w-80 h-auto drop-shadow-2xl"
                      style={{
                        filter: selectedColor === "white" ? "drop-shadow(0 0 30px rgba(255,255,255,0.3))" : "drop-shadow(0 0 30px rgba(255,0,51,0.3))"
                      }}
                    />

                    {/* Design Overlay Preview */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      {selectedStyle === "parejas" && (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-center"
                        >
                          <Heart className="w-16 h-16 text-primary fill-primary/50 mx-auto" />
                          {(name1 || name2) && (
                            <p className="text-xs mt-2 font-medium text-primary">
                              {name1} ❤️ {name2}
                            </p>
                          )}
                        </motion.div>
                      )}
                      {selectedStyle === "biker" && (
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-5xl"
                        >
                          💀🔥
                        </motion.div>
                      )}
                      {selectedStyle === "anime" && (
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="text-5xl"
                        >
                          ✨🌸
                        </motion.div>
                      )}
                      {selectedStyle === "custom" && customText && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm font-bold text-primary text-center max-w-[150px] break-words"
                        >
                          {customText}
                        </motion.p>
                      )}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </FloatingElement>

              {/* Price Badge */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 right-4 glass-card-glow px-4 py-2 rounded-full"
              >
                <span className="text-sm font-bold text-gradient-gold">
                  Desde S/{selectedGarment === "hoodie" ? "99" : selectedGarment === "sudadera" ? "89" : "69"}
                </span>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Configurator Controls */}
          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <GlassCard className="p-6 md:p-8">
              {/* Step 1: Garment Type */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Shirt className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-bold text-lg">1. Elige tu prenda</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {garmentOptions.map((garment) => (
                    <motion.button
                      key={garment.id}
                      onClick={() => setSelectedGarment(garment.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-xl text-center transition-all ${
                        selectedGarment === garment.id
                          ? "bg-primary/20 border-2 border-primary"
                          : "bg-muted/30 border-2 border-transparent hover:border-primary/50"
                      }`}
                    >
                      <span className="text-2xl block mb-1">{garment.icon}</span>
                      <span className="text-xs font-medium">{garment.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Step 2: Color */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-5 h-5 text-secondary" />
                  <h3 className="font-heading font-bold text-lg">2. Elige el color</h3>
                </div>
                <div className="flex gap-4">
                  {colorOptions.map((color) => (
                    <motion.button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 rounded-full border-4 transition-all ${
                        selectedColor === color.id
                          ? "border-primary ring-4 ring-primary/30"
                          : "border-muted hover:border-primary/50"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Step 3: Design Style */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h3 className="font-heading font-bold text-lg">3. Estilo de diseño</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {designStyles.map((style) => (
                    <motion.button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-xl text-left transition-all ${
                        selectedStyle === style.id
                          ? "bg-primary/20 border-2 border-primary"
                          : "bg-muted/30 border-2 border-transparent hover:border-primary/50"
                      }`}
                    >
                      <span className="text-xl">{style.icon}</span>
                      <p className="font-semibold text-sm mt-1">{style.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{style.preview}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Step 4: Custom Details */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Type className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-bold text-lg">4. Personaliza</h3>
                </div>
                
                {selectedStyle === "parejas" && (
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="Nombre 1"
                      value={name1}
                      onChange={(e) => setName1(e.target.value)}
                      className="px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                      maxLength={15}
                    />
                    <input
                      type="text"
                      placeholder="Nombre 2"
                      value={name2}
                      onChange={(e) => setName2(e.target.value)}
                      className="px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                      maxLength={15}
                    />
                  </div>
                )}
                
                <textarea
                  placeholder={selectedStyle === "custom" 
                    ? "Describe tu diseño ideal... (ej: Quiero un dragón con nuestros nombres)" 
                    : "Detalles adicionales (opcional)"}
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
                  rows={3}
                  maxLength={200}
                />
                <p className="text-xs text-muted-foreground mt-1 text-right">
                  {customText.length}/200
                </p>
              </div>

              {/* CTA */}
              <MagneticButton
                href={`https://wa.me/+51921928668?text=${generateWhatsAppMessage()}`}
                target="_blank"
                className="w-full"
              >
                <motion.div
                  className="btn-passion w-full flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar Diseño por WhatsApp
                  <span className="text-xl">❤️‍🔥</span>
                </motion.div>
              </MagneticButton>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Te responderemos en minutos con cotización y tiempos de entrega
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DesignConfigurator;
