import React from 'react';
import { Satellite, Shield, Globe, Phone, Mail, MapPin, Award } from 'lucide-react';
import { useCountry } from '../context/CountryContext';

export const Footer = () => {
  const { country, setIsCountryModalOpen } = useCountry();

  return (
    <footer id="contacto" className="bg-[#07111e] border-t border-[#1e3e62] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-white.png"
                alt="AITUE Comunica S.A."
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="text-xl font-black text-white tracking-wider font-mono block">
                  AITUE
                </span>
                <span className="text-[10px] tracking-widest text-[#387adf] font-bold uppercase">
                  COMUNICA S.A.
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Líder en integración de soluciones de conectividad crítica, móvil y remota. Combinamos constelaciones satelitales LEO, redes LTE/5G industriales y plataformas de telemetría para operaciones extremas.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-[#132742] text-slate-300 font-mono text-[11px] border border-[#234774]">
                ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#132742] text-slate-300 font-mono text-[11px] border border-[#234774]">
                ATEX Certified
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#132742] text-slate-300 font-mono text-[11px] border border-[#234774]">
                NOC 24/7/365
              </span>
            </div>
          </div>

          {/* Regional Hubs */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Sedes Regionales
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-slate-300">🇦🇷</span>
                <span><strong>Buenos Aires & Neuquén</strong> (Base Vaca Muerta)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-slate-300">🇨🇱</span>
                <span><strong>Santiago & Antofagasta</strong> (Hub Minero)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-slate-300">🇲🇽</span>
                <span><strong>CDMX & Monterrey</strong></span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-slate-300">🇪🇸</span>
                <span><strong>Madrid</strong> (Operaciones Europa)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-slate-300">🇺🇸</span>
                <span><strong>Miami, FL</strong> (Forwarding Global)</span>
              </li>
            </ul>
          </div>

          {/* Contact NOC */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Mesa Operativa NOC
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#387adf]" />
                <span className="font-mono">{country.phoneCode} 800-AITUE-SAT</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#387adf]" />
                <span>noc@aituecomunica.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Guardia de Enlaces Críticos 24h</span>
              </li>
            </ul>
          </div>

          {/* Active Country Context */}
          <div className="space-y-3 bg-[#0d1d31] p-4 rounded-xl border border-[#234774]/70">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#387adf]" />
              <span>Región Activa</span>
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{country.flag}</span>
              <div>
                <span className="text-white font-bold block">{country.name}</span>
                <span className="font-mono text-[#387adf] text-[11px]">
                  Moneda: {country.currency} ({country.currencySymbol})
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              Despacho vía {country.shippingCompany.split('&')[0]}.
            </p>
            <button
              onClick={() => setIsCountryModalOpen(true)}
              className="w-full py-1.5 px-3 rounded-lg bg-[#183354] hover:bg-[#234774] text-white font-semibold text-[11px] transition-colors cursor-pointer"
            >
              Cambiar País
            </button>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>© {new Date().getFullYear()} AITUE Comunica S.A. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos de Enlace Crítico</a>
            <a href="#" className="hover:text-white transition-colors">Acuerdo de SLA 99.98%</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad de Telemetría</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
