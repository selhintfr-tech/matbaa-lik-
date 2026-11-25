// Centralized editable selection of featured products for "OFFRES DU MOMENT"
// Modify this list anytime to adjust the 8 homepage offers without editing component templates.

export interface FeaturedProductConfig {
  slug: string;
  badge?: string; // Optional verified promotional badge
}

export const FEATURED_OFFERS: FeaturedProductConfig[] = [
  { slug: "carte-de-visite-standard" },
  { slug: "flyer-standard" },
  { slug: "carnet-autocopiant-ncr" },
  { slug: "roll-up-standard" },
  { slug: "depliant-2-volets" },
  { slug: "etiquette-rouleau-bobine" },
  { slug: "carte-de-visite-luxe" },
  { slug: "affiche-publicitaire" },
];
