import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCountry } from '../context/CountryContext';

export const GeoBanner = () => {
  const { country, showGeoBanner, dismissGeoBanner, setIsCountryModalOpen } = useCountry();

  if (!showGeoBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="bg-gradient-to-r from-[#10243e] via-[#16355c] to-[#10243e] border-b border-[#387adf]/30 text-xs md:text-sm text-slate-200 py-2.5 px-4 relative z-50 overflow-hidden shadow-lg shadow-black/20"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#387adf] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#387adf]"></span>
            </span>
            <div className="flex items-center gap-1.5 font-medium">
              <span>Detectamos tu conexión en</span>
              <span className="font-semibold text-white flex items-center gap-1 bg-[#1e3e62] px-2 py-0.5 rounded border border-[#387adf]/40">
                <span>{country.flag}</span>
                <span>{country.name}</span>
              </span>
              <span className="hidden sm:inline text-slate-300">
                — Precios adaptados a <strong>{country.currency}</strong> y despacho vía <strong>{country.shippingCompany.split('&')[0]}</strong>.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCountryModalOpen(true)}
              className="inline-flex items-center gap-1 text-[#4e8ff7] hover:text-white font-semibold underline underline-offset-4 decoration-[#387adf]/50 hover:decoration-white transition-colors cursor-pointer text-xs uppercase tracking-wider"
            >
              <span>Cambiar región</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={dismissGeoBanner}
              aria-label="Cerrar aviso de país"
              className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
