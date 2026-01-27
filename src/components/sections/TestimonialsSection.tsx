import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ScrollReveal } from "../animations/ScrollReveal";

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
  {
    id: "4",
    name: "Renato Torres",
    location: "Iquitos, Perú",
    text: "La frescura de la tela es ideal para el calor de Iquitos. Pedí un diseño personalizado y captaron la esencia perfectamente. ¡El envío fue súper rápido!",
    rating: 5,
    initial: "R",
    color: "bg-blue-600",
  },
  {
    id: "5",
    name: "Luciana G. ",
    location: "Pucallpa, Perú",
    text: "Increíble cómo plasman nuestra energía en prendas tan modernas. El bordado es resistente y los colores vibrantes. ¡Orgullo total vestir Steelos!",
    rating: 5,
    initial: "L",
    color: "bg-orange-500",
  },
  {
    id: "6",
    name: "Mateo Rojas",
    location: "Huánuco, Perú",
    text: "¡Qué bueno tener talento así aquí en mi tierra! La calidad es de exportación. Muy orgulloso de usar algo hecho con tanto estilo y pasión huanuqueña.",
    rating: 5,
    initial: "M",
    color: "bg-red-600",
  },
  {
    id: "7",
    name: "Sofía Mendoza",
    location: "Cajamarca, Perú",
    text: "Perfectas para el frío de Cajamarca. Son súper abrigadoras y el diseño es exactamente lo que buscaba. ¡La mejor inversión en ropa que he hecho!",
    rating: 5,
    initial: "S",
    color: "bg-emerald-600",
  },
  {
    id: "8",
    name: "Alejandro V.",
    location: "Lambayeque, Perú",
    text: "El algodón es de primera, se nota la calidad en cada acabado. El envío a Chiclayo fue impecable y el empaque muy premium. ¡Superó todo!",
    rating: 5,
    initial: "A",
    color: "bg-purple-600",
  },
  {
    id: "9",
    name: "Camila Ruiz",
    location: "Trujillo, Perú",
    text: "Estilo puro para la ciudad. Mis amigos siempre me preguntan dónde compré mi polera. ¡Diseños que marcan la diferencia en cualquier lugar!",
    rating: 5,
    initial: "C",
    color: "bg-pink-600",
  },
  {
    id: "10",
    name: "Ricardo M.",
    location: "Arequipa, Perú",
    text: "Orgulloso de representar el espíritu aventurero con Steelos. La atención personalizada por WhatsApp hace que todo sea muy sencillo. ¡100% recomendados!",
    rating: 5,
    initial: "R",
    color: "bg-amber-600",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 1 }
      }
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section id="testimonios" className="relative py-32 overflow-hidden bg-zinc-950">
      {/* Premium Dark Background with Vignette and Grain */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-zinc-950" />
        <div className="absolute inset-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)] opacity-80" />
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

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_25%] py-4"
                >
                  <motion.div
                    whileHover={{ y: -12 }}
                    className="relative group h-full"
                  >
                    {/* Dark Glassmorphism Card */}
                    <div className="relative h-full bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 flex flex-col transition-all duration-500 group-hover:border-white/10 group-hover:bg-zinc-900/60 shadow-2xl">

                      {/* Glowing Quote Icon */}
                      <div className="absolute top-6 right-8 md:top-8 md:right-10">
                        <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1.5 mb-6 md:mb-8">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-zinc-300 text-base md:text-lg font-medium leading-[1.6] md:leading-[1.8] mb-8 md:mb-12 flex-grow italic">
                        "{testimonial.text}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 mt-auto pt-6 md:pt-8 border-t border-white/5">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg ${testimonial.color} ring-4 ring-white/5 transition-all duration-500`}>
                          {testimonial.initial}
                        </div>
                        <div>
                          <h4 className="font-heading text-base md:text-lg font-black text-white tracking-tight">
                            {testimonial.name}
                          </h4>
                          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-12">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-white/10 hover:bg-white/20"
                  }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
