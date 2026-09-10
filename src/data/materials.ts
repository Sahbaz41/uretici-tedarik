import { MaterialCategory, ProductItem } from '../types';

export const COMPANY_INFO = {
  fullName: 'ÜRETİCİ TEDARİK TEKNİK PLASTİK POLİMER METAL LTD. ŞTİ.®',
  brandName: 'ÜRETİCİ TEDARİK',
  slogan: '‘SİZ İSTEYİN BİZ ÜRETELİM’',
  authorizedPerson: 'İBRAHİM ŞAHBAZ',
  phone: '0533 377 18 97',
  formattedPhone: '+90 (533) 377 18 97',
  email: 'info@ureticitedarik.com',
  website: 'www.ureticitedarik.com',
  instagram: 'ureticitedarik',
  instagramUrl: 'https://www.instagram.com/ureticitedarik',
  location: 'Çayırova / Gebze, Kocaeli',
  machinery: '3 Eksen & 5 Eksen Yüksek Teknoloji CNC İşleme, Kayar Otomat',
  defenseIndustry: 'Savunma Sanayi, Makine, Otomotiv İmalat Ortağı',
};

export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1W8yQRyYcf75ds_2Ub7NfbthmB8qpSl_3D1Xb0aTr6V3FOC_GHCq_x_1SbN_j_lC--6US4x7kyqbEbFrRqBVNLlftUc-6jDqUF_ikA2adexVx-O5B7OUHnFpwSXFwIsQxwQ1FBU912EeXf9_98ExSjZDRC0d5Bu1kK0nko89Btwd83dGsEo2EacGy3wzGjwYjAmbsSS-85G2-sA1jpLRPn06Elc2TcIrQ_OSgxS7CFuF5PIUjrPtFz00GrR';

