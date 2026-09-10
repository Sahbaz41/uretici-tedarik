import React from 'react';
import { MapPin, Clock, Truck, Phone, Mail, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';

interface TopBarProps {
  selectedCurrency: 'USD' | 'TRY' | 'EUR';
  onCurrencyChange: (c: 'USD' | 'TRY' | 'EUR') => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  selectedCurrency,
  onCurrencyChange,
}) => {
  return (
    <aside
      id="top-bar-announcement"
      aria-label="Üst Bilgi Çubuğu"
      className="w-full bg-[#0c0e13] border-b border-[#434655]/30 text-[#c3c6d7] text-xs py-2 transition-colors"
    >
      <div className="w-full px-4 sm:px-6 mx-auto max-w-[90rem] flex flex-wrap items-center justify-between gap-y-2">
        {/* Sol Slogan & Konum & Sevkiyat */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* Resmi Slogan */}
          <span className="font-mono text-[11px] font-bold text-[#ffb77d] px-2 py-0.5 rounded bg-[#33353a]/60 border border-[#ffb77d]/30 tracking-wider">
            {COMPANY_INFO.slogan}
          </span>
          <span className="hidden sm:inline text-[#8d90a0]/60">|</span>
          <div className="flex items-center gap-1.5 hover:text-[#e2e2e9] transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#4cd7f6]" />
            <span>{COMPANY_INFO.location}</span>
          </div>
          <span className="hidden md:inline text-[#8d90a0]/60">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-[#b4c5ff] font-semibold text-[13px]">
            <Truck className="w-3.5 h-3.5" />
            <span>Depodan Aynı Gün Sevk & CNC İmalat</span>
          </div>
        </div>

        {/* Sağ İletişim & Sosyal Medya & Para Birimi Seçici */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto flex-wrap">
          {/* İbrahim Şahbaz & Doğrudan Hat */}
          <a
            id="topbar-phone-link"
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-1.5 text-[#e2e2e9] hover:text-[#b4c5ff] transition-colors font-mono text-[12px] sm:text-[13px]"
            title="İbrahim Şahbaz - Doğrudan Hat"
          >
            <Phone className="w-3.5 h-3.5 text-[#b4c5ff]" />
            <span>
              <strong className="text-[#b4c5ff] font-sans font-semibold mr-1">
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
            className="hidden sm:flex items-center gap-1 text-[#c3c6d7] hover:text-[#ffb77d] transition-colors font-mono text-[12px]"
          >
            <Instagram className="w-3.5 h-3.5 text-[#ffb77d]" />
            <span>@{COMPANY_INFO.instagram}</span>
          </a>

          <a
            id="topbar-mail-link"
            href={`mailto:${COMPANY_INFO.email}`}
            className="hidden xl:flex items-center gap-1.5 text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors font-mono text-[13px]"
          >
            <Mail className="w-3.5 h-3.5 text-[#8d90a0]" />
            <span>{COMPANY_INFO.email}</span>
          </a>

          {/* Para Birimi Değiştirici */}
          <div className="flex items-center bg-[#282a2f] rounded p-0.5 border border-[#434655]/40 text-[11px] font-mono">
            {(['USD', 'TRY', 'EUR'] as const).map((curr) => (
              <button
                key={curr}
                id={`currency-toggle-${curr}`}
                onClick={() => onCurrencyChange(curr)}
                className={`px-1.5 py-0.5 rounded transition-all font-semibold ${
                  selectedCurrency === curr
                    ? 'bg-[#2563eb] text-white shadow-xs'
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
