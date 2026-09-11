import React from 'react';
import { MapPin, Truck, Phone, RefreshCw, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';
import { CurrencyCode } from '../types';
import { CurrencyRates } from '../hooks/useLiveCurrency';

interface TopBarProps {
  selectedCurrency: CurrencyCode;
  onCurrencyChange: (c: CurrencyCode) => void;
  rates?: CurrencyRates;
  isLoadingRates?: boolean;
  onRefreshRates?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  selectedCurrency,
  onCurrencyChange,
  rates,
  isLoadingRates = false,
  onRefreshRates,
}) => {
  return (
    <aside
      id="top-bar-announcement"
      aria-label="Üst Bilgi Çubuğu"
      className="w-full bg-[#08090d] border-b border-[#434655]/35 text-[#c3c6d7] text-xs py-2 transition-colors relative z-50"
    >
      <div className="w-full px-4 sm:px-6 mx-auto max-w-[90rem] flex flex-wrap items-center justify-between gap-y-2">
        {/* Sol Slogan & Konum & Sevkiyat */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* Resmi Slogan */}
          <span className="font-mono text-[10.5px] font-bold text-[#ffb77d] px-2 py-0.5 rounded bg-[#1f2330] border border-[#ffb77d]/35 tracking-wider">
            {COMPANY_INFO.slogan}
          </span>
          <span className="hidden sm:inline text-[#434655]">|</span>
          <div className="flex items-center gap-1.5 hover:text-[#e2e2e9] transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>{COMPANY_INFO.location}</span>
          </div>
          <span className="hidden md:inline text-[#434655]">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-[#00f0ff] font-semibold text-[12px]">
            <Truck className="w-3.5 h-3.5" />
            <span>Fabrika Stoktan Aynı Gün Sevk &amp; 3/5 Eksen CNC İmalat</span>
          </div>
        </div>

        {/* Sağ İletişim & Sosyal Medya & Para Birimi Seçici */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto flex-wrap">
          {/* İbrahim Şahbaz & Doğrudan Hat */}
          <a
            id="topbar-phone-link"
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-1.5 text-[#e2e2e9] hover:text-[#00f0ff] transition-colors font-mono text-[12px]"
            title="İbrahim Şahbaz - Doğrudan Hat"
          >
            <Phone className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>
              <strong className="text-[#00f0ff] font-sans font-semibold mr-1">
                {COMPANY_INFO.authorizedPerson}:
              </strong>
              {COMPANY_INFO.formattedPhone}
            </span>
          </a>

          {/* Instagram Hesabı */}
          <a
            id="topbar-instagram-link"
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-[#c3c6d7] hover:text-[#ffb77d] transition-colors font-mono text-[11px]"
          >
            <Instagram className="w-3.5 h-3.5 text-[#ffb77d]" />
            <span>@{COMPANY_INFO.instagram}</span>
          </a>

          {/* Canlı Döviz Kuru Ticker (Varsa) */}
          {rates && (
            <div className="hidden xl:flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#12141c] border border-[#434655]/40 text-[10.5px] font-mono text-[#8d90a0]">
              <span>USD: <strong className="text-[#e2e2e9]">₺{rates.TRY}</strong></span>
              <span>EUR: <strong className="text-[#e2e2e9]">₺{(rates.TRY / rates.EUR).toFixed(2)}</strong></span>
              {onRefreshRates && (
                <button
                  onClick={onRefreshRates}
                  title="Kurları Güncelle"
                  className="hover:text-[#00f0ff] transition-colors cursor-pointer ml-0.5"
                >
                  <RefreshCw className={`w-3 h-3 ${isLoadingRates ? 'animate-spin text-[#00f0ff]' : ''}`} />
                </button>
              )}
            </div>
          )}

          {/* Para Birimi Değiştirici */}
          <div className="flex items-center bg-[#181b24] rounded-lg p-0.5 border border-[#434655]/40 text-[11px] font-mono">
            {(['USD', 'TRY', 'EUR'] as const).map((curr) => (
              <button
                key={curr}
                id={`currency-toggle-${curr}`}
                onClick={() => onCurrencyChange(curr)}
                className={`px-2 py-0.5 rounded transition-all font-bold cursor-pointer ${
                  selectedCurrency === curr
                    ? 'bg-[#2563eb] text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]'
                    : 'text-[#8d90a0] hover:text-[#e2e2e9]'
                }`}
              >
                {curr}
              </button>
            ))}
            <span className="px-1 text-[10px] text-[#8d90a0] font-normal hidden sm:inline">
              (+KDV)
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
