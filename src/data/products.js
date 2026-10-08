export const PRODUCTS = [
  {
    id: 'aitue-leo-wedge',
    name: 'AITUE LEO Mobility Wedge Terminal',
    tagline: 'Conectividad satelital de baja órbita para vehículos y maquinaria pesada en movimiento',
    category: 'satelital',
    categoryName: 'Terminales LEO',
    priceUSD: 2490,
    badge: 'Misión Crítica',
    featured: true,
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    specs: {
      velocidad: 'Hasta 250 Mbps simétricos',
      latencia: '< 25 ms (Órbita Baja LEO)',
      proteccion: 'IP67 / Grado Militar MIL-STD-810H',
      rangoTermico: '-40°C a +65°C',
      alimentacion: '12V - 48V DC Directo a Batería / 220V AC',
      consumo: '65W a 110W pico',
      interfaz: 'Gigabit Ethernet RJ45 + Wi-Fi 6 Industrial'
    },
    highlights: [
      'Handover inter-satelital dinámico sin pérdida de paquetes',
      'Perfil aerodinámico ultra bajo para montaje en camionetas mineras y transporte',
      'Integración nativa con router celular AITUE para failover híbrido'
    ],
    inStock: true,
    leadTime: 'Stock disponible para despacho prioritario'
  },
  {
    id: 'aitue-flyaway-tactical',
    name: 'AITUE Tactical FlyAway SatCase Pro',
    tagline: 'Valija estanca autodesplegable con enlace LEO y batería LiFePO4 integrada',
    category: 'satelital',
    categoryName: 'Terminales LEO',
    priceUSD: 3850,
    badge: 'Despliegue Rápido',
    featured: true,
    rating: 5.0,
    reviewsCount: 24,
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=900&q=80',
    specs: {
      velocidad: 'Hasta 220 Mbps',
      latencia: '< 28 ms',
      despliegue: 'Autónomo en 90 segundos con un solo botón',
      autonomia: '8 horas con pack LiFePO4 interno (ampliable)',
      valija: 'Pelicase ultra resistente hermética certificada para transporte aéreo',
      peso: '12.8 kg peso total',
      interfaz: 'Ethernet PoE + Hotspot Wi-Fi 6 de campo'
    },
    highlights: [
      'Diseñada para brigadas de emergencia, exploración geológica y rescate',
      'No requiere alineación manual: servo-motores con orientación GPS',
      'Carga simultánea por red, 12V vehicular o panel solar portátil'
    ],
    inStock: true,
    leadTime: 'Entrega en 3 a 5 días con calibración regional'
  },
  {
    id: 'aitue-edgeguard-5g',
    name: 'AITUE EdgeGuard 5G Industrial Gateway',
    tagline: 'Router celular rugerizado Dual-SIM con conmutación inteligente Satélite/LTE',
    category: 'lte',
    categoryName: 'Routers LTE / 5G',
    priceUSD: 1280,
    badge: 'Alta Disponibilidad',
    featured: true,
    rating: 4.8,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    specs: {
      conectividad: 'Dual SIM 5G Sub-6GHz + LTE-Advanced Cat-20',
      failover: 'Sub-segundo (<100ms) con satélite LEO o WAN secundaria',
      puertos: '5x Gigabit LAN/WAN + 1x SFP Fibra + RS-232/RS-485 Modbus',
      vpn: 'IPsec, WireGuard, OpenVPN con cifrado por hardware',
      temperatura: '-40°C a +75°C sin ventilador (Chasis aluminio extruido)',
      certificaciones: 'ATEX Zona 2 / E-Mark Vehicular / EN 50155 Ferroviario'
    },
    highlights: [
      'Bonding dinámico de tráfico para sumar ancho de banda celular y satelital',
      'Monitoreo centralizado Cloud AITUE con alertas de caída de enlace',
      'Aislamiento galvánico en puertos seriales para protección de picos de tensión'
    ],
    inStock: true,
    leadTime: 'Despacho en 24 horas'
  },
  {
    id: 'aitue-sdwan-telemetry-node',
    name: 'AITUE SD-WAN Bonded Node Industrial',
    tagline: 'Plataforma de borde para tunelización segura y priorización de telemetría crítica',
    category: 'lte',
    categoryName: 'Routers LTE / 5G',
    priceUSD: 1650,
    badge: 'Enterprise Edge',
    featured: false,
    rating: 4.7,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80',
    specs: {
      procesador: 'Quad-Core Industrial 2.0 GHz con acelerador de cifrado',
      interfaces: '4x GbE PoE+ (salida para antenas satelitales y cámaras térmicas)',
      modems: 'Módem 4G/LTE Cat 16 integrado + puerto USB para satélite',
      qos: 'Priorización L7 de paquetes SCADA, VoIP y telemetría sobre tráfico genérico',
      redundancia: 'Doble entrada de energía DC redundante (9V a 50V)'
    },
    highlights: [
      'Garantiza que la telemetría operativa nunca sufra micro-cortes',
      'Configuración Zero-Touch mediante orquestador central AITUE',
      'Almacenamiento local NVMe interno para buffering offline de telemetría'
    ],
    inStock: true,
    leadTime: 'Stock permanente'
  },
  {
    id: 'aitue-sentinel-scada-rtu',
    name: 'AITUE Sentinel Solar RTU Modbus & Sat',
    tagline: 'Estación autónoma de telemetría para pozos de petróleo, minería y agro',
    category: 'telemetria',
    categoryName: 'Telemetría & IoT',
    priceUSD: 1980,
    badge: 'Autonomía Total',
    featured: true,
    rating: 4.9,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
    specs: {
      telemetria: 'Módem satelital de micro-paquetes + fallback LTE-M / NB-IoT',
      entradas: '8x Analógicas 4-20mA / 0-10V + 8x Digitales + 2x RS485 Modbus RTU',
      energia: 'Panel solar 50W y batería interna para 14 días sin luz solar',
      gabinete: 'Rittal NEMA 4X / IP66 de acero inoxidable con cerradura antivandálica',
      protocolos: 'MQTT Sparkplug B, Modbus TCP/RTU, DNP3, OPC-UA'
    },
    highlights: [
      'Transmisión de presiones, caudales, niveles y temperatura desde cualquier punto del planeta',
      'Configuración de umbrales y alarmas que disparan envío satelital de alta prioridad',
      'Integración directa con SCADA corporativo o plataforma cloud AITUE Telemetry'
    ],
    inStock: true,
    leadTime: 'Despacho configurado a medida en 48 hs'
  },
  {
    id: 'aitue-lorawan-sat-concentrator',
    name: 'AITUE LoRaWAN-to-Satellite Gateway',
    tagline: 'Concentrador industrial de sensores inalámbricos con uplink a constelación LEO',
    category: 'telemetria',
    categoryName: 'Telemetría & IoT',
    priceUSD: 1420,
    badge: 'Largo Alcance',
    featured: false,
    rating: 4.8,
    reviewsCount: 16,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    specs: {
      radioLoRa: '8 canales concurrentes 868 / 915 MHz con cobertura de hasta 15 km',
      capacidad: 'Conecta hasta 1.000 sensores de campo (presión, humedad, vibración)',
      uplink: 'Híbrido Satélite LEO + LTE Celular',
      caja: 'Carcasa de fundición de aluminio IP67 con supresor de descargas atmosféricas',
      antena: 'Incluye antena omnidireccional de fibra de vidrio 6 dBi'
    },
    highlights: [
      'Monitorea extensas áreas agrícolas, faenas mineras y ductos sin tirar un solo cable',
      'Optimización extrema de bytes para reducir consumo de datos satelitales',
      'Fácil montaje en torre o poste'
    ],
    inStock: true,
    leadTime: 'Disponible'
  },
  {
    id: 'aitue-powervault-solar-station',
    name: 'AITUE PowerVault Solar Station 300W',
    tagline: 'Estación de energía solar autónoma para nodos de conectividad remota aislada',
    category: 'energia',
    categoryName: 'Energía Remota',
    priceUSD: 1850,
    badge: 'Energía Limpia 24/7',
    featured: false,
    rating: 4.9,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=900&q=80',
    specs: {
      panel: 'Panel solar monocristalino PERC 300W de alta eficiencia con soporte anti-viento',
      bateria: 'Batería LiFePO4 de 1.2 kWh con BMS inteligente y calefactor interno para frío extremo',
      controlador: 'MPPT Victron Energy con telemetría Bluetooth y puerto VE.Direct',
      salidas: '12V / 24V / 48V DC estabilizadas + PoE Pasivo/Activo para antenas satelitales',
      resistencia: 'Vientos de hasta 180 km/h y carga de nieve'
    },
    highlights: [
      'Garantiza 99.9% de uptime para nodos de enlace y repetidoras en alta montaña',
      'Telemetría en tiempo real del estado de carga, voltaje y temperatura de celda',
      'Plug & Play con terminales satelitales y routers AITUE'
    ],
    inStock: true,
    leadTime: 'Despacho en 48 hs'
  },
  {
    id: 'aitue-mimo-militar-antenna',
    name: 'AITUE Multi-Band MIMO 4x4 Antártica',
    tagline: 'Antena omnidireccional vehicular y fija de alta ganancia 5G/LTE + GNSS + Wi-Fi',
    category: 'energia',
    categoryName: 'Accesorios & RF',
    priceUSD: 460,
    badge: 'Ultra Robusta',
    featured: false,
    rating: 4.8,
    reviewsCount: 35,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=900&q=80',
    specs: {
      frecuencias: '617 - 960 MHz / 1427 - 2690 MHz / 3300 - 6000 MHz (5G Ready)',
      ganancia: 'Hasta 7 dBi con diagrama de radiación optimizado',
      elementos: '4x Celular MIMO + 2x Wi-Fi Dual Band + 1x GPS/GLONASS/Galileo',
      estanqueidad: 'IP69K (Resistente a hidrolavado a alta presión y vapor)',
      montaje: 'Fijación por espárrago roscado de alta resistencia o base magnética'
    },
    highlights: [
      'Garantiza recepción de señal en los límites de cobertura de las celdas celulares',
      'Probada en entornos de minería de altura y expediciones antárticas',
      'Cables de teflón de baja pérdida incluidos con conectores SMA grado militar'
    ],
    inStock: true,
    leadTime: 'En stock inmediato'
  }
];

export const CATEGORIES = [
  { id: 'todos', label: 'Todos los Equipos' },
  { id: 'satelital', label: 'Satélite LEO' },
  { id: 'lte', label: 'Routers LTE / 5G' },
  { id: 'telemetria', label: 'Telemetría & IoT' },
  { id: 'energia', label: 'Energía & RF' }
];
