import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  ChevronUp,
  ChevronDown,
  ArrowDown,
  Check,
  X,
  SlidersHorizontal,
  Flame,
  Boxes,
  Maximize2,
  Wrench,
} from 'lucide-react';
import { PRODUCTS } from '../data/materials';
import { useLanguage } from '../context/LanguageContext';

interface MaterialShortcutFabProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null, shouldScroll?: boolean) => void;
  onSelectProductForRfq: (productId: string) => void;
}

interface CommonMaterial {
  id: string | null;
  label: string;
  shortLabel: string;
  badge: string;
  sampleProductId: string;
  iconName: string;
}

const COMMON_MATERIALS_TR: CommonMaterial[] = [
  {
    id: null,
    label: 'Tümü',
    shortLabel: 'Tümü',
    badge: 'Tüm Liste',
    sampleProductId: 'pe-1000-levha',
    iconName: 'Sparkles',
  },
  {
    id: 'teflon-ptfe',
    label: 'Teflon (PTFE)',
    shortLabel: 'Teflon',
    badge: '260°C Isı',
    sampleProductId: 'saf-teflon-levha',
    iconName: 'Flame',
  },
  {
    id: 'muhendislik-plastikleri',
    label: 'Polyamid (Kestamit)',
    shortLabel: 'Polyamid',
    badge: 'PA6G / Delrin',
    sampleProductId: 'cast-polyamid-kestamit',
    iconName: 'Layers',
  },
  {
    id: 'pe1000-hdpe',
    label: 'UHMWPE (PE 1000)',
    shortLabel: 'UHMWPE',
    badge: 'Aşınma Direnci',
    sampleProductId: 'pe-1000-levha',
    iconName: 'Boxes',
  },
  {
    id: 'civa-celigi',
    label: 'Civa Çeliği H8',
    shortLabel: 'Civa Çeliği',
    badge: '1.2210 Mil',
    sampleProductId: 'civa-celigi-h8',
    iconName: 'Wrench',
  },
  {
    id: 'poliuretan-kalip',
    label: 'Poliüretan (PU)',
    shortLabel: 'Poliüretan',
    badge: '90-95 Shore',
    sampleProductId: 'poliuretan-pu-desmadur',
    iconName: 'Maximize2',
  },
];

const COMMON_MATERIALS_EN: CommonMaterial[] = [
  {
    id: null,
    label: 'All Materials',
    shortLabel: 'All',
    badge: 'Full Catalog',
    sampleProductId: 'pe-1000-levha',
    iconName: 'Sparkles',
  },
  {
    id: 'teflon-ptfe',
    label: 'PTFE Teflon',
    shortLabel: 'PTFE',
    badge: '260°C Heat',
    sampleProductId: 'saf-teflon-levha',
    iconName: 'Flame',
  },
  {
    id: 'muhendislik-plastikleri',
    label: 'Polyamide (Cast Nylon)',
    shortLabel: 'PA6G',
    badge: 'PA6G / Delrin',
    sampleProductId: 'cast-polyamid-kestamit',
    iconName: 'Layers',
  },
  {
    id: 'pe1000-hdpe',
    label: 'UHMWPE (PE 1000)',
    shortLabel: 'UHMWPE',
    badge: 'Wear Resistance',
    sampleProductId: 'pe-1000-levha',
    iconName: 'Boxes',
  },
  {
    id: 'civa-celigi',
    label: 'Silver Steel H8',
    shortLabel: 'Silver Steel',
    badge: '1.2210 Rod',
    sampleProductId: 'civa-celigi-h8',
    iconName: 'Wrench',
  },
  {
    id: 'poliuretan-kalip',
    label: 'Polyurethane (PU)',
    shortLabel: 'PU Elastomer',
    badge: '90-95 Shore',
    sampleProductId: 'poliuretan-pu-desmadur',
    iconName: 'Maximize2',
  },
];

