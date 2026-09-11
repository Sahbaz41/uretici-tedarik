import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Send,
  Search,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { TECHNICAL_FAQS } from '../data/materials';

interface FaqSectionProps {
  onSelectProductForRfq: (productId: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onSelectProductForRfq,
}) => {
  const [openId, setOpenId] = useState<string | null>(TECHNICAL_FAQS[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  const categories = ['Tümü', ...Array.from(new Set(TECHNICAL_FAQS.map((f) => f.category)))];

  const filteredFaqs = TECHNICAL_FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.detailedAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'Tümü' || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const getFaqTheme = (cat: string) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('polimer') || c.includes('kestamit') || c.includes('delrin')) {
      return {
        borderOpen: 'border-[#3b82f6]',
        shadowOpen: 'shadow-[0_4px_24px_rgba(59,130,246,0.25)]',
        badgeText: 'text-[#60a5fa]',
        badgeBg: 'bg-[#2563eb]/15 border-[#3b82f6]/30',
        iconBg: 'bg-[#2563eb]',
        barGradient: 'from-[#2563eb] to-[#60a5fa]',
      };
    }
    if (c.includes('ptfe') || c.includes('teflon') || c.includes('sıcaklık')) {
      return {
        borderOpen: 'border-[#00f0ff]',
        shadowOpen: 'shadow-[0_4px_24px_rgba(0,240,255,0.25)]',
        badgeText: 'text-[#00f0ff]',
        badgeBg: 'bg-[#00f0ff]/15 border-[#00f0ff]/30',
        iconBg: 'bg-[#00788c]',
        barGradient: 'from-[#00788c] to-[#00f0ff]',
      };
    }
    if (c.includes('çelik') || c.includes('civa')) {
      return {
        borderOpen: 'border-[#94a3b8]',
        shadowOpen: 'shadow-[0_4px_24px_rgba(148,163,184,0.25)]',
        badgeText: 'text-[#cbd5e1]',
        badgeBg: 'bg-[#64748b]/15 border-[#94a3b8]/30',
        iconBg: 'bg-[#475569]',
        barGradient: 'from-[#64748b] to-[#cbd5e1]',
      };
    }
    if (c.includes('yalıtım') || c.includes('epoksi') || c.includes('fr4') || c.includes('mikanit')) {
      return {
        borderOpen: 'border-[#a855f7]',
        shadowOpen: 'shadow-[0_4px_24px_rgba(168,85,247,0.25)]',
        badgeText: 'text-[#c084fc]',
        badgeBg: 'bg-[#a855f7]/15 border-[#a855f7]/30',
        iconBg: 'bg-[#7e22ce]',
        barGradient: 'from-[#7e22ce] to-[#c084fc]',
      };
    }
    if (c.includes('aşınma') || c.includes('pe 1000') || c.includes('uhmwpe') || c.includes('hdpe')) {
      return {
        borderOpen: 'border-[#10b981]',
        shadowOpen: 'shadow-[0_4px_24px_rgba(16,185,129,0.25)]',
        badgeText: 'text-[#34d399]',
        badgeBg: 'bg-[#10b981]/15 border-[#10b981]/30',
        iconBg: 'bg-[#059669]',
        barGradient: 'from-[#047857] to-[#10b981]',
      };
    }
    return {
      borderOpen: 'border-[#f59e0b]',
      shadowOpen: 'shadow-[0_4px_24px_rgba(245,158,11,0.25)]',
      badgeText: 'text-[#fbbf24]',
      badgeBg: 'bg-[#f59e0b]/15 border-[#f59e0b]/30',
      iconBg: 'bg-[#b45309]',
      barGradient: 'from-[#b45309] to-[#f59e0b]',
    };
  };

  return (
    <section
      id="teknik-bilgi-ve-sss"
      className="w-full py-16 lg:py-24 bg-[#0c0e13]/80 border-t border-[#434655]/30 relative overflow-hidden"
    >
      {/* Arka plan siber ışıma */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#2563eb]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#4cd7f6]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="w-full px-4 sm:px-6 mx-auto max-w-[90rem] flex flex-col gap-10 relative">
        {/* Bölüm Başlığı & AEO Bilgisi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#4cd7f6]" />
              <span className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Mühendislik Bilgi Bankası & AEO Rehberi
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e2e2e9] tracking-tight">
              Sıkça Sorulan Sorular // Teknik Malzeme Seçimi
            </h2>
            <p className="text-sm text-[#c3c6d7] max-w-2xl leading-relaxed">
              Doğru polimer ve takım çeliği seçimi; çalışma sıcaklığı, sürtünme katsayısı ve basma toleranslarına doğrudan bağlıdır. Mühendislik ve CNC üretim tecrübemizle en çok merak edilen teknik konuları derledik.
            </p>
          </div>

          {/* WhatsApp Canlı Mühendislik Danışma */}
          <a
            id="faq-ask-engineer-btn"
            href="https://api.whatsapp.com/send?phone=905333771897&text=Merhaba%20İbrahim%20Bey,%20projemiz%20için%20teknik%20plastik/metal%20malzeme%20seçiminde%20danışmak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-4 rounded-xl bg-[#1e1f25] hover:bg-[#282a2f] border border-[#434655]/40 text-[#4cd7f6] text-xs font-semibold flex items-center gap-2 transition-all shrink-0 group"
          >
            <MessageCircle className="w-4 h-4 text-[#4cd7f6] group-hover:scale-110 transition-transform" />
            <span>Teknik Uzmana WhatsApp'tan Sor</span>
          </a>
        </div>

        {/* Arama & Kategori Filtre Çubuğu */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#1a1b21] p-2.5 rounded-2xl border border-[#434655]/40 shadow-lg">
          {/* Arama Kutusu */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8d90a0] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Soru veya malzeme ara (örn: Kestamit, PTFE, 64 HRC)..."
              className="w-full h-9 pl-9 pr-3 rounded-xl bg-[#14161d] border border-[#434655]/30 text-[#e2e2e9] text-xs placeholder-[#8d90a0] focus:outline-none focus:border-[#2563eb]"
            />
          </div>

          {/* Kategori Çipleri */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar py-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`h-8 px-3 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2563eb] text-white font-semibold'
                    : 'bg-[#282a2f] text-[#c3c6d7] hover:text-[#e2e2e9] hover:bg-[#33353a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Akordeon Listesi */}
        <div className="flex flex-col gap-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 rounded-2xl bg-[#1a1b21] border border-[#434655]/30 text-center text-[#8d90a0]">
              <HelpCircle className="w-10 h-10 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-semibold text-[#e2e2e9]">Aramanızla eşleşen teknik soru bulunamadı</p>
              <p className="text-xs mt-1">Lütfen farklı anahtar kelimeler deneyin veya doğrudan WhatsApp hattımızdan teknik destek alın.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              const theme = getFaqTheme(faq.category);
              return (
                <article
                  key={faq.id}
                  id={faq.id}
                  className={`group relative rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? `bg-[#1a1b21] ${theme.borderOpen} ${theme.shadowOpen}`
                      : 'bg-[#12141c] border-[#434655]/30 hover:border-[#434655]/80 hover:bg-[#181b24]'
                  }`}
                >
                  {/* Üst Mikro Renk Çizgisi */}
                  <div className={`h-0.5 w-full bg-gradient-to-r ${theme.barGradient} transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-30 group-hover:opacity-80'}`} />

                  {/* Başlık Butonu */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                          isOpen
                            ? `${theme.iconBg} text-white shadow-md shadow-[0_0_12px_rgba(0,0,0,0.4)]`
                            : 'bg-[#181b24] text-[#8d90a0] group-hover:text-[#e2e2e9]'
                        }`}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className={`font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${theme.badgeBg} ${theme.badgeText}`}>
                            {faq.category}
                          </span>
                          <span className="font-mono text-[10px] text-[#ffb77d] px-2 py-0.5 rounded bg-[#ffb77d]/10 border border-[#ffb77d]/20">
                            AEO Cevap Snippet'ı
                          </span>
                        </div>
                        <h3 className={`font-display text-sm sm:text-base font-bold text-[#e2e2e9] leading-snug group-hover:${theme.badgeText} transition-colors`}>
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-[#8d90a0] transition-transform duration-300 shrink-0 ${
                        isOpen ? `rotate-180 ${theme.badgeText}` : 'group-hover:text-[#e2e2e9]'
                      }`}
                    />
                  </button>

                  {/* Genişletilmiş Cevap */}
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-[#434655]/30 animate-in fade-in-50">
                      {/* Kısa Doğrudan Cevap Kutusu (Perplexity / AI Citation Özeti) */}
                      <div className="p-3.5 rounded-xl bg-[#2563eb]/10 border border-[#2563eb]/30 text-xs sm:text-sm text-[#b4c5ff] mb-4 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#e2e2e9] font-bold mb-0.5 font-mono text-[11px] uppercase tracking-wider">
                            Özet Mühendislik Tanımı:
                          </strong>
                          <span>{faq.shortAnswer}</span>
                        </div>
                      </div>

                      {/* Detaylı Mühendislik Açıklaması */}
                      <p className="text-xs sm:text-sm text-[#c3c6d7] leading-relaxed mb-4">
                        {faq.detailedAnswer}
                      </p>

                      {/* Etiketler ve Doğrudan RFQ Aksiyonu */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#434655]/20">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {faq.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#282a2f] text-[#8d90a0]"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>

                        {faq.recommendedMaterialId && (
                          <button
                            type="button"
                            onClick={() => onSelectProductForRfq(faq.recommendedMaterialId!)}
                            className="h-8 px-3.5 rounded-lg bg-[#2563eb] hover:bg-[#0053db] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer ml-auto"
                          >
                            <Send className="w-3 h-3" />
                            <span>Bu Malzemeden Teklif İste</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
