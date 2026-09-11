import { useState, useEffect, useCallback } from 'react';
import { CurrencyCode } from '../types';

export interface CurrencyRates {
  USD: number;
  EUR: number;
  TRY: number;
  lastUpdated: string;
}

const FALLBACK_RATES: CurrencyRates = {
  USD: 1.0,
  EUR: 0.93,
  TRY: 38.45,
  lastUpdated: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
};

const STORAGE_KEY = 'uretici_tedarik_fx_rates';

export function useLiveCurrency() {
  const [rates, setRates] = useState<CurrencyRates>(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && typeof parsed.TRY === 'number') {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return FALLBACK_RATES;
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchRates = useCallback(async () => {
    setIsLoading(true);
    try {
      // Free resilient public FX endpoint with no API key
      const response = await fetch('https://open.er-api.com/v6/latest/USD', {
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Network response not ok');
      const data = await response.json();
      if (data && data.rates && data.rates.TRY && data.rates.EUR) {
        const newRates: CurrencyRates = {
          USD: 1.0,
          EUR: Number((data.rates.EUR).toFixed(4)),
          TRY: Number((data.rates.TRY).toFixed(2)),
          lastUpdated: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        };
        setRates(newRates);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newRates));
        } catch {
          // ignore
        }
      }
    } catch {
      // Fallback safely to current or fallback rates
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 10 * 60 * 1000); // 10 minutes
    return () => clearInterval(interval);
  }, [fetchRates]);

  const convertPrice = useCallback(
    (baseUsd: number, target: CurrencyCode): number => {
      if (target === 'USD') return baseUsd;
      if (target === 'EUR') return Number((baseUsd * rates.EUR).toFixed(2));
      if (target === 'TRY') return Math.round(baseUsd * rates.TRY);
      return baseUsd;
    },
    [rates]
  );

  return {
    rates,
    isLoading,
    refresh: fetchRates,
    convertPrice,
  };
}
