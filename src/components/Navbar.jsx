import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Globe, Radio, ChevronDown, Menu, X, Shield, PhoneCall } from 'lucide-react';
import { useCountry } from '../context/CountryContext';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { country, setIsCountryModalOpen } = useCountry();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0b192c]/90 backdrop-blur-xl border-b border-[#1e3e62]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-gradient-to-br from-[#1e3e62] to-[#0b192c] border border-[#387adf]/30 group-hover:border-[#387adf] transition-all shadow-md shadow-[#387adf]/10">
                <img
                  src="/logo-white.png"
                  alt="Aitue Comunica S.A."
                  className="h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(56,122,223,0.4)] group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-wider text-white font-mono">
                    AITUE
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest text-[#387adf] uppercase bg-[#1e3e62]/60 px-1.5 py-0.5 rounded border border-[#387adf]/30">
                    COMUNICA S.A.
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium hidden sm:block">
                  Conectividad Crítica · LEO · LTE · Telemetría
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#soluciones" className="hover:text-white transition-colors">
              Soluciones
            </a>
            <a href="#catalogo" className="hover:text-white transition-colors flex items-center gap-1.5">
              <span>Equipamiento</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-[#387adf]/20 text-[#387adf] font-mono border border-[#387adf]/40">
                LEO / 5G
              </span>
            </a>
            <a href="#telemetria" className="hover:text-white transition-colors">
              Telemetría Industrial
            </a>
            <a href="#cobertura" className="hover:text-white transition-colors">
              Cobertura Regional
            </a>
            <a href="#contacto" className="hover:text-white transition-colors flex items-center gap-1 text-slate-300 hover:text-[#387adf]">
              <PhoneCall className="w-3.5 h-3.5 text-[#387adf]" />
              <span>Mesa NOC 24/7</span>
            </a>
          </nav>

          {/* Actions: Country Selector + Cart Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Country Selector Pill Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsCountryModalOpen(true)}
              className="flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#132742] hover:bg-[#183354] border border-[#234774] hover:border-[#387adf]/60 text-slate-200 transition-all cursor-pointer shadow-sm text-xs sm:text-sm"
              title="Cambiar país y divisa"
            >
              <span className="text-lg filter drop-shadow">{country.flag}</span>
              <div className="flex flex-col text-left">
                <span className="font-bold text-white leading-tight font-mono">
                  {country.currency}
                </span>
                <span className="text-[10px] text-slate-400 leading-tight hidden sm:block">
                  {country.name}
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
            </motion.button>

            {/* Shopping Cart Trigger */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#1e3e62] hover:bg-[#285282] border border-[#387adf]/40 hover:border-[#387adf] text-white transition-all cursor-pointer shadow-md shadow-[#387adf]/15"
              aria-label="Abrir Carrito de compras"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-1.5 bg-[#387adf] text-white font-mono text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#0b192c] shadow"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1f33] border-b border-[#234774] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#soluciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-[#387adf]"
          >
            Soluciones de Conectividad
          </a>
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-[#387adf]"
          >
            Equipos Satelitales & Routers 5G
          </a>
          <a
            href="#telemetria"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-[#387adf]"
          >
            Telemetría Industrial & SCADA
          </a>
          <a
            href="#cobertura"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-[#387adf]"
          >
            Red & Cobertura en {country.name}
          </a>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Soporte NOC: noc@aituecomunica.com</span>
            <span className="font-mono text-[#387adf]">{country.phoneCode} 800-AITUE</span>
          </div>
        </div>
      )}
    </header>
  );
};
