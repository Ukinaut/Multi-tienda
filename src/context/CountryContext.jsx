import React, { createContext, useContext, useState, useEffect } from 'react';
import { COUNTRIES, DEFAULT_COUNTRY_CODE, formatPriceForCountry } from '../data/countries';

const CountryContext = createContext(null);

export const CountryProvider = ({ children }) => {
  const [countryCode, setCountryCodeState] = useState(() => {
    const saved = localStorage.getItem('aitue_country');
    if (saved && COUNTRIES[saved]) {
      return saved;
    }
    return DEFAULT_COUNTRY_CODE;
  });

  const [isAutoDetected, setIsAutoDetected] = useState(false);
  const [showGeoBanner, setShowGeoBanner] = useState(false);
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);

  // Auto-detect country if not manually selected
  useEffect(() => {
    const saved = localStorage.getItem('aitue_country');
    if (saved && COUNTRIES[saved]) {
      return; // Already set by user
    }

    const detectCountry = async () => {
      let detected = DEFAULT_COUNTRY_CODE;

      // Fast Timezone check
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        if (tz.includes('Argentina') || tz.includes('Buenos_Aires') || tz.includes('Cordoba')) detected = 'AR';
        else if (tz.includes('Santiago') || tz.includes('Chile')) detected = 'CL';
        else if (tz.includes('Mexico') || tz.includes('Monterrey') || tz.includes('Cancun') || tz.includes('Tijuana')) detected = 'MX';
        else if (tz.includes('Bogota') || tz.includes('Colombia')) detected = 'CO';
        else if (tz.includes('Madrid') || tz.includes('Europe')) detected = 'ES';
        else if (tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Los_Angeles') || tz.includes('America/')) detected = 'US';
      } catch (e) {
        console.warn('Timezone detection error', e);
      }

      // Quick GeoIP fallback attempt with short timeout (1.5s)
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1500);
        const res = await fetch('https://get.geojs.io/v1/ip/country.json', { signal: controller.signal });
        clearTimeout(timeoutId);
        if (res.ok) {
          const data = await res.json();
          const ipCountry = data.country;
          if (ipCountry && COUNTRIES[ipCountry]) {
            detected = ipCountry;
          }
        }
      } catch {
        // Fallback to timezone detection
      }

      setCountryCodeState(detected);
      setIsAutoDetected(true);
      setShowGeoBanner(true);
      localStorage.setItem('aitue_country', detected);
    };

    detectCountry();
  }, []);

  const setCountryCode = (newCode) => {
    if (COUNTRIES[newCode]) {
      setCountryCodeState(newCode);
      localStorage.setItem('aitue_country', newCode);
      setShowGeoBanner(false);
    }
  };

  const currentCountry = COUNTRIES[countryCode] || COUNTRIES[DEFAULT_COUNTRY_CODE];

  const formatPrice = (priceUSD) => {
    return formatPriceForCountry(priceUSD, currentCountry);
  };

  const dismissGeoBanner = () => {
    setShowGeoBanner(false);
  };

  return (
    <CountryContext.Provider
      value={{
        country: currentCountry,
        countryCode,
        setCountryCode,
        formatPrice,
        isAutoDetected,
        showGeoBanner,
        dismissGeoBanner,
        isCountryModalOpen,
        setIsCountryModalOpen
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};
