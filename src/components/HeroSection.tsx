import React from 'react';
import {
  ArrowRight,
  Download,
  FileCheck,
  ShoppingCart,
  Layers,
  Sparkles,
  ShieldCheck,
  Clock,
  Warehouse,
  Phone,
  Cpu,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';

interface HeroSectionProps {
  onOpenRfq: () => void;
  onOpenCatalog: () => void;
  onOpenTds: (productId: string) => void;
  onSelectProductForRfq: (productId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRfq,
  onOpenCatalog,
  onOpenTds,
  onSelectProductForRfq,
}) => {
  const specimenImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBaBRrBKGiL9jlLPJUM5khVsLUQ2JTUfx_tOZiT2pSTv6Pg-yFFskPxDwzYg2RVmpgTxCFsSGv0Mu5rH5WK6jMZrUqgQZa68e3tTXTsP4BW0kGME5-kyR-F7VOVyBr7KQE5VTaxHWvi1jRe5jwIO8svyV7sj-I4d6l-YVBtU2-AWYq37L7a7jB-PYlg4NpOceHkjjmZUTBAs256a1lBsGLvTGuwuC-X2cogcy4reWGmMeCvevL0KI2vGA';

  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden pt-8 pb-16 lg:py-20"
    >
      {/* Arka Plan Işık Efektleri */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-[#2563eb]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-80 -right-24 w-96 h-96 bg-[#00788c]/15 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative w-full px-4 sm:px-6 mx-auto max-w-[90rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Sol Kolon: Başlık, Açıklama, Aksiyonlar ve 4 İstatistik (7 Sütun) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Lokasyon Rozeti & Resmi Slogan */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#282a2f]/80 border border-[#434655]/40 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]"></span>
                </span>
                <span className="font-mono text-[11px] font-bold text-[#4cd7f6] uppercase tracking-widest">
                  {COMPANY_INFO.brandName} // ÇAYIROVA - GEBZE
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffb77d]/15 border border-[#ffb77d]/30 text-[#ffb77d] font-mono text-[11px] font-extrabold uppercase tracking-wider">
                <span>{COMPANY_INFO.slogan}</span>
              </div>
            </div>

            {/* Ana Başlık */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#e2e2e9] tracking-tight leading-[1.12]">
              Mühendislik Plastikleri,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] via-[#82a4ff] to-[#4cd7f6]">
                3 & 5 Eksen CNC İmalat
              </span>{' '}
              ve Endüstriyel Metal Tedariği
            </h1>

            {/* Açıklama */}
            <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl leading-relaxed">
              Cast Polyamid (Kestamit), PTFE Teflon, Polietilen 1000 (Ulpolen),
              POM Delrin imalatı; PEEK, FR4 Epoksi ve alaşımlı metallerde
              doğrudan üretici ve ithalatçı güvencesiyle yüksek hassasiyetli
              çözümler.
            </p>

            {/* Butonlar / CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-cta-rfq"
                onClick={onOpenRfq}
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-[#2563eb] text-[#eeefff] font-semibold text-sm shadow-[0_0_24px_rgba(37,99,235,0.45)] hover:bg-[#0053db] transition-all group cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                <span>Teklif Sepetine Git / RFQ</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-catalog"
                onClick={onOpenCatalog}
                className="inline-flex items-center justify-center h-12 px-5 rounded-lg bg-[#282a2f] hover:bg-[#37393f] text-[#e2e2e9] transition-colors font-semibold text-sm border border-[#434655]/40 shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 mr-2 text-[#4cd7f6]" />
                <span>42 Sayfa Teknik Katalog</span>
              </button>

              <a
                id="hero-cta-direct-phone"
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center h-12 px-4 rounded-lg bg-[#1a1b21] hover:bg-[#282a2f] text-[#b4c5ff] hover:text-white transition-colors font-mono text-xs font-bold border border-[#2563eb]/40 shadow-sm"
                title={`${COMPANY_INFO.authorizedPerson} - Doğrudan Hat`}
              >
                <Phone className="w-4 h-4 mr-2 text-[#4cd7f6]" />
                <span>{COMPANY_INFO.authorizedPerson}: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* 4 Canlı İstatistik Kartı */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded-lg bg-[#1a1b21]/90 border border-[#434655]/30 backdrop-blur-md">
                <span className="font-mono text-[10.5px] font-bold text-[#8d90a0] uppercase tracking-wider block">
                  CNC Parkuru
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-[#b4c5ff] block mt-0.5">
                  3 & 5 Eksen
                </span>
                <span className="text-[11px] text-[#c3c6d7]">Kayar Otomat</span>
              </div>

              <div className="p-3 rounded-lg bg-[#1a1b21]/90 border border-[#434655]/30 backdrop-blur-md">
                <span className="font-mono text-[10.5px] font-bold text-[#8d90a0] uppercase tracking-wider block">
                  Savunma Sanayi
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-[#4cd7f6] block mt-0.5">
                  Makine & Teçhizat
                </span>
                <span className="text-[11px] text-[#c3c6d7]">
                  İş Ortaklığı
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#1a1b21]/90 border border-[#434655]/30 backdrop-blur-md">
                <span className="font-mono text-[10.5px] font-bold text-[#8d90a0] uppercase tracking-wider block">
                  Sevkiyat Hızı
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-[#ffb77d] block mt-0.5">
                  Aynı Gün
                </span>
                <span className="text-[11px] text-[#c3c6d7]">
                  Çayırova Depodan
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#1a1b21]/90 border border-[#434655]/30 backdrop-blur-md">
                <span className="font-mono text-[10.5px] font-bold text-[#8d90a0] uppercase tracking-wider block">
                  Isı Aralığı
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-[#e2e2e9] block mt-0.5">
                  -260°C ~ +1600°C
                </span>
                <span className="text-[11px] text-[#c3c6d7]">PTFE / Seramik</span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Öne Çıkan Numune Kartı (5 Sütun) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl bg-[#1a1b21]/95 border border-[#434655]/50 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl overflow-hidden group">
              {/* Üst Renkli Çizgi */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] via-[#4cd7f6] to-[#d97707]" />

              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#33353a] font-mono text-[11px] text-[#4cd7f6] font-semibold">
                    KOD: ULP-1000-PE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]" />
                  <span className="font-mono text-[11px] text-[#c3c6d7]">
                    CAS: 9002-88-4
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2563eb]/20 text-[#b4c5ff] font-mono text-[11px] uppercase font-bold">
                  Öne Çıkan Polimer
                </span>
              </div>

              {/* Görsel Alanı */}
              <div className="relative w-full h-52 sm:h-56 rounded-xl bg-[#0c0e13] overflow-hidden flex items-center justify-center mb-4 border border-[#434655]/30">
                <img
                  src={specimenImageUrl}
                  alt="PE 1000 UHMWPE Engineered Polymer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e13] via-[#0c0e13]/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#e2e2e9] leading-tight">
                      PE 1000 (Ulpolen UHMWPE)
                    </h3>
                    <p className="text-xs text-[#c3c6d7] mt-0.5">
                      Aşınmaya ve Kimyasallara Karşı Üstün Direnç
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#1e1f25]/90 text-[#e2e2e9] font-mono text-xs backdrop-blur-md border border-[#434655]/40 shrink-0 ml-2">
                    1000x2000 mm
                  </span>
                </div>
              </div>

              {/* Parametrik Teknik Tablo */}
              <div className="flex flex-col gap-1 bg-[#0c0e13]/80 p-3.5 rounded-xl font-mono text-xs border border-[#434655]/25">
                <div className="flex items-center justify-between py-1 text-[#c3c6d7] border-b border-[#434655]/20">
                  <span>Moleküler Ağırlık:</span>
                  <span className="text-[#e2e2e9] font-bold">
                    ~ 4.500.000 g/mol
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 text-[#c3c6d7] border-b border-[#434655]/20">
                  <span>Sürtünme Katsayısı:</span>
                  <span className="text-[#4cd7f6] font-bold">
                    &lt; 0.15 (Yağsız)
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 text-[#c3c6d7] border-b border-[#434655]/20">
                  <span>Yoğunluk (DIN EN ISO 1183):</span>
                  <span className="text-[#e2e2e9] font-bold">0.930 g/cm³</span>
                </div>
                <div className="flex items-center justify-between py-1 text-[#c3c6d7] border-b border-[#434655]/20">
                  <span>Çalışma Sıcaklığı:</span>
                  <span className="text-[#ffb77d] font-bold">
                    -200°C ile +80°C
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 text-[#c3c6d7]">
                  <span>Su Emilim Katsayısı:</span>
                  <span className="text-[#e2e2e9] font-bold">
                    %0.01 (Hidrofobik)
                  </span>
                </div>
              </div>

              {/* Stok Durumu */}
              <div className="flex items-center justify-between mt-3.5 p-3 rounded-lg bg-[#282a2f]/60 border border-[#434655]/30">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4cd7f6]"></span>
                  </span>
                  <span className="text-xs text-[#e2e2e9]">
                    Gebze/Çayırova Depoda{' '}
                    <span className="text-[#4cd7f6] font-bold">
                      28.4 Ton Mevcut
                    </span>
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#8d90a0]">
                  Plaka & Takoz Hazır
                </span>
              </div>

              {/* Hızlı Butonlar */}
              <div className="grid grid-cols-2 gap-3 mt-3.5">
                <button
                  id="specimen-tds-btn"
                  onClick={() => onOpenTds('pe-1000-levha')}
                  className="flex items-center justify-center h-10 rounded-lg bg-[#33353a] hover:bg-[#37393f] text-[#e2e2e9] text-xs font-medium transition-colors border border-[#434655]/40 cursor-pointer"
                >
                  <FileCheck className="w-4 h-4 mr-1.5 text-[#4cd7f6]" />
                  <span>Şartname / STEP</span>
                </button>
                <button
                  id="specimen-quote-btn"
                  onClick={() => onSelectProductForRfq('pe-1000-levha')}
                  className="flex items-center justify-center h-10 rounded-lg bg-[#2563eb] text-[#eeefff] text-xs font-semibold hover:bg-[#0053db] transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4 mr-1.5 text-[#acedff]" />
                  <span>Fiyat İste</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
