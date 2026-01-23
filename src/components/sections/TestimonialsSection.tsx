import { motion } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../animations/ScrollReveal";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  initial: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María & Carlos",
    location: "Lima, Perú",
    text: "Nuestra polera de aniversario quedó perfecta. El bordado es de un nivel superior y el algodón se siente increíblemente suave. Fue el regalo más especial.",
    rating: 5,
    initial: "M",
    color: "bg-primary",
  },
  {
    id: "2",
    name: "Diego Rivera",
    location: "Cusco, Perú",
    text: "Buscaba algo resistente para mis rutas en moto y superó mis expectativas. El diseño es brutal y la calidad de la prenda es indiscutible. ¡Recomendado!",
    rating: 5,
    initial: "D",
    color: "bg-secondary",
  },
  {
    id: "3",
    name: "Valentina Paz",
    location: "Arequipa, Perú",
    text: "La atención por WhatsApp fue impecable y el envío a provincia muy rápido. La polera personalizada es ahora mi prenda favorita, ¡los detalles son únicos!",
    rating: 5,
    initial: "V",
    color: "bg-accent text-zinc-950",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="relative py-32 overflow-hidden bg-zinc-950">
      {/* Premium Dark Background with Vignette and Grain */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-zinc-950" />
        <div className="absolute inset-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)] opacity-80" />
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400">Testimonios Reales</span>
          </motion.div>

          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter text-white">
            Lo que dicen <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">nuestros clientes</span>
            </span>
          </h2>

          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            La confianza de nuestra comunidad es nuestro motor principal. Cada prenda cuenta una historia de estilo y pasión.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          staggerDelay={0.2}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <motion.div
                whileHover={{ y: -12 }}
                className="relative group h-full"
              >
                {/* Dark Glassmorphism Card */}
                <div className="relative h-full bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/60 shadow-2xl">

                  {/* Glowing Quote Icon */}
                  <div className="absolute top-8 right-10">
                    <Quote className="w-12 h-12 text-primary opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-zinc-300 text-lg font-medium leading-[1.8] mb-12 flex-grow italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-5 mt-auto pt-8 border-t border-white/5">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg ${testimonial.color} ring-4 ring-white/5 group-hover:ring-primary/20 transition-all duration-500`}>
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-black text-white tracking-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
