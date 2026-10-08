import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, CreditCard, Building2, Truck, ArrowLeft, ArrowRight, FileText, QrCode, Copy, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCountry } from '../context/CountryContext';

export const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, items, subtotalUSD, clearCart, formatPrice } = useCart();
  const { country } = useCountry();

  const [step, setStep] = useState('data'); // 'data' | 'payment' | 'success'
  const [copied, setCopied] = useState(false);
  
  // Form fields
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    taxId: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    selectedPaymentMethod: country.paymentMethods[0]?.id || ''
  });

  if (!isCheckoutOpen) return null;

  const totalAmount = formatPrice(subtotalUSD);

  const getTaxIdLabel = () => {
    switch (country.code) {
      case 'AR': return 'CUIT Empresa / Particular (Factura A o B)';
      case 'CL': return 'RUT Empresa (Factura Electrónica SII)';
      case 'MX': return 'RFC Empresa / Persona Física (CFDI 4.0)';
      case 'CO': return 'NIT / Cédula de Ciudadanía (DIAN)';
      case 'ES': return 'NIF / CIF (Factura Oficial)';
      case 'US': return 'EIN / Corporate Tax ID / VAT';
      default: return 'Identificación Fiscal / Tax ID';
    }
  };

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setStep('success');
  };

  const handleFinish = () => {
    clearCart();
    setIsCheckoutOpen(false);
    setStep('data');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCheckoutOpen(false)}
          className="fixed inset-0 bg-[#060c16]/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="relative w-full max-w-3xl bg-[#0f223a] border border-[#234774] rounded-2xl shadow-2xl shadow-black/90 overflow-hidden z-10 my-6 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-[#234774]/70 flex items-center justify-between bg-[#122844]">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{country.flag}</span>
              <div>
                <h3 className="font-bold text-white text-base">
                  Checkout Corporativo · {country.name}
                </h3>
                <p className="text-xs text-slate-300 font-mono">
                  Moneda: {country.currency} ({country.currencySymbol}) · {country.invoiceType}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress */}
          {step !== 'success' && (
            <div className="px-6 py-3 bg-[#0a1829] border-b border-[#234774]/50 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  step === 'data' ? 'bg-[#387adf] text-white' : 'bg-emerald-500 text-white'
                }`}>
                  1
                </span>
                <span className={step === 'data' ? 'text-white font-semibold' : 'text-slate-400'}>
                  Datos & Entrega
                </span>
              </div>
              <div className="h-0.5 w-12 bg-[#234774]" />
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  step === 'payment' ? 'bg-[#387adf] text-white' : 'bg-[#183354] text-slate-400'
                }`}>
                  2
                </span>
                <span className={step === 'payment' ? 'text-white font-semibold' : 'text-slate-400'}>
                  Pasarela Local ({country.currency})
                </span>
              </div>
            </div>
          )}

          {/* Body Content */}
          <div className="p-6 overflow-y-auto flex-1">
            {step === 'data' && (
              <form onSubmit={(e) => { e.preventDefault(); setStep('payment'); }} className="space-y-4">
                <div className="bg-[#142944] p-3.5 rounded-xl border border-[#234774] text-xs text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#387adf]" />
                    <span>Logística asignada en {country.name}: <strong>{country.shippingCompany}</strong></span>
                  </div>
                  <span className="text-emerald-400 font-semibold">{country.shippingDays}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Razón Social / Empresa *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Minera del Sur S.A. / Particular"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-[#132742] border border-[#234774] rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#387adf]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">{getTaxIdLabel()} *</label>
                    <input
                      type="text"
                      required
                      placeholder={country.code === 'AR' ? '30-XXXXXXXX-X' : 'Número de identificación fiscal'}
                      value={formData.taxId}
                      onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                      className="w-full bg-[#132742] border border-[#234774] rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#387adf]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Nombre del Responsable / Compras *</label>
                    <input
                      type="text"
                      required
                      placeholder="Nombre y Apellido"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-[#132742] border border-[#234774] rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#387adf]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Email Corporativo para Factura *</label>
                    <input
                      type="email"
                      required
                      placeholder="compras@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#132742] border border-[#234774] rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#387adf]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-300 font-semibold mb-1">Dirección de Entrega / Faena / Sede *</label>
                    <input
                      type="text"
                      required
                      placeholder="Calle, Número, Parque Industrial, Yacimiento o Coordenadas"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[#132742] border border-[#234774] rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#387adf]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Ciudad / Provincia / Estado *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ciudad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#132742] border border-[#234774] rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#387adf]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Teléfono Móvil de Contacto *</label>
                    <input
                      type="tel"
                      required
                      placeholder={`${country.phoneCode} 9 11 ...`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#132742] border border-[#234774] rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#387adf]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <span className="text-xs text-slate-400">Total a facturar: <strong className="text-white font-mono">{totalAmount}</strong></span>
                  <button
                    type="submit"
                    className="py-2.5 px-6 rounded-xl bg-[#387adf] hover:bg-[#4e8ff7] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <span>Seleccionar Medio de Pago</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {step === 'payment' && (
              <form onSubmit={handleSubmitOrder} className="space-y-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Métodos de Pago Habilitados en {country.name} ({country.flag})
                  </h4>
                  <button
                    type="button"
                    onClick={() => setStep('data')}
                    className="text-xs text-[#387adf] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Volver a datos</span>
                  </button>
                </div>

                {/* Country Specific Payment Options */}
                <div className="space-y-3">
                  {country.paymentMethods.map((method) => {
                    const isSelected = formData.selectedPaymentMethod === method.id;
                    return (
                      <div
                        key={method.id}
                        onClick={() => setFormData({ ...formData, selectedPaymentMethod: method.id })}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1b3a61] border-[#387adf] shadow-md ring-1 ring-[#387adf]'
                            : 'bg-[#132742] border-[#234774] hover:border-slate-500'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-[#387adf]" />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-white text-sm">{method.name}</span>
                                {method.badge && (
                                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono border border-emerald-500/30">
                                    {method.badge}
                                  </span>
                                )}
                                {method.discount && (
                                  <span className="text-[10px] bg-[#387adf] text-white px-2 py-0.5 rounded font-bold">
                                    {method.discount}% OFF B2B
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-300 mt-0.5">{method.desc}</p>
                            </div>
                          </div>

                          <div className="w-5 h-5 rounded-full border border-slate-500 flex items-center justify-center">
                            {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#387adf]" />}
                          </div>
                        </div>

                        {/* Payment details preview when selected */}
                        {isSelected && (
                          <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-300 bg-[#0c1a2d] p-3 rounded-lg">
                            {method.id === 'mercadopago' && (
                              <div className="space-y-1">
                                <p className="font-semibold text-white">Mercado Pago Argentina:</p>
                                <p className="text-slate-400">Podrás abonar al instante mediante código QR, dinero en cuenta o tarjeta en cuotas.</p>
                              </div>
                            )}
                            {method.id === 'transfer_cbu' && (
                              <div className="space-y-1">
                                <p className="font-semibold text-white">Datos de Cuenta Corriente AITUE Comunica S.A.:</p>
                                <p className="font-mono text-slate-300">CBU: 0720123920000004589214</p>
                                <p className="font-mono text-slate-300">Alias: AITUE.COMUNICA.CRITICA</p>
                                <p className="text-emerald-400 font-semibold">Se aplica 8% de bonificación por pago directo.</p>
                              </div>
                            )}
                            {method.id === 'webpay' && (
                              <p className="text-slate-400">Conexión directa con la pasarela segura Transbank Webpay Plus (Débito y Crédito en CLP).</p>
                            )}
                            {method.id === 'pse' && (
                              <p className="text-slate-400">Conexión con ACH Colombia para débito inmediato desde Bancolombia, Davivienda, etc.</p>
                            )}
                            {method.id === 'bizum' && (
                              <p className="text-slate-400">Autorización instantánea mediante código en la app de tu banco.</p>
                            )}
                            {method.id === 'oxxo' && (
                              <p className="text-slate-400">Generaremos un código de barras para pago en cualquier sucursal OXXO de la República Mexicana.</p>
                            )}
                            {method.id === 'stripe_us' && (
                              <p className="text-slate-400">Procesamiento seguro en USD con cifrado bancario Stripe y protección contra fraudes.</p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl bg-[#0b192c] border border-[#234774] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Total Final a Procesar
                    </span>
                    <span className="text-xl font-black text-white font-mono">
                      {totalAmount}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/30"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Confirmar Orden de Compra</span>
                  </button>
                </div>
              </form>
            )}

            {step === 'success' && (
              <div className="py-6 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-[#387adf] uppercase tracking-wider bg-[#132742] px-3 py-1 rounded-full border border-[#234774]">
                    Orden #{Math.floor(100000 + Math.random() * 900000)} · Procesada en {country.name}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-3">
                    ¡Orden Registrada Exitosamente!
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                    Hemos emitido la solicitud de adquisición para <strong>{formData.companyName || 'tu empresa'}</strong>. Recibirás la documentación fiscal de {country.invoiceType} en <strong>{formData.email || 'tu email'}</strong>.
                  </p>
                </div>

                <div className="p-4 max-w-md mx-auto rounded-xl bg-[#132742] border border-[#234774] text-xs text-left space-y-2">
                  <div className="flex justify-between text-slate-300">
                    <span>Monto Total:</span>
                    <span className="font-mono font-bold text-white">{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Operador Logístico:</span>
                    <span className="text-slate-200">{country.shippingCompany.split('&')[0]}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Tiempo de Despacho:</span>
                    <span className="text-emerald-400 font-semibold">{country.shippingDays}</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={handleFinish}
                    className="py-3 px-8 rounded-xl bg-[#387adf] hover:bg-[#4e8ff7] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Volver a la Tienda
                  </button>
                </div>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
