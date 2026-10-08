import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Check, Truck, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useCountry } from '../context/CountryContext';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product, onQuickView }) => {
  const { country, formatPrice } = useCountry();
  const { addToCart } = useCart();
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div className="bg-[#0c1a2d] border-2 border-[#1e3e62] hover:border-white transition-all duration-300 flex flex-col justify-between relative group shadow-xl">
      
      {/* Top Engineering SKU Header */}
      <div className="px-4 py-2.5 bg-[#10233b] border-b border-[#1e3e62] flex items-center justify-between font-mono text-[11px]">
        <span className="text-[#387adf] font-bold">
          // {product.categoryName.toUpperCase()}
        </span>
        <span className="text-white font-bold px-1.5 py-0.2 bg-[#0b192c] border border-[#1e3e62]">
          {product.badge}
        </span>
      </div>

      {/* Hardware Photography Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#07111d] border-b border-[#1e3e62]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        
        {/* Quick View Button */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 right-3 px-3 py-1.5 bg-[#0b192c]/90 hover:bg-white text-slate-300 hover:text-[#0b192c] border border-white/20 hover:border-white font-mono text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5"
          title="Ficha Técnica"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>SPECS</span>
        </button>
      </div>

      {/* Core Technical Specifications Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <h3 className="text-base font-bold text-white group-hover:text-[#4e8ff7] transition-colors leading-snug font-['Syne',sans-serif]">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Technical Blueprint Chips */}
          <div className="mt-4 pt-3 border-t border-[#1e3e62] grid grid-cols-2 gap-2 font-mono text-[11px]">
            {product.specs.velocidad && (
              <div className="bg-[#10233b] p-2 border border-[#1e3e62]">
                <span className="text-slate-400 block text-[9px] uppercase font-bold">VELOCIDAD</span>
                <span className="text-white font-bold">{product.specs.velocidad}</span>
              </div>
            )}
            {product.specs.latencia && (
              <div className="bg-[#10233b] p-2 border border-[#1e3e62]">
                <span className="text-slate-400 block text-[9px] uppercase font-bold">LATENCIA</span>
                <span className="text-emerald-400 font-bold">{product.specs.latencia}</span>
              </div>
            )}
            {product.specs.proteccion && (
              <div className="bg-[#10233b] p-2 border border-[#1e3e62]">
                <span className="text-slate-400 block text-[9px] uppercase font-bold">NORMA</span>
                <span className="text-cyan-300 font-bold">{product.specs.proteccion.split('/')[0]}</span>
              </div>
            )}
            {product.specs.failover && (
              <div className="bg-[#10233b] p-2 border border-[#1e3e62]">
                <span className="text-slate-400 block text-[9px] uppercase font-bold">FAILOVER</span>
                <span className="text-amber-400 font-bold">&lt; 100ms</span>
              </div>
            )}
            {product.specs.telemetria && (
              <div className="bg-[#10233b] p-2 border border-[#1e3e62]">
                <span className="text-slate-400 block text-[9px] uppercase font-bold">ENLACE</span>
                <span className="text-cyan-300 font-bold">Sat + LTE</span>
              </div>
            )}
            {product.specs.panel && (
              <div className="bg-[#10233b] p-2 border border-[#1e3e62]">
                <span className="text-slate-400 block text-[9px] uppercase font-bold">ENERGÍA</span>
                <span className="text-amber-300 font-bold">Solar MPPT</span>
              </div>
            )}
          </div>
        </div>

        {/* Pricing & Pure White Action CTA */}
        <div className="pt-4 border-t border-[#1e3e62] space-y-3">
          
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono text-slate-400 block font-bold">
                PRECIO // {country.name} ({country.flag})
              </span>
              <span className="text-2xl font-black text-white font-mono tracking-tight">
                {formatPrice(product.priceUSD)}
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Ref. ${product.priceUSD} USD
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono">
            <Truck className="w-3.5 h-3.5 text-[#387adf]" />
            <span>Despacho: {country.shippingCompany.split('&')[0]}</span>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleAddToCart}
              className={`flex-1 py-3.5 px-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer border-2 ${
                addedAnimation
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/20'
                  : 'bg-white text-[#0b192c] hover:bg-slate-100 border-white shadow-xl shadow-white/10'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Añadido</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#387adf]" />
                  <span>Adquirir Equipo</span>
                </>
              )}
            </motion.button>
          </div>

        </div>

      </div>

    </div>
  );
};
