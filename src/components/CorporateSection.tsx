import React from 'react';
import {
  Scissors,
  ShieldCheck,
  Cpu,
  Truck,
  Building2,
  Award,
  CheckCircle2,
  Factory,
  Phone,
  Mail,
  Instagram,
  Globe,
  User,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';

export const CorporateSection: React.FC = () => {
  return (
    <div id="kurumsal-bolum" className="flex flex-col gap-6">
      {/* Üst Rozet & Resmi Slogan */}
      <div className="flex items-center gap-2.5 flex-wrap">
        <span className="px-3 py-1 rounded bg-[#00788c]/30 text-[#4cd7f6] font-mono text-[11px] uppercase tracking-wider font-bold">
          {COMPANY_INFO.fullName}
        </span>
        <span className="px-3 py-1 rounded bg-[#ffb77d]/20 text-[#ffb77d] font-mono text-[11px] uppercase tracking-widest font-extrabold border border-[#ffb77d]/30">
          {COMPANY_INFO.slogan}
        </span>
      </div>

      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e2e2e9] tracking-tight leading-tight">
        Mühendislik Plastikleri İmalatı, İthalatı ve Savunma Sanayi Üretim Gücü
      </h2>

      {/* Katalogdan Alınan Orijinal Kurumsal Açıklama */}
      <div className="flex flex-col gap-3.5 text-[#c3c6d7] text-sm sm:text-base leading-relaxed bg-[#0c0e13]/85 border border-[#434655]/40 p-6 rounded-2xl shadow-xl">
        <p>
          <strong className="text-[#e2e2e9] font-bold">
            {COMPANY_INFO.fullName}
          </strong>{' '}
          olarak mühendislik plastiklerinin imalatı ve ithalatında uzman bir
          tedarikçidir. Çeşitli endüstri sektörlerinde başlıca{' '}
          <strong className="text-[#4cd7f6]">savunma sanayi</strong> olmak
          üzere makine, otomotiv ve günlük kullanımda geniş bir ürün yelpazesi
          sunan Üretici Tedarik, müşteri ihtiyaçlarını en iyi şekilde
          karşılamayı hedeflemektedir.
        </p>

        {/* İmalat vs İthalat İkili Tablo (Page 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-2">
          {/* 1. Üretimini Yapmış Olduğumuz */}
          <div className="p-4 rounded-xl bg-[#1a1b21] border border-[#2563eb]/40 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Factory className="w-4 h-4 text-[#b4c5ff]" />
              <span className="font-mono text-xs font-bold text-[#b4c5ff] uppercase tracking-wider">
                Üretimini Yapmış Olduğumuz
              </span>
            </div>
            <p className="text-xs text-[#e2e2e9] leading-relaxed">
              <strong>Cast Polyamid (Kestamit)</strong>,{' '}
              <strong>Polyamid PA6</strong>,{' '}
              <strong>HDPE Polietilen</strong>,{' '}
              <strong>Polietilen 1000 (Ulpolen UHMWPE)</strong>,{' '}
              <strong>Derlin (POM)</strong>, <strong>Teflon (PTFE)</strong> ve{' '}
              <strong>Vinç Denge Takozları</strong> başlıca imalat
              ürünlerimizdir.
            </p>
          </div>

          {/* 2. İthalatını Yapmış Olduğumuz */}
          <div className="p-4 rounded-xl bg-[#1a1b21] border border-[#00788c]/40 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-[#4cd7f6]" />
              <span className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider">
                İthalatını Yapmış Olduğumuz
              </span>
            </div>
            <p className="text-xs text-[#e2e2e9] leading-relaxed">
              <strong>FR4 Epoksi</strong>, <strong>Mikanit</strong>,{' '}
              <strong>Fenolik Fiber</strong>, PTFE (Teflon) çeşitleri,{' '}
              <strong>Polipropilen</strong>, <strong>PEEK</strong>,{' '}
              <strong>PET & PVDF</strong>, PVC Silikon ve Kauçuk levhalar,{' '}
              <strong>Yanmaz Kumaşlar</strong> ve Alaşımlı Metaller.
            </p>
          </div>
        </div>

        {/* Yüksek Teknoloji CNC & Makina Parkuru Vurgusu */}
        <p className="text-xs sm:text-sm text-[#c3c6d7] pt-1 border-t border-[#434655]/25">
          Beklenti ve gereksinimlerinizi karşılamak için son derece deneyimli
          ekiplerimizle yüksek teknoloji{' '}
          <span className="text-[#4cd7f6] font-semibold">
            3 Eksen, 5 Eksen CNC işleme ve kayar otomat
          </span>{' '}
          hizmeti sunuyoruz. Ayrıca Üretici Tedarik geniş ürün yelpazesi yanı
          sıra büyük bir makina parkuruna sahip olup iş ortaklarımız ile
          birlikte{' '}
          <span className="text-[#b4c5ff] font-semibold">
            Savunma sanayinde birçok noktada makine ve teçhizat üretimi
          </span>{' '}
          yapmaktadır.
        </p>

        {/* Yetkili & İletişim Şeridi */}
        <div className="mt-2 pt-3 border-t border-[#434655]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#b4c5ff] flex items-center justify-center text-[#002a78]">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[#8d90a0] block text-[10px] uppercase font-mono">
                Şirket Yetkilisi
              </span>
              <span className="font-bold text-[#e2e2e9] text-xs sm:text-sm">
                {COMPANY_INFO.authorizedPerson}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              id="corp-direct-call"
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#b4c5ff] font-mono text-xs font-semibold transition-colors border border-[#434655]/40"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.formattedPhone}</span>
            </a>

            <a
              id="corp-instagram-link"
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#ffb77d] font-mono text-xs font-semibold transition-colors border border-[#434655]/40"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@{COMPANY_INFO.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Avantaj Kartı */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1e1f25] border border-[#434655]/30 hover:border-[#b4c5ff]/40 transition-colors">
          <Scissors className="w-5 h-5 text-[#b4c5ff] shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold">
              3 & 5 Eksen CNC Talaşlı İmalat
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              Hassas toleranslı frezeleme & kayar otomat
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1e1f25] border border-[#434655]/30 hover:border-[#4cd7f6]/40 transition-colors">
          <ShieldCheck className="w-5 h-5 text-[#4cd7f6] shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold">
              Savunma Sanayi Makine & Teçhizat
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              Stratejik iş ortaklıkları ile sertifikalı üretim
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1e1f25] border border-[#434655]/30 hover:border-[#ffb77d]/40 transition-colors">
          <Cpu className="w-5 h-5 text-[#ffb77d] shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold">
              Yerli İmalat & Geniş İthalat Gamı
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              Kestamit, PTFE, PEEK, PBI ve FR4 stoktan sevk
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1e1f25] border border-[#434655]/30 hover:border-[#b4c5ff]/40 transition-colors">
          <Truck className="w-5 h-5 text-[#b4c5ff] shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold">
              Çayırova Depodan Doğrudan Sevk
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              Hızlı teslimat ve milimetrik fire optimizasyonu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
