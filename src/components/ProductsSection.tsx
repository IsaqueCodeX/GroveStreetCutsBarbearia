import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, CheckCircle } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const products = [
  "Pomada Premium – Fixação Extra Forte",
  "Óleo de Barba Grove Street",
  "Gel Modelador de Contorno",
  "Bálsamo Pós-Navalha com Toalha Quente",
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { playHoverSound } = useSoundEffects();

  return (
    <section id="stash" className="py-24 bg-background overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-end">
          {/* Left: Ryder Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* Green ambient glow behind Ryder */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(137 60% 44% / 0.15) 0%, transparent 70%)",
                }}
              />
              <img
                src="https://isaquesantosdev.com/wp-content/uploads/2026/02/Untitled-design.png"
                alt="Ryder — Grove Street"
                className="relative z-10 max-h-[600px] object-contain drop-shadow-2xl animate-float"
                style={{ filter: "drop-shadow(0 20px 60px rgba(52, 168, 83, 0.2))" }}
              />
            </div>
          </motion.div>

          {/* Right: Text & Products */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="py-12 md:py-0 text-center md:text-left flex flex-col items-center md:items-start"
          >
            {/* Label */}
            <p className="font-body text-grove-green text-xs tracking-[0.4em] uppercase mb-4 font-semibold">
              O Estoque
            </p>

            {/* Title */}
            <h2
              className="font-display text-foreground uppercase leading-none mb-2"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.05em" }}
            >
              O Estoque Secreto
            </h2>
            <h2
              className="font-display text-grove-green uppercase leading-none mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "0.05em",
                textShadow: "0 0 30px hsl(137 60% 44% / 0.4)",
              }}
            >
              do Ryder.
            </h2>

            {/* Description */}
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
              Mantenha o estilo fresco nas ruas. O Ryder jura por esses. Essenciais de grooming
              selecionados a dedo — usados aqui no salão e disponíveis pra você levar pra casa.
            </p>

            {/* Product List */}
            <ul className="space-y-3 mb-10">
              {products.map((product, i) => (
                <motion.li
                  key={product}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 font-body text-sm text-muted-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-grove-green flex-shrink-0" />
                  {product}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full md:w-auto">
              <a href="#stash" onMouseEnter={playHoverSound} className="btn-gold flex items-center justify-center gap-2 text-sm">
                <ShoppingBag className="w-4 h-4" />
                VER PRODUTOS
              </a>
              <a href="#booking" onMouseEnter={playHoverSound} className="btn-outline-green text-sm flex items-center justify-center">
                AGENDAR CORTE
              </a>
            </div>

            {/* Badges */}
            <div className="flex gap-6 mt-10 flex-wrap justify-center md:justify-start">
              {["Qualidade Premium", "Aprovado nas Ruas", "Sem Conservantes"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-grove-gold" />
                  <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
