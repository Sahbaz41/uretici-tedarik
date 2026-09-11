import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="btn-scroll-to-top"
      onClick={scrollToTop}
      aria-label="Başa Dön / Ana Sayfa"
      title="Başa Dön / Ana Sayfa"
      className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-xl bg-[#12141c]/95 hover:bg-[#181b24] text-[#00f0ff] border border-[#00f0ff]/40 hover:border-[#00f0ff] shadow-[0_4px_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer backdrop-blur-md"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 animate-pulse" />
      <span className="sr-only">Sayfa Başına Dön</span>
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-2 py-1 rounded bg-[#08090d] text-[11px] font-mono text-[#c3c6d7] border border-[#434655]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
        Başa Dön ↑
      </span>
    </button>
  );
};
