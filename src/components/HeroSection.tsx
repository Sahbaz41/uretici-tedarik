import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  FileCheck,
  ShoppingCart,
  Phone,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Gauge,
  Flame,
  CheckCircle2,
  Boxes,
  Zap,
  RotateCcw,
  Sliders,
  Crosshair,
  Factory,
  Truck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data/materials';

interface HeroSectionProps {
  onOpenRfq: () => void;
  onOpenCatalog: () => void;
  onOpenTds: (productId: string) => void;
  onSelectProductForRfq: (productId: string) => void;
}

interface SpecimenData {
  id: string;
  tabLabel: string;
  categoryTag: string;
  name: string;
  subtitle: string;
  code: string;
  dinNorm: string;
  imageUrl: string;
  dimensions: string;
  density: string;
  workingTemp: string;
  frictionOrStrength: string;
  hardness: string;
  stockStatus: string;
  colorHex: string;
  wearScore: number; // 0-100
  chemScore: number; // 0-100
  tempScore: number; // 0-100
  shapes: string[];
}

const SPECIMENS: SpecimenData[] = [
  {
    id: 'pe-1000-levha',
    tabLabel: 'PE 1000 Ulpolen',
    categoryTag: 'UHMWPE Polimer',
    name: 'PE 1000 (Ulpolen UHMWPE) Levha & Takoz',
    subtitle: 'Sıfır Yapışkanlık, Aşınmaya ve Kimyasallara Karşı Üstün Kayganlık',
    code: 'ULP-1000-PE',
    dinNorm: 'DIN EN ISO 1183',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaBRrBKGiL9jlLPJUM5khVsLUQ2JTUfx_tOZiT2pSTv6Pg-yFFskPxDwzYg2RVmpgTxCFsSGv0Mu5rH5WK6jMZrUqgQZa68e3tTXTsP4BW0kGME5-kyR-F7VOVyBr7KQE5VTaxHWvi1jRe5jwIO8svyV7sj-I4d6l-YVBtU2-AWYq37L7a7jB-PYlg4NpOceHkjjmZUTBAs256a1lBsGLvTGuwuC-X2cogcy4reWGmMeCvevL0KI2vGA',
    dimensions: '1000x2000 mm / Özel Kesim',
    density: '0.930 g/cm³',
    workingTemp: '-200°C ile +80°C',
    frictionOrStrength: '< 0.15 (Sürtünme Katsayısı)',
    hardness: '64 Shore D',
    stockStatus: '28.4 Ton Stok (Plaka & Takoz Hazır)',
    colorHex: '#00f0ff',
    wearScore: 98,
    chemScore: 95,
    tempScore: 68,
    shapes: ['Levha 1-120mm', 'Çubuk Ø20-300mm', 'Konveyör Profili'],
  },
  {
    id: 'kestamit-levha',
    tabLabel: 'Kestamit PA6G',
    categoryTag: 'Cast Polyamid',
    name: 'Cast Polyamid (Kestamit PA6G)',
    subtitle: 'Ağır Sanayi Yük Makaraları, Dişli, Burç & Yatak Talaşlı İmalatı',
    code: 'PA6-G-CAST',
    dinNorm: 'DIN 53479 / ISO 1183',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    dimensions: '1000x2000 mm / Ø 20-500mm',
    density: '1.15 g/cm³',
    workingTemp: '-40°C ile +120°C',
    frictionOrStrength: '85 MPa Çekme Dayanımı',
    hardness: '82 Shore D (Yüksek Basma)',
    stockStatus: '34.2 Ton Fabrika Stok (Aynı Gün Sevk)',
    colorHex: '#3b82f6',
    wearScore: 92,
    chemScore: 80,
    tempScore: 78,
    shapes: ['Döküm Takoz', 'Boru / Kovan', 'Dolu Çubuk Ø500'],
  },
  {
    id: 'ptfe-teflon-levha',
    tabLabel: 'PTFE Teflon',
    categoryTag: 'Saf A-Class PTFE',
    name: 'Saf PTFE Teflon® Levha & Çubuk',
    subtitle: 'Sıfır Yapışma, -200°C ~ +260°C Termal ve Tam Asit/Kimyasal Direnci',
    code: 'PTFE-VIRGIN-A',
    dinNorm: 'ASTM D 4894',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    dimensions: '1200x1200mm / Milimetrik Rulo',
    density: '2.18 g/cm³',
    workingTemp: '-200°C ile +260°C',
    frictionOrStrength: '< 0.08 (Katı En Düşük Sürtünme)',
    hardness: '55-60 Shore D',
    stockStatus: '14.8 Ton Hazır (Rulo & Plaka)',
    colorHex: '#00f0ff',
    wearScore: 84,
    chemScore: 100,
    tempScore: 96,
    shapes: ['Saf Plaka', 'Cam Elyaf Katkılı', 'Karbonlu PTFE'],
  },
  {
    id: 'pom-c-delrin',
    tabLabel: 'Delrin POM-C',
    categoryTag: 'Polyacetal POM',
    name: 'POM-C (Polyacetal Delrin)',
    subtitle: 'Sıfır Su Emilimi, Mikron Toleranslı CNC Talaşlı İmalat Dişlileri',
    code: 'POM-C-NATURAL',
    dinNorm: 'ISO 9988 / DIN 16781',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    dimensions: '1000x2000mm / Ø 10-250mm',
    density: '1.41 g/cm³',
    workingTemp: '-50°C ile +105°C',
    frictionOrStrength: '68 MPa Mukavemet',
    hardness: 'M85 Rockwell',
    stockStatus: '21.5 Ton Stok (Beyaz & Siyah)',
    colorHex: '#10b981',
    wearScore: 88,
    chemScore: 85,
    tempScore: 72,
    shapes: ['CNC Levha', 'Taşlanmış Mil', 'Hassas Dişli Taslağı'],
  },
  {
    id: 'peek-termoplastik',
    tabLabel: 'PEEK 450G',
    categoryTag: 'Ekstrem Termoplastik',
    name: 'PEEK 450G Yüksek Isı Polimeri',
    subtitle: 'Havacılık ve Savunma Sanayi 250°C Sürekli Çalışma & Yüksek Rijitlik',
    code: 'PEEK-450G-NAT',
    dinNorm: 'ISO 11357 / UL 94 V-0',
    imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    dimensions: '500x1000mm / Ø 15-100mm',
    density: '1.32 g/cm³',
    workingTemp: '-60°C ile +250°C (Sürekli)',
    frictionOrStrength: '100 MPa / Kendinden Sönümlü',
    hardness: 'M99 Rockwell',
    stockStatus: 'İthal Sertifikalı Stok',
    colorHex: '#a855f7',
    wearScore: 96,
    chemScore: 98,
    tempScore: 99,
    shapes: ['Doğal Natürel', 'Karbon Takviyeli', 'Seramik Katkılı'],
  },
  {
    id: 'vinc-ayak-denge-takozu',
    tabLabel: 'Vinç Denge Takozu',
    categoryTag: 'Ağır Donanım',
    name: 'Yüksek Mukavemetli Vinç Ayak Takozu',
    subtitle: '75 Tona Kadar Basma Yükü Dayanımı, Kırılmaz & Çürümez Güvence',
    code: 'PAD-CRANE-HD',
    dinNorm: 'EN 13000 Güvenlik Normu',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    dimensions: '400x400 ~ 1000x1000 mm',
    density: '0.960 g/cm³',
    workingTemp: '-50°C ile +85°C',
    frictionOrStrength: '75 Ton Tek Pabuç Basma',
    hardness: '70 Shore D (Kırılmaz)',
    stockStatus: 'Çayırova Depodan Aynı Gün Sevk',
    colorHex: '#f97316',
    wearScore: 99,
    chemScore: 90,
    tempScore: 70,
    shapes: ['Kare Pabuç', 'Yuvarlak Takoz', 'Özel Halat Kanallı'],
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRfq,
  onOpenCatalog,
  onOpenTds,
  onSelectProductForRfq,
}) => {
  const [activeSpecimenId, setActiveSpecimenId] = useState<string>('pe-1000-levha');
  const activeSpecimen = SPECIMENS.find((s) => s.id === activeSpecimenId) || SPECIMENS[0];

  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-20 industrial-grid-bg"
    >
      {/* Arka Plan Siber Lazer Parıltıları */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-[#2563eb]/25 via-[#00f0ff]/12 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-80 -right-24 w-96 h-96 bg-[#00788c]/15 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative w-full px-4 sm:px-6 mx-auto max-w-[90rem]">
        {/* Canlı Sanayi Marquee / Güven Şeridi */}
        <div className="mb-6 py-2 px-4 rounded-2xl bg-[#12141c]/90 border border-[#434655]/40 flex items-center justify-between overflow-x-auto no-scrollbar gap-6 text-xs font-mono backdrop-blur-md">
          <div className="flex items-center gap-2 text-[#00f0ff] shrink-0">
            <Zap className="w-3.5 h-3.5 animate-pulse text-[#00f0ff]" />
            <span className="font-bold">3 &amp; 5 EKSEN CNC İŞLEME</span>
            <span className="text-[#8d90a0]">| ±0.02 mm Tolerans</span>
          </div>
          <div className="flex items-center gap-2 text-[#3b82f6] shrink-0">
            <Truck className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span className="font-bold">AYNI GÜN SEVK</span>
            <span className="text-[#8d90a0]">| Çayırova / Gebze Antrepo</span>
          </div>
          <div className="flex items-center gap-2 text-[#ffb77d] shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ffb77d]" />
            <span className="font-bold">SAVUNMA SANAYİ STANDARDI</span>
            <span className="text-[#8d90a0]">| AS9100 / ISO 9001</span>
          </div>
          <div className="flex items-center gap-2 text-[#10b981] shrink-0">
            <Factory className="w-3.5 h-3.5 text-[#10b981]" />
            <span className="font-bold">MİLİMETRİK KESİM</span>
            <span className="text-[#8d90a0]">| Fire Sıfırlama Garantisi</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Sol Kolon: Başlık, Açıklama, Aksiyonlar ve 4 İstatistik (7 Sütun) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Lokasyon Rozeti & Resmi Slogan */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181b24]/90 border border-[#00f0ff]/40 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
                </span>
                <span className="font-mono text-[11px] font-bold text-[#00f0ff] uppercase tracking-widest">
                  {COMPANY_INFO.brandName} // ÇAYIROVA - GEBZE TESİSİ
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffb77d]/15 border border-[#ffb77d]/35 text-[#ffb77d] font-mono text-[11px] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#ffb77d]" />
                <span>{COMPANY_INFO.slogan}</span>
              </div>
            </div>

            {/* Ana Başlık */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-black text-[#e2e2e9] tracking-tight leading-[1.08]">
              Mühendislik Plastikleri,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#82a4ff] to-[#3b82f6] animate-neon-pulse">
                3 &amp; 5 Eksen CNC İmalat
              </span>{' '}
              ve Endüstriyel Metal Tedariği
            </h1>

            {/* Açıklama */}
            <p className="text-base sm:text-lg text-[#c3c6d7] max-w-2xl leading-relaxed">
              Cast Polyamid (Kestamit PA6G), Saf PTFE Teflon, PE 1000 Ulpolen ve POM-C Delrin
              imalatı; PEEK, FR4 Epoksi ve alaşımlı metallerde doğrudan üretici ve ithalatçı
              güvencesiyle mikron toleranslı çözümler.
            </p>

            {/* Butonlar / CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-cta-rfq"
                onClick={onOpenRfq}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#0053db] text-[#eeefff] font-bold text-sm shadow-[0_0_28px_rgba(37,99,235,0.5)] hover:shadow-[0_0_36px_rgba(0,240,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer border border-[#00f0ff]/30"
              >
                <ShoppingCart className="w-4 h-4 mr-2 text-[#00f0ff]" />
                <span>Teklif Sepetine Git / RFQ</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-catalog"
                onClick={onOpenCatalog}
                className="inline-flex items-center justify-center h-12 px-5 rounded-xl bg-[#181b24] hover:bg-[#222632] text-[#e2e2e9] transition-all font-semibold text-sm border border-[#434655]/50 shadow-sm cursor-pointer hover:border-[#00f0ff]/50"
              >
                <Download className="w-4 h-4 mr-2 text-[#00f0ff]" />
                <span>42 Sayfa Teknik Katalog</span>
              </button>

              <a
                id="hero-cta-direct-phone"
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center h-12 px-4 rounded-xl bg-[#12141c] hover:bg-[#181b24] text-[#00f0ff] hover:text-white transition-all font-mono text-xs font-bold border border-[#2563eb]/40 shadow-sm"
                title={`${COMPANY_INFO.authorizedPerson} - Doğrudan Hat`}
              >
                <Phone className="w-4 h-4 mr-2 text-[#00f0ff]" />
                <span>{COMPANY_INFO.authorizedPerson}: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* 4 Canlı İstatistik / Güvenilirlik Kartı (Her Biri Ayrı Neon Rengi & Mikro Üst Çizgi) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {/* Stat 1: CNC - Cobalt Blue */}
              <div className="group relative p-3.5 rounded-2xl bg-[#12141c]/95 border border-[#3b82f6]/40 backdrop-blur-md hover:border-[#3b82f6] hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#60a5fa]" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#8d90a0] uppercase tracking-wider block">
                    CNC Parkuru
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6]" />
                </div>
                <span className="font-display text-lg sm:text-xl font-extrabold text-[#60a5fa] block mt-1">
                  3 &amp; 5 Eksen
                </span>
                <span className="text-[11px] text-[#c3c6d7]">Kayar Otomat</span>
              </div>

              {/* Stat 2: Savunma - Electric Cyan */}
              <div className="group relative p-3.5 rounded-2xl bg-[#12141c]/95 border border-[#00f0ff]/40 backdrop-blur-md hover:border-[#00f0ff] hover:shadow-[0_4px_20px_rgba(0,240,255,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00788c] to-[#00f0ff]" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#8d90a0] uppercase tracking-wider block">
                    Savunma Sanayi
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
                </div>
                <span className="font-display text-lg sm:text-xl font-extrabold text-[#00f0ff] block mt-1">
                  AS9100 / ISO
                </span>
                <span className="text-[11px] text-[#c3c6d7]">Sertifikalı Üretim</span>
              </div>

              {/* Stat 3: Stok - Golden Amber */}
              <div className="group relative p-3.5 rounded-2xl bg-[#12141c]/95 border border-[#f59e0b]/40 backdrop-blur-md hover:border-[#f59e0b] hover:shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#b45309] to-[#f59e0b]" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#8d90a0] uppercase tracking-wider block">
                    Depo Stoğu
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
                </div>
                <span className="font-display text-lg sm:text-xl font-extrabold text-[#fbbf24] block mt-1">
                  28+ Ton
                </span>
                <span className="text-[11px] text-[#c3c6d7]">Aynı Gün Sevk</span>
              </div>

              {/* Stat 4: Isı - Flame Crimson */}
              <div className="group relative p-3.5 rounded-2xl bg-[#12141c]/95 border border-[#ef4444]/40 backdrop-blur-md hover:border-[#ef4444] hover:shadow-[0_4px_20px_rgba(239,68,68,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#dc2626] to-[#ef4444]" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#8d90a0] uppercase tracking-wider block">
                    Isı Aralığı
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444]" />
                </div>
                <span className="font-display text-lg sm:text-xl font-extrabold text-[#f87171] block mt-1">
                  -260° ~ +1600°
                </span>
                <span className="text-[11px] text-[#c3c6d7]">PTFE &amp; Seramik</span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: İnteraktif Siber CAD Malzeme İstasyonu (5 Sütun) */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Zengin Malzeme Kartuş Seçici Sekmeler (6 Malzeme) */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {SPECIMENS.map((specimen) => {
                const isActive = specimen.id === activeSpecimenId;
                return (
                  <button
                    key={specimen.id}
                    onClick={() => setActiveSpecimenId(specimen.id)}
                    style={{
                      borderColor: isActive ? specimen.colorHex : undefined,
                      boxShadow: isActive ? `0 0 16px ${specimen.colorHex}40` : undefined,
                    }}
                    className={`flex flex-col items-start p-2.5 rounded-xl font-mono text-left transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#1a1f2e] text-white'
                        : 'bg-[#12141c] border-[#434655]/40 text-[#8d90a0] hover:text-[#e2e2e9] hover:bg-[#181b24] hover:border-[#434655]/80'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 w-full">
                      <span
                        className="w-2 h-2 rounded-full shrink-0 shadow-sm"
                        style={{ backgroundColor: specimen.colorHex, boxShadow: `0 0 8px ${specimen.colorHex}` }}
                      />
                      <span className="text-[11px] font-bold text-[#e2e2e9] truncate">
                        {specimen.tabLabel}
                      </span>
                    </div>
                    <span className="text-[9.5px] text-[#8d90a0] mt-0.5 truncate">
                      {specimen.categoryTag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Numune Kartı (Animasyonlu Geçiş & Yüksek Mühendislik Detayları) */}
            <div className="relative rounded-2xl bg-[#141722]/95 border border-[#434655]/50 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_16px_48px_rgba(0,0,0,0.6)] overflow-hidden group">
              {/* Üst Neon Çizgi */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-colors"
                style={{
                  backgroundColor: activeSpecimen.colorHex,
                  boxShadow: `0 0 16px ${activeSpecimen.colorHex}`,
                }}
              />

              {/* Başlık & Kod & DIN Normu */}
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2 py-0.5 rounded font-mono text-[11px] font-bold border"
                    style={{
                      color: activeSpecimen.colorHex,
                      borderColor: `${activeSpecimen.colorHex}50`,
                      backgroundColor: `${activeSpecimen.colorHex}15`,
                    }}
                  >
                    KOD: {activeSpecimen.code}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                  <span className="font-mono text-[11px] text-[#c3c6d7]">
                    {activeSpecimen.dinNorm}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2563eb]/20 text-[#00f0ff] font-mono text-[10.5px] uppercase font-bold border border-[#00f0ff]/30 flex items-center gap-1">
                  <Crosshair className="w-3 h-3 text-[#00f0ff]" />
                  <span>±0.02 mm CAD</span>
                </span>
              </div>

              {/* Görsel Alanı & Lazer Tarama Efekti */}
              <div className="relative w-full h-52 sm:h-56 rounded-xl bg-[#08090d] overflow-hidden flex items-center justify-center mb-4 border border-[#434655]/40 industrial-grid-dense">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSpecimen.id}
                    src={activeSpecimen.imageUrl}
                    alt={`${activeSpecimen.name} - Üretici Tedarik`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>

                {/* Lazer Tarama Çizgisi (CAD Toolpath Simulation) */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-75 shadow-[0_0_12px_#00f0ff] animate-laser-scan pointer-events-none" />

                {/* Karartma & Başlık Katmanı */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#e2e2e9] leading-tight drop-shadow-md">
                      {activeSpecimen.name}
                    </h3>
                    <p className="text-xs font-medium mt-0.5" style={{ color: activeSpecimen.colorHex }}>
                      {activeSpecimen.subtitle}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#181b24]/90 text-[#e2e2e9] font-mono text-xs backdrop-blur-md border border-[#434655]/50 shrink-0 ml-2 shadow-sm">
                    {activeSpecimen.dimensions}
                  </span>
                </div>
              </div>

              {/* Parametrik Teknik Telemetri Tablosu */}
              <div className="flex flex-col gap-1.5 bg-[#08090d]/90 p-3.5 rounded-xl font-mono text-xs border border-[#434655]/30">
                <div className="flex items-center justify-between py-1 text-[#c3c6d7] border-b border-[#434655]/20">
                  <span className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>Yoğunluk (Density):</span>
                  </span>
                  <span className="text-[#e2e2e9] font-bold">
                    {activeSpecimen.density}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 text-[#c3c6d7] border-b border-[#434655]/20">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#ffb77d]" />
                    <span>Çalışma Sıcaklığı:</span>
                  </span>
                  <span className="text-[#ffb77d] font-bold">
                    {activeSpecimen.workingTemp}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 text-[#c3c6d7] border-b border-[#434655]/20">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" style={{ color: activeSpecimen.colorHex }} />
                    <span>Sürtünme / Mukavemet:</span>
                  </span>
                  <span className="font-bold" style={{ color: activeSpecimen.colorHex }}>
                    {activeSpecimen.frictionOrStrength}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 text-[#c3c6d7] border-b border-[#434655]/20">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#b4c5ff]" />
                    <span>Sertlik (Hardness):</span>
                  </span>
                  <span className="text-[#b4c5ff] font-bold">
                    {activeSpecimen.hardness}
                  </span>
                </div>

                {/* Form Çeşitleri / Geometriler */}
                <div className="flex items-center gap-1.5 pt-1 overflow-x-auto no-scrollbar">
                  <span className="text-[10px] text-[#8d90a0] shrink-0">Kesim Tipleri:</span>
                  {activeSpecimen.shapes.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#181b24] text-[#c3c6d7] text-[10px] font-mono border border-[#434655]/30 shrink-0"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Depo Stok Durumu Rozeti */}
              <div className="flex items-center justify-between mt-3 p-3 rounded-lg bg-[#181b24]/80 border border-[#434655]/40">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: activeSpecimen.colorHex }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2.5 w-2.5"
                      style={{ backgroundColor: activeSpecimen.colorHex }}
                    />
                  </span>
                  <span className="text-xs text-[#e2e2e9]">
                    Gebze/Çayırova Depo:{' '}
                    <strong className="font-semibold" style={{ color: activeSpecimen.colorHex }}>
                      {activeSpecimen.stockStatus}
                    </strong>
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#8d90a0] hidden sm:inline">
                  Milimetrik Kesim
                </span>
              </div>

              {/* Hızlı Butonlar */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <button
                  id="specimen-tds-btn"
                  onClick={() => onOpenTds(activeSpecimen.id)}
                  className="flex items-center justify-center h-10 rounded-xl bg-[#222632] hover:bg-[#2c3140] text-[#e2e2e9] text-xs font-semibold transition-colors border border-[#434655]/40 cursor-pointer hover:border-[#00f0ff]/50"
                >
                  <FileCheck className="w-4 h-4 mr-1.5 text-[#00f0ff]" />
                  <span>Şartname / TDS</span>
                </button>
                <button
                  id="specimen-quote-btn"
                  onClick={() => onSelectProductForRfq(activeSpecimen.id)}
                  className="flex items-center justify-center h-10 rounded-xl bg-[#2563eb] text-[#eeefff] text-xs font-bold hover:bg-[#0053db] transition-all cursor-pointer shadow-[0_0_16px_rgba(37,99,235,0.4)] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                >
                  <ShoppingCart className="w-4 h-4 mr-1.5 text-[#00f0ff]" />
                  <span>Bu Malzemeyle RFQ Al</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
