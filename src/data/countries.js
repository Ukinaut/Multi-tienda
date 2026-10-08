export const COUNTRIES = {
  AR: {
    code: 'AR',
    name: 'Argentina',
    flag: '🇦🇷',
    currency: 'ARS',
    currencySymbol: '$',
    exchangeRate: 1350, // Factor de conversión estimado respecto a USD base
    formatDecimals: 0,
    freeShippingThreshold: 350000,
    shippingCompany: 'Andreani Logística Crítica & Expreso Especializado',
    shippingDays: '24 a 48 hs hábiles (Base Buenos Aires / Neuquén)',
    taxName: 'IVA (21%) incluido en factura',
    taxRate: 0.21,
    invoiceType: 'Factura Electrónica A o B (AFIP)',
    phoneCode: '+54',
    paymentMethods: [
      { id: 'mercadopago', name: 'Mercado Pago', desc: 'Tarjetas, Dinero en cuenta y hasta 6 cuotas', badge: 'Recomendado AR' },
      { id: 'transfer_cbu', name: 'Transferencia Bancaria Directa', desc: 'CBU / CVU con 8% bonificación B2B', discount: 8 },
      { id: 'cheque_echeq', name: 'E-Cheq a 30/60 días', desc: 'Sujeto a calificación crediticia corporativa' }
    ]
  },
  CL: {
    code: 'CL',
    name: 'Chile',
    flag: '🇨🇱',
    currency: 'CLP',
    currencySymbol: '$',
    exchangeRate: 940,
    formatDecimals: 0,
    freeShippingThreshold: 250000,
    shippingCompany: 'Starken & Chilexpress Red Minera Especial',
    shippingDays: '2 a 4 días hábiles (Santiago, Antofagasta, Calama)',
    taxName: 'IVA (19%) incluido',
    taxRate: 0.19,
    invoiceType: 'Factura Electrónica SII con RUT',
    phoneCode: '+56',
    paymentMethods: [
      { id: 'webpay', name: 'Webpay Plus / Transbank', desc: 'Tarjetas de débito y crédito nacionales', badge: 'Recomendado CL' },
      { id: 'mach_khipu', name: 'Khipu / MACH / CuentaRUT', desc: 'Transferencia inmediata simplificada' },
      { id: 'transfer_cl', name: 'Transferencia Bancaria Empresa', desc: 'Banco de Chile / BCI' }
    ]
  },
  MX: {
    code: 'MX',
    name: 'México',
    flag: '🇲🇽',
    currency: 'MXN',
    currencySymbol: '$',
    exchangeRate: 18.2,
    formatDecimals: 2,
    freeShippingThreshold: 6500,
    shippingCompany: 'DHL Express México & FedEx Red Industrial',
    shippingDays: '2 a 3 días hábiles (CDMX, Monterrey, Guadalajara)',
    taxName: 'IVA (16%) incluido',
    taxRate: 0.16,
    invoiceType: 'CFDI 4.0 con RFC',
    phoneCode: '+52',
    paymentMethods: [
      { id: 'mercadopago_mx', name: 'Mercado Pago México', desc: 'Tarjetas, meses sin intereses y saldo MP', badge: 'Recomendado MX' },
      { id: 'spei', name: 'Transferencia SPEI', desc: 'CLABE interbancaria inmediata con 5% desc.', discount: 5 },
      { id: 'oxxo', name: 'OXXO Pay', desc: 'Pago en efectivo en más de 20.000 tiendas' }
    ]
  },
  CO: {
    code: 'CO',
    name: 'Colombia',
    flag: '🇨🇴',
    currency: 'COP',
    currencySymbol: '$',
    exchangeRate: 4100,
    formatDecimals: 0,
    freeShippingThreshold: 1200000,
    shippingCompany: 'Servientrega & Coordinadora Mercantil',
    shippingDays: '2 a 4 días hábiles (Bogotá, Medellín, Barranquilla)',
    taxName: 'IVA (19%) incluido',
    taxRate: 0.19,
    invoiceType: 'Factura Electrónica DIAN con NIT',
    phoneCode: '+57',
    paymentMethods: [
      { id: 'pse', name: 'PSE (Pagos Seguros en Línea)', desc: 'Débito directo desde cualquier banco', badge: 'Recomendado CO' },
      { id: 'nequi_daviplata', name: 'Nequi / Daviplata', desc: 'Pago ágil desde billetera móvil' },
      { id: 'tarjeta_co', name: 'Tarjetas de Crédito / Débito', desc: 'Visa, MasterCard, Amex' }
    ]
  },
  ES: {
    code: 'ES',
    name: 'España / Europa',
    flag: '🇪🇸',
    currency: 'EUR',
    currencySymbol: '€',
    exchangeRate: 0.92,
    formatDecimals: 2,
    freeShippingThreshold: 200,
    shippingCompany: 'Correos Express & UPS European Critical Hub',
    shippingDays: '24 a 48 hs península / 72 hs islas',
    taxName: 'IVA (21%) incluido (Inversión Sujeto Pasivo disponible)',
    taxRate: 0.21,
    invoiceType: 'Factura Oficial con CIF/NIF Europeo',
    phoneCode: '+34',
    paymentMethods: [
      { id: 'bizum', name: 'Bizum Empresas', desc: 'Pago instantáneo desde móvil', badge: 'Recomendado ES' },
      { id: 'stripe_eu', name: 'Tarjeta / Apple Pay / Google Pay', desc: 'Stripe con autenticación PSD2 SCA' },
      { id: 'sepa', name: 'Transferencia Bancaria SEPA', desc: 'IBAN empresarial directo' }
    ]
  },
  US: {
    code: 'US',
    name: 'Estados Unidos / Global',
    flag: '🇺🇸',
    currency: 'USD',
    currencySymbol: '$',
    exchangeRate: 1,
    formatDecimals: 2,
    freeShippingThreshold: 250,
    shippingCompany: 'FedEx Priority & DHL Global Forwarding',
    shippingDays: '2 to 5 business days worldwide',
    taxName: 'State Tax calculated at checkout',
    taxRate: 0.07,
    invoiceType: 'Commercial Corporate Invoice / W-9',
    phoneCode: '+1',
    paymentMethods: [
      { id: 'stripe_us', name: 'Credit Card / Apple Pay / Google Pay', desc: 'Visa, Master, Amex Corporate', badge: 'Preferred' },
      { id: 'wire_ach', name: 'ACH / International Wire Transfer', desc: 'Direct corporate banking' },
      { id: 'paypal', name: 'PayPal Business', desc: 'International buyer protection' }
    ]
  }
};

export const DEFAULT_COUNTRY_CODE = 'AR';

export const formatPriceForCountry = (priceUSD, country) => {
  const localPrice = priceUSD * country.exchangeRate;
  
  // Custom number formatter
  const formatter = new Intl.NumberFormat(country.code === 'AR' ? 'es-AR' : country.code === 'ES' ? 'es-ES' : country.code === 'MX' ? 'es-MX' : 'en-US', {
    style: 'decimal',
    minimumFractionDigits: country.formatDecimals,
    maximumFractionDigits: country.formatDecimals,
  });

  if (country.code === 'ES') {
    return `${formatter.format(localPrice)} ${country.currencySymbol}`;
  }
  return `${country.currencySymbol} ${formatter.format(localPrice)} ${country.currency}`;
};
