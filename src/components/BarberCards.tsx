import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const barbers = [
  {
    name: "Sweet",
    role: "Barbeiro Master & Gerente",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/SeanJohnson-GTASA.webp",
    respect: 92,
    specialty: "Fades Clássicos · Acabamentos · Cortes OG",
    stars: 5,
    quote: "Cada corte que faço é pessoal. Você sai daqui com respeito.",
  },
  {
    name: "Barbara",
    role: "Especialista em Estilo",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/BarbaraSchternvart-GTASA-HD.webp",
    respect: 88,
    specialty: "Coloração · Tintura · Estilos Criativos",
    stars: 5,
    quote: "Estilo é uma declaração. Deixa eu escrever a sua.",
  },
  {
    name: "Big Smoke",
    role: "Perito em Barba e Precisão",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/BigSmoke-GTASA.webp",
    respect: 78,
    specialty: "Escultura de Barba · Navalha com Toalha Quente",
    stars: 4,
    quote: "Preciso de um pedido duplo. Aquela precisão? Direto na sua barba.",
  },
];

const BarberCards = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { playHoverSound } = useSoundEffects();

  return (
    <section id="crew" className="py-24 bg-grove-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-grove-gold text-xs tracking-[0.4em] uppercase mb-4 font-semibold">
            Os Profissionais
          </p>
          <h2 className="section-title">Conheça a Banca</h2>
          <span className="section-title-line" />
          <p className="font-body text-muted-foreground mt-6 max-w-md mx-auto">
            Formados nas ruas. Treinados na arte. Estes não são apenas barbeiros — são lendas.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber, i) => (
            <motion.div
              key={barber.name}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
              className="card-barber group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-72 flex-shrink-0 overflow-hidden">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(var(--surface)) 0%, transparent 60%)",
                  }}
                />
                {/* Stars */}
                <div className="absolute top-4 right-4 flex gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                  {Array.from({ length: barber.stars }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 text-grove-gold fill-grove-gold" />
                  ))}
                </div>
              </div>

              {/* Info Container - Flex Grow to push button down */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="font-display text-xl tracking-widest text-foreground uppercase group-hover:text-grove-green transition-colors duration-300">
                    {barber.name}
                  </h3>
                  <p className="font-body text-grove-gold text-xs tracking-widest uppercase mt-1 font-semibold">
                    {barber.role}
                  </p>
                </div>

                {/* Fixed height for quote to align rows */}
                <div className="min-h-[60px]">
                  <p className="font-body text-muted-foreground text-xs leading-relaxed italic border-l-2 border-grove-green/30 pl-3">
                    "{barber.quote}"
                  </p>
                </div>

                {/* Specialty */}
                <p className="font-body text-xs text-grove-grey mt-4 tracking-wide border-t border-white/5 pt-4">
                  <span className="text-grove-green/80 uppercase text-[10px] font-bold block mb-1">Especialidade:</span>
                  {barber.specialty}
                </p>

                {/* Respect Bar */}
                <div className="mt-6 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground font-semibold">
                      Respeito
                    </span>
                    <span className="font-display text-grove-green text-xs tracking-wide">
                      {barber.respect}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-grove-asphalt overflow-hidden">
                    <motion.div
                      className="h-full rounded-full respect-bar-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${barber.respect}%` } : {}}
                      transition={{ delay: i * 0.15 + 0.8, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Book CTA - Pushed to bottom */}
                <div className="mt-auto">
                  <a
                    href="#booking"
                    onMouseEnter={playHoverSound}
                    className="btn-outline-green text-xs w-full text-center block py-3 group-hover:bg-grove-green group-hover:text-black transition-all duration-300"
                  >
                    AGENDAR COM {barber.name.toUpperCase()}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarberCards;
