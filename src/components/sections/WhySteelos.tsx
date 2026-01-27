import { motion } from "framer-motion";
import { Heart, ShieldCheck, Palette, Handshake, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  glowColor: string;
  accentClass: string;
}

const benefits: Benefit[] = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Calidad Sublime",
    description: "Algodón afranelado premium, suave al tacto, resistente al uso diario y pensado para durar sin perder forma ni color.",
    glowColor: "rgba(239, 68, 68, 0.5)", // Red
    accentClass: "text-red-500 bg-red-500/10 border-red-500/20",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Esencia Única",
    description: "Diseños que hablan de ti. Personaliza nombres, fechas, iniciales o imágenes y convierte cada prenda en algo verdaderamente tuyo.",
    glowColor: "rgba(236, 72, 153, 0.5)", // Pink
    accentClass: "text-pink-500 bg-pink-500/10 border-pink-500/20",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Hecho para Resistir",
    description: "Estampado DTF de alta calidad que no se despega, no se cuartea y no despinta, incluso después de muchas lavadas.",
    glowColor: "rgba(234, 179, 8, 0.5)", // Yellow
    accentClass: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Confianza STEELO’S",
    description: "Te mostramos tu pedido terminado antes del envío, con atención cercana y procesos claros de inicio a fin.",
    glowColor: "rgba(153, 27, 27, 0.5)", // Dark Red
    accentClass: "text-red-900 bg-red-900/10 border-red-900/20",
  },
];

const WhySteelos = () => {
  return (
    <section id="nosotros" className="relative py-32 overflow-hidden bg-zinc-950">
      {/* Premium Dark Background with Vignette and Grain */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black opacity-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400">Nuestra Filosofía</span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter text-white">
            ¿Por qué <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">Steelo's</span>
            </span>?
          </h2>

          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            No vendemos prendas. Creamos piezas que te representan.
            Cada diseño nace para contar tu historia,
            con materiales de alta calidad, acabados duraderos y el
            cuidado de manos peruanas que entienden el valor de hacerlo bien.
          </p>
        </ScrollReveal>

        {/* Benefits Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          staggerDelay={0.1}
        >
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                {/* Glow Background Indicator */}
                <div
                  className="absolute -inset-0.5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-xl z-0"
                  style={{ backgroundColor: benefit.glowColor }}
                />

                {/* Dark Glassmorphism Card */}
                <div className="relative h-full bg-zinc-900/50 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 flex flex-col items-center text-center transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/80 z-10">
                  {/* Icon Container */}
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 border backdrop-blur-md transition-transform duration-500 group-hover:scale-110 ${benefit.accentClass}`}>
                    <div className="relative">
                      {benefit.icon}
                      <div className="absolute inset-0 blur-lg opacity-50">{benefit.icon}</div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-black mb-4 tracking-tight text-white transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative dot */}
                  <div className={`w-1 h-1 rounded-full mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${benefit.accentClass.split(' ')[0]}`} />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhySteelos;
