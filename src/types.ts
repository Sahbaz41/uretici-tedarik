export type CurrencyCode = 'USD' | 'TRY' | 'EUR';

export interface MaterialCategory {
  id: string;
  number: string;
  name: string;
  description: string;
  tags: string[];
  icon: string;
  colorType: 'primary' | 'tertiary' | 'secondary' | 'surface-tint' | 'error';
}

export interface ProductItem {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  category: string;
  categoryId: string;
  description: string;
  imageUrl: string;
  badge: string;
  badgeType: 'primary' | 'tertiary' | 'secondary' | 'surface-tint' | 'error';
  secondaryBadge: string;
  priceDisplay: string;
  actionText: string;
  density: number; // g/cm³
  workingTemp: string;
  hardness?: string;
  dinNorm?: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface RfqCartItem {
  id: string;
  productId: string;
  productName: string;
  shape: 'plate' | 'rod' | 'profile';
  width: number; // mm (or diameter for rod)
  length: number; // mm
  thickness: number; // mm
  quantity: number;
  processing: string;
  calculatedWeightKg: number;
  estimatedCost: number;
  notes?: string;
}

export interface RfqFormSubmission {
  materialId: string;
  shape: 'plate' | 'rod';
  width: number;
  length: number;
  thickness: number;
  quantity: number;
  processing: string;
  companyName: string;
  phone: string;
  notes: string;
  attachedFile?: string;
}

export interface TechnicalFaqItem {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  category: string;
  recommendedMaterialId?: string;
  tags: string[];
}

