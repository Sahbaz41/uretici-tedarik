import React from 'react';
import {
  Send,
  Sliders,
  Ruler,
  Eye,
  Cable,
  MemoryStick as Memory,
  Maximize,
  Verified,
  Sparkles,
} from 'lucide-react';
import { ProductItem } from '../types';
import { PRODUCTS } from '../data/materials';

interface ProductsSectionProps {
  selectedCategory: string | null;
  onClearFilter: () => void;
  onSelectProductForRfq: (productId: string) => void;
  onOpenTds: (productId: string) => void;
  currency: 'USD' | 'TRY' | 'EUR';
}

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

  const getBadgeStyle = (badgeType: string) => {
    switch (badgeType) {
      case 'primary':
        return 'bg-[#2563eb] text-[#eeefff]';
      case 'tertiary':
        return 'bg-[#00788c] text-[#d7f6ff]';
      case 'secondary':
        return 'bg-[#d97707] text-[#432100]';
      case 'surface-tint':
        return 'bg-[#33353a] text-[#b4c5ff] border border-[#b4c5ff]/40';
      case 'error':
        return 'bg-[#93000a] text-[#ffdad6]';
      default:
        return 'bg-[#2563eb] text-[#eeefff]';
    }
  };

  const getCurrencyDisplay = (priceStr: string) => {
    if (priceStr === 'Teklif Alınız' || priceStr === 'Teklif İsteyiniz') {
      return priceStr;
    }
    if (currency === 'TRY') {
      // 1 USD approx 38 TRY
      return priceStr
        .replace(/\$/g, '₺')
        .replace(/65,00/, '2.470')
        .replace(/2.000,00/, '76.000')
        .replace(/1,60/, '60')
        .replace(/155,00/, '5.890')
        .replace(/10,00/, '380')
        .replace(/82,00/, '3.115');
    }
    if (currency === 'EUR') {
      return priceStr.replace(/\$/g, '€');
    }
    return priceStr;
  };

  return (
    <section id="urunler-bolumu" className="w-full py-16 lg:py-20">
      <div className="w-full px-4 sm:px-6 mx-auto max-w-[90rem] flex flex-col gap-10">
        {/* Başlık & Kontroller */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Verified className="w-5 h-5 text-[#ffb77d]" />
              <span className="font-mono text-xs font-bold text-[#ffb77d] uppercase tracking-widest">
                En Çok Sipariş Edilenler
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e2e2e9] tracking-tight">
              Çok Satan Ürünlerimiz // Depodan Doğrudan Sevk
            </h2>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {selectedCategory && (
              <button
                id="clear-category-filter-btn"
                onClick={onClearFilter}
                className="px-3 py-1.5 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] hover:bg-[#2563eb]/30 text-xs font-semibold border border-[#2563eb]/50 transition-colors"
              >
                Filtreyi Temizle (Tümünü Göster)
              </button>
            )}
            <span className="px-3 py-1.5 rounded-lg bg-[#1a1b21] border border-[#434655]/30 font-mono text-xs text-[#8d90a0]">
              Para Birimi: {currency} (+KDV Toptan)
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#282a2f] text-[#e2e2e9] text-xs font-semibold">
              Gebze Fabrika Çıkış
            </span>
          </div>
        </div>

        {/* Ürün Kartları Izgarası (8 Ürün) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              id={`product-card-${prod.id}`}
              className="flex flex-col rounded-xl bg-[#1a1b21] border border-[#434655]/30 overflow-hidden hover:border-[#2563eb]/60 hover:bg-[#1e1f25] transition-all duration-300 group shadow-lg"
            >
              {/* Görsel Alanı */}
              <div className="relative h-44 w-full bg-[#0c0e13] overflow-hidden">
                {prod.imageUrl ? (
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : prod.id === 'epoksi-fr4-levha' ? (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-950/80 to-[#33353a] flex items-center justify-center">
                    <Memory className="w-14 h-14 text-[#4cd7f6] opacity-40 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-amber-950/70 to-[#33353a] flex items-center justify-center">
                    <Maximize className="w-14 h-14 text-[#ffb77d] opacity-40 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                )}

                {/* Rozetler */}
                <span
                  className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded font-mono text-[10px] uppercase font-bold tracking-wider ${getBadgeStyle(
                    prod.badgeType
                  )}`}
                >
                  {prod.badge}
                </span>
                <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-[#0c0e13]/90 text-[#e2e2e9] font-mono text-[11px] backdrop-blur-md border border-[#434655]/30">
                  {prod.secondaryBadge}
                </span>
              </div>

              {/* Bilgi Gövdesi */}
              <div className="p-4 flex flex-col flex-1">
                <span className="font-mono text-[10px] text-[#4cd7f6] uppercase tracking-wider mb-1">
                  {prod.category}
                </span>
                <h4
                  onClick={() => onOpenTds(prod.id)}
                  className="font-display text-[16px] text-[#e2e2e9] font-bold group-hover:text-[#b4c5ff] transition-colors line-clamp-2 cursor-pointer leading-snug"
                >
                  {prod.name}
                </h4>
                <p className="text-[12px] text-[#c3c6d7] mt-1.5 mb-4 line-clamp-2 leading-relaxed">
                  {prod.description}
                </p>

                {/* Alt Kısım: Fiyat & Teklif Butonu */}
                <div className="mt-auto pt-3 border-t border-[#434655]/30 flex items-center justify-between">
                  <div>
                    <span className="block font-mono text-[10px] text-[#8d90a0]">
                      {prod.priceDisplay.includes('–')
                        ? 'Fiyat Aralığı (+KDV)'
                        : 'Birim Fiyat'}
                    </span>
                    <span className="font-display text-[15px] sm:text-[16px] text-[#b4c5ff] font-bold">
                      {getCurrencyDisplay(prod.priceDisplay)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      id={`product-tds-btn-${prod.id}`}
                      onClick={() => onOpenTds(prod.id)}
                      className="h-9 w-9 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#c3c6d7] hover:text-[#e2e2e9] flex items-center justify-center transition-colors border border-[#434655]/40"
                      title="Teknik Şartnameyi Aç"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      id={`product-rfq-btn-${prod.id}`}
                      onClick={() => onSelectProductForRfq(prod.id)}
                      className="h-9 px-3 rounded-lg bg-[#33353a] hover:bg-[#2563eb] hover:text-[#eeefff] text-[#e2e2e9] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>{prod.actionText}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
