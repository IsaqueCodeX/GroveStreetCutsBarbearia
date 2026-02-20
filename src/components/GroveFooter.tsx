import React from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Twitter, Youtube, Scissors, ShoppingBag, Laptop } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const GroveFooter = () => {
  const footerRef = React.useRef(null);
  const isInView = useInView(footerRef, { amount: 0.1 }); // Removed once: true so it repeats
  const { playMissionPassed } = useSoundEffects();

  React.useEffect(() => {
    if (isInView) {
      playMissionPassed();
    }
  }, [isInView, playMissionPassed]); // Plays every time it enters view

  return (
    <footer ref={footerRef} className="bg-black border-t border-grove-green/20 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-grove-green/5 via-transparent to-transparent opacity-30 pointer-events-none" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo - Text Only, Optimized to match Navbar */}
            <a href="#" className="flex flex-col items-start leading-none gap-1 mb-5 group active:scale-95 transition-transform">
              <div className="flex items-baseline">
                <span className="font-display text-2xl tracking-wide text-grove-green whitespace-nowrap" style={{ letterSpacing: "0.05em" }}>
                  GROVE STREET
                </span>
                <span className="font-accent text-2xl text-grove-gold ml-1.5 tracking-normal">
                  CUTS
                </span>
              </div>
            </a>

            <p className="font-body text-gray-400 text-sm leading-relaxed mb-6">
              Cortes premium. Respeito de verdade. Servindo Ganton desde 1992. Todo mundo conhece o nome.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-grove-green hover:border-grove-green transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white text-sm tracking-widest uppercase mb-5">
              Navegar
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Os Cortes", href: "#cuts" },
                { label: "A Banca", href: "#crew" },
                { label: "Produtos", href: "#stash" },
                { label: "Agendar Horário", href: "#booking" },
                { label: "Credibilidade", href: "#testimonials" },
                { label: "A Quebrada", href: "#local" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-gray-400 hover:text-grove-green transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-white text-sm tracking-widest uppercase mb-5">
              Nos Encontre
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-grove-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm text-white">Grove Street</p>
                  <p className="font-body text-xs text-gray-500">Ganton, Los Santos</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-grove-green flex-shrink-0" />
                <p className="font-body text-sm text-gray-400">+55 (11) 9 GSC-CUTS</p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-grove-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm text-white">Seg–Sáb: 9h – 19h</p>
                  <p className="font-body text-xs text-gray-500">Domingo: 11h – 17h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Mission Passed Column - Animated */}
          <div className="flex flex-col items-center lg:col-span-1 text-center mt-8 md:mt-0">

            {/* Headers with Scale Animation */}
            <motion.h4
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }} // Resets when out of view
              transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
              className="font-display text-grove-gold text-2xl tracking-widest uppercase mb-1 drop-shadow-md"
            >
              MISSÃO CUMPRIDA!
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} // Resets when out of view
              transition={{ delay: 0.8, duration: 0.5 }}
              className="font-display text-white text-lg tracking-widest uppercase mb-4 drop-shadow-sm"
            >
              Respeito +
            </motion.p>

            {/* GIF */}
            <div className="relative mb-4 group">
              <div
                className="absolute -inset-1 rounded-lg opacity-50 group-hover:opacity-75 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--grove-green)), hsl(var(--mission-gold)))",
                }}
              />
              <img
                src="https://isaquesantosdev.com/wp-content/uploads/2026/02/ezgif.com-gif-maker.gif"
                alt="Mission Passed"
                className="relative rounded-lg w-full max-w-[200px] object-cover border-2 border-white/10 group-hover:border-grove-gold/50 transition-colors"
              />
              {/* Scanlines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
            </div>

            {/* Copy */}
            <div className="space-y-4">
              <p className="font-body text-xs text-gray-400 leading-relaxed">
                Obrigado por explorar até aqui. <br />
                <span className="text-grove-green font-semibold">
                  Suas ideias merecem um design de respeito e um código que funciona.
                </span>
              </p>

              <div className="pt-2 border-t border-white/5 w-full">
                <p className="font-display text-xs text-grove-gold uppercase tracking-widest leading-relaxed mb-4">
                  Vamos construir o seu próximo site?
                </p>
                <div className="flex items-center justify-center gap-6">
                  <a
                    href="https://isaquesantosdev.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-1 text-gray-500 hover:text-grove-green transition-colors"
                  >
                    <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:border-grove-green group-hover:bg-grove-green/10 transition-all duration-300">
                      <Laptop className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-body tracking-wider uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Dev</span>
                  </a>

                  <a
                    href="https://criandosites.shop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-1 text-gray-500 hover:text-grove-gold transition-colors"
                  >
                    <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:border-grove-gold group-hover:bg-grove-gold/10 transition-all duration-300">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-body tracking-wider uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Loja</span>
                  </a>

                  <a
                    href="https://www.instagram.com/criandositesshop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-1 text-gray-500 hover:text-pink-500 transition-colors"
                  >
                    <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:border-pink-500 group-hover:bg-pink-500/10 transition-all duration-300">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-body tracking-wider uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Insta</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
            <p className="font-body text-xs text-gray-500 text-center md:text-left">
              © 2026 Grove Street Cuts.
            </p>
            <a
              href="https://isaquesantosdev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-grove-green/70 hover:text-grove-gold transition-colors hover:underline decoration-grove-gold/30 underline-offset-4"
            >
              Desenvolvido por Isaque Santos
            </a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="font-body text-xs text-gray-500 hover:text-grove-green transition-colors">
              Privacidade
            </a>
            <a href="#" className="font-body text-xs text-gray-500 hover:text-grove-green transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroveFooter;
