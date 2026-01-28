import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { GlassCard } from "@/components/animations/GlassCard";

const Terms = () => {
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
                        Términos y <span className="text-gradient-passion">Condiciones</span>
                    </h1>
                </TextReveal>

                <GlassCard className="p-8 md:p-12 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                            1. Aceptación de Términos
                        </h2>
                        <p className="leading-relaxed">
                            Al acceder y utilizar el sitio web de Steelo's Perú, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le rogamos que no utilice nuestro sitio.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">2. Productos y Pedidos</h2>
                        <p className="leading-relaxed">
                            Todas nuestras prendas son personalizadas bajo pedido. Nos esforzamos por mostrar los colores y diseños de la manera más precisa posible, sin embargo, pueden existir ligeras variaciones entre la visualización en pantalla y el producto final debido a la naturaleza artesanal del bordado y sublimado.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">3. Envíos y Entregas</h2>
                        <p className="leading-relaxed">
                            Realizamos envíos a todo el Perú a través de agencias de confianza. Los tiempos de entrega pueden variar según la ubicación y la carga de trabajo de producción, siendo el tiempo estimado estándar de 3 a 7 días hábiles tras la confirmación del diseño.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">4. Políticas de Devolución</h2>
                        <p className="leading-relaxed">
                            Al tratarse de productos personalizados, solo se aceptarán devoluciones o cambios en caso de fallas de fabricación evidentes o errores por parte de Steelo's Perú en la personalización solicitada.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">5. Propiedad Intelectual</h2>
                        <p className="leading-relaxed">
                            Todos los diseños, logotipos y contenido presentados en este sitio son propiedad de Steelo's Perú y no pueden ser reproducidos ni utilizados sin nuestro consentimiento previo por escrito.
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

export default Terms;
