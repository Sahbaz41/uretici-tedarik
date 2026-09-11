import React, { useState } from 'react';
import {
  X,
  Send,
  Building,
  User,
  Phone,
  Mail,
  FileText,
  UploadCloud,
  CheckCircle,
  MessageCircle,
  Clock,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMaterial?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultMaterial = '',
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  const [formData, setFormData] = useState({
    companyName: '',
    taxNumber: '',
    contactPerson: '',
    phone: '',
    email: '',
    materialGroup: defaultMaterial || 'kestamit-pa6g',
    dimensionsNotes: '',
    urgency: 'normal',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSendWhatsApp = () => {
    const isEn = language === 'en';
    const notSpecified = isEn ? 'Not Specified' : 'Belirtilmedi';
    const noneText = isEn ? 'None' : 'Yok';

    const text = isEn
      ? "*URETICI TEDARIK B2B RFQ QUOTATION REQUEST*" + "\n" +
        "----------------------------------------" + "\n" +
        "*Company:* " + (formData.companyName || notSpecified) + "\n" +
        "*Tax ID / No:* " + (formData.taxNumber || notSpecified) + "\n" +
        "*Contact Person:* " + (formData.contactPerson || notSpecified) + "\n" +
        "*Phone:* " + (formData.phone || notSpecified) + "\n" +
        "*Email:* " + (formData.email || notSpecified) + "\n" +
        "*Material Group:* " + formData.materialGroup + "\n" +
        "*Urgency:* " + (formData.urgency === 'urgent' ? '🔴 Urgent (Same-Day Dispatch)' : '🟢 Standard') + "\n" +
        "*Dimensions / CAD Notes:* " + (formData.dimensionsNotes || noneText) + "\n" +
        (fileName ? ("*Attached CAD File:* " + fileName + "\n") : "") +
        "----------------------------------------" + "\n" +
        "Please provide technical specification confirmation and official price quotation."
      : "*ÜRETİCİ TEDARİK B2B TEKLİF TALEBİ*" + "\n" +
        "----------------------------------------" + "\n" +
        "*Firma:* " + (formData.companyName || notSpecified) + "\n" +
        "*Vergi No:* " + (formData.taxNumber || notSpecified) + "\n" +
        "*Yetkili:* " + (formData.contactPerson || notSpecified) + "\n" +
        "*Telefon:* " + (formData.phone || notSpecified) + "\n" +
        "*E-Posta:* " + (formData.email || notSpecified) + "\n" +
        "*Malzeme:* " + formData.materialGroup + "\n" +
        "*Termin:* " + (formData.urgency === 'urgent' ? '🔴 Acil (Aynı Gün)' : '🟢 Standart') + "\n" +
        "*Ebat/Teknik Not:* " + (formData.dimensionsNotes || noneText) + "\n" +
        (fileName ? ("*Ekli CAD Dosyası:* " + fileName + "\n") : "") +
        "----------------------------------------" + "\n" +
        "Teknik şartname ve fiyat teklifinizi rica ederim.";

    const phoneClean = COMPANY_INFO.phone.replace(/[^0-9]/g, '');
    window.open("https://wa.me/" + phoneClean + "?text=" + encodeURIComponent(text), '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#0c0e15] border border-[#434655]/50 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,240,255,0.1)] flex flex-col overflow-hidden">
        {/* Modal Başlık Çubuğu */}
        <div className="flex items-center justify-between p-5 border-b border-[#434655]/40 bg-[#121520]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#2563eb]/20 text-[#3b82f6] border border-[#2563eb]/40">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                {t.modalTitle}
              </h3>
              <p className="text-xs text-[#8d90a0]">
                {t.modalSubtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#8d90a0] hover:text-white hover:bg-[#1f2330] transition-colors cursor-pointer"
            title="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal İçeriği */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 custom-scrollbar">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">{t.successTitle}</h4>
              <p className="text-sm text-[#c3c6d7] max-w-md mx-auto leading-relaxed">
                {t.successDesc}
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={handleSendWhatsApp}
                  className="px-5 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(37,211,102,0.4)]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  {t.btnSuccessWhatsapp}
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#1f2330] hover:bg-[#2a2f40] text-white text-xs font-semibold cursor-pointer border border-[#434655]/40"
                >
                  {t.btnCloseModal}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Güven Bandı */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#141824] border border-[#434655]/30 text-[11px] text-[#8d90a0]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00f0ff]" />
                  <span>{t.trustBadge}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t.avgTime}</span>
                </div>
              </div>

              {/* Kurumsal Bilgiler */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#c3c6d7] mb-1">
                    {t.companyLabel} <span className="text-[#00f0ff]">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#8d90a0] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder={t.companyPlaceholder}
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#12141c] border border-[#434655]/40 rounded-xl text-white placeholder-[#5a5e73] focus:border-[#00f0ff] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c3c6d7] mb-1">
                    {t.taxLabel} <span className="text-[#8d90a0] font-normal">{t.taxSub}</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t.taxPlaceholder}
                    value={formData.taxNumber}
                    onChange={(e) => setFormData({ ...formData, taxNumber: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#12141c] border border-[#434655]/40 rounded-xl text-white placeholder-[#5a5e73] focus:border-[#00f0ff] focus:outline-none"
                  />
                </div>
              </div>

              {/* İlgili Kişi & İletişim */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#c3c6d7] mb-1">
                    {t.personLabel} <span className="text-[#00f0ff]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8d90a0] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder={t.personPlaceholder}
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#12141c] border border-[#434655]/40 rounded-xl text-white placeholder-[#5a5e73] focus:border-[#00f0ff] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c3c6d7] mb-1">
                    {t.phoneLabel} <span className="text-[#00f0ff]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8d90a0] absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+90 5XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#12141c] border border-[#434655]/40 rounded-xl text-white placeholder-[#5a5e73] focus:border-[#00f0ff] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c3c6d7] mb-1">
                    {t.emailLabel}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8d90a0] absolute left-3 top-2.5" />
                    <input
                      type="email"
                      placeholder="info@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#12141c] border border-[#434655]/40 rounded-xl text-white placeholder-[#5a5e73] focus:border-[#00f0ff] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Malzeme Grubu & Termin */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#c3c6d7] mb-1">
                    {t.materialGroupLabel}
                  </label>
                  <select
                    value={formData.materialGroup}
                    onChange={(e) => setFormData({ ...formData, materialGroup: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#12141c] border border-[#434655]/40 rounded-xl text-white focus:border-[#00f0ff] focus:outline-none cursor-pointer"
                  >
                    <option value="Kestamit (Cast Polyamid PA6G)">Cast Polyamide / Kestamit (PA6G)</option>
                    <option value="PTFE Saf / Karbonlu Teflon">PTFE Virgin / Carbon / Bronze Filled Teflon</option>
                    <option value="PE 1000 (Ulpolen UHMWPE)">PE 1000 (UHMWPE Ulpolen)</option>
                    <option value="POM-C Poliasetal (Delrin)">POM-C Polyacetal (Delrin)</option>
                    <option value="PEEK 450G (Yüksek Isı / Havacılık)">PEEK 450G (High Heat / Aerospace)</option>
                    <option value="Ağır Sanayi Vinç Denge Takozu">Crane Outrigger Pads (Heavy Duty)</option>
                    <option value="Bronz / Pirinç / Alüminyum Alaşım">Bronze / Brass / Aluminum Alloys</option>
                    <option value="Özel 3 & 5 Eksen CNC Talaşlı İmalat">Custom 3 & 5-Axis CNC Machining</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#c3c6d7] mb-1">
                    {t.urgencyLabel}
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#12141c] border border-[#434655]/40 rounded-xl text-white focus:border-[#00f0ff] focus:outline-none cursor-pointer"
                  >
                    <option value="normal">{t.urgencyNormal}</option>
                    <option value="urgent">{t.urgencyUrgent}</option>
                  </select>
                </div>
              </div>

              {/* Ebat, Ölçü, Tolerans ve Notlar */}
              <div>
                <label className="block text-xs font-medium text-[#c3c6d7] mb-1">
                  {t.notesLabel} <span className="text-[#00f0ff]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={t.notesPlaceholder}
                  value={formData.dimensionsNotes}
                  onChange={(e) => setFormData({ ...formData, dimensionsNotes: e.target.value })}
                  className="w-full p-3 text-xs bg-[#12141c] border border-[#434655]/40 rounded-xl text-white placeholder-[#5a5e73] focus:border-[#00f0ff] focus:outline-none resize-none"
                />
              </div>

              {/* Teknik Çizim / CAD Dosyası Yükleme Simülasyonu */}
              <div>
                <label className="block text-xs font-medium text-[#c3c6d7] mb-1">
                  {t.fileLabel} <span className="text-[#8d90a0] font-normal">{t.fileFormats}</span>
                </label>
                <label className="flex flex-col items-center justify-center p-3 sm:p-4 border-2 border-dashed border-[#434655]/50 hover:border-[#00f0ff]/60 rounded-xl bg-[#12141c] cursor-pointer transition-colors">
                  <input
                    type="file"
                    accept=".step,.stp,.dxf,.dwg,.pdf,.png,.jpg,.jpeg"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  {fileName ? (
                    <div className="flex items-center gap-2 text-xs text-[#00f0ff]">
                      <FileCheck className="w-5 h-5 text-emerald-400" />
                      <span className="font-semibold">{fileName}</span>
                      <span className="text-[10px] text-[#8d90a0]">{t.fileChange}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
                      <UploadCloud className="w-5 h-5 text-[#3b82f6]" />
                      <span>{t.fileUploadText}</span>
                    </div>
                  )}
                </label>
              </div>

              {/* Aksiyon Butonları */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? t.btnSubmitting : t.btnSubmit}
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(37,211,102,0.3)] shrink-0"
                  title="Formu Doğrudan WhatsApp'a Aktar"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  {t.btnWhatsapp}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Modal Alt Bilgi (Footer) */}
        <div className="p-3 bg-[#0a0c13] border-t border-[#434655]/30 flex flex-wrap items-center justify-between text-[11px] text-[#8d90a0] px-5">
          <div className="flex items-center gap-2">
            <span>{t.footerDirectLine}</span>
            <a href={"tel:" + COMPANY_INFO.phone} className="text-white hover:text-[#00f0ff] font-mono font-bold">
              {COMPANY_INFO.formattedPhone} ({COMPANY_INFO.authorizedPerson})
            </a>
          </div>
          <span className="hidden sm:inline">{t.footerFacility}</span>
        </div>
      </div>
    </div>
  );
};
