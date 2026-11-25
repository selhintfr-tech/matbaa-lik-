// Centralized editable portfolio data collection for "NOS RÉALISATIONS"
// Update or expand this list anytime.

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  href?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "menu-plastifie",
    title: "Menu Restaurant Plastifié",
    category: "Menus & Restauration",
    image: "/assets/realisation-menu.webp",
    description: "Impression haute définition, plastification mate et coins arrondis.",
    href: "/categories/menus-restaurant/",
  },
  {
    id: "boite-rigide-luxe",
    title: "Packaging Boîte Rigide",
    category: "Packaging & Boîtes",
    image: "/assets/realisation-luxe.webp",
    description: "Coffret rigide sur mesure avec dorure à chaud dorée.",
    href: "/categories/boites-packaging/",
  },
  {
    id: "bache-signaletique",
    title: "Bâche & Signalétique Grand Format",
    category: "Grand Format & PLV",
    image: "/assets/realisation-bache.webp",
    description: "Bâche PVC résistante aux intempéries avec œillets métalliques renforcés.",
    href: "/categories/supports-souples/",
  },
  {
    id: "carnet-autocopiant",
    title: "Carnets Corporatifs & Factures",
    category: "Papeterie d'Entreprise",
    image: "/assets/realisation-carnet.webp",
    description: "Carnets autocopiants numérotés avec couverture cartonnée personnalisée.",
    href: "/categories/papeterie-bureautique/",
  },
  {
    id: "rollup-event",
    title: "Roll-Up & Banners Rétractables",
    category: "PLV & Événementiel",
    image: "/assets/realisation-bache.webp",
    description: "Roll-up professionnel aluminium avec housse de transport rembourrée.",
    href: "/categories/roll-ups-plv/",
  },
  {
    id: "carte-visite-luxe",
    title: "Cartes de Visite Finition Prestige",
    category: "Cartes & Identité",
    image: "/assets/realisation-luxe.webp",
    description: "Papier 350g couché avec vernis sélectif 3D brillant et toucher soft-touch.",
    href: "/categories/cartes-de-visite/",
  },
];
