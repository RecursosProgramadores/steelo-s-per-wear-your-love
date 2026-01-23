import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import { MagneticButton } from "../animations/MagneticButton";
import logoImg from "@/assets/logostylos.png";
import whatsappIcon from "@/assets/iconos/whatsapp.svg";

const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Colecciones", href: "#colecciones" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Testimonios", href: "#testimonios" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const whatsappUrl = "https://wa.me/51921928668?text=Hola%20Steelo's!%20Quisiera%20pedir%20información%20sobre%20sus%20poleras%20personalizadas.";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/80 backdrop-blur-xl py-4 shadow-sm"
                : "bg-white py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center justify-between">
                    {/* Logo Section */}
                    <motion.a
                        href="#hero"
                        onClick={(e) => scrollToSection(e, "#hero")}
                        className="flex items-center group cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <img
                            src={logoImg}
                            alt="Steelo's Logo"
                            className="h-16 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                        />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-[12px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-primary transition-all duration-300 relative group/link py-2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Action Button */}
                    <div className="hidden lg:block">
                        <MagneticButton
                            href={whatsappUrl}
                            target="_blank"
                            className="btn-passion px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.15em] flex items-center gap-3 group shadow-lg shadow-primary/20"
                        >
                            <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 invert" />
                            Contacto
                        </MagneticButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-zinc-900 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-zinc-100 overflow-hidden shadow-2xl"
                    >
                        <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-xl font-black uppercase tracking-[0.2em] text-zinc-800 hover:text-primary transition-colors flex items-center justify-between group"
                                >
                                    {link.name}
                                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                className="btn-passion w-full py-5 rounded-2xl text-center font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 shadow-xl"
                            >
                                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 invert" />
                                ESCRIÍBENOS
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
