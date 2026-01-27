import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Sparkles, Zap } from "lucide-react";
import { FloatingElement } from "../animations/FloatingElement";
import { LetterReveal, TextReveal } from "../animations/TextReveal";
import { MagneticButton } from "../animations/MagneticButton";
import { ParticleHearts } from "../animations/ParticleHearts";
import { AnimatedGradient } from "../animations/AnimatedGradient";
import { TypewriterText } from "../animations/TypewriterText";

import heroImage from "@/assets/hero-couple.jpg";
import poleraVideo from "@/assets/Polera_Flotando.mp4";

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
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticButton
                  href="https://wa.me/+51921928668?text=Hola%20Steelo's!%20Quiero%20personalizar%20mi%20prenda%20❤️"
                  target="_blank"
                  className="btn-passion inline-flex items-center gap-2 text-base md:text-lg px-7 py-4 shadow-[0_0_20px_rgba(255,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </MagneticButton>

                <MagneticButton
                  onClick={scrollToCollections}
                  className="btn-outline-passion inline-flex items-center gap-2 text-base md:text-lg px-7 py-4 bg-white/5 backdrop-blur-sm border-white/20 text-white hover:border-white hover:bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all"
                >
                  <Sparkles className="w-5 h-5 text-accent" />
                  Colecciones
                </MagneticButton>

                <MagneticButton
                  onClick={scrollToBiker}
                  className="btn-outline-passion inline-flex items-center gap-2 text-base md:text-lg px-7 py-4 bg-zinc-950/20 backdrop-blur-sm border-zinc-800 text-zinc-400 hover:border-primary hover:text-white transition-all order-last sm:order-none"
                >
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Estilo Biker
                </MagneticButton>
              </div>
            </TextReveal>
          </div>

          {/* Floating Product (Video visible on all devices now) */}
          <div className="relative flex justify-center items-center mt-16 lg:mt-0">
            <FloatingElement intensity={25} rotateIntensity={8}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl" />

                <div
                  className="relative w-64 md:w-80 aspect-[10/14] overflow-hidden rounded-3xl shadow-2xl"
                  style={{
                    boxShadow: "0 0 60px hsla(350, 100%, 50%, 0.3)",
                  }}
                >
                  <video
                    src={poleraVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-top scale-[1.08] origin-top"
                  />
                </div>

                {/* Price Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -right-2 md:-right-4 top-8 glass-card-glow px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                >
                  <span className="text-xs md:text-sm font-bold text-gradient-gold">Desde S/89</span>
                </motion.div>

                {/* Love Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 }}
                  className="absolute -left-2 md:-left-4 bottom-12 glass-card-glow px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                >
                  <span className="text-sm md:text-lg">❤️‍🔥 100% Algodón</span>
                </motion.div>
              </motion.div>
            </FloatingElement>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
            onClick={scrollToCollections}
          >
            <div className="flex flex-col items-center gap-1 group-hover:scale-110 transition-transform duration-300">
              <div className="px-6 py-2 rounded-full border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.8)] bg-white/10 backdrop-blur-sm mb-2">
                <span className="text-base md:text-lg font-black text-white uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  Descubre más
                </span>
              </div>
              <ChevronDown className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
