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
  MessageCircle,
  Box,
  Cylinder,
} from 'lucide-react';
import { calculateWeight, MATERIAL_BASE_RATES, PRODUCTS } from '../data/materials';
import { CurrencyCode, RfqCartItem } from '../types';
import { CurrencyRates } from '../hooks/useLiveCurrency';
import { useLanguage } from '../context/LanguageContext';

interface RfqSectionProps {
  initialProductId?: string;
  onAddToCart: (item: RfqCartItem) => void;
  currency: CurrencyCode;
  liveRates?: CurrencyRates;
  language?: 'tr' | 'en';
}

export const RfqSection: React.FC<RfqSectionProps> = ({
  initialProductId = 'pe-1000-levha',
  onAddToCart,
  currency,
  liveRates,
}) => {
  const { language, isEN, t: currentT } = useLanguage();
  const r = currentT.rfq;

  const [selectedProductId, setSelectedProductId] = useState(initialProductId);
  const [shape, setShape] = useState<'plate' | 'rod'>('plate');
  const [width, setWidth] = useState<number>(500);
  const [length, setLength] = useState<number>(1000);
  const [thickness, setThickness] = useState<number>(20);
  const [quantity, setQuantity] = useState<number>(10);
  const [processing, setProcessing] = useState<string>('Sadece Ham Kesim');
  const [companyName, setCompanyName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialProductId) {
      setSelectedProductId(initialProductId);
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

  // Estimate price with live rates or fallback
  const baseRate = MATERIAL_BASE_RATES[selectedProductId] || 12.0;
  const rateMultiplier =
    currency === 'TRY'
      ? (liveRates ? liveRates.TRY : 38.45)
      : currency === 'EUR'
      ? (liveRates ? liveRates.EUR : 0.93)
      : 1;
  const estimatedCost = Math.round(totalWeightKg * baseRate * rateMultiplier);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  const getWhatsAppMessage = () => {
    if (isEN) {
      let msg = `Hello Uretici Tedarik, I would like to request an RFQ for the following material:\n\n`;
      msg += `Material: ${currentProduct.name}\n`;
      msg += `Shape: ${shape === 'plate' ? 'Sheet/Plate' : 'Solid Round Rod'}\n`;
      msg += `Dimensions: ${width} x ${length} ${shape === 'plate' ? `x ${thickness} mm` : 'mm'}\n`;
      msg += `Quantity: ${quantity} pcs (Theoretical weight: ${totalWeightKg} kg)\n`;
      msg += `Machining: ${processing}${companyName ? `\nCompany: ${companyName}` : ''}\n\n`;
      msg += `Could you please provide formal pricing and delivery terms? Thank you.`;
      return msg;
    }
    let msg = `Merhaba Üretici Tedarik, aşağıdaki teknik malzeme için RFQ fiyat teklifi almak istiyorum:\n\n`;
    msg += `Malzeme: ${currentProduct.name}\n`;
    msg += `Şekil: ${shape === 'plate' ? 'Levha/Plaka' : 'Dolu Yuvarlak Çubuk'}\n`;
    msg += `Ölçü: ${width}x${length}${shape === 'plate' ? `x${thickness}` : ''} mm\n`;
    msg += `Adet: ${quantity} (Teorik: ${totalWeightKg} kg)\n`;
    msg += `İşleme: ${processing}${companyName ? `\nFirma: ${companyName}` : ''}\n\n`;
    msg += `En kısa sürede teklifinizi rica ederim.`;
    return msg;
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
    setTimeout(() => setSubmitted(false), 4500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddToCart();
  };

  return (
    <div id="rfq-formu" className="flex flex-col">
      <div className="rounded-3xl bg-[#0e1017] border border-[#434655]/40 p-5 sm:p-7 md:p-8 shadow-2xl relative overflow-hidden">
        {/* Üst Lazer Neon Şerit */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#2563eb] to-[#ffb77d]" />

        {/* Form Başlığı */}
        <div className="flex items-center justify-between pb-4 border-b border-[#434655]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#2563eb]/20 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display text-lg sm:text-xl text-[#e2e2e9] font-extrabold block">
                {r.title}
              </span>
              <span className="font-mono text-[10px] text-[#8d90a0]">
                {isEN ? 'Direct Cayirova Factory Sales Team' : 'Doğrudan Çayırova Fabrika Satış Ekibi'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs text-[#00f0ff] px-2.5 py-1 rounded bg-[#181b24] border border-[#00f0ff]/30">
            <Clock className="w-3.5 h-3.5" />
            <span>{isEN ? '2-Hour Response' : '2 Saatte Yanıt'}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#c3c6d7] my-4 leading-relaxed">
          {r.subtitle}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Malzeme Grubu Seçimi */}
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
              {r.selectMaterial} *
            </label>
            <select
              id="rfq-material-select"
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="h-11 px-3.5 rounded-xl bg-[#141722] border border-[#434655]/40 text-[#e2e2e9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:border-transparent transition-all cursor-pointer"
            >
              {PRODUCTS.map((prod) => (
                <option key={prod.id} value={prod.id} className="bg-[#141722] text-[#e2e2e9]">
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
              className={`h-11 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                shape === 'plate'
                  ? 'bg-[#2563eb]/25 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_14px_rgba(0,240,255,0.3)]'
                  : 'bg-[#141722] border-[#434655]/40 text-[#8d90a0] hover:text-[#e2e2e9]'
              }`}
            >
              <Box className="w-4 h-4" />
              <span>{r.shapePlate}</span>
            </button>
            <button
              type="button"
              id="shape-select-rod"
              onClick={() => setShape('rod')}
              className={`h-11 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                shape === 'rod'
                  ? 'bg-[#2563eb]/25 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_14px_rgba(0,240,255,0.3)]'
                  : 'bg-[#141722] border-[#434655]/40 text-[#8d90a0] hover:text-[#e2e2e9]'
              }`}
            >
              <Cylinder className="w-4 h-4" />
              <span>{r.shapeRod}</span>
            </button>
          </div>

          {/* Ölçüler: En/Çap x Boy x Kalınlık */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                {shape === 'plate' ? r.width : r.diameter}
              </label>
              <input
                id="rfq-width-input"
                type="number"
                min="1"
                value={width}
                onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                className="h-11 px-3 rounded-xl bg-[#141722] border border-[#434655]/40 text-[#e2e2e9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
                placeholder="Örn: 500"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                {r.length}
              </label>
              <input
                id="rfq-length-input"
                type="number"
                min="1"
                value={length}
                onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
                className="h-11 px-3 rounded-xl bg-[#141722] border border-[#434655]/40 text-[#e2e2e9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
                placeholder="Örn: 1000"
                required
              />
            </div>

            {shape === 'plate' ? (
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                  {r.thickness}
                </label>
                <input
                  id="rfq-thickness-input"
                  type="number"
                  min="1"
                  value={thickness}
                  onChange={(e) => setThickness(Math.max(1, Number(e.target.value)))}
                  className="h-11 px-3 rounded-xl bg-[#141722] border border-[#434655]/40 text-[#e2e2e9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
                  placeholder="Örn: 20"
                  required
                />
              </div>
            ) : (
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                  {isEN ? 'Profile' : 'Profil'}
                </label>
                <div className="h-11 px-3 rounded-xl bg-[#141722] border border-[#434655]/30 text-[#8d90a0] font-mono text-xs flex items-center">
                  {isEN ? 'Round Rod' : 'Silindirik Dolu'}
                </div>
              </div>
            )}
          </div>

          {/* Adet & İşleme Seçeneği */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                {r.quantity}
              </label>
              <input
                id="rfq-quantity-input"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="h-11 px-3 rounded-xl bg-[#141722] border border-[#434655]/40 text-[#e2e2e9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                {r.processing}
              </label>
              <select
                id="rfq-processing-select"
                value={processing}
                onChange={(e) => setProcessing(e.target.value)}
                className="h-11 px-3 rounded-xl bg-[#141722] border border-[#434655]/40 text-[#e2e2e9] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
              >
                <option>{r.procRaw}</option>
                <option>{r.procCnc}</option>
                <option>{r.procGrinding}</option>
                <option>{r.procCustom}</option>
              </select>
            </div>
          </div>

          {/* Canlı Hesaplanan Ağırlık & Fiyat Bilgi Çubuğu */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#141722] border border-[#00f0ff]/30 text-xs font-mono shadow-inner">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-[#c3c6d7]">{r.totalWeight}</span>
              <span className="text-[#00f0ff] font-bold">
                {totalWeightKg} kg
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-right">
              <span className="text-[#8d90a0] hidden sm:inline">
                {r.estimatedCost}
              </span>
              <span className="text-[#00f0ff] font-extrabold text-sm">
                ~{currency === 'TRY' ? '₺' : currency === 'EUR' ? '€' : '$'}
                {estimatedCost.toLocaleString()}
              </span>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                {isEN ? 'Company / Contact Person *' : 'Firma / Yetkili Adı *'}
              </label>
              <input
                id="rfq-company-input"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={r.companyNamePlaceholder}
                required
                className="h-11 px-3 rounded-xl bg-[#141722] border border-[#434655]/40 text-[#e2e2e9] text-sm focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
                {isEN ? 'Phone / WhatsApp *' : 'Telefon / GSM *'}
              </label>
              <input
                id="rfq-phone-input"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={r.phonePlaceholder}
                required
                className="h-11 px-3 rounded-xl bg-[#141722] border border-[#434655]/40 text-[#e2e2e9] font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
              />
            </div>
          </div>

          {/* Teknik Not & CAD STEP Dosyası Yükleme */}
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] text-[#8d90a0] uppercase font-semibold">
              {isEN ? 'Technical Notes / CAD STEP Drawing' : 'Teknik Not / CAD STEP Çizimi'}
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <textarea
                id="rfq-notes-input"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={r.notesPlaceholder}
                className="flex-1 p-3 rounded-xl bg-[#141722] border border-[#434655]/40 text-[#e2e2e9] text-xs focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
              />

              <label
                id="rfq-file-upload-label"
                className="h-auto sm:w-44 border border-dashed border-[#434655] hover:border-[#00f0ff] bg-[#141722] hover:bg-[#181b24] rounded-xl p-2.5 flex flex-col items-center justify-center text-center cursor-pointer transition-colors"
              >
                <Upload className="w-4 h-4 text-[#00f0ff] mb-1" />
                <span className="text-[11px] text-[#c3c6d7] leading-tight font-medium truncate max-w-full">
                  {attachedFileName ? attachedFileName : r.uploadFileBtn}
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

          {/* 3'lü Aksiyon Grubu */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-1">
            <button
              id="rfq-submit-btn"
              type="submit"
              className="h-12 w-full rounded-xl bg-gradient-to-r from-[#2563eb] to-[#0053db] text-[#eeefff] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_24px_rgba(0,240,255,0.5)] transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isEN ? 'Send RFQ Request' : 'Teklif Talebi Gönder'}</span>
            </button>

            <button
              id="rfq-add-to-cart-btn"
              type="button"
              onClick={handleAddToCart}
              className="h-12 w-full rounded-xl bg-[#181b24] hover:bg-[#222632] text-[#e2e2e9] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border border-[#434655]/50 transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 text-[#00f0ff]" />
              <span>{r.btnAddToCart}</span>
            </button>

            <a
              id="rfq-direct-whatsapp-btn"
              href={`https://api.whatsapp.com/send?phone=905333771897&text=${encodeURIComponent(getWhatsAppMessage())}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-full rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isEN ? 'WhatsApp RFQ' : "WhatsApp'a Aktar"}</span>
            </a>
          </div>

          {/* Onay Bildirimi */}
          {submitted && (
            <div
              id="rfqNotification"
              className="p-3.5 rounded-xl bg-[#00788c]/25 border border-[#00f0ff]/50 text-[#d7f6ff] text-xs flex items-start gap-2.5 animate-in fade-in-50"
            >
              <CheckCircle className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#00f0ff]">
                  {isEN ? 'Your RFQ Has Been Transmitted to Cayirova Engineering Team!' : 'Talebiniz Çayırova Satış & Mühendislik Ekibimize İletilmiştir!'}
                </p>
                <p className="mt-0.5 text-[#c3c6d7]">
                  {quantity} x {currentProduct.name} ({totalWeightKg} kg) - {isEN ? 'Our team will submit your formal quotation within 2 hours.' : '2 saat içinde teknik şartname ve fiyat teklifi sunulacaktır.'}
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
