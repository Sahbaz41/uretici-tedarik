import React from 'react';
import {
  Send,
  Eye,
  MemoryStick as Memory,
  Maximize,
  Flame,
  Scale,
  RotateCcw,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CurrencyCode, ProductItem } from '../types';
import { PRODUCTS } from '../data/materials';
import { useLanguage } from '../context/LanguageContext';

interface ProductsSectionProps {
  selectedCategory: string | null;
  onClearFilter: () => void;
  onSelectProductForRfq: (productId: string) => void;
  onOpenTds: (productId: string) => void;
  currency: CurrencyCode;
  language?: 'tr' | 'en';
}

interface ProductTheme {
  primary: string;
  accentText: string;
  barGradient: string;
  badgeBg: string;
  borderHover: string;
  glowShadow: string;
  buttonBg: string;
  priceColor: string;
  categoryBadge: string;
}

const CATEGORY_PRODUCT_THEMES: Record<string, ProductTheme> = {
  'muhendislik-plastikleri': {
    primary: '#3b82f6',
    accentText: 'text-[#60a5fa]',
    barGradient: 'from-[#2563eb] via-[#3b82f6] to-transparent',
    badgeBg: 'bg-[#2563eb]/25 text-[#93c5fd] border-[#3b82f6]/50',
    borderHover: 'hover:border-[#3b82f6]',
    glowShadow: 'hover:shadow-[0_10px_35px_rgba(59,130,246,0.25)]',
    buttonBg: 'bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] hover:from-[#2563eb] hover:to-[#3b82f6] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]',
    priceColor: 'text-[#60a5fa]',
    categoryBadge: 'bg-[#2563eb]/15 text-[#93c5fd] border-[#3b82f6]/30',
  },
  'teflon-ptfe': {
    primary: '#00f0ff',
    accentText: 'text-[#00f0ff]',
    barGradient: 'from-[#00f0ff] via-[#38bdf8] to-transparent',
    badgeBg: 'bg-[#00f0ff]/20 text-[#acedff] border-[#00f0ff]/50',
    borderHover: 'hover:border-[#00f0ff]',
    glowShadow: 'hover:shadow-[0_10px_35px_rgba(0,240,255,0.25)]',
    buttonBg: 'bg-gradient-to-r from-[#00788c] to-[#00f0ff] hover:from-[#00f0ff] hover:to-[#38bdf8] text-[#061e25] font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]',
    priceColor: 'text-[#00f0ff]',
    categoryBadge: 'bg-[#00f0ff]/15 text-[#00f0ff] border-[#00f0ff]/30',
  },
  'pe1000-hdpe': {
    primary: '#10b981',
    accentText: 'text-[#34d399]',
    barGradient: 'from-[#059669] via-[#10b981] to-transparent',
    badgeBg: 'bg-[#10b981]/20 text-[#6ee7b7] border-[#10b981]/50',
    borderHover: 'hover:border-[#10b981]',
    glowShadow: 'hover:shadow-[0_10px_35px_rgba(16,185,129,0.25)]',
    buttonBg: 'bg-gradient-to-r from-[#047857] to-[#10b981] hover:from-[#10b981] hover:to-[#34d399] text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]',
    priceColor: 'text-[#34d399]',
    categoryBadge: 'bg-[#10b981]/15 text-[#34d399] border-[#10b981]/30',
  },
  'poliuretan-kalip-yayi': {
    primary: '#f59e0b',
    accentText: 'text-[#fbbf24]',
    barGradient: 'from-[#d97706] via-[#f59e0b] to-transparent',
    badgeBg: 'bg-[#f59e0b]/20 text-[#fde68a] border-[#f59e0b]/50',
    borderHover: 'hover:border-[#f59e0b]',
    glowShadow: 'hover:shadow-[0_10px_35px_rgba(245,158,11,0.25)]',
    buttonBg: 'bg-gradient-to-r from-[#b45309] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fbbf24] text-[#1e1000] font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]',
    priceColor: 'text-[#fbbf24]',
    categoryBadge: 'bg-[#f59e0b]/15 text-[#fbbf24] border-[#f59e0b]/30',
  },
  'civa-celigi-h8': {
    primary: '#94a3b8',
    accentText: 'text-[#cbd5e1]',
    barGradient: 'from-[#64748b] via-[#94a3b8] to-transparent',
    badgeBg: 'bg-[#94a3b8]/20 text-[#e2e8f0] border-[#94a3b8]/50',
    borderHover: 'hover:border-[#94a3b8]',
    glowShadow: 'hover:shadow-[0_10px_35px_rgba(148,163,184,0.25)]',
    buttonBg: 'bg-gradient-to-r from-[#475569] to-[#64748b] hover:from-[#64748b] hover:to-[#94a3b8] text-white shadow-[0_0_15px_rgba(148,163,184,0.3)]',
    priceColor: 'text-[#e2e8f0]',
    categoryBadge: 'bg-[#94a3b8]/15 text-[#cbd5e1] border-[#94a3b8]/30',
  },
  'vinc-denge-takozu': {
    primary: '#f97316',
    accentText: 'text-[#fb923c]',
    barGradient: 'from-[#ea580c] via-[#f97316] to-transparent',
    badgeBg: 'bg-[#f97316]/20 text-[#fed7aa] border-[#f97316]/50',
    borderHover: 'hover:border-[#f97316]',
    glowShadow: 'hover:shadow-[0_10px_35px_rgba(249,115,22,0.25)]',
    buttonBg: 'bg-gradient-to-r from-[#c2410c] to-[#f97316] hover:from-[#f97316] hover:to-[#fb923c] text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]',
    priceColor: 'text-[#fb923c]',
    categoryBadge: 'bg-[#f97316]/15 text-[#fb923c] border-[#f97316]/30',
  },
  'epoksi-fr4-mikanit': {
    primary: '#a855f7',
    accentText: 'text-[#c084fc]',
    barGradient: 'from-[#9333ea] via-[#a855f7] to-transparent',
    badgeBg: 'bg-[#a855f7]/20 text-[#e9d5ff] border-[#a855f7]/50',
    borderHover: 'hover:border-[#a855f7]',
    glowShadow: 'hover:shadow-[0_10px_35px_rgba(168,85,247,0.25)]',
    buttonBg: 'bg-gradient-to-r from-[#7e22ce] to-[#a855f7] hover:from-[#a855f7] hover:to-[#c084fc] text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]',
    priceColor: 'text-[#c084fc]',
    categoryBadge: 'bg-[#a855f7]/15 text-[#c084fc] border-[#a855f7]/30',
  },
  'alasimli-bakir-bronz': {
    primary: '#d97706',
    accentText: 'text-[#f59e0b]',
    barGradient: 'from-[#b45309] via-[#d97706] to-transparent',
    badgeBg: 'bg-[#d97706]/20 text-[#fde68a] border-[#d97706]/50',
    borderHover: 'hover:border-[#d97706]',
    glowShadow: 'hover:shadow-[0_10px_35px_rgba(217,119,6,0.25)]',
    buttonBg: 'bg-gradient-to-r from-[#92400e] to-[#d97706] hover:from-[#d97706] hover:to-[#f59e0b] text-white shadow-[0_0_15px_rgba(217,119,6,0.4)]',
    priceColor: 'text-[#f59e0b]',
    categoryBadge: 'bg-[#d97706]/15 text-[#f59e0b] border-[#d97706]/30',
  },
  'yanmaz-kablo': {
    primary: '#ef4444',
    accentText: 'text-[#f87171]',
    barGradient: 'from-[#dc2626] via-[#ef4444] to-transparent',
    badgeBg: 'bg-[#ef4444]/20 text-[#fecaca] border-[#ef4444]/50',
    borderHover: 'hover:border-[#ef4444]',
    glowShadow: 'hover:shadow-[0_10px_35px_rgba(239,68,68,0.25)]',
    buttonBg: 'bg-gradient-to-r from-[#b91c1c] to-[#ef4444] hover:from-[#ef4444] hover:to-[#f87171] text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]',
    priceColor: 'text-[#f87171]',
    categoryBadge: 'bg-[#ef4444]/15 text-[#f87171] border-[#ef4444]/30',
  },
  'eva-tatami': {
    primary: '#14b8a6',
    accentText: 'text-[#2dd4bf]',
    barGradient: 'from-[#0d9488] via-[#14b8a6] to-transparent',
    badgeBg: 'bg-[#14b8a6]/20 text-[#99f6e4] border-[#14b8a6]/50',
    borderHover: 'hover:border-[#14b8a6]',
    glowShadow: 'hover:shadow-[0_10px_35px_rgba(20,184,166,0.25)]',
    buttonBg: 'bg-gradient-to-r from-[#0f766e] to-[#14b8a6] hover:from-[#14b8a6] hover:to-[#2dd4bf] text-white shadow-[0_0_15px_rgba(20,184,166,0.4)]',
    priceColor: 'text-[#2dd4bf]',
    categoryBadge: 'bg-[#14b8a6]/15 text-[#2dd4bf] border-[#14b8a6]/30',
  },
};

