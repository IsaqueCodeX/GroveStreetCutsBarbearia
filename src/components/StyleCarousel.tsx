import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const styles = [
  {
    name: "O Moicano",
    subtitle: "Lenda das Ruas",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/MacislaUnisexHairSalon-GTASA-Mohawk26Beard.webp",
    stats: { respect: 5, style: 5 },
  },
  {
    name: "O Ruivo",
    subtitle: "Ousado & Temido",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/MacislaUnisexHairSalon-GTASA-RedHair.webp",
    stats: { respect: 3, style: 5 },
  },
  {
    name: "As Tranças",
    subtitle: "Clássico da Quebrada",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/Reece26FacialStudio-GTASA-Cornrow.webp",
    stats: { respect: 5, style: 4 },
  },
  {
    name: "Afro & Barba",
    subtitle: "Selo Grove Street",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/Reece26FacialStudio-GTASA-Afro26Beard.webp",
    stats: { respect: 4, style: 3 },
  },
  {
    name: "Flat Top",
    subtitle: "Clássico de Los Santos",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/Reece26FacialStudio-GTASA-FlatTop.webp",
    stats: { respect: 4, style: 4 },
  },
  {
    name: "Careca & Bigode",
    subtitle: "Simples & Perigoso",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/MacislaUnisexHairSalon-GTASA-Bald27stash.webp",
    stats: { respect: 4, style: 2 },
  },
  {
    name: "O Rei",
    subtitle: "Estilo Rockabilly",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/MacislaUnisexHairSalon-GTASA-ElvisHair.webp",
    stats: { respect: 3, style: 5 },
  },
  {
    name: "Cabeça Raspada",
    subtitle: "Aerodinâmica Pura",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/MacislaUnisexHairSalon-GTASA-BaldHead.webp",
    stats: { respect: 3, style: 1 },
  },
  {
    name: "O Slope",
    subtitle: "Corte Aerodinâmico",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/MacislaUnisexHairSalon-GTASA-Slope.webp",
    stats: { respect: 4, style: 3 },
  },
  {
    name: "Cesar & Barba",
    subtitle: "Imperador de Ganton",
    image: "https://isaquesantosdev.com/wp-content/uploads/2026/02/Reece26FacialStudio-GTASA-Cesar.webp",
    stats: { respect: 5, style: 4 },
  },
];

const StyleCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { playHoverSound } = useSoundEffects();

  // Grab-to-scroll logic
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="cuts" className="py-24 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-grove-green text-xs tracking-[0.4em] uppercase mb-4 font-semibold">
            Barbearia · Los Santos
          </p>
          <h2 className="section-title">Selecione Seu Corte</h2>
          <span className="section-title-line" />
          <p className="font-body text-muted-foreground mt-6 max-w-md mx-auto">
            Cada corte conta uma história. Escolha o seu e saia daqui dono do pedaço.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            onMouseEnter={playHoverSound}
            aria-label="Rolar para a esquerda"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-grove-green/40 bg-grove-surface/80 backdrop-blur flex items-center justify-center text-grove-green hover:border-grove-green hover:glow-green transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            onMouseEnter={playHoverSound}
            aria-label="Rolar para a direita"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-grove-green/40 bg-grove-surface/80 backdrop-blur flex items-center justify-center text-grove-green hover:border-grove-green hover:glow-green transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory px-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab",
              userSelect: "none",
            }}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {styles.map((style, i) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                onMouseEnter={playHoverSound}
                className="flex-none snap-center flex flex-col items-center gap-4 group w-64 md:w-72"
              >
                {/* HUD Card Container */}
                <div className="relative w-full aspect-square border-4 border-grove-asphalt bg-black/40 p-1 shadow-lg group-hover:border-grove-green transition-colors duration-300">
                  {/* Corner details */}
                  <div className="absolute top-0 left-0 w-2 h-2 bg-white/20" />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-white/20" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-white/20" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/20" />

                  {/* Image with Scanline effect */}
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={style.image}
                      alt={style.name}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                    {/* Scanline Overlay on Hover */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Stats Overlay - RPG Style */}
                  <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1 z-20">
                    <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-grove-green mb-1">
                      <span>Respeito</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, idx) => (
                          <div key={idx} className={`w-3 h-1 ${idx < (style.stats?.respect || 4) ? 'bg-grove-green' : 'bg-gray-700'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-grove-gold">
                      <span>Estilo</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, idx) => (
                          <div key={idx} className={`w-3 h-1 ${idx < (style.stats?.style || 5) ? 'bg-grove-gold' : 'bg-gray-700'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Style Info */}
                <div className="text-center w-full relative">
                  {/* Decorative HUD Lines */}
                  <div className="absolute top-1/2 left-0 w-4 h-[1px] bg-grove-green/30" />
                  <div className="absolute top-1/2 right-0 w-4 h-[1px] bg-grove-green/30" />

                  <h3 className="font-display text-white text-2xl tracking-wide uppercase drop-shadow-[0_2px_0_rgba(0,0,0,1)] group-hover:text-grove-green transition-colors duration-300">
                    {style.name}
                  </h3>
                  <p className="font-body text-muted-foreground text-[10px] tracking-[0.2em] uppercase mt-1">
                    {style.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-[1]" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-[1]" />
        </div>
      </div>
    </section>
  );
};

export default StyleCarousel;
