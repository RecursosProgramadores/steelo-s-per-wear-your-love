import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { ScrollReveal } from "../animations/ScrollReveal";
import { MagneticButton } from "../animations/MagneticButton";
import logoImg from "@/assets/logobla.png";
import tiktokIcon from "@/assets/iconos/tiktok.svg";
import instagramIcon from "@/assets/iconos/instagram.svg";
import facebookIcon from "@/assets/iconos/facebook.svg";
import whatsappIcon from "@/assets/iconos/whatsapp.svg";
import flyLogo from "@/assets/logo.svg";
import libroReclamacionesImg from "@/assets/libroreclamaciones.jpeg";
import { Link } from "react-router-dom";

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
    url: "https://www.facebook.com/share/17o461EtUb/",
    handle: "Steelos - Tienda de Ropa",
  },
];

const contactNumbers = [
  { number: "940257279", label: "+51 940 257 279" },
  { number: "921928668", label: "+51 921 928 668" },
  { number: "935714081", label: "+51 935 714 081" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-32 md:pb-12 overflow-hidden bg-zinc-950 text-zinc-400">
      {/* Top Border with glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm" />

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand section */}
          <ScrollReveal className="lg:col-span-4">
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

            <div className="flex gap-4 mb-8">
              {socials.map((social) => (
                <MagneticButton
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary/50 transition-all group backdrop-blur-sm"
                >
                  {social.icon}
                </MagneticButton>
              ))}
            </div>

            <div className="mt-2 text-left">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd__Q-_V4guEBa652EbEDuPK2IIlc0bwBL3RLEUOQ7M8jZdag/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <img
                  src={libroReclamacionesImg}
                  alt="Libro de Reclamaciones"
                  className="h-16 w-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-black/20"
                />
              </a>
            </div>
          </ScrollReveal>

          {/* Contact section */}
          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <h4 className="font-heading text-lg font-black mb-8 uppercase tracking-widest text-white/90">Contacto</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <ul className="space-y-6 font-medium">
                {contactNumbers.map((contact) => (
                  <li key={contact.number} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-all duration-300 border border-white/5 group-hover:border-green-500/30 backdrop-blur-sm">
                      <img
                        src={whatsappIcon}
                        className="w-5 h-5 invert transition-all"
                        alt="WhatsApp"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-0.5">WhatsApp</span>
                      <a
                        href={`https://wa.me/51${contact.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-500 transition-colors text-zinc-300 text-sm xl:text-base font-bold"
                      >
                        {contact.label}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="space-y-6 font-medium">
                <li className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 border border-white/5 group-hover:border-primary/30 backdrop-blur-sm">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-0.5">Correo Electrónico</span>
                    <a href="mailto:steelostiendaderopa@gmail.com" className="hover:text-primary transition-colors text-zinc-300 text-sm xl:text-base font-bold break-all">
                      steelostiendaderopa@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 backdrop-blur-sm">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-0.5">Ubicación</span>
                    <span className="text-zinc-300 text-sm xl:text-base font-bold">Huánuco, Perú 🇵🇪</span>
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Follow Us section */}
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <h4 className="font-heading text-lg font-black mb-8 uppercase tracking-widest text-white/90">Síguenos</h4>
            <ul className="space-y-4 font-medium text-zinc-500">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:text-white transition-all flex items-center gap-4 py-1"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all overflow-hidden p-2.5 border border-white/5 backdrop-blur-sm">
                      {social.icon}
                    </div>
                    <span className="text-sm font-bold tracking-wide">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <div className="border-t border-white/5 pt-12 mt-12">
          <div className="flex flex-col items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            {/* Top Row: Copyright and Legal Links */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
              <p>© {currentYear} Steelo's Perú. Hecho con ❤️‍🔥 por jóvenes peruanos.</p>
              <div className="flex gap-8">
                <Link to="/terminos" className="hover:text-white transition-colors">Términos y condiciones</Link>
                <Link to="/privacidad" className="hover:text-white transition-colors">Política de privacidad</Link>
              </div>
            </div>

            {/* Bottom Row: Developer Attribution */}
            <div className="flex items-center justify-center gap-4 py-2">
              <span className="text-zinc-500 lowercase tracking-normal font-bold text-base">Desarrollado por</span>
              <a
                href="https://fly-software.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-all hover:scale-105"
              >
                <img src={flyLogo} alt="Fly Software" className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