const DEFAULT_THEME: ProductTheme = CATEGORY_PRODUCT_THEMES['muhendislik-plastikleri'];

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  selectedCategory,
  onClearFilter,
  onSelectProductForRfq,
  onOpenTds,
  currency,
}) => {
  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((p) => p.categoryId === selectedCategory)
    : PRODUCTS;

  const getProductTheme = (categoryId: string): ProductTheme => {
    return CATEGORY_PRODUCT_THEMES[categoryId] || DEFAULT_THEME;
  };

  const getBadgeStyle = (badgeType: string) => {
    switch (badgeType) {
      case 'primary':
        return 'bg-[#2563eb] text-[#eeefff] border border-[#00f0ff]/50 shadow-[0_0_12px_rgba(37,99,235,0.4)]';
      case 'tertiary':
        return 'bg-[#00788c] text-[#d7f6ff] border border-[#00f0ff]/40 shadow-[0_0_12px_rgba(0,120,140,0.3)]';
      case 'secondary':
        return 'bg-[#d97707] text-[#432100] border border-[#ffb77d]/40 shadow-[0_0_12px_rgba(217,119,7,0.3)]';
      case 'surface-tint':
        return 'bg-[#181b24] text-[#00f0ff] border border-[#00f0ff]/40';
      case 'error':
        return 'bg-[#93000a] text-[#ffdad6] border border-[#ffb4ab]/40 shadow-[0_0_12px_rgba(147,0,10,0.3)]';
      default:
        return 'bg-[#2563eb] text-[#eeefff]';
    }
  };

  const { language, isEN, t: currentT } = useLanguage();
  const pT = currentT.products;

  // Dynamic currency converter for price ranges
  const getCurrencyDisplay = (priceStr: string) => {
    if (priceStr === 'Teklif Alınız' || priceStr === 'Teklif İsteyiniz') {
      return isEN ? 'Request Quote' : priceStr;
    }

    const rateTRY = 38.45;
    const rateEUR = 0.93;

    if (currency === 'USD') return priceStr;

    return priceStr.replace(/\$([0-9.]+)(,[0-9]{2})?/g, (_match, whole, decimal) => {
      const cleanNum = parseFloat(whole.replace(/\./g, '')) + (decimal ? parseFloat(decimal.replace(',', '.')) : 0);
      if (isNaN(cleanNum)) return priceStr;

      if (currency === 'TRY') {
        const tryVal = Math.round(cleanNum * rateTRY);
        return `₺${tryVal.toLocaleString('tr-TR')}`;
      }
      if (currency === 'EUR') {
        const eurVal = Number((cleanNum * rateEUR).toFixed(1));
        return `€${eurVal.toLocaleString('tr-TR')}`;
      }
      return priceStr;
    });
  };

  return (
    <section id="urunler-bolumu" className="w-full py-16 lg:py-24 relative overflow-hidden">
      {/* İnce siber arka plan degradeleri */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#2563eb]/8 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00f0ff]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full px-4 sm:px-6 mx-auto max-w-[90rem] flex flex-col gap-10 relative">
        {/* Başlık & Kontroller */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#434655]/30">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
              <span className="font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-widest">
                {pT.badgeStock}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e2e2e9] tracking-tight">
              {pT.title}
            </h2>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {selectedCategory && (
              <button
                id="clear-category-filter-btn"
                onClick={onClearFilter}
                className="px-3.5 py-1.5 rounded-xl bg-[#2563eb]/20 text-[#00f0ff] hover:bg-[#2563eb]/30 text-xs font-semibold border border-[#2563eb]/50 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{pT.filterClear} ({isEN ? 'All' : 'Tümü'}: {PRODUCTS.length})</span>
              </button>
            )}
            <span className="px-3 py-1.5 rounded-xl bg-[#12141c] border border-[#434655]/40 font-mono text-xs text-[#8d90a0]">
              {pT.rateLabel} <strong className="text-[#00f0ff]">{currency}</strong> {pT.vatWholesale}
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#181b24] border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-mono font-bold shadow-sm">
              {pT.warehouseLabel}
            </span>
          </div>
        </div>

        {/* Boş Durum (Empty State) Yönetimi */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 rounded-3xl bg-[#12141c] border border-[#434655]/40 text-center flex flex-col items-center justify-center gap-4 my-8 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-[#181b24] text-[#ffb77d] flex items-center justify-center border border-[#ffb77d]/30 shadow-lg">
              <Layers className="w-8 h-8" />
            </div>
            <div className="max-w-md">
              <h3 className="font-display text-lg font-bold text-[#e2e2e9]">
                {pT.emptyTitle}
              </h3>
              <p className="text-xs text-[#c3c6d7] mt-1.5 leading-relaxed">
                {pT.emptyDesc}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={onClearFilter}
                className="px-4 py-2 rounded-xl bg-[#181b24] hover:bg-[#222632] text-xs font-semibold text-[#e2e2e9] transition-colors cursor-pointer"
              >
                {pT.btnShowAll}
              </button>
              <button
                onClick={() => {
                  const elem = document.getElementById('rfq-formu');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2 rounded-xl bg-[#2563eb] hover:bg-[#0053db] text-xs font-bold text-white shadow-md transition-colors cursor-pointer"
              >
                {pT.btnCustomRfq}
              </button>
            </div>
          </div>
        ) : (
          /* Ürün Kartları Izgarası (Ultra-Pro Cyber Industrial Tasarım) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const theme = getProductTheme(prod.categoryId);
              const pTrans = pT.names[prod.id];
              const prodName = isEN && pTrans ? pTrans.name : prod.name;
              const prodCategory = isEN && pTrans ? pTrans.category : prod.category;
              const prodDesc = isEN && pTrans ? pTrans.description : prod.description;
              const prodAction = isEN && pTrans ? pTrans.actionText : prod.actionText;

              return (
                <div
                  key={prod.id}
                  id={`product-card-${prod.id}`}
                  className={`flex flex-col rounded-2xl bg-[#12141c] border border-[#434655]/35 overflow-hidden ${theme.borderHover} ${theme.glowShadow} hover:-translate-y-2 transition-all duration-300 group relative`}
                >
                  {/* Kart Üst Neon Çizgisi */}
                  <div className={`h-1 w-full bg-gradient-to-r ${theme.barGradient}`} />

                  {/* Üst Görsel Alanı */}
                  <div className="relative h-48 w-full bg-[#08090d] overflow-hidden">
                    {prod.imageUrl ? (
                      <img
                        src={prod.imageUrl}
                        alt={`${prodName} - Üretici Tedarik Çayırova`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.92] group-hover:brightness-100"
                      />
                    ) : prod.id === 'epoksi-fr4-levha' ? (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-950/80 via-[#12141c] to-[#181b24] flex flex-col items-center justify-center p-4">
                        <Memory className="w-16 h-16 text-[#a855f7] opacity-60 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-mono text-[11px] text-[#c084fc] mt-2 font-bold">FR-4 EPOXY LAMINATE</span>
                      </div>
                    ) : prod.id === 'peek-termoplastik' ? (
                      <div className="w-full h-full bg-gradient-to-br from-rose-950/80 via-[#12141c] to-[#181b24] flex flex-col items-center justify-center p-4">
                        <Cpu className="w-16 h-16 text-[#f43f5e] opacity-60 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-mono text-[11px] text-[#fb7185] mt-2 font-bold">PEEK 450G HIGH-TEMP</span>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-950/70 via-[#12141c] to-[#181b24] flex flex-col items-center justify-center p-4">
                        <Maximize className="w-16 h-16 text-[#f59e0b] opacity-60 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-mono text-[11px] text-[#fbbf24] mt-2 font-bold">DESMADUR POLYURETHANE</span>
                      </div>
                    )}

                    {/* Görsel Üzeri Hafif Karartma Degradisi */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-black/30 pointer-events-none" />

                    {/* Rozetler */}
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-lg font-mono text-[10px] uppercase font-extrabold tracking-wider border shadow-md ${theme.badgeBg}`}
                    >
                      {prod.badge}
                    </span>

                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-[#08090d]/90 text-[#e2e2e9] font-mono text-[10.5px] backdrop-blur-md border border-[#434655]/50 font-semibold">
                      {prod.secondaryBadge}
                    </span>

                    {/* DIN Normu Çipi */}
                    {prod.dinNorm && (
                      <span className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded bg-[#08090d]/90 text-[#e2e2e9] font-mono text-[10px] border border-[#434655]/50 backdrop-blur-md font-semibold">
                        {prod.dinNorm.split('/')[0]}
                      </span>
                    )}
                  </div>

                  {/* Bilgi Gövdesi */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 gap-3">
                    {/* Kategori & Kod */}
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md border ${theme.categoryBadge}`}>
                        {prodCategory}
                      </span>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#181b24] text-[#8d90a0] border border-[#434655]/30">
                        {prod.code}
                      </span>
                    </div>

                    {/* Ürün Başlığı */}
                    <h4
                      onClick={() => onOpenTds(prod.id)}
                      className={`font-display text-[16px] text-[#e2e2e9] font-bold group-hover:${theme.accentText} transition-colors line-clamp-2 cursor-pointer leading-snug`}
                      title={prodName}
                    >
                      {prodName}
                    </h4>

                    {/* Açıklama */}
                    <p className="text-[12px] text-[#c3c6d7] line-clamp-2 leading-relaxed">
                      {prodDesc}
                    </p>

                    {/* Mikro Teknik Parametreler Matrisi */}
                    <div className="grid grid-cols-2 gap-1.5 p-2.5 rounded-xl bg-[#08090d]/80 border border-[#434655]/30 font-mono text-[11px] mt-auto">
                      <div className="flex items-center gap-1.5 text-[#c3c6d7] truncate">
                        <Flame className="w-3.5 h-3.5 text-[#ffb77d] shrink-0" />
                        <span className="truncate">{prod.workingTemp.split('(')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#c3c6d7] truncate">
                        <Scale className={`w-3.5 h-3.5 ${theme.accentText} shrink-0`} />
                        <span>{prod.density} g/cm³</span>
                      </div>
                      {prod.hardness && (
                        <div className="col-span-2 flex items-center gap-1.5 text-[#b4c5ff] pt-1 border-t border-[#434655]/20 truncate">
                          <span className="text-[#8d90a0] text-[10px]">{pT.hardnessLabel}:</span>
                          <span className="font-bold truncate">{prod.hardness}</span>
                        </div>
                      )}
                    </div>

                    {/* Alt Aksiyon & Fiyat Çubuğu */}
                    <div className="pt-3 border-t border-[#434655]/30 flex items-center justify-between mt-1">
                      <div>
                        <span className="block font-mono text-[10px] text-[#8d90a0]">
                          {prod.priceDisplay.includes('–')
                            ? pT.priceRangeLabel
                            : (isEN ? 'Unit Price' : 'Birim Fiyat')}
                        </span>
                        <span className={`font-display text-[15px] sm:text-[16px] ${theme.priceColor} font-extrabold`}>
                          {getCurrencyDisplay(prod.priceDisplay)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          id={`product-tds-btn-${prod.id}`}
                          onClick={() => onOpenTds(prod.id)}
                          className={`h-9 w-9 rounded-xl bg-[#181b24] hover:bg-[#222632] text-[#c3c6d7] group-hover:${theme.accentText} flex items-center justify-center transition-colors border border-[#434655]/40 cursor-pointer`}
                          title={pT.btnTdsTooltip}
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          id={`product-rfq-btn-${prod.id}`}
                          onClick={() => onSelectProductForRfq(prod.id)}
                          className={`h-9 px-3.5 rounded-xl ${theme.buttonBg} text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer`}
                        >
                          <span>{prodAction}</span>
                          <Send className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
