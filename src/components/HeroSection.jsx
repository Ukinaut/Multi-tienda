import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Radio, Satellite, MapPin, ArrowRight, ShieldCheck, Activity, Terminal, CornerDownRight } from 'lucide-react';
import { useCountry } from '../context/CountryContext';

export const HeroSection = () => {
  const { country, setIsCountryModalOpen } = useCountry();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toISOString().substring(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 blueprint-grid border-b border-[#1e3e62] overflow-hidden">
      
      {/* Giant subtle watermark of the Aitue logo in background */}
      <div className="absolute right-[-5%] top-[10%] w-[600px] h-[600px] opacity-[0.03] pointer-events-none select-none">
        <img src="/logo-white.png" alt="" className="w-full h-full object-contain filter invert" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1e3e62]/80 font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            <span className="text-white font-bold tracking-wider">AITUE-SATCOM // RED REGIONAL OPERATIVA</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">ORBITAL LEO 550KM</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-slate-500">HORA SYS:</span>
              <span className="text-[#387adf] font-semibold">{currentTime || '18:42:00 UTC'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-slate-500">UBICACIÓN:</span>
              <span className="text-white font-bold flex items-center gap-1 bg-[#10233b] px-2 py-0.5 border border-[#1e3e62]">
                <span>{country.flag}</span>
                <span>{country.code}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Hero Split: Left Editorial & Right Hardware Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Typography & Editorial Manifesto */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#10233b] border border-[#387adf]/60 text-[11px] font-mono text-[#387adf] uppercase tracking-wider">
                <span>[ PROTOCOLO DE CONEXIÓN CRÍTICA ]</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[0.98] font-['Syne',sans-serif]">
                CONECTIVIDAD CRÍTICA SIN LÍMITES TERRESTRES.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Integramos tecnología satelital <strong>LEO (Baja Órbita)</strong>, enlaces <strong>LTE/5G industriales</strong> y telemetría de campo para operaciones en minería, yacimientos y flotas donde el aislamiento no es una opción.
            </p>

            {/* Industrial Logistics Box - Stamped with Pure White Contrast */}
            <div className="bg-[#10233b] border-2 border-[#1e3e62] p-4 sm:p-5 relative">
              <div className="absolute top-0 right-0 bg-[#387adf] text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-widest">
                DESPACHO OFICIAL EN DESTINO
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0 filter drop-shadow">{country.flag}</span>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-white font-bold uppercase">{country.name}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-emerald-400 font-bold">{country.currency} ({country.currencySymbol})</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Operador logístico asignado: <strong className="text-white">{country.shippingCompany}</strong>. Tiempo promedio de entrega: <strong className="text-white">{country.shippingDays}</strong>.
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Régimen fiscal: {country.invoiceType} · Soporte técnico presencial y remoto.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs con Contraste Radical en Blanco Puro (#ffffff) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#catalogo"
                className="px-8 py-4 bg-white text-[#0b192c] hover:bg-slate-100 font-black text-xs uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 shadow-2xl shadow-white/10 hover:shadow-white/20 border-2 border-white cursor-pointer active:scale-98"
              >
                <span>Explorar Equipos en {country.currency}</span>
                <ArrowRight className="w-4 h-4 text-[#387adf]" />
              </a>

              <button
                onClick={() => setIsCountryModalOpen(true)}
                className="px-6 py-4 bg-[#10233b] hover:bg-[#1a385e] border-2 border-[#1e3e62] hover:border-white text-white font-mono text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#387adf]" />
                <span>Cambiar País ({country.code})</span>
              </button>
            </div>

          </div>

          {/* Right Column: Mission Control Hardware Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b182a] border-2 border-[#1e3e62] shadow-2xl relative">
              
              {/* Console Header */}
              <div className="bg-[#10233b] border-b border-[#1e3e62] px-4 py-3 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#387adf]" />
                  <span className="text-white font-bold">CONSOLE-AITUE-SAT.01</span>
                </div>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 font-bold">
                  ENLACE KU/KA OK
                </span>
              </div>

              {/* Console Viewport */}
              <div className="p-5 space-y-5 font-mono">
                
                {/* Visual Radar Mock */}
                <div className="aspect-[16/9] bg-[#07111f] border border-[#1e3e62] relative overflow-hidden flex flex-col items-center justify-center p-4 blueprint-grid-dense">
                  
                  {/* Rotating Scanning Sweep Line */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="w-48 h-48 rounded-full border border-[#387adf]/40 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border border-[#387adf]/30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border border-[#387adf]/50" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 text-center space-y-1">
                    <Satellite className="w-8 h-8 text-white mx-auto animate-pulse" />
                    <div className="text-xs font-bold text-white tracking-widest uppercase">
                      TELEMETRÍA SATELITAL ACTIVA
                    </div>
                    <div className="text-[10px] text-cyan-400">
                      Rango de Frecuencia: 10.7 – 14.5 GHz (Ku Band)
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-3 text-[10px] text-slate-500">
                    LATENCIA: 21.8 ms
                  </div>
                  <div className="absolute bottom-2 right-3 text-[10px] text-slate-500">
                    S/N RATIO: 14.2 dB
                  </div>
                </div>

                {/* Specs Data Feed */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">CONMUTACIÓN FAILOVER</span>
                    <span className="text-white font-bold">&lt; 100 ms (Sub-segundo)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">ANCHO DE BANDA MÓVIL</span>
                    <span className="text-emerald-400 font-bold">250 Mbps Simétricos</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">ESTÁNDAR DE RESISTENCIA</span>
                    <span className="text-white font-bold">MIL-STD-810H / IP67</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">PAÍSES CON OPERACIÓN NOC</span>
                    <span className="text-[#387adf] font-bold">AR · CL · MX · CO · ES · US</span>
                  </div>
                </div>

                {/* Technical Bar Indicator */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>POTENCIA DE SEÑAL RF (RF GAIN)</span>
                    <span className="text-white font-bold">98.4% ÓPTIMO</span>
                  </div>
                  <div className="w-full h-2 bg-[#06101c] border border-[#1e3e62] p-0.5">
                    <div className="h-full bg-gradient-to-r from-[#1e3e62] via-[#387adf] to-white w-[98%]" />
                  </div>
                </div>

              </div>

              {/* Console Footer */}
              <div className="bg-[#0e1f33] border-t border-[#1e3e62] px-4 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>ESTADO: CALIBRADO</span>
                <span className="text-white">CERTIFICACIÓN AITUE S.A.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
