import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Monitor, Share, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';
import { useLanguage } from '../context/LanguageContext';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PwaInstallPrompt: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    // Uygulama zaten standalone (PWA olarak) çalışıyor mu?
    const isStandaloneMode =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsStandalone(isStandaloneMode);

    if (isStandaloneMode) return;

    // iOS Safari tespiti
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isAppleDevice);

    // Chrome, Edge, Android için beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Kullanıcı bu oturumda henüz kapatmadıysa gecikmeli göster (çakışmayı önlemek için 12 sn sonra)
      const dismissed = sessionStorage.getItem('pwa_prompt_dismissed');
      if (!dismissed) {
        const timer = setTimeout(() => setShowPrompt(true), 12000);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Başarıyla yüklendiğinde
    window.addEventListener('appinstalled', () => {
      setInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
      setTimeout(() => setInstalled(false), 5000);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      if (isIOS) {
        alert(isEn
          ? "Installing on iOS: Tap 'Share' icon in Safari (square with arrow up) and select 'Add to Home Screen'."
          : "iOS Cihazlarda Yükleme: Safari'nin altındaki 'Paylaş' (Kare ve yukarı ok) simgesine dokunun ve ardından 'Ana Ekrana Ekle' seçeneğini tıklayın.");
      }
      return;
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    } catch {
      // Hata durumunda yutulur
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    sessionStorage.setItem('pwa_prompt_dismissed', 'true');
  };

  if (isStandalone) return null;

  return (
    <>
      {/* 1. Başarılı Yükleme Toast Bildirimi */}
      {installed && (
        <aside
          aria-label={isEn ? "App Installed Notification" : "Uygulama Yüklendi Bildirimi"}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-2xl bg-[#00788c] text-white shadow-2xl flex items-center gap-2.5 font-sans text-xs sm:text-sm animate-in fade-in"
        >
          <CheckCircle2 className="w-5 h-5 text-[#acedff]" />
          <span>{isEn ? 'Uretici Tedarik app installed successfully on your device!' : 'Üretici Tedarik uygulaması başarıyla masaüstünüze / cihazınıza yüklendi!'}</span>
        </aside>
      )}

      {/* 2. PWA Akıllı Yükleme Çubuğu */}
      {showPrompt && (
        <aside
          id="pwa-install-banner"
          aria-label={isEn ? "PWA App Install Notice" : "PWA Uygulama Yükleme Bildirimi"}
          className="fixed bottom-6 left-4 sm:left-6 z-40 w-[92%] max-w-sm p-3.5 rounded-2xl bg-[#0c0e13]/98 border border-[#00f0ff]/40 shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-4"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* Uygulama İkonu */}
              <img
                src="/icon-192.png"
                alt="App Icon"
                className="w-11 h-11 rounded-xl object-cover border border-[#434655]/50 shadow-md shrink-0"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[9.5px] px-1.5 py-0.5 rounded bg-[#2563eb]/30 text-[#00f0ff] font-bold uppercase border border-[#00f0ff]/30">
                    PWA App
                  </span>
                  <span className="text-[11px] text-[#8d90a0] font-mono">{isEn ? 'Offline Ready' : 'Çevrimdışı Destekli'}</span>
                </div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-[#e2e2e9] leading-snug mt-0.5">
                  {isEn ? 'Uretici Tedarik Desktop & Mobile App' : 'Üretici Tedarik Masaüstü & Mobil Uygulaması'}
                </h4>
                <p className="text-[10.5px] text-[#c3c6d7] leading-tight mt-0.5">
                  {isEn ? 'Access RFQ quotes and technical data sheets with 1-click.' : 'Masaüstünüzden veya ana ekranınızdan tek tıkla RFQ ve teknik föylere erişin.'}
                </p>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="text-[#8d90a0] hover:text-[#e2e2e9] p-1 shrink-0 cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-end gap-2 mt-2.5 pt-2 border-t border-[#434655]/30">
            <button
              onClick={handleDismiss}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#8d90a0] hover:text-[#e2e2e9] transition-colors cursor-pointer"
            >
              {isEn ? 'Later' : 'Daha Sonra'}
            </button>

            <button
              id="pwa-install-action-btn"
              onClick={handleInstallClick}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#0053db] hover:from-[#0053db] hover:to-[#0036a8] text-white text-xs font-bold shadow-[0_0_12px_rgba(37,99,235,0.4)] flex items-center gap-1.5 transition-all cursor-pointer border border-[#00f0ff]/30"
            >
              {isIOS ? (
                <>
                  <Share className="w-3.5 h-3.5" />
                  <span>{isEn ? 'How to Install?' : 'Nasıl Yüklenir?'}</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>{isEn ? 'Install App' : 'Uygulamayı Yükle'}</span>
                </>
              )}
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
