import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Zap } from "lucide-react";
import { FloatingElement } from "../animations/FloatingElement";
import { LetterReveal, TextReveal } from "../animations/TextReveal";
import { MagneticButton } from "../animations/MagneticButton";
import { ParticleHearts } from "../animations/ParticleHearts";
import { AnimatedGradient } from "../animations/AnimatedGradient";
import { TypewriterText } from "../animations/TypewriterText";

import heroImage from "@/assets/hero-couple.jpg";
import poleraMujerVideo from "@/assets/Polera_Flotando.mp4";
import poleraVaronVideo from "@/assets/parejavaron.mp4";
import whatsappIcon from "@/assets/iconos/whatsapp.svg";

const HeroSection = () => {
  const scrollToCollections = () => {
    document.getElementById("colecciones")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBiker = () => {
    document.getElementById("biker-collection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradient />
      <ParticleHearts count={20} />

      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pareja con hoodies Steelo's"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Brand Badge */}
            <TextReveal delay={0.2}>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">
                  Hecho con amor en Huánuco, Perú
                </span>
              </motion.div>
            </TextReveal>

            {/* Main Title */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6">
              <LetterReveal
                text="STEELO'S"
                className="text-gradient-passion text-glow"
                delay={0.4}
              />
              <br />
              <TextReveal delay={0.8}>
                <span className="text-foreground">PERÚ</span>
              </TextReveal>
            </h1>

            {/* Subtitle */}
            <TextReveal delay={1}>
              <p className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold mb-4">
                <TypewriterText
                  text="Más que una prenda, un recuerdo con estilo ❤️‍🔥"
                  delay={1.5}
                  speed={40}
                />
              </p>
            </TextReveal>

            {/* Description */}
            <TextReveal delay={1.2}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8">
                Poleras personalizadas para parejas, bikers y momentos que duran para siempre.
                100% algodón premium con bordado y sublimado. Envíos a todo el Perú.
              </p>
            </TextReveal>

            {/* CTAs */}
            <TextReveal delay={1.4}>
              <div className="flex flex-col gap-4 justify-center lg:justify-start">
                <MagneticButton
                  href="https://wa.me/+51921928668?text=Hola%20Steelo's!%20Quiero%20personalizar%20mi%20prenda%20❤️"
                  target="_blank"
                  className="btn-passion inline-flex items-center gap-3 text-base md:text-lg px-7 py-3 md:py-4 shadow-[0_0_20px_rgba(255,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 invert contrast-200" />
                  WhatsApp
                </MagneticButton>

                <div className="flex flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
                  <MagneticButton
                    onClick={scrollToCollections}
                    className="flex-1 sm:flex-none btn-outline-passion inline-flex items-center justify-center gap-2 text-[11px] md:text-lg px-3.5 md:px-7 py-2.5 md:py-4 bg-white/5 backdrop-blur-sm border-white/20 text-white hover:border-white hover:bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 md:w-5 md:h-5 text-accent" />
                    Colecciones
                  </MagneticButton>

                  <MagneticButton
                    onClick={scrollToBiker}
                    className="flex-1 sm:flex-none btn-outline-passion inline-flex items-center justify-center gap-2 text-[11px] md:text-lg px-3.5 md:px-7 py-2.5 md:py-4 bg-zinc-950/20 backdrop-blur-sm border-zinc-800 text-zinc-400 hover:border-primary hover:text-white transition-all"
                  >
                    <Zap className="w-3.5 h-3.5 md:w-5 md:h-5 text-yellow-500" />
                    Estilo Biker
                  </MagneticButton>
                </div>
              </div>
            </TextReveal>
          </div>

          {/* Floating Products (Videos) */}
          <div className="relative flex justify-center items-center mt-16 lg:mt-0 px-4">
            <div className="relative flex flex-row items-center justify-center gap-4 md:gap-8 lg:gap-10">
              {/* Woman Video Card */}
              <FloatingElement intensity={20} rotateIntensity={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative group pt-10 lg:pt-0"
                >
                  <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative w-36 sm:w-48 md:w-64 lg:w-72 aspect-[10/14] overflow-hidden rounded-[2rem] shadow-2xl border border-white/10">
                    <video
                      src={poleraMujerVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onEnded={(e) => e.currentTarget.play()}
                      className="absolute inset-0 w-full h-full object-cover object-top scale-[1.08] origin-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Woman Badge */}
                  <motion.div
                    className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter text-white z-10"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Damas
                  </motion.div>
                </motion.div>
              </FloatingElement>

              {/* Man Video Card */}
              <FloatingElement intensity={25} rotateIntensity={8}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="relative group -mt-10 lg:mt-10"
                >
                  <div className="absolute -inset-6 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative w-36 sm:w-48 md:w-64 lg:w-72 aspect-[10/14] overflow-hidden rounded-[2rem] shadow-2xl border border-white/10"
                    style={{ boxShadow: "0 0 60px hsla(350, 100%, 50%, 0.15)" }}>
                    <video
                      src={poleraVaronVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onEnded={(e) => e.currentTarget.play()}
                      className="absolute inset-0 w-full h-full object-cover object-top scale-[1.08] origin-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Man Badge */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter text-primary z-10"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    Varones
                  </motion.div>
                </motion.div>
              </FloatingElement>

              {/* Central Floating Badges (Relative to the whole video group) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 glass-card-glow px-4 py-2 rounded-full whitespace-nowrap z-20 scale-90 md:scale-100"
              >
                <span className="text-xs md:text-sm font-bold text-gradient-gold">Dúos desde S/160</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
            onClick={scrollToCollections}
          >
            <div className="flex flex-col items-center gap-1 group-hover:scale-110 transition-transform duration-300">
              <div className="px-4 md:px-6 py-1 md:py-2 rounded-full border-2 border-white/50 md:border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] md:shadow-[0_0_20px_rgba(255,255,255,0.8)] bg-white/10 backdrop-blur-sm mb-2">
                <span className="text-[10px] md:text-lg font-black text-white uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  Descubre más
                </span>
              </div>
              <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
