import React from 'react';
import {
  X,
  FileCheck,
  Download,
  Send,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Flame,
  Scale,
} from 'lucide-react';
import { PRODUCTS } from '../data/materials';

import { Language, TRANSLATIONS } from '../data/translations';

interface TdsModalProps {
  productId: string | null;
  onClose: () => void;
  onRequestQuote: (productId: string) => void;
  language?: Language;
}

export const TdsModal: React.FC<TdsModalProps> = ({
  productId,
  onClose,
  onRequestQuote,
  language = 'tr',
}) => {
  if (!productId) return null;

  const t = TRANSLATIONS[language].productModal;
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const handleDownloadStep = () => {
    const fileContent = `ISO-10303-21;
HEADER;
FILE_DESCRIPTION(('STEP CAD 3D Model', '${product.name}'), '2;1');
FILE_NAME('${product.code}.step', '${new Date().toISOString()}', ('Üretici Tedarik'), ('Gebze Sanayi'), 'CATIA/SolidWorks', 'CAD Export', 'Authorized');
FILE_SCHEMA(('CONFIG_CONTROL_DESIGN'));
ENDSEC;
DATA;
/* Technical CAD parameters for ${product.name} */
/* Density: ${product.density} g/cm3 */
/* Temp Range: ${product.workingTemp} */
ENDSEC;
END-ISO-10303-21;`;

    const blob = new Blob([fileContent], { type: 'application/step' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.code}_CAD_3D.step`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="tds-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="tds-modal-container"
        className="w-full max-w-3xl bg-[#0c0e13] border border-[#434655]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Başlık Çubuğu */}
        <div className="flex items-center justify-between p-5 border-b border-[#434655]/40 bg-[#1a1b21]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#282a2f] text-[#38bdf8] font-bold">
                  {product.code}
                </span>
                <span className="text-xs text-[#8d90a0]">
                  {product.category}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-[#e2e2e9] mt-0.5">
                {product.name} — {t.specsTitle}
              </h3>
            </div>
          </div>
          <button
            id="tds-modal-close-btn"
            onClick={onClose}
            title={t.close}
            className="w-8 h-8 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#c3c6d7] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gövde */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6 text-sm">
          {/* Üst Özet & Görsel */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#1a1b21] border border-[#434655]/30">
            {product.imageUrl ? (
              <div className="h-32 rounded-lg overflow-hidden bg-[#0c0e13]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="h-32 rounded-lg bg-[#1e1f25] flex items-center justify-center text-[#38bdf8]">
                <Layers className="w-12 h-12 opacity-50" />
              </div>
            )}
            <div className="sm:col-span-2 flex flex-col justify-between">
              <div>
                <p className="text-xs text-[#c3c6d7] leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3 font-mono text-[11px]">
                  <span className="px-2 py-1 rounded bg-[#282a2f] text-[#e2e2e9]">
                    {t.density}: {product.density} g/cm³
                  </span>
                  <span className="px-2 py-1 rounded bg-[#282a2f] text-[#ffb77d]">
                    {t.temperature}: {product.workingTemp}
                  </span>
                  {product.hardness && (
                    <span className="px-2 py-1 rounded bg-[#282a2f] text-[#38bdf8]">
                      {t.hardness}: {product.hardness}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 text-xs text-[#38bdf8] font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.stockReady}</span>
              </div>
            </div>
          </div>

          {/* Parametrik Teknik Özellikler Tablosu */}
          <div>
            <h4 className="font-display font-bold text-sm text-[#e2e2e9] mb-2 uppercase tracking-wider font-mono text-[11px]">
              {t.physicalMechanical}
            </h4>
            <div className="rounded-xl border border-[#434655]/30 overflow-hidden">
              <table className="w-full text-left font-mono text-xs">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2 === 0 ? 'bg-[#1a1b21]' : 'bg-[#1e1f25]'
                      }
                    >
                      <td className="p-3 text-[#c3c6d7] font-medium border-b border-[#434655]/20 w-1/2">
                        {spec.label}
                      </td>
                      <td className="p-3 text-[#e2e2e9] font-bold border-b border-[#434655]/20">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#1a1b21]">
                    <td className="p-3 text-[#c3c6d7] font-medium border-b border-[#434655]/20">
                      {t.standardization}
                    </td>
                    <td className="p-3 text-[#b4c5ff] font-bold border-b border-[#434655]/20">
                      {product.dinNorm || 'DIN EN ISO / ASTM'}
                    </td>
                  </tr>
                  <tr className="bg-[#1e1f25]">
                    <td className="p-3 text-[#c3c6d7] font-medium">
                      {t.origin}
                    </td>
                    <td className="p-3 text-[#e2e2e9] font-bold">
                      {language === 'tr' ? 'AB / Yerli Üretim (EN 10204 3.1 Sertifikalı)' : 'EU / Certified Domestic Production (EN 10204 3.1)'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Kimyasal ve Çevresel Direnç Çizelgesi */}
          <div>
            <h4 className="font-display font-bold text-sm text-[#e2e2e9] mb-2 uppercase tracking-wider font-mono text-[11px]">
              {t.chemicalResistance}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-[#1a1b21] border border-[#434655]/25">
                <span className="text-[#8d90a0] block text-[10px]">
                  {t.acidResistance}
                </span>
                <span className="font-bold text-[#38bdf8] mt-0.5 block">
                  {language === 'tr' ? 'Üstün Dayanım' : 'High Resistance'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#1a1b21] border border-[#434655]/25">
                <span className="text-[#8d90a0] block text-[10px]">
                  {t.alkaliResistance}
                </span>
                <span className="font-bold text-[#38bdf8] mt-0.5 block">
                  {language === 'tr' ? 'Tam Direnç' : 'Full Resistance'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#1a1b21] border border-[#434655]/25">
                <span className="text-[#8d90a0] block text-[10px]">
                  {t.wearFriction}
                </span>
                <span className="font-bold text-[#b4c5ff] mt-0.5 block">
                  {language === 'tr' ? 'Sıfır Aşınma' : 'Ultra Low Wear'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#1a1b21] border border-[#434655]/25">
                <span className="text-[#8d90a0] block text-[10px]">
                  {t.fdaCompliance}
                </span>
                <span className="font-bold text-[#ffb77d] mt-0.5 block">
                  {language === 'tr' ? 'Uyumlu' : 'Compliant'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Aksiyon Butonları */}
        <div className="p-4 border-t border-[#434655]/40 bg-[#1a1b21] flex flex-wrap items-center justify-between gap-3">
          <button
            id="download-step-cad-btn"
            onClick={handleDownloadStep}
            className="h-11 px-4 rounded-lg bg-[#282a2f] hover:bg-[#33353a] text-[#e2e2e9] text-xs font-semibold flex items-center gap-2 border border-[#434655]/40 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#38bdf8]" />
            <span>{t.downloadCad}</span>
          </button>

          <button
            id="tds-request-quote-btn"
            onClick={() => {
              onRequestQuote(product.id);
              onClose();
            }}
            className="h-11 px-5 rounded-lg bg-[#2563eb] text-[#eeefff] text-xs font-semibold flex items-center gap-2 shadow-md hover:bg-[#0053db] transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{t.requestQuote}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
