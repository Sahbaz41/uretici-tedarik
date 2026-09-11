import React from 'react';
import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Instagram,
  Globe,
  User,
  Factory,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  onSelectCategoryFilter: (categoryId: string) => void;
  onOpenCatalog: () => void;
  onOpenLegal: (tab: 'kvkk' | 'privacy' | 'sales' | 'distance') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategoryFilter,
  onOpenCatalog,
  onOpenLegal,
}) => {

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="w-full bg-[#0c0e13] border-t border-[#434655]/30 text-[#c3c6d7] pt-16 pb-12"
    >
      <div className="w-full px-4 sm:px-6 mx-auto max-w-[90rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#434655]/20">
          {/* Kolon 1: Logo & Şirket Bilgileri */}
          <div className="flex flex-col gap-4">
            <CompanyLogo
              className="h-9 sm:h-10"
              showText={true}
              showSlogan={true}
            />

            {/* Orijinal Vektör Fabrika & Monogram Amblem Rozeti */}
            <div className="p-3 rounded-2xl bg-[#12141c]/90 border border-[#2563eb]/30 shadow-[0_0_20px_rgba(0,240,255,0.08)] flex items-center justify-center group/emblem hover:border-[#00f0ff]/50 transition-colors">
              <img
                src="/uretici-tedarik-logo.svg"
                alt="Üretici Tedarik Orijinal Vektör Fabrika & Monogram Amblemi"
                className="w-full max-w-[240px] h-auto object-contain transition-transform duration-300 group-hover/emblem:scale-[1.02]"
                loading="lazy"
              />
            </div>

            <p className="text-xs text-[#c3c6d7] leading-relaxed">
              Mühendislik plastikleri imalatı, ithalatı, 3 &amp; 5 eksen CNC talaşlı
              işleme, kayar otomat ve savunma sanayi makine-teçhizat üretimi.
            </p>

            <div className="flex flex-col gap-2.5 text-[#e2e2e9] text-xs font-mono">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                <span className="font-sans font-bold text-[#b4c5ff]">
                  Yetkili: {COMPANY_INFO.authorizedPerson}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-[#b4c5ff] transition-colors font-bold"
                >
                  {COMPANY_INFO.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#b4c5ff] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                <a
                  href={`https://${COMPANY_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b4c5ff] transition-colors"
                >
                  {COMPANY_INFO.website}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#ffb77d] shrink-0" />
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ffb77d] transition-colors"
                >
                  @{COMPANY_INFO.instagram}
                </a>
              </div>
              <div className="flex items-start gap-2 text-[#8d90a0] pt-1">
                <MapPin className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                <span>
                  Marmara Geri Dönüşümcüler San. Sit. Çayırova / Gebze, Kocaeli
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              <span className="px-2 py-0.5 rounded bg-[#282a2f] text-[#4cd7f6] font-mono text-[10px] border border-[#434655]/40 font-semibold">
                3 & 5 Eksen CNC
              </span>
              <span className="px-2 py-0.5 rounded bg-[#282a2f] text-[#b4c5ff] font-mono text-[10px] border border-[#434655]/40 font-semibold">
                Kayar Otomat
              </span>
              <span className="px-2 py-0.5 rounded bg-[#282a2f] text-[#ffb77d] font-mono text-[10px] border border-[#ffb77d]/40 font-semibold">
                {COMPANY_INFO.slogan}
              </span>
            </div>
          </div>

          {/* Kolon 2: Ürün Grupları */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-bold text-[#e2e2e9] uppercase tracking-wider">
              Ürün Grupları
            </span>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('muhendislik-plastikleri');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#b4c5ff] transition-colors text-left"
                >
                  Mühendislik Plastikleri (Kestamit)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('pe1000-hdpe');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#b4c5ff] transition-colors text-left"
                >
                  Polietilen HDPE & PE 1000 (UHMWPE)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('teflon-ptfe');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#b4c5ff] transition-colors text-left"
                >
                  Teflon (PTFE) Serisi Levha & Bant
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('poliuretan-kalip');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#b4c5ff] transition-colors text-left"
                >
                  Poliüretan & Kalıp Yayları (Desmadur)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('muhendislik-plastikleri');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#b4c5ff] transition-colors text-left"
                >
                  Delrin (POM-C) Çubuk & Levha
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('eva-tatami');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#b4c5ff] transition-colors text-left"
                >
                  Eva Rulo ve Tatami Zemin Matı
                </button>
              </li>
            </ul>
          </div>

          {/* Kolon 3: Ağır Sanayi & Donanım */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-bold text-[#e2e2e9] uppercase tracking-wider">
              Ağır Sanayi & Donanım
            </span>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('civa-celigi');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Civa Çeliği H8 (1.2210 / 115CrV3)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('vinc-denge-5th-wheel');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Vinç Ayak Denge Pabuçları
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('vinc-denge-5th-wheel');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Beşinci Teker Kaydırıcı Parça (Fifth Wheel)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('epoksi-fr4-mikanit');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Mikanit & FR4 Epoksi İzolasyon Levhaları
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('yanmaz-kablo');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Yanmaz Nikel Kaplı Silikon Kablo (400°C)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategoryFilter('alasimli-bakir-bronz');
                    scrollToSection('urunler-bolumu');
                  }}
                  className="hover:text-[#4cd7f6] transition-colors text-left"
                >
                  Özel Alaşımlı Bakır & Bronz Burçlar
                </button>
              </li>
            </ul>
          </div>

          {/* Kolon 4: Kurumsal & Destek */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-bold text-[#e2e2e9] uppercase tracking-wider">
              Kurumsal & Destek
            </span>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('kurumsal-bolum')}
                  className="hover:text-[#e2e2e9] transition-colors text-left"
                >
                  Hakkımızda & Fabrika Gücü
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCatalog}
                  className="hover:text-[#4cd7f6] transition-colors text-left flex items-center gap-1"
                >
                  <span>2025 Teknik Ürün Kataloğu (PDF)</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('rfq-formu')}
                  className="hover:text-[#e2e2e9] transition-colors text-left"
                >
                  CAD / STEP Veri İndirme & RFQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('teknik-bilgi-ve-sss')}
                  className="hover:text-[#4cd7f6] transition-colors text-left font-medium flex items-center gap-1"
                >
                  <span>Teknik SSS & Malzeme Rehberi (AEO)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#b4c5ff] transition-colors text-left cursor-pointer"
                >
                  Gizlilik ve Güvenlik İlkeleri
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('kvkk')}
                  className="hover:text-[#b4c5ff] transition-colors text-left cursor-pointer"
                >
                  KVKK Aydınlatma Metni
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('distance')}
                  className="hover:text-[#b4c5ff] transition-colors text-left cursor-pointer"
                >
                  Mesafeli Satış Sözleşmesi
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Telif & Yasal Bağlantılar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8d90a0]">
          <p>
            © 2026 {COMPANY_INFO.fullName} — {COMPANY_INFO.slogan}
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#e2e2e9] transition-colors cursor-pointer"
            >
              Gizlilik Politikası
            </button>
            <button
              onClick={() => onOpenLegal('kvkk')}
              className="hover:text-[#e2e2e9] transition-colors cursor-pointer"
            >
              KVKK Aydınlatma Metni
            </button>
            <button
              onClick={() => onOpenLegal('sales')}
              className="hover:text-[#e2e2e9] transition-colors cursor-pointer"
            >
              Satış & Sevkiyat Şartları
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

