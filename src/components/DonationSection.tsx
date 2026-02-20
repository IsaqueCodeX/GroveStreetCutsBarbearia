import React from "react";
import { Copy, Check } from "lucide-react";
import { useSoundEffects } from "@/hooks/useSoundEffects";

const DonationSection = () => {
    const [copied, setCopied] = React.useState(false);
    const { playHoverSound } = useSoundEffects();

    const handleCopyPix = () => {
        const pixKey = "00020126360014BR.GOV.BCB.PIX0114+55489845762175204000053039865802BR5925Isaque Miranda dos Santos6009SAO PAULO6214051057PMvgdKkN6304EFAE";
        navigator.clipboard.writeText(pixKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-20 relative overflow-hidden bg-black/95 border-t border-grove-green/20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-grove-green/5 via-transparent to-transparent opacity-50" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                {/* Header */}
                <div className="mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-grove-green/10 border border-grove-green/30 mb-6 text-grove-green animate-pulse">
                        <span className="font-display text-3xl">$</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-wider mb-4">
                        Fortaleça o Projeto
                    </h2>
                    <p className="font-body text-gray-400 max-w-lg mx-auto leading-relaxed">
                        Se você curtiu o trampo e quer ver o sistema evoluindo, manda aquele Pix pra fortalecer o café do dev.
                    </p>
                </div>

                {/* Donation Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-lg mx-auto backdrop-blur-sm shadow-2xl relative overflow-hidden group hover:border-grove-green/50 transition-colors duration-500">

                    {/* Key Display (Masked) */}
                    <div className="bg-black/50 rounded-lg p-4 mb-6 flex items-center justify-between border border-white/5">
                        <code className="text-grove-green font-mono text-sm tracking-widest truncate max-w-[200px] md:max-w-xs opacity-70">
                            00020126360014BR.GOV...
                        </code>
                        <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                            Pix Key
                        </div>
                    </div>

                    <button
                        onClick={handleCopyPix}
                        onMouseEnter={playHoverSound}
                        className={`w-full group/btn relative overflow-hidden rounded-xl py-4 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 font-display uppercase tracking-widest text-sm ${copied
                            ? "bg-grove-gold text-black shadow-[0_0_20px_rgba(255,165,0,0.5)]"
                            : "bg-grove-green text-black hover:bg-grove-gold hover:shadow-[0_0_20px_rgba(52,168,83,0.5)]"
                            }`}
                    >
                        {copied ? (
                            <>
                                <Check className="w-5 h-5" />
                                <span>Chave Copiada!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                <span>Copiar Chave Pix</span>
                            </>
                        )}

                        {/* Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700" />
                    </button>

                    {/* Money Rain Hint */}
                    <div className="absolute -right-8 -top-8 text-8xl opacity-5 select-none pointer-events-none rotate-12 group-hover:opacity-10 transition-opacity duration-500">
                        💸
                    </div>
                </div>

                {/* Footer Note */}
                <p className="font-body text-xs text-gray-600 mt-8 uppercase tracking-widest">
                    Pagamento Seguro via Banco Central · Sua contribuição faz a diferença
                </p>

            </div>
        </section>
    );
};

export default DonationSection;
