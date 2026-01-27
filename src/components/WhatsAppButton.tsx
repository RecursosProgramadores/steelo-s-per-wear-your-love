import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone } from "lucide-react";
import { useState } from "react";
import whatsappIcon from "@/assets/iconos/whatsapp.svg";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "51921928668";
  const defaultMessage = "¡Hola Steelo's! Me gustaría obtener más información sobre sus poleras personalizadas.";

  const handleWhatsApp = (customMessage = defaultMessage) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-72 rounded-3xl overflow-hidden glass-card shadow-2xl border border-white/20 mb-2"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 invert" />
                </div>
                <div>
                  <h4 className="font-bold">Steelo's Perú</h4>
                  <p className="text-xs text-white/80 italic">Responde al instante</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 bg-white/95 backdrop-blur-md flex flex-col gap-3">
              <button
                onClick={() => handleWhatsApp("¡Hola! Quiero ver el catálogo de poleras.")}
                className="w-full p-4 rounded-2xl bg-white border border-zinc-100 hover:border-primary transition-colors text-left text-sm flex items-center gap-3 group text-zinc-900 font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Send className="w-4 h-4" />
                </div>
                <span>Ver Catálogo</span>
              </button>

              <button
                onClick={() => handleWhatsApp("¡Hola! Me gustaría cotizar un pedido para mi grupo.")}
                className="w-full p-4 rounded-2xl bg-white border border-zinc-100 hover:border-primary transition-colors text-left text-sm flex items-center gap-3 group text-zinc-900 font-medium"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Cotizar Pedido</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? "bg-zinc-900 text-white rotate-90" : "bg-primary text-white"
          }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <img src={whatsappIcon} alt="WhatsApp" className="w-9 h-9 invert" />}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
