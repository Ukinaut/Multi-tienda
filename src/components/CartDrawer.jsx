import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCountry } from '../context/CountryContext';

export const CartDrawer = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    subtotalLocal,
    isFreeShipping,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    formatPrice
  } = useCart();

  const { country } = useCountry();

  if (!isCartOpen) return null;

  const freeShippingRemaining = Math.max(0, country.freeShippingThreshold - subtotalLocal);
  const progressPercent = Math.min(100, (subtotalLocal / country.freeShippingThreshold) * 100);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-[#060c16]/80 backdrop-blur-sm cursor-pointer"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="w-screen max-w-md bg-[#0f223a] border-l border-[#234774] shadow-2xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#234774]/70 bg-[#122844] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#387adf]/20 text-[#387adf]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Carro de Equipamiento</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span>{totalItems} {totalItems === 1 ? 'equipo' : 'equipos'}</span>
                    <span>•</span>
                    <span className="font-mono text-[#387adf] font-semibold">{country.name} ({country.flag})</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator (Localized) */}
            <div className="px-6 py-3.5 bg-[#0a1727] border-b border-[#234774]/50">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <Truck className="w-3.5 h-3.5 text-[#387adf]" />
                  <span>Envío Prioritario con {country.shippingCompany.split('&')[0]}</span>
                </span>
                <span className="font-mono text-emerald-400 font-semibold text-[11px]">
                  {isFreeShipping ? '¡Bonificado!' : `${progressPercent.toFixed(0)}%`}
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#142944] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#387adf] to-emerald-400 transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              {!isFreeShipping && freeShippingRemaining > 0 && (
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Agrega más equipos para envío bonificado en {country.name}.
                </p>
              )}
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-slate-400">
                  <div className="w-16 h-16 rounded-2xl bg-[#142944] border border-[#234774] flex items-center justify-center text-slate-500">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">El carrito está vacío</h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-xs">
                      Selecciona terminales satelitales LEO, routers LTE industriales o nodos de telemetría para comenzar.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-[#387adf] hover:bg-[#4e8ff7] text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    Ver Catálogo
                  </button>
                </div>
              ) : (
                items.map(({ product, quantity }) => (
                  <motion.div
                    layout
                    key={product.id}
                    className="p-3.5 rounded-xl bg-[#132742] border border-[#234774]/70 flex gap-3.5 items-center justify-between"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover bg-[#091523] border border-white/5 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">{product.name}</h4>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {formatPrice(product.priceUSD)} c/u
                      </p>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-6 h-6 rounded bg-[#0b192c] border border-[#234774] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs font-bold text-white px-1">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-6 h-6 rounded bg-[#0b192c] border border-[#234774] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between self-stretch">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-slate-400 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Eliminar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold font-mono text-[#387adf]">
                        {formatPrice(product.priceUSD * quantity)}
                      </span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout Button */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#234774]/80 bg-[#0c1c30] space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal Equipamiento</span>
                    <span className="font-mono font-bold text-white">
                      {formatPrice(items.reduce((s, i) => s + i.product.priceUSD * i.quantity, 0))}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{country.taxName}</span>
                    <span className="text-slate-300 font-mono">Incluido en total</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Logística ({country.shippingCompany.split('&')[0]})</span>
                    <span className="font-mono text-emerald-400">
                      {isFreeShipping ? 'Bonificado' : 'Calculado en paso siguiente'}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-bold text-white">
                    <span>Total Estimado ({country.currency})</span>
                    <span className="text-lg font-mono text-[#387adf]">
                      {formatPrice(items.reduce((s, i) => s + i.product.priceUSD * i.quantity, 0))}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleProceedToCheckout}
                  className="w-full py-4 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#0b192c] font-black text-sm tracking-wide uppercase shadow-xl shadow-white/10 flex items-center justify-center gap-2 cursor-pointer transition-all border border-white"
                >
                  <span>Continuar a Checkout Local ({country.flag})</span>
                  <ArrowRight className="w-4 h-4 text-[#387adf]" />
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Emisión oficial de {country.invoiceType}</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
