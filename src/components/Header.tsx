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

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenCatalog: () => void;
  onSelectCategoryFilter?: (catId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenCatalog,
  onSelectCategoryFilter,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header
      id="main-header"
      className="sticky top-0 left-0 right-0 z-40 bg-[#0c0e13]/95 backdrop-blur-xl border-b border-[#434655]/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all"
    >
      <div className="h-20 w-full px-4 sm:px-6 mx-auto max-w-[90rem] flex items-center justify-between gap-4">
        {/* Logo & Şirket Başlığı (Resmi Amblem ve Fabrika Çizimi) */}
        <button
          id="header-brand-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group shrink-0 cursor-pointer text-left bg-transparent border-none p-0"
        >
          <CompanyLogo
            className="h-10 sm:h-11"
            showText={true}
            showSlogan={true}
          />
        </button>


        {/* ⌘K Hızlı Arama Butonu (Command Palette Trigger) */}
        <button
          id="search-command-palette-trigger"
          type="button"
          onClick={onOpenSearch}
          className="hidden xl:flex items-center h-10 px-3.5 rounded-lg bg-[#1a1b21] text-[#c3c6d7] w-72 2xl:w-80 border border-[#434655]/40 hover:border-[#b4c5ff]/60 hover:bg-[#1e1f25] transition-all cursor-pointer text-left group"
        >
          <Search className="w-4 h-4 text-[#8d90a0] group-hover:text-[#b4c5ff] mr-2 shrink-0 transition-colors" />
          <span className="text-[13px] text-[#8d90a0] flex-1 truncate group-hover:text-[#c3c6d7]">
            Malzeme adı, DIN normu veya ebat ara...
          </span>
          <kbd className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-[#33353a] text-[#c3c6d7] border border-[#434655]/40">
            ⌘K
          </kbd>
        </button>

        {/* Masaüstü Navigasyon & Dropdown Menüler */}
        <nav
          id="desktop-navigation-menu"
          className="hidden lg:flex items-center gap-1 xl:gap-2"
        >
          {/* Dropdown 1: Mühendislik Plastikleri */}
          <div className="relative group">
            <button
              id="nav-dropdown-plastics"
              className="px-3 py-2 text-[14px] text-[#c3c6d7] hover:text-[#e2e2e9] group-hover:text-[#b4c5ff] transition-colors flex items-center gap-1 font-medium"
            >
              <span>Mühendislik Plastikleri</span>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-72 p-2 bg-[#1a1b21] border border-[#434655]/50 rounded-xl shadow-2xl z-50 animate-in fade-in-50 slide-in-from-top-1">
              <button
                onClick={() =>
                  handleNavClick('katalog-bolumu', 'muhendislik-plastikleri')
                }
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors flex flex-col"
              >
                <span className="font-semibold text-[#b4c5ff]">
                  Cast Polyamid (Kestamit)
                </span>
                <span className="text-[11px] text-[#c3c6d7]">
                  PA6G Levha, Takoz ve Çubuklar
                </span>
              </button>
              <button
                onClick={() =>
                  handleNavClick('katalog-bolumu', 'muhendislik-plastikleri')
                }
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors flex flex-col"
              >
                <span className="font-semibold">POM-C Delrin</span>
                <span className="text-[11px] text-[#c3c6d7]">
                  Beyaz & Siyah Çubuk / Levha
                </span>
              </button>
              <button
                onClick={() => handleNavClick('katalog-bolumu', 'pe1000-hdpe')}
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors flex flex-col"
              >
                <span className="font-semibold">Polietilen HDPE & PE 1000</span>
                <span className="text-[11px] text-[#c3c6d7]">
                  Ulpolen UHMWPE Levhalar
                </span>
              </button>
              <button
                onClick={() => handleNavClick('katalog-bolumu', 'teflon-ptfe')}
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors flex flex-col"
              >
                <span className="font-semibold text-[#4cd7f6]">
                  Teflon (PTFE) Serisi
                </span>
                <span className="text-[11px] text-[#c3c6d7]">
                  A-Class Saf Levha, Şerit & Çubuk
                </span>
              </button>
            </div>
          </div>

          {/* Dropdown 2: Yüksek Isı & Yalıtım */}
          <div className="relative group">
            <button
              id="nav-dropdown-insulation"
              className="px-3 py-2 text-[14px] text-[#c3c6d7] hover:text-[#e2e2e9] group-hover:text-[#b4c5ff] transition-colors flex items-center gap-1 font-medium"
            >
              <span>Yüksek Isı & Yalıtım</span>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-64 p-2 bg-[#1a1b21] border border-[#434655]/50 rounded-xl shadow-2xl z-50 animate-in fade-in-50 slide-in-from-top-1">
              <button
                onClick={() =>
                  handleNavClick('katalog-bolumu', 'epoksi-fr4-mikanit')
                }
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Epoksi FR4 Levha & Çubuk
              </button>
              <button
                onClick={() =>
                  handleNavClick('katalog-bolumu', 'epoksi-fr4-mikanit')
                }
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Mikanit Levha (500°C Isı)
              </button>
              <button
                onClick={() => handleNavClick('katalog-bolumu', 'teflon-ptfe')}
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Silikon Levha & Contalar
              </button>
              <button
                onClick={() =>
                  handleNavClick('katalog-bolumu', 'epoksi-fr4-mikanit')
                }
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Fenolik Pamuklu Bezli Fiber
              </button>
            </div>
          </div>

          {/* Dropdown 3: Ağır Sanayi */}
          <div className="relative group">
            <button
              id="nav-dropdown-heavy-industry"
              className="px-3 py-2 text-[14px] text-[#c3c6d7] hover:text-[#e2e2e9] group-hover:text-[#b4c5ff] transition-colors flex items-center gap-1 font-medium"
            >
              <span>Ağır Sanayi</span>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-72 p-2 bg-[#1a1b21] border border-[#434655]/50 rounded-xl shadow-2xl z-50 animate-in fade-in-50 slide-in-from-top-1">
              <button
                onClick={() =>
                  handleNavClick('katalog-bolumu', 'vinc-denge-5th-wheel')
                }
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Vinç Ayak Denge Destek Takozu
              </button>
              <button
                onClick={() =>
                  handleNavClick('katalog-bolumu', 'vinc-denge-5th-wheel')
                }
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Beşinci Teker Kaydırıcı (Fifth Wheel)
              </button>
              <button
                onClick={() => handleNavClick('katalog-bolumu', 'civa-celigi')}
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Civa Çeliği H8 (1.2210 / 115CrV3)
              </button>
              <button
                onClick={() =>
                  handleNavClick('katalog-bolumu', 'poliuretan-kalip')
                }
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Poliüretan Kalıp Yayları (Desmadur)
              </button>
            </div>
          </div>

          {/* Dropdown 4: Alaşım & Kablo */}
          <div className="relative group">
            <button
              id="nav-dropdown-alloys"
              className="px-3 py-2 text-[14px] text-[#c3c6d7] hover:text-[#e2e2e9] group-hover:text-[#b4c5ff] transition-colors flex items-center gap-1 font-medium"
            >
              <span>Alaşım & Kablo</span>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-64 p-2 bg-[#1a1b21] border border-[#434655]/50 rounded-xl shadow-2xl z-50 animate-in fade-in-50 slide-in-from-top-1">
              <button
                onClick={() =>
                  handleNavClick('katalog-bolumu', 'alasimli-bakir-bronz')
                }
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Alaşımlı Bakır & Bronz Burçlar
              </button>
              <button
                onClick={() => handleNavClick('katalog-bolumu', 'yanmaz-kablo')}
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Yanmaz Nikel Kaplı Kablo (400°C)
              </button>
              <button
                onClick={() => handleNavClick('katalog-bolumu', 'eva-tatami')}
                className="px-3 py-2 text-left rounded-lg hover:bg-[#1e1f25] text-xs text-[#e2e2e9] transition-colors"
              >
                Eva Rulo & Tatami Zemin Minderi
              </button>
            </div>
          </div>

          {/* Katalog & Hakkımızda */}
          <button
            id="nav-catalog-btn"
            onClick={onOpenCatalog}
            className="px-3 py-2 text-[14px] text-[#c3c6d7] hover:text-[#e2e2e9] transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#4cd7f6]" />
            <span>Katalog</span>
          </button>
          <button
            id="nav-about-btn"
            onClick={() => handleNavClick('kurumsal-bolum')}
            className="px-3 py-2 text-[14px] text-[#c3c6d7] hover:text-[#e2e2e9] transition-colors font-medium cursor-pointer"
          >
            Hakkımızda
          </button>
        </nav>

        {/* Sağ Aksiyonlar & RFQ Sepeti */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobil arama butonu */}
          <button
            id="mobile-search-btn"
            onClick={onOpenSearch}
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#1e1f25] text-[#c3c6d7] hover:text-[#e2e2e9] border border-[#434655]/40"
            title="Ara"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Teklif Sepetim (RFQ Basket) */}
          <button
            id="header-rfq-cart-btn"
            onClick={onOpenCart}
            className="relative flex items-center justify-center h-10 px-3 rounded-lg bg-[#1e1f25] text-[#c3c6d7] hover:text-[#e2e2e9] hover:bg-[#282a2f] border border-[#434655]/40 transition-colors cursor-pointer"
            title="Teklif Sepetini Görüntüle"
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline-block ml-1.5 text-xs font-semibold text-[#e2e2e9]">
              Teklif Sepetim
            </span>
            {cartCount > 0 && (
              <span
                id="header-rfq-cart-badge"
                className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#d97707] text-[#432100] text-[11px] font-bold shadow-md animate-pulse"
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Hızlı RFQ Al Butonu */}
          <button
            id="header-quick-rfq-btn"
            onClick={() => handleNavClick('rfq-formu')}
            className="hidden sm:flex items-center justify-center h-10 px-4 rounded-lg bg-[#2563eb] text-[#eeefff] font-semibold text-xs shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-[#0053db] transition-all cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 mr-1.5 text-[#acedff]" />
            <span>Hızlı RFQ Al</span>
          </button>

          {/* WhatsApp Canlı RFQ Hattı */}
          <a
            id="header-whatsapp-btn"
            href="https://api.whatsapp.com/send?phone=905333771897&text=Merhaba,%20teknik%20plastik%20ve%20metal%20fiyat%20listesi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1e1f25] hover:bg-[#282a2f] text-[#4cd7f6] border border-[#434655]/40 transition-colors"
            title="WhatsApp Canlı RFQ Hattı"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Müşteri Girişi / Profil */}
          <button
            id="header-profile-btn"
            className="w-9 h-9 rounded-full bg-[#b4c5ff] flex items-center justify-center text-[#002a78] shadow-sm hover:opacity-90 transition-opacity"
            title="Müşteri & Mühendislik Girişi"
            onClick={() => handleNavClick('rfq-formu')}
          >
            <User className="w-4 h-4" />
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
        </div>
      )}
    </header>
  );
};
