import React from 'react';
import {
  Car,
  Cog,
  Plane,
  FlaskConical,
  RotateCw,
  Headphones,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const SectorsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].sectors;

  const whatsappText =
    language === 'en'
      ? 'Hello, I would like to request technical specifications and a price quotation for engineering plastics and metals.'
      : 'Merhaba, teknik plastik ve metal fiyat listesi almak istiyorum.';

  return (
    <section
      id="sektorler-bolumu"
      className="w-full py-16 bg-[#0c0e13] border-t border-[#434655]/30"
    >
      <div className="w-full px-4 sm:px-6 mx-auto max-w-[90rem] flex flex-col gap-10">
        {/* Hizmet Verilen Sektörler Başlığı & Rozeti */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-mono text-xs font-bold text-[#8d90a0] uppercase tracking-widest">
              {t.badge}
            </span>
            <span className="font-mono text-xs text-[#b4c5ff] font-semibold">
              {t.factoriesCount}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {/* 1: Otomotiv - Cobalt Blue */}
            <div className="group relative flex items-center gap-3 p-3.5 rounded-2xl bg-[#12141c] border border-[#434655]/30 text-[#e2e2e9] hover:border-[#3b82f6] hover:shadow-[0_4px_24px_rgba(59,130,246,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#60a5fa]" />
              <div className="w-10 h-10 rounded-xl bg-[#2563eb]/15 border border-[#3b82f6]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(59,130,246,0.2)]">
                <Car className="w-5 h-5 text-[#60a5fa]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#e2e2e9] group-hover:text-[#60a5fa] transition-colors">
                  {t.automotive}
                </span>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  {t.automotiveSub}
                </span>
              </div>
            </div>

            {/* 2: Ağır Makine - Electric Cyan */}
            <div className="group relative flex items-center gap-3 p-3.5 rounded-2xl bg-[#12141c] border border-[#434655]/30 text-[#e2e2e9] hover:border-[#00f0ff] hover:shadow-[0_4px_24px_rgba(0,240,255,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00788c] to-[#00f0ff]" />
              <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/15 border border-[#00f0ff]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(0,240,255,0.2)]">
                <Cog className="w-5 h-5 text-[#00f0ff]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#e2e2e9] group-hover:text-[#00f0ff] transition-colors">
                  {t.heavyMachinery}
                </span>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  {t.heavyMachinerySub}
                </span>
              </div>
            </div>

            {/* 3: Savunma Sanayi - Golden Amber */}
            <div className="group relative flex items-center gap-3 p-3.5 rounded-2xl bg-[#12141c] border border-[#434655]/30 text-[#e2e2e9] hover:border-[#f59e0b] hover:shadow-[0_4px_24px_rgba(245,158,11,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#b45309] to-[#f59e0b]" />
              <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 border border-[#f59e0b]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                <Plane className="w-5 h-5 text-[#fbbf24]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#e2e2e9] group-hover:text-[#fbbf24] transition-colors">
                  {t.defenseAero}
                </span>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  {t.defenseAeroSub}
                </span>
              </div>
            </div>

            {/* 4: Kimya & İlaç - Electric Violet */}
            <div className="group relative flex items-center gap-3 p-3.5 rounded-2xl bg-[#12141c] border border-[#434655]/30 text-[#e2e2e9] hover:border-[#a855f7] hover:shadow-[0_4px_24px_rgba(168,85,247,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7e22ce] to-[#a855f7]" />
              <div className="w-10 h-10 rounded-xl bg-[#a855f7]/15 border border-[#a855f7]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                <FlaskConical className="w-5 h-5 text-[#c084fc]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#e2e2e9] group-hover:text-[#c084fc] transition-colors">
                  {t.chemicalFood}
                </span>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  {t.chemicalFoodSub}
                </span>
              </div>
            </div>

            {/* 5: Konveyör Hatları - Cyber Emerald */}
            <div className="group relative flex items-center gap-3 p-3.5 rounded-2xl bg-[#12141c] border border-[#434655]/30 text-[#e2e2e9] hover:border-[#10b981] hover:shadow-[0_4px_24px_rgba(16,185,129,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#047857] to-[#10b981]" />
              <div className="w-10 h-10 rounded-xl bg-[#10b981]/15 border border-[#10b981]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                <RotateCw className="w-5 h-5 text-[#34d399]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-[#e2e2e9] group-hover:text-[#34d399] transition-colors">
                  {t.conveyorLogistics}
                </span>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  {t.conveyorLogisticsSub}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Canlı Destek & İletişim Şeridi */}
        <div className="rounded-2xl bg-gradient-to-r from-[#1a1b21] via-[#1e1f25] to-[#1a1b21] border border-[#434655]/40 p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="w-12 h-12 rounded-xl bg-[#2563eb] flex items-center justify-center text-[#eeefff] shadow-[0_0_16px_rgba(37,99,235,0.4)] shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-base sm:text-lg text-[#e2e2e9] font-bold">
                {t.ctaTitle}
              </h4>
              <p className="text-xs text-[#c3c6d7] font-mono mt-0.5">
                {t.ctaSubtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto justify-end flex-wrap">
            <a
              id="live-call-btn"
              href="tel:+905333771897"
              className="flex-1 lg:flex-initial inline-flex items-center justify-center h-11 px-5 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#e2e2e9] text-xs font-semibold transition-colors border border-[#434655]/40"
            >
              <Phone className="w-4 h-4 mr-2 text-[#4cd7f6]" />
              <span>{t.ctaBtnDirect}</span>
            </a>
            <a
              id="live-whatsapp-btn"
              href={`https://api.whatsapp.com/send?phone=905333771897&text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-initial inline-flex items-center justify-center h-11 px-6 rounded-lg bg-[#2563eb] text-[#eeefff] text-xs font-bold shadow-md hover:bg-[#0053db] transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>{t.ctaBtnWhatsapp}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
