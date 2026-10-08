import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Flame, Truck, ShieldAlert, Check, ArrowRight, CornerDownRight, CheckCircle2 } from 'lucide-react';
import { useCountry } from '../context/CountryContext';

export const SolutionsSection = () => {
  const { country } = useCountry();

  const deployments = [
    {
      num: '01',
      title: 'Minería & Faenas en Alta Cordillera',
      location: 'Altitudes > 4.200 msnm · Clima Ártico / Desértico',
      desc: 'Supervivencia a vientos de 180 km/h y temperaturas de -35°C. Enlace satelital continuo para camps de perforación, telemetría de tolvas y automatización de maquinaria pesada.',
      specs: ['Latencia LEO: < 24 ms', 'Handover inter-satelital sin pérdida', 'Protección IP69K anti-congelamiento'],
      tag: 'FAENAS REMOTAS'
    },
    {
      num: '02',
      title: 'Yacimientos Petrolíferos & Gasoductos',
      location: 'Cuenca Neuquina (Vaca Muerta) · Regiones Aisladas',
      desc: 'Transmisión ininterrumpida de variables críticas SCADA (presión en boca de pozo, caudales, ESD). Conmutación de respaldo satélite/celular en menos de 100 milisegundos.',
      specs: ['Certificación ATEX Zona 2', 'Cifrado de nivel militar IPsec', 'Protocolo nativo Modbus/MQTT'],
      tag: 'OIL & GAS'
    },
    {
      num: '03',
      title: 'Flotas & Transporte de Carga Pesada',
      location: 'Rutas continentales sin cobertura de antena terrestre',
      desc: 'Terminales vehiculares de perfil plano (Wedge) fijados en techos de camionetas y camiones para mantener VoIP, telemetría CAN-bus y botón de pánico en tiempo real.',
      specs: ['Conectividad a 140 km/h', 'Alimentación vehicular 12V/24V', 'Consumo optimizado < 65W'],
      tag: 'LOGÍSTICA CRÍTICA'
    },
    {
      num: '04',
      title: 'Respuesta Inmediata & Defensa Civil',
      location: 'Catástrofes naturales y colapso de red pública',
      desc: 'Valijas tácticas FlyAway de despliegue en 90 segundos con un solo botón. No requiere personal calificado para apuntamiento satelital. Batería interna para 8+ horas.',
      specs: ['Auto-alineación por GPS', 'Valija militar Pelicase hermética', 'Hotspot Wi-Fi 6 de campo'],
      tag: 'TÁCTICO & RESCATE'
    }
  ];

  return (
    <section id="soluciones" className="py-24 bg-white text-[#0b192c] border-b-2 border-[#1e3e62] relative overflow-hidden">
      
      {/* Blueprint grid pattern in light gray/blue for engineering feel */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #0b192c 1px, transparent 1px), linear-gradient(to bottom, #0b192c 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with crisp dark navy typography on white */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#0b192c]/10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[#387adf]">
              <span className="w-2 h-2 bg-[#387adf]" />
              <span>// ARQUITECTURA DE DESPLIEGUE EN TERRENO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0b192c] tracking-tight font-['Syne',sans-serif]">
              INGENIERÍA PARA CONDICIONES EXTREMAS
            </h2>
          </div>

          <p className="text-slate-600 text-sm max-w-md font-normal leading-relaxed">
            Eliminamos zonas oscuras combinando constelaciones satelitales LEO con redes privadas celulares LTE/5G para empresas en <strong className="text-[#0b192c]">{country.name}</strong> y todo el continente.
          </p>
        </div>

        {/* Technical Deployment Matrix - Stark crisp boxes on white */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deployments.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] border-2 border-[#0b192c]/15 hover:border-[#387adf] p-7 sm:p-9 relative transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-[#387adf]/10"
            >
              {/* Corner Tag */}
              <div className="flex items-center justify-between pb-6 border-b border-[#0b192c]/10">
                <span className="font-mono text-3xl font-black text-[#0b192c]/20 group-hover:text-[#387adf] transition-colors">
                  {item.num}
                </span>
                <span className="font-mono text-[10px] font-bold px-3 py-1 bg-[#0b192c] text-white uppercase tracking-widest">
                  {item.tag}
                </span>
              </div>

              {/* Body */}
              <div className="py-6 space-y-3">
                <h3 className="text-2xl font-bold text-[#0b192c] group-hover:text-[#387adf] transition-colors font-['Syne',sans-serif]">
                  {item.title}
                </h3>
                <div className="font-mono text-xs text-[#387adf] font-bold">
                  {item.location}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>

              {/* Technical Specifications Bullets */}
              <div className="pt-6 border-t border-[#0b192c]/10 space-y-2.5 font-mono text-xs">
                {item.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2.5 text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#387adf] shrink-0" />
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Certifications Banner inside White Section */}
        <div className="mt-16 p-6 sm:p-8 bg-[#0b192c] text-white flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-[#1e3e62] shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-mono text-[#387adf] uppercase font-bold tracking-widest">
              HOMOLOGACIÓN REGIONAL
            </span>
            <h4 className="text-lg sm:text-xl font-bold font-['Syne',sans-serif]">
              Certificación y Homologación Directa en {country.name} ({country.flag})
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Nuestros equipos cuentan con homologación de telecomunicaciones ante ENACOM / SUBTEL / IFT / CRC / CNMC y despacho con {country.invoiceType}.
            </p>
          </div>

          <a
            href="#catalogo"
            className="px-6 py-3.5 bg-white text-[#0b192c] hover:bg-slate-100 font-black text-xs uppercase tracking-widest shrink-0 transition-all border-2 border-white cursor-pointer"
          >
            Ver Equipos Homologados
          </a>
        </div>

      </div>
    </section>
  );
};
