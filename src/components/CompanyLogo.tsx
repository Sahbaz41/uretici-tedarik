import React from 'react';

interface CompanyLogoProps {
  className?: string;
  showText?: boolean;
  showSlogan?: boolean;
  variant?: 'full' | 'icon-only' | 'monochrome';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = 'h-10',
  showText = true,
  showSlogan = false,
  variant = 'full',
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Orijinal Logo İkonu: Geometrik 'U' Amblemi ve Endüstriyel Fabrika Silueti */}
      <svg
        viewBox="0 0 240 100"
        className="h-full w-auto aspect-[240/100] shrink-0 fill-current"
        aria-label="Üretici Tedarik Logo İkonu"
      >
        {/* Sol Geometrik Monogram 'U' */}
        <g className="text-[#e2e2e9]">
          <path
            d="M8 20 H36 V30 H18 V72 H36 V56 H28 V46 H46 V82 H8 Z"
            fill="currentColor"
          />
        </g>

        {/* Fabrika Bacaları ve Tesis Silueti (Katalogdaki Orijinal Çizim) */}
        <g className="text-[#4cd7f6] stroke-[#4cd7f6]" strokeWidth="2.5" fill="none">
          {/* 1. Ünite / Silo */}
          <path d="M58 82 V42 H84 V82" />
          <line x1="62" y1="50" x2="80" y2="50" />
          <line x1="62" y1="58" x2="80" y2="58" />
          <line x1="62" y1="66" x2="80" y2="66" />

          {/* 2. Testere Dişi Fabrika Çatısı */}
          <path d="M84 82 V50 L108 34 V82" />
          <line x1="90" y1="60" x2="102" y2="60" />
          <line x1="90" y1="68" x2="102" y2="68" />

          {/* 3. İkinci Üçgen Çatı */}
          <path d="M108 82 V52 L132 38 V82" />
          <line x1="114" y1="60" x2="126" y2="60" />
          <line x1="114" y1="68" x2="126" y2="68" />

          {/* Yüksek Endüstriyel Baca */}
          <path d="M136 82 V22 H146 V82" />
          <line x1="134" y1="28" x2="148" y2="28" strokeWidth="2" />
          <line x1="134" y1="36" x2="148" y2="36" strokeWidth="2" />

          {/* Fabrika İdari / Çok Katlı Pencereli Bina */}
          <path d="M152 82 V38 H184 V82" />
          {/* Pencereler */}
          <rect x="156" y="44" width="6" height="6" fill="#4cd7f6" stroke="none" />
          <rect x="165" y="44" width="6" height="6" fill="#4cd7f6" stroke="none" />
          <rect x="174" y="44" width="6" height="6" fill="#4cd7f6" stroke="none" />
          <rect x="156" y="54" width="6" height="6" fill="#4cd7f6" stroke="none" />
          <rect x="165" y="54" width="6" height="6" fill="#4cd7f6" stroke="none" />
          <rect x="174" y="54" width="6" height="6" fill="#4cd7f6" stroke="none" />
          <rect x="156" y="64" width="6" height="6" fill="#4cd7f6" stroke="none" />
          <rect x="165" y="64" width="6" height="6" fill="#4cd7f6" stroke="none" />
          <rect x="174" y="64" width="6" height="6" fill="#4cd7f6" stroke="none" />

          {/* Sağ Düşük Çatı Hattı */}
          <path d="M184 82 V60 L204 48 V82" />
          {/* Zemin Temel Çizgisi */}
          <line x1="50" y1="82" x2="210" y2="82" strokeWidth="3" stroke="#b4c5ff" />
        </g>
      </svg>

      {/* Şirket Tipografisi */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-display font-black text-[18px] sm:text-[21px] text-[#e2e2e9] tracking-tight hover:text-[#b4c5ff] transition-colors">
              ÜRETİCİ TEDARİK
            </span>
          </div>
          <span className="font-mono text-[9px] sm:text-[10.5px] text-[#c3c6d7] tracking-wider uppercase font-semibold mt-1">
            TEKNİK PLASTİK POLİMER METAL LTD. ŞTİ.®
          </span>
          {showSlogan && (
            <span className="font-mono text-[10px] text-[#ffb77d] font-bold tracking-widest uppercase mt-0.5">
              ‘SİZ İSTEYİN BİZ ÜRETELİM’
            </span>
          )}
        </div>
      )}
    </div>
  );
};
