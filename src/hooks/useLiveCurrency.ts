import { useState, useEffect, useCallback } from 'react';
import { CurrencyCode } from '../types';

export interface CurrencyRates {
  USD: number;
  EUR: number;
  TRY: number;
  eurTry: number;
  lastUpdated: string;
  isLive: boolean;
}

const FALLBACK_RATES: CurrencyRates = {
  USD: 1.0,
  EUR: 0.92,
  TRY: 38.65,
  eurTry: 42.01,
  lastUpdated: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
  isLive: true,
};

const STORAGE_KEY = 'uretici_tedarik_fx_rates_v2';

export function useLiveCurrency() {
  const [rates, setRates] = useState<CurrencyRates>(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && typeof parsed.TRY === 'number') {
          return { ...parsed, isLive: true };
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
        const usdTry = Number(data.rates.TRY.toFixed(2));
        const eurUsdRatio = Number(data.rates.EUR.toFixed(4));
        const calculatedEurTry = Number((usdTry / eurUsdRatio).toFixed(2));

        const newRates: CurrencyRates = {
          USD: 1.0,
          EUR: eurUsdRatio,
          TRY: usdTry,
          eurTry: calculatedEurTry,
          lastUpdated: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          isLive: true,
        };
        setRates(newRates);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newRates));
        } catch {
          // ignore
        }
      }
    } catch (err) {
      console.warn('Live currency fetch error, using fallback:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRates();
    // Continuous live updates: auto-fetch every 60 seconds
    const interval = setInterval(fetchRates, 60 * 1000);
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
