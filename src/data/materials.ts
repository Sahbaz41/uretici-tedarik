import { MaterialCategory, ProductItem, TechnicalFaqItem } from '../types';

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
  {
    id: 'cast-polyamid-kestamit',
    code: 'PA6G-KEST-01',
    name: 'Cast Polyamid (Kestamit PA6G) Levha & Takoz',
    subtitle: 'Ağır yük dişlileri, makaralar, kızaklar ve aşınma plakaları',
    category: 'Mühendislik Plastiği',
    categoryId: 'muhendislik-plastikleri',
    description:
      'Sarı ve natürel döküm polyamid. Yüksek mekanik dayanım, darbe sönümleme ve bronz/çelik yerine mükemmel aşınma performansı sunan temel imalat polimeri.',
    imageUrl: '/images/kestamit-pa6g.jpg',
    badge: 'DÖKÜM PA6G',
    badgeType: 'primary',
    secondaryBadge: 'Sarı / Natürel',
    priceDisplay: '$8,50 – $320,00',
    actionText: 'Ölçü Seç',
    density: 1.15,
    workingTemp: '-40°C ile +105°C',
    hardness: '82 Shore D',
    dinNorm: 'DIN 7728 / ISO 1874',
    specs: [
      { label: 'Çekme Dayanımı', value: '80 - 85 MPa' },
      { label: 'Elastisite Modülü', value: '3400 MPa' },
      { label: 'Basınç Dayanımı', value: '110 MPa (%2 deformasyon)' },
      { label: 'Kullanım Alanı', value: 'Vinç makaraları, dişli, aşınma plakası' },
    ],
  },
  {
    id: 'pom-c-delrin',
    code: 'POMC-DEL-02',
    name: 'POM-C Delrin (Polioksimetilen) Çubuk & Levha',
    subtitle: 'Sıfır nem emilimi, hassas CNC işleme ve boyutsal kararlılık',
    category: 'Hassas Polimer',
    categoryId: 'muhendislik-plastikleri',
    description:
      'Beyaz ve siyah teknik asetal polimer. Suda ve nemli ortamlarda genleşmez; hassas CNC torna ve freze işleme toleranslarında sektör lideri.',
    imageUrl: '/images/pom-c-delrin.jpg',
    badge: 'HASSAS TOLERANS',
    badgeType: 'tertiary',
    secondaryBadge: 'Beyaz & Siyah',
    priceDisplay: '$9,20 – $240,00',
    actionText: 'Ebat Seç',
    density: 1.41,
    workingTemp: '-50°C ile +100°C',
    hardness: '85 Shore D',
    dinNorm: 'DIN ISO 9988',
    specs: [
      { label: 'Su Emilimi', value: '%0.2 (Çok düşük)' },
      { label: 'Boyutsal Kararlılık', value: 'Mikron Düzeyinde Sabit' },
      { label: 'Gıda Uyumu', value: 'FDA Onaylı (Beyaz Seri)' },
      { label: 'Kullanım', value: 'Hassas dişliler, burçlar, gıda ekipmanı' },
    ],
  },
  {
    id: 'alasimli-aluminyum-bronz',
    code: 'BRZ-ALU-105',
    name: 'CuAl10Ni5Fe4 Alüminyum Bronzu Burç & Mil',
    subtitle: 'Ağır yük, deniz suyu ve ekstrem sürtünme yatakları',
    category: 'Ağır Sanayi Alaşımı',
    categoryId: 'alasimli-bakir-bronz',
    description:
      'DIN 1714 standardında alüminyum ve nikel katkılı süper alaşım bronz. Korozyona, kavitasyona ve 800+ MPa çekme gerilimine dayanıklı.',
    imageUrl:
      'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    badge: 'DIN 1714 ALAŞIM',
    badgeType: 'secondary',
    secondaryBadge: 'Ø 20 - 300 mm',
    priceDisplay: 'Teklif Alınız',
    actionText: 'Çap Seç',
    density: 7.6,
    workingTemp: 'Maks +350°C',
    hardness: '180 - 220 HB (Brinell)',
    dinNorm: 'DIN EN 1982 / CuAl10Ni5Fe4',
    specs: [
      { label: 'Çekme Mukavemeti', value: '680 - 820 N/mm²' },
      { label: 'Akma Sınırı', value: '> 300 N/mm²' },
      { label: 'Korozyon Direnci', value: 'Deniz Suyu & Kimyasal Tam Direnç' },
      { label: 'Kullanım', value: 'Gemi şaft yatakları, hidrolik burçlar' },
    ],
  },
  {
    id: 'eva-tatami-zemin',
    code: 'EVA-TAT-26',
    name: 'Eva Rulo & 26mm Darbe Emici Tatami Zemin Matı',
    subtitle: 'Endüstriyel zemin koruma, spor ve makine titreşim sönümleme',
    category: 'Darbe İzolasyonu',
    categoryId: 'eva-tatami',
    description:
      'Çift taraflı kilitli tatami eva matlar ve sanayi rulo levhaları. Yüksek esneklik, kaymaz doku ve bakteri barındırmayan kapalı hücre yapısı.',
    imageUrl:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    badge: '26 MM KİLİTLİ',
    badgeType: 'tertiary',
    secondaryBadge: '100x100 cm',
    priceDisplay: '$14,00 – $48,00',
    actionText: 'Kalınlık',
    density: 0.12,
    workingTemp: '-20°C ile +70°C',
    hardness: '35 - 40 Shore C',
    dinNorm: 'EN 71-3 Güvenlik Onaylı',
    specs: [
      { label: 'Kalınlık Seçenekleri', value: '13 mm / 26 mm' },
      { label: 'Darbe Sönümleme', value: 'Yüksek Enerji Emilimi' },
      { label: 'Antibakteriyel', value: 'Koku Yapmaz, Yıkanabilir' },
      { label: 'Kullanım', value: 'Zemin koruma, spor salonu, çocuk oyun alanı' },
    ],
  },
  {
    id: 'peek-termoplastik',
    code: 'PEEK-450G',
    name: 'PEEK (Polietereterketon) Levha & Çubuk',
    subtitle: '+260°C sürekli çalışma, havacılık ve medikal uyumlu ekstrem polimer',
    category: 'Ekstrem Termoplastik',
    categoryId: 'muhendislik-plastikleri',
    description:
      'Havacılık, savunma sanayi ve yarı iletken sektörlerinde metal yerine kullanılan en yüksek mekanik ve termal performanslı mühendislik plastiği.',
    imageUrl: '',
    badge: '+260°C EKSTREM',
    badgeType: 'error',
    secondaryBadge: 'Sınıf V-0',
    priceDisplay: 'Teklif Alınız',
    actionText: 'Teklif İste',
    density: 1.32,
    workingTemp: '-60°C ile +260°C (Kısa +310°C)',
    hardness: '88 Shore D',
    dinNorm: 'ISO 1043 / UL94 V-0',
    specs: [
      { label: 'Sürekli Çalışma Sıcaklığı', value: '+260°C' },
      { label: 'Alev İlerletmezlik', value: 'UL94 V-0 Kendi Söndüren' },
      { label: 'Radyasyon Direnci', value: 'Gama Işınlarına Dayanıklı' },
      { label: 'Kullanım', value: 'Savunma, havacılık ve kimya reaktörleri' },
    ],
  },
  {
    id: 'mikanit-levha-500c',
    code: 'MIK-500-HT',
    name: 'Mikanit Yüksek Isı Yalıtım Levhası (500°C - 700°C)',
    subtitle: 'Fırın rezistansları, sıcak presler ve dökümhane termal izolasyonu',
    category: 'Termal & Elektrik Yalıtım',
    categoryId: 'epoksi-fr4-mikanit',
    description:
      'Muskovit ve flogopit mika pullarının yüksek ısıya dayanıklı silikon reçine ile preslenmesiyle üretilen, 500°C - 700°C sıcaklığa ve yüksek voltaj arkına dayanıklı katı levha.',
    imageUrl: '',
    badge: '500°C - 700°C ISI',
    badgeType: 'error',
    secondaryBadge: 'Muskovit / Flogopit',
    priceDisplay: 'Teklif Alınız',
    actionText: 'Teklif İste',
    density: 2.25,
    workingTemp: '500°C sürekli (Kısa süreli 700°C)',
    hardness: 'Sert Pres Plaka',
    dinNorm: 'IEC 60371-3 / DIN 40685',
    specs: [
      { label: 'Sürekli Isı Dayanımı', value: '500°C (Muskovit) / 700°C (Flogopit)' },
      { label: 'Dielektrik Dayanım', value: '> 25 kV/mm' },
      { label: 'Basınç Dayanımı', value: '> 230 MPa (200°C altında)' },
      { label: 'Isıl İletkenlik', value: '0.25 W/m.K (Mükemmel İzolasyon)' },
    ],
  },
  {
    id: 'silikon-levha-contalar',
    code: 'SIL-HT-RED',
    name: 'Yüksek Sıcaklık Silikon Levha & Contalar',
    subtitle: '+250°C fırın kapak contaları, gıda ve ilaç sanayi sızdırmazlık',
    category: 'Elastomer Sızdırmazlık',
    categoryId: 'teflon-ptfe',
    description:
      'Yüksek sıcaklık fırın kapakları, otoklavlar ve gıda makineleri için -60°C ile +250°C arasında elastikiyetini kaybetmeyen, FDA onaylı şeffaf ve kırmızı silikon levha.',
    imageUrl: '',
    badge: '+250°C ESNEK',
    badgeType: 'tertiary',
    secondaryBadge: 'FDA Uyumlu',
    priceDisplay: 'Teklif Alınız',
    actionText: 'Kalınlık Seç',
    density: 1.25,
    workingTemp: '-60°C ile +250°C',
    hardness: '60 Shore A',
    dinNorm: 'FDA 21 CFR 177.2600',
    specs: [
      { label: 'Çalışma Sıcaklığı', value: '-60°C ile +250°C' },
      { label: 'Sertlik', value: '60 ±5 Shore A' },
      { label: 'Kopma Uzaması', value: '%350' },
      { label: 'Gıda Uygunluğu', value: 'FDA & BFR Sertifikalı' },
    ],
  },
  {
    id: 'fenolik-pamuklu-bezli-fiber',
    code: 'FBR-PAM-HGW',
    name: 'Fenolik Pamuklu Bezli Fiber Levha & Çubuk (HGW 2082)',
    subtitle: 'Sessiz dişliler, yatak burçları ve darbe dayanımlı mekanik parçalar',
    category: 'Mekanik Laminat',
    categoryId: 'epoksi-fr4-mikanit',
    description:
      'İnce pamuklu bez katmanlarının termoset fenolik reçine ile yüksek basınç ve sıcaklık altında laminasyonu ile üretilen, darbe emici, sessiz çalışan ve aşınmaya dayanıklı fiber malzeme.',
    imageUrl: '',
    badge: 'HGW 2082',
    badgeType: 'primary',
    secondaryBadge: 'Sessiz Dişli',
    priceDisplay: 'Teklif Alınız',
    actionText: 'Ebat Seç',
    density: 1.38,
    workingTemp: '-40°C ile +120°C',
    hardness: '85 Rockwell M',
    dinNorm: 'DIN 7735 / IEC 60893 PF CC 201',
    specs: [
      { label: 'Eğilme Mukavemeti', value: '> 100 MPa' },
      { label: 'Basınç Dayanımı', value: '> 250 MPa' },
      { label: 'Darbe Dayanımı', value: '> 30 kJ/m²' },
      { label: 'Kullanım Alanı', value: 'Sessiz dişli, ağır yük yatağı, kıvılcımsız çekiç' },
    ],
  },
  {
    id: 'vinc-ayak-denge-takozu',
    code: 'VNC-PAB-75T',
    name: 'Mobil Vinç Ayak Denge Destek Takozu (75 Ton)',
    subtitle: 'Kırılmaz yüksek yoğunluklu polimer, zemin emniyet ve pabuç altlığı',
    category: 'Ağır Sanayi Donanım',
    categoryId: 'vinc-denge-5th-wheel',
    description:
      'Mobil vinçler, itfaiye merdivenleri, sepetli platformlar ve beton pompaları için tek pabuçta 75 tona kadar taşıma kapasiteli, kırılmaz ve çürümez polimer denge destek tablası.',
    imageUrl: '',
    badge: '75 TON YÜK',
    badgeType: 'tertiary',
    secondaryBadge: 'Kırılmaz Polimer',
    priceDisplay: 'Teklif Alınız',
    actionText: 'Ölçü Seç',
    density: 0.96,
    workingTemp: '-50°C ile +85°C',
    hardness: '68 Shore D (Kırılmaz)',
    dinNorm: 'ISO EN 10204 / CE Endüstriyel Emniyet',
    specs: [
      { label: 'Maksimum Taşıma Kapasitesi', value: '75 Ton / Pabuç Başı' },
      { label: 'Malzeme Cinsi', value: 'Özel Ekstrüzyon Yüksek Moleküler Polimer' },
      { label: 'Su & Yağ Emilimi', value: '%0.00 (Çürümez, paslanmaz, çatlamaz)' },
      { label: 'Ekipman Donanımı', value: 'Gömme Taşıma Kulpu & Kaymaz Yüzey Kanalları' },
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

// Approximate price estimation multiplier per kg ($ / kg)
export const MATERIAL_BASE_RATES: Record<string, number> = {
  'cast-polyamid-kestamit': 8.8,
  'pom-c-delrin': 9.5,
  'pe-1000-levha': 9.5,
  'saf-teflon-levha': 42.0,
  'civa-celigi-h8': 8.2,
  'contalon-ptfe-bant': 65.0,
  'besinci-teker-kaydirici': 14.0,
  'yanmaz-nikel-kablo': 28.0,
  'epoksi-fr4-levha': 16.5,
  'poliuretan-pu-desmadur': 18.0,
  'alasimli-aluminyum-bronz': 19.5,
  'eva-tatami-zemin': 7.5,
  'peek-termoplastik': 145.0,
  default: 12.0,
};

// Technical Q&A Data for AEO (Answer Engine Optimization) and User Knowledge Base
export const TECHNICAL_FAQS: TechnicalFaqItem[] = [
  {
    id: 'faq-kestamit-delrin-fark',
    question: 'Kestamit (Cast Polyamid) ile Delrin (POM-C) arasındaki temel fark nedir?',
    shortAnswer:
      'Kestamit yüksek darbe dayanımı ve ağır yük aşınma direnci için üretilirken; Delrin sıfır nem emilimi, yüksek boyutsal kararlılık ve hassas CNC toleransları için tercih edilir.',
    detailedAnswer:
      'Cast Polyamid (PA6G Kestamit), döküm yoluyla üretilir ve yüksek mekanik gerilim, vinç makaraları ve büyük dişlilerde üstün yük taşıma kabiliyetine sahiptir. Delrin (POM-C) ise ekstrüzyon poliasetal olup higroskopik değildir (su emmez). Sulu veya buharlı ortamlarda şişme yapmaz; bu sebeple mikron toleranslı hassas dişliler, gıda ekipmanları ve otomotiv parçalarında Delrin kullanılır.',
    category: 'Mühendislik Plastikleri',
    recommendedMaterialId: 'cast-polyamid-kestamit',
    tags: ['Kestamit', 'Delrin', 'POM-C', 'PA6G', 'CNC İşleme'],
  },
  {
    id: 'faq-pe1000-kullanim-alani',
    question: 'PE 1000 (Ulpolen UHMWPE) hangi çalışma koşullarında tercih edilmelidir?',
    shortAnswer:
      'PE 1000, sürtünme katsayısının minimum olması gereken konveyör hatlarında, aşınma bantlarında, bunker kaplamalarında ve kimyasal temas gerektiren gıda makinelerinde kullanılır.',
    detailedAnswer:
      'Yaklaşık 4.500.000 g/mol ultra yüksek moleküler ağırlığa sahip PE 1000, yapışmazlık özelliğiyle bilinir. Katı maddelerin bunkerlere yapışmasını engeller, konveyör kızaklarında zincir aşınmasını sıfıra indirir. -200°C ile +80°C arasında esnekliğini korur, çatlama yapmaz ve FDA gıda onayına sahiptir.',
    category: 'Aşınma & Konveyör',
    recommendedMaterialId: 'pe-1000-levha',
    tags: ['UHMWPE', 'PE 1000', 'Ulpolen', 'Sürtünme', 'Gıda Onayı'],
  },
  {
    id: 'faq-teflon-ptfe-sicaklik',
    question: 'Saf Teflon (PTFE) levha ve contaların sıcaklık ve kimyasal dayanımı nedir?',
    shortAnswer:
      'PTFE Teflon, -200°C ile +260°C arasında sürekli çalışabilir ve neredeyse bilinen tüm asit, baz ve solventlere karşı tam kimyasal atalet gösterir.',
    detailedAnswer:
      'PTFE (Politetrafloroetilen), 0.04 sürtünme katsayısı ile bilinen en kaygan katı malzemedir. Kimyasal reaktörler, asit flanşları, yüksek gerilim izolasyon baraları ve gıda fırınlarında kullanılır. Genişletilmiş yapıda üretilen Contalon şerit bantlar ise düzensiz flanş yüzeylerinde mikroporoz yapısıyla sıfır kaçak sağlar.',
    category: 'Yüksek Sıcaklık & Kimya',
    recommendedMaterialId: 'saf-teflon-levha',
    tags: ['PTFE', 'Teflon', '+260°C', 'Kimyasal Direnç', 'Flanş Contası'],
  },
  {
    id: 'faq-vinc-ayak-denge-guvenlik',
    question: 'Vinç ayak denge takozları kaç ton yüke dayanıklıdır ve neden ahşap yerine polimer kullanılmalıdır?',
    shortAnswer:
      'Özel imalat yüksek yoğunluklu polimer denge takozlarımız tek pabuçta 75 tona kadar basma yüküne dayanıklıdır; ahşap gibi çürümez, kırılmaz ve çatlamaz.',
    detailedAnswer:
      'Mobil vinçler, itfaiye merdivenleri ve beton pompaları ayak pabuçlarının zemine uyguladığı tonlarca basma kuvveti vardır. Ahşap takozlar zamanla nemden çürür, liflerinden ayrılarak kırılma riski taşır. Polimer vinç takozlarımız esnek yapısıyla zemin şokunu emer, kırılmaz, yağ ve petrolden etkilenmez ve taşıma kulpuyla ergonomik güvenlik sağlar.',
    category: 'Ağır Sanayi & Güvenlik',
    recommendedMaterialId: 'besinci-teker-kaydirici',
    tags: ['Vinç Takozu', '75 Ton Dayanım', 'İş Güvenliği', 'Çekici Dorse'],
  },
  {
    id: 'faq-cnc-plastik-tolerans',
    question: '3 ve 5 eksen CNC tezgahlarda plastik işlerken hangi toleranslara ulaşılabilir?',
    shortAnswer:
      'Doğru takım ucu, soğutma ve gerilim alma ısıl işlemiyle mühendislik plastiklerinde ±0.02 mm (ISO h7) hassasiyetinde CNC işleme yapılabilmektedir.',
    detailedAnswer:
      'Plastiklerin ısıl genleşme katsayısı metallerden yüksektir. Çayırova tesisimizdeki 3 ve 5 eksen CNC freze ve kayar otomat parkurumuzda; Kestamit, POM-C Delrin, PEEK ve Alüminyum Bronz parçalar CAD/STEP modellerine göre mikron düzeyinde hassas toleranslarla işlenir. Çapak alma ve koordinat ölçüm (CMM) kontrolleri ile savunma sanayi standartlarında teslimat yapılır.',
    category: 'CNC İmalat & Hassasiyet',
    recommendedMaterialId: 'pom-c-delrin',
    tags: ['3 Eksen CNC', '5 Eksen CNC', 'Kayar Otomat', 'Hassas Tolerans'],
  },
  {
    id: 'faq-civa-celigi-h8-ozellik',
    question: 'Civa çeliği 1.2210 (115CrV3) h8 mil özellikleri ve ısıl işlem sertliği nedir?',
    shortAnswer:
      'DIN 1.2210 krom-vanadyum alaşımlı takım çeliğidir; h8 toleransında hassas taşlanmıştır ve su/yağ verme ısıl işlemi sonrası 64 HRC sertliğe ulaşır.',
    detailedAnswer:
      'Çapları Ø 2mm ile Ø 50mm arasında değişen 1000 mm ve 2000 mm boylarındaki civa çeliği miller; kalıp pimi, zımba, rayba, matkap ucu ve hassas mil yapımında kullanılır. Taşlanmış pürüzsüz yüzeyi (Ra < 0.6 µm) sayesinde ekstra talaşlı işlem gerektirmeden montaja hazırdır.',
    category: 'Takım Çeliği & Miller',
    recommendedMaterialId: 'civa-celigi-h8',
    tags: ['Civa Çeliği', '1.2210', '115CrV3', '64 HRC', 'h8 Tolerans'],
  },
];

