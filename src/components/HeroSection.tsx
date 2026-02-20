import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const { playHoverSound } = useSoundEffects();
  return (
    <section className="relative w-full h-[100dvh] min-h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Background Video — blurred for atmospheric bokeh effect */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "blur(6px) brightness(0.8)", transform: "scale(1.05)" }}
        src="https://isaquesantosdev.com/wp-content/uploads/2026/02/herogta.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark gradient overlay — lighter to reveal video */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,18,18,0.3) 0%, rgba(18,18,18,0.5) 50%, rgba(18,18,18,0.9) 100%)",
        }}
      />

      {/* Green side accent lines */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-grove-green to-transparent opacity-60" />
      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-grove-green to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-16 md:pt-0">
        {/* Badge - Adjusted for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded-full border border-grove-green/40 bg-grove-green/10 backdrop-blur-sm shadow-[0_0_15px_rgba(52,168,83,0.3)]"
        >
          <span className="w-2 h-2 rounded-full bg-grove-green animate-pulse shadow-[0_0_10px_#34A853]" />
          <span className="font-body text-[0.65rem] md:text-xs tracking-[0.2em] uppercase text-grove-green font-semibold">
            Ganton, Los Santos · Desde 1992
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="uppercase text-foreground mb-4 leading-none w-full"
          style={{
            textShadow: "0 0 60px rgba(52, 168, 83, 0.15)",
          }}
        >
          <span className="font-display text-4xl md:text-7xl block mb-2 gta-outline">BEM-VINDO A </span>
          <span
            className="font-accent text-grove-green text-[3.5rem] leading-[0.9] md:text-8xl lg:text-9xl block mt-2 gta-outline"
          >
            LOS SANTOS.
          </span>
        </motion.h1>

        {/* Social Proof (Improvement #2) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center gap-1 mb-6 md:mb-8"
        >
          <div className="flex gap-0.5 text-grove-gold drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            ))}
          </div>
          <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide ml-2">
            4.9/5 · A Barbearia #1 da Quebrada
          </span>
        </motion.div>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="font-accent text-grove-gold text-xl md:text-3xl mb-8 md:mb-10 tracking-wide max-w-2xl"
          style={{ textShadow: "0 0 20px hsl(43 96% 56% / 0.4)" }}
        >
          Mais que um corte. É sobre respeito.
        </motion.p>

        {/* CTA Buttons - Visceral Design (Improvement #1 & #3) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full md:w-auto"
        >
          <a
            href="#cuts"
            className="btn-primary text-sm relative group overflow-hidden active:scale-95 transition-transform duration-100"
          >
            <span className="relative z-10 flex items-center gap-2 font-bold">
              GARANTIR MEU CORTE
            </span>
            {/* Heartbeat Effect */}
            <div className="absolute inset-0 bg-white/20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </a>

          <a
            href="#crew"
            className="btn-outline-green text-sm active:scale-95 transition-transform duration-100 backdrop-blur-sm"
          >
            CONHECER A BANCA
          </a>
        </motion.div>
      </div>

      {/* Ryder Character Overlay */}


      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[0.65rem] tracking-widest uppercase text-muted-foreground/60">
          Rolar
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-grove-green/80" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
