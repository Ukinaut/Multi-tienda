import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CountryProvider, useCountry } from './context/CountryContext';
import { CartProvider } from './context/CartContext';
import { GeoBanner } from './components/GeoBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SolutionsSection } from './components/SolutionsSection';
import { NetworkCoverageSection } from './components/NetworkCoverageSection';
import { TelemetrySection } from './components/TelemetrySection';
import { ProductCard } from './components/ProductCard';
import { ProductQuickView } from './components/ProductQuickView';
import { CountryModal } from './components/CountryModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { PRODUCTS, CATEGORIES } from './data/products';
import { Filter, Search, Satellite, Radio, Check, Globe, SlidersHorizontal } from 'lucide-react';

const MainCatalog = () => {
  const { country, setIsCountryModalOpen } = useCountry();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductForQuickView, setSelectedProductForQuickView] = useState(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'todos' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="py-20 bg-[#0b192c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Catalog Header with Country Context Note */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1e3e62]/70 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2 font-mono text-xs">
              <span className="text-[#387adf] font-bold uppercase tracking-widest">
                // MATRIZ DE HARDWARE OPERATIVO
              </span>
              <span className="text-slate-600">|</span>
              <button
                onClick={() => setIsCountryModalOpen(true)}
                className="text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors bg-[#10233b] px-2 py-0.5 border border-[#1e3e62]"
              >
                <span>{country.flag}</span>
                <span>{country.currency} ({country.currencySymbol})</span>
                <span className="text-[#387adf] underline text-[10px]">CAMBIAR</span>
              </button>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
              TERMINALES, GATEWAYS Y TELEMETRÍA
            </h2>
            <p className="mt-2 text-slate-300 text-sm max-w-xl font-normal">
              Equipamiento militar e industrial probado para enlaces satelitales en movimiento y telemetría autónoma.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar SKU, satélite o protocolo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#10233b] border-2 border-[#1e3e62] pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white font-mono transition-all"
              />
            </div>
          </div>
        </div>

        {/* Filter Tabs with Industrial Geometry */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none font-mono">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border-2 ${
                  isSelected
                    ? 'bg-white text-[#0b192c] border-white shadow-xl shadow-white/10'
                    : 'bg-[#10233b] text-slate-400 hover:text-white hover:border-slate-500 border-[#1e3e62]'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center text-slate-400 bg-[#0e1d32] rounded-2xl border border-[#234774] p-8">
            <p className="text-base font-semibold text-white">No se encontraron equipos para esta búsqueda</p>
            <p className="text-xs text-slate-400 mt-1">Intenta con otro término o selecciona "Todos los Equipos".</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedProductForQuickView(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Quick View Modal */}
        <ProductQuickView
          product={selectedProductForQuickView}
          onClose={() => setSelectedProductForQuickView(null)}
        />

      </div>
    </section>
  );
};

export default function App() {
  return (
    <CountryProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#0b192c] text-white flex flex-col font-sans selection:bg-[#387adf] selection:text-white">
          <GeoBanner />
          <Navbar />
          
          <main className="flex-1">
            <HeroSection />
            <SolutionsSection />
            <MainCatalog />
            <NetworkCoverageSection />
            <TelemetrySection />
          </main>

          <Footer />

          {/* Global Interactive Overlays */}
          <CountryModal />
          <CartDrawer />
          <CheckoutModal />
        </div>
      </CartProvider>
    </CountryProvider>
  );
}
