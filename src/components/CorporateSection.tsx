import React from 'react';
import {
  Scissors,
  ShieldCheck,
  Cpu,
  Truck,
  Factory,
  Phone,
  Instagram,
  Globe,
  User,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';

export const CorporateSection: React.FC = () => {
  return (
    <div id="kurumsal-bolum" className="flex flex-col gap-6">
      {/* Üst Rozet & Resmi Slogan */}
      <div className="flex items-center gap-2.5 flex-wrap">
        <span className="px-3 py-1 rounded-lg bg-[#00f0ff]/15 text-[#00f0ff] font-mono text-[11px] uppercase tracking-wider font-bold border border-[#00f0ff]/30">
          {COMPANY_INFO.fullName}
        </span>
        <span className="px-3 py-1 rounded-lg bg-[#ffb77d]/15 text-[#ffb77d] font-mono text-[11px] uppercase tracking-widest font-extrabold border border-[#ffb77d]/35">
          {COMPANY_INFO.slogan}
        </span>
      </div>

      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e2e2e9] tracking-tight leading-tight">
        Mühendislik Plastikleri İmalatı, İthalatı ve Savunma Sanayi Üretim Gücü
      </h2>

      {/* Katalogdan Kurumsal Açıklama & İmalat / İthalat Ayrımı */}
      <div className="flex flex-col gap-3.5 text-[#c3c6d7] text-sm sm:text-base leading-relaxed bg-[#0e1017] border border-[#434655]/40 p-6 rounded-3xl shadow-xl">
        <p>
          <strong className="text-[#e2e2e9] font-bold">
            {COMPANY_INFO.fullName}
          </strong>{' '}
          mühendislik plastiklerinin imalatı ve ithalatında uzman, Çayırova/Gebze merkezli endüstriyel tedarikçidir. Başlıca{' '}
          <strong className="text-[#00f0ff]">savunma sanayi</strong> olmak üzere ağır makine, otomotiv ve konveyör hatlarında geniş bir ürün portföyü ve yüksek hassasiyetli talaşlı imalat sunar.
        </p>

        {/* İmalat vs İthalat İkili Tablo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-2">
          {/* 1. Üretimini Yapmış Olduğumuz */}
          <div className="p-4 rounded-2xl bg-[#141722] border border-[#2563eb]/40 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Factory className="w-4 h-4 text-[#00f0ff]" />
              <span className="font-mono text-xs font-bold text-[#00f0ff] uppercase tracking-wider">
                Üretimini Yapmış Olduğumuz
              </span>
            </div>
            <p className="text-xs text-[#e2e2e9] leading-relaxed">
              <strong>Cast Polyamid (Kestamit PA6G)</strong>,{' '}
              <strong>Polyamid PA6</strong>,{' '}
              <strong>HDPE Polietilen</strong>,{' '}
              <strong>PE 1000 (Ulpolen UHMWPE)</strong>,{' '}
              <strong>POM-C Delrin</strong>, <strong>PTFE Teflon</strong> ve{' '}
              <strong>Vinç Denge Takozları</strong> başlıca imalat ürünlerimizdir.
            </p>
          </div>

          {/* 2. İthalatını Yapmış Olduğumuz */}
          <div className="p-4 rounded-2xl bg-[#141722] border border-[#00788c]/40 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-[#38bdf8]" />
              <span className="font-mono text-xs font-bold text-[#38bdf8] uppercase tracking-wider">
                İthalatını Yapmış Olduğumuz
              </span>
            </div>
            <p className="text-xs text-[#e2e2e9] leading-relaxed">
              <strong>FR4 Epoksi</strong>, <strong>Mikanit Levha</strong>,{' '}
              <strong>Fenolik Bezli Fiber</strong>, PTFE (Teflon) türevleri,{' '}
              <strong>PEEK</strong>, <strong>PVDF &amp; PET</strong>, Silikon ve Kauçuk levhalar,{' '}
              <strong>Yanmaz Kumaşlar</strong> ve Alaşımlı Metaller.
            </p>
          </div>
        </div>

        {/* Yüksek Teknoloji CNC & Makina Parkuru Vurgusu */}
        <p className="text-xs sm:text-sm text-[#c3c6d7] pt-1 border-t border-[#434655]/25">
          Beklenti ve teknik şartnamelerinizi karşılamak için deneyimli mühendislik kadromuzla yüksek teknoloji{' '}
          <span className="text-[#00f0ff] font-semibold">
            3 Eksen, 5 Eksen CNC frezeleme ve kayar otomat
          </span>{' '}
          hizmeti sunuyoruz. Savunma sanayi ve makine imalatında stratejik iş ortaklığı sağlıyoruz.
        </p>

        {/* Yetkili & İletişim Şeridi */}
        <div className="mt-2 pt-3 border-t border-[#434655]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2563eb] flex items-center justify-center text-white shadow-sm font-bold">
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141722] hover:bg-[#181b24] text-[#00f0ff] font-mono text-xs font-semibold transition-colors border border-[#434655]/40"
            >
              <Phone className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>{COMPANY_INFO.formattedPhone}</span>
            </a>

            <a
              id="corp-instagram-link"
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141722] hover:bg-[#181b24] text-[#ffb77d] font-mono text-xs font-semibold transition-colors border border-[#434655]/40"
            >
              <Instagram className="w-3.5 h-3.5 text-[#ffb77d]" />
              <span>@{COMPANY_INFO.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Avantaj Kartı */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#141722] border border-[#434655]/30 hover:border-[#00f0ff]/50 transition-colors">
          <Scissors className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold">
              3 &amp; 5 Eksen CNC Talaşlı İmalat
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              Hassas toleranslı frezeleme &amp; kayar otomat
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#141722] border border-[#434655]/30 hover:border-[#38bdf8]/50 transition-colors">
          <ShieldCheck className="w-5 h-5 text-[#38bdf8] shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold">
              Savunma Sanayi Standartları
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              Stratejik iş ortaklıkları ile sertifikalı üretim
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#141722] border border-[#434655]/30 hover:border-[#ffb77d]/50 transition-colors">
          <Cpu className="w-5 h-5 text-[#ffb77d] shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-sm text-[#e2e2e9] font-bold">
              Yerli İmalat &amp; Geniş İthalat
            </span>
            <span className="text-xs text-[#c3c6d7] mt-0.5">
              Kestamit, PTFE, PEEK, PBI ve FR4 stoktan sevk
            </span>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#141722] border border-[#434655]/30 hover:border-[#2563eb]/50 transition-colors">
          <Truck className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
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
