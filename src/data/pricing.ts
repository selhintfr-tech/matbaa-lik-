// Centralized Pricing System for MATBAA LIK
// Reads verified Moroccan reference pricing (24hprint.ma benchmarks) from pricing.json
import pricingData from './pricing.json';

export interface PriceTier {
  format: string;
  paper: string;
  finish: string;
  quantity: string;
  priceHT: number;
}

export interface ProductPricing {
  slug: string;
  title: string;
  categoryId: string;
  categoryName: string;
  hasVerifiedPrices: boolean;
  sourceUrl: string;
  verificationDate: string;
  currency: string;
  taxBasis: string;
  isProvisional: boolean;
  notes: string;
  pricingDisclaimer: string;
  tiers: PriceTier[];
}

export const PRICING_DATABASE: Record<string, ProductPricing> = pricingData as Record<string, ProductPricing>;

/**
 * Retrieve the pricing configuration for a given product slug
 */
export function getPricingBySlug(slug: string): ProductPricing | null {
  return PRICING_DATABASE[slug] || null;
}

/**
 * Format a number as a Moroccan Dirham price string (e.g. "399,00 DH HT")
 */
export function formatPriceMAD(amountHT: number | null | undefined): {
  ht: string;
  ttc: string;
  rawHT: number | null;
  rawTTC: number | null;
} {
  if (amountHT === null || amountHT === undefined || isNaN(amountHT) || amountHT <= 0) {
    return {
      ht: "Prix sur devis",
      ttc: "Sur devis",
      rawHT: null,
      rawTTC: null,
    };
  }

  const htFormatted = amountHT.toLocaleString('fr-MA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " DH HT";

  const amountTTC = amountHT * 1.20; // 20% standard Moroccan TVA
  const ttcFormatted = amountTTC.toLocaleString('fr-MA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " DH TTC";

  return {
    ht: htFormatted,
    ttc: ttcFormatted,
    rawHT: amountHT,
    rawTTC: amountTTC,
  };
}

/**
 * Find exact matched price or closest verified tier
 */
export function findMatchingTier(
  pricing: ProductPricing | null,
  options: {
    format?: string;
    paper?: string;
    finish?: string;
    quantity?: string;
  }
): PriceTier | null {
  if (!pricing || !pricing.hasVerifiedPrices || !pricing.tiers || pricing.tiers.length === 0) {
    return null;
  }

  // 1. Exact match on format, quantity, paper, finish
  const exact = pricing.tiers.find(
    (t) =>
      (!options.quantity || t.quantity === options.quantity) &&
      (!options.format || t.format === options.format) &&
      (!options.paper || t.paper === options.paper) &&
      (!options.finish || t.finish === options.finish)
  );
  if (exact) return exact;

  // 2. Match on quantity and format
  const matchQtyFmt = pricing.tiers.find(
    (t) =>
      (!options.quantity || t.quantity === options.quantity) &&
      (!options.format || t.format === options.format)
  );
  if (matchQtyFmt) return matchQtyFmt;

  // 3. Match on quantity only
  const matchQty = pricing.tiers.find(
    (t) => (!options.quantity || t.quantity === options.quantity)
  );
  if (matchQty) return matchQty;

  // 4. Default to first tier if none matches exactly
  return pricing.tiers[0] || null;
}
