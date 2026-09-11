import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductsSection } from './components/ProductsSection';
import { CorporateSection } from './components/CorporateSection';
import { RfqSection } from './components/RfqSection';
import { SectorsSection } from './components/SectorsSection';
import { Footer } from './components/Footer';
import { RfqDrawer } from './components/RfqDrawer';
import { SearchModal } from './components/SearchModal';
import { TdsModal } from './components/TdsModal';
import { CatalogModal } from './components/CatalogModal';
import { MaterialShortcutFab } from './components/MaterialShortcutFab';
import { FaqSection } from './components/FaqSection';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { ContactModal } from './components/ContactModal';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppFab } from './components/WhatsAppFab';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';
import { OfflineIndicator } from './components/OfflineIndicator';
import { FadeIn } from './components/FadeIn';
import { CurrencyCode, RfqCartItem } from './types';
import { useLiveCurrency } from './hooks/useLiveCurrency';

export default function App() {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const {
    rates: liveRates,
    isLoading: isLoadingRates,
    refresh: refreshRates,
  } = useLiveCurrency();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeRfqProduct, setActiveRfqProduct] = useState<string>('pe-1000-levha');
  const [cartItems, setCartItems] = useState<RfqCartItem[]>([
    {
      id: 'initial-sample-1',
      productId: 'pe-1000-levha',
      productName: 'PE 1000 (Ulpolen UHMWPE) Levha',
      shape: 'plate',
      width: 1000,
      length: 2000,
      thickness: 20,
      quantity: 5,
      processing: 'Sadece Ham Kesim',
      calculatedWeightKg: 186.0,
      estimatedCost: 2232,
      notes: 'Konveyör aşınma plakası için',
    },
  ]);

  // Modal / Drawer states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [tdsProductId, setTdsProductId] = useState<string | null>(null);
  const [legalModalTab, setLegalModalTab] = useState<LegalDocType | null>(null);

  // Global keyboard shortcut for ⌘K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAddToCart = (item: RfqCartItem) => {
    setCartItems((prev) => [item, ...prev]);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleUpdateCartQuantity = (id: string, qty: number) => {
    setCartItems((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          const unitWeight = i.calculatedWeightKg / i.quantity;
          const unitCost = i.estimatedCost / i.quantity;
          return {
            ...i,
            quantity: qty,
            calculatedWeightKg: Number((unitWeight * qty).toFixed(2)),
            estimatedCost: Math.round(unitCost * qty),
          };
        }
        return i;
      })
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectProductForRfq = (productId: string) => {
    setActiveRfqProduct(productId);
    const rfqElement = document.getElementById('rfq-formu');
    if (rfqElement) {
      rfqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (categoryId: string | null, shouldScroll: boolean = true) => {
    setSelectedCategory(categoryId);
    if (shouldScroll && categoryId) {
      const elem = document.getElementById('urunler-bolumu');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d13] text-[#e2e2e9] selection:bg-[#2563eb] selection:text-white font-sans antialiased overflow-x-clip w-full max-w-full relative">
      {/* 1. Üst Bilgi Çubuğu (Canlı Döviz Ticker'ı ile) */}
      <TopBar
        selectedCurrency={currency}
        onCurrencyChange={setCurrency}
        rates={liveRates}
        isLoadingRates={isLoadingRates}
        onRefreshRates={refreshRates}
      />

      {/* 2. Ana Navigasyon Başlığı (Sabit / Sticky) */}
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onSelectCategoryFilter={handleCategoryClick}
      />

      {/* 3. Ana İçerik */}
      <main className="flex-1 flex flex-col w-full max-w-full overflow-x-clip">
        {/* Hero Alanı & Öne Çıkan İnteraktif Malzeme İstasyonu */}
        <HeroSection
          onOpenRfq={() => {
            const rfqElement = document.getElementById('rfq-formu');
            if (rfqElement) {
              rfqElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          onOpenCatalog={() => setIsCatalogOpen(true)}
          onOpenTds={(id) => setTdsProductId(id)}
          onSelectProductForRfq={handleSelectProductForRfq}
        />

        {/* Endüstriyel Kategoriler Izgarası (10 Grup) */}
        <FadeIn>
          <CategoriesSection
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryClick}
            onNavigateToRfq={(catId) => {
              setSelectedCategory(catId);
              const elem = document.getElementById('urunler-bolumu');
              if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </FadeIn>

        {/* Çok Satan Ürünler Izgarası */}
        <FadeIn>
          <ProductsSection
            selectedCategory={selectedCategory}
            onClearFilter={() => setSelectedCategory(null)}
            onSelectProductForRfq={handleSelectProductForRfq}
            onOpenTds={(id) => setTdsProductId(id)}
            currency={currency}
          />
        </FadeIn>

        {/* Kurumsal Hikaye & Hızlı RFQ Hesaplayıcı Formu (İkili Kolon) */}
        <FadeIn>
          <section className="w-full py-16 lg:py-24 bg-[#08090d]">
            <div className="w-full px-4 sm:px-6 mx-auto max-w-[90rem]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Sol: Kurumsal Kimlik & Avantajlar (6 Sütun) */}
                <div className="lg:col-span-6">
                  <CorporateSection />
                </div>

                {/* Sağ: Teknik Teklif & RFQ Hesaplayıcı (6 Sütun) */}
                <div className="lg:col-span-6">
                  <RfqSection
                    initialProductId={activeRfqProduct}
                    onAddToCart={handleAddToCart}
                    currency={currency}
                    liveRates={liveRates}
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Hizmet Verilen Ağır Sanayi Kolları & Uzman Destek Şeridi */}
        <FadeIn>
          <SectorsSection />
        </FadeIn>

        {/* Yapay Zeka Destekli Malzeme Seçim & Sıkça Sorulan Teknik Sorular (AEO) */}
        <FadeIn>
          <FaqSection onSelectProductForRfq={handleSelectProductForRfq} />
        </FadeIn>
      </main>

      {/* 4. Kurumsal Alt Bilgi (Footer) */}
      <FadeIn yOffset={16}>
        <Footer
          onSelectCategoryFilter={handleCategoryClick}
          onOpenCatalog={() => setIsCatalogOpen(true)}
          onOpenLegal={(tab) => setLegalModalTab(tab)}
        />
      </FadeIn>

      {/* 5. Modallar ve Drawer'lar */}
      <RfqDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onClearCart={handleClearCart}
        currency={currency}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(id) => {
          setTdsProductId(id);
          setIsSearchOpen(false);
        }}
        onSelectCategory={handleCategoryClick}
      />

      <TdsModal
        productId={tdsProductId}
        onClose={() => setTdsProductId(null)}
        onRequestQuote={handleSelectProductForRfq}
      />

      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />

      <LegalModal
        isOpen={legalModalTab !== null}
        onClose={() => setLegalModalTab(null)}
        initialTab={legalModalTab || 'kvkk'}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* 6. PWA Kurulum & Çevrimdışı Bildirimi */}
      <PwaInstallPrompt />
      <OfflineIndicator />

      {/* 7. Hızlı Malzeme Seçici Yüzen Eylem Çubuğu (Sol Alt) */}
      <MaterialShortcutFab
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryClick}
        onSelectProductForRfq={handleSelectProductForRfq}
      />

      {/* 8. Sayfa Başına Dön Butonu (Sağ Alt) */}
      <ScrollToTop />

      {/* 9. Canlı WhatsApp B2B Destek & İletişim Butonu (Sağ Alt) */}
      <WhatsAppFab />
    </div>
  );
}
