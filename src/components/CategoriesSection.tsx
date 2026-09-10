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
import { CATEGORIES } from '../data/materials';

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

  const getAccentColor = (colorType: string) => {
    switch (colorType) {
      case 'primary':
        return 'text-[#b4c5ff] hover:border-[#2563eb]/60';
      case 'tertiary':
        return 'text-[#4cd7f6] hover:border-[#4cd7f6]/60';
      case 'secondary':
        return 'text-[#ffb77d] hover:border-[#d97707]/60';
      case 'surface-tint':
        return 'text-[#b4c5ff] hover:border-[#b4c5ff]/60';
      case 'error':
        return 'text-[#ffb4ab] hover:border-[#93000a]/60';
      default:
        return 'text-[#b4c5ff] hover:border-[#2563eb]/60';
    }
  };

  return (
    <section
      id="katalog-bolumu"
      className="w-full bg-[#0c0e13]/60 border-y border-[#434655]/30 py-16 lg:py-20"
    >
      <div className="w-full px-4 sm:px-6 mx-auto max-w-[90rem] flex flex-col gap-10">
        {/* Bölüm Başlığı & Açıklama */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#4cd7f6]" />
              <span className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider">
                Hassas Malzeme Portföyü
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e2e2e9] tracking-tight">
              Endüstriyel Kategoriler // Geniş Ürün Yelpazesi
            </h2>
          </div>
          <p className="text-sm text-[#c3c6d7] max-w-lg leading-relaxed">
            Doğrudan Çayırova ana depomuzdan sertifikalı, yüksek toleranslı ve
            istenilen milimetrik ebatlarda kesime hazır endüstriyel polimer ve
            metal grupları.
          </p>
        </div>

        {/* 10'lu Kategori Izgarası (5x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex flex-col rounded-xl p-4 transition-all duration-300 shadow-md cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1e1f25] border-[#2563eb] ring-1 ring-[#2563eb]'
                    : 'bg-[#1a1b21] border-[#434655]/30 hover:bg-[#1e1f25]'
                } ${getAccentColor(cat.colorType)}`}
              >
                {/* Üst İkon & Kategori No */}
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-lg bg-[#33353a] text-inherit transition-transform duration-200 group-hover:scale-110">
                    {getIcon(cat.icon)}
                  </span>
                  <span className="font-mono text-xs text-[#8d90a0]">
                    {cat.number}
                  </span>
                </div>

                {/* Kategori Başlığı */}
                <h3 className="font-display text-[17px] text-[#e2e2e9] group-hover:text-inherit transition-colors font-bold leading-tight">
                  {cat.name}
                </h3>

                {/* Açıklama */}
                <p className="text-[12px] text-[#c3c6d7] mt-1.5 mb-3 flex-1 leading-relaxed">
                  {cat.description}
                </p>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {cat.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 rounded bg-[#33353a] text-[#c3c6d7] font-mono text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Aksiyon Linki */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateToRfq(cat.id);
                  }}
                  className="inline-flex items-center text-xs font-semibold text-inherit group-hover:translate-x-1 transition-transform mt-auto text-left"
                >
                  <span>Teknik Detayları Gör</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
