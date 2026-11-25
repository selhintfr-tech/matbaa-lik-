// Centralized Promotional Banners Configuration for Mega Menus
// Map category IDs to 1 or 2 promotional banners with destination links

export interface PromoBanner {
  image: string;
  link: string;
  title?: string;
  badge?: string;
  alt: string;
  aspectRatio?: string;
  frameless?: boolean;
}

export const MEGA_MENU_PROMOS: Record<string, PromoBanner[]> = {
  'supers-promos': [
    {
      image: '/assets/mega-menu/supers-promos-promo.webp',
      link: '/categories/supers-promos/',
      alt: 'Offres spéciales et supers promos impression MATBAA LIK'
    }
  ],
  'cartes-de-visite': [
    {
      image: '/assets/mega-menu/cartes-de-visite-promo.jpg',
      link: '/categories/cartes-de-visite/',
      alt: 'Cartes de visite professionnelles MATBAA LIK'
    }
  ],
  'flyers-depliants': [
    {
      image: '/assets/mega-menu/flyers-depliants-promo.jpg',
      link: '/categories/flyers-depliants/',
      alt: 'Flyers et dépliants publicitaires MATBAA LIK',
      aspectRatio: '763 / 1024',
      frameless: true
    }
  ],
  'catalogues-brochures': [
    {
      image: '/assets/mega-menu/catalogues-brochures-promo.webp',
      link: '/categories/catalogues-brochures/',
      alt: 'Catalogues et brochures personnalisées MATBAA LIK',
      aspectRatio: '771 / 1024'
    }
  ],
  'papeterie-bureautique': [
    {
      image: '/assets/mega-menu/papeterie-bureautique-promo.webp',
      link: '/categories/papeterie-bureautique/',
      alt: 'Papeterie et bureautique personnalisée MATBAA LIK'
    }
  ],
  'etiquettes-adhesifs': [
    {
      image: '/assets/mega-menu/etiquettes-adhesifs-promo.webp',
      link: '/categories/etiquettes-adhesifs/',
      alt: 'Étiquettes et adhésifs personnalisés MATBAA LIK'
    }
  ],
  'affiches-posters': [
    {
      image: '/assets/mega-menu/affiches-posters-promo.webp',
      link: '/categories/affiches-posters/',
      alt: 'Affiches et posters publicitaires suspendus MATBAA LIK',
      aspectRatio: '1024 / 682'
    }
  ],
  'roll-ups-plv': [
    {
      image: '/assets/mega-menu/roll-ups-plv-promo.webp',
      link: '/categories/roll-ups-plv/',
      alt: 'Roll-ups, PLV et supports publicitaires grand format MATBAA LIK',
      aspectRatio: '1024 / 705'
    }
  ],
  'supports-rigides': [
    {
      image: '/assets/mega-menu/supports-rigides-promo.webp',
      link: '/categories/supports-rigides/',
      alt: 'Panneaux rigides : Forex, Nid d\'abeille, Dibond et Plexiglas MATBAA LIK',
      aspectRatio: '1024 / 888'
    }
  ],
  'supports-souples': [
    {
      image: '/assets/mega-menu/supports-souples-promo.webp',
      link: '/categories/supports-souples/',
      alt: 'Supports souples : Bâches PVC, toiles tendues, vinyles et DTF MATBAA LIK'
    }
  ],
  'souvenirs-photos': [
    {
      image: '/assets/mega-menu/souvenirs-photos-promo.webp',
      link: '/categories/souvenirs-photos/',
      alt: 'Mugs personnalisés et souvenirs photos MATBAA LIK'
    }
  ],
  'goodies-gadgets': [
    {
      image: '/assets/mega-menu/goodies-gadgets-promo.webp',
      link: '/categories/goodies-gadgets/',
      alt: 'Goodies et gadgets publicitaires personnalisés MATBAA LIK'
    }
  ],
  'boites-packaging': [
    {
      image: '/assets/mega-menu/boites-packaging-promo.webp',
      link: '/categories/boites-packaging/',
      alt: 'Boîtes et packaging personnalisés sur mesure MATBAA LIK',
      aspectRatio: '819 / 1024'
    }
  ],
  'menus-restaurant': [
    {
      image: '/assets/mega-menu/menus-restaurant-promo.webp',
      link: '/categories/menus-restaurant/',
      alt: 'Menus pour restaurants, cafés et brasseries MATBAA LIK',
      aspectRatio: '1024 / 682'
    }
  ],
  // Other categories can have banners added here whenever created in Canva
  // If a category has no banners, the promo area is hidden and menu links take 100% width
};

export function getPromoBannersForCategory(categoryId: string): PromoBanner[] {
  return MEGA_MENU_PROMOS[categoryId] || [];
}
