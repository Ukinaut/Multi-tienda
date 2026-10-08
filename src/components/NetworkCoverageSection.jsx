import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Truck, Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { useCountry } from '../context/CountryContext';
import { COUNTRIES } from '../data/countries';

export const NetworkCoverageSection = () => {
  const { country, countryCode, setCountryCode, setIsCountryModalOpen } = useCountry();

  const hubs = [
    {
      code: 'AR',
      country: 'Argentina',
      flag: '🇦🇷',
      hubs: 'Buenos Aires (Central) · Neuquén (Vaca Muerta)',
      coverage: 'Cobertura 100% territorio nacional + Patagonia',
      courier: 'Andreani Logística Crítica',
      sla: 'SLA Repuesto: 24 hs en yacimiento'
    },
    {
      code: 'CL',
      country: 'Chile',
      flag: '🇨🇱',
      hubs: 'Santiago · Antofagasta · Calama',
      coverage: 'Red Minera Norte Grande hasta Magallanes',
      courier: 'Starken & Chilexpress Especial',
      sla: 'SLA Repuesto: 24 a 48 hs faena'
    },
    {
      code: 'MX',
      country: 'México',
      flag: '🇲🇽',
      hubs: 'Ciudad de México · Monterrey · Guadalajara',
      coverage: 'Centro, Norte y zonas petroleras Golfo',
      courier: 'DHL Express México & FedEx',
      sla: 'SLA Repuesto: 24 a 48 hs'
    },
    {
      code: 'CO',
      country: 'Colombia',
      flag: '🇨🇴',
      hubs: 'Bogotá D.C. · Medellín · Barranquilla',
      coverage: 'Zona Andina y Costa Caribe',
      courier: 'Servientrega Industrial',
      sla: 'SLA Repuesto: 48 hs'
    },
    {
      code: 'ES',
      country: 'España / Europa',
      flag: '🇪🇸',
      hubs: 'Madrid (Base Europea) · Barcelona',
      coverage: 'Península Ibérica, Islas y Unión Europea',
      courier: 'Correos Express & UPS Saver',
      sla: 'SLA Repuesto: 24 hs peninsular'
    },
    {
      code: 'US',
      country: 'Estados Unidos / Global',
      flag: '🇺🇸',
      hubs: 'Miami FL (Forwarding) · Houston TX',
      coverage: 'América del Norte y Despacho Internacional',
      courier: 'FedEx Priority Worldwide',
      sla: 'SLA Repuesto: 48 a 72 hs global'
    }
  ];

  return (
    <section id="cobertura" className="py-24 bg-white text-[#0b192c] border-b-2 border-[#1e3e62] relative overflow-hidden">
      
      {/* Blueprint grid subtle background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #0b192c 1px, transparent 1px), linear-gradient(to bottom, #0b192c 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#0b192c]/10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[#387adf]">
              <span className="w-2 h-2 bg-[#387adf]" />
              <span>// RED DE SOPORTE & DISTRIBUCIÓN CONTINENTAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0b192c] tracking-tight font-['Syne',sans-serif]">
              INFRAESTRUCTURA Y SEDES EN TERRENO
            </h2>
          </div>

          <p className="text-slate-600 text-sm max-w-md font-normal leading-relaxed">
            Contamos con inventario local de repuestos críticos y laboratorio de homologación en cada país para garantizar continuidad operativa sin esperas aduaneras.
          </p>
        </div>

        {/* Hubs Grid on White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub) => {
            const isSelected = hub.code === countryCode;
            return (
              <div
                key={hub.code}
                onClick={() => setCountryCode(hub.code)}
                className={`p-6 border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0b192c] text-white border-[#0b192c] shadow-2xl shadow-[#0b192c]/30'
                    : 'bg-[#f8fafc] text-[#0b192c] border-[#0b192c]/15 hover:border-[#387adf] hover:bg-white shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-current/10">
                    <div className="flex items-center gap-2.5">
                      <span className="text-3xl">{hub.flag}</span>
                      <div>
                        <h3 className="font-bold font-['Syne',sans-serif] text-lg leading-tight">
                          {hub.country}
                        </h3>
                        <span className="font-mono text-[11px] opacity-75">
                          Moneda: {COUNTRIES[hub.code]?.currency}
                        </span>
                      </div>
                    </div>

                    {isSelected ? (
                      <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-[#387adf] text-white uppercase tracking-wider">
                        ACTIVO
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-slate-400 group-hover:text-[#387adf]">
                        Seleccionar
                      </span>
                    )}
                  </div>

                  <div className="py-4 space-y-2.5 text-xs">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#387adf] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[11px] uppercase tracking-wider opacity-60">Sedes & Hubs</strong>
                        <span className="font-medium">{hub.hubs}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Truck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[11px] uppercase tracking-wider opacity-60">Operador Logístico</strong>
                        <span>{hub.courier}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[11px] uppercase tracking-wider opacity-60">Garantía / Repuesto</strong>
                        <span className="font-mono">{hub.sla}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-current/10 flex items-center justify-between text-xs font-mono font-bold">
                  <span>{isSelected ? '✓ Región Configurada' : 'Hacer clic para activar región'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
