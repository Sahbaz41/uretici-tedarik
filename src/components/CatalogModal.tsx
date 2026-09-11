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

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATALOG_SECTIONS = [
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

export const CatalogModal: React.FC<CatalogModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleDownloadCatalogPdf = () => {
    const content = `=====================================================
${COMPANY_INFO.fullName}
Resmi Slogan: ${COMPANY_INFO.slogan}
Yetkili: ${COMPANY_INFO.authorizedPerson} | Tel: ${COMPANY_INFO.phone}
Web: ${COMPANY_INFO.website} | E-posta: ${COMPANY_INFO.email}
Instagram: @${COMPANY_INFO.instagram}
Adres: ${COMPANY_INFO.location}
=====================================================

42 SAYFALIK RESMİ TEKNİK ÜRÜN VE İMALAT KATALOĞU İÇİNDEKİLER:

1. Kurumsal Profil, İmalat ve İthalat Portföyü, 3 ve 5 Eksen CNC Parkuru
2. Polietilen Levha (HDPE PE-HD / PE 300 / PE 500)
3. Ulpolen1000 (UHMWPE) Aşınma ve Bunker Plakaları
4. Kestamit P6 G (Cast Polyamid Döküm Naylon - Sarı ve Natürel)
5. Poliamid PA6 (-20°C ile +85°C)
6. POM-C (Delrin / Polioksimetilen)
7. PTFE (Teflon) Levha - Çubuk - Film (-260°C ile +260°C)
8. Polypropylene [PP] Homopolimer ve Kopolimer
9. PVC-U Polivinil Klorür DIN 4102 B1 Yanmazlık
10. PVDF Poliviniliden Florür (-30°C ile +140°C)
11. PET Polyethylene Terephthalate
12. PEEK Polietereterketon (260°C Sürekli Çalışma)
13. PBI Polybenzimidazole (310°C - 500°C Ekstrem Termoplastik)
14. Teflon (PTFE) Contalon Genişletilmiş Conta Bandı (-296°C ~ +300°C)
15. PTFE (Teflon) Hortum
16. Teflon Salmastralar (Saf ve Grafitli)
17. Zebra Örgülü ve Aramid İçerikli Salmastra
18. PTFE Cam Elyaf Kumaş
19. FR4 Yeşil Epoksi Levha ve Çubuk (180°C)
20. Fenolik Pamuk Fiber Levha ve Çubuk (140°C)
21. Poliüretan - Elastomer - Vulkollan Kalıp Yayları ve Çubuk
22. Solid Polikarbonat Levhalar (Camdan 200 Kat Dayanıklı)
23. Polikarbonat Oluklu Levha
24. PET-G Levhalar
25. Mikanit Levha (500-700°C Isıtıcı İzolasyonu)
26. Kauçuk Levhalar (Viton, EPDM, Nitril, Neopren)
27. Silikon Kauçuk Levha (-50°C ile +250°C)
28. PVC Şeffaf Şerit Perde
29-32. Yanmaz Kumaşlar (280°C - 1200°C) & Seramik Elyaf Battaniye (1200°C - 1600°C)
33. Seramik ve Cam Elyaf Ürünler
34. Kalsiyum Silikat ve Monolite İzolasyon Plakaları
35. PP ve PE Kaynak Telleri
36. Yanmaz Kablo (Nikel Kaplı Bakır Kablo - 400°C)
37. Alüminyum Serileri (1050, 5754, 5083, 6013, 6061, 6082, 7075)
38. Özel Alaşımlı Bakırlar (CuCr, Küp2, CuCrZr, CuNiBe, CuCo2Be, CuNiSiCr)
39. Kızıl-Bronz Alaşımları (Rg5, Rg7, CuSn6, CuSn8, CuSn10, CuSn12, Alüminyum Bronz)
40. Sarı-Pirinç (%60 Bakır, %40 Çinko)
41. Vinç Ayak Denge Takozu (Orijinal HDPE 75 Ton Taşıma Kapasitesi)
42. Civa Çeliği H8 (1.2210 / 115CrV3 - 60-63 HRC Sertlik)

ÖZEL PROJE VE FASON İMALAT DESTEĞİ:
3 Eksen, 5 Eksen CNC Frezeleme, Kayar Otomat ve Savunma Sanayi Üretimi.
İbrahim Şahbaz: 0533 377 18 97
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Uretici_Tedarik_42_Sayfalik_Teknik_Katalog.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

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
                  Resmi Şirket Kataloğu • 42 Sayfa
                </span>
                <span className="hidden sm:inline font-mono text-[9px] text-[#ffb77d] px-1.5 py-0.5 rounded bg-[#33353a] font-bold">
                  {COMPANY_INFO.slogan}
                </span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#e2e2e9]">
                Üretici Tedarik Teknik Plastik Polimer Metal Kataloğu
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
                  Katalog Sorumlusu & Teknik Satış
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
                href={`https://wa.me/905333771897?text=Merhaba,%20Üretici%20Tedarik%2042%20sayfalık%20kataloğunuzdaki%20ürünler%20hakkında%20bilgi%20almak%20istiyorum.`}
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
              <span>Katalog Sayfa Dizinleri (42 Sayfa Tam Liste)</span>
              <span className="text-[#4cd7f6]">Tüm Sayfalar İndirilebilir</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CATALOG_SECTIONS.map((sec) => (
                <div
                  key={sec.page}
                  className="p-2.5 rounded-lg bg-[#14161d] border border-[#434655]/30 flex items-start gap-2.5 hover:border-[#b4c5ff]/40 transition-colors"
                >
                  <span className="font-mono text-[10px] text-[#4cd7f6] px-1.5 py-0.5 rounded bg-[#1e1f25] border border-[#434655]/40 shrink-0 mt-0.5">
                    S.{sec.page}
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
              title="Tarayıcıdan PDF Olarak Kaydet veya Yazdır"
            >
              <Printer className="w-4 h-4" />
              <span>PDF Olarak Kaydet / Yazdır</span>
            </button>
            <button
              id="catalog-close-bottom"
              onClick={onClose}
              className="px-4 h-10 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#e2e2e9] text-xs font-semibold transition-colors cursor-pointer"
            >
              Kapat
            </button>
            <button
              id="catalog-download-pdf-btn"
              onClick={handleDownloadCatalogPdf}
              className="px-5 h-10 rounded-lg bg-[#2563eb] text-[#eeefff] text-xs font-bold flex items-center gap-2 shadow-md hover:bg-[#0053db] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>42 Sayfalık Föyü İndir (.TXT)</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
