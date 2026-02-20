import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const StickyBookingButton = () => {
  const [visible, setVisible] = useState(false);
  const { playHoverSound } = useSoundEffects();

  useEffect(() => {
    const heroHeight = window.innerHeight;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showAfterHero = scrollY > heroHeight * 0.7;

      // Check for Map Section ("TRAÇAR ROTA") to hide button
      const mapSection = document.getElementById("local");
      let hideForMap = false;

      if (mapSection) {
        const rect = mapSection.getBoundingClientRect();
        // Hide when Map Section starts entering the viewport (with a small buffer)
        if (rect.top < window.innerHeight - 50) {
          hideForMap = true;
        }
      }

      setVisible(showAfterHero && !hideForMap);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="#booking"
            className="relative flex items-center gap-3 font-body font-semibold uppercase tracking-widest text-xs px-6 py-3.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "hsl(var(--grove-green))",
              color: "hsl(var(--asphalt))",
              boxShadow: "0 0 20px hsl(var(--grove-green) / 0.5), 0 4px 20px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={(e) => {
              playHoverSound();
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 35px hsl(var(--grove-green) / 0.8), 0 4px 30px rgba(0,0,0,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 20px hsl(var(--grove-green) / 0.5), 0 4px 20px rgba(0,0,0,0.4)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: "hsl(var(--grove-green) / 0.3)",
                animationDuration: "2s",
              }}
            />
            <Scissors className="w-4 h-4 relative z-10" />
            <span className="relative z-10">AGENDAR HORÁRIO</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBookingButton;
