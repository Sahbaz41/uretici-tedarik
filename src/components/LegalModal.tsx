import React, { useState } from 'react';
import { X, Shield, FileText, Lock, Truck, Scale, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/materials';

export type LegalDocType = 'kvkk' | 'privacy' | 'sales' | 'distance';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalDocType;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'kvkk',
}) => {
  const [activeTab, setActiveTab] = useState<LegalDocType>(initialTab);

  if (!isOpen) return null;

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="legal-modal-container"
        className="w-full max-w-4xl bg-[#0c0e13] border border-[#434655]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Üst Başlık & Kapatma */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#434655]/40 bg-[#1a1b21]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2563eb]/20 text-[#4cd7f6] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#4cd7f6] uppercase font-bold tracking-wider block">
                Yasal Uyum & Bilgilendirme
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#e2e2e9]">
                {COMPANY_INFO.fullName}
              </h3>
            </div>
          </div>

          <button
            id="legal-modal-close-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#c3c6d7] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sekmeler (Tab Bar) */}
        <div className="flex items-center gap-1 p-2 bg-[#14161d] border-b border-[#434655]/30 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('kvkk')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'kvkk'
                ? 'bg-[#2563eb] text-white'
                : 'text-[#8d90a0] hover:text-[#e2e2e9] hover:bg-[#1e1f25]'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>KVKK Aydınlatma Metni</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'privacy'
                ? 'bg-[#2563eb] text-white'
                : 'text-[#8d90a0] hover:text-[#e2e2e9] hover:bg-[#1e1f25]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Gizlilik Politikası</span>
          </button>

          <button
            onClick={() => setActiveTab('sales')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'sales'
                ? 'bg-[#2563eb] text-white'
                : 'text-[#8d90a0] hover:text-[#e2e2e9] hover:bg-[#1e1f25]'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Satış & Sevkiyat Şartları</span>
          </button>

          <button
            onClick={() => setActiveTab('distance')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'distance'
                ? 'bg-[#2563eb] text-white'
                : 'text-[#8d90a0] hover:text-[#e2e2e9] hover:bg-[#1e1f25]'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Mesafeli Satış Esasları</span>
          </button>
        </div>

        {/* Sekme İçerikleri */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 text-xs sm:text-sm text-[#c3c6d7] leading-relaxed flex flex-col gap-4">
          {activeTab === 'kvkk' && (
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-bold text-[#e2e2e9]">
                6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni
              </h4>
              <p>
                <strong>{COMPANY_INFO.fullName}</strong> (&quot;Şirket&quot;) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca Veri Sorumlusu sıfatıyla, teknik teklif (RFQ) ve ticari iletişim süreçlerinde tarafımıza iletilen kişisel verilerinizin gizliliğine ve güvenliğine azami özen göstermekteyiz.
              </p>
              <div className="p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/30">
                <strong className="text-[#b4c5ff] block mb-1">1. İşlenen Kişisel Veriler ve Toplama Yöntemi:</strong>
                <p>
                  RFQ formları, WhatsApp mesajlaşma hatları ve telefon görüşmeleri vasıtasıyla iletilen Yetkili Adı-Soyadı, Şirket Ünvanı, İletişim Telefon Numarası, E-posta Adresi ve CAD çizim verileri ticari teklif hazırlama ve teslimat amacıyla işlenmektedir.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/30">
                <strong className="text-[#b4c5ff] block mb-1">2. Veri İşleme Amaçları:</strong>
                <p>
                  Teknik şartnamelerin incelenmesi, milimetrik kesim ve tolerans hesaplamalarının yapılması, proforma fatura düzenlenmesi ve sevkiyat organizasyonunun sağlanması amacıyla kanunun 5. ve 6. maddelerine uygun olarak işlenir.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/30">
                <strong className="text-[#b4c5ff] block mb-1">3. Haklarınız:</strong>
                <p>
                  KVKK m. 11 gereğince dilediğiniz zaman <strong>{COMPANY_INFO.email}</strong> üzerinden başvurarak verilerinizin silinmesini, düzeltilmesini veya işlenme amacını öğrenmeyi talep edebilirsiniz.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-bold text-[#e2e2e9]">
                Gizlilik ve Bilgi Güvenliği İlkeleri
              </h4>
              <p>
                Müşterilerimizin yüklediği 3D CAD STEP/DWG modelleri, özel proje çizimleri ve teknik şartnameler şirketimizin gizlilik ilkeleri kapsamında ticari sır olarak korunur.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#c3c6d7]">
                <li><strong>CAD / STEP Çizim Güvenliği:</strong> Savunma sanayi ve makine imalatı projelerinde tarafımıza aktarılan teknik çizimler üçüncü kişilerle kesinlikle paylaşılmaz.</li>
                <li><strong>Çerezler (Cookies):</strong> Sitemizde yalnızca oturum yönetimi ve performans analitiği için temel teknik çerezler kullanılmaktadır.</li>
                <li><strong>SSL / TLS Şifreleme:</strong> Tüm veri aktarımları 256-bit SSL güvenlik sertifikası ile şifreli olarak gerçekleştirilir.</li>
              </ul>
            </div>
          )}

          {activeTab === 'sales' && (
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-bold text-[#e2e2e9]">
                Endüstriyel Satış, Sevkiyat ve Tolerans Şartları
              </h4>
              <div className="p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/30">
                <strong className="text-[#4cd7f6] block mb-1">1. Kesim ve İmalat Toleransları:</strong>
                <p>
                  Levha, takoz ve çubuk kesimlerinde aksi yazılı olarak kararlaştırılmadıkça DIN ISO 2768-m (orta sınıf) toleransları uygulanır. Müşteri özel tolerans taleplerini RFQ formunda belirtmelidir.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/30">
                <strong className="text-[#4cd7f6] block mb-1">2. Ambar ve Kargo Sevkiyatı:</strong>
                <p>
                  Çayırova / Gebze ana depomuzdan standart plakalar aynı gün, CNC işlemeli veya fason parçalar termin süresine bağlı olarak anlaşmalı ambar veya kargo ile alıcıya sevk edilir.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1a1b21] border border-[#434655]/30">
                <strong className="text-[#4cd7f6] block mb-1">3. İade ve Değişim:</strong>
                <p>
                  Müşteri talebine istinaden özel ölçülerde dilimlenmiş, ebatlanmış veya CNC ile işlenmiş malzemelerde ayıplı mal durumu haricinde cayma ve iade kabul edilmemektedir.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'distance' && (
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-bold text-[#e2e2e9]">
                B2B Mesafeli Satış ve Ticari Şartlar
              </h4>
              <p>
                İşbu bilgilendirme; 6102 sayılı Türk Ticaret Kanunu ve 6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında tacirler ve kurumsal alıcılar arasındaki toptan ve perakende teknik malzeme satışını kapsar.
              </p>
              <p className="text-xs text-[#8d90a0]">
                Satıcı Bilgileri: {COMPANY_INFO.fullName} • Çayırova / Gebze, Kocaeli • Tel: {COMPANY_INFO.formattedPhone} • E-posta: {COMPANY_INFO.email}
              </p>
            </div>
          )}
        </div>

        {/* Alt Kapatma Çubuğu */}
        <div className="p-4 border-t border-[#434655]/40 bg-[#1a1b21] flex items-center justify-between">
          <span className="font-mono text-xs text-[#8d90a0]">
            Güncelleme: Mart 2026 // Çayırova - Gebze
          </span>
          <button
            onClick={onClose}
            className="px-5 h-9 rounded-lg bg-[#2563eb] hover:bg-[#0053db] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
