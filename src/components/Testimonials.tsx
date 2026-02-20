import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Marcus D.",
    handle: "@marcus_ls",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/original-2d873b15d59b7c35513e517a1721a256.webp",
    rating: 5,
    date: "2 semanas atrás",
    text: "O melhor fade de Los Santos, sem dúvida! Entrei sem querer chamar atenção e saí mandando em todo o pedaço. As mãos do Sweet são certificadas. Grove Street Cuts é o ÚNICO lugar em Los Santos.",
    likes: 48,
  },
  {
    name: "Tanisha R.",
    handle: "@tanisha_ganton",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/original-81fa8758d22378d2edc21f31c644b619.webp",
    rating: 5,
    date: "1 mês atrás",
    text: "Atendimento de primeira, virei cliente fiel. A Barbara fez meu tratamento de cor e honestamente? Parece que sou outra pessoa. A vibe desse lugar é insana — parece família.",
    likes: 61,
  },
  {
    name: "Dre T.",
    handle: "@dre_official",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/original-e5909771d395c09f42abf8eb9733afba.webp",
    rating: 5,
    date: "3 semanas atrás",
    text: "O Big Smoke modelou minha barba tão perfeitamente que meus chegados acharam que fiz cirurgia. E a navalha com toalha quente? Cara, aquilo não é um corte — é uma experiência espiritual. 5 estrelas não são suficientes.",
    likes: 92,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-24 bg-grove-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-grove-green text-xs tracking-[0.4em] uppercase mb-4 font-semibold">
            Palavra nas Ruas
          </p>
          <h2 className="section-title">Credibilidade na Rua</h2>
          <span className="section-title-line" />

          {/* Google Rating Summary */}
          <div className="inline-flex items-center gap-3 mt-8 px-6 py-3 rounded-full border border-grove-green/20 bg-grove-asphalt/50">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-grove-gold fill-grove-gold" />
              ))}
            </div>
            <span className="font-display text-foreground text-lg tracking-wide">4.9</span>
            <span className="font-body text-muted-foreground text-sm">no Google · +300 avaliações</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
              className="rounded-xl p-6 border border-border hover:border-grove-green/40 transition-all duration-500 group"
              style={{ backgroundColor: "hsl(var(--surface-elevated))" }}
            >
              {/* Google-style header */}
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-border"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-sm text-foreground truncate">
                    {t.name}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 text-grove-gold fill-grove-gold" />
                      ))}
                    </div>
                    <span className="font-body text-xs text-muted-foreground">
                      {t.date}
                    </span>
                  </div>
                </div>
                {/* Google logo placeholder */}
                <div className="flex-shrink-0 w-5 h-5 rounded-sm bg-grove-asphalt border border-border flex items-center justify-center">
                  <span className="text-grove-green font-display text-xs">G</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                "{t.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-grove-green transition-colors duration-200 group-hover:text-grove-green">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span className="font-body text-xs">{t.likes} Útil</span>
                </button>
                <span className="font-body text-xs text-grove-green tracking-widest uppercase font-semibold">
                  Verificado
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#booking"
            className="btn-primary text-sm inline-flex"
          >
            Entre para as Lendas — Agende Agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
