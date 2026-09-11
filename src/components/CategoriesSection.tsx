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
import { useLanguage } from '../context/LanguageContext';

interface CategoriesSectionProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
  onNavigateToRfq: (categoryId: string) => void;
  language?: 'tr' | 'en';
}

interface CategoryColorTheme {
  primary: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  iconBg: string;
  iconColor: string;
  borderHover: string;
  glowShadow: string;
  bgGradient: string;
}

const CATEGORY_THEMES: Record<string, CategoryColorTheme> = {
  'muhendislik-plastikleri': {
    primary: '#3b82f6',
    badgeBg: 'bg-[#3b82f6]/20',
    badgeText: 'text-[#93c5fd]',
    badgeBorder: 'border-[#3b82f6]/40',
    iconBg: 'bg-[#3b82f6]/15',
    iconColor: 'text-[#60a5fa]',
    borderHover: 'hover:border-[#3b82f6]',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    bgGradient: 'from-[#3b82f6]/10 to-transparent',
  },
  'teflon-ptfe': {
    primary: '#00f0ff',
    badgeBg: 'bg-[#00f0ff]/20',
    badgeText: 'text-[#a5f3fc]',
    badgeBorder: 'border-[#00f0ff]/40',
    iconBg: 'bg-[#00f0ff]/15',
    iconColor: 'text-[#00f0ff]',
    borderHover: 'hover:border-[#00f0ff]',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]',
    bgGradient: 'from-[#00f0ff]/10 to-transparent',
  },
  'pe1000-hdpe': {
    primary: '#10b981',
    badgeBg: 'bg-[#10b981]/20',
    badgeText: 'text-[#6ee7b7]',
    badgeBorder: 'border-[#10b981]/40',
    iconBg: 'bg-[#10b981]/15',
    iconColor: 'text-[#34d399]',
    borderHover: 'hover:border-[#10b981]',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
    bgGradient: 'from-[#10b981]/10 to-transparent',
  },
  'poliuretan-kalip': {
    primary: '#f59e0b',
    badgeBg: 'bg-[#f59e0b]/20',
    badgeText: 'text-[#fde68a]',
    badgeBorder: 'border-[#f59e0b]/40',
    iconBg: 'bg-[#f59e0b]/15',
    iconColor: 'text-[#fbbf24]',
    borderHover: 'hover:border-[#f59e0b]',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]',
    bgGradient: 'from-[#f59e0b]/10 to-transparent',
  },
  'civa-celigi': {
    primary: '#94a3b8',
    badgeBg: 'bg-[#94a3b8]/20',
    badgeText: 'text-[#e2e8f0]',
    badgeBorder: 'border-[#94a3b8]/40',
    iconBg: 'bg-[#94a3b8]/15',
    iconColor: 'text-[#cbd5e1]',
    borderHover: 'hover:border-[#cbd5e1]',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(148,163,184,0.3)]',
    bgGradient: 'from-[#94a3b8]/10 to-transparent',
  },
  'vinc-denge-5th-wheel': {
    primary: '#f97316',
    badgeBg: 'bg-[#f97316]/20',
    badgeText: 'text-[#fed7aa]',
    badgeBorder: 'border-[#f97316]/40',
    iconBg: 'bg-[#f97316]/15',
    iconColor: 'text-[#fb923c]',
    borderHover: 'hover:border-[#f97316]',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
    bgGradient: 'from-[#f97316]/10 to-transparent',
  },
  'epoksi-fr4-mikanit': {
    primary: '#a855f7',
    badgeBg: 'bg-[#a855f7]/20',
    badgeText: 'text-[#e9d5ff]',
    badgeBorder: 'border-[#a855f7]/40',
    iconBg: 'bg-[#a855f7]/15',
    iconColor: 'text-[#c084fc]',
    borderHover: 'hover:border-[#a855f7]',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    bgGradient: 'from-[#a855f7]/10 to-transparent',
  },
  'alasimli-bakir-bronz': {
    primary: '#d97706',
    badgeBg: 'bg-[#d97706]/20',
    badgeText: 'text-[#fde68a]',
    badgeBorder: 'border-[#d97706]/40',
    iconBg: 'bg-[#d97706]/15',
    iconColor: 'text-[#f59e0b]',
    borderHover: 'hover:border-[#d97706]',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(217,119,6,0.3)]',
    bgGradient: 'from-[#d97706]/10 to-transparent',
  },
  'yanmaz-kablo': {
    primary: '#ef4444',
    badgeBg: 'bg-[#ef4444]/20',
    badgeText: 'text-[#fca5a5]',
    badgeBorder: 'border-[#ef4444]/40',
    iconBg: 'bg-[#ef4444]/15',
    iconColor: 'text-[#f87171]',
    borderHover: 'hover:border-[#ef4444]',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]',
    bgGradient: 'from-[#ef4444]/10 to-transparent',
  },
  'eva-tatami': {
    primary: '#14b8a6',
    badgeBg: 'bg-[#14b8a6]/20',
    badgeText: 'text-[#99f6e4]',
    badgeBorder: 'border-[#14b8a6]/40',
    iconBg: 'bg-[#14b8a6]/15',
    iconColor: 'text-[#2dd4bf]',
    borderHover: 'hover:border-[#14b8a6]',
    glowShadow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]',
    bgGradient: 'from-[#14b8a6]/10 to-transparent',
  },
};

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onNavigateToRfq,
}) => {
  const { language, isEN, t: currentT } = useLanguage();
  const c = currentT.categories;

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
                {c.badge}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e2e2e9] tracking-tight">
              {c.title}
            </h2>
          </div>
          <p className="text-sm text-[#c3c6d7] max-w-lg leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* 10'lu Kategori Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const productCount = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
            const theme = CATEGORY_THEMES[cat.id] || CATEGORY_THEMES['muhendislik-plastikleri'];
            const categoryName = c.names[cat.id] || cat.name;
            const categoryDesc = c.descriptions[cat.id] || cat.description;

            return (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                style={{
                  borderColor: isSelected ? theme.primary : undefined,
                  boxShadow: isSelected ? `0 0 28px ${theme.primary}40` : undefined,
                }}
                className={`group flex flex-col rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-lg cursor-pointer border relative overflow-hidden bg-gradient-to-b ${
                  isSelected
                    ? `bg-[#181b24] ring-1 -translate-y-1`
                    : `bg-[#12141c] border-[#434655]/40 hover:bg-[#181b24] hover:-translate-y-1.5 ${theme.borderHover} ${theme.glowShadow}`
                } ${theme.bgGradient}`}
              >
                {/* Üst Renkli Çizgi */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                  style={{
                    backgroundColor: theme.primary,
                    opacity: isSelected ? 1 : 0.45,
                  }}
                />

                {/* Üst İkon & Kategori No & Ürün Sayacı */}
                <div className="flex items-center justify-between mb-3 mt-1">
                  <span
                    className={`p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-sm ${theme.iconBg} ${theme.iconColor}`}
                    style={{
                      boxShadow: `0 0 14px ${theme.primary}25`,
                    }}
                  >
                    {getIcon(cat.icon)}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold border ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}
                    >
                      {productCount} {isEN ? 'Products' : 'Ürün'}
                    </span>
                    <span className="text-[#8d90a0]">
                      #{cat.number}
                    </span>
                  </div>
                </div>

                {/* Kategori Başlığı */}
                <h3
                  className="font-display text-[16px] sm:text-[17px] text-[#e2e2e9] transition-colors font-bold leading-snug group-hover:drop-shadow-sm"
                  style={{
                    color: isSelected ? theme.primary : undefined,
                  }}
                >
                  {categoryName}
                </h3>

                {/* Açıklama */}
                <p className="text-[12px] text-[#c3c6d7] mt-2 mb-3.5 flex-1 leading-relaxed line-clamp-3">
                  {categoryDesc}
                </p>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cat.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#181b24]/90 text-[#e2e2e9] font-mono text-[10px] border border-[#434655]/40 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Aksiyon Linki */}
                <div className="pt-2.5 border-t border-[#434655]/25 flex items-center justify-between mt-auto">
                  <span
                    className="text-[11px] font-semibold group-hover:translate-x-0.5 transition-transform flex items-center"
                    style={{
                      color: isSelected ? theme.primary : undefined,
                    }}
                  >
                    {isSelected ? (isEN ? 'Filter Active' : 'Filtre Aktif') : c.viewProducts}
                  </span>
                  <ChevronRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    style={{
                      color: theme.primary,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
