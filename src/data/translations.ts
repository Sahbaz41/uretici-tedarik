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
    viewAllCategories: string;
    rfqCalculator: string;
    catalogPdf: string;
    aboutUs: string;
    contactForm: string;
    searchHint: string;
    tdsBadge: string;
  };
  hero: {
    marqueeCnc: string;
    marqueeShipment: string;
    marqueeDefense: string;
    marqueeCut: string;
    badgeFacility: string;
    badgeSlogan: string;
    titleMain: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    btnRfq: string;
    btnCatalog: string;
    btnCall: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    stat4Val: string;
    stat4Label: string;
    stationTitle: string;
    specDimensions: string;
    specDensity: string;
    specTemp: string;
    specFrictionStrength: string;
    specHardness: string;
    specStock: string;
    scoreWear: string;
    scoreChem: string;
    scoreTemp: string;
    btnTds: string;
    btnOrderRfq: string;
  };
  categories: {
    badge: string;
    title: string;
    subtitle: string;
    productCountSuffix: string;
    viewProducts: string;
    names: Record<string, string>;
    descriptions: Record<string, string>;
  };
  products: {
    badgeStock: string;
    title: string;
    filterClear: string;
    rateLabel: string;
    vatWholesale: string;
    warehouseLabel: string;
    emptyTitle: string;
    emptyDesc: string;
    btnShowAll: string;
    btnCustomRfq: string;
    priceRangeLabel: string;
    btnSelectSize: string;
    btnRequestQuote: string;
    hardnessLabel: string;
    btnTdsTooltip: string;
    names: Record<string, { name: string; subtitle: string; category: string; description: string; actionText: string }>;
  };
  rfq: {
    badge: string;
    title: string;
    subtitle: string;
    selectMaterial: string;
    shapeSelect: string;
    shapePlate: string;
    shapeRod: string;
    dimensionsTitle: string;
    width: string;
    length: string;
    thickness: string;
    diameter: string;
    quantity: string;
    processing: string;
    procRaw: string;
    procCnc: string;
    procGrinding: string;
    procCustom: string;
    calculatedWeight: string;
    unitWeight: string;
    totalWeight: string;
    estimatedCost: string;
    btnAddToCart: string;
    btnSendWhatsapp: string;
    addedNotification: string;
    companyNamePlaceholder: string;
    phonePlaceholder: string;
    notesPlaceholder: string;
    uploadFileBtn: string;
    disclaimer: string;
  };
  corporate: {
    badgeName: string;
    badgeSlogan: string;
    title: string;
    description: string;
    producedTitle: string;
    producedItems: string;
    importedTitle: string;
    importedItems: string;
    machiningTitle: string;
    machiningDesc: string;
    cncHighTech: string;
    authorizedPersonTitle: string;
    advantage1Title: string;
    advantage1Desc: string;
    advantage2Title: string;
    advantage2Desc: string;
    advantage3Title: string;
    advantage3Desc: string;
    advantage4Title: string;
    advantage4Desc: string;
    stat1Val: string;
    stat1Label: string;
    stat2Val: string;
    stat2Label: string;
    stat3Val: string;
    stat3Label: string;
    stat4Val: string;
    stat4Label: string;
    directLine: string;
  };
  sectors: {
    badge: string;
    factoriesCount: string;
    automotive: string;
    automotiveSub: string;
    heavyMachinery: string;
    heavyMachinerySub: string;
    defenseAero: string;
    defenseAeroSub: string;
    chemicalFood: string;
    chemicalFoodSub: string;
    conveyorLogistics: string;
    conveyorLogisticsSub: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaBtn: string;
    ctaBtnDirect: string;
    ctaBtnWhatsapp: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    categoryAll: string;
    searchPlaceholder: string;
    noResults: string;
    noResultsTitle: string;
    noResultsDesc: string;
    stillQuestions: string;
    stillQuestionsSub: string;
    btnAskIbrahim: string;
    askEngineer: string;
    summaryTitle: string;
    requestQuoteForThis: string;
    aeoBadge: string;
  };
  footer: {
    slogan: string;
    description: string;
    badgeCnc: string;
    badgeLathe: string;
    colQuickLinks: string;
    colCategories: string;
    colProducts: string;
    colHeavy: string;
    colCorporate: string;
    colContact: string;
    authorized: string;
    aboutUs: string;
    catalogDownload: string;
    rfqCalculator: string;
    legalKvkk: string;
    legalPrivacy: string;
    legalSales: string;
    legalDistance: string;
    rightsReserved: string;
    phoneLabel: string;
    addressLabel: string;
  };
  cart: {
    title: string;
    itemCount: string;
    emptyTitle: string;
    emptyDesc: string;
    totalWeight: string;
    estimatedTotal: string;
    btnSendWhatsapp: string;
    btnClear: string;
    btnClose: string;
    shapePlate: string;
    shapeRod: string;
    theoretical: string;
    processing: string;
    btnDownloadQuote: string;
    btnClearCart: string;
    plate: string;
    rod: string;
    deleteTooltip: string;
  };
  search: {
    placeholder: string;
    recentTitle: string;
    resultsTitle: string;
    categoriesTitle: string;
    noResults: string;
    pressEsc: string;
    inputPlaceholder: string;
    materialsHeader: string;
    categoriesHeader: string;
    noProducts: string;
  };
  catalog: {
    badge: string;
    title: string;
    subtitle: string;
    btnDownloadPdf: string;
    btnWhatsappInquire: string;
    tableOfContents: string;
    pageLabel: string;
    badgeOfficial: string;
    modalTitle: string;
    responsible: string;
    indexTitle: string;
    allDownloadable: string;
    btnPrint: string;
    btnClose: string;
    btnDownload: string;
  };
  contact: {
    title: string;
    subtitle: string;
    fullName: string;
    company: string;
    phone: string;
    email: string;
    materialSelect: string;
    message: string;
    uploadDrawing: string;
    btnSubmit: string;
    successTitle: string;
    successDesc: string;
    modalTitle: string;
    modalSubtitle: string;
    trustBadge: string;
    avgTime: string;
    companyLabel: string;
    companyPlaceholder: string;
    taxLabel: string;
    taxSub: string;
    taxPlaceholder: string;
    personLabel: string;
    personPlaceholder: string;
    phoneLabel: string;
    emailLabel: string;
    materialGroupLabel: string;
    urgencyLabel: string;
    urgencyNormal: string;
    urgencyUrgent: string;
    notesLabel: string;
    notesPlaceholder: string;
    fileLabel: string;
    fileFormats: string;
    fileUploadText: string;
    fileChange: string;
    btnSubmitting: string;
    btnWhatsapp: string;
    btnSuccessWhatsapp: string;
    btnCloseModal: string;
    footerDirectLine: string;
    footerFacility: string;
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
      searchPlaceholder: 'Malzeme veya DIN ara...',
      rfqCart: 'Teklif Sepeti',
      quickRfq: 'Hızlı RFQ',
      contact: 'B2B İletişim',
      viewAllCategories: 'Tüm Endüstriyel Kategoriler',
      rfqCalculator: 'Teknik Teklif & RFQ Hesaplayıcı',
      catalogPdf: '2025 Teknik Ürün Kataloğu (PDF)',
      aboutUs: 'Kurumsal & Hakkımızda',
      contactForm: 'B2B Teklif & İletişim Formu',
      searchHint: 'Malzeme veya DIN Ara...',
      tdsBadge: 'TDS Föyü ↗',
    },
    hero: {
      marqueeCnc: '3 & 5 EKSEN CNC İŞLEME | ±0.02 mm Tolerans',
      marqueeShipment: 'AYNI GÜN SEVK | Çayırova / Gebze Antrepo',
      marqueeDefense: 'SAVUNMA SANAYİ STANDARDI | AS9100 / ISO 9001',
      marqueeCut: 'MİLİMETRİK KESİM | Fire Sıfırlama Garantisi',
      badgeFacility: 'ÇAYIROVA - GEBZE TESİSİ',
      badgeSlogan: '‘SİZ İSTEYİN BİZ ÜRETELİM’',
      titleMain: 'Mühendislik Plastikleri,',
      titleHighlight: '3 & 5 Eksen CNC İmalat',
      titleEnd: 've Endüstriyel Metal Tedariği',
      subtitle:
        'Cast Polyamid (Kestamit PA6G), Saf PTFE Teflon, PE 1000 Ulpolen ve POM-C Delrin imalatı; PEEK, FR4 Epoksi ve alaşımlı metallerde doğrudan üretici ve ithalatçı güvencesiyle aynı gün sevk.',
      btnRfq: 'Hızlı Teklif & RFQ Hesaplayıcı',
      btnCatalog: '2025 Teknik Kataloğu',
      btnCall: 'İbrahim Şahbaz ile Görüşün',
      stat1Val: '3.500 m²',
      stat1Label: 'Çayırova Fabrika & Depo',
      stat2Val: '40+ Ton',
      stat2Label: 'Hazır Polimer & Metal Stok',
      stat3Val: '±0.01 mm',
      stat3Label: '5 Eksen CNC Talaşlı İmalat',
      stat4Val: '32 Ülke',
      stat4Label: 'Global İhracat & Dağıtım',
      stationTitle: 'HASSAS MALZEME SEÇİCİ & İNCELEME İSTASYONU',
      specDimensions: 'Stok Ebatları',
      specDensity: 'Yoğunluk',
      specTemp: 'Çalışma Sıcaklığı',
      specFrictionStrength: 'Sürtünme / Dayanım',
      specHardness: 'Sertlik Derecesi',
      specStock: 'Stok Durumu',
      scoreWear: 'Aşınma Direnci',
      scoreChem: 'Kimyasal Direnç',
      scoreTemp: 'Sıcaklık Dayanımı',
      btnTds: 'TDS Föyünü İncele',
      btnOrderRfq: 'Bu Malzemeden Teklif İste',
    },
    categories: {
      badge: 'Hassas Malzeme Portföyü // 10 Ana Grup',
      title: 'Endüstriyel Polimer & Alaşımlı Metal Kategorileri',
      subtitle:
        'Her malzeme grubu için Çayırova ana depomuzdan sertifikalı, yüksek toleranslı ve istenilen milimetrik ebatlarda kesime hazır stok güvencesi.',
      productCountSuffix: 'Ürün & Malzeme Çeşidi',
      viewProducts: 'Ürünleri İncele',
      names: {
        'muhendislik-plastikleri': 'Mühendislik Plastikleri',
        'teflon-ptfe': 'Teflon & PTFE Grubu',
        'pe1000-hdpe': 'PE 1000 & Polietilen',
        'poliuretan-kalip': 'Poliüretan Kalıp Yayları',
        'civa-celigi': 'Cıva Çeliği & Miller',
        'vinc-denge-5th-wheel': 'Vinç Denge & 5th Wheel',
        'epoksi-fr4-mikanit': 'FR4 Epoksi & Mikanit',
        'alasimli-bakir-bronz': 'Bronz & Alaşımlı Metaller',
        'yanmaz-kablo': 'Yanmaz Silikon Kablolar',
        'eva-tatami': 'EVA & Tatami Zemin',
      },
      descriptions: {
        'muhendislik-plastikleri': 'Cast Polyamid (Kestamit), POM-C Delrin, Polyamid PA6 levha, takoz ve çubuklar.',
        'teflon-ptfe': 'Saf PTFE levha/çubuk, Teflon cam kumaş, contalon genişletilmiş şerit bant, salmastra grupları.',
        'pe1000-hdpe': 'Ulpolen UHMWPE konveyör kızakları, bunker kaplamaları, gıda onaylı aşınma plakaları.',
        'poliuretan-kalip': '90 Shore A döküm desmadur poliüretan takoz, levha ve sac şekillendirme kalıp yayları.',
        'civa-celigi': 'DIN 1.2210 (115CrV3) h8 toleranslı hassas taşlanmış kalıp mili, zımba ve rayba çelikleri.',
        'vinc-denge-5th-wheel': 'Mobil vinç ayak pabuçları (75 tona kadar) ve ağır vasıta 5. teker teflon kaydırma plakaları.',
        'epoksi-fr4-mikanit': 'Elektrik trafo panoları için NEMA FR-4 cam epoksi yeşil levha ve 500-700°C mikanit ısı plakaları.',
        'alasimli-bakir-bronz': 'Alüminyum bronzu CuAl10Ni5Fe4, fosfor bronz, kızıl döküm burç ve bakır lamalar.',
        'yanmaz-kablo': '400°C nikel kaplı bakır silikon cam elyaf örgülü yüksek ısı fırın ve rezistans kabloları.',
        'eva-tatami': 'Endüstriyel zemin koruma levhaları, spor salonu ve çocuk oyun alanı darbe emici tatami matlar.',
      },
    },
    products: {
      badgeStock: 'Stoktan Doğrudan Sevk // DIN Normlu Hassas Tolerans',
      title: 'Mühendislik Malzemeleri & Yüksek Performanslı Polimerler',
      filterClear: 'Filtreyi Temizle',
      rateLabel: 'Kur:',
      vatWholesale: '(+KDV Toptan)',
      warehouseLabel: 'Çayırova Ana Fabrika Depo',
      emptyTitle: 'Seçilen Kategoride Şu An Listelenen Ürün Bulunmuyor',
      emptyDesc:
        'Bu malzeme grubu için Çayırova ana depomuzda özel ölçü takoz, blok veya çubuk stoklarımız mevcuttur. Lütfen teknik teklif formunu kullanarak talep iletiniz.',
      btnShowAll: 'Tüm Ürünleri Göster',
      btnCustomRfq: 'Özel Ölçü Teklifi İste (RFQ)',
      priceRangeLabel: 'Fiyat Aralığı (+KDV)',
      btnSelectSize: 'Ölçü Seç',
      btnRequestQuote: 'Teklif Alınız',
      hardnessLabel: 'Sertlik',
      btnTdsTooltip: 'Teknik Şartname / TDS Föyü',
      names: {
        'pe-1000-levha': {
          name: 'PE 1000 (Ulpolen) UHMWPE Levha',
          subtitle: 'Konveyör kızakları, aşınma plakaları ve gıda makineleri için',
          category: 'Mühendislik Polimeri',
          description: 'Konveyör kızakları, aşınma plakaları ve gıda makineleri için sıfır sürtünmeli ultra yüksek moleküler polietilen levha.',
          actionText: 'Teklif İste',
        },
        'saf-teflon-levha': {
          name: 'Saf Teflon Levha (PTFE A-Class)',
          subtitle: 'Kimyasal reaktör ve yüksek gerilim izolasyonu',
          category: 'PTFE Polimer',
          description: 'Kimyasal reaktör flanş contaları ve yüksek gerilim izolasyonu için tam kimyasal direnç sunan saf teflon levha.',
          actionText: 'Ebat Seç',
        },
        'civa-celigi-h8': {
          name: 'Civa Çeliği 2210 Kalite H8 Mil',
          subtitle: 'DIN 115CrV3 hassas taşlanmış kalıp pimi ve miller',
          category: 'Takım Çeliği',
          description: 'DIN 115CrV3 kalıp pimi, zımba, rayba ve hassas mil imalatı için h8 mikron toleranslı taşlanmış çelik.',
          actionText: 'Çap Seç',
        },
        'contalon-ptfe-bant': {
          name: 'Contalon Genişletilmiş PTFE Bant',
          subtitle: 'Flanş ve emaye boru hatlarında mikroporoz teflon sızdırmazlık',
          category: 'Sızdırmazlık',
          description: 'Büyük flanşlarda ve emaye boru hatlarında sıfır kaçak sağlayan kendinden yapışkanlı genişletilmiş mikro gözenekli teflon bant.',
          actionText: 'Genişlik',
        },
        'isi-kablosu-400c': {
          name: 'Yanmaz Silikon Cam Elyaf Kablo (400°C)',
          subtitle: 'Endüstriyel fırın, rezistans ve yüksek sıcaklık hatları',
          category: 'Yüksek Isı Kablo',
          description: 'Nikel kaplı saf bakır iletkenli, silikon emdirilmiş cam elyaf örgülü 400°C sürekli çalışma dayanımlı yangın güvenlik kablosu.',
          actionText: 'Kesit',
        },
        'epoksi-fr4-levha': {
          name: 'Epoksi FR4 Yeşil Levha & Çubuk',
          subtitle: 'Cam kumaş takviyeli epoksi reçine, yüksek mekanik ve ark direnci',
          category: 'Yalıtım Grubu',
          description: 'Cam elyaf kumaş takviyeli epoksi reçine laminat. Trafo, pano baraları ve yüksek frekanslı elektrik yalıtımı için üstün mukavemet.',
          actionText: 'Teklif İste',
        },
        'poliuretan-pu-desmadur': {
          name: 'Poliüretan PU Çubuk & Desmadur',
          subtitle: 'Kalıp yayları, sıyırıcı bıçaklar ve elastomer burçlar',
          category: 'Darbe Sönümleme',
          description: 'Kalıp yayları, sıyırıcı bıçaklar ve yüksek dinamik darbeye maruz kalan parçalar için 90 Shore A döküm elastomer poliüretan.',
          actionText: 'Ölçü Seç',
        },
        'cast-polyamid-kestamit': {
          name: 'Cast Polyamid (Kestamit PA6G) Levha & Takoz',
          subtitle: 'Ağır yük dişlileri, makaralar, kızaklar ve aşınma plakaları',
          category: 'Mühendislik Plastiği',
          description: 'Sarı ve natürel döküm polyamid. Yüksek mekanik dayanım, darbe sönümleme ve bronz/çelik yerine mükemmel aşınma performansı sunan temel imalat polimeri.',
          actionText: 'Ölçü Seç',
        },
        'pom-c-delrin': {
          name: 'POM-C Delrin (Polioksimetilen) Çubuk & Levha',
          subtitle: 'Sıfır nem emilimi, hassas CNC işleme ve boyutsal kararlılık',
          category: 'Hassas Polimer',
          description: 'Beyaz ve siyah teknik asetal polimer. Suda ve nemli ortamlarda genleşmez; hassas CNC torna ve freze işleme toleranslarında sektör lideri.',
          actionText: 'Ebat Seç',
        },
        'alasimli-aluminyum-bronz': {
          name: 'CuAl10Ni5Fe4 Alüminyum Bronzu Burç & Mil',
          subtitle: 'Ağır yük, deniz suyu ve ekstrem sürtünme yatakları',
          category: 'Ağır Sanayi Alaşımı',
          description: 'DIN 1714 standardında alüminyum ve nikel katkılı süper alaşım bronz. Korozyona, kavitasyona ve 800+ MPa çekme gerilimine dayanıklı.',
          actionText: 'Çap Seç',
        },
        'eva-tatami-zemin': {
          name: 'Eva Rulo & 26mm Darbe Emici Tatami Zemin Matı',
          subtitle: 'Endüstriyel zemin koruma, spor ve makine titreşim sönümleme',
          category: 'Darbe İzolasyonu',
          description: 'Çift taraflı kilitli tatami eva matlar ve sanayi rulo levhaları. Yüksek esneklik, kaymaz doku ve bakteri barındırmayan kapalı hücre yapısı.',
          actionText: 'Kalınlık',
        },
        'peek-termoplastik': {
          name: 'PEEK (Polietereterketon) Levha & Çubuk',
          subtitle: '+260°C sürekli çalışma, havacılık ve medikal uyumlu ekstrem polimer',
          category: 'Ekstrem Termoplastik',
          description: 'Havacılık, savunma sanayi ve yarı iletken sektörlerinde metal yerine kullanılan en yüksek mekanik ve termal performanslı mühendislik plastiği.',
          actionText: 'Teklif İste',
        },
        'mikanit-levha-500c': {
          name: 'Mikanit Yüksek Isı Yalıtım Levhası (500°C - 700°C)',
          subtitle: 'Fırın rezistansları, sıcak presler ve dökümhane termal izolasyonu',
          category: 'Termal & Elektrik Yalıtım',
          description: 'Muskovit ve flogopit mika pullarının yüksek ısıya dayanıklı silikon reçine ile preslenmesiyle üretilen, 500°C - 700°C sıcaklığa ve yüksek voltaj arkına dayanıklı katı levha.',
          actionText: 'Teklif İste',
        },
        'silikon-levha-contalar': {
          name: 'Yüksek Sıcaklık Silikon Levha & Contalar',
          subtitle: '+250°C fırın kapak contaları, gıda ve ilaç sanayi sızdırmazlık',
          category: 'Elastomer Sızdırmazlık',
          description: 'Yüksek sıcaklık fırın kapakları, otoklavlar ve gıda makineleri için -60°C ile +250°C arasında elastikiyetini kaybetmeyen, FDA onaylı şeffaf ve kırmızı silikon levha.',
          actionText: 'Kalınlık Seç',
        },
        'fenolik-pamuklu-bezli-fiber': {
          name: 'Fenolik Pamuklu Bezli Fiber Levha & Çubuk (HGW 2082)',
          subtitle: 'Sessiz dişliler, yatak burçları ve darbe dayanımlı mekanik parçalar',
          category: 'Mekanik Laminat',
          description: 'İnce pamuklu bez katmanlarının termoset fenolik reçine ile yüksek basınç ve sıcaklık altında laminasyonu ile üretilen, darbe emici, sessiz çalışan ve aşınmaya dayanıklı fiber malzeme.',
          actionText: 'Ebat Seç',
        },
        'vinc-ayak-denge-takozu': {
          name: 'Mobil Vinç Ayak Denge Destek Takozu (75 Ton)',
          subtitle: 'Kırılmaz yüksek yoğunluklu polimer, zemin emniyet ve pabuç altlığı',
          category: 'Ağır Sanayi Donanım',
          description: 'Mobil vinçler, itfaiye merdivenleri, sepetli platformlar ve beton pompaları için tek pabuçta 75 tona kadar taşıma kapasiteli, kırılmaz ve çürümez polimer denge destek tablası.',
          actionText: 'Ölçü Seç',
        },
      },
    },
    rfq: {
      badge: 'CANLI TEORİK AĞIRLIK & TAHMİNİ FİYAT HESAPLAYICI',
      title: 'Hassas RFQ Ağırlık & Fiyat Hesaplayıcı',
      subtitle:
        'Malzeme cinsini, kesim şeklini ve milimetrik ebatları girerek teorik ağırlığı ve toptan liste fiyatını anında hesaplayın.',
      selectMaterial: '1. Malzeme Seçimi',
      shapeSelect: '2. Kesim Formu',
      shapePlate: 'Levha / Plaka',
      shapeRod: 'Dolu Yuvarlak Çubuk',
      dimensionsTitle: '3. Milimetrik Boyutlar & Adet',
      width: 'Genişlik (mm)',
      length: 'Uzunluk (mm)',
      thickness: 'Kalınlık (mm)',
      diameter: 'Çap (Ø mm)',
      quantity: 'Sipariş Adedi',
      processing: '4. Talaşlı İmalat & Kesim İşlemi',
      procRaw: 'Sadece Ham Kesim (Standart Testere)',
      procCnc: 'CNC Frezeleme & Ebatlama',
      procGrinding: 'Hassas Taşlama (h8/h7 Tolerans)',
      procCustom: 'Özel Numune / Prototip İmalatı',
      calculatedWeight: 'Hesaplanan Teorik Ağırlık',
      unitWeight: 'Birim Ağırlık:',
      totalWeight: 'Toplam Ağırlık:',
      estimatedCost: 'Tahmini Toptan Tutar:',
      btnAddToCart: 'Teklif Sepetime Ekle',
      btnSendWhatsapp: 'WhatsApp ile Hızlı RFQ Gönder',
      addedNotification: 'Malzeme teklif sepetinize eklendi!',
      companyNamePlaceholder: 'Firma Ünvanı (Opsiyonel)',
      phonePlaceholder: 'Telefon / WhatsApp Numarası',
      notesPlaceholder: 'Varsa özel tolerans, pah, delik veya teslimat notunuzu yazınız...',
      uploadFileBtn: 'Teknik Çizim / CAD / STEP Yükle',
      disclaimer: 'Hesaplanan ağırlık ve fiyat teorik olup kesin sipariş onayı öncesinde teknik ekibimizce doğrulanır.',
    },
    corporate: {
      badgeName: 'ÇAYIROVA / KOCAELİ ANA MERKEZ',
      badgeSlogan: '‘SİZ İSTEYİN BİZ ÜRETELİM’',
      title: 'Mühendislik Plastikleri İmalatı, İthalatı ve Savunma Sanayi Üretim Gücü',
      description:
        'Üretici Tedarik, mühendislik plastiklerinin imalatı ve ithalatında uzman, Çayırova/Gebze merkezli endüstriyel tedarikçidir. Başlıca savunma sanayi olmak üzere ağır makine, otomotiv ve konveyör hatlarında geniş bir ürün portföyü ve yüksek hassasiyetli talaşlı imalat sunar.',
      producedTitle: 'Üretimini Yapmış Olduğumuz',
      producedItems: 'Cast Polyamid (Kestamit PA6G), Polyamid PA6, HDPE Polietilen, PE 1000 Ulpolen levha ve takozlar.',
      importedTitle: 'İthalatını Yapmış Olduğumuz',
      importedItems: 'Saf PTFE Teflon, POM-C Delrin, PEEK, PVDF, Mikanit, Yanmaz Silikon Kablolar ve Alaşımlı Metaller.',
      machiningTitle: '3 & 5 Eksen CNC Talaşlı İmalat Parkuru',
      machiningDesc:
        'Teknik resim veya CAD modelinize göre mikron düzeyinde hassasiyetle frezeleme, torna, taşlama ve özel dişli imalatı.',
      cncHighTech:
        'Beklenti ve teknik şartnamelerinizi karşılamak için deneyimli mühendislik kadromuzla yüksek teknoloji 3 Eksen, 5 Eksen CNC frezeleme ve kayar otomat hizmeti sunuyoruz. Savunma sanayi ve makine imalatında stratejik iş ortaklığı sağlıyoruz.',
      authorizedPersonTitle: 'Şirket Yetkilisi',
      advantage1Title: '3 & 5 Eksen CNC Talaşlı İmalat',
      advantage1Desc: 'Hassas toleranslı frezeleme, torna & kayar otomat parkuru',
      advantage2Title: 'Savunma Sanayi Standartları',
      advantage2Desc: 'AS9100 ve ISO 9001 sertifikalı stratejik iş ortaklığı',
      advantage3Title: 'Yerli İmalat & Geniş İthalat',
      advantage3Desc: 'Kestamit, PTFE, PEEK, PBI ve FR4 doğrudan depodan sevk',
      advantage4Title: 'Çayırova Depodan Doğrudan Sevk',
      advantage4Desc: 'Aynı gün kargo, hızlı lojistik & milimetrik fire optimizasyonu',
      stat1Val: '3.500 m²',
      stat1Label: 'Fabrika & Depo Alanı',
      stat2Val: '40+ Ton',
      stat2Label: 'Hazır Yarı Mamul Stok',
      stat3Val: '14 Adet',
      stat3Label: '3 & 5 Eksen CNC Parkuru',
      stat4Val: 'Aynı Gün',
      stat4Label: 'Stoktan Hızlı Sevkiyat',
      directLine: 'Doğrudan İmalat Hattı:',
    },
    sectors: {
      badge: 'HİZMET VERDİĞİMİZ AĞIR SANAYİ KOLLARI',
      factoriesCount: 'Türkiye Geneli 1200+ Aktif Fabrika',
      automotive: 'Otomotiv Sanayi',
      automotiveSub: 'Kalıp & Fikstür',
      heavyMachinery: 'Ağır Makine',
      heavyMachinerySub: 'Dişli & Burç',
      defenseAero: 'Savunma Sanayi',
      defenseAeroSub: 'Hassas Tolerans',
      chemicalFood: 'Kimya & İlaç',
      chemicalFoodSub: 'PTFE Korozyon',
      conveyorLogistics: 'Konveyör Hatları',
      conveyorLogisticsSub: 'PE 1000 Kılavuz',
      ctaTitle: 'Teknik Malzeme Uzmanımızla Canlı Görüşün',
      ctaSubtitle: 'Çayırova Merkez: +90 (533) 377 18 97 | info@ureticitedarik.com',
      ctaBtn: 'İbrahim Şahbaz ile WhatsApp\'tan Görüşün',
      ctaBtnDirect: 'Doğrudan Ara',
      ctaBtnWhatsapp: 'WhatsApp Hızlı Hat',
    },
    faq: {
      badge: 'Mühendislik Bilgi Bankası & AEO Rehberi',
      title: 'Sıkça Sorulan Sorular // Teknik Malzeme Seçimi',
      subtitle:
        'Doğru polimer ve takım çeliği seçimi; çalışma sıcaklığı, sürtünme katsayısı ve basma toleranslarına doğrudan bağlıdır. Mühendislik ve CNC üretim tecrübemizle en çok merak edilen teknik konuları derledik.',
      categoryAll: 'Tümü',
      searchPlaceholder: 'Soru veya malzeme ara (örn: Kestamit, PTFE, 64 HRC)...',
      noResults: 'Aramanızla eşleşen teknik soru bulunamadı.',
      noResultsTitle: 'Aramanızla eşleşen teknik soru bulunamadı',
      noResultsDesc: 'Lütfen farklı anahtar kelimeler deneyin veya doğrudan WhatsApp hattımızdan teknik destek alın.',
      stillQuestions: 'Sorunuzu burada bulamadınız mı?',
      stillQuestionsSub: 'Teknik resminizi veya proje detayınızı doğrudan imalat sorumlumuza iletin.',
      btnAskIbrahim: 'İbrahim Şahbaz\'a WhatsApp\'tan Danışın',
      askEngineer: 'Teknik Uzmana WhatsApp\'tan Sor',
      summaryTitle: 'Özet Mühendislik Tanımı:',
      requestQuoteForThis: 'Bu Malzemeden Teklif İste',
      aeoBadge: 'AEO Cevap Snippet\'ı',
    },
    footer: {
      slogan: '‘Siz İsteyin Biz Üretelim’',
      description:
        'Mühendislik plastikleri imalatı, ithalatı, 3 & 5 eksen CNC talaşlı imalat, yüksek ısı yalıtım malzemeleri ve özel alaşımlı metallerde Çayırova ana depomuzdan Türkiye ve dünyaya doğrudan sevk.',
      badgeCnc: '3 & 5 Eksen CNC',
      badgeLathe: 'Kayar Otomat',
      colQuickLinks: 'Hızlı Erişim',
      colCategories: 'Ürün Grupları',
      colProducts: 'Ürün Grupları',
      colHeavy: 'Ağır Sanayi & Donanım',
      colCorporate: 'Kurumsal & Destek',
      colContact: 'Fabrika & İletişim',
      authorized: 'Yetkili:',
      aboutUs: 'Hakkımızda & Üretim Parkuru',
      catalogDownload: '2025 Teknik Kataloğu (PDF)',
      rfqCalculator: 'Hassas RFQ Hesaplayıcı',
      legalKvkk: 'KVKK Aydınlatma Metni',
      legalPrivacy: 'Gizlilik ve Çerez Politikası',
      legalSales: 'Mesafeli Satış Sözleşmesi',
      legalDistance: 'Teslimat ve İade Koşulları',
      rightsReserved: 'Tüm hakları saklıdır. Çayırova / Kocaeli.',
      phoneLabel: 'Santral & WhatsApp',
      addressLabel: 'Adres & Fabrika Depo',
    },
    cart: {
      title: 'Teklif Sepetim',
      itemCount: 'Kalem',
      emptyTitle: 'Teklif sepetiniz henüz boş',
      emptyDesc: 'Ürün sayfalarından veya parametrik RFQ hesaplayıcıdan malzeme ekleyebilirsiniz.',
      totalWeight: 'Toplam Malzeme Ağırlığı:',
      estimatedTotal: 'Tahmini Liste Tutarı:',
      btnSendWhatsapp: 'WhatsApp ile Hızlı RFQ Gönder',
      btnClear: 'Sepeti Temizle',
      btnClose: 'Kapat',
      shapePlate: 'Levha / Plaka',
      shapeRod: 'Dolu Çubuk / Mil',
      theoretical: 'Teorik:',
      processing: 'İşleme:',
      btnDownloadQuote: 'Teklifi İndir',
      btnClearCart: 'Sepeti Boşalt',
      plate: 'Levha',
      rod: 'Çubuk',
      deleteTooltip: 'Sil',
    },
    search: {
      placeholder: 'Malzeme adı, DIN normu veya ürün kodu yazın (örn: Delrin, Kestamit, 1.2210)...',
      recentTitle: 'Popüler Aramalar',
      resultsTitle: 'Bulunan Malzemeler',
      categoriesTitle: 'İlgili Kategoriler',
      noResults: 'Aramanıza uygun malzeme veya standart bulunamadı.',
      pressEsc: 'Kapatmak için ESC tuşuna basın',
      inputPlaceholder: 'Malzeme adı, DIN normu (örn: 1.2210), kod veya ebat arayın...',
      materialsHeader: 'Teknik Malzemeler',
      categoriesHeader: 'Kategoriler',
      noProducts: 'Eşleşen ürün bulunamadı.',
    },
    catalog: {
      badge: '42 SAYFALIK KAPSAMLI FÖY',
      title: '2025 Teknik Ürün Kataloğu',
      subtitle: 'Mühendislik plastikleri, yüksek ısı yalıtım malzemeleri ve alaşımlı metaller tam teknik kataloğumuz',
      btnDownloadPdf: 'Kataloğu İndir (PDF)',
      btnWhatsappInquire: 'Katalog Hakkında Bilgi Al',
      tableOfContents: 'Katalog İçindekiler Tablosu',
      pageLabel: 'Sayfa',
      badgeOfficial: 'Resmi Şirket Kataloğu • 42 Sayfa',
      modalTitle: 'Üretici Tedarik Teknik Plastik Polimer Metal Kataloğu',
      responsible: 'Katalog Sorumlusu & Teknik Satış',
      indexTitle: 'Katalog Sayfa Dizinleri (42 Sayfa Tam Liste)',
      allDownloadable: 'Tüm Sayfalar İndirilebilir',
      btnPrint: 'PDF Olarak Kaydet / Yazdır',
      btnClose: 'Kapat',
      btnDownload: '42 Sayfalık Föyü İndir (.TXT)',
    },
    contact: {
      title: 'B2B Teknik Teklif & İletişim Formu',
      subtitle: 'Özel kesim ölçüleriniz veya teknik resminiz için Çayırova teknik ekibimizden teklif isteyin.',
      fullName: 'Yetkili Adı Soyadı',
      company: 'Firma Ünvanı',
      phone: 'Telefon Numarası',
      email: 'E-Posta Adresi',
      materialSelect: 'İlgilenilen Malzeme Grubu',
      message: 'Ölçü, Tolerans veya Proje Notu',
      uploadDrawing: 'Teknik Çizim / CAD / STEP Yükle',
      btnSubmit: 'Teklif Formunu İlet (RFQ)',
      successTitle: 'Teklif Talebiniz Başarıyla Alındı!',
      successDesc: 'Talebiniz teknik satış ve mühendislik departmanımıza iletildi. İbrahim Şahbaz ve teknik ekibimiz en geç 15 dakika içinde size dönüş yapacaktır.',
      modalTitle: 'Kurumsal B2B Teklif & İletişim Formu',
      modalSubtitle: 'Fabrika Satış & 3/5 Eksen CNC İmalat Birimi - Çayırova / Gebze',
      trustBadge: 'Kurumsal E-Fatura, ISO 9001 ve AS9100 Standartlarında Üretim',
      avgTime: 'Ort. Teklif Süresi: 15 dk',
      companyLabel: 'Firma Ünvanı',
      companyPlaceholder: 'Örn: ABC Makina San. Tic. Ltd.',
      taxLabel: 'Vergi Dairesi / No',
      taxSub: '(E-Fatura için)',
      taxPlaceholder: 'Örn: Gebze V.D. / 1234567890',
      personLabel: 'Yetkili Ad Soyad',
      personPlaceholder: 'Ad Soyad',
      phoneLabel: 'Telefon (GSM)',
      emailLabel: 'E-Posta Adresi',
      materialGroupLabel: 'Talep Edilen Malzeme Grubu',
      urgencyLabel: 'Termin / Sevkiyat Önceliği',
      urgencyNormal: '🟢 Standart İmalat / Sevkiyat Süreci',
      urgencyUrgent: '🔴 ACİL - Fabrika Stoktan Aynı Gün Sevk İhtiyacı',
      notesLabel: 'Ölçüler, Adet & Tolerans Notları',
      notesPlaceholder: 'Örnek: 50x500x1000 mm Kestamit Plaka 4 adet + 10 adet Ø80x300 mm POM Delrin Takoz CNC işleme...',
      fileLabel: 'Teknik Resim / CAD Dosyası',
      fileFormats: '(STEP, DXF, DWG, PDF max 25MB)',
      fileUploadText: 'Teknik Çizim Dosyası Yükleyin veya Sürükleyin',
      fileChange: '(Değiştirmek için tıklayın)',
      btnSubmitting: 'İletiliyor...',
      btnWhatsapp: 'WhatsApp ile Gönder',
      btnSuccessWhatsapp: 'Teklifi WhatsApp\'tan da Doğrula',
      btnCloseModal: 'Pencereyi Kapat',
      footerDirectLine: 'Doğrudan Hat:',
      footerFacility: 'Kocaeli / Gebze Antrepo & CNC İmalat Tesisi',
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
      searchPlaceholder: 'Search material or DIN...',
      rfqCart: 'RFQ Basket',
      quickRfq: 'Quick RFQ',
      contact: 'B2B Contact',
      viewAllCategories: 'All Industrial Categories',
      rfqCalculator: 'Technical RFQ & Weight Calculator',
      catalogPdf: '2025 Technical Product Catalog (PDF)',
      aboutUs: 'About Us & Facility',
      contactForm: 'B2B Quote & Contact Form',
      searchHint: 'Search material or DIN...',
      tdsBadge: 'TDS Sheet ↗',
    },
    hero: {
      marqueeCnc: '3 & 5-AXIS CNC MACHINING | ±0.02 mm Tolerance',
      marqueeShipment: 'SAME-DAY DISPATCH | Cayirova / Gebze Warehouse',
      marqueeDefense: 'DEFENSE INDUSTRY STANDARD | AS9100 / ISO 9001',
      marqueeCut: 'MILLIMETRIC CUTTING | Zero-Scrap Guarantee',
      badgeFacility: 'CAYIROVA - GEBZE FACILITY',
      badgeSlogan: '‘YOU DEMAND, WE MANUFACTURE’',
      titleMain: 'Engineering Plastics,',
      titleHighlight: '3 & 5-Axis CNC Machining',
      titleEnd: '& Industrial Metal Supply',
      subtitle:
        'Manufacturing of Cast Polyamide (PA6G), Virgin PTFE Teflon, PE 1000 UHMWPE, and POM-C Delrin; direct supply and same-day international dispatch for PEEK, FR4 Epoxy, and specialty alloy metals.',
      btnRfq: 'Quick RFQ & Weight Calculator',
      btnCatalog: '2025 Technical Catalog',
      btnCall: 'Speak with Ibrahim Sahbaz',
      stat1Val: '3,500 m²',
      stat1Label: 'Cayirova Plant & Warehouse',
      stat2Val: '40+ Tons',
      stat2Label: 'Stock Polymer & Alloy Metal',
      stat3Val: '±0.01 mm',
      stat3Label: '5-Axis Precision CNC Machining',
      stat4Val: '32 Countries',
      stat4Label: 'Global Export & Logistics',
      stationTitle: 'PRECISION MATERIAL SELECTOR & INSPECTION STATION',
      specDimensions: 'Stock Sizes',
      specDensity: 'Density',
      specTemp: 'Operating Temp',
      specFrictionStrength: 'Friction / Strength',
      specHardness: 'Hardness Level',
      specStock: 'Stock Status',
      scoreWear: 'Wear Resistance',
      scoreChem: 'Chemical Resistance',
      scoreTemp: 'Thermal Resistance',
      btnTds: 'Inspect TDS Sheet',
      btnOrderRfq: 'Request RFQ For This Material',
    },
    categories: {
      badge: 'Precision Materials Portfolio // 10 Core Groups',
      title: 'Industrial Polymer & Alloy Metal Categories',
      subtitle:
        'Certified stock materials conforming to DIN/ISO standards with custom millimetric cutting dispatched from our main Cayirova warehouse.',
      productCountSuffix: 'Product & Grade Varieties',
      viewProducts: 'View Products',
      names: {
        'muhendislik-plastikleri': 'Engineering Plastics',
        'teflon-ptfe': 'Teflon & PTFE Group',
        'pe1000-hdpe': 'PE 1000 & Polyethylene',
        'poliuretan-kalip': 'Polyurethane Die Springs',
        'civa-celigi': 'Silver Steel & Precision Shafts',
        'vinc-denge-5th-wheel': 'Crane Outrigger & 5th Wheel',
        'epoksi-fr4-mikanit': 'FR4 Epoxy & Mikanit',
        'alasimli-bakir-bronz': 'Bronze & Alloyed Metals',
        'yanmaz-kablo': 'Fireproof Silicone Cables',
        'eva-tatami': 'EVA & Tatami Flooring',
      },
      descriptions: {
        'muhendislik-plastikleri': 'Cast Polyamide (Kestamit PA6G), POM-C Delrin, Polyamide PA6 sheets, blocks, and rods.',
        'teflon-ptfe': 'Virgin PTFE sheets/rods, PTFE coated glass fabric, expanded joint sealant tape, packing sets.',
        'pe1000-hdpe': 'Ulpolen UHMWPE conveyor wear strips, bunker linings, FDA-compliant food grade wear plates.',
        'poliuretan-kalip': '90 Shore A cast Desmadur polyurethane blocks, sheets, and press die springs.',
        'civa-celigi': 'DIN 1.2210 (115CrV3) ISO h8 precision ground tool steel rods, punches, and reamer bars.',
        'vinc-denge-5th-wheel': 'Mobile crane outrigger support pads (up to 75 tons) and heavy vehicle 5th wheel skid plates.',
        'epoksi-fr4-mikanit': 'NEMA FR-4 glass epoxy green boards for transformer panels and 500-700°C micanite heat plates.',
        'alasimli-bakir-bronz': 'Aluminium bronze CuAl10Ni5Fe4, phosphor bronze, continuous cast bushings, and copper busbars.',
        'yanmaz-kablo': '400°C nickel-plated copper silicone glass-braided high-temperature industrial heating cables.',
        'eva-tatami': 'Industrial shock-absorbing floor protection tiles, gym mats, and antibacterial interlocking tatami tiles.',
      },
    },
    products: {
      badgeStock: 'Direct Factory Stock // DIN Standard Precision Tolerance',
      title: 'Engineering Materials & High-Performance Polymers',
      filterClear: 'Clear Filter',
      rateLabel: 'Rate:',
      vatWholesale: '(+VAT Wholesale)',
      warehouseLabel: 'Cayirova Main Factory Warehouse',
      emptyTitle: 'No Products Currently Listed in Selected Category',
      emptyDesc:
        'Custom size blocks, rods, and sheets are ready in our Cayirova warehouse for this category. Please request a quote via our RFQ form.',
      btnShowAll: 'Show All Products',
      btnCustomRfq: 'Request Custom Size RFQ',
      priceRangeLabel: 'Price Range (+VAT)',
      btnSelectSize: 'Select Size',
      btnRequestQuote: 'Request Quote',
      hardnessLabel: 'Hardness',
      btnTdsTooltip: 'Technical Data Sheet (TDS)',
      names: {
        'pe-1000-levha': {
          name: 'PE 1000 (Ulpolen) UHMWPE Sheet',
          subtitle: 'For conveyor guides, wear plates and food processing machinery',
          category: 'Engineering Polymer',
          description: 'Zero-friction ultra-high molecular weight polyethylene sheet for conveyor guides, wear liners and food processing machinery.',
          actionText: 'Request RFQ',
        },
        'saf-teflon-levha': {
          name: 'Virgin PTFE Teflon Sheet (A-Class)',
          subtitle: 'Chemical reactor and high voltage electrical insulation',
          category: 'PTFE Polymer',
          description: 'Virgin pure PTFE sheet offering total chemical resistance for reactor flange gaskets and high-voltage electrical insulation.',
          actionText: 'Select Size',
        },
        'civa-celigi-h8': {
          name: 'Ground Silver Steel 1.2210 Grade h8 Rod',
          subtitle: 'DIN 115CrV3 precision ground tool steel pins and shafts',
          category: 'Tool Steel',
          description: 'Precision ground DIN 115CrV3 tool steel rod with ISO h8 tolerance for ejector pins, punches, reamers and precision shafts.',
          actionText: 'Select Dia',
        },
        'contalon-ptfe-bant': {
          name: 'Contalon Expanded PTFE Joint Sealant Tape',
          subtitle: 'Microporous PTFE sealing for large flanges and enamel piping',
          category: 'Sealing Tech',
          description: 'Self-adhesive expanded microporous PTFE tape providing zero leakage across uneven flanges and corrosive pipelines.',
          actionText: 'Select Width',
        },
        'isi-kablosu-400c': {
          name: 'Fireproof Silicone Glass Fiber Cable (400°C)',
          subtitle: 'Industrial kilns, heating elements and extreme temperature circuits',
          category: 'High-Temp Cable',
          description: 'Nickel-plated electrolytic copper conductor with silicone-impregnated braided glass fiber for continuous 400°C fire safety operation.',
          actionText: 'Select Cross-sec',
        },
        'epoksi-fr4-levha': {
          name: 'Epoxy FR4 Green Sheet & Rod',
          subtitle: 'Glass cloth reinforced epoxy resin with superior arc resistance',
          category: 'Insulation Class',
          description: 'Woven glass fabric reinforced epoxy resin laminate offering extreme dielectric strength for transformers, busbars and switchgears.',
          actionText: 'Request RFQ',
        },
        'poliuretan-pu-desmadur': {
          name: 'Polyurethane PU Rod & Desmadur',
          subtitle: 'Die springs, scraper blades and elastomer bushings',
          category: 'Shock Absorption',
          description: '90 Shore A cast elastomer polyurethane for die compression springs, scraper blades, and high dynamic impact machine parts.',
          actionText: 'Select Size',
        },
        'cast-polyamid-kestamit': {
          name: 'Cast Polyamide (Kestamit PA6G) Sheet & Block',
          subtitle: 'Heavy load gears, pulleys, guide rails and wear plates',
          category: 'Engineering Plastic',
          description: 'Yellow and natural cast polyamide. Exceptional mechanical strength, vibration damping and superior wear performance replacing bronze and steel.',
          actionText: 'Select Size',
        },
        'pom-c-delrin': {
          name: 'POM-C Delrin (Polyacetal) Rod & Sheet',
          subtitle: 'Zero moisture absorption, precision CNC machining and dimensional stability',
          category: 'Precision Polymer',
          description: 'White and black engineering acetal polyoxymethylene. No swelling in water or humid environments; industry benchmark for tight CNC turning tolerances.',
          actionText: 'Select Size',
        },
        'alasimli-aluminyum-bronz': {
          name: 'CuAl10Ni5Fe4 Aluminium Bronze Bushing & Shaft',
          subtitle: 'Heavy load, seawater and extreme friction bearing alloy',
          category: 'Heavy Industry Alloy',
          description: 'DIN 1714 super alloy bronze with aluminium and nickel additives. Highly resistant to corrosion, cavitation, and 800+ MPa tensile stresses.',
          actionText: 'Select Dia',
        },
        'eva-tatami-zemin': {
          name: 'EVA Roll & 26mm Shock-Absorbing Tatami Mat',
          subtitle: 'Industrial floor protection, gym and machinery vibration dampening',
          category: 'Impact Insulation',
          description: 'Interlocking reversible tatami EVA mats and industrial rolls. High elasticity, non-slip texture, and hygienic closed-cell antibacterial construction.',
          actionText: 'Select Thickness',
        },
        'peek-termoplastik': {
          name: 'PEEK (Polyetheretherketone) Sheet & Rod',
          subtitle: '+260°C continuous service, aerospace and medical grade polymer',
          category: 'Extreme Thermoplastic',
          description: 'Top-tier engineering thermoplastic replacing metals in aerospace, defense, and semiconductor industries with outstanding thermal and mechanical ratings.',
          actionText: 'Request RFQ',
        },
        'mikanit-levha-500c': {
          name: 'Mikanit High-Temp Insulation Sheet (500°C - 700°C)',
          subtitle: 'Kiln heating elements, hot presses and foundry thermal isolation',
          category: 'Thermal & Electrical',
          description: 'Solid high-pressure pressed sheet of muscovite or phlogopite mica flakes bonded with heat-resistant silicone resin, handling up to 700°C.',
          actionText: 'Request RFQ',
        },
        'silikon-levha-contalar': {
          name: 'High-Temperature Silicone Sheet & Gaskets',
          subtitle: '+250°C oven door seals, food and pharmaceutical sanitary sealing',
          category: 'Elastomer Sealing',
          description: 'FDA-compliant transparent and red silicone sheets maintaining flexibility from -60°C to +250°C for autoclaves and food processing machines.',
          actionText: 'Select Thickness',
        },
        'fenolik-pamuklu-bezli-fiber': {
          name: 'Phenolic Cotton Cloth Laminated Sheet & Rod (HGW 2082)',
          subtitle: 'Silent gears, bearing bushes and impact-resistant mechanical parts',
          category: 'Mechanical Laminate',
          description: 'Thermosetting phenolic resin laminated with fine cotton cloth under high pressure and temperature; silent running, shock-resistant composite.',
          actionText: 'Select Size',
        },
        'vinc-ayak-denge-takozu': {
          name: 'Mobile Crane Outrigger Support Pad (75 Tons)',
          subtitle: 'Unbreakable high-density polymer, soil safety and crane outrigger base',
          category: 'Heavy Safety Rigging',
          description: 'Unbreakable, rot-proof high-molecular polymer outrigger pad supporting up to 75 tons per point for mobile cranes, aerial platforms, and concrete pumps.',
          actionText: 'Select Size',
        },
      },
    },
    rfq: {
      badge: 'LIVE THEORETICAL WEIGHT & ESTIMATED PRICE CALCULATOR',
      title: 'Precision RFQ Weight & Price Calculator',
      subtitle:
        'Select material type, shape, and millimetric dimensions to calculate theoretical weight and wholesale list price instantly.',
      selectMaterial: '1. Select Material',
      shapeSelect: '2. Shape / Form',
      shapePlate: 'Sheet / Plate',
      shapeRod: 'Solid Round Rod',
      dimensionsTitle: '3. Millimetric Dimensions & Qty',
      width: 'Width (mm)',
      length: 'Length (mm)',
      thickness: 'Thickness (mm)',
      diameter: 'Diameter (Ø mm)',
      quantity: 'Order Quantity',
      processing: '4. Machining & Cutting Option',
      procRaw: 'Rough Saw Cut Only',
      procCnc: 'CNC Milling & Sizing',
      procGrinding: 'Precision Grinding (h8/h7 Tolerance)',
      procCustom: 'Custom Prototype / Sample Machining',
      calculatedWeight: 'Calculated Theoretical Weight',
      unitWeight: 'Unit Weight:',
      totalWeight: 'Total Weight:',
      estimatedCost: 'Estimated Wholesale Total:',
      btnAddToCart: 'Add to RFQ Basket',
      btnSendWhatsapp: 'Send Instant RFQ via WhatsApp',
      addedNotification: 'Material added to your RFQ basket!',
      companyNamePlaceholder: 'Company Name (Optional)',
      phonePlaceholder: 'Phone / WhatsApp Number',
      notesPlaceholder: 'Enter any specific tolerance, bevel, hole or delivery notes...',
      uploadFileBtn: 'Upload Technical Drawing / CAD / STEP',
      disclaimer: 'Calculated weight and prices are theoretical and will be confirmed by our engineers prior to formal order execution.',
    },
    corporate: {
      badgeName: 'CAYIROVA / KOCAELI HEADQUARTERS',
      badgeSlogan: '‘YOU DEMAND, WE MANUFACTURE’',
      title: 'Engineering Plastics Manufacturing, Import & Defense Industry Supplier',
      description:
        'Uretici Tedarik is a premier industrial supplier based in the Cayirova/Gebze industrial zone, specializing in manufacturing and importing engineering plastics. Serving defense, automotive, heavy machinery, and automated conveyor industries with extensive inventory and high-precision CNC machining.',
      producedTitle: 'Manufactured In-House',
      producedItems: 'Cast Polyamide (Kestamit PA6G), Polyamide PA6, HDPE Polyethylene, PE 1000 UHMWPE sheets and blocks.',
      importedTitle: 'Directly Imported & Stocked',
      importedItems: 'Virgin PTFE Teflon, POM-C Delrin, PEEK, PVDF, Micanite, Fireproof Silicone Cables, and Alloyed Metals.',
      machiningTitle: '3 & 5-Axis CNC Machining Fleet',
      machiningDesc:
        'Sub-millimetric precision milling, turning, grinding, and custom gear manufacturing per your technical drawings or 3D CAD models.',
      cncHighTech:
        'To meet your exact specifications, our experienced engineering team provides high-tech 3-axis and 5-axis CNC milling and swiss-type turning services. We serve as a strategic partner for defense and heavy machinery manufacturing.',
      authorizedPersonTitle: 'Company Authorized Officer',
      advantage1Title: '3 & 5-Axis Precision CNC Machining',
      advantage1Desc: 'Tight tolerance milling, lathe & sliding-head swiss turning center',
      advantage2Title: 'Defense Industry Standards',
      advantage2Desc: 'AS9100 & ISO 9001 certified strategic engineering partner',
      advantage3Title: 'In-House Production & Direct Import',
      advantage3Desc: 'Direct warehouse dispatch for Kestamit, PTFE, PEEK, PBI & FR4',
      advantage4Title: 'Cayirova Warehouse Direct Dispatch',
      advantage4Desc: 'Same-day shipping, prompt logistics & millimetric zero-scrap optimization',
      stat1Val: '3,500 m²',
      stat1Label: 'Plant & Warehouse Area',
      stat2Val: '40+ Tons',
      stat2Label: 'Semi-Finished Stock',
      stat3Val: '14 Units',
      stat3Label: '3 & 5-Axis CNC Machines',
      stat4Val: 'Same Day',
      stat4Label: 'Stock Dispatch',
      directLine: 'Direct Engineering Line:',
    },
    sectors: {
      badge: 'HEAVY INDUSTRIAL SECTORS WE SERVE',
      factoriesCount: '1,200+ Active Industrial Plants Worldwide',
      automotive: 'Automotive Industry',
      automotiveSub: 'Dies & Fixtures',
      heavyMachinery: 'Heavy Machinery',
      heavyMachinerySub: 'Gears & Bushings',
      defenseAero: 'Defense & Aerospace',
      defenseAeroSub: 'Precision Tolerance',
      chemicalFood: 'Chemical & Pharma',
      chemicalFoodSub: 'PTFE Corrosion Resistance',
      conveyorLogistics: 'Conveyor Lines',
      conveyorLogisticsSub: 'PE 1000 Guides',
      ctaTitle: 'Consult Live with Our Technical Materials Specialist',
      ctaSubtitle: 'Cayirova HQ: +90 (533) 377 18 97 | info@ureticitedarik.com',
      ctaBtn: 'Consult Ibrahim Sahbaz via WhatsApp',
      ctaBtnDirect: 'Call Directly',
      ctaBtnWhatsapp: 'WhatsApp Direct Line',
    },
    faq: {
      badge: 'Engineering Knowledge Base & AEO Guide',
      title: 'Frequently Asked Questions // Technical Material Selection',
      subtitle:
        'Selecting the right polymer or tool steel depends on operating temperatures, friction coefficients, and compressive loads. Here are the most critical engineering FAQs answered by our CNC experts.',
      categoryAll: 'All',
      searchPlaceholder: 'Search question or material (e.g. Delrin, PTFE, 64 HRC)...',
      noResults: 'No technical questions matched your query.',
      noResultsTitle: 'No technical questions matched your search',
      noResultsDesc: 'Please try different keywords or contact our engineering team directly via WhatsApp.',
      stillQuestions: 'Couldn\'t find your answer?',
      stillQuestionsSub: 'Send your technical drawing or project specifications directly to our production supervisor.',
      btnAskIbrahim: 'Ask Ibrahim Sahbaz on WhatsApp',
      askEngineer: 'Ask Our Technical Expert on WhatsApp',
      summaryTitle: 'Summary Engineering Definition:',
      requestQuoteForThis: 'Request RFQ For This Material',
      aeoBadge: 'AEO Answer Snippet',
    },
    footer: {
      slogan: '‘You Demand, We Manufacture’',
      description:
        'Direct factory supply and precision CNC machining of engineering plastics, high-temperature thermal insulation, and specialty metal alloys from our Cayirova warehouse across Turkey and international markets.',
      badgeCnc: '3 & 5-Axis CNC',
      badgeLathe: 'Swiss Turning',
      colQuickLinks: 'Quick Links',
      colCategories: 'Product Groups',
      colProducts: 'Product Groups',
      colHeavy: 'Heavy Industry & Rigging',
      colCorporate: 'Corporate & Support',
      colContact: 'Plant & Contact',
      authorized: 'Authorized:',
      aboutUs: 'About Us & Machine Park',
      catalogDownload: '2025 Technical Catalog (PDF)',
      rfqCalculator: 'Precision RFQ Calculator',
      legalKvkk: 'Personal Data Protection (KVKK)',
      legalPrivacy: 'Privacy & Cookie Policy',
      legalSales: 'Distance Sales Contract',
      legalDistance: 'Delivery & Return Terms',
      rightsReserved: 'All rights reserved. Cayirova / Kocaeli, Turkey.',
      phoneLabel: 'Direct Line & WhatsApp',
      addressLabel: 'Address & Warehouse',
    },
    cart: {
      title: 'My RFQ Basket',
      itemCount: 'Items',
      emptyTitle: 'Your RFQ basket is currently empty',
      emptyDesc: 'Add materials from the catalog or RFQ calculator to generate an instant batch quotation.',
      totalWeight: 'Total Material Weight:',
      estimatedTotal: 'Estimated List Price:',
      btnSendWhatsapp: 'Send Instant RFQ via WhatsApp',
      btnClear: 'Clear Basket',
      btnClose: 'Close',
      shapePlate: 'Sheet / Plate',
      shapeRod: 'Solid Rod / Shaft',
      theoretical: 'Theoretical:',
      processing: 'Machining:',
      btnDownloadQuote: 'Download RFQ (.TXT)',
      btnClearCart: 'Clear Basket',
      plate: 'Sheet',
      rod: 'Rod',
      deleteTooltip: 'Remove',
    },
    search: {
      placeholder: 'Type material name, DIN standard or product code (e.g. Delrin, Kestamit, 1.2210)...',
      recentTitle: 'Popular Searches',
      resultsTitle: 'Matching Materials',
      categoriesTitle: 'Related Categories',
      noResults: 'No materials or standards found matching your search.',
      pressEsc: 'Press ESC to close',
      inputPlaceholder: 'Search material name, DIN norm (e.g. 1.2210), code or size...',
      materialsHeader: 'Technical Materials',
      categoriesHeader: 'Categories',
      noProducts: 'No matching products found.',
    },
    catalog: {
      badge: '42-PAGE COMPREHENSIVE DOSSIER',
      title: '2025 Technical Product Catalog',
      subtitle: 'Complete technical catalog of engineering plastics, thermal insulation, and industrial metal alloys',
      btnDownloadPdf: 'Download Catalog (PDF)',
      btnWhatsappInquire: 'Inquire About Catalog',
      tableOfContents: 'Table of Contents',
      pageLabel: 'Page',
      badgeOfficial: 'Official Company Catalog • 42 Pages',
      modalTitle: 'Uretici Tedarik Technical Plastics Polymers & Metals Catalog',
      responsible: 'Catalog & Technical Sales Division',
      indexTitle: 'Catalog Page Index (42-Page Full Index)',
      allDownloadable: 'All Pages Downloadable',
      btnPrint: 'Save as PDF / Print',
      btnClose: 'Close',
      btnDownload: 'Download 42-Page Dossier (.TXT)',
    },
    contact: {
      title: 'B2B Technical RFQ & Contact Form',
      subtitle: 'Request a custom quote from our Cayirova engineering team for custom cut sizes or CAD drawings.',
      fullName: 'Contact Person Name',
      company: 'Company Name',
      phone: 'Phone / Mobile',
      email: 'Corporate Email',
      materialSelect: 'Material Group of Interest',
      message: 'Dimensions, Tolerances or Project Notes',
      uploadDrawing: 'Upload Technical Drawing / CAD / STEP',
      btnSubmit: 'Send RFQ Request',
      successTitle: 'Quotation Request Successfully Received!',
      successDesc: 'Our engineering department will review your specifications and reply with a formal quotation shortly.',
      modalTitle: 'Corporate B2B RFQ & Contact Form',
      modalSubtitle: 'Factory Sales & 3/5-Axis CNC Machining Division - Cayirova / Gebze',
      trustBadge: 'Corporate E-Invoice, ISO 9001 & AS9100 Standard Manufacturing',
      avgTime: 'Avg. Quotation Time: 15 min',
      companyLabel: 'Company Name',
      companyPlaceholder: 'e.g. ABC Industrial Machinery Ltd.',
      taxLabel: 'Tax Office & ID',
      taxSub: '(For Corporate Invoicing)',
      taxPlaceholder: 'e.g. Gebze Tax Office / 1234567890',
      personLabel: 'Contact Person Name',
      personPlaceholder: 'Full Name',
      phoneLabel: 'Phone (Mobile)',
      emailLabel: 'Corporate Email',
      materialGroupLabel: 'Requested Material Group',
      urgencyLabel: 'Urgency / Dispatch Priority',
      urgencyNormal: '🟢 Standard Manufacturing / Dispatch',
      urgencyUrgent: '🔴 URGENT - Same-Day Stock Dispatch Required',
      notesLabel: 'Dimensions, Quantities & Tolerance Notes',
      notesPlaceholder: 'Example: 50x500x1000 mm Cast Polyamide Plate 4 pcs + 10 pcs Ø80x300 mm POM Delrin Rod CNC machining...',
      fileLabel: 'Technical Drawing / CAD File',
      fileFormats: '(STEP, DXF, DWG, PDF max 25MB)',
      fileUploadText: 'Upload or Drag Technical Drawing',
      fileChange: '(Click to change)',
      btnSubmitting: 'Submitting...',
      btnWhatsapp: 'Send via WhatsApp',
      btnSuccessWhatsapp: 'Confirm Quotation on WhatsApp',
      btnCloseModal: 'Close Window',
      footerDirectLine: 'Direct Line:',
      footerFacility: 'Kocaeli / Gebze Warehouse & CNC Plant',
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
  },
};

