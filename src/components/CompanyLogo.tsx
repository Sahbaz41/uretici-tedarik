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
      {/* Orijinal Gerçek Vektör Monogram 'ÜT' - Endüstriyel Sanayi Tonu */}
      <div className="relative h-full flex items-center justify-center shrink-0 group/logo">
        {/* Zarif, dengeli endüstriyel derinlik gölgesi (aşırı neon yerine mat kurumsal aura) */}
        <div className="absolute -inset-0.5 rounded-lg bg-[#2563eb]/20 blur-sm opacity-60 group-hover/logo:opacity-90 transition-opacity duration-300 pointer-events-none" />

        <svg
          viewBox="0 10 135 170"
          className="h-full w-auto aspect-[135/170] relative z-10 overflow-visible transition-transform duration-300 group-hover/logo:scale-[1.03] filter drop-shadow-[0_2px_8px_rgba(37,99,235,0.4)]"
          aria-label="Üretici Tedarik Resmi ÜT Monogramı"
        >
          <defs>
            {/* Sanayi / Mühendislik Endüstriyel Kobalt & Çelik Mavisi Degradeli */}
            <linearGradient id="industrialBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="40%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>

          {/* İnce Sanayi Derinlik Konturu */}
          <path
            d="M9.74,16.65v45.68h30.1l-.63,58.56,18.09,12.04c2.23,1.31,5.37,1.36,7.67,0l16.02-8.03c1.46-1,2-3.35,2.25-6.37l-.82-56.03h21.91l.5,72.85-41.36,27.44-44.69-25.8.37-52.88-8.35.02.04,59.12,53.2,30.07,48.88-31.96.6-87.67-38.55-.35v60.77c-.01,2.06-.69,3.57-2,4.71l-8.51,4.43c-1.73.76-3.09.91-5.01,0l-10.01-6.09c-1.38-2.03-1.58-4.35-1.5-6.92v-54.26c-.13-3.31-3.08-2.73-6.25-2.77h-20.53c-3.48-.31-3.47-1.62-3.38-4.84v-19.24c-.1-2.37.98-3.54,3.19-3.53h95.14c.14.02,1.66-8.85-1.49-8.8-1.04.02-3.43.12-5.54.13-23.6.14-78.11-.26-99.35-.26"
            fill="#1e3a8a"
            transform="translate(1, 1)"
            opacity="0.6"
          />

          {/* Ana Orijinal 'ÜT' Vektör Monogramı */}
          <path
            d="M9.74,16.65v45.68h30.1l-.63,58.56,18.09,12.04c2.23,1.31,5.37,1.36,7.67,0l16.02-8.03c1.46-1,2-3.35,2.25-6.37l-.82-56.03h21.91l.5,72.85-41.36,27.44-44.69-25.8.37-52.88-8.35.02.04,59.12,53.2,30.07,48.88-31.96.6-87.67-38.55-.35v60.77c-.01,2.06-.69,3.57-2,4.71l-8.51,4.43c-1.73.76-3.09.91-5.01,0l-10.01-6.09c-1.38-2.03-1.58-4.35-1.5-6.92v-54.26c-.13-3.31-3.08-2.73-6.25-2.77h-20.53c-3.48-.31-3.47-1.62-3.38-4.84v-19.24c-.1-2.37.98-3.54,3.19-3.53h95.14c.14.02,1.66-8.85-1.49-8.8-1.04.02-3.43.12-5.54.13-23.6.14-78.11-.26-99.35-.26"
            fill="url(#industrialBlueGrad)"
          />

          {/* Hassas İç CNC Kontur Çizgisi */}
          <path
            d="M9.74,16.65v45.68h30.1l-.63,58.56,18.09,12.04c2.23,1.31,5.37,1.36,7.67,0l16.02-8.03c1.46-1,2-3.35,2.25-6.37l-.82-56.03h21.91l.5,72.85-41.36,27.44-44.69-25.8.37-52.88-8.35.02.04,59.12,53.2,30.07,48.88-31.96.6-87.67-38.55-.35v60.77c-.01,2.06-.69,3.57-2,4.71l-8.51,4.43c-1.73.76-3.09.91-5.01,0l-10.01-6.09c-1.38-2.03-1.58-4.35-1.5-6.92v-54.26c-.13-3.31-3.08-2.73-6.25-2.77h-20.53c-3.48-.31-3.47-1.62-3.38-4.84v-19.24c-.1-2.37.98-3.54,3.19-3.53h95.14c.14.02,1.66-8.85-1.49-8.8-1.04.02-3.43.12-5.54.13-23.6.14-78.11-.26-99.35-.26"
            fill="none"
            stroke="#bae6fd"
            strokeWidth="0.8"
            strokeOpacity="0.75"
          />
        </svg>
      </div>

      {/* Şirket Tipografisi */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-display font-black text-[18px] sm:text-[20px] tracking-wider uppercase bg-gradient-to-r from-white via-[#f0f9ff] to-[#a5f3fc] bg-clip-text text-transparent group-hover/logo:from-[#00f0ff] group-hover/logo:to-white transition-all">
              ÜRETİCİ TEDARİK
            </span>
          </div>
          <span className="font-mono text-[9px] sm:text-[9.5px] text-[#94a3b8] tracking-widest uppercase font-bold mt-1 leading-none">
            TEKNİK PLASTİK &amp; CNC İMALAT
          </span>
          {showSlogan && (
            <span className="font-mono text-[8.5px] sm:text-[9px] text-[#ffb77d] font-bold tracking-wider uppercase mt-0.5 leading-none">
              ‘SİZ İSTEYİN BİZ ÜRETELİM’
            </span>
          )}
        </div>
      )}
    </div>
  );
};
