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
      {/* Orijinal Gerçek Vektör Monogram 'ÜT' - Siber Neon Işıma Efekti */}
      <div className="relative h-full flex items-center justify-center shrink-0 group/logo">
        {/* Arka Plan Neon Işıma Parıltısı (Aura Glow) */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#00f0ff]/30 via-[#2563eb]/25 to-[#38bdf8]/30 blur-md opacity-75 group-hover/logo:opacity-100 group-hover/logo:scale-110 transition-all duration-500 pointer-events-none" />

        <svg
          viewBox="0 0 160 230"
          className="h-full w-auto aspect-[160/230] relative z-10 overflow-visible transition-transform duration-300 group-hover/logo:scale-105"
          aria-label="Üretici Tedarik Resmi ÜT Monogramı"
        >
          <defs>
            {/* Canlı Siber Neon Gradyan */}
            <linearGradient id="neonCyanGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="40%" stopColor="#38bdf8" />
              <stop offset="80%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#00d2ff" />
            </linearGradient>

            {/* Neon Lazer Parıltı Filtresi */}
            <filter id="laserNeonFilter" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Dış Derinlik / Gölge Katmanı */}
          <path
            d="M 13,10 H 145 Q 151,10 151,16 Q 151,22 145,22 H 27 Q 24,22 24,25 V 59 Q 24,62 27,62 H 59 Q 62,62 62,65 V 138 L 80,150 L 98,138 V 65 Q 98,62 101,62 H 144 Q 147,62 147,65 V 168 L 80,218 L 13,168 V 120 H 21 Q 24,120 24,117 V 95 Q 24,92 21,92 H 13 V 168 L 80,200 L 136,168 V 78 Q 136,75 133,75 H 112 Q 109,75 109,78 V 132 L 80,144 L 51,132 V 78 Q 51,75 48,75 H 13 Z"
            fill="#0c0e13/40"
            stroke="#00f0ff"
            strokeWidth="5"
            strokeOpacity="0.3"
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#laserNeonFilter)"
          />

          {/* Ana Gerçek 'ÜT' Kesintisiz Vektör Çizgisi */}
          <path
            d="M 13,10 H 145 Q 151,10 151,16 Q 151,22 145,22 H 27 Q 24,22 24,25 V 59 Q 24,62 27,62 H 59 Q 62,62 62,65 V 138 L 80,150 L 98,138 V 65 Q 98,62 101,62 H 144 Q 147,62 147,65 V 168 L 80,218 L 13,168 V 120 H 21 Q 24,120 24,117 V 95 Q 24,92 21,92 H 13 V 168 L 80,200 L 136,168 V 78 Q 136,75 133,75 H 112 Q 109,75 109,78 V 132 L 80,144 L 51,132 V 78 Q 51,75 48,75 H 13 Z"
            fill="none"
            stroke="url(#neonCyanGlowGrad)"
            strokeWidth="3.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_8px_#00f0ff]"
          />

          {/* Merkez Enerji Çekirdeği İnce Parıltısı */}
          <path
            d="M 13,10 H 145 Q 151,10 151,16 Q 151,22 145,22 H 27 Q 24,22 24,25 V 59 Q 24,62 27,62 H 59 Q 62,62 62,65 V 138 L 80,150 L 98,138 V 65 Q 98,62 101,62 H 144 Q 147,62 147,65 V 168 L 80,218 L 13,168 V 120 H 21 Q 24,120 24,117 V 95 Q 24,92 21,92 H 13 V 168 L 80,200 L 136,168 V 78 Q 136,75 133,75 H 112 Q 109,75 109,78 V 132 L 80,144 L 51,132 V 78 Q 51,75 48,75 H 13 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeOpacity="0.85"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Şirket Tipografisi */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-display font-extrabold text-[18px] sm:text-[21px] text-[#e2e2e9] tracking-tight group-hover/logo:text-[#00f0ff] transition-colors">
              ÜRETİCİ TEDARİK
            </span>
          </div>
          <span className="font-mono text-[9px] sm:text-[10px] text-[#c3c6d7] tracking-wider uppercase font-semibold mt-1">
            TEKNİK PLASTİK POLİMER METAL LTD. ŞTİ.®
          </span>
          {showSlogan && (
            <span className="font-mono text-[9.5px] text-[#ffb77d] font-bold tracking-widest uppercase mt-0.5">
              ‘SİZ İSTEYİN BİZ ÜRETELİM’
            </span>
          )}
        </div>
      )}
    </div>
  );
};