export const CATEGORIES: MaterialCategory[] = [
  {
    id: 'muhendislik-plastikleri',
    number: '01',
    name: 'Mühendislik Plastikleri',
    description:
      'Cast Polyamid (Kestamit), POM-Delrin çubuk ve levhalar, PA6. Yüksek aşınma mukavemeti.',
    tags: ['PA6G Sarı', 'POM-C Siyah'],
    icon: 'Layers',
    colorType: 'primary',
  },
  {
    id: 'teflon-ptfe',
    number: '02',
    name: 'Teflon (PTFE) Serisi',
    description:
      'Saf PTFE levha/çubuk, Teflon cam kumaş, contalon genişletilmiş şerit bant, salmastra grupları.',
    tags: ['+260°C Isı', 'Saf A-Class'],
    icon: 'Flame',
    colorType: 'tertiary',
  },
  {
    id: 'pe1000-hdpe',
    number: '03',
    name: 'PE 1000 & HDPE',
    description:
      'Ulpolen UHMWPE konveyör kızakları, bunker kaplamaları, gıda onaylı aşınma plakaları.',
    tags: ['PE-1000 Yeşil', 'PE-500 / 300'],
    icon: 'Boxes',
    colorType: 'secondary',
  },
  {
    id: 'poliuretan-kalip',
    number: '04',
    name: 'Poliüretan & Kalıp Yayı',
    description:
      'Vulkollan PU Çubuk, Desmadur kalıp yayları ve poliüretan levhalar. 70-95 Shore A sertlik.',
    tags: ['90 Shore A', 'Desmadur'],
    icon: 'Maximize2',
    colorType: 'primary',
  },
  {
    id: 'civa-celigi',
    number: '05',
    name: 'Civa Çeliği H8 (1.2210)',
    description:
      'DIN 115CrV3 Ø2mm - Ø50mm arası hassas taşlanmış h8 toleranslı kalıp pimi, zımba ve miller.',
    tags: ['h8 Tolerans', '64 HRC'],
    icon: 'Wrench',
    colorType: 'surface-tint',
  },
  {
    id: 'vinc-denge-5th-wheel',
    number: '06',
    name: 'Vinç Denge & 5th Wheel',
    description:
      'Mobil vinç pabuç destek takozları ve çekici dorse beşinci teker kaydırıcı yağsız polimer kitleri.',
    tags: ['Kırılmaz Polimer', '50T+ Yük'],
    icon: 'ShieldAlert',
    colorType: 'tertiary',
  },
  {
    id: 'epoksi-fr4-mikanit',
    number: '07',
    name: 'Epoksi FR4 & Mikanit',
    description:
      'Yeşil epoksi cam kumaş laminat FR4 plakalar, mikanit 500°C yalıtım levhaları ve bezli fiber çubuklar.',
    tags: ['Sınıf F/H', '500°C Isı'],
    icon: 'Zap',
    colorType: 'secondary',
  },
  {
    id: 'alasimli-bakir-bronz',
    number: '08',
    name: 'Alaşımlı Bakır & Bronz',
    description:
      'CuAl10Ni5Fe4 alüminyum bronzu, fosfor bronz CuSn8, berilyum bakır yataklık burç ve miller.',
    tags: ['DIN 1714', 'Ağır Yük Burç'],
    icon: 'Cpu',
    colorType: 'primary',
  },
  {
    id: 'yanmaz-kablo',
    number: '09',
    name: 'Yanmaz Nikel Kablo',
    description:
      'Nikel kaplı silikon cam elyaf örgülü yüksek sıcaklık kabloları. 400°C sürekli ısı mukavemeti.',
    tags: ['400°C Hat', 'Silikon Elyaf'],
    icon: 'Activity',
    colorType: 'error',
  },
  {
    id: 'eva-tatami',
    number: '10',
    name: 'Eva Rulo & Tatami Mat',
    description:
      'Endüstriyel zemin koruma levhaları, spor salonu ve çocuk oyun alanı darbe emici tatami matlar.',
    tags: ['13mm / 26mm', 'Darbe Emici'],
    icon: 'Grid',
    colorType: 'tertiary',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'pe-1000-levha',
    code: 'ULP-1000-PE',
    name: 'PE 1000 (Ulpolen) UHMWPE Levha',
    subtitle: 'Konveyör kızakları, aşınma plakaları ve gıda makineleri için',
    category: 'Mühendislik Polimeri',
    categoryId: 'pe1000-hdpe',
    description:
      'Konveyör kızakları, aşınma plakaları ve gıda makineleri için sıfır sürtünmeli ultra yüksek moleküler polietilen levha.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwtAJQez9Fgv7czejC2odEhYji2s6uYcNoAEPIJRX3pILNIxGtH5GasitMqfv-ysPmphOreilm7p5VjHhgMj9-ErbdDjgQOl4h8chFdRXtL9_BPhWLiPc6gvYzKEx9dfrH93Oi-wsMjSIXGZEcwnMKb_VRCViGqK2IuYpsI14Hoz8hYuTKEJykTHLTa0v1QYdwla2dO2-VZWBzBcwXpyAm8i6fCzbPmr8p1Es3Y2dbqtc2Ppb7EsAKQw',
    badge: 'ÖZEL KESİM',
    badgeType: 'primary',
    secondaryBadge: 'Stokta Var',
    priceDisplay: 'Teklif Alınız',
    actionText: 'Teklif İste',
    density: 0.93,
    workingTemp: '-200°C ile +80°C',
    hardness: '64 Shore D',
    dinNorm: 'DIN EN ISO 1183',
    specs: [
      { label: 'Moleküler Ağırlık', value: '~4.500.000 g/mol' },
      { label: 'Sürtünme Katsayısı', value: '< 0.15 (Yağsız)' },
      { label: 'Yoğunluk', value: '0.930 g/cm³' },
      { label: 'Su Emilimi', value: '%0.01 (Hidrofobik)' },
    ],
  },
  {
    id: 'saf-teflon-levha',
    code: 'PTFE-LEV-A',
    name: 'Saf Teflon Levha (PTFE A-Class)',
    subtitle: 'Kimyasal reaktör ve yüksek gerilim izolasyonu',
    category: 'PTFE Polimer',
    categoryId: 'teflon-ptfe',
    description:
      'Kimyasal reaktör flanş contaları ve yüksek gerilim izolasyonu için tam kimyasal direnç sunan saf teflon levha.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPnIDXsp36mp7S75slCckhG7dav_QYdNEYW7kBmiYkvsRV8nYCA6J7Pk7zsJTmowpVp8vVIMlCt_81DSPKK_aTKe0y69HHsfZTcUN7t8r_WJaCIG9c4VwsiAWx6cIc8PBSzuFNvOtAg00TRN8V0XuXpi3R0mt8YRy86RD1HlI-84xph1wEmWso7dEaez48GGD6Jn9Q9Fg8y_gsVYTz8yGiFH1hUaTh91tMS06alQoJzIBcbuD2WyHJAw',
    badge: 'A-CLASS SAF PTFE',
    badgeType: 'tertiary',
    secondaryBadge: '0.5mm - 50mm',
    priceDisplay: '$65,00 – $2.000,00',
    actionText: 'Ebat Seç',
    density: 2.18,
    workingTemp: '-200°C ile +260°C',
    hardness: '55 Shore D',
    dinNorm: 'ASTM D4894',
    specs: [
      { label: 'Sürekli Çalışma Sıcaklığı', value: '+260°C' },
      { label: 'Dielektrik Dayanım', value: '50-80 kV/mm' },
      { label: 'Yoğunluk', value: '2.18 g/cm³' },
      { label: 'Sürtünme Katsayısı', value: '0.04 (Katı en düşük)' },
    ],
  },
  {
    id: 'civa-celigi-h8',
    code: 'CC-2210-H8',
    name: 'Civa Çeliği 2210 Kalite H8 Mil',
    subtitle: 'DIN 115CrV3 hassas taşlanmış kalıp pimi ve miller',
    category: 'Takım Çeliği',
    categoryId: 'civa-celigi',
    description:
      'DIN 115CrV3 kalıp pimi, zımba, rayba ve hassas mil imalatı için h8 mikron toleranslı taşlanmış çelik.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgYY3m-nKPZBno3QY34QG6nXNKMhA8vh5Y-SYDwp-VUswAHMwRjsnN1EEY50kYebOqhbqgwbmNAt3vebTiAdIxhtYKKeyVTcu7B6z8i37bdj01VznY2UXgzQAw2nSZ5hZpF4wIc0LFwDLFGyBgK9OTzoZ9Pc9SyCuRgMt7LeW599iVNiJKGFMnAEe0ZbAHnhJOpOa3PMb4hKh855lyo7YWzb_viqj1r8wrS-rQHJZ_hwP2r6uuN8L-XQ',
    badge: 'h8 TAŞLANMIŞ',
    badgeType: 'surface-tint',
    secondaryBadge: '1000 mm Boy',
    priceDisplay: '$1,60 – $155,00',
    actionText: 'Çap Seç',
    density: 7.85,
    workingTemp: 'Maks 64 HRC Sertleşme',
    hardness: '64 HRC (Sertleştirilmiş)',
    dinNorm: 'DIN 1.2210 / 115CrV3',
    specs: [
      { label: 'Çap Aralığı', value: 'Ø 2mm - Ø 50mm' },
      { label: 'Boy', value: '1000 mm ve 2000 mm' },
      { label: 'Tolerans Sınıfı', value: 'ISO h8 (+0/-0.014mm)' },
      { label: 'Yüzey Pürüzlülüğü', value: 'Ra < 0.6 µm' },
    ],
  },
  {
    id: 'contalon-ptfe-bant',
    code: 'PTFE-CNT-01',
    name: 'Contalon Genişletilmiş PTFE Bant',
    subtitle: 'Flanş ve emaye boru hatlarında mikroporoz teflon sızdırmazlık',
    category: 'Sızdırmazlık',
    categoryId: 'teflon-ptfe',
    description:
      'Büyük flanşlarda ve emaye boru hatlarında sıfır kaçak sağlayan kendinden yapışkanlı genişletilmiş mikro gözenekli teflon bant.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCGIR8PbUw6rIK7rGrVM4fsRglDQvVut4CJlWdM2YbxwxbY82NANXwNDZMnP7g0OxTJQUKZagNrmQYHp-JhG28Agn6_7-a-CW0HbYJUrac6l5vzo38sIFOvj5ghxx_OgZIJ4T5WM4V9Sam4Fe9oP_X-Kq4z12V1pptJujycJBsQlg7TlSvzk4EZAZXh0kLdjbElmh8VGsw0JDr0BsdufnqL6Xzi2pRgv4CYKsVLYRXSGiJrfczJ7f1R1A',
    badge: 'YAPIŞKANLI ŞERİT',
    badgeType: 'secondary',
    secondaryBadge: 'Flanş Contası',
    priceDisplay: '$10,00 – $82,00',
    actionText: 'Genişlik',
    density: 0.75,
    workingTemp: '-240°C ile +280°C',
    hardness: 'Yumuşak Esnek',
    dinNorm: 'FDA & DVGW Onaylı',
    specs: [
      { label: 'Basınç Dayanımı', value: 'Vakumdan 200 bar basınca' },
      { label: 'pH Aralığı', value: '0 - 14 (Tüm asit/bazlar)' },
      { label: 'Rulo Uzunluğu', value: '5m / 10m / 25m' },
      { label: 'Montaj', value: 'Arkası 3M Yapışkanlı' },
    ],
  },
  {
    id: 'besinci-teker-kaydirici',
    code: '5TH-WHEEL-KIT',
    name: 'Beşinci Teker Kaydırıcı Parça',
    subtitle: 'Çekici dorse tablasında gres kullanımını sonlandıran plaka',
    category: 'Ağır Sanayi Donanım',
    categoryId: 'vinc-denge-5th-wheel',
    description:
      'Çekici dorse tablasında gres kullanımını sonlandıran, yakıt tasarrufu ve temiz bağlantı sağlayan aşınma plakası takımı.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfJzrsAR4WmAThaU1f5RKFCF_5cij368wr2Jw97BCL5vLUA22avuMO5eKwzz3tI-uSu6VMlvz-EsmBfpd9XT896ygLG6jqqTPPWEecFMlFjb-9pYiiAcYxhvKB89qLsNt78rDNdqnayXS2mkohMWH9D2DdRsFTmCbfdPEEq30Ll4Fqo_K2s5DJsAvGi6LE3ptqXPJQDoOOIbkERYpeQzbT50afjBKVM_AqyHZ231R8WJW0IiY0p-itqg',
    badge: 'AĞIR VASITA',
    badgeType: 'tertiary',
    secondaryBadge: 'Gressiz',
    priceDisplay: 'Teklif Alınız',
    actionText: 'Detay',
    density: 0.96,
    workingTemp: '-40°C ile +90°C',
    hardness: 'Kırılmaz Katı Polimer',
    specs: [
      { label: 'Uyumlu Markalar', value: 'Jost, SAF, Georg Fischer' },
      { label: 'Tasarruf', value: 'Gres ve bakım masrafı sıfır' },
      { label: 'Ömür', value: '500.000+ km aşınmasız sürüş' },
      { label: 'Paket İçeriği', value: 'Montaj halkaları & cıvata kiti' },
    ],
  },
  {
    id: 'yanmaz-nikel-kablo',
    code: 'KBL-400-NIK',
    name: 'Yanmaz Nikel Kaplı Bakır Kablo',
    subtitle: '400°C sürekli ısı mukavemetli silikon elyaf örgülü hat',
    category: 'Elektro-Mekanik',
    categoryId: 'yanmaz-kablo',
    description:
      'Endüstriyel rezistans hatları, fırınlar ve ağır metalurji tesisleri için cam elyaf silikon örgülü nikel kaplı bakır kablo.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSl11ENRIx1UHkUOe37ke5u7VbCekdq964dChN9iRCtJGDoy2tOrADjmzb5GQqPeYJuY1b8CVH57z8gpEs9t4PPF8Kgfbl4BZC5ttfzOxmF50g9_frqdYyxhRpuKFijWawpGZvfyJD5kB-YdBNnPPieNLjjMlJRNSlXTNY3X626y1ffoXTWNKOHL3xK6Q6-qVkM7ELPT4f-EYsadyftSUKzj2pRNm6MNcjE37_N8SC-9TA_DbU9gnAkg',
    badge: '400°C ISI',
    badgeType: 'error',
    secondaryBadge: 'Silikon Örgü',
    priceDisplay: 'Teklif İsteyiniz',
    actionText: 'Kesit',
    density: 8.9,
    workingTemp: '-60°C ile +400°C (Kısa süreli 500°C)',
    specs: [
      { label: 'İletken', value: 'Nikel Kaplı Saf Elektrolitik Bakır' },
      { label: 'İzolasyon', value: 'Silikon emdirilmiş Cam Elyaf' },
      { label: 'Kesitler', value: '0.75 mm² - 50 mm²' },
      { label: 'Gerilim', value: '300 / 500 V' },
    ],
  },
  {
    id: 'epoksi-fr4-levha',
    code: 'FR4-EPOXY-GR',
    name: 'Epoksi FR4 Yeşil Levha & Çubuk',
    subtitle: 'Cam kumaş takviyeli epoksi reçine, yüksek mekanik ve ark direnci',
    category: 'Yalıtım Grubu',
    categoryId: 'epoksi-fr4-mikanit',
    description:
      'Cam elyaf kumaş takviyeli epoksi reçine laminat. Trafo, pano baraları ve yüksek frekanslı elektrik yalıtımı için üstün mukavemet.',
    imageUrl: '', // Rendered with custom high-tech gradient & memory icon as in original design
    badge: 'DİELEKTRİK SINIF F',
    badgeType: 'secondary',
    secondaryBadge: '0.5mm - 60mm',
    priceDisplay: 'Teklif Alınız',
    actionText: 'Teklif İste',
    density: 1.85,
    workingTemp: '-40°C ile +140°C (Sınıf F)',
    hardness: '90 Rockwell M',
    dinNorm: 'NEMA FR-4 / IEC 60893',
    specs: [
      { label: 'Dielektrik Dayanım', value: '> 14 kV/mm' },
      { label: 'Eğilme Mukavemeti', value: '> 350 MPa' },
      { label: 'Alev İlerletmezlik', value: 'UL94 V-0 Onaylı' },
      { label: 'Ebatlar', value: '1020x1220 mm / 1020x2040 mm' },
    ],
  },
  {
    id: 'poliuretan-pu-desmadur',
    code: 'PU-90-DES',
    name: 'Poliüretan PU Çubuk & Desmadur',
    subtitle: 'Kalıp yayları, sıyırıcı bıçaklar ve elastomer burçlar',
    category: 'Darbe Sönümleme',
    categoryId: 'poliuretan-kalip',
    description:
      'Kalıp yayları, sıyırıcı bıçaklar ve yüksek dinamik darbeye maruz kalan parçalar için 90 Shore A döküm elastomer poliüretan.',
    imageUrl: '', // Rendered with custom elastomer icon & amber gradient as in original design
    badge: '90 SHORE A',
    badgeType: 'primary',
    secondaryBadge: 'Döküm Elastomer',
    priceDisplay: 'Teklif Alınız',
    actionText: 'Ölçü Seç',
    density: 1.25,
    workingTemp: '-30°C ile +90°C',
    hardness: '70 - 95 Shore A',
    dinNorm: 'DIN 53505',
    specs: [
      { label: 'Yırtılma Direnci', value: '55 N/mm' },
      { label: 'Kopma Uzaması', value: '%450' },
      { label: 'Aşınma Kaybı', value: '< 35 mm³' },
      { label: 'Çap / Boy', value: 'Ø 15mm - Ø 250mm / 500mm boy' },
    ],
  },
];

