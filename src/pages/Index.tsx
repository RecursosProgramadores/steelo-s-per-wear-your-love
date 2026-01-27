import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import Header from "@/components/sections/Header";
import CollectionsSection from "@/components/sections/CollectionsSection";
import WhySteelos from "@/components/sections/WhySteelos";
import TikTokSection from "@/components/sections/TikTokSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ImpactSection from "@/components/sections/ImpactSection";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BikerHeroSection from "@/components/sections/BikerHeroSection";
import BikerGallerySection from "@/components/sections/BikerGallerySection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Steelo's Perú | Poleras Personalizadas Parejas & Bikers ❤️‍🔥</title>
        <meta
          name="description"
          content="Poleras personalizadas para parejas Perú. Regalos románticos personalizados, prendas biker custom Perú. 100% algodón premium con bordado y sublimado. Envíos a todo el Perú."
        />
        <meta
          name="keywords"
          content="poleras personalizadas parejas Perú, regalos románticos personalizados, prendas biker custom Perú, hoodies personalizados, sudaderas parejas, ropa anime Perú, Steelo's"
        />
        <meta property="og:title" content="Steelo's Perú | Poleras Personalizadas Parejas & Bikers ❤️‍🔥" />
        <meta property="og:description" content="Más que una prenda, un recuerdo con estilo. Poleras personalizadas para parejas, bikers y momentos que duran para siempre." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://steelosperu.com" />
      </Helmet>

      <Header />
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Collections Section */}
        <CollectionsSection />


        {/* Why Steelo's */}
        <WhySteelos />

        {/* TikTok Videos */}
        <TikTokSection />

        {/* Gallery Showcase */}
        <GallerySection />

        {/* Biker Special Collection Section */}
        <BikerHeroSection />

        {/* Biker Brands Gallery */}
        <BikerGallerySection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Impact Section */}
        <ImpactSection />

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
