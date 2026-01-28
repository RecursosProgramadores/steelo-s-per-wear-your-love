import { motion } from "framer-motion";
import { ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { GlassCard } from "@/components/animations/GlassCard";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-300 py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <Link to="/">
                        <MagneticButton className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Volver al Inicio
                        </MagneticButton>
                    </Link>
                </div>

                <TextReveal>
                    <h1 className="font-heading text-4xl md:text-6xl font-black text-white mb-8">
                        Política de <span className="text-gradient-passion">Privacidad</span>
                    </h1>
                </TextReveal>

                <GlassCard className="p-8 md:p-12 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-3">
                            <Lock className="w-6 h-6 text-primary" />
                            1. Protección de Datos
                        </h2>
                        <p className="leading-relaxed">
                            En Steelo's Perú, valoramos su privacidad. Toda la información personal compartida a través de nuestros canales de contacto (WhatsApp, formularios) es utilizada exclusivamente para la gestión de su pedido y la personalización de sus prendas.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">2. Información Recopilada</h2>
                        <p className="leading-relaxed">
                            Recopilamos datos básicos como nombre, dirección de envío y número de contacto para asegurar una entrega exitosa. No compartimos, vendemos ni distribuimos su información a terceros con fines comerciales.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">3. Seguridad de la Información</h2>
                        <p className="leading-relaxed">
                            Implementamos medidas de seguridad para proteger su información. Al utilizar enlaces directos a WhatsApp, la comunicación está cifrada de extremo a extremo por la plataforma de mensajería.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">4. Uso de Cookies</h2>
                        <p className="leading-relaxed">
                            Nuestro sitio web utiliza cookies técnicas para mejorar la experiencia de navegación y asegurar el correcto funcionamiento de las animaciones y el diseño premium que ofrecemos.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">5. Sus Derechos</h2>
                        <p className="leading-relaxed">
                            Usted tiene derecho a solicitar el acceso, corrección o eliminación de sus datos personales de nuestros registros en cualquier momento a través de nuestros canales oficiales de contacto.
                        </p>
                    </section>
                </GlassCard>

                <footer className="mt-12 text-center text-zinc-600 text-sm">
                    Última actualización: Enero 2026
                </footer>
            </div>
        </div>
    );
};

export default Privacy;
