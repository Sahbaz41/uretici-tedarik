import React from 'react';
import {
  X,
  FileText,
  Download,
  Printer,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Phone,
  MessageCircle,
  User,
  Factory,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATALOG_SECTIONS_TR = [
  { page: '01', title: 'Kurumsal Profil, İmalat & İthalat, 3-5 Eksen CNC Parkuru', tag: 'Genel Bakış' },
  { page: '02-03', title: 'Polietilen Levha (HDPE) & Ulpolen 1000 (UHMWPE)', tag: 'Aşınma Plakaları' },
  { page: '04-05', title: 'Kestamit P6 G (Cast Polyamid Döküm Naylon) & PA6', tag: 'Mühendislik Plastiği' },
  { page: '06', title: 'POM-C (Delrin / Polioksimetilen)', tag: 'Boyutsal Kararlılık' },
  { page: '07', title: 'PTFE (Teflon) Levha, Çubuk ve Film (-260°C ~ +260°C)', tag: 'Yüksek Sıcaklık' },
  { page: '08-10', title: 'Polypropylene [PP], PVC-U B1 Yanmaz & PVDF', tag: 'Kimyasal Dayanım' },
  { page: '11-13', title: 'PET, PEEK (260°C) & PBI Polybenzimidazole (310-500°C)', tag: 'Ekstrem Termoplastik' },
  { page: '14-17', title: 'Teflon Contalon, PTFE Hortum & Grafit/Aramid Salmastralar', tag: 'Sızdırmazlık' },
  { page: '18', title: 'PTFE Cam Elyaf (Teflon) Kumaş (260°C+)', tag: 'Fırın Bantları' },
  { page: '19-20', title: 'FR4 Yeşil Epoksi & Fenolik Pamuk Fiber Levha ve Çubuk', tag: 'Elektrik/Mekanik İzolasyon' },
  { page: '21', title: 'Poliüretan - Elastomer - Vulkollan (Kalıp Yayları & Çubuk)', tag: 'Darbe Sönümleme' },
  { page: '22-24', title: 'Solid Polikarbonat, Oluklu Levha & PET-G', tag: 'Kırılmaz Şeffaf' },
  { page: '25', title: 'Mikanit Levha (500-700°C Isıtıcı İzolasyonu)', tag: 'Termal Direnç' },
  { page: '26-27', title: 'Kauçuk Levhalar (Viton, EPDM, Neopren) & Silikon Levha', tag: 'Elastomer' },
  { page: '28', title: 'PVC Şeffaf Şerit Perde Sistemleri', tag: 'Isı / Hijyen Perdesi' },
  { page: '29-32', title: 'Yanmaz Kumaşlar (280-1200°C) & Seramik Elyaf Battaniye', tag: '1200-1600°C Isı' },
  { page: '33-35', title: 'Seramik & Cam Elyaf Ürünler, PP & PE Kaynak Telleri', tag: 'Teknik İzolasyon' },
  { page: '36', title: 'Yanmaz Nikel Kaplı Bakır Kablo (400°C Yangın Güvenliği)', tag: 'Sertifikalı Kablo' },
  { page: '37-40', title: 'Alüminyum (1050-7075), Özel Bakır, Kızıl-Bronz & Sarı-Pirinç', tag: 'Endüstriyel Metal' },
  { page: '41', title: 'Vinç Ayak Denge Takozu (HDPE 75 Ton/Adet Basınç Dayanımı)', tag: 'Ağır Hizmet Güvenlik' },
  { page: '42', title: 'Civa Çeliği H8 (1.2210 / 115CrV3 - 60-63 HRC Sertlik)', tag: 'Kalıp & Miller' },
];

const CATALOG_SECTIONS_EN = [
  { page: '01', title: 'Corporate Profile, Manufacturing & Import, 3-5 Axis CNC Fleet', tag: 'Overview' },
  { page: '02-03', title: 'Polyethylene Sheet (HDPE) & Ulpolen 1000 (UHMWPE)', tag: 'Wear Liners' },
  { page: '04-05', title: 'Cast Polyamide (Kestamit PA6G) & Extruded PA6', tag: 'Engineering Plastic' },
  { page: '06', title: 'POM-C (Polyacetal / Delrin)', tag: 'Dimensional Stability' },
  { page: '07', title: 'Virgin PTFE (Teflon) Sheet, Rod & Film (-260°C ~ +260°C)', tag: 'High Temperature' },
  { page: '08-10', title: 'Polypropylene [PP], PVC-U B1 Flame Retardant & PVDF', tag: 'Chemical Resistance' },
  { page: '11-13', title: 'PET, PEEK (260°C) & PBI Polybenzimidazole (310-500°C)', tag: 'Extreme Polymers' },
  { page: '14-17', title: 'Expanded PTFE Tape (Contalon), Hoses & Gland Packings', tag: 'Sealing Solutions' },
  { page: '18', title: 'PTFE Glass Fabric (Teflon Mesh) Belts (260°C+)', tag: 'Dryer Belts' },
  { page: '19-20', title: 'FR4 Epoxy Glass Sheet & Phenolic Cotton Laminated Sheet/Rod', tag: 'Electrical / Mechanical Insulation' },
  { page: '21', title: 'Polyurethane - Elastomer - Vulkollan (Die Springs & Rods)', tag: 'Shock Absorption' },
  { page: '22-24', title: 'Solid Polycarbonate, Multiwall Sheet & PET-G', tag: 'Impact Transparent' },
  { page: '25', title: 'Micanite Sheet (500-700°C Heater Insulation)', tag: 'Thermal Resistance' },
  { page: '26-27', title: 'Rubber Sheets (Viton, EPDM, Neoprene, NBR) & Silicone Sheet', tag: 'Elastomers' },
  { page: '28', title: 'PVC Transparent Strip Curtain Systems', tag: 'Thermal / Dust Barrier' },
  { page: '29-32', title: 'Flame Retardant Fabrics (280-1200°C) & Ceramic Fiber Blanket', tag: '1200-1600°C High Temp' },
  { page: '33-35', title: 'Ceramic & Glass Fiber Products, PP & PE Welding Rods', tag: 'Technical Insulation' },
  { page: '36', title: 'Fire-Proof Nickel-Plated Copper Wire (400°C Safety)', tag: 'Certified Cable' },
  { page: '37-40', title: 'Aluminum (1050-7075), Special Copper Alloys, Bronze & Brass', tag: 'Industrial Metals' },
  { page: '41', title: 'Crane Outrigger Pad (Virgin HDPE 75-Ton Pressure Rating)', tag: 'Heavy Duty Safety' },
  { page: '42', title: 'Silver Steel H8 Drill Rod (1.2210 / 115CrV3 - 60-63 HRC)', tag: 'Tooling & Shafts' },
];

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].catalog;
  const sections = language === 'tr' ? CATALOG_SECTIONS_TR : CATALOG_SECTIONS_EN;

  if (!isOpen) return null;

  const handleDownloadCatalogPdf = () => {
    const isEn = language === 'en';
    const content = `=====================================================
${COMPANY_INFO.fullName}
${isEn ? 'Official Slogan:' : 'Resmi Slogan:'} ${COMPANY_INFO.slogan}
${isEn ? 'Authorized:' : 'Yetkili:'} ${COMPANY_INFO.authorizedPerson} | ${isEn ? 'Tel:' : 'Tel:'} ${COMPANY_INFO.phone}
${isEn ? 'Web:' : 'Web:'} ${COMPANY_INFO.website} | ${isEn ? 'Email:' : 'E-posta:'} ${COMPANY_INFO.email}
Instagram: @${COMPANY_INFO.instagram}
${isEn ? 'Address:' : 'Adres:'} ${COMPANY_INFO.location}
=====================================================

${isEn ? '42-PAGE OFFICIAL TECHNICAL PRODUCT & MACHINING CATALOG TABLE OF CONTENTS:' : '42 SAYFALIK RESMİ TEKNİK ÜRÜN VE İMALAT KATALOĞU İÇİNDEKİLER:'}

${sections.map((s, idx) => `${idx + 1}. [${s.page}] ${s.title} (${s.tag})`).join('\n')}

=====================================================
${isEn ? 'CUSTOM PROJECTS & CNC MACHINING SUPPORT:' : 'ÖZEL PROJE VE FASON İMALAT DESTEĞİ:'}
${isEn ? '3-Axis, 5-Axis CNC Milling, Swiss Lathe & Defense Industry Production.' : '3 Eksen, 5 Eksen CNC Frezeleme, Kayar Otomat ve Savunma Sanayi Üretimi.'}
İbrahim Şahbaz: +90 533 377 18 97
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = isEn
      ? `Uretici_Tedarik_42_Page_Technical_Catalog.txt`
      : `Uretici_Tedarik_42_Sayfalik_Teknik_Katalog.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const whatsappMsg = language === 'en'
    ? encodeURIComponent("Hello, I would like to receive detailed technical and pricing information regarding the products in your 42-page catalog.")
    : encodeURIComponent("Merhaba, Üretici Tedarik 42 sayfalık kataloğunuzdaki ürünler hakkında bilgi almak istiyorum.");

  return (
    <div
      id="catalog-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="catalog-modal-container"
        className="w-full max-w-3xl bg-[#0c0e13] border border-[#434655]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Başlık Çubuğu */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#434655]/40 bg-[#1a1b21]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#2563eb]/20 text-[#4cd7f6] flex items-center justify-center border border-[#2563eb]/40">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#4cd7f6] uppercase tracking-wider font-bold">
                  {t.badgeOfficial}
                </span>
                <span className="hidden sm:inline font-mono text-[9px] text-[#ffb77d] px-1.5 py-0.5 rounded bg-[#33353a] font-bold">
                  {COMPANY_INFO.slogan}
                </span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#e2e2e9]">
                {t.modalTitle}
              </h3>
            </div>
          </div>
          <button
            id="catalog-modal-close-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#c3c6d7] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gövde: 42 Sayfalık Katalog Dizin Listesi */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col gap-4 text-sm">
          {/* Yetkili & Doğrudan İletişim Kartı */}
          <div className="p-4 rounded-xl bg-[#1e1f25] border border-[#2563eb]/40 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#b4c5ff] text-[#002a78] flex items-center justify-center font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#8d90a0] uppercase block">
                  {t.responsible}
                </span>
                <span className="font-bold text-[#e2e2e9]">
                  {COMPANY_INFO.authorizedPerson}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                id="catalog-call-direct"
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2563eb] hover:bg-[#0053db] text-white font-mono text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.formattedPhone}</span>
              </a>

              <a
                id="catalog-whatsapp-link"
                href={`https://wa.me/905333771897?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#15803d] hover:bg-[#166534] text-white font-mono text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Katalog İndeksi */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-[#8d90a0] uppercase font-semibold flex items-center justify-between">
              <span>{t.indexTitle}</span>
              <span className="text-[#4cd7f6]">{t.allDownloadable}</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((sec) => (
                <div
                  key={sec.page}
                  className="p-2.5 rounded-lg bg-[#14161d] border border-[#434655]/30 flex items-start gap-2.5 hover:border-[#b4c5ff]/40 transition-colors"
                >
                  <span className="font-mono text-[10px] text-[#4cd7f6] px-1.5 py-0.5 rounded bg-[#1e1f25] border border-[#434655]/40 shrink-0 mt-0.5">
                    {t.pageLabel} {sec.page}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-xs text-[#e2e2e9] block truncate">
                      {sec.title}
                    </span>
                    <span className="text-[10px] font-mono text-[#8d90a0]">
                      {sec.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alt Butonlar */}
        <div className="p-4 border-t border-[#434655]/40 bg-[#1a1b21] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs text-[#8d90a0]">
            <a
              href={`https://${COMPANY_INFO.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4cd7f6] transition-colors"
            >
              {COMPANY_INFO.website}
            </a>
            <span>•</span>
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffb77d] transition-colors"
            >
              @{COMPANY_INFO.instagram}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="catalog-print-btn"
              onClick={() => window.print()}
              className="px-4 h-10 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#4cd7f6] text-xs font-semibold flex items-center gap-2 border border-[#434655]/40 transition-colors cursor-pointer"
              title={t.btnPrint}
            >
              <Printer className="w-4 h-4" />
              <span>{t.btnPrint}</span>
            </button>
            <button
              id="catalog-close-bottom"
              onClick={onClose}
              className="px-4 h-10 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#e2e2e9] text-xs font-semibold transition-colors cursor-pointer"
            >
              {t.btnClose}
            </button>
            <button
              id="catalog-download-pdf-btn"
              onClick={handleDownloadCatalogPdf}
              className="px-5 h-10 rounded-lg bg-[#2563eb] text-[#eeefff] text-xs font-bold flex items-center gap-2 shadow-md hover:bg-[#0053db] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.btnDownload}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
