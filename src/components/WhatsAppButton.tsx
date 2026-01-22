import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = "https://wa.me/+51921928668?text=Hola%20Steelo's!%20Quiero%20personalizar%20mi%20prenda%20❤️";

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            <div className="glass-card-glow px-4 py-2 rounded-full">
              <p className="text-sm font-medium">¡Personaliza tu prenda ahora! 💕</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Ping Animation */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          }}
          animate={{
            scale: [1, 1.4, 1.4],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
