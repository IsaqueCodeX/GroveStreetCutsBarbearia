import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, Scissors } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const BookingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { playHoverSound } = useSoundEffects();

  return (
    <section
      id="booking"
      ref={ref}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(var(--grove-green)) 0px, transparent 1px, transparent 60px, hsl(var(--grove-green)) 61px), repeating-linear-gradient(90deg, hsl(var(--grove-green)) 0px, transparent 1px, transparent 60px, hsl(var(--grove-green)) 61px)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-body text-grove-gold text-xs tracking-[0.4em] uppercase mb-4 font-semibold">
            Reserve Seu Trono
          </p>
          <h2 className="section-title">Agendar Horário</h2>
          <span className="section-title-line" />
          <p className="font-body text-muted-foreground mt-6">
            Entre com cara de qualquer um. Saia com cara de lenda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="rounded-2xl border border-border p-8 md:p-12"
          style={{ backgroundColor: "hsl(var(--surface))" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="md:col-span-2">
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground font-semibold block mb-2">
                Seu Nome
              </label>
              <input
                type="text"
                placeholder="Carl Johnson"
                className="w-full bg-grove-asphalt border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-grove-green transition-colors duration-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground font-semibold block mb-2">
                Telefone
              </label>
              <input
                type="tel"
                placeholder="+55 (11) 9 0000-0000"
                className="w-full bg-grove-asphalt border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-grove-green transition-colors duration-300"
              />
            </div>

            {/* Service */}
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground font-semibold block mb-2">
                Serviço
              </label>
              <div className="relative">
                <select className="w-full bg-grove-asphalt border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-grove-green transition-colors duration-300 appearance-none">
                  <option>Fade Clássico</option>
                  <option>Tranças Especiais</option>
                  <option>Escultura de Barba</option>
                  <option>Serviço Completo</option>
                  <option>Navalha com Toalha Quente</option>
                </select>
                <Scissors className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Barber */}
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground font-semibold block mb-2">
                Escolha seu Barbeiro
              </label>
              <select className="w-full bg-grove-asphalt border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-grove-green transition-colors duration-300">
                <option>Sweet — Barbeiro Master</option>
                <option>Barbara — Especialista em Estilo</option>
                <option>Big Smoke — Perito em Barba</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground font-semibold block mb-2">
                Data
              </label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full bg-grove-asphalt border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-grove-green transition-colors duration-300 [color-scheme:dark]"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Time */}
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground font-semibold block mb-2">
                Horário
              </label>
              <div className="relative">
                <select className="w-full bg-grove-asphalt border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-grove-green transition-colors duration-300">
                  <option>9:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                </select>
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button onMouseEnter={playHoverSound} className="btn-primary w-full text-sm py-4">
                CONFIRMAR AGENDAMENTO — MANTENHA O ESTILO
              </button>
              <p className="font-body text-xs text-muted-foreground text-center mt-3">
                Sem cancelamentos em menos de 24h do horário. Respeite o trampo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
