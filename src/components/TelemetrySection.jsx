import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Radio, Cpu, Database, Bell, CheckCircle, RefreshCw, BarChart3, Wifi } from 'lucide-react';
import { useCountry } from '../context/CountryContext';

export const TelemetrySection = () => {
  const { country } = useCountry();

  // Simulated live telemetry numbers
  const [pressure, setPressure] = useState(1420);
  const [batteryVolt, setBatteryVolt] = useState(27.4);
  const [packetsSent, setPacketsSent] = useState(89420);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setPressure((prev) => +(prev + (Math.random() * 6 - 3)).toFixed(1));
      setBatteryVolt((prev) => +(27.2 + Math.random() * 0.4).toFixed(2));
      setPacketsSent((prev) => prev + Math.floor(Math.random() * 4 + 1));
      setTimeout(() => setIsUpdating(false), 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetria" className="py-20 bg-[#0b192c] border-b border-[#1e3e62]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
              AITUE Telemetry Cloud & SCADA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Monitoreo y Telemetría Industrial en Tiempo Real
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Nuestras unidades terminales remotas (RTU) y concentradores inalámbricos capturan variables críticas en campo (presión, caudal, vibración, estado de baterías) y las transmiten mediante enlace híbrido <strong>Satélite LEO + LTE</strong>.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#132742] border border-[#234774]">
                <Activity className="w-5 h-5 text-[#387adf] shrink-0" />
                <div>
                  <strong className="text-white block">Transmisión por Eventos & Alarmas</strong>
                  <span>Priorización automática en canal satelital ante desvíos operativos.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#132742] border border-[#234774]">
                <Database className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <strong className="text-white block">Buffering Offline con Memoria No Volátil</strong>
                  <span>Cero pérdida de registros históricos en caso de tormentas o cortes.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Simulated Live SCADA Panel */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e1d32] border border-[#234774] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              
              {/* Telemetry Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#234774]/70 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <h3 className="font-mono text-sm font-bold text-white flex items-center gap-2">
                      <span>NODO REMOTO #AITUE-RTU-084</span>
                      <span className="text-[10px] text-[#387adf] bg-[#142944] px-2 py-0.5 rounded border border-[#387adf]/30">
                        {country.name} · Yacimiento Activo
                      </span>
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Uplink: LEO Starlink Mobility + Backup LTE
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <RefreshCw className={`w-3.5 h-3.5 text-[#387adf] ${isUpdating ? 'animate-spin' : ''}`} />
                  <span>En vivo</span>
                </div>
              </div>

              {/* Gauges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                
                {/* Metric 1 */}
                <div className="bg-[#142a46] p-4 rounded-xl border border-[#234774] text-center">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-1">
                    Presión en Boca de Pozo
                  </span>
                  <div className="text-2xl font-black font-mono text-white">
                    {pressure} <span className="text-xs text-slate-400">PSI</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono mt-1 block">
                    ✓ Rango Óptimo (+/- 0.8%)
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="bg-[#142a46] p-4 rounded-xl border border-[#234774] text-center">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-1">
                    Batería LiFePO4 Solar
                  </span>
                  <div className="text-2xl font-black font-mono text-cyan-300">
                    {batteryVolt} <span className="text-xs text-slate-400">V DC</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-mono mt-1 block">
                    100% Carga (MPPT Flotación)
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="bg-[#142a46] p-4 rounded-xl border border-[#234774] text-center">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-1">
                    Paquetes Telemetría
                  </span>
                  <div className="text-2xl font-black font-mono text-[#4e8ff7]">
                    {packetsSent.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                    0 Paquetes Perdidos
                  </span>
                </div>

              </div>

              {/* Graph Bar Mock */}
              <div className="bg-[#0a1524] p-4 rounded-xl border border-[#234774]/70">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                  <span>HISTÓRICO DE ESTABILIDAD DE ENLACE (ÚLTIMAS 24 HS)</span>
                  <span className="text-emerald-400 font-bold">100% DISPONIBILIDAD</span>
                </div>
                <div className="h-10 flex items-end gap-1">
                  {[40, 55, 60, 75, 90, 85, 95, 90, 95, 100, 95, 98, 100, 95, 100, 100, 98, 100, 95, 100, 98, 100, 100, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#1e3e62] to-[#387adf] rounded-t-sm hover:opacity-80 transition-opacity"
                      style={{ height: `${h}%` }}
                      title={`Hora ${i}:00 - Estabilidad ${h}%`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
