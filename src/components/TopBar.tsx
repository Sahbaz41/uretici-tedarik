import React from 'react';
import { MapPin, Truck, Phone, RefreshCw, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';
import { CurrencyCode } from '../types';
import { CurrencyRates } from '../hooks/useLiveCurrency';
import { Language, TRANSLATIONS } from '../data/translations';

interface TopBarProps {
  selectedCurrency: CurrencyCode;
  onCurrencyChange: (c: CurrencyCode) => void;
  rates?: CurrencyRates;
  isLoadingRates?: boolean;
  onRefreshRates?: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  selectedCurrency,
  onCurrencyChange,
  rates,
  isLoadingRates = false,
  onRefreshRates,
  language = 'tr',
  onLanguageChange,
}) => {
  const t = TRANSLATIONS[language].topBar;

  return (
    <aside
      id="top-bar-announcement"
      aria-label="Üst Bilgi Çubuğu"
      className="w-full bg-[#05070d]/95 border-b border-[#2d3142]/60 text-[#c3c6d7] text-xs h-8 flex items-center select-none"
    >
      <div className="w-full px-4 sm:px-6 mx-auto max-w-[92rem] flex items-center justify-between gap-3 overflow-hidden">
        {/* Sol: Konum & Sevkiyat (Masaüstü) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-[11px] text-[#8d90a0] hover:text-[#e2e2e9] transition-colors whitespace-nowrap">
            <MapPin className="w-3 h-3 text-[#38bdf8]" />
            <span>{t.location}</span>
          </div>
          <span className="text-[#2d3142]">|</span>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px] whitespace-nowrap">
            <Truck className="w-3.5 h-3.5" />
            <span>{t.shipment}</span>
          </div>
        </div>

        {/* Sağ: Dil Değiştirici (TR/EN) & Canlı Döviz Kuru & Para Birimi & Doğrudan İletişim */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 ml-auto">
          {/* TR / EN Dil Seçici */}
          <div className="flex items-center bg-[#141824] rounded-md p-0.5 border border-[#2d3142] text-[10.5px] font-mono">
            <Globe className="w-3 h-3 text-[#38bdf8] ml-1 mr-0.5 shrink-0" />
            <button
              id="lang-toggle-tr"
              onClick={() => onLanguageChange('tr')}
              className={`px-1.5 py-0.5 rounded transition-all font-bold cursor-pointer ${
                language === 'tr'
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : 'text-[#8d90a0] hover:text-[#e2e2e9]'
              }`}
              title="Türkçe"
            >
              TR
            </button>
            <button
              id="lang-toggle-en"
              onClick={() => onLanguageChange('en')}
              className={`px-1.5 py-0.5 rounded transition-all font-bold cursor-pointer ${
                language === 'en'
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : 'text-[#8d90a0] hover:text-[#e2e2e9]'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Canlı Döviz Ticker */}
          {rates && (
            <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-[#10131c] border border-emerald-500/30 text-[10.5px] font-mono text-[#8d90a0] shadow-sm">
              <div className="flex items-center gap-1 text-emerald-400 font-bold text-[10px] tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t.live}</span>
              </div>
              <span className="text-[#2d3142]">|</span>
              <div className="flex items-center gap-1.5 text-[#c3c6d7]">
                <span>USD: <strong className="text-emerald-400">₺{rates.TRY.toFixed(2)}</strong></span>
                <span className="text-[#2d3142]">/</span>
                <span>EUR: <strong className="text-emerald-400">₺{(rates.eurTry || (rates.TRY / rates.EUR)).toFixed(2)}</strong></span>
              </div>
              {onRefreshRates && (
                <button
                  onClick={onRefreshRates}
                  title={`Kurları Yenile (Son: ${rates.lastUpdated})`}
                  className="hover:text-emerald-400 transition-colors cursor-pointer p-0.5 rounded hover:bg-emerald-500/10 text-[#8d90a0]"
                >
                  <RefreshCw className={`w-2.5 h-2.5 ${isLoadingRates ? 'animate-spin text-emerald-400' : ''}`} />
                </button>
              )}
            </div>
          )}

          {/* Para Birimi Değiştirici */}
          <div className="flex items-center bg-[#141824] rounded-md p-0.5 border border-[#2d3142] text-[10.5px] font-mono">
            {(['USD', 'TRY', 'EUR'] as const).map((curr) => (
              <button
                key={curr}
                id={`currency-toggle-${curr}`}
                onClick={() => onCurrencyChange(curr)}
                className={`px-1.5 py-0.5 rounded transition-all font-bold cursor-pointer ${
                  selectedCurrency === curr
                    ? 'bg-[#2563eb] text-white shadow-sm'
                    : 'text-[#8d90a0] hover:text-[#e2e2e9]'
                }`}
              >
                {curr}
              </button>
            ))}
            <span className="px-1 text-[9px] text-[#8d90a0] font-normal hidden sm:inline">
              {t.kdv}
            </span>
          </div>

          {/* İbrahim Şahbaz & Doğrudan Hat */}
          <a
            id="topbar-phone-link"
            href={`tel:${COMPANY_INFO.phone}`}
            className="hidden sm:flex items-center gap-1 text-[#e2e2e9] hover:text-[#38bdf8] transition-colors font-mono text-[11px] whitespace-nowrap"
            title={`${t.callDirect} - Doğrudan Hat`}
          >
            <Phone className="w-3 h-3 text-[#38bdf8]" />
            <span>
              <strong className="text-[#38bdf8] font-sans font-semibold mr-1">
                {t.callDirect}:
              </strong>
              {COMPANY_INFO.formattedPhone}
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
};