export interface FaqItemTranslation {
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  category: string;
}

export const FAQS_TRANSLATIONS: Record<Language, Record<string, FaqItemTranslation>> = {
  tr: {
    'faq-kestamit-delrin-fark': {
      question: 'Kestamit (Cast Polyamid) ile Delrin (POM-C) arasındaki temel fark nedir?',
      shortAnswer:
        'Kestamit yüksek darbe dayanımı ve ağır yük aşınma direnci için üretilirken; Delrin sıfır nem emilimi, yüksek boyutsal kararlılık ve hassas CNC toleransları için tercih edilir.',
      detailedAnswer:
        'Cast Polyamid (PA6G Kestamit), döküm yoluyla üretilir ve yüksek mekanik gerilim, vinç makaraları ve büyük dişlilerde üstün yük taşıma kabiliyetine sahiptir. Delrin (POM-C) ise ekstrüzyon poliasetal olup higroskopik değildir (su emmez). Sulu veya buharlı ortamlarda şişme yapmaz; bu sebeple mikron toleranslı hassas dişliler, gıda ekipmanları ve otomotiv parçalarında Delrin kullanılır.',
      category: 'Mühendislik Plastikleri',
    },
    'faq-pe1000-kullanim-alani': {
      question: 'PE 1000 (Ulpolen UHMWPE) hangi çalışma koşullarında tercih edilmelidir?',
      shortAnswer:
        'PE 1000, sürtünme katsayısının minimum olması gereken konveyör hatlarında, aşınma bantlarında, bunker kaplamalarında ve kimyasal temas gerektiren gıda makinelerinde kullanılır.',
      detailedAnswer:
        'Yaklaşık 4.500.000 g/mol ultra yüksek moleküler ağırlığa sahip PE 1000, yapışmazlık özelliğiyle bilinir. Katı maddelerin bunkerlere yapışmasını engeller, konveyör kızaklarında zincir aşınmasını sıfıra indirir. -200°C ile +80°C arasında esnekliğini korur, çatlama yapmaz ve FDA gıda onayına sahiptir.',
      category: 'Aşınma & Konveyör',
    },
    'faq-teflon-ptfe-sicaklik': {
      question: 'Saf Teflon (PTFE) levha ve contaların sıcaklık ve kimyasal dayanımı nedir?',
      shortAnswer:
        'PTFE Teflon, -200°C ile +260°C arasında sürekli çalışabilir ve neredeyse bilinen tüm asit, baz ve solventlere karşı tam kimyasal atalet gösterir.',
      detailedAnswer:
        'PTFE (Politetrafloroetilen), 0.04 sürtünme katsayısı ile bilinen en kaygan katı malzemedir. Kimyasal reaktörler, asit flanşları, yüksek gerilim izolasyon baraları ve gıda fırınlarında kullanılır. Genişletilmiş yapıda üretilen Contalon şerit bantlar ise düzensiz flanş yüzeylerinde mikroporoz yapısıyla sıfır kaçak sağlar.',
      category: 'Yüksek Sıcaklık & Kimya',
    },
    'faq-vinc-ayak-denge-guvenlik': {
      question: 'Vinç ayak denge takozları kaç ton yüke dayanıklıdır ve neden ahşap yerine polimer kullanılmalıdır?',
      shortAnswer:
        'Özel imalat yüksek yoğunluklu polimer denge takozlarımız tek pabuçta 75 tona kadar basma yüküne dayanıklıdır; ahşap gibi çürümez, kırılmaz ve çatlamaz.',
      detailedAnswer:
        'Mobil vinçler, itfaiye merdivenleri ve beton pompaları ayak pabuçlarının zemine uyguladığı tonlarca basma kuvveti vardır. Ahşap takozlar zamanla nemden çürür, liflerinden ayrılarak kırılma riski taşır. Polimer vinç takozlarımız esnek yapısıyla zemin şokunu emer, kırılmaz, yağ ve petrolden etkilenmez ve taşıma kulpuyla ergonomik güvenlik sağlar.',
      category: 'Ağır Sanayi & Güvenlik',
    },
    'faq-cnc-plastik-tolerans': {
      question: '3 ve 5 eksen CNC tezgahlarda plastik işlerken hangi toleranslara ulaşılabilir?',
      shortAnswer:
        'Doğru takım ucu, soğutma ve gerilim alma ısıl işlemiyle mühendislik plastiklerinde ±0.02 mm (ISO h7) hassasiyetinde CNC işleme yapılabilmektedir.',
      detailedAnswer:
        'Plastiklerin ısıl genleşme katsayısı metallerden yüksektir. Çayırova tesisimizdeki 3 ve 5 eksen CNC freze ve kayar otomat parkurumuzda; Kestamit, POM-C Delrin, PEEK ve Alüminyum Bronz parçalar CAD/STEP modellerine göre mikron düzeyinde hassas toleranslarla işlenir. Çapak alma ve koordinat ölçüm (CMM) kontrolleri ile savunma sanayi standartlarında teslimat yapılır.',
      category: 'CNC İmalat & Hassasiyet',
    },
    'faq-civa-celigi-h8-ozellik': {
      question: 'Civa çeliği 1.2210 (115CrV3) h8 mil özellikleri ve ısıl işlem sertliği nedir?',
      shortAnswer:
        'DIN 1.2210 krom-vanadyum alaşımlı takım çeliğidir; h8 toleransında hassas taşlanmıştır ve su/yağ verme ısıl işlemi sonrası 64 HRC sertliğe ulaşır.',
      detailedAnswer:
        'Çapları Ø 2mm ile Ø 50mm arasında değişen 1000 mm ve 2000 mm boylarındaki civa çeliği miller; kalıp pimi, zımba, rayba, matkap ucu ve hassas mil yapımında kullanılır. Taşlanmış pürüzsüz yüzeyi (Ra < 0.6 µm) sayesinde ekstra talaşlı işlem gerektirmeden montaja hazırdır.',
      category: 'Takım Çeliği & Miller',
    },
  },
  en: {
    'faq-kestamit-delrin-fark': {
      question: 'What is the primary difference between Kestamit (Cast Polyamide) and Delrin (POM-C)?',
      shortAnswer:
        'While Kestamit is engineered for extreme impact resistance and heavy-load wear resistance, Delrin is preferred for zero moisture absorption, superior dimensional stability, and micron-level CNC machining.',
      detailedAnswer:
        'Cast Polyamide (PA6G Kestamit) is cast-polymerized and provides outstanding load-bearing capability for high mechanical shock, crane sheaves, and large gears. Delrin (POM-C) is an extruded polyacetal and completely non-hygroscopic (does not swell in water or humidity). Hence, Delrin is chosen for tight-tolerance precision gears, food processing machinery, and automotive components.',
      category: 'Engineering Plastics',
    },
    'faq-pe1000-kullanim-alani': {
      question: 'Under what operating conditions should PE 1000 (Ulpolen UHMWPE) be specified?',
      shortAnswer:
        'PE 1000 is chosen for conveyor chain guides, wear strips, bunker chutes, and food processing equipment demanding ultra-low friction and maximum sliding wear life.',
      detailedAnswer:
        'With an ultra-high molecular weight of ~4,500,000 g/mol, PE 1000 offers non-stick qualities that prevent bulk minerals from adhering to hopper walls, while eliminating chain wear on conveyor guides. It retains elasticity down to -200°C up to +80°C without cracking, and holds FDA certification for direct contact with food.',
      category: 'Wear & Conveyor',
    },
    'faq-teflon-ptfe-sicaklik': {
      question: 'What are the temperature and chemical limits of Pure Virgin Teflon (PTFE) sheets and gaskets?',
      shortAnswer:
        'PTFE Teflon operates continuously between -200°C and +260°C and exhibits total chemical inertness against virtually all industrial acids, alkalis, and aggressive solvents.',
      detailedAnswer:
        'PTFE (Polytetrafluoroethylene) features a friction coefficient of 0.04, ranking as the slipperiest engineering solid. It is utilized in chemical reactors, corrosive acid flanges, high-voltage busbar insulation, and industrial bakery ovens. Expanded Contalon sealant tapes feature a microporous texture that compresses to form a zero-leak seal across warped flanges.',
      category: 'High Temperature & Chemical',
    },
    'faq-vinc-ayak-denge-guvenlik': {
      question: 'What tonnage can crane outrigger pads handle, and why replace timber blocks with polymers?',
      shortAnswer:
        'Our custom ultra-dense polymer outrigger support pads withstand up to 75 metric tons per pad; unlike wood, they never rot, splinter, or rupture under load.',
      detailedAnswer:
        'Mobile cranes, aerial work platforms, and boom concrete pumps generate tons of point-load ground pressure. Timber pads absorb water, rot internally, and carry catastrophic fracture risks. Our high-density polymer outrigger pads absorb ground shock, resist oils and chemicals, and include built-in rope handles for certified safety on job sites.',
      category: 'Heavy Industry & Safety',
    },
    'faq-cnc-plastik-tolerans': {
      question: 'What machining tolerances are achievable on 3 and 5-axis CNC machines for engineering polymers?',
      shortAnswer:
        'With custom-ground plastic tooling, controlled cooling, and thermal stress-relieving, tolerances of ±0.02 mm (ISO h7) are routinely achieved on CNC milling and turning.',
      detailedAnswer:
        'Polymers possess higher coefficients of thermal expansion than steel. At our Cayirova plant’s 3 and 5-axis CNC milling and swiss-type lathe centers, Kestamit, POM-C Delrin, PEEK, and Aluminum Bronze components are machined directly from CAD/STEP models to micron tolerances, followed by coordinate measuring machine (CMM) inspection for defense-tier validation.',
      category: 'CNC Machining & Precision',
    },
    'faq-civa-celigi-h8-ozellik': {
      question: 'What are the specs and heat-treated hardness of DIN 1.2210 (115CrV3) h8 ground silver steel rods?',
      shortAnswer:
        'DIN 1.2210 is a chromium-vanadium alloyed tool steel, precision ground to ISO h8 tolerance, reaching up to 64 HRC hardness after oil/water quenching.',
      detailedAnswer:
        'Available in diameters from Ø 2mm up to Ø 50mm in 1000 mm and 2000 mm bar lengths, ground silver steel is used for punch pins, ejector pins, reamers, drills, and shafts. The centerless ground finish (Ra < 0.6 µm) enables immediate installation into tooling fixtures without secondary machining.',
      category: 'Tool Steel & Shafts',
    },
  },
};
