import React from 'react';
import {
  ChevronRight,
  Layers,
  Flame,
  Boxes,
  Maximize2,
  Wrench,
  ShieldAlert,
  Zap,
  Cpu,
  Activity,
  Grid,
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/materials';

interface CategoriesSectionProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
  onNavigateToRfq: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onNavigateToRfq,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Grid':
      default:
        return <Grid className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="katalog-bolumu"
      className="w-full bg-[#08090d]/80 border-y border-[#434655]/30 py-16 lg:py-20 relative"
    >
      <div className="w-full px-4 sm:px-6 mx-auto max-w-[90rem] flex flex-col gap-10">
        {/* Bölüm Başlığı & Açıklama */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#00f0ff]" />
              <span className="font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-wider">
                Hassas Malzeme Portföyü // 10 Ana Grup
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e2e2e9] tracking-tight">
              Endüstriyel Polimer &amp; Alaşımlı Metal Kategorileri
            </h2>
          </div>
          <p className="text-sm text-[#c3c6d7] max-w-lg leading-relaxed">
            Doğrudan Çayırova depomuzdan sertifikalı, yüksek toleranslı ve istenilen milimetrik ebatlarda kesime hazır endüstriyel polimer ve metal grupları.
          </p>
        </div>

        {/* 10'lu Kategori Izgarası (5x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const productCount = PRODUCTS.filter((p) => p.categoryId === cat.id).length;

            return (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex flex-col rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-lg cursor-pointer border relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#181b24] border-[#00f0ff] ring-1 ring-[#00f0ff] shadow-[0_0_24px_rgba(0,240,255,0.25)] -translate-y-1'
                    : 'bg-[#12141c] border-[#434655]/40 hover:border-[#2563eb]/70 hover:bg-[#181b24] hover:-translate-y-1'
                }`}
              >
                {/* Üst İkon & Kategori No & Ürün Sayacı */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-sm ${
                    isSelected ? 'bg-[#2563eb] text-white' : 'bg-[#1e222d] text-[#00f0ff]'
                  }`}>
                    {getIcon(cat.icon)}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-[#181b24] text-[#00f0ff] text-[10px] font-bold border border-[#00f0ff]/30">
                      {productCount} Ürün
                    </span>
                    <span className="text-[#8d90a0]">
                      #{cat.number}
                    </span>
                  </div>
                </div>

                {/* Kategori Başlığı */}
                <h3 className="font-display text-[16px] sm:text-[17px] text-[#e2e2e9] group-hover:text-[#00f0ff] transition-colors font-bold leading-snug">
                  {cat.name}
                </h3>

                {/* Açıklama */}
                <p className="text-[12px] text-[#c3c6d7] mt-2 mb-3.5 flex-1 leading-relaxed line-clamp-3">
                  {cat.description}
                </p>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cat.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#181b24] text-[#c3c6d7] font-mono text-[10px] border border-[#434655]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Aksiyon Linki */}
                <div className="pt-2.5 border-t border-[#434655]/20 flex items-center justify-between mt-auto">
                  <span className={`text-[11px] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center ${
                    isSelected ? 'text-[#00f0ff]' : 'text-[#8d90a0] group-hover:text-[#e2e2e9]'
                  }`}>
                    {isSelected ? 'Filtre Aktif' : 'Malzemeleri Listele'}
                  </span>
                  <ChevronRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                    isSelected ? 'text-[#00f0ff]' : 'text-[#8d90a0] group-hover:text-[#00f0ff]'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
