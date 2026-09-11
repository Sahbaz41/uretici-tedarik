import React, { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';

export const WhatsAppFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const phoneClean = COMPANY_INFO.phone.replace(/[^0-9]/g, '');

  const quickTemplates = [
    {
      title: '💼 Fiyat Teklifi / RFQ',
      text: 'Merhaba İbrahim Bey, web siteniz üzerinden ulaşıyorum. Malzeme ve ölçülerim için fiyat teklifi almak istiyorum.',
    },
    {
      title: '⚙️ CNC İmalat & CAD Çizim',
      text: 'Merhaba İbrahim Bey, 3/5 eksen CNC fason işleme için teknik resim (CAD) göndermek ve parça maliyeti öğrenmek istiyorum.',
    },
    {
      title: '📦 Depo Stok & Acil Sevkiyat',
      text: 'Merhaba, acil ihtiyacım olan mühendislik plastiği için Çayırova deponuzdaki plaka/takoz stok durumunu sormak istiyorum.',
    },
  ];

  const handleSendWhatsApp = (messageText: string) => {
    const encoded = encodeURIComponent(messageText);
    const url = "https://wa.me/" + phoneClean + "?text=" + encoded;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Açılır Mini Sohbet Paneli */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0e111a] border border-[#25d366]/40 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(37,211,102,0.15)] overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#075e54] to-[#128c7e] p-4 text-white flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white border border-white/20">
                  İŞ
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25d366] border-2 border-[#075e54]" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  {COMPANY_INFO.authorizedPerson}
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 font-normal">Teknik Satış</span>
                </h4>
                <p className="text-[11px] text-white/80 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse" />
                  Çevrimiçi | Hızlı Yanıt (Ort. 5 dk)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              title="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* İçerik */}
          <div className="p-4 bg-[#0a0c13] space-y-3">
            <div className="bg-[#141824] rounded-xl p-3 border border-[#434655]/30 text-xs text-[#c3c6d7] leading-relaxed">
              <p className="font-medium text-[#e2e2e9]">
                Fabrikamızdan doğrudan teknik plastik & metal teklifi almak için mesajınızı iletebilirsiniz:
              </p>
              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[#434655]/20 text-[10px] text-[#8d90a0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>Teknik Çizimleriniz Gizlilik Sözleşmesi (NDA) kapsamındadır.</span>
              </div>
            </div>

            {/* Hızlı Şablon Butonları */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-mono text-[#8d90a0] uppercase tracking-wider">Hızlı Başlat:</p>
              {quickTemplates.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendWhatsApp(t.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-[#121520] hover:bg-[#181d2a] border border-[#434655]/30 hover:border-[#25d366]/60 transition-all text-xs text-[#e2e2e9] flex items-center justify-between group cursor-pointer"
                >
                  <span className="font-medium">{t.title}</span>
                  <Send className="w-3.5 h-3.5 text-[#8d90a0] group-hover:text-[#25d366] transition-colors shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Özel Mesaj Yazma Alanı */}
            <div className="pt-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Veya mesajınızı buraya yazın..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customMsg.trim()) {
                      handleSendWhatsApp(customMsg);
                    }
                  }}
                  className="flex-1 bg-[#121520] border border-[#434655]/40 rounded-xl px-3 py-2 text-xs text-[#e2e2e9] placeholder-[#8d90a0] focus:outline-none focus:border-[#25d366]"
                />
                <button
                  onClick={() => handleSendWhatsApp(customMsg.trim() || 'Merhaba, web siteniz üzerinden teklif almak istiyorum.')}
                  className="p-2 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-black font-bold transition-all cursor-pointer shrink-0 shadow-[0_0_12px_rgba(37,211,102,0.4)]"
                  title="WhatsApp'a Gönder"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ana WhatsApp Floating Butonu */}
      <div className="relative flex items-center">
        {!isOpen && (
          <div className="hidden sm:flex items-center mr-3 px-3 py-1.5 rounded-full bg-[#121520]/90 border border-[#25d366]/40 text-xs font-semibold text-[#e2e2e9] shadow-lg backdrop-blur-md pointer-events-none animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#25d366] mr-2 shrink-0" />
            Canlı WhatsApp Destek
          </div>
        )}
        <button
          id="btn-whatsapp-fab"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="WhatsApp Canlı Destek"
          className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25d366] hover:bg-[#20bd5a] text-[#0b0d13] shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer z-50 group"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#0b0d13]" />
          ) : (
            <>
              {/* Ping Ring Effect */}
              <span className="absolute -inset-1 rounded-2xl bg-[#25d366] opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />
              <MessageCircle className="w-7 h-7 text-[#0b0d13] fill-current" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
