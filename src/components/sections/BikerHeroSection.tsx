import { motion } from "framer-motion";
import { Sparkles, Shield, Zap } from "lucide-react";
import { FloatingElement } from "../animations/FloatingElement";
import { LetterReveal, TextReveal } from "../animations/TextReveal";
import { MagneticButton } from "../animations/MagneticButton";
import { ParticleHearts } from "../animations/ParticleHearts";
import { AnimatedGradient } from "../animations/AnimatedGradient";
import { TypewriterText } from "../animations/TypewriterText";

import bikerBg from "@/assets/galeria/biker/biker1.png";
import bikerVideo from "@/assets/biker.mp4";
import whatsappIcon from "@/assets/iconos/whatsapp.svg";

const BikerHeroSection = () => {
    return (
        <section id="biker-collection" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
            {/* Dark Biker Background Decor */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bikerBg}
                    alt="Biker Collection Background"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
            </div>

            <AnimatedGradient />
            {/* Reuse hearts for romantic biker theme or skip for "aggressive" style? 
          User site is "Wear Your Love", so keeping hearts but maybe fewer/subtle. */}
            <ParticleHearts count={10} />

            <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <TextReveal delay={0.2}>
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-6"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Zap className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm font-black text-zinc-400 uppercase tracking-widest">
                                    Edición Especial Biker 🏍️
                                </span>
                            </motion.div>
                        </TextReveal>

                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                            <LetterReveal
                                text="ESTILO"
                                className="text-white"
                                delay={0.4}
                            />
                            <br />
                            <TextReveal delay={0.8}>
                                <span className="text-gradient-passion text-glow">BIKER</span>
                            </TextReveal>
                        </h1>

                        <TextReveal delay={1}>
                            <p className="text-xl md:text-2xl font-heading font-bold mb-4 text-zinc-300">
                                <TypewriterText
                                    text="Para los que viven la ruta con pasión 🛣️🖤"
                                    delay={1.5}
                                    speed={40}
                                />
                            </p>
                        </TextReveal>

                        <TextReveal delay={1.2}>
                            <p className="text-zinc-500 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
                                Diseños rudos, materiales premium y la resistencia que necesitas en cada kilómetro.
                                Personaliza tu orgullo biker con el sello Original Steelo's Perú.
                            </p>
                        </TextReveal>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <MagneticButton
                                href="https://wa.me/+51921928668?text=Hola%20Steelo's!%20Quiero%20ver%20el%20catálogo%20Biker%20🏍️"
                                target="_blank"
                                className="btn-passion inline-flex items-center gap-2 text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                            >
                                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 md:w-5 md:h-5 invert contrast-200" />
                                Pedir Catálogo Biker
                            </MagneticButton>

                            <div className="px-6 py-4 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md flex items-center gap-4">
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <Shield className="w-4 h-4 text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-wider">Durabilidad Extrema</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Product Image */}
                    <div className="relative flex justify-center items-center">
                        <FloatingElement intensity={20} rotateIntensity={5}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="relative"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px]" />

                                <div className="relative w-64 md:w-96 aspect-[10/14] bg-zinc-950/40 backdrop-blur-3xl rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden group">
                                    <video
                                        src={bikerVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover object-top scale-[1.08] origin-top transform group-hover:scale-[1.15] transition-transform duration-700"
                                    />

                                    {/* Floating Badges */}
                                    <motion.div
                                        className="absolute top-6 right-6 bg-yellow-500 text-black px-3 py-1 rounded-lg font-black text-[10px] uppercase tracking-tighter z-10"
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        Resistente
                                    </motion.div>
                                </div>
                            </motion.div>
                        </FloatingElement>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BikerHeroSection;
