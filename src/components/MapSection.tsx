import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Navigation } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const MapSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { playHoverSound } = useSoundEffects();

  return (
    <section
      id="local"
      className="py-24 relative overflow-hidden"
      ref={ref}
      style={{
        background: "radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: The Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white/90 tracking-wide uppercase leading-tight">
              A ESSÊNCIA DE LOS SANTOS
            </h2>

            <div className="space-y-6">
              <p className="font-body text-gray-300 text-base md:text-lg leading-relaxed">
                Nascidos nas ruas de Ganton, respeitados em toda San Andreas. A Grove Street Cuts carrega o verdadeiro DNA da maior cidade do estado.
              </p>
              <p className="font-body text-gray-300 text-base md:text-lg leading-relaxed">
                Não importa se você vem dar um rolê no píer de Santa Maria, se tem negócios em Rodeo, ou se é cria de Idlewood e East Beach... Quando o assunto é estilo e respeito, todos os caminhos levam à nossa cadeira. De Vinewood à Grove, nós ditamos a regra do jogo.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHoverSound}
                className="inline-flex items-center gap-2 bg-[#34A853] text-black font-body font-bold px-8 py-4 rounded-lg hover:bg-[#34A853]/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(52,168,83,0.4)]"
              >
                <Navigation className="w-5 h-5" />
                TRAÇAR ROTA
              </a>
            </div>
          </motion.div>

          {/* Right Column: The Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <img
                src="https://isaquesantosdev.com/wp-content/uploads/2026/02/san-andreas.jpg"
                alt="Mapa de San Andreas"
                className="w-full h-auto object-cover rounded-2xl border-4 border-[#34A853] shadow-[0_0_20px_rgba(52,168,83,0.3)] transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Optional: Overlay effect on hover for extra polish */}
              <div className="absolute inset-0 rounded-2xl bg-[#34A853]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
