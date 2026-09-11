import React, { useState } from 'react';
import {
  Search,
  FileText,
  Zap,
  MessageCircle,
  User,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { LOGO_URL, COMPANY_INFO } from '../data/materials';
import { CompanyLogo } from './CompanyLogo';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenCatalog: () => void;
  onOpenContact?: () => void;
  onSelectCategoryFilter?: (catId: string) => void;
  onOpenTds?: (productId: string) => void;
  language?: Language;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenCatalog,
  onOpenContact,
  onSelectCategoryFilter,
  onOpenTds,
  language = 'tr',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const t = TRANSLATIONS[language].header;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, categoryId?: string) => {
    if (categoryId && onSelectCategoryFilter) {
      onSelectCategoryFilter(categoryId);
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleProductItemClick = (productId: string, categoryId?: string) => {
    if (categoryId && onSelectCategoryFilter) {
      onSelectCategoryFilter(categoryId);
    }
    if (onOpenTds) {
      onOpenTds(productId);
    } else {
      handleNavClick('urunler-bolumu', categoryId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      id="main-header-bar"
      className="w-full select-none"
    >
      <div className="h-16 lg:h-17 w-full px-4 sm:px-6 mx-auto max-w-[92rem] flex items-center justify-between gap-2.5 lg:gap-3">
        {/* 1. Logo & Şirket Başlığı (Orijinal Amblem & Prestijli Başlık) */}
        <button
          id="header-brand-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 shrink-0 cursor-pointer text-left bg-transparent border-none p-0 mr-1"
        >
          <CompanyLogo
            className="h-9 sm:h-10"
            showText={true}
            showSlogan={false}
          />
        </button>

        {/* 2. Masaüstü Navigasyon - Göz Yormayan Tek Satır Düzenli Pill Menüsü (Esnek & Taşmaz) */}
        <nav
          id="desktop-navigation-menu"
          className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-[#12141c]/90 border border-[#434655]/35 p-1 rounded-xl shadow-inner shrink min-w-0"
        >
          {/* 1: Mühendislik Plastikleri */}
          <div className="relative group">
            <button
              id="nav-dropdown-plastics"
              className="px-2 xl:px-2.5 py-1.5 rounded-lg text-[12px] xl:text-[12.5px] font-semibold text-[#c3c6d7] hover:text-[#e2e2e9] hover:bg-[#181b24] group-hover:text-[#38bdf8] group-hover:bg-[#181b24] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shrink-0" />
              <span>{t.engineeringPlastics}</span>
              <ChevronDown className="w-3 h-3 text-[#8d90a0] group-hover:rotate-180 group-hover:text-[#38bdf8] transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col w-72 p-2 bg-[#0e1017]/98 border border-[#3b82f6]/40 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl z-50 animate-in fade-in-50 slide-in-from-top-1">
              <div className="h-0.5 w-full bg-gradient-to-r from-[#2563eb] to-[#38bdf8] rounded-t-xl -mt-2 mb-1.5" />
              <button
                onClick={() =>
                  handleProductItemClick('cast-polyamid-kestamit', 'muhendislik-plastikleri')
                }
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#60a5fa] group-hover/item:text-[#93c5fd] flex items-center justify-between">
                  Cast Polyamid (Kestamit PA6G)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Sarı/Natürel Levha, Takoz &amp; Çubuk (82 Shore D)
                </span>
              </button>
              <button
                onClick={() =>
                  handleProductItemClick('pom-c-delrin', 'muhendislik-plastikleri')
                }
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#e2e2e9] group-hover/item:text-[#38bdf8] flex items-center justify-between">
                  POM-C Delrin (Polioksimetilen)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Beyaz &amp; Siyah Sıfır Nem Emici CNC Poliasetal
                </span>
              </button>
              <button
                onClick={() => handleProductItemClick('pe-1000-levha', 'pe1000-hdpe')}
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#34d399] group-hover/item:text-[#6ee7b7] flex items-center justify-between">
                  PE 1000 (Ulpolen UHMWPE)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Aşınma Plakaları &amp; Konveyör Kızağı (FDA Gıda)
                </span>
              </button>
              <button
                onClick={() => handleProductItemClick('peek-termoplastik', 'muhendislik-plastikleri')}
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#f87171] group-hover/item:text-[#fca5a5] flex items-center justify-between">
                  PEEK Termoplastik (+260°C)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Havacılık, Savunma ve Medikal Ekstrem Polimer
                </span>
              </button>
            </div>
          </div>

          {/* 2: Yüksek Isı & Yalıtım */}
          <div className="relative group">
            <button
              id="nav-dropdown-insulation"
              className="px-2 xl:px-2.5 py-1.5 rounded-lg text-[12px] xl:text-[12.5px] font-semibold text-[#c3c6d7] hover:text-[#e2e2e9] hover:bg-[#181b24] group-hover:text-[#c084fc] group-hover:bg-[#181b24] transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shrink-0" />
              <span>{t.highTempInsulation}</span>
              <ChevronDown className="w-3 h-3 text-[#8d90a0] group-hover:rotate-180 group-hover:text-[#c084fc] transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col w-72 p-2 bg-[#0e1017]/98 border border-[#a855f7]/40 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl z-50 animate-in fade-in-50 slide-in-from-top-1">
              <div className="h-0.5 w-full bg-gradient-to-r from-[#7e22ce] to-[#c084fc] rounded-t-xl -mt-2 mb-1.5" />
              <button
                onClick={() =>
                  handleProductItemClick('epoksi-fr4-levha', 'epoksi-fr4-mikanit')
                }
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#c084fc] group-hover/item:text-[#e9d5ff] flex items-center justify-between">
                  Epoksi FR4 Yeşil Levha &amp; Çubuk
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Sınıf F Yüksek Gerilim &amp; Ark İzolasyonu (&gt;14 kV/mm)
                </span>
              </button>
              <button
                onClick={() =>
                  handleProductItemClick('mikanit-levha-500c', 'epoksi-fr4-mikanit')
                }
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#fbbf24] group-hover/item:text-[#fde68a] flex items-center justify-between">
                  Mikanit Levha (500°C - 700°C Isı)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Muskovit &amp; Flogopit Fırın Rezistans İzolasyonu
                </span>
              </button>
              <button
                onClick={() => handleProductItemClick('silikon-levha-contalar', 'teflon-ptfe')}
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#f87171] group-hover/item:text-[#fca5a5] flex items-center justify-between">
                  Silikon Levha &amp; Contalar (+250°C)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Gıda &amp; İlaç Onaylı Kırmızı/Şeffaf Fırın Contası
                </span>
              </button>
              <button
                onClick={() =>
                  handleProductItemClick('fenolik-pamuklu-bezli-fiber', 'epoksi-fr4-mikanit')
                }
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#e2e2e9] group-hover/item:text-[#38bdf8] flex items-center justify-between">
                  Fenolik Pamuklu Bezli Fiber (HGW 2082)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Sessiz Dişli &amp; Ağır Mekanik Yatak Plakaları
                </span>
              </button>
            </div>
          </div>

          {/* 3: Ağır Sanayi */}
          <div className="relative group">
            <button
              id="nav-dropdown-heavy-industry"
              className="px-2 xl:px-2.5 py-1.5 rounded-lg text-[12px] xl:text-[12.5px] font-semibold text-[#c3c6d7] hover:text-[#e2e2e9] hover:bg-[#181b24] group-hover:text-[#fbbf24] group-hover:bg-[#181b24] transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" />
              <span>{t.heavyIndustry}</span>
              <ChevronDown className="w-3 h-3 text-[#8d90a0] group-hover:rotate-180 group-hover:text-[#fbbf24] transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col w-72 p-2 bg-[#0e1017]/98 border border-[#f59e0b]/40 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl z-50 animate-in fade-in-50 slide-in-from-top-1">
              <div className="h-0.5 w-full bg-gradient-to-r from-[#b45309] to-[#fbbf24] rounded-t-xl -mt-2 mb-1.5" />
              <button
                onClick={() =>
                  handleProductItemClick('vinc-ayak-denge-takozu', 'vinc-denge-5th-wheel')
                }
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#fbbf24] group-hover/item:text-[#fde68a] flex items-center justify-between">
                  Vinç Ayak Denge Destek Takozu (75T)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Kırılmaz Yüksek Yoğunluklu Polimer Pabuç Tablası
                </span>
              </button>
              <button
                onClick={() =>
                  handleProductItemClick('besinci-teker-kaydirici', 'vinc-denge-5th-wheel')
                }
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#e2e2e9] group-hover/item:text-[#38bdf8] flex items-center justify-between">
                  Beşinci Teker Kaydırıcı (Fifth Wheel)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Çekici Dorse Tablası Yağsız Polimer Aşınma Kiti
                </span>
              </button>
              <button
                onClick={() => handleProductItemClick('civa-celigi-h8', 'civa-celigi')}
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#cbd5e1] group-hover/item:text-white flex items-center justify-between">
                  Civa Çeliği H8 (1.2210 / 115CrV3)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Taşlanmış Kalıp Pimi, Zımba &amp; Mil (64 HRC)
                </span>
              </button>
              <button
                onClick={() =>
                  handleProductItemClick('poliuretan-pu-desmadur', 'poliuretan-kalip')
                }
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#f59e0b] group-hover/item:text-[#fbbf24] flex items-center justify-between">
                  Poliüretan Kalıp Yayları (Desmadur)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  90 Shore A Döküm Elastomer Çubuk ve Yaylar
                </span>
              </button>
            </div>
          </div>

          {/* 4: Alaşım & Kablo */}
          <div className="relative group">
            <button
              id="nav-dropdown-alloys"
              className="px-2 xl:px-2.5 py-1.5 rounded-lg text-[12px] xl:text-[12.5px] font-semibold text-[#c3c6d7] hover:text-[#e2e2e9] hover:bg-[#181b24] group-hover:text-[#f87171] group-hover:bg-[#181b24] transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] shrink-0" />
              <span>{t.alloysCables}</span>
              <ChevronDown className="w-3 h-3 text-[#8d90a0] group-hover:rotate-180 group-hover:text-[#f87171] transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col w-72 p-2 bg-[#0e1017]/98 border border-[#ef4444]/40 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl z-50 animate-in fade-in-50 slide-in-from-top-1">
              <div className="h-0.5 w-full bg-gradient-to-r from-[#b91c1c] to-[#f87171] rounded-t-xl -mt-2 mb-1.5" />
              <button
                onClick={() =>
                  handleProductItemClick('alasimli-aluminyum-bronz', 'alasimli-bakir-bronz')
                }
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#f87171] group-hover/item:text-[#fca5a5] flex items-center justify-between">
                  Alaşımlı Bakır &amp; Bronz Burçlar
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  CuAl10Ni5Fe4 Ağır Yük &amp; Deniz Suyu Yatakları
                </span>
              </button>
              <button
                onClick={() => handleProductItemClick('yanmaz-nikel-kablo', 'yanmaz-kablo')}
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#f87171] group-hover/item:text-[#fca5a5] flex items-center justify-between">
                  Yanmaz Nikel Kaplı Kablo (400°C)
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Cam Elyaf Silikon Örgülü Rezistans &amp; Fırın Hattı
                </span>
              </button>
              <button
                onClick={() => handleProductItemClick('eva-tatami-zemin', 'eva-tatami')}
                className="px-3 py-2 text-left rounded-xl hover:bg-[#181b24] text-xs text-[#e2e2e9] transition-colors flex flex-col group/item cursor-pointer"
              >
                <span className="font-bold text-[#34d399] group-hover/item:text-[#6ee7b7] flex items-center justify-between">
                  Eva Rulo &amp; 26mm Tatami Zemin
                  <span className="text-[10px] font-mono text-[#38bdf8] opacity-0 group-hover/item:opacity-100 transition-opacity">TDS Föyü ↗</span>
                </span>
                <span className="text-[11px] text-[#8d90a0] mt-0.5">
                  Darbe Sönümleyici Kilitli Endüstriyel Zemin Matı
                </span>
              </button>
            </div>
          </div>

          <div className="h-4 w-[1px] bg-[#434655]/40 mx-0.5" />

          {/* 5: Katalog */}
          <button
            id="nav-catalog-btn"
            onClick={onOpenCatalog}
            className="px-2 xl:px-2.5 py-1.5 rounded-lg text-[12px] xl:text-[12.5px] font-semibold text-[#38bdf8] hover:bg-[#181b24] transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>{t.catalog}</span>
          </button>
        </nav>

        {/* 3. Sağ Taraf: Esnek Arama + Sepet + Hızlı RFQ + İletişim (ASLA TAŞMAZ) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 ml-auto">
          {/* Masaüstü Geniş Arama Kutusu (>= 1380px) */}
          <div
            id="search-command-palette-trigger"
            onClick={onOpenSearch}
            className="hidden min-[1380px]:flex items-center h-9 px-3 rounded-xl bg-[#12141c] border border-[#434655]/40 hover:border-[#38bdf8]/50 hover:shadow-[0_0_12px_rgba(56,189,248,0.15)] transition-all cursor-pointer w-40 shrink-0 group"
            title={`${t.searchPlaceholder} (⌘K)`}
          >
            <Search className="w-3.5 h-3.5 text-[#8d90a0] group-hover:text-[#38bdf8] mr-2 shrink-0 transition-colors" />
            <span className="text-xs text-[#8d90a0] group-hover:text-[#c3c6d7] truncate">
              {t.searchPlaceholder}
            </span>
            <kbd className="inline-flex items-center font-mono text-[9.5px] px-1.5 py-0.5 rounded bg-[#181b24] text-[#8d90a0] border border-[#434655]/40 ml-auto group-hover:border-[#38bdf8]/30 group-hover:text-[#38bdf8]">
              ⌘K
            </kbd>
          </div>

          {/* Laptop & Mobil Kompakt Arama İkonu (< 1380px) */}
          <button
            id="compact-search-btn"
            onClick={onOpenSearch}
            className="min-[1380px]:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-[#12141c] hover:bg-[#181b24] text-[#8d90a0] hover:text-[#38bdf8] border border-[#434655]/40 transition-colors cursor-pointer shrink-0"
            title={`${t.searchPlaceholder} (⌘K)`}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Teklif Sepetim (RFQ Basket) */}
          <button
            id="header-rfq-cart-btn"
            onClick={onOpenCart}
            className="relative flex items-center justify-center h-9 px-2.5 sm:px-3 rounded-xl bg-[#141824] hover:bg-[#1e2333] border border-[#434655]/40 text-[#e2e2e9] transition-all cursor-pointer shrink-0"
            title={t.rfqCart}
          >
            <FileText className="w-4 h-4 text-[#38bdf8]" />
            <span className="hidden sm:inline-block ml-1.5 text-xs font-semibold text-[#e2e2e9]">
              {t.rfqCart}
            </span>
            {cartCount > 0 && (
              <span
                id="header-rfq-cart-badge"
                className="ml-1.5 flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-[#d97707] text-white text-[10px] font-bold shadow-md animate-pulse"
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Hızlı RFQ Butonu */}
          <button
            id="header-quick-rfq-btn"
            onClick={() => handleNavClick('rfq-formu')}
            className="flex items-center justify-center h-9 px-3 sm:px-4 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all cursor-pointer shrink-0"
            title={t.quickRfq}
          >
            <Zap className="w-3.5 h-3.5 mr-1 text-[#acedff]" />
            <span>{t.quickRfq}</span>
          </button>

          {/* B2B İletişim Butonu */}
          <button
            id="header-contact-btn"
            onClick={onOpenContact || (() => handleNavClick('rfq-formu'))}
            className="hidden sm:flex items-center justify-center h-9 px-3 rounded-xl bg-[#121520] hover:bg-[#1a1f2e] border border-[#38bdf8]/40 hover:border-[#38bdf8] text-[#38bdf8] hover:text-white font-semibold text-xs transition-all cursor-pointer shrink-0 gap-1"
            title={t.contact}
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>{t.contact}</span>
          </button>

          {/* Mobil Menü Butonu */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#1e1f25] text-[#e2e2e9] border border-[#434655]/40"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-[#111318] border-b border-[#434655]/40 px-4 py-4 flex flex-col gap-2"
        >
          <button
            onClick={() => {
              onOpenSearch();
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1a1b21] text-[#c3c6d7] text-left text-xs"
          >
            <Search className="w-4 h-4 text-[#8d90a0]" />
            <span>Malzeme veya DIN Ara...</span>
          </button>
          <button
            onClick={() => handleNavClick('katalog-bolumu')}
            className="flex items-center justify-between p-2.5 rounded-lg text-left text-sm font-medium text-[#e2e2e9] hover:bg-[#1e1f25]"
          >
            <span>Tüm Endüstriyel Kategoriler</span>
          </button>
          <button
            onClick={() => handleNavClick('rfq-formu')}
            className="flex items-center justify-between p-2.5 rounded-lg text-left text-sm font-medium text-[#b4c5ff] hover:bg-[#1e1f25]"
          >
            <span>Teknik Teklif & RFQ Hesaplayıcı</span>
          </button>
          <button
            onClick={() => {
              onOpenCatalog();
              setMobileMenuOpen(false);
            }}
            className="flex items-center justify-between p-2.5 rounded-lg text-left text-sm font-medium text-[#4cd7f6] hover:bg-[#1e1f25]"
          >
            <span>2025 Teknik Ürün Kataloğu (PDF)</span>
          </button>
          <button
            onClick={() => handleNavClick('kurumsal-bolum')}
            className="flex items-center justify-between p-2.5 rounded-lg text-left text-sm font-medium text-[#e2e2e9] hover:bg-[#1e1f25]"
          >
            <span>Kurumsal & Hakkımızda</span>
          </button>
          <button
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                handleNavClick('rfq-formu');
              }
              setMobileMenuOpen(false);
            }}
            className="flex items-center justify-between p-2.5 rounded-lg text-left text-sm font-semibold text-[#00f0ff] hover:bg-[#1e1f25]"
          >
            <span>B2B Teklif & İletişim Formu</span>
          </button>
        </div>
      )}
    </div>
  );
};
