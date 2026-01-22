import { motion } from "framer-motion";
import { Heart, Instagram, Music, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { ScrollReveal } from "../animations/ScrollReveal";
import { MagneticButton } from "../animations/MagneticButton";

const socials = [
  {
    name: "TikTok",
    icon: <Music className="w-5 h-5" />,
    url: "https://tiktok.com/@con_steelos",
    handle: "@con_steelos",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    url: "https://instagram.com/con_steelos",
    handle: "@con_steelos",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    url: "https://facebook.com/steelostiendaderopa",
    handle: "Steelos - Tienda de Ropa",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-32 md:pb-12 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <ScrollReveal className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-primary heart-pulse" />
              <h3 className="font-heading text-2xl font-extrabold text-gradient-passion">
                STEELO'S PERÚ
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Más que una prenda, un recuerdo con estilo. Poleras personalizadas para parejas, 
              bikers y momentos que duran para siempre.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <MagneticButton
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  {social.icon}
                </MagneticButton>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.1}>
            <h4 className="font-heading text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+51921928668" className="hover:text-foreground transition-colors">
                  +51 921 928 668
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hola@steelosperu.com" className="hover:text-foreground transition-colors">
                  hola@steelosperu.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Huánuco, Perú 🇵🇪</span>
              </li>
            </ul>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.2}>
            <h4 className="font-heading text-lg font-bold mb-4">Síguenos</h4>
            <ul className="space-y-3 text-muted-foreground">
              {socials.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {social.icon}
                    <span>{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Steelo's Perú. Hecho con ❤️‍🔥 en Huánuco.</p>
            <p className="flex items-center gap-2">
              <span>Generando empleo para jóvenes peruanos</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🇵🇪
              </motion.span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
