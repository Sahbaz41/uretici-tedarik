import React, { useState, useEffect } from 'react';
import { Search, X, ChevronRight, FileText, Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/materials';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
  onSelectCategory: (categoryId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectCategory,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // Toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.dinNorm && p.dinNorm.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredCategories = CATEGORIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="search-modal-container"
        className="w-full max-w-2xl bg-[#0c0e13] border border-[#434655]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Arama Girdi Satırı */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#434655]/40 bg-[#1a1b21]">
          <Search className="w-5 h-5 text-[#8d90a0] mr-3" />
          <input
            id="command-palette-input"
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Malzeme adı, DIN normu (örn: 1.2210), kod veya ebat arayın..."
            className="flex-1 bg-transparent border-none text-[#e2e2e9] text-sm focus:outline-none placeholder-[#8d90a0]"
          />
          <kbd className="hidden sm:inline-block font-mono text-[11px] px-2 py-0.5 rounded bg-[#282a2f] text-[#c3c6d7] border border-[#434655]/40 mr-2">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="text-[#8d90a0] hover:text-[#e2e2e9] p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sonuçlar */}
        <div className="max-h-[60vh] overflow-y-auto p-4 flex flex-col gap-4">
          {/* Ürünler */}
          <div>
            <span className="font-mono text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider block mb-2 px-2">
              Teknik Malzemeler ({filteredProducts.length})
            </span>
            {filteredProducts.length === 0 ? (
              <p className="text-xs text-[#8d90a0] px-2 py-1">
                Eşleşen ürün bulunamadı.
              </p>
            ) : (
              <div className="flex flex-col gap-1.5">
                {filteredProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p.id);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#1e1f25] text-left transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#282a2f] flex items-center justify-center text-[#4cd7f6] shrink-0 font-mono text-xs">
                        {p.code.split('-')[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#e2e2e9] group-hover:text-[#b4c5ff] transition-colors">
                            {p.name}
                          </span>
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#282a2f] text-[#8d90a0]">
                            {p.code}
                          </span>
                        </div>
                        <span className="text-xs text-[#c3c6d7] line-clamp-1">
                          {p.subtitle}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8d90a0] group-hover:text-[#b4c5ff] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Kategoriler */}
          <div className="pt-2 border-t border-[#434655]/25">
            <span className="font-mono text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider block mb-2 px-2">
              Kategoriler ({filteredCategories.length})
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredCategories.slice(0, 6).map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    onSelectCategory(c.id);
                    onClose();
                  }}
                  className="p-2.5 rounded-xl hover:bg-[#1e1f25] text-left transition-colors border border-[#434655]/20 flex flex-col cursor-pointer"
                >
                  <span className="text-xs font-bold text-[#e2e2e9]">
                    {c.name}
                  </span>
                  <span className="text-[11px] text-[#8d90a0] truncate mt-0.5">
                    {c.tags.join(' • ')}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
