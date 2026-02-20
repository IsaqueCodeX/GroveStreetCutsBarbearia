import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-center justify-center">
      {/* Parallax Image — perfectly centered */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
      >
        <img
          src="https://isaquesantosdev.com/wp-content/uploads/2026/02/GTA-SA-A3-Digital-1.png"
          alt="GTA San Andreas Vibe"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(18,18,18,0.85) 0%, rgba(18,18,18,0.5) 50%, rgba(18,18,18,0.85) 100%)",
        }}
      />

      {/* Text Content — absolutely centered */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-6 w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Decorative line */}
            <div className="flex items-center gap-4 justify-center mb-6">
              <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-grove-gold opacity-60" />
              <span className="text-grove-gold text-xs tracking-[0.4em] uppercase font-body font-semibold">
                SINCE DAY ONE
              </span>
              <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-grove-gold opacity-60" />
            </div>

            <h2
              className="font-accent text-foreground leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 4.5rem)",
                textShadow: "0 2px 20px rgba(0,0,0,0.8)",
                letterSpacing: "0.05em",
              }}
            >
              Established{" "}
              <span
                className="text-grove-gold"
                style={{ textShadow: "0 0 30px hsl(43 96% 56% / 0.5)" }}
              >
                1992.
              </span>
            </h2>
            <h2
              className="font-accent text-grove-green leading-tight mt-2"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                textShadow: "0 0 30px hsl(137 60% 44% / 0.5)",
                letterSpacing: "0.08em",
              }}
            >
              OG Status.
            </h2>

            <p className="font-body text-muted-foreground mt-6 max-w-sm mx-auto tracking-wide">
              Três décadas mantendo a quebrada no estilo. Sem amadores. Sem atalhos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxBanner;
