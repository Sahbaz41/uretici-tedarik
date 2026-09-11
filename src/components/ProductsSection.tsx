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

interface ProductsSectionProps {
  selectedCategory: string | null;
  onClearFilter: () => void;
  onSelectProductForRfq: (productId: string) => void;
  onOpenTds: (productId: string) => void;
  currency: CurrencyCode;
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

  // Dynamic currency converter for price ranges
  const getCurrencyDisplay = (priceStr: string) => {
    if (priceStr === 'Teklif Alınız' || priceStr === 'Teklif İsteyiniz') {
      return priceStr;
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
                Stoktan Doğrudan Sevk // DIN Normlu Hassas Tolerans
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e2e2e9] tracking-tight">
              Mühendislik Malzemeleri &amp; Yüksek Performanslı Polimerler
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
                <span>Filtreyi Temizle (Tümü: {PRODUCTS.length})</span>
              </button>
            )}
            <span className="px-3 py-1.5 rounded-xl bg-[#12141c] border border-[#434655]/40 font-mono text-xs text-[#8d90a0]">
              Kur: <strong className="text-[#00f0ff]">{currency}</strong> (+KDV Toptan)
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#181b24] border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-mono font-bold shadow-sm">
              Çayırova Ana Fabrika Depo
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
                Seçilen Kategoride Şu An Listelenen Ürün Bulunmuyor
              </h3>
              <p className="text-xs text-[#c3c6d7] mt-1.5 leading-relaxed">
                Bu malzeme grubu için Çayırova ana depomuzda özel ölçü takoz, blok veya çubuk stoklarımız mevcuttur. Lütfen teknik teklif formunu kullanarak talep iletiniz.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={onClearFilter}
                className="px-4 py-2 rounded-xl bg-[#181b24] hover:bg-[#222632] text-xs font-semibold text-[#e2e2e9] transition-colors cursor-pointer"
              >
                Tüm Ürünleri Göster
              </button>
              <button
                onClick={() => {
                  const elem = document.getElementById('rfq-formu');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2 rounded-xl bg-[#2563eb] hover:bg-[#0053db] text-xs font-bold text-white shadow-md transition-colors cursor-pointer"
              >
                Özel Ölçü Teklifi İste (RFQ)
              </button>
            </div>
          </div>
        ) : (
          /* Ürün Kartları Izgarası (Ultra-Pro Cyber Industrial Tasarım) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                id={`product-card-${prod.id}`}
                className="flex flex-col rounded-2xl bg-[#12141c] border border-[#434655]/35 overflow-hidden hover:border-[#00f0ff]/60 hover:shadow-[0_8px_32px_rgba(0,240,255,0.18)] hover:-translate-y-1.5 transition-all duration-300 group relative"
              >
                {/* Üst Görsel Alanı */}
                <div className="relative h-48 w-full bg-[#08090d] overflow-hidden">
                  {prod.imageUrl ? (
                    <img
                      src={prod.imageUrl}
                      alt={`${prod.name} - Üretici Tedarik Çayırova`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-[0.92] group-hover:brightness-100"
                    />
                  ) : prod.id === 'epoksi-fr4-levha' ? (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-950/80 via-[#12141c] to-[#181b24] flex flex-col items-center justify-center p-4">
                      <Memory className="w-16 h-16 text-[#00f0ff] opacity-50 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-mono text-[11px] text-[#00f0ff] mt-2 font-bold">FR-4 EPOXY LAMINATE</span>
                    </div>
                  ) : prod.id === 'peek-termoplastik' ? (
                    <div className="w-full h-full bg-gradient-to-br from-rose-950/80 via-[#12141c] to-[#181b24] flex flex-col items-center justify-center p-4">
                      <Cpu className="w-16 h-16 text-[#ffb4ab] opacity-50 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-mono text-[11px] text-[#ffb4ab] mt-2 font-bold">PEEK 450G HIGH-TEMP</span>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-950/70 via-[#12141c] to-[#181b24] flex flex-col items-center justify-center p-4">
                      <Maximize className="w-16 h-16 text-[#ffb77d] opacity-50 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-mono text-[11px] text-[#ffb77d] mt-2 font-bold">DESMADUR POLYURETHANE</span>
                    </div>
                  )}

                  {/* Görsel Üzeri Hafif Karartma Degradisi */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-black/30 pointer-events-none" />

                  {/* Rozetler */}
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-lg font-mono text-[10px] uppercase font-extrabold tracking-wider ${getBadgeStyle(
                      prod.badgeType
                    )}`}
                  >
                    {prod.badge}
                  </span>

                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-[#08090d]/90 text-[#e2e2e9] font-mono text-[10.5px] backdrop-blur-md border border-[#434655]/50 font-semibold">
                    {prod.secondaryBadge}
                  </span>

                  {/* DIN Normu Çipi */}
                  {prod.dinNorm && (
                    <span className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded bg-[#08090d]/90 text-[#00f0ff] font-mono text-[10px] border border-[#00f0ff]/30 backdrop-blur-md font-semibold">
                      {prod.dinNorm.split('/')[0]}
                    </span>
                  )}
                </div>

                {/* Bilgi Gövdesi */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 gap-3">
                  {/* Kategori & Kod */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#00f0ff] uppercase tracking-wider font-semibold">
                      {prod.category}
                    </span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#181b24] text-[#8d90a0] border border-[#434655]/30">
                      {prod.code}
                    </span>
                  </div>

                  {/* Ürün Başlığı */}
                  <h4
                    onClick={() => onOpenTds(prod.id)}
                    className="font-display text-[16px] text-[#e2e2e9] font-bold group-hover:text-[#00f0ff] transition-colors line-clamp-2 cursor-pointer leading-snug"
                    title={prod.name}
                  >
                    {prod.name}
                  </h4>

                  {/* Açıklama */}
                  <p className="text-[12px] text-[#c3c6d7] line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Mikro Teknik Parametreler Matrisi */}
                  <div className="grid grid-cols-2 gap-1.5 p-2.5 rounded-xl bg-[#08090d]/80 border border-[#434655]/30 font-mono text-[11px] mt-auto">
                    <div className="flex items-center gap-1.5 text-[#c3c6d7] truncate">
                      <Flame className="w-3 h-3 text-[#ffb77d] shrink-0" />
                      <span className="truncate">{prod.workingTemp.split('(')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#c3c6d7] truncate">
                      <Scale className="w-3 h-3 text-[#00f0ff] shrink-0" />
                      <span>{prod.density} g/cm³</span>
                    </div>
                    {prod.hardness && (
                      <div className="col-span-2 flex items-center gap-1.5 text-[#b4c5ff] pt-1 border-t border-[#434655]/20 truncate">
                        <span className="text-[#8d90a0] text-[10px]">Sertlik:</span>
                        <span className="font-bold truncate">{prod.hardness}</span>
                      </div>
                    )}
                  </div>

                  {/* Alt Aksiyon & Fiyat Çubuğu */}
                  <div className="pt-3 border-t border-[#434655]/30 flex items-center justify-between mt-1">
                    <div>
                      <span className="block font-mono text-[10px] text-[#8d90a0]">
                        {prod.priceDisplay.includes('–')
                          ? 'Fiyat Aralığı (+KDV)'
                          : 'Birim Fiyat'}
                      </span>
                      <span className="font-display text-[15px] sm:text-[16px] text-[#00f0ff] font-extrabold">
                        {getCurrencyDisplay(prod.priceDisplay)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        id={`product-tds-btn-${prod.id}`}
                        onClick={() => onOpenTds(prod.id)}
                        className="h-9 w-9 rounded-xl bg-[#181b24] hover:bg-[#222632] text-[#c3c6d7] hover:text-[#00f0ff] flex items-center justify-center transition-colors border border-[#434655]/40 cursor-pointer"
                        title="Teknik Şartname & Föy (TDS) Görüntüle"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        id={`product-rfq-btn-${prod.id}`}
                        onClick={() => onSelectProductForRfq(prod.id)}
                        className="h-9 px-3.5 rounded-xl bg-[#2563eb] hover:bg-[#0053db] text-white text-xs font-bold flex items-center gap-1.5 shadow-[0_0_16px_rgba(37,99,235,0.3)] transition-all cursor-pointer group-hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                      >
                        <span>{prod.actionText}</span>
                        <Send className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
