import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Check, Globe, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { useCountry } from '../context/CountryContext';
import { COUNTRIES } from '../data/countries';

export const CountryModal = () => {
  const { country, countryCode, setCountryCode, isCountryModalOpen, setIsCountryModalOpen } = useCountry();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isCountryModalOpen) return null;

  const countryList = Object.values(COUNTRIES).filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCountry = (code) => {
    setCountryCode(code);
    setIsCountryModalOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCountryModalOpen(false)}
          className="fixed inset-0 bg-[#060c16]/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative w-full max-w-2xl bg-[#0f223a] border border-[#234774] rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#234774]/70 flex items-center justify-between bg-gradient-to-r from-[#132a48] to-[#0f223a]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#387adf]/15 border border-[#387adf]/30 text-[#387adf]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Seleccionar Región & Moneda</span>
                </h3>
                <p className="text-xs text-slate-300">
                  Precios, impuestos, pasarelas de pago y logística se adaptan al instante.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCountryModalOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Box */}
          <div className="p-4 border-b border-[#234774]/50 bg-[#0c1c30]">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por país, código o moneda (ej. México, ARS, Chile...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#142944] border border-[#234774] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#387adf] focus:ring-1 focus:ring-[#387adf] transition-all"
                autoFocus
              />
            </div>
          </div>

          {/* Countries Grid / List */}
          <div className="p-4 overflow-y-auto space-y-3.5 flex-1">
            {countryList.map((item) => {
              const isSelected = item.code === countryCode;
              return (
                <motion.div
                  key={item.code}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleSelectCountry(item.code)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#1b3a61] border-[#387adf] shadow-lg shadow-[#387adf]/15 ring-1 ring-[#387adf]'
                      : 'bg-[#132742]/70 hover:bg-[#183354] border-[#234774]/60 hover:border-[#387adf]/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl filter drop-shadow">{item.flag}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-base">{item.name}</span>
                          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#0b192c] text-[#387adf] border border-[#387adf]/30">
                            {item.currency} ({item.currencySymbol})
                          </span>
                          {isSelected && (
                            <span className="text-[11px] font-semibold bg-[#387adf] text-white px-2 py-0.2 rounded-full uppercase tracking-wider">
                              Activo
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-300 mt-1.5">
                          <span className="flex items-center gap-1">
                            <Truck className="w-3.5 h-3.5 text-[#387adf]" />
                            <span>{item.shippingCompany.split('&')[0]}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{item.paymentMethods.map(p => p.name).slice(0, 2).join(', ')}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full bg-[#387adf] flex items-center justify-center text-white">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center text-transparent hover:border-[#387adf]">
                          •
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Badges footer */}
                  <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{item.invoiceType}</span>
                    <span className="text-slate-300">Entrega estimada: {item.shippingDays}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-[#0a1626] border-t border-[#234774]/70 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#387adf]" />
              <span>Garantía oficial y soporte técnico directo en destino por AITUE Telecomunicaciones.</span>
            </div>
            <button
              onClick={() => setIsCountryModalOpen(false)}
              className="px-4 py-1.5 rounded-lg bg-[#1e3e62] hover:bg-[#285282] text-white font-medium transition-colors cursor-pointer text-xs"
            >
              Listo
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
