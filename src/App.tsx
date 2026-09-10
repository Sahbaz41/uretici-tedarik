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
import { RfqCartItem } from './types';

export default function App() {
  const [currency, setCurrency] = useState<'USD' | 'TRY' | 'EUR'>('USD');
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
  const [tdsProductId, setTdsProductId] = useState<string | null>(null);

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
    <div className="min-h-screen flex flex-col bg-[#111318] text-[#e2e2e9] selection:bg-[#2563eb] selection:text-white font-sans antialiased">
      {/* 1. Üst Bilgi Çubuğu */}
      <TopBar
        selectedCurrency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* 2. Ana Navigasyon Başlığı */}
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCatalog={() => setIsCatalogOpen(true)}
        onSelectCategoryFilter={handleCategoryClick}
      />

      {/* 3. Ana İçerik */}
      <main className="flex-1 flex flex-col">
        {/* Hero Alanı & Öne Çıkan Polimer Specimen Kartı */}
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

        {/* Çok Satan Ürünler Izgarası */}
        <ProductsSection
          selectedCategory={selectedCategory}
          onClearFilter={() => setSelectedCategory(null)}
          onSelectProductForRfq={handleSelectProductForRfq}
          onOpenTds={(id) => setTdsProductId(id)}
          currency={currency}
        />

        {/* Kurumsal Hikaye & Hızlı RFQ Hesaplayıcı Formu (İkili Kolon) */}
        <section className="w-full py-16 lg:py-24 bg-[#111318]">
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
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hizmet Verilen Ağır Sanayi Kolları & Uzman Destek Şeridi */}
        <SectorsSection />
      </main>

      {/* 4. Kurumsal Alt Bilgi (Footer) */}
      <Footer
        onSelectCategoryFilter={handleCategoryClick}
        onOpenCatalog={() => setIsCatalogOpen(true)}
      />

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

      {/* 6. Hızlı Malzeme Seçici Yüzen Eylem Çubuğu (FAB / Shortcut Menu) */}
      <MaterialShortcutFab
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryClick}
        onSelectProductForRfq={handleSelectProductForRfq}
      />
    </div>
  );
}
