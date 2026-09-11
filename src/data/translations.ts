export type Language = 'tr' | 'en';

export interface TranslationDictionary {
  topBar: {
    slogan: string;
    location: string;
    shipment: string;
    live: string;
    usd: string;
    eur: string;
    kdv: string;
    callDirect: string;
  };
  header: {
    engineeringPlastics: string;
    highTempInsulation: string;
    heavyIndustry: string;
    alloysCables: string;
    catalog: string;
    searchPlaceholder: string;
    rfqCart: string;
    quickRfq: string;
    contact: string;
  };
  productModal: {
    specsTitle: string;
    physicalMechanical: string;
    chemicalResistance: string;
    standardization: string;
    origin: string;
    stockReady: string;
    density: string;
    temperature: string;
    hardness: string;
    downloadCad: string;
    requestQuote: string;
    acidResistance: string;
    alkaliResistance: string;
    wearFriction: string;
    fdaCompliance: string;
    close: string;
  };
  sections: {
    categoriesTitle: string;
    categoriesSubtitle: string;
    productsTitle: string;
    productsSubtitle: string;
    viewSpecs: string;
    selectDimension: string;
    requestQuote: string;
    allCategories: string;
    filterActive: string;
    clearFilter: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  tr: {
    topBar: {
      slogan: '‘SİZ İSTEYİN BİZ ÜRETELİM’',
      location: 'Çayırova / Gebze, Kocaeli',
      shipment: 'Fabrika Stoktan Aynı Gün Sevk & 3/5 Eksen CNC İmalat',
      live: 'CANLI',
      usd: 'USD',
      eur: 'EUR',
      kdv: '(+KDV)',
      callDirect: 'İBRAHİM ŞAHBAZ',
    },
    header: {
      engineeringPlastics: 'Mühendislik Plastikleri',
      highTempInsulation: 'Yüksek Isı & Yalıtım',
      heavyIndustry: 'Ağır Sanayi',
      alloysCables: 'Alaşım & Kablo',
      catalog: 'Katalog',
      searchPlaceholder: 'Malzeme ara...',
      rfqCart: 'Teklif Sepeti',
      quickRfq: 'Hızlı RFQ',
      contact: 'İletişim',
    },
    productModal: {
      specsTitle: 'Teknik Şartname & Föy',
      physicalMechanical: 'Fiziksel ve Mekanik Değerler',
      chemicalResistance: 'Kimyasal ve Ortam Dayanım Özeti',
      standardization: 'Standardizasyon / DIN Normu',
      origin: 'Menşei & Sertifikasyon',
      stockReady: 'Çayırova depomuzda hazır kesim stoğu mevcuttur.',
      density: 'Yoğunluk',
      temperature: 'Sıcaklık',
      hardness: 'Sertlik',
      downloadCad: '3D STEP / CAD Çizimini İndir',
      requestQuote: 'Bu Malzemeden Teklif İste',
      acidResistance: 'Asit / Asidik Ortam',
      alkaliResistance: 'Baz / Alkali',
      wearFriction: 'Aşınma & Sürtünme',
      fdaCompliance: 'Gıda Teması (FDA)',
      close: 'Kapat',
    },
    sections: {
      categoriesTitle: 'Endüstriyel Ürün & Malzeme Grupları',
      categoriesSubtitle: 'Tüm yarı mamul levha, çubuk, boru ve özel CNC imalat portföyümüz',
      productsTitle: 'Öne Çıkan Endüstriyel Malzemeler',
      productsSubtitle: 'DIN ve ISO normlarında sertifikalı stok ürünleri ve anında teklif',
      viewSpecs: 'Teknik Föy',
      selectDimension: 'Ebat / Çap Seç',
      requestQuote: 'Teklif İste',
      allCategories: 'Tüm Kategoriler',
      filterActive: 'Aktif Filtre',
      clearFilter: 'Filtreyi Temizle',
    },
  },
  en: {
    topBar: {
      slogan: '‘YOU DEMAND, WE MANUFACTURE’',
      location: 'Cayirova / Gebze Industrial Zone, Turkey',
      shipment: 'Same-Day Stock Shipment & 3/5 Axis Precision CNC Machining',
      live: 'LIVE',
      usd: 'USD',
      eur: 'EUR',
      kdv: '(+VAT)',
      callDirect: 'IBRAHIM SAHBAZ',
    },
    header: {
      engineeringPlastics: 'Engineering Plastics',
      highTempInsulation: 'High Temp & Insulation',
      heavyIndustry: 'Heavy Industry',
      alloysCables: 'Alloys & Cables',
      catalog: 'Catalog',
      searchPlaceholder: 'Search materials...',
      rfqCart: 'RFQ Basket',
      quickRfq: 'Quick RFQ',
      contact: 'Contact',
    },
    productModal: {
      specsTitle: 'Technical Data Sheet (TDS)',
      physicalMechanical: 'Physical & Mechanical Properties',
      chemicalResistance: 'Chemical & Environmental Resistance',
      standardization: 'Standardization / DIN Norm',
      origin: 'Origin & Certification',
      stockReady: 'Ready-cut stock available at our Gebze warehouse.',
      density: 'Density',
      temperature: 'Operating Temp',
      hardness: 'Hardness',
      downloadCad: 'Download 3D STEP / CAD Model',
      requestQuote: 'Request Quote For This Material',
      acidResistance: 'Acid Resistance',
      alkaliResistance: 'Alkali / Base Resistance',
      wearFriction: 'Wear & Friction',
      fdaCompliance: 'Food Contact (FDA)',
      close: 'Close',
    },
    sections: {
      categoriesTitle: 'Industrial Product & Material Categories',
      categoriesSubtitle: 'Comprehensive semi-finished sheets, rods, tubes & CNC machining portfolio',
      productsTitle: 'Featured Engineering Materials',
      productsSubtitle: 'Certified stock materials conforming to DIN/ISO standards with instant RFQ',
      viewSpecs: 'Technical Data',
      selectDimension: 'Select Size',
      requestQuote: 'Request RFQ',
      allCategories: 'All Categories',
      filterActive: 'Active Filter',
      clearFilter: 'Clear Filter',
    },
  },
};

