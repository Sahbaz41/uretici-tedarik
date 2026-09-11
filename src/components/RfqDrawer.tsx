import React from 'react';
import {
  X,
  Trash2,
  MessageCircle,
  FileDown,
  Calculator,
  Plus,
  Minus,
} from 'lucide-react';
import { RfqCartItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface RfqDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: RfqCartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  onClearCart: () => void;
  currency: 'USD' | 'TRY' | 'EUR';
}

export const RfqDrawer: React.FC<RfqDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
  currency,
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].cart;

  if (!isOpen) return null;

  const totalWeight = Number(
    cartItems.reduce((acc, i) => acc + i.calculatedWeightKg, 0).toFixed(2)
  );
  const totalCost = cartItems.reduce((acc, i) => acc + i.estimatedCost, 0);

  const getWhatsAppMessage = () => {
    if (language === 'en') {
      let msg = `Hello Uretici Tedarik, I would like to request an official RFQ quotation for the following engineering materials:%0A%0A`;
      cartItems.forEach((item, index) => {
        msg += `${index + 1}) ${item.productName}%0A`;
        msg += `   - Shape: ${item.shape === 'plate' ? 'Sheet/Plate' : 'Solid Round Rod'}%0A`;
        msg += `   - Dimensions: ${item.width} x ${item.length} ${item.shape === 'plate' ? `x ${item.thickness} mm` : 'mm'}%0A`;
        msg += `   - Quantity: ${item.quantity} pcs (Est: ${item.calculatedWeightKg} kg)%0A`;
        msg += `   - Machining: ${item.processing}%0A%0A`;
      });
      msg += `Total Weight: ${totalWeight} kg. Looking forward to your prompt response.`;
      return msg;
    }
    let msg = `Merhaba Üretici Tedarik, aşağıdaki teknik malzeme listesi için RFQ fiyat teklifi almak istiyorum:%0A%0A`;
    cartItems.forEach((item, index) => {
      msg += `${index + 1}) ${item.productName}%0A`;
      msg += `   - Şekil: ${item.shape === 'plate' ? 'Levha/Plaka' : 'Dolu Çubuk/Mil'}%0A`;
      msg += `   - Ölçüler: ${item.width} x ${item.length} ${item.shape === 'plate' ? `x ${item.thickness} mm` : 'mm'}%0A`;
      msg += `   - Miktar: ${item.quantity} Adet (Teorik: ${item.calculatedWeightKg} kg)%0A`;
      msg += `   - İşleme: ${item.processing}%0A%0A`;
    });
    msg += `Toplam Ağırlık: ${totalWeight} kg. En kısa sürede geri dönüşünüzü rica ederim.`;
    return msg;
  };

  const handleExportSummary = () => {
    let text = language === 'en'
      ? `URETICI TEDARIK // TECHNICAL RFQ QUOTATION REQUEST\nDate: ${new Date().toLocaleDateString('en-US')}\n\n`
      : `ÜRETİCİ TEDARİK // TEKNİK RFQ TEKLİF TALEBİ\nTarih: ${new Date().toLocaleDateString('tr-TR')}\n\n`;

    cartItems.forEach((item, index) => {
      text += `${index + 1}. ${item.productName}\n`;
      text += `   ${language === 'en' ? 'Shape' : 'Şekil'}: ${item.shape === 'plate' ? t.plate : t.rod}\n`;
      text += `   ${language === 'en' ? 'Dimensions' : 'Ölçüler'}: ${item.width}x${item.length}${item.shape === 'plate' ? `x${item.thickness}` : ''} mm\n`;
      text += `   ${language === 'en' ? 'Qty' : 'Miktar'}: ${item.quantity} | ${language === 'en' ? 'Weight' : 'Ağırlık'}: ${item.calculatedWeightKg} kg\n`;
      text += `   ${language === 'en' ? 'Machining' : 'İşleme'}: ${item.processing}\n\n`;
    });
    text += `${language === 'en' ? 'Total Weight' : 'Toplam Tahmini Ağırlık'}: ${totalWeight} kg\n`;
    text += `${language === 'en' ? 'Contact' : 'İletişim'}: +90 (533) 377 18 97 | info@ureticitedarik.com\n`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Uretici_Tedarik_RFQ_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="rfq-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="rfq-drawer-panel"
        className="w-full max-w-lg bg-[#0c0e13] border-l border-[#434655]/40 h-full flex flex-col p-6 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Başlık & Kapatma */}
        <div className="flex items-center justify-between pb-4 border-b border-[#434655]/30">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-[#e2e2e9]">
              {t.title}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#2563eb]/20 text-[#b4c5ff] font-mono text-xs font-bold">
              {cartItems.length} {t.itemCount}
            </span>
          </div>
          <button
            id="rfq-drawer-close-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#1a1b21] hover:bg-[#282a2f] text-[#c3c6d7] flex items-center justify-center transition-colors cursor-pointer"
            title={t.btnClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sepet İçeriği */}
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-3">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center text-[#8d90a0]">
              <Calculator className="w-12 h-12 mb-3 text-[#434655]" />
              <p className="font-semibold text-sm text-[#c3c6d7]">
                {t.emptyTitle}
              </p>
              <p className="text-xs mt-1 max-w-xs text-[#8d90a0]">
                {t.emptyDesc}
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                id={`cart-item-${item.id}`}
                className="p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/30 flex flex-col gap-2 relative group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#e2e2e9] leading-tight">
                      {item.productName}
                    </span>
                    <span className="font-mono text-[11px] text-[#4cd7f6] mt-0.5">
                      {item.shape === 'plate' ? t.plate : t.rod}: {item.width}
                      x{item.length}
                      {item.shape === 'plate' ? `x${item.thickness}` : ''} mm
                    </span>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[#8d90a0] hover:text-[#ffb4ab] transition-colors p-1 cursor-pointer"
                    title={t.deleteTooltip}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-[#c3c6d7] pt-1 border-t border-[#434655]/20">
                  <div className="flex items-center gap-1.5 font-mono">
                    <span className="text-[#8d90a0]">{t.theoretical}</span>
                    <span className="text-[#b4c5ff] font-semibold">
                      {item.calculatedWeightKg} kg
                    </span>
                  </div>

                  {/* Adet Kontrolü */}
                  <div className="flex items-center gap-2 bg-[#282a2f] px-2 py-1 rounded-lg border border-[#434655]/30">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="text-[#8d90a0] hover:text-[#e2e2e9] cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-mono text-xs font-bold text-[#e2e2e9]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="text-[#8d90a0] hover:text-[#e2e2e9] cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="text-[11px] text-[#8d90a0] flex items-center justify-between">
                  <span>{t.processing} {item.processing}</span>
                  <span className="font-mono font-semibold text-[#b4c5ff]">
                    ~{currency === 'TRY' ? '₺' : currency === 'EUR' ? '€' : '$'}
                    {item.estimatedCost.toLocaleString()}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sepet Özeti & Aksiyonlar */}
        {cartItems.length > 0 && (
          <div className="pt-4 border-t border-[#434655]/30 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#c3c6d7]">{t.totalWeight}</span>
              <span className="text-[#4cd7f6] font-bold text-sm">
                {totalWeight} kg
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#c3c6d7]">{t.estimatedTotal}</span>
              <span className="text-[#b4c5ff] font-bold text-base">
                ~{currency === 'TRY' ? '₺' : currency === 'EUR' ? '€' : '$'}
                {totalCost.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={handleExportSummary}
                className="h-10 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#e2e2e9] text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#434655]/40 transition-colors cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#4cd7f6]" />
                <span>{t.btnDownloadQuote}</span>
              </button>

              <button
                onClick={onClearCart}
                className="h-10 rounded-lg bg-[#1a1b21] hover:bg-[#282a2f] text-[#ffb4ab] text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#434655]/30 transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>{t.btnClearCart}</span>
              </button>
            </div>

            <a
              id="whatsapp-rfq-submit-link"
              href={`https://api.whatsapp.com/send?phone=905333771897&text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-full rounded-lg bg-[#2563eb] text-[#eeefff] font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-[#0053db] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.btnSendWhatsapp}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