// Helper to calculate theoretical weight in KG:
export function calculateWeight(
  density: number,
  shape: 'plate' | 'rod',
  widthOrDia: number, // mm
  length: number, // mm
  thickness: number = 0, // mm (only for plate)
): number {
  if (shape === 'rod') {
    // Cylinder volume = pi * r^2 * length (mm3)
    const radius = widthOrDia / 2;
    const volumeMm3 = Math.PI * Math.pow(radius, 2) * length;
    const volumeCm3 = volumeMm3 / 1000;
    return Number(((volumeCm3 * density) / 1000).toFixed(3));
  } else {
    // Plate volume = width * length * thickness (mm3)
    const volumeMm3 = widthOrDia * length * (thickness || 1);
    const volumeCm3 = volumeMm3 / 1000;
    return Number(((volumeCm3 * density) / 1000).toFixed(3));
  }
}

// Approximate price estimation multiplier per kg
export const MATERIAL_BASE_RATES: Record<string, number> = {
  'pe-1000-levha': 9.5, // $ / kg
  'saf-teflon-levha': 42.0, // $ / kg
  'civa-celigi-h8': 8.2, // $ / kg
  'contalon-ptfe-bant': 65.0, // $ / kg
  'besinci-teker-kaydirici': 14.0, // $ / kg
  'yanmaz-nikel-kablo': 28.0, // $ / kg
  'epoksi-fr4-levha': 16.5, // $ / kg
  'poliuretan-pu-desmadur': 18.0, // $ / kg
  default: 12.0,
};
