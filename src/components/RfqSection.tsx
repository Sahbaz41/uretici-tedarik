import React, { useState, useEffect } from 'react';
import {
  FileText,
  Send,
  Calculator,
  Upload,
  CheckCircle,
  PlusCircle,
  Clock,
  Sparkles,
  Paperclip,
} from 'lucide-react';
import { calculateWeight, MATERIAL_BASE_RATES, PRODUCTS } from '../data/materials';
import { RfqCartItem } from '../types';

interface RfqSectionProps {
  initialProductId?: string;
  onAddToCart: (item: RfqCartItem) => void;
  currency: 'USD' | 'TRY' | 'EUR';
}

export const RfqSection: React.FC<RfqSectionProps> = ({
  initialProductId = 'pe-1000-levha',
  onAddToCart,
  currency,
}) => {
  const [selectedProductId, setSelectedProductId] = useState(initialProductId);
  const [shape, setShape] = useState<'plate' | 'rod'>('plate');
  const [width, setWidth] = useState<number>(500);
  const [length, setLength] = useState<number>(1000);
  const [thickness, setThickness] = useState<number>(20);
  const [quantity, setQuantity] = useState<number>(10);
  const [processing, setProcessing] = useState<string>('Sadece Ham Kesim');
  const [companyName, setCompanyName] = useState<string>('');
  const [phone, setPhone] = useState<string>('+90 (533) 377 18 97');
  const [notes, setNotes] = useState<string>('');
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialProductId) {
      setSelectedProductId(initialProductId);
      // Auto-detect shape if rod is common (e.g. civa celigi or poliuretan cubuk)
      if (
        initialProductId.includes('civa') ||
        initialProductId.includes('cubuk') ||
        initialProductId.includes('mil')
      ) {
        setShape('rod');
      }
    }
  }, [initialProductId]);

  const currentProduct =
    PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Calculate live theoretical weight
  const unitWeightKg = calculateWeight(
    currentProduct.density,
    shape,
    width,
    length,
    shape === 'plate' ? thickness : 0
  );
  const totalWeightKg = Number((unitWeightKg * quantity).toFixed(2));

  // Estimate price
  const baseRate = MATERIAL_BASE_RATES[selectedProductId] || 12.0;
  let multiplier = currency === 'TRY' ? 38 : currency === 'EUR' ? 0.95 : 1;
  const estimatedCost = Math.round(totalWeightKg * baseRate * multiplier);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachedFileName(file.name);
    }
  };

  const handleAddToCart = () => {
    const item: RfqCartItem = {
      id: `cart-${Date.now()}`,
      productId: currentProduct.id,
      productName: currentProduct.name,
      shape,
      width,
      length,
      thickness: shape === 'plate' ? thickness : width,
      quantity,
      processing,
      calculatedWeightKg: totalWeightKg,
      estimatedCost,
      notes,
    };
    onAddToCart(item);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddToCart();
  };

  return (
    <div id="rfq-formu" className="flex flex-col">
      <div className="rounded-2xl bg-[#0c0e13] border border-[#434655]/40 p-5 sm:p-7 md:p-8 shadow-2xl relative overflow-hidden">
        {/* Üst Gradyan Şerit */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] via-[#4cd7f6] to-[#ffb77d]" />

        {/* Form Başlığı */}
        <div className="flex items-center justify-between pb-4 border-b border-[#434655]/30">
          <div className="flex items-center gap-2.5">
            <FileText className="w-6 h-6 text-[#2563eb]" />
            <span className="font-display text-lg sm:text-xl text-[#e2e2e9] font-bold">
              Hızlı Teknik Teklif & RFQ Formu
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs text-[#4cd7f6] px-2.5 py-1 rounded bg-[#1e1f25] border border-[#434655]/30">
            <Clock className="w-3.5 h-3.5" />
            <span>2 Saat İçinde Yanıt</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#c3c6d7] my-4 leading-relaxed">
          İhtiyaç duyduğunuz teknik polimer veya alaşımlı metalin ölçülerini
          giriniz. Mühendislerimiz CAD toleransları ve hammadde fire
          optimizasyonu ile dönüş yapacaktır.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Malzeme Grubu Seçimi */}
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
              Malzeme Grubu Seçimi *
            </label>
            <select
              id="rfq-material-select"
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="h-11 px-3.5 rounded-lg bg-[#1a1b21] border border-[#434655]/40 text-[#e2e2e9] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
            >
              {PRODUCTS.map((prod) => (
                <option key={prod.id} value={prod.id}>
                  {prod.name} ({prod.category})
                </option>
              ))}
            </select>
          </div>

          {/* Şekil / Geometri Seçimi */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              id="shape-select-plate"
              onClick={() => setShape('plate')}
              className={`h-10 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
                shape === 'plate'
                  ? 'bg-[#2563eb]/25 border-[#2563eb] text-[#b4c5ff]'
                  : 'bg-[#1a1b21] border-[#434655]/30 text-[#8d90a0] hover:text-[#e2e2e9]'
              }`}
            >
              <span>Levha / Plaka / Takoz</span>
            </button>
            <button
              type="button"
              id="shape-select-rod"
              onClick={() => setShape('rod')}
              className={`h-10 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
                shape === 'rod'
                  ? 'bg-[#2563eb]/25 border-[#2563eb] text-[#b4c5ff]'
                  : 'bg-[#1a1b21] border-[#434655]/30 text-[#8d90a0] hover:text-[#e2e2e9]'
              }`}
            >
              <span>Dolu Çubuk / Mil</span>
            </button>
          </div>

          {/* Ölçüler: En/Çap x Boy x Kalınlık */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                {shape === 'plate' ? 'En (mm)' : 'Çap Ø (mm)'}
              </label>
              <input
                id="rfq-width-input"
                type="number"
                min="1"
                value={width}
                onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                className="h-11 px-3 rounded-lg bg-[#1a1b21] border border-[#434655]/40 text-[#e2e2e9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                placeholder="Örn: 500"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                Boy (mm)
              </label>
              <input
                id="rfq-length-input"
                type="number"
                min="1"
                value={length}
                onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
                className="h-11 px-3 rounded-lg bg-[#1a1b21] border border-[#434655]/40 text-[#e2e2e9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                placeholder="Örn: 1000"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                {shape === 'plate' ? 'Kalınlık (mm)' : 'Et Kalınlığı'}
              </label>
              <input
                id="rfq-thickness-input"
                type="number"
                min="1"
                disabled={shape === 'rod'}
                value={shape === 'rod' ? '-' : thickness}
                onChange={(e) =>
                  setThickness(Math.max(1, Number(e.target.value)))
                }
                className="h-11 px-3 rounded-lg bg-[#1a1b21] border border-[#434655]/40 text-[#e2e2e9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] disabled:opacity-50"
                placeholder="Örn: 20"
                required={shape === 'plate'}
              />
            </div>
          </div>

          {/* Miktar & İşleme Talebi */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                Adet / Metre
              </label>
              <input
                id="rfq-quantity-input"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value)))
                }
                className="h-11 px-3 rounded-lg bg-[#1a1b21] border border-[#434655]/40 text-[#e2e2e9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                İşleme Talebi
              </label>
              <select
                id="rfq-processing-select"
                value={processing}
                onChange={(e) => setProcessing(e.target.value)}
                className="h-11 px-3 rounded-lg bg-[#1a1b21] border border-[#434655]/40 text-[#e2e2e9] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              >
                <option>Sadece Ham Kesim</option>
                <option>CNC Çizime Göre İşleme</option>
                <option>Pah Kırma & Delik Delme</option>
                <option>Numune Parça Talebi</option>
              </select>
            </div>
          </div>

          {/* Canlı Hesaplanan Ağırlık & Fiyat Bilgi Çubuğu */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#1e1f25] border border-[#434655]/40 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#4cd7f6]" />
              <span className="text-[#c3c6d7]">Teorik Toplam Ağırlık:</span>
              <span className="text-[#4cd7f6] font-bold">
                {totalWeightKg} kg
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-right">
              <span className="text-[#8d90a0] hidden sm:inline">
                Tahmini Tutar:
              </span>
              <span className="text-[#b4c5ff] font-bold text-sm">
                ~{currency === 'TRY' ? '₺' : currency === 'EUR' ? '€' : '$'}
                {estimatedCost.toLocaleString()}
              </span>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                Firma / Yetkili Adı *
              </label>
              <input
                id="rfq-company-input"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Firma Ünvanı veya Ad Soyad"
                required
                className="h-11 px-3 rounded-lg bg-[#1a1b21] border border-[#434655]/40 text-[#e2e2e9] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                Telefon / GSM *
              </label>
              <input
                id="rfq-phone-input"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+90 (533) 377 18 97"
                required
                className="h-11 px-3 rounded-lg bg-[#1a1b21] border border-[#434655]/40 text-[#e2e2e9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              />
            </div>
          </div>

          {/* Teknik Şartname / Ek Notlar & CAD Dosyası Yükleme */}
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
              Teknik Şartname / Ek Notlar / CAD STEP Çizimi
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <textarea
                id="rfq-notes-input"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Varsa alaşım kodu, ortam sıcaklığı veya özel tolerans istekleriniz..."
                className="flex-1 p-3 rounded-lg bg-[#1a1b21] border border-[#434655]/40 text-[#e2e2e9] text-xs focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              />

              {/* Dosya Yükleme Butonu */}
              <label
                id="rfq-file-upload-label"
                className="h-auto sm:w-44 border border-dashed border-[#434655] hover:border-[#b4c5ff] bg-[#1a1b21] hover:bg-[#1e1f25] rounded-lg p-2 flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
              >
                <Upload className="w-4 h-4 text-[#4cd7f6] mb-1" />
                <span className="text-[11px] text-[#c3c6d7] leading-tight font-medium truncate max-w-full">
                  {attachedFileName ? attachedFileName : 'CAD / STEP Yükle'}
                </span>
                <span className="text-[9px] text-[#8d90a0] mt-0.5">
                  .step, .dwg, .pdf
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  accept=".step,.stp,.dwg,.dxf,.pdf,.png,.jpg"
                />
              </label>
            </div>
          </div>

          {/* Gönder & Sepete Ekle Butonları */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
            <button
              id="rfq-submit-btn"
              type="submit"
              className="h-12 w-full rounded-lg bg-[#2563eb] text-[#eeefff] font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-[#0053db] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Hızlı Fiyat Teklifi Al (RFQ)</span>
            </button>

            <button
              id="rfq-add-to-cart-btn"
              type="button"
              onClick={handleAddToCart}
              className="h-12 w-full rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#e2e2e9] font-semibold text-sm flex items-center justify-center gap-2 border border-[#434655]/40 transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-[#4cd7f6]" />
              <span>Teklif Sepetine Ekle</span>
            </button>
          </div>

          {/* Onay Bildirimi */}
          {submitted && (
            <div
              id="rfqNotification"
              className="p-3.5 rounded-xl bg-[#00788c]/25 border border-[#4cd7f6]/40 text-[#d7f6ff] text-xs flex items-start gap-2.5 animate-in fade-in-50"
            >
              <CheckCircle className="w-5 h-5 text-[#4cd7f6] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#4cd7f6]">
                  Talebiniz Çayırova Satış & Mühendislik Ekibimize İletilmiştir!
                </p>
                <p className="mt-0.5 text-[#c3c6d7]">
                  {quantity} adet {currentProduct.name} ({totalWeightKg} kg)
                  için 2 saat içinde teknik şartname ve fiyat teklifi
                  sunulacaktır.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
