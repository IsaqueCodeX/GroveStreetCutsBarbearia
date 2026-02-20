import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Menu, X } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const navLinks = [
  { label: "Cortes", href: "#cuts" },
  { label: "A Banca", href: "#crew" },
  { label: "Produtos", href: "#stash" },
  { label: "Respeito", href: "#testimonials" },
  { label: "Local", href: "#local" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { playHoverSound } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-grove-asphalt/95 backdrop-blur-md border-b border-grove-green/20 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* Logo - Text Only, Optimized for Mobile */}
        <a href="#" className="flex flex-col md:flex-row md:items-end leading-none gap-1 md:gap-2 group active:scale-95 transition-transform">
          <div className="flex items-baseline">
            <span className="font-display text-3xl md:text-4xl tracking-widest text-grove-green whitespace-nowrap">
              GROVE STREET
            </span>
            <span className="font-accent text-xl md:text-3xl text-grove-gold ml-1.5 md:ml-2 tracking-normal">
              CUTS
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">


          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={playHoverSound}
              className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-grove-green transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-grove-green group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="#booking" onMouseEnter={playHoverSound} className="btn-gold text-xs px-6 py-2.5 active:scale-95 transition-transform">
            AGENDAR HORÁRIO
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">


          <button
            className="text-grove-green active:scale-90 transition-transform p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={playHoverSound}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div >

      {/* Mobile Menu - Improved Touch Targets */}
      <AnimatePresence>
        {
          menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100dvh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-grove-asphalt fixed inset-0 z-40 flex flex-col px-6 overflow-hidden"
            >
              <div className="absolute top-4 right-6 pt-2">
                <button
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={playHoverSound}
                  className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest">Voltar</span>
                  <div className="p-2 border border-white/10 rounded-full bg-white/5">
                    <X className="w-5 h-5" />
                  </div>
                </button>
              </div>

              <div className="flex flex-col gap-6 items-center justify-center h-full">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={playHoverSound}
                    className="font-display text-3xl tracking-widest text-foreground hover:text-grove-green transition-colors py-2 active:scale-95 duration-200"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="w-full h-px bg-white/10 my-4" />

                <a href="#booking" onClick={() => setMenuOpen(false)} onMouseEnter={playHoverSound} className="btn-gold text-sm w-full py-4 text-center text-lg active:scale-95 transition-transform shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                  AGENDAR HORÁRIO
                </a>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </motion.nav >
  );
};

export default Navbar;
