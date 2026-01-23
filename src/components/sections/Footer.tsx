import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { ScrollReveal } from "../animations/ScrollReveal";
import { MagneticButton } from "../animations/MagneticButton";
import logoImg from "@/assets/logobla.png";
import tiktokIcon from "@/assets/iconos/tiktok.svg";
import instagramIcon from "@/assets/iconos/instagram.svg";
import facebookIcon from "@/assets/iconos/facebook.svg";

const socials = [
  {
    name: "TikTok",
    icon: <img src={tiktokIcon} className="w-5 h-5 invert" alt="TikTok" />,
    url: "https://tiktok.com/@con_steelos",
    handle: "@con_steelos",
  },
  {
    name: "Instagram",
    icon: <img src={instagramIcon} className="w-5 h-5 invert" alt="Instagram" />,
    url: "https://instagram.com/con_steelos",
    handle: "@con_steelos",
  },
  {
    name: "Facebook",
    icon: <img src={facebookIcon} className="w-5 h-5 invert" alt="Facebook" />,
    url: "https://facebook.com/steelostiendaderopa",
    handle: "Steelos - Tienda de Ropa",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-32 md:pb-12 overflow-hidden bg-zinc-950 text-zinc-400">
      {/* Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-zinc-800" />

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <ScrollReveal className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative group cursor-pointer">
                <img
                  src={logoImg}
                  alt="Steelo's Logo"
                  className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                />
              </div>
            </div>
            <p className="text-zinc-500 mb-8 max-w-sm text-balance">
              Expertos en crear recuerdos con estilo. Poleras personalizadas premium para parejas, bikers y coleccionistas en todo el Perú.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <MagneticButton
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary transition-all group"
                >
                  {social.icon}
                </MagneticButton>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.1}>
            <h4 className="font-heading text-lg font-black mb-6 uppercase tracking-tight text-white">Contacto</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-white/5">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+51921928668" className="hover:text-primary transition-colors text-zinc-400">
                  +51 921 928 668
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-white/5">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:hola@steelosperu.com" className="hover:text-primary transition-colors text-zinc-400">
                  hola@steelosperu.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                </div>
                <span className="py-2 text-zinc-400">Huánuco, Perú 🇵🇪</span>
              </li>
            </ul>
          </ScrollReveal>

          {/* Follow Us */}
          <ScrollReveal delay={0.2}>
            <h4 className="font-heading text-lg font-black mb-6 uppercase tracking-tight text-white">Síguenos</h4>
            <ul className="space-y-4 font-medium text-zinc-500">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:text-white transition-colors flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all overflow-hidden p-2.5 border border-white/5">
                      {social.icon}
                    </div>
                    <span>{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
            <p>© {currentYear} Steelo's Perú. Hecho con ❤️‍🔥 por jóvenes peruanos.</p>
            <p className="flex items-center gap-2">
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
