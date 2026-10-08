import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, ShoppingBag, Truck, Satellite, Download, FileText } from 'lucide-react';
import { useCountry } from '../context/CountryContext';
import { useCart } from '../context/CartContext';

export const ProductQuickView = ({ product, onClose }) => {
  const { country, formatPrice } = useCountry();
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddAndClose = () => {
    addToCart(product, 1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#060d17]/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative w-full max-w-4xl bg-[#0c1a2d] border-2 border-white/20 shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-[#1e3e62] flex items-center justify-between bg-[#10233b]">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-white text-[#0b192c]">
                {product.badge}
              </span>
              <span className="text-xs font-mono text-cyan-300">
                FICHA TÉCNICA // AITUE SKU #{product.id.toUpperCase()}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Product Visual */}
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#0a1524] border border-[#234774]/80 relative shadow-inner">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0b192c]/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg text-xs font-mono text-slate-300">
                    Certificación Oficial AITUE
                  </div>
                </div>

                {/* Country lead-time notification */}
                <div className="p-3.5 rounded-xl bg-[#142944] border border-[#234774] text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Truck className="w-4 h-4 text-[#387adf]" />
                    <span>Disponibilidad en {country.name} ({country.flag})</span>
                  </div>
                  <p className="text-slate-400 pl-6">
                    {product.leadTime} con operador <strong>{country.shippingCompany}</strong>.
                  </p>
                </div>
              </div>

              {/* Details & Specs */}
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl font-black text-white tracking-tight">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Local Price Display */}
                <div className="p-4 rounded-xl bg-[#0b192c] border border-[#234774] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Inversión en {country.name}
                    </span>
                    <span className="text-2xl font-black text-white font-mono">
                      {formatPrice(product.priceUSD)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-mono">
                      {country.taxName}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      Entrega: {country.shippingDays}
                    </span>
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Características Destacadas
                  </h4>
                  <ul className="space-y-2">
                    {product.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#387adf] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications Table */}
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#387adf]" />
                    <span>Matriz de Especificaciones Técnicas</span>
                  </h4>
                  <div className="rounded-xl border border-[#234774] overflow-hidden text-xs divide-y divide-[#234774]">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between p-2.5 bg-[#122844]/60 odd:bg-[#0f2138]/60">
                        <span className="font-semibold text-slate-400 capitalize">{key}</span>
                        <span className="font-mono text-white text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex items-center gap-3">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleAddAndClose}
                    className="flex-1 py-3.5 px-5 rounded-xl bg-white hover:bg-slate-100 text-[#0b192c] font-black text-sm tracking-wide shadow-xl shadow-white/10 flex items-center justify-center gap-2 cursor-pointer border border-white"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#387adf]" />
                    <span>Añadir al Carrito ({country.currency})</span>
                  </motion.button>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
