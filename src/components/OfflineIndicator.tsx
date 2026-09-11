import React, { useState, useEffect } from 'react';
import { WifiOff, ShieldCheck } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#1e1f25]/95 border border-[#ffb77d]/60 text-[#ffb77d] font-mono text-xs shadow-2xl backdrop-blur-md animate-bounce"
    >
      <WifiOff className="w-4 h-4 text-[#ffb77d]" />
      <span>Çevrimdışı Mod // Çayırova Katalog & TDS Önbellekten Çalışıyor</span>
    </div>
  );
};
