import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "../animations/ScrollReveal";
import { GlassCard } from "../animations/GlassCard";
import { useRef, useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María & Carlos",
    location: "Lima",
    text: "¡Nuestra polera de aniversario quedó PERFECTA! El bordado es de lujo y el algodón es super suave. Mi novio lloró cuando la vio 😭❤️",
    rating: 5,
  },
  {
    id: "2",
    name: "Diego R.",
    location: "Cusco",
    text: "Como biker, busco prendas que aguanten. Esta hoodie no solo aguanta, ¡se ve brutal! Todos mis patas quieren una igual.",
    rating: 5,
  },
  {
    id: "3",
    name: "Valentina",
    location: "Arequipa",
    text: "Le regalé a mi hermana una polera anime y ahora es su prenda favorita. La atención por WhatsApp fue súper rápida y amable.",
    rating: 5,
  },
  {
    id: "4",
    name: "Andrea & Luis",
    location: "Trujillo",
    text: "Compramos el matching set para nuestro viaje. ¡Todas las fotos quedaron increíbles! El envío llegó súper rápido.",
    rating: 5,
  },
  {
    id: "5",
    name: "Rodrigo M.",
    location: "Huánuco",
    text: "Orgullo huanuqueño! Conozco a los chicos de Steelo's y ver cómo crean empleo local me llena el corazón. ¡Y la calidad es top!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section className="relative py-24 md:py-32 bg-card/30 overflow-hidden">
      {/* Background Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Lo que dicen <span className="text-gradient-passion">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Miles de parejas y bikers peruanos ya viven la experiencia Steelo's
          </p>
        </ScrollReveal>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[320px] md:w-[380px]"
              >
                <GlassCard 
                  glowColor={index % 3 === 0 ? "red" : index % 3 === 1 ? "pink" : "gold"}
                  className="p-6 h-full"
                  hoverEffect={!isDragging}
                >
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/40 mb-4" />

                  {/* Text */}
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-passion flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Hint */}
          <p className="text-center text-muted-foreground text-sm mt-4">
            ← Desliza para ver más →
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
