import React from 'react';
import {
  Scissors,
  ShieldCheck,
  Cpu,
  Truck,
  Factory,
  Phone,
  Instagram,
  Globe,
  User,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const CorporateSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].corporate;

  return (
    <div id="kurumsal-bolum" className="flex flex-col gap-6">
      {/* Üst Rozet & Resmi Slogan */}
      <div className="flex items-center gap-2.5 flex-wrap">
        <span className="px-3 py-1 rounded-lg bg-[#00f0ff]/15 text-[#00f0ff] font-mono text-[11px] uppercase tracking-wider font-bold border border-[#00f0ff]/30">
          {t.badgeName}
        </span>
        <span className="px-3 py-1 rounded-lg bg-[#ffb77d]/15 text-[#ffb77d] font-mono text-[11px] uppercase tracking-widest font-extrabold border border-[#ffb77d]/35">
          {t.badgeSlogan}
        </span>
      </div>

      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e2e2e9] tracking-tight leading-tight">
        {t.title}
      </h2>

      {/* Katalogdan Kurumsal Açıklama & İmalat / İthalat Ayrımı */}
      <div className="flex flex-col gap-3.5 text-[#c3c6d7] text-sm sm:text-base leading-relaxed bg-[#0e1017] border border-[#434655]/40 p-6 rounded-3xl shadow-xl">
        <p>
          {t.description}
        </p>

        {/* İmalat vs İthalat İkili Tablo (Özel Neon Kartlar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
          {/* 1. Üretimini Yapmış Olduğumuz - Cobalt / Cyan */}
          <div className="group relative p-4.5 rounded-2xl bg-[#12141c] border border-[#2563eb]/40 hover:border-[#00f0ff] hover:shadow-[0_4px_25px_rgba(0,240,255,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#00f0ff]" />
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.25)]">
                <Factory className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-wider">
                {t.producedTitle}
              </span>
            </div>
            <p className="text-xs text-[#e2e2e9] leading-relaxed">
              {t.producedItems}
            </p>
          </div>

          {/* 2. İthalatını Yapmış Olduğumuz - Violet / Magenta */}
          <div className="group relative p-4.5 rounded-2xl bg-[#12141c] border border-[#a855f7]/40 hover:border-[#c084fc] hover:shadow-[0_4px_25px_rgba(168,85,247,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7e22ce] to-[#c084fc]" />
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#a855f7]/20 border border-[#a855f7]/40 flex items-center justify-center text-[#c084fc] shadow-[0_0_10px_rgba(168,85,247,0.25)]">
                <Globe className="w-4 h-4" />
              </div>
              <span className="font-mono text-xs font-bold text-[#c084fc] uppercase tracking-wider">
                {t.importedTitle}
              </span>
            </div>
            <p className="text-xs text-[#e2e2e9] leading-relaxed">
              {t.importedItems}
            </p>
          </div>
        </div>

        {/* Yüksek Teknoloji CNC & Makina Parkuru Vurgusu */}
        <p className="text-xs sm:text-sm text-[#c3c6d7] pt-1 border-t border-[#434655]/25">
          {t.cncHighTech}
        </p>

        {/* Yetkili & İletişim Şeridi */}
        <div className="mt-2 pt-3 border-t border-[#434655]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center text-white shadow-sm font-bold">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[#8d90a0] block text-[10px] uppercase font-mono">
                {t.authorizedPersonTitle}
              </span>
              <span className="font-bold text-[#e2e2e9] text-xs sm:text-sm">
                {COMPANY_INFO.authorizedPerson}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              id="corp-direct-call"
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141722] hover:bg-[#181b24] text-[#00f0ff] font-mono text-xs font-semibold transition-colors border border-[#434655]/40"
            >
              <Phone className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>{COMPANY_INFO.formattedPhone}</span>
            </a>

            <a
              id="corp-instagram-link"
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141722] hover:bg-[#181b24] text-[#ffb77d] font-mono text-xs font-semibold transition-colors border border-[#434655]/40"
            >
              <Instagram className="w-3.5 h-3.5 text-[#ffb77d]" />
              <span>@{COMPANY_INFO.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Avantaj Kartı (Her Biri Ayrı Neon Rengi) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* 1: CNC - Electric Cyan */}
        <div className="group relative flex items-start gap-3.5 p-4 rounded-2xl bg-[#12141c] border border-[#434655]/30 hover:border-[#00f0ff] hover:shadow-[0_4px_24px_rgba(0,240,255,0.22)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00788c] to-[#00f0ff]" />
          <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/15 border border-[#00f0ff]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(0,240,255,0.2)]">
            <Scissors className="w-5 h-5 text-[#00f0ff]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold group-hover:text-[#00f0ff] transition-colors">
              {t.advantage1Title}
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              {t.advantage1Desc}
            </span>
          </div>
        </div>

        {/* 2: Savunma Sanayi - Golden Amber */}
        <div className="group relative flex items-start gap-3.5 p-4 rounded-2xl bg-[#12141c] border border-[#434655]/30 hover:border-[#f59e0b] hover:shadow-[0_4px_24px_rgba(245,158,11,0.22)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#b45309] to-[#f59e0b]" />
          <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 border border-[#f59e0b]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(245,158,11,0.2)]">
            <ShieldCheck className="w-5 h-5 text-[#fbbf24]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold group-hover:text-[#fbbf24] transition-colors">
              {t.advantage2Title}
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              {t.advantage2Desc}
            </span>
          </div>
        </div>

        {/* 3: İthalat & Yerli - Electric Violet */}
        <div className="group relative flex items-start gap-3.5 p-4 rounded-2xl bg-[#12141c] border border-[#434655]/30 hover:border-[#a855f7] hover:shadow-[0_4px_24px_rgba(168,85,247,0.22)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7e22ce] to-[#a855f7]" />
          <div className="w-10 h-10 rounded-xl bg-[#a855f7]/15 border border-[#a855f7]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(168,85,247,0.2)]">
            <Cpu className="w-5 h-5 text-[#c084fc]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold group-hover:text-[#c084fc] transition-colors">
              {t.advantage3Title}
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              {t.advantage3Desc}
            </span>
          </div>
        </div>

        {/* 4: Hızlı Sevk - Cyber Emerald */}
        <div className="group relative flex items-start gap-3.5 p-4 rounded-2xl bg-[#12141c] border border-[#434655]/30 hover:border-[#10b981] hover:shadow-[0_4px_24px_rgba(16,185,129,0.22)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#047857] to-[#10b981]" />
          <div className="w-10 h-10 rounded-xl bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <Truck className="w-5 h-5 text-[#34d399]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold group-hover:text-[#34d399] transition-colors">
              {t.advantage4Title}
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              {t.advantage4Desc}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