export const MaterialShortcutFab: React.FC<MaterialShortcutFabProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProductForRfq,
}) => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const materialsList = isEn ? COMMON_MATERIALS_EN : COMMON_MATERIALS_TR;

  const [isExpanded, setIsExpanded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [lastSelectedName, setLastSelectedName] = useState<string>('');

  const activeMaterial =
    materialsList.find((m) => m.id === selectedCategory) ||
    materialsList[0];

  const filteredCount = selectedCategory
    ? PRODUCTS.filter((p) => p.categoryId === selectedCategory).length
    : PRODUCTS.length;

  const handleToggleMaterial = (mat: CommonMaterial) => {
    // Crucial: toggles without scrolling! If already active, toggle back to null (all)
    const targetId = selectedCategory === mat.id && mat.id !== null ? null : mat.id;
    onSelectCategory(targetId, false);
    setLastSelectedName(targetId ? mat.label : (isEn ? 'All (Full List)' : 'Tümü (Tüm Liste)'));
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2800);
  };

  const handleScrollToProducts = () => {
    const elem = document.getElementById('urunler-bolumu');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      id="material-shortcut-dock"
      aria-label={isEn ? "Quick Material Selector Bar" : "Hızlı Malzeme Seçim Çubuğu"}
      className="fixed bottom-5 left-4 sm:left-6 z-40 flex flex-col items-start gap-2 pointer-events-auto select-none"
    >
      {/* 1. Anlık Geri Bildirim Bildirimi */}
      {showNotification && (
        <div
          id="material-fab-toast"
          role="status"
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0c0e13]/95 border border-[#2563eb]/60 text-xs text-[#e2e2e9] shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2"
        >
          <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping" />
          <span className="font-mono text-[11px] text-[#4cd7f6]">
            {isEn ? 'Active Filter:' : 'Aktif Malzeme:'}
          </span>
          <span className="font-bold text-[#b4c5ff]">{lastSelectedName}</span>
          <span className="text-[#8d90a0]">({filteredCount} {isEn ? 'Items' : 'Ürün'})</span>
          <button
            id="fab-toast-scroll-btn"
            onClick={handleScrollToProducts}
            className="ml-1 text-[11px] text-[#4cd7f6] hover:underline flex items-center gap-0.5 font-medium"
          >
            <span>{isEn ? 'Show' : 'Göster'}</span>
            <ArrowDown className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* 2. Genişletilmiş Kısayol Menüsü (Açılır Liste) */}
      {isExpanded && (
        <div
          id="material-shortcut-expanded-menu"
          className="w-72 sm:w-80 rounded-2xl bg-[#0c0e13]/95 border border-[#434655]/60 p-3 shadow-2xl backdrop-blur-xl mb-1 flex flex-col gap-1.5 animate-in fade-in slide-in-from-bottom-3"
        >
          <div className="flex items-center justify-between pb-2 mb-1 border-b border-[#434655]/30 px-1.5">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#4cd7f6]" />
              <span className="font-display text-xs font-bold text-[#e2e2e9] tracking-wide">
                {isEn ? 'Quick Material Selector' : 'Hızlı Malzeme Değiştirici'}
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#8d90a0]">
              {isEn ? 'No-Scroll Filter' : 'Kaydırmasız Filtre'}
            </span>
          </div>

          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto pr-0.5">
            {materialsList.map((mat) => {
              const isSelected = selectedCategory === mat.id;
              return (
                <button
                  key={mat.label}
                  id={`fab-menu-item-${mat.shortLabel.toLowerCase()}`}
                  onClick={() => handleToggleMaterial(mat)}
                  className={`flex items-center justify-between p-2 rounded-xl text-xs transition-all text-left ${
                    isSelected
                      ? 'bg-[#2563eb]/20 text-[#eeefff] border border-[#2563eb]/60 font-semibold'
                      : 'hover:bg-[#1e1f25] text-[#c3c6d7] hover:text-[#e2e2e9] border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? 'bg-[#4cd7f6]' : 'bg-[#434655]'
                      }`}
                    />
                    <div>
                      <span className="block font-medium">{mat.label}</span>
                      <span className="font-mono text-[10px] text-[#8d90a0]">
                        {mat.badge}
                      </span>
                    </div>
                  </div>

                  {isSelected ? (
                    <Check className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                  ) : (
                    <span className="font-mono text-[10px] text-[#8d90a0]">
                      {isEn ? 'Select' : 'Seç'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 mt-1 border-t border-[#434655]/25 flex items-center justify-between px-1">
            <button
              id="fab-jump-to-catalog-btn"
              onClick={handleScrollToProducts}
              className="text-[11px] text-[#4cd7f6] hover:text-[#b4c5ff] flex items-center gap-1 font-medium transition-colors"
            >
              <ArrowDown className="w-3.5 h-3.5" />
              <span>{isEn ? `Go to Products (${filteredCount})` : `Ürün Listesine Git (${filteredCount})`}</span>
            </button>
            <button
              id="fab-close-menu-btn"
              onClick={() => setIsExpanded(false)}
              className="text-[11px] text-[#8d90a0] hover:text-[#e2e2e9]"
            >
              {isEn ? 'Close' : 'Kapat'}
            </button>
          </div>
        </div>
      )}

      {/* 3. Ana Yüzen Çubuk (Floating Action Dock) */}
      <div
        id="material-fab-container"
        className="flex items-center p-1.5 rounded-2xl bg-[#0c0e13]/95 border border-[#434655]/60 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl gap-1 max-w-[calc(100vw-2rem)]"
      >
        {/* FAB Başlık / Genişletici Butonu */}
        <button
          id="material-fab-toggle-btn"
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 h-9 px-3 rounded-xl bg-[#1e1f25] hover:bg-[#282a2f] text-[#e2e2e9] text-xs font-semibold border border-[#434655]/40 transition-colors cursor-pointer group"
          title={isEn ? "Expand or collapse material menu" : "Malzeme menüsünü genişlet veya daralt"}
        >
          <Layers className="w-4 h-4 text-[#4cd7f6] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-mono text-[11px] text-[#c3c6d7]">
            {isEn ? 'Material:' : 'Malzeme:'}
          </span>
          <span className="text-[#b4c5ff] font-bold max-w-[90px] sm:max-w-none truncate">
            {activeMaterial.shortLabel}
          </span>
          {isExpanded ? (
            <ChevronDown className="w-3.5 h-3.5 text-[#8d90a0]" />
          ) : (
            <ChevronUp className="w-3.5 h-3.5 text-[#8d90a0]" />
          )}
        </button>

        {/* Doğrudan Tek Dokunuşla Değiştirme Butonları */}
        <div
          id="material-fab-quick-chips"
          className="flex items-center gap-1 overflow-x-auto no-scrollbar"
        >
          {materialsList.slice(1, 4).map((mat) => {
            const isSelected = selectedCategory === mat.id;
            return (
              <button
                key={mat.id}
                id={`fab-quick-chip-${mat.shortLabel.toLowerCase()}`}
                onClick={() => handleToggleMaterial(mat)}
                className={`h-9 px-2.5 sm:px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2563eb] text-white shadow-[0_0_14px_rgba(37,99,235,0.5)] scale-[1.02]'
                    : 'bg-[#1a1b21] hover:bg-[#282a2f] text-[#c3c6d7] hover:text-[#e2e2e9] border border-[#434655]/30'
                }`}
                title={isEn ? `Filter by ${mat.label}` : `${mat.label} filtresine geç`}
              >
                <span>{mat.shortLabel}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#acedff]" />
                )}
              </button>
            );
          })}

          {/* Tümü (Filtreyi Temizle) */}
          {selectedCategory !== null && (
            <button
              id="fab-quick-chip-reset"
              onClick={() => handleToggleMaterial(materialsList[0])}
              className="h-9 px-2 sm:px-2.5 rounded-xl text-xs font-medium text-[#8d90a0] hover:text-[#ffb4ab] hover:bg-[#1e1f25] border border-transparent transition-colors flex items-center gap-1"
              title={isEn ? 'Clear Filter (Show All)' : 'Filtreyi Temizle (Tümünü Göster)'}
            >
              <X className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{isEn ? 'All' : 'Tümü'}</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
