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

export const SectorsSection: React.FC = () => {
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
              Hizmet Verdiğimiz Ağır Sanayi Kolları
            </span>
            <span className="font-mono text-xs text-[#b4c5ff] font-semibold">
              Türkiye Geneli 1200+ Aktif Fabrika
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {/* 1: Otomotiv */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/25 text-[#e2e2e9] hover:border-[#b4c5ff]/40 transition-colors">
              <Car className="w-5 h-5 text-[#b4c5ff] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold">
                  Otomotiv Sanayi
                </span>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  Kalıp & Fikstür
                </span>
              </div>
            </div>

            {/* 2: Ağır Makine */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/25 text-[#e2e2e9] hover:border-[#4cd7f6]/40 transition-colors">
              <Cog className="w-5 h-5 text-[#4cd7f6] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold">
                  Ağır Makine
                </span>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  Dişli & Burç
                </span>
              </div>
            </div>

            {/* 3: Savunma Sanayi */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/25 text-[#e2e2e9] hover:border-[#ffb77d]/40 transition-colors">
              <Plane className="w-5 h-5 text-[#ffb77d] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold">
                  Savunma Sanayi
                </span>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  Hassas Tolerans
                </span>
              </div>
            </div>

            {/* 4: Kimya & İlaç */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/25 text-[#e2e2e9] hover:border-[#b4c5ff]/40 transition-colors">
              <FlaskConical className="w-5 h-5 text-[#b4c5ff] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold">
                  Kimya & İlaç
                </span>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  PTFE Korozyon
                </span>
              </div>
            </div>

            {/* 5: Konveyör Hatları */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/25 text-[#e2e2e9] hover:border-[#4cd7f6]/40 transition-colors">
              <RotateCw className="w-5 h-5 text-[#4cd7f6] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold">
                  Konveyör Hatları
                </span>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  PE 1000 Kılavuz
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
                Teknik Malzeme Uzmanımızla Canlı Görüşün
              </h4>
              <p className="text-xs text-[#c3c6d7] font-mono mt-0.5">
                Çayırova Merkez: +90 (533) 377 18 97 | info@ureticitedarik.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto justify-end flex-wrap">
            <a
              id="live-call-btn"
              href="tel:+905333771897"
              className="flex-1 lg:flex-initial inline-flex items-center justify-center h-11 px-5 rounded-lg bg-[#282a2f] hover:bg-[#37393f] text-[#e2e2e9] text-xs font-semibold transition-colors border border-[#434655]/40"
            >
              <Phone className="w-4 h-4 mr-2 text-[#4cd7f6]" />
              <span>Doğrudan Ara</span>
            </a>
            <a
              id="live-whatsapp-btn"
              href="https://api.whatsapp.com/send?phone=905333771897&text=Merhaba,%20teknik%20plastik%20ve%20metal%20fiyat%20listesi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 lg:flex-initial inline-flex items-center justify-center h-11 px-6 rounded-lg bg-[#2563eb] text-[#eeefff] text-xs font-bold shadow-md hover:bg-[#0053db] transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp Hızlı Hat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
