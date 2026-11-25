// Centralized Catalog Registry for MATBAA LIK
// Generated SSG Data: 14 Categories, 123 Submenus, Consolidated Zero-Duplicate Canonical Products

export interface SubmenuItem {
  label: string;
  slug: string;
}

export interface SubmenuGroup {
  id: string;
  title: string;
  items: SubmenuItem[];
}

export interface Category {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  image: string;
  description: string;
  keywords: string[];
  submenus: SubmenuGroup[];
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  categoryName: string;
  shortDesc: string;
  description: string;
  image: string;
  formats: string[];
  papers: string[];
  finishes: string[];
  quantities: string[];
  turnaround: string;
  features: string[];
  seoTitle: string;
  seoDescription: string;
}

export const CATEGORIES: Category[] = [
  {
    "id": "supers-promos",
    "name": "Supers promos",
    "shortName": "Promos",
    "iconName": "Tag",
    "image": "/assets/categorie-flyers.webp",
    "description": "Sélection des offres promotionnelles MATBAA LIK : tirages économiques à tarifs avantageux pour vos flyers, dépliants, papeterie et adhésifs.",
    "keywords": [
      "supers promos",
      "offres d'impression",
      "tirages economiques",
      "devis rapide"
    ],
    "submenus": [
      {
        "id": "super-promo-flyers",
        "title": "Super promo — Flyers",
        "items": [
          {
            "label": "Flyer A4 (offre 2 500 ex.)",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer A5 (offre 2 500 ex.)",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer A6 (offre 2 500 ex.)",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer DL (offre 2 500 ex.)",
            "slug": "flyer-standard"
          }
        ]
      },
      {
        "id": "super-promo-depliants-2-volets",
        "title": "Super promo — Dépliants 2 volets",
        "items": [
          {
            "label": "Dépliant A4 fermé (2 500 ex.)",
            "slug": "depliant-2-volets"
          },
          {
            "label": "Dépliant A5 fermé (2 500 ex.)",
            "slug": "depliant-2-volets"
          },
          {
            "label": "Dépliant A6 fermé (2 500 ex.)",
            "slug": "depliant-2-volets"
          },
          {
            "label": "Dépliant A7 fermé (2 500 ex.)",
            "slug": "depliant-2-volets"
          },
          {
            "label": "Dépliant 10 × 21 cm fermé (2 500 ex.)",
            "slug": "depliant-2-volets"
          }
        ]
      },
      {
        "id": "super-promo-etiquettes-et-stickers",
        "title": "Super promo — Étiquettes et stickers",
        "items": [
          {
            "label": "Étiquettes en rouleau PP résistant à l’eau",
            "slug": "etiquette-rouleau-bobine"
          },
          {
            "label": "Étiquettes en rouleau papier adhésif",
            "slug": "etiquette-rouleau-bobine"
          }
        ]
      },
      {
        "id": "super-promo-papier-en-tete",
        "title": "Super promo — Papier en-tête",
        "items": [
          {
            "label": "Papier en-tête A4 (2 500 ex.)",
            "slug": "papier-en-tete"
          }
        ]
      },
      {
        "id": "super-promo-ordonnances",
        "title": "Super promo — Ordonnances",
        "items": [
          {
            "label": "Ordonnance A5 (2 500 ex.)",
            "slug": "ordonnance-medicale"
          }
        ]
      },
      {
        "id": "super-promo-carte-de-visite-luxe",
        "title": "Super promo — Carte de visite luxe",
        "items": [
          {
            "label": "Carte vernis sélectif 3D",
            "slug": "carte-de-visite-luxe"
          }
        ]
      },
      {
        "id": "super-promo-grand-format",
        "title": "Super promo — Grand format",
        "items": [
          {
            "label": "Autocollant vinyle blanc",
            "slug": "vinyle-adhesif-grand-format"
          },
          {
            "label": "Bâche standard brillante",
            "slug": "bache-pvc-banderole"
          },
          {
            "label": "Autocollant One Way microperforé",
            "slug": "vinyle-microperfore-one-way"
          },
          {
            "label": "Bâche standard mate",
            "slug": "bache-pvc-banderole"
          },
          {
            "label": "Autocollant vinyle transparent",
            "slug": "vinyle-adhesif-grand-format"
          },
          {
            "label": "Autocollant vinyle vitrophanie",
            "slug": "vitrophanie-macaron"
          }
        ]
      },
      {
        "id": "super-promo-blocs-notes",
        "title": "Super promo — Blocs-notes",
        "items": [
          {
            "label": "Bloc-notes A5",
            "slug": "bloc-notes"
          }
        ]
      }
    ]
  },
  {
    "id": "cartes-de-visite",
    "name": "Cartes de visite",
    "shortName": "Cartes de visite",
    "iconName": "Contact",
    "image": "/assets/categorie-cartes.webp",
    "description": "Cartes de visite professionnelles de prestige : standard, vernis sélectif 3D, dorure à chaud, cartes PVC rigides et papiers d'art texturés.",
    "keywords": [
      "cartes de visite",
      "business cards",
      "carte pvc",
      "carte luxe",
      "dorure",
      "vernis 3d"
    ],
    "submenus": [
      {
        "id": "cartes-de-visite-classiques-pc",
        "title": "Cartes de visite classiques / PC",
        "items": [
          {
            "label": "Carte de visite standard",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Carte vernis sélectif 3D",
            "slug": "carte-de-visite-luxe"
          },
          {
            "label": "Carte de visite carrée",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Carte de visite coins arrondis",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Carte de visite encre métallisée",
            "slug": "carte-de-visite-papiers-speciaux"
          },
          {
            "label": "Carte de visite économique (pas cher)",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Carte sur mesure",
            "slug": "carte-de-visite-sur-mesure"
          }
        ]
      },
      {
        "id": "cartes-rigides-pvc",
        "title": "Cartes rigides PVC",
        "items": [
          {
            "label": "Carte rigide PVC",
            "slug": "carte-de-visite-pvc"
          },
          {
            "label": "Carte rigide PVC transparente",
            "slug": "carte-de-visite-pvc"
          },
          {
            "label": "Carte de visite aimantée",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Badge petit format PVC",
            "slug": "carte-de-visite-pvc"
          }
        ]
      },
      {
        "id": "papiers-speciaux",
        "title": "Papiers spéciaux",
        "items": [
          {
            "label": "Carte de visite ICE WHITE",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Carte de visite OYSTER SHELL",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Carte de visite ACQUERELLO",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Carte de visite papier texturé",
            "slug": "carte-de-visite-papiers-speciaux"
          },
          {
            "label": "Carte sur mesure",
            "slug": "carte-de-visite-sur-mesure"
          }
        ]
      },
      {
        "id": "cartes-de-visite-luxe",
        "title": "Cartes de visite luxe",
        "items": [
          {
            "label": "Carte vernis sélectif 3D",
            "slug": "carte-de-visite-luxe"
          },
          {
            "label": "Carte dorure en relief 3D",
            "slug": "carte-de-visite-luxe"
          },
          {
            "label": "Carte dorure à chaud",
            "slug": "carte-de-visite-luxe"
          },
          {
            "label": "Carte luxe sur mesure",
            "slug": "carte-de-visite-sur-mesure"
          }
        ]
      },
      {
        "id": "cartes-recyclees",
        "title": "Cartes recyclées",
        "items": [
          {
            "label": "Carte recyclée Kraft brun",
            "slug": "carte-de-visite-papiers-speciaux"
          },
          {
            "label": "Carte recyclée Oikos blanc",
            "slug": "carte-de-visite-recyclee"
          }
        ]
      },
      {
        "id": "cartes-doubles",
        "title": "Cartes doubles",
        "items": [
          {
            "label": "Carte rendez-vous pliée",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Porte-carte hôtel",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Carte de visite 2 volets",
            "slug": "carte-de-visite-double"
          }
        ]
      },
      {
        "id": "fidelite",
        "title": "Fidélité",
        "items": [
          {
            "label": "Carte de fidélité",
            "slug": "carte-de-fidelite"
          },
          {
            "label": "Carte à gratter",
            "slug": "carte-de-fidelite"
          }
        ]
      },
      {
        "id": "cartes-evenements",
        "title": "Cartes événements",
        "items": [
          {
            "label": "Invitation de mariage",
            "slug": "carte-evenement-badge"
          },
          {
            "label": "Carte postale personnalisée",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Accroche-porte personnalisé",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Carte d’invitation",
            "slug": "carte-evenement-badge"
          }
        ]
      },
      {
        "id": "cartes-sur-mesure-et-autres",
        "title": "Cartes sur mesure et autres",
        "items": [
          {
            "label": "Carte luxe sur mesure",
            "slug": "carte-de-visite-sur-mesure"
          },
          {
            "label": "Carte sur mesure",
            "slug": "carte-de-visite-sur-mesure"
          },
          {
            "label": "Carte de vœux sur mesure",
            "slug": "carte-de-visite-sur-mesure"
          },
          {
            "label": "Marque-page personnalisé",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Carte perforée",
            "slug": "carte-de-visite-standard"
          },
          {
            "label": "Hang tag / carte vêtement avec trou",
            "slug": "carte-de-visite-standard"
          }
        ]
      }
    ]
  },
  {
    "id": "flyers-depliants",
    "name": "Flyers & Dépliants",
    "shortName": "Flyers & Dépliants",
    "iconName": "Files",
    "image": "/assets/categorie-flyers.webp",
    "description": "Flyers publicitaires, prospectus et dépliants 2, 3 ou 4 volets pour booster votre visibilité commerciale et promouvoir vos événements.",
    "keywords": [
      "flyers",
      "depliants",
      "plaquettes commerciales",
      "prospectus",
      "tracts"
    ],
    "submenus": [
      {
        "id": "promotions-flyers-livraison-economique",
        "title": "Promotions flyers — livraison économique",
        "items": [
          {
            "label": "Flyer A4 (offre 2 500 ex.)",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer A5 (offre 2 500 ex.)",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer A6 (offre 2 500 ex.)",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer DL (offre 2 500 ex.)",
            "slug": "flyer-standard"
          }
        ]
      },
      {
        "id": "flyers-classiques-livraison-rapide-ou-express",
        "title": "Flyers classiques — livraison rapide ou express",
        "items": [
          {
            "label": "Flyer A7 — 7,4 × 10,5 cm",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer A6 — 10,5 × 14,8 cm",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer A5 — 14,8 × 21 cm",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer A4 — 21 × 29,7 cm",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer A3 — 29,7 × 42 cm",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer DL — 10 × 21 cm",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer carré",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer papier recyclé",
            "slug": "flyer-standard"
          },
          {
            "label": "Flyer sur mesure",
            "slug": "flyer-sur-mesure"
          }
        ]
      },
      {
        "id": "depliants-2-volets",
        "title": "Dépliants 2 volets",
        "items": [
          {
            "label": "Dépliant 2 volets A4",
            "slug": "depliant-2-volets"
          },
          {
            "label": "Dépliant 2 volets A5",
            "slug": "depliant-2-volets"
          },
          {
            "label": "Dépliant 2 volets A6",
            "slug": "depliant-2-volets"
          },
          {
            "label": "Dépliant 2 volets 10 × 21 cm",
            "slug": "depliant-2-volets"
          },
          {
            "label": "Dépliant 2 volets carré",
            "slug": "depliant-2-volets"
          }
        ]
      },
      {
        "id": "depliants-3-volets",
        "title": "Dépliants 3 volets",
        "items": [
          {
            "label": "Dépliant 3 volets A4",
            "slug": "depliant-3-volets"
          },
          {
            "label": "Dépliant 3 volets A5",
            "slug": "depliant-3-volets"
          },
          {
            "label": "Dépliant 3 volets 14 × 14 cm",
            "slug": "depliant-3-volets"
          },
          {
            "label": "Dépliant 3 volets 10 × 21 cm",
            "slug": "depliant-3-volets"
          },
          {
            "label": "Dépliant 3 volets A6",
            "slug": "depliant-3-volets"
          },
          {
            "label": "Dépliant 3 volets carré",
            "slug": "depliant-3-volets"
          }
        ]
      },
      {
        "id": "depliants-4-volets",
        "title": "Dépliants 4 volets",
        "items": [
          {
            "label": "Dépliant 4 volets A5 fermé",
            "slug": "depliant-4-volets"
          },
          {
            "label": "Dépliant 4 volets A4 fermé",
            "slug": "depliant-4-volets"
          },
          {
            "label": "Dépliant 4 volets 10 × 21 cm",
            "slug": "depliant-4-volets"
          }
        ]
      },
      {
        "id": "chemises-a-rabat",
        "title": "Chemises à rabat",
        "items": [
          {
            "label": "Chemise à rabat collée",
            "slug": "chemise-a-rabat"
          },
          {
            "label": "Chemise à double rabat intégrée",
            "slug": "chemise-a-rabat"
          },
          {
            "label": "Chemise à rabat 3 volets",
            "slug": "chemise-a-rabat"
          }
        ]
      },
      {
        "id": "tickets-et-billetteries",
        "title": "Tickets et billetteries",
        "items": [
          {
            "label": "Ticket d’entrée personnalisé",
            "slug": "ticket-billetterie"
          }
        ]
      },
      {
        "id": "papier-jetable",
        "title": "Papier jetable",
        "items": [
          {
            "label": "Papier jetable / tapis de voiture",
            "slug": "set-de-table-restaurant"
          },
          {
            "label": "Set de table personnalisé",
            "slug": "set-de-table-restaurant"
          }
        ]
      },
      {
        "id": "flyers-sur-mesure",
        "title": "Flyers sur mesure",
        "items": [
          {
            "label": "Flyer rond",
            "slug": "flyer-sur-mesure"
          },
          {
            "label": "Accroche-porte personnalisé",
            "slug": "flyer-sur-mesure"
          },
          {
            "label": "Flyer taille sur mesure",
            "slug": "flyer-sur-mesure"
          }
        ]
      },
      {
        "id": "flyers-et-depliants-luxe",
        "title": "Flyers et dépliants luxe",
        "items": [
          {
            "label": "Flyer vernis sélectif 3D",
            "slug": "flyer-luxe"
          }
        ]
      }
    ]
  },
  {
    "id": "catalogues-brochures",
    "name": "Catalogues & Brochures",
    "shortName": "Catalogues & Brochures",
    "iconName": "BookOpen",
    "image": "/assets/categorie-brochures.webp",
    "description": "Catalogues produits dos carré collé, brochures agrafées 2 points métal, livrets d'accueil et rapports annuels d'entreprise.",
    "keywords": [
      "catalogues",
      "brochures",
      "magazines",
      "livrets",
      "rapports annuels"
    ],
    "submenus": [
      {
        "id": "catalogues-dos-carre-colle-numerique",
        "title": "Catalogues dos carré collé — numérique",
        "items": [
          {
            "label": "Catalogue A4 — 21 × 29,7 cm",
            "slug": "catalogue-dos-carre-colle"
          },
          {
            "label": "Catalogue A5 — 14,8 × 21 cm",
            "slug": "catalogue-dos-carre-colle"
          },
          {
            "label": "Catalogue carré",
            "slug": "catalogue-dos-carre-colle"
          },
          {
            "label": "Catalogue 16 × 24 cm",
            "slug": "catalogue-dos-carre-colle"
          },
          {
            "label": "Catalogue sur devis",
            "slug": "catalogue-dos-carre-colle"
          }
        ]
      },
      {
        "id": "catalogues-dos-carre-colle-offset",
        "title": "Catalogues dos carré collé — offset",
        "items": [
          {
            "label": "Catalogue offset A4",
            "slug": "catalogue-dos-carre-colle"
          }
        ]
      },
      {
        "id": "brochures-agrafees-numerique",
        "title": "Brochures agrafées — numérique",
        "items": [
          {
            "label": "Brochure agrafée A4",
            "slug": "brochure-agrafee"
          },
          {
            "label": "Brochure agrafée A5",
            "slug": "brochure-agrafee"
          },
          {
            "label": "Brochure agrafée A6",
            "slug": "brochure-agrafee"
          },
          {
            "label": "Brochure agrafée carrée",
            "slug": "brochure-agrafee"
          }
        ]
      },
      {
        "id": "brochures-agrafees-offset",
        "title": "Brochures agrafées — offset",
        "items": [
          {
            "label": "Brochure agrafée offset A4",
            "slug": "brochure-agrafee"
          },
          {
            "label": "Brochure agrafée offset carrée",
            "slug": "brochure-agrafee"
          },
          {
            "label": "Brochure agrafée offset A5",
            "slug": "brochure-agrafee"
          }
        ]
      },
      {
        "id": "rapports",
        "title": "Rapports",
        "items": [
          {
            "label": "Rapport annuel A4",
            "slug": "rapport-activite-wire-o"
          }
        ]
      },
      {
        "id": "planners-rigides-et-souples",
        "title": "Planners rigides et souples",
        "items": [
          {
            "label": "Planner A5 rigide",
            "slug": "planner-agenda"
          },
          {
            "label": "Planner A5 souple",
            "slug": "planner-agenda"
          }
        ]
      },
      {
        "id": "livres",
        "title": "Livres",
        "items": [
          {
            "label": "Impression de livres noir et blanc",
            "slug": "livre-edition"
          }
        ]
      },
      {
        "id": "blocs-notes",
        "title": "Blocs-notes",
        "items": [
          {
            "label": "Bloc-notes couverture rigide",
            "slug": "bloc-notes"
          },
          {
            "label": "Bloc-notes spirale A4",
            "slug": "bloc-notes"
          },
          {
            "label": "Bloc-notes spirale A5",
            "slug": "bloc-notes"
          },
          {
            "label": "Bloc-notes spirale A6",
            "slug": "bloc-notes"
          }
        ]
      }
    ]
  },
  {
    "id": "papeterie-bureautique",
    "name": "Papeterie & Bureautique",
    "shortName": "Papeterie",
    "iconName": "NotebookPen",
    "image": "/assets/categorie-carnets.webp",
    "description": "Papeterie d'entreprise sur mesure : papier en-tête, enveloppes, carnets autocopiants NCR (factures/bons), ordonnances et chemises à rabat.",
    "keywords": [
      "papier en-tete",
      "enveloppes",
      "carnets ncr",
      "facturiers",
      "ordonnances",
      "chemises rabats"
    ],
    "submenus": [
      {
        "id": "papier-en-tete",
        "title": "Papier en-tête",
        "items": [
          {
            "label": "Papier en-tête standard",
            "slug": "papier-en-tete"
          },
          {
            "label": "Papier en-tête recyclé",
            "slug": "papier-en-tete"
          },
          {
            "label": "Papier en-tête luxe",
            "slug": "papier-en-tete"
          },
          {
            "label": "Papier en-tête OPALE sécurisé",
            "slug": "papier-en-tete"
          }
        ]
      },
      {
        "id": "enveloppes-et-pochettes",
        "title": "Enveloppes et pochettes",
        "items": [
          {
            "label": "Enveloppe papier spécial",
            "slug": "enveloppe-personnalisee"
          },
          {
            "label": "Enveloppe 11 × 22 cm US",
            "slug": "enveloppe-personnalisee"
          },
          {
            "label": "Enveloppe 11,4 × 16,2 cm C6",
            "slug": "enveloppe-personnalisee"
          },
          {
            "label": "Enveloppe 16 × 23 cm A5",
            "slug": "enveloppe-personnalisee"
          },
          {
            "label": "Enveloppe 22 × 33 cm A4",
            "slug": "enveloppe-personnalisee"
          },
          {
            "label": "Enveloppe 26 × 36 cm A4+",
            "slug": "enveloppe-personnalisee"
          },
          {
            "label": "Enveloppe 31 × 41 cm A4+",
            "slug": "enveloppe-personnalisee"
          },
          {
            "label": "Enveloppe 37 × 45 cm A3+",
            "slug": "enveloppe-personnalisee"
          },
          {
            "label": "Pochette CD",
            "slug": "enveloppe-personnalisee"
          }
        ]
      },
      {
        "id": "blocs-notes-spirale",
        "title": "Blocs-notes spirale",
        "items": [
          {
            "label": "Bloc-notes couverture rigide",
            "slug": "bloc-notes"
          },
          {
            "label": "Bloc-notes spirale A4",
            "slug": "bloc-notes"
          },
          {
            "label": "Bloc-notes spirale A5",
            "slug": "bloc-notes"
          },
          {
            "label": "Bloc-notes spirale A6",
            "slug": "bloc-notes"
          }
        ]
      },
      {
        "id": "blocs-notes-encolles",
        "title": "Blocs-notes encollés",
        "items": [
          {
            "label": "Bloc-notes encollé A4",
            "slug": "bloc-notes"
          },
          {
            "label": "Bloc-notes encollé A5",
            "slug": "bloc-notes"
          },
          {
            "label": "Bloc-notes encollé A6",
            "slug": "bloc-notes"
          }
        ]
      },
      {
        "id": "planners",
        "title": "Planners",
        "items": [
          {
            "label": "Planner A5 rigide",
            "slug": "planner-agenda"
          },
          {
            "label": "Planner A5 souple",
            "slug": "planner-agenda"
          }
        ]
      },
      {
        "id": "chemises-a-rabat",
        "title": "Chemises à rabat",
        "items": [
          {
            "label": "Chemise à rabat collée",
            "slug": "chemise-a-rabat"
          },
          {
            "label": "Chemise à double rabat intégrée",
            "slug": "chemise-a-rabat"
          },
          {
            "label": "Chemise à rabat 3 volets",
            "slug": "chemise-a-rabat"
          }
        ]
      },
      {
        "id": "ordonnances",
        "title": "Ordonnances",
        "items": [
          {
            "label": "Ordonnance A5",
            "slug": "ordonnance-medicale"
          },
          {
            "label": "Ordonnance A4",
            "slug": "ordonnance-medicale"
          }
        ]
      },
      {
        "id": "carnets-ncr",
        "title": "Carnets NCR",
        "items": [
          {
            "label": "Carnet autocopiant A5",
            "slug": "carnet-autocopiant-ncr"
          },
          {
            "label": "Carnet autocopiant A4",
            "slug": "carnet-autocopiant-ncr"
          }
        ]
      },
      {
        "id": "attestations-et-diplomes",
        "title": "Attestations et diplômes",
        "items": [
          {
            "label": "Attestation personnalisée",
            "slug": "attestation-diplome"
          }
        ]
      },
      {
        "id": "plans-architecture",
        "title": "Plans / architecture",
        "items": [
          {
            "label": "Impression de plans",
            "slug": "plan-architecture"
          }
        ]
      },
      {
        "id": "dossiers-cartonnes",
        "title": "Dossiers cartonnés",
        "items": [
          {
            "label": "Dossier couleur personnalisé",
            "slug": "dossier-cartonne"
          }
        ]
      },
      {
        "id": "accroche-porte",
        "title": "Accroche-porte",
        "items": [
          {
            "label": "Accroche-porte personnalisé",
            "slug": "accroche-porte"
          }
        ]
      },
      {
        "id": "chevalets",
        "title": "Chevalets",
        "items": [
          {
            "label": "Chevalet A5",
            "slug": "chevalet-bureau"
          }
        ]
      },
      {
        "id": "tampons-cachets",
        "title": "Tampons & cachets d'entreprise",
        "items": [
          {
            "label": "Tampon encreur Trodat automatique",
            "slug": "cachet-tampon-encreur"
          },
          {
            "label": "Cachet d'entreprise bois traditionnel",
            "slug": "cachet-tampon-encreur"
          },
          {
            "label": "Dateur et numéroteur professionnel",
            "slug": "cachet-tampon-encreur"
          }
        ]
      }
    ]
  },
  {
    "id": "boites-packaging",
    "name": "Boîtes & Packaging",
    "shortName": "Packaging",
    "iconName": "Package",
    "image": "/assets/categorie-stickers.webp",
    "description": "Solutions d'emballage et packaging sur mesure : étuis pliants, coffrets luxe, packaging alimentaire, boîtes d'expédition et sacs boutique.",
    "keywords": [
      "boites",
      "packaging",
      "emballage carton",
      "sacs kraft",
      "boite expedition"
    ],
    "submenus": [
      {
        "id": "boites-souples",
        "title": "Boîtes souples",
        "items": [
          {
            "label": "Boîte étui sur mesure",
            "slug": "pochette-etui-packaging"
          },
          {
            "label": "Boîte avec couvercle personnalisée",
            "slug": "boite-pliante-souple"
          },
          {
            "label": "Boîte ovale Berlingot personnalisée",
            "slug": "boite-pliante-souple"
          },
          {
            "label": "Boîte coulissante personnalisée",
            "slug": "boite-pliante-souple"
          },
          {
            "label": "Boîte à mouchoirs personnalisée",
            "slug": "boite-pliante-souple"
          }
        ]
      },
      {
        "id": "packaging-alimentaire",
        "title": "Packaging alimentaire",
        "items": [
          {
            "label": "Boîte sushi personnalisée",
            "slug": "packaging-alimentaire"
          },
          {
            "label": "Boîte pâtissière personnalisée",
            "slug": "packaging-alimentaire"
          },
          {
            "label": "Boîte ballotin carrée",
            "slug": "packaging-alimentaire"
          }
        ]
      },
      {
        "id": "boites-d-expedition",
        "title": "Boîtes d’expédition",
        "items": [
          {
            "label": "Boîte d’expédition taille standard",
            "slug": "boite-expedition-ecommerce"
          },
          {
            "label": "Boîte d’expédition sur mesure",
            "slug": "boite-expedition-ecommerce"
          }
        ]
      },
      {
        "id": "packaging-luxe-boites-rigides",
        "title": "Packaging luxe / boîtes rigides",
        "items": [
          {
            "label": "Boîtes aimantées",
            "slug": "boite-luxe-rigide"
          },
          {
            "label": "Coffret rigide avec couvercle",
            "slug": "boite-luxe-rigide"
          },
          {
            "label": "Boîte coffret luxe rigide",
            "slug": "boite-luxe-rigide"
          }
        ]
      },
      {
        "id": "sacs-cartonnes",
        "title": "Sacs cartonnés",
        "items": [
          {
            "label": "Sac publicitaire plastifié",
            "slug": "sac-cartonne-boutique"
          }
        ]
      },
      {
        "id": "pochettes-etuis",
        "title": "Pochettes / étuis",
        "items": [
          {
            "label": "Pochette pour carte",
            "slug": "pochette-etui-packaging"
          },
          {
            "label": "Porte-carte hôtel",
            "slug": "boite-pliante-souple"
          },
          {
            "label": "Pochette CD",
            "slug": "pochette-etui-packaging"
          }
        ]
      },
      {
        "id": "sacs-en-toile",
        "title": "Sacs en toile",
        "items": [
          {
            "label": "Tote bag personnalisé",
            "slug": "tote-bag-personnalise"
          }
        ]
      },
      {
        "id": "scotch-personnalise",
        "title": "Scotch personnalisé",
        "items": [
          {
            "label": "Scotch imprimé avec logo",
            "slug": "ruban-adhesif-scotch"
          }
        ]
      },
      {
        "id": "presentoirs-en-carton",
        "title": "Présentoirs en carton",
        "items": [
          {
            "label": "Présentoir pour comptoir",
            "slug": "sac-cartonne-boutique"
          },
          {
            "label": "Présentoir pour sol",
            "slug": "sac-cartonne-boutique"
          }
        ]
      },
      {
        "id": "papier-cadeau",
        "title": "Papier cadeau",
        "items": [
          {
            "label": "Papier cadeau personnalisé",
            "slug": "papier-cadeau-soie"
          }
        ]
      }
    ]
  },
  {
    "id": "etiquettes-adhesifs",
    "name": "Étiquettes & Adhésifs",
    "shortName": "Étiquettes",
    "iconName": "Sticker",
    "image": "/assets/categorie-stickers.webp",
    "description": "Étiquettes adhésives en rouleaux et planches, stickers découpés sur mesure à la forme, étiquettes transparentes et vitrophanies vitrine.",
    "keywords": [
      "etiquettes rouleaux",
      "stickers sur mesure",
      "autocollants",
      "vitrophanie"
    ],
    "submenus": [
      {
        "id": "etiquettes-personnalisees",
        "title": "Étiquettes personnalisées",
        "items": [
          {
            "label": "Étiquettes rectangulaires ou carrées",
            "slug": "etiquette-format-standard"
          },
          {
            "label": "Étiquettes rondes ou ovales",
            "slug": "etiquette-format-standard"
          },
          {
            "label": "Étiquettes vinyle PVC",
            "slug": "etiquette-format-standard"
          },
          {
            "label": "Stickers CD",
            "slug": "etiquette-format-standard"
          },
          {
            "label": "Stickers en planche",
            "slug": "etiquette-format-standard"
          }
        ]
      },
      {
        "id": "etiquettes-transparentes",
        "title": "Étiquettes transparentes",
        "items": [
          {
            "label": "Étiquettes adhésives transparentes",
            "slug": "etiquette-transparente"
          }
        ]
      },
      {
        "id": "etiquettes-en-bobine",
        "title": "Étiquettes en bobine",
        "items": [
          {
            "label": "Rouleau PP résistant à l’eau",
            "slug": "etiquette-rouleau-bobine"
          },
          {
            "label": "Rouleau papier adhésif",
            "slug": "etiquette-rouleau-bobine"
          },
          {
            "label": "Rouleau PP doré",
            "slug": "etiquette-rouleau-bobine"
          },
          {
            "label": "Rouleau PP argenté",
            "slug": "etiquette-rouleau-bobine"
          },
          {
            "label": "Rouleau PP transparent",
            "slug": "etiquette-rouleau-bobine"
          }
        ]
      },
      {
        "id": "formes-speciales",
        "title": "Formes spéciales",
        "items": [
          {
            "label": "Sticker sur mesure avec découpe à la forme",
            "slug": "stickers-decoupe-forme"
          },
          {
            "label": "Lettrage vinyle découpé",
            "slug": "stickers-decoupe-forme"
          }
        ]
      },
      {
        "id": "vitrophanies-macarons",
        "title": "Vitrophanies / macarons",
        "items": [
          {
            "label": "Sticker vitrophanie (macaron)",
            "slug": "vitrophanie-macaron"
          }
        ]
      },
      {
        "id": "etiquettes-format-standard",
        "title": "Étiquettes format standard",
        "items": [
          {
            "label": "Adhésif A3 — 29,7 × 42 cm",
            "slug": "etiquette-format-standard"
          },
          {
            "label": "Adhésif A4 — 21 × 29,7 cm",
            "slug": "etiquette-format-standard"
          },
          {
            "label": "Adhésif A5 — 21 × 14,8 cm",
            "slug": "etiquette-format-standard"
          },
          {
            "label": "Adhésif A6 — 14,8 × 10,5 cm",
            "slug": "etiquette-format-standard"
          }
        ]
      },
      {
        "id": "scotch-avec-logo",
        "title": "Scotch avec logo",
        "items": [
          {
            "label": "Scotch imprimé avec logo",
            "slug": "ruban-adhesif-scotch"
          }
        ]
      }
    ]
  },
  {
    "id": "affiches-posters",
    "name": "Affiches & Posters",
    "shortName": "Affiches",
    "iconName": "Image",
    "image": "/assets/categorie-grand-format.webp",
    "description": "Affiches grand format A3, A2, A1, A0, posters photo haute définition et cadres clippants d'affichage pour vos campagnes visuelles.",
    "keywords": [
      "affiches publicitaires",
      "posters hd",
      "cadres clippants",
      "impression affiche"
    ],
    "submenus": [
      {
        "id": "affiches-et-cadres",
        "title": "Affiches et cadres",
        "items": [
          {
            "label": "Impression Forex blanc",
            "slug": "affiche-publicitaire"
          },
          {
            "label": "Panneau publicitaire Polypro",
            "slug": "affiche-publicitaire"
          },
          {
            "label": "Affiche A1 et A2 — grande quantité",
            "slug": "affiche-publicitaire"
          },
          {
            "label": "Affiche A0 — 84,1 × 119 cm",
            "slug": "affiche-publicitaire"
          },
          {
            "label": "Affiche A1 — 59,4 × 84 cm",
            "slug": "affiche-publicitaire"
          },
          {
            "label": "Affiche A2 — 42 × 59,4 cm",
            "slug": "affiche-publicitaire"
          },
          {
            "label": "Affiche A3 — 29,7 × 42 cm",
            "slug": "affiche-publicitaire"
          },
          {
            "label": "Affiche suspendue en aluminium",
            "slug": "affiche-publicitaire"
          }
        ]
      },
      {
        "id": "affiches-sur-mesure",
        "title": "Affiches sur mesure",
        "items": [
          {
            "label": "Affiche sur mesure papier couché",
            "slug": "affiche-sur-mesure"
          }
        ]
      },
      {
        "id": "porte-affiches-et-porte-brochures",
        "title": "Porte-affiches et porte-brochures",
        "items": [
          {
            "label": "Porte-brochures zigzag A4",
            "slug": "porte-affiche-cadre"
          },
          {
            "label": "Stop-trottoir chevalet",
            "slug": "porte-affiche-cadre"
          },
          {
            "label": "Porte-affiche A5",
            "slug": "porte-affiche-cadre"
          },
          {
            "label": "Porte-affiches A3",
            "slug": "porte-affiche-cadre"
          },
          {
            "label": "Porte-brochures A4",
            "slug": "porte-affiche-cadre"
          },
          {
            "label": "Porte-brochures A4 trois niveaux",
            "slug": "porte-affiche-cadre"
          }
        ]
      },
      {
        "id": "affiches-par-theme",
        "title": "Affiches par thème",
        "items": [
          {
            "label": "Affiche test de vision",
            "slug": "affiche-publicitaire"
          },
          {
            "label": "Affiche papier plastifié Covid-19",
            "slug": "affiche-publicitaire"
          },
          {
            "label": "Plaque Forex 5 mm Covid-19",
            "slug": "affiche-publicitaire"
          }
        ]
      },
      {
        "id": "plaques-magnetiques",
        "title": "Plaques magnétiques",
        "items": [
          {
            "label": "Plaque magnétique",
            "slug": "plaque-magnetique"
          }
        ]
      },
      {
        "id": "cadres",
        "title": "Cadres",
        "items": [
          {
            "label": "Cadre Clip Clap",
            "slug": "porte-affiche-cadre"
          }
        ]
      }
    ]
  },
  {
    "id": "roll-ups-plv",
    "name": "Roll-ups & PLV",
    "shortName": "Roll-ups & PLV",
    "iconName": "PanelsTopLeft",
    "image": "/assets/hero-main-hd.png",
    "description": "Supports signalétiques et PLV événementielle : Roll-up banners rétractables, X-banners, murs d'image photocall et comptoirs d'accueil salon.",
    "keywords": [
      "roll-up",
      "kakemono",
      "x-banner",
      "photocall",
      "plv evenementielle",
      "comptoir salon"
    ],
    "submenus": [
      {
        "id": "roll-up-personnalise-support-impression",
        "title": "Roll-up personnalisé — support + impression",
        "items": [
          {
            "label": "Roll-up 85 × 200 cm",
            "slug": "roll-up-standard"
          },
          {
            "label": "Roll-up 120 × 200 cm",
            "slug": "roll-up-standard"
          },
          {
            "label": "Roll-up double 100 × 200 cm",
            "slug": "roll-up-luxe-double-face"
          },
          {
            "label": "Roll-up double 120 × 200 cm",
            "slug": "roll-up-luxe-double-face"
          },
          {
            "label": "Mini roll-up bureau",
            "slug": "roll-up-standard"
          },
          {
            "label": "Roll-up luxe",
            "slug": "roll-up-luxe-double-face"
          }
        ]
      },
      {
        "id": "x-banner-support-impression",
        "title": "X-banner — support + impression",
        "items": [
          {
            "label": "X-banner 60 × 160 cm",
            "slug": "x-banner"
          },
          {
            "label": "X-banner 80 × 180 cm",
            "slug": "x-banner"
          }
        ]
      },
      {
        "id": "recharges-sans-support",
        "title": "Recharges sans support",
        "items": [
          {
            "label": "Recharge roll-up ou X-banner",
            "slug": "x-banner"
          }
        ]
      },
      {
        "id": "photocall",
        "title": "Photocall",
        "items": [
          {
            "label": "Mur d’image / photocall",
            "slug": "photocall-mur-image"
          },
          {
            "label": "Stand parapluie courbé",
            "slug": "photocall-mur-image"
          }
        ]
      },
      {
        "id": "presentoirs-en-carton",
        "title": "Présentoirs en carton",
        "items": [
          {
            "label": "Présentoir de comptoir",
            "slug": "presentoir-carton"
          },
          {
            "label": "Présentoir de sol",
            "slug": "presentoir-carton"
          }
        ]
      },
      {
        "id": "plv-exterieur",
        "title": "PLV extérieur",
        "items": [
          {
            "label": "Drapeaux grand format",
            "slug": "roll-up-standard"
          },
          {
            "label": "Plaque professionnelle plexiglas",
            "slug": "plv-plexiglas"
          },
          {
            "label": "Stop-trottoir chevalet",
            "slug": "plv-exterieur-stop-trottoir"
          }
        ]
      },
      {
        "id": "plv-plexiglas",
        "title": "PLV plexiglas",
        "items": [
          {
            "label": "Porte-brochures zigzag A4",
            "slug": "plv-plexiglas"
          },
          {
            "label": "Urne en plexiglas",
            "slug": "plv-plexiglas"
          }
        ]
      },
      {
        "id": "comptoirs-personnalises",
        "title": "Comptoirs personnalisés",
        "items": [
          {
            "label": "Comptoir publicitaire avec panneau",
            "slug": "comptoir-accueil-salon"
          },
          {
            "label": "Comptoir d’accueil luxe",
            "slug": "comptoir-accueil-salon"
          }
        ]
      }
    ]
  },
  {
    "id": "supports-souples",
    "name": "Supports Souples",
    "shortName": "Supports Souples",
    "iconName": "Maximize2",
    "image": "/assets/realisation-bache.webp",
    "description": "Impression grand format sur supports souples : bâches PVC tendues, vinyles microperforés One-Way, papiers peints et marquage de véhicules.",
    "keywords": [
      "baches pvc",
      "vinyle grand format",
      "one way",
      "marquage vehicule",
      "papier peint"
    ],
    "submenus": [
      {
        "id": "autocollants-grand-format",
        "title": "Autocollants grand format",
        "items": [
          {
            "label": "Autocollant vinyle blanc",
            "slug": "vinyle-adhesif-grand-format"
          },
          {
            "label": "Autocollant One Way microperforé",
            "slug": "vinyle-microperfore-one-way"
          },
          {
            "label": "Autocollant vinyle transparent",
            "slug": "vinyle-adhesif-grand-format"
          },
          {
            "label": "Autocollant vinyle vitrophanie",
            "slug": "vinyle-adhesif-grand-format"
          },
          {
            "label": "Lettrage vinyle découpé",
            "slug": "vinyle-adhesif-grand-format"
          }
        ]
      },
      {
        "id": "baches-et-tissus",
        "title": "Bâches et tissus",
        "items": [
          {
            "label": "Bâche standard brillante",
            "slug": "bache-pvc-banderole"
          },
          {
            "label": "Bâche standard mate",
            "slug": "bache-pvc-banderole"
          },
          {
            "label": "Bâche diffusante Backlight",
            "slug": "bache-pvc-banderole"
          },
          {
            "label": "Tissu diffusant Backlight",
            "slug": "bache-pvc-banderole"
          },
          {
            "label": "Toile canevas 260 g sans cadre",
            "slug": "vinyle-adhesif-grand-format"
          }
        ]
      },
      {
        "id": "papier-peint",
        "title": "Papier peint",
        "items": [
          {
            "label": "Papier peint personnalisé",
            "slug": "papier-peint-personnalise"
          }
        ]
      },
      {
        "id": "affiches-papier-grand-format",
        "title": "Affiches papier grand format",
        "items": [
          {
            "label": "Affiche sur mesure papier couché",
            "slug": "affiche-grand-format-urbaine"
          }
        ]
      },
      {
        "id": "plans",
        "title": "Plans",
        "items": [
          {
            "label": "Impression de plans",
            "slug": "plan-grand-format"
          }
        ]
      },
      {
        "id": "marquage-textile",
        "title": "Marquage textile",
        "items": [
          {
            "label": "Impression DTF",
            "slug": "marquage-textile-pro"
          }
        ]
      },
      {
        "id": "publicite-sur-vehicule",
        "title": "Publicité sur véhicule",
        "items": [
          {
            "label": "Plaque magnétique",
            "slug": "vinyle-adhesif-grand-format"
          },
          {
            "label": "Habillage véhicule",
            "slug": "covering-flocage-vehicule"
          }
        ]
      }
    ]
  },
  {
    "id": "supports-rigides",
    "name": "Supports Rigides",
    "shortName": "Supports Rigides",
    "iconName": "Layers",
    "image": "/assets/categorie-grand-format.webp",
    "description": "Panneaux rigides grand format : Forex PVC, Aluminium Dibond, Plexiglas transparent découpé, Akylux de chantier et drapeaux publicitaires.",
    "keywords": [
      "panneaux forex",
      "alu dibond",
      "plexiglas",
      "akylux chantier",
      "drapeaux oriflammes"
    ],
    "submenus": [
      {
        "id": "plexiglas",
        "title": "Plexiglas",
        "items": [
          {
            "label": "Impression plexiglas blanc",
            "slug": "panneau-plexiglas"
          },
          {
            "label": "Impression plexiglas transparent",
            "slug": "panneau-plexiglas"
          },
          {
            "label": "Plaque professionnelle plexiglas",
            "slug": "plaque-professionnelle"
          }
        ]
      },
      {
        "id": "forex",
        "title": "Forex",
        "items": [
          {
            "label": "Impression Forex blanc",
            "slug": "panneau-forex-pvc"
          }
        ]
      },
      {
        "id": "metal",
        "title": "Métal",
        "items": [
          {
            "label": "Impression ALU DIBOND brossé",
            "slug": "panneau-aluminium-dibond"
          }
        ]
      },
      {
        "id": "alveolaire",
        "title": "Alvéolaire",
        "items": [
          {
            "label": "Panneau publicitaire Polypro",
            "slug": "panneau-forex-pvc"
          }
        ]
      },
      {
        "id": "drapeaux",
        "title": "Drapeaux",
        "items": [
          {
            "label": "Drapeaux grand format",
            "slug": "drapeau-beach-flag"
          },
          {
            "label": "Drapeau de bureau",
            "slug": "drapeau-beach-flag"
          }
        ]
      },
      {
        "id": "tableaux-en-toile",
        "title": "Tableaux en toile",
        "items": [
          {
            "label": "Tableau en toile personnalisé",
            "slug": "tableau-toile-chassis"
          },
          {
            "label": "Tableau en toile carré",
            "slug": "tableau-toile-chassis"
          }
        ]
      },
      {
        "id": "logos-en-relief-3d",
        "title": "Logos en relief 3D",
        "items": [
          {
            "label": "Découpe de lettres et logos plexiglas",
            "slug": "panneau-plexiglas"
          }
        ]
      },
      {
        "id": "plaque-professionnelle",
        "title": "Plaque professionnelle",
        "items": [
          {
            "label": "Plaque professionnelle plexiglas",
            "slug": "plaque-professionnelle"
          }
        ]
      },
      {
        "id": "cadres-a-selfie",
        "title": "Cadres à selfie",
        "items": [
          {
            "label": "Cadre à selfie personnalisé",
            "slug": "cadre-selfie-evenement"
          }
        ]
      }
    ]
  },
  {
    "id": "souvenirs-photos",
    "name": "Souvenirs Photos",
    "shortName": "Souvenirs Photos",
    "iconName": "Camera",
    "image": "/assets/realisation-luxe.webp",
    "description": "Impressions photos personnalisées : tableaux sur toile avec châssis bois, vêtements imprimés, mugs personnalisés et magnets photos.",
    "keywords": [
      "tableau photo",
      "toile photo",
      "mug personnalise",
      "magnets",
      "textile photo"
    ],
    "submenus": [
      {
        "id": "tableaux-decoratifs",
        "title": "Tableaux décoratifs",
        "items": [
          {
            "label": "Tableau en toile personnalisé",
            "slug": "tableau-photo-personnalise"
          },
          {
            "label": "Tableau en toile carré",
            "slug": "tableau-photo-personnalise"
          },
          {
            "label": "Tableau Alu Dibond",
            "slug": "tableau-photo-personnalise"
          },
          {
            "label": "Tableau carton plume",
            "slug": "tableau-photo-personnalise"
          },
          {
            "label": "Tableau plexiglas",
            "slug": "tableau-photo-personnalise"
          },
          {
            "label": "Multi-tableau toile : une photo divisée",
            "slug": "tableau-photo-personnalise"
          },
          {
            "label": "Papier peint personnalisé",
            "slug": "tableau-photo-personnalise"
          },
          {
            "label": "Multi-tableaux personnalisés",
            "slug": "tableau-photo-personnalise"
          }
        ]
      },
      {
        "id": "vetements",
        "title": "Vêtements",
        "items": [
          {
            "label": "Polo personnalisé pack",
            "slug": "tableau-photo-personnalise"
          },
          {
            "label": "Polo personnalisé qualité premium",
            "slug": "tableau-photo-personnalise"
          },
          {
            "label": "T-shirt personnalisé demi-manches",
            "slug": "t-shirt-personnalise"
          },
          {
            "label": "Casquette standard",
            "slug": "t-shirt-personnalise"
          }
        ]
      },
      {
        "id": "mugs",
        "title": "Mugs",
        "items": [
          {
            "label": "Mug standard",
            "slug": "mug-personnalise"
          },
          {
            "label": "Mug magique",
            "slug": "mug-personnalise"
          }
        ]
      },
      {
        "id": "magnets-photos",
        "title": "Magnets photos",
        "items": [
          {
            "label": "Photo magnet sur support aimanté",
            "slug": "magnet-photo"
          }
        ]
      },
      {
        "id": "cadeaux-photo",
        "title": "Cadeaux photo",
        "items": [
          {
            "label": "Tableau en toile personnalisé",
            "slug": "cadeaux-photo-personnalises"
          },
          {
            "label": "Tirage photos 10 × 15 cm",
            "slug": "cadeaux-photo-personnalises"
          },
          {
            "label": "Mug standard",
            "slug": "mug-personnalise"
          },
          {
            "label": "Puzzle personnalisé 120 pièces",
            "slug": "cadeaux-photo-personnalises"
          },
          {
            "label": "Tote bag personnalisé",
            "slug": "cadeaux-photo-personnalises"
          },
          {
            "label": "Mug magique",
            "slug": "mug-personnalise"
          },
          {
            "label": "T-shirt personnalisé demi-manches",
            "slug": "t-shirt-personnalise"
          }
        ]
      }
    ]
  },
  {
    "id": "goodies-gadgets",
    "name": "Goodies & Gadgets",
    "shortName": "Goodies",
    "iconName": "Gift",
    "image": "/assets/categorie-textile.webp",
    "description": "Objets publicitaires et cadeaux d'entreprise personnalisés avec votre logo : stylos, tote bags, clés USB, gourdes inox et power banks.",
    "keywords": [
      "goodies entreprise",
      "stylos logo",
      "tote bag personnalise",
      "gourde inox",
      "cle usb publicitaire"
    ],
    "submenus": [
      {
        "id": "goodies-d-ete",
        "title": "Goodies d’été",
        "items": [
          {
            "label": "Jeux de cartes Rami",
            "slug": "goodies-ete-plage"
          },
          {
            "label": "Parasol personnalisé avec logo",
            "slug": "goodies-ete-plage"
          },
          {
            "label": "Stylo métal luxe",
            "slug": "goodies-ete-plage"
          },
          {
            "label": "Tote bag personnalisé",
            "slug": "goodies-ete-plage"
          },
          {
            "label": "Gourde isotherme inox",
            "slug": "goodies-ete-plage"
          },
          {
            "label": "T-shirt personnalisé demi-manches",
            "slug": "goodies-ete-plage"
          },
          {
            "label": "Casquette standard",
            "slug": "goodies-ete-plage"
          },
          {
            "label": "Pare-soleil en carton",
            "slug": "pare-soleil-voiture"
          },
          {
            "label": "Éventail personnalisé",
            "slug": "goodies-ete-plage"
          }
        ]
      },
      {
        "id": "goodies-ecologiques",
        "title": "Goodies écologiques",
        "items": [
          {
            "label": "Tote bag personnalisé",
            "slug": "tote-bag-personnalise"
          },
          {
            "label": "Stylo en carton écologique",
            "slug": "goodies-ecologiques-bambou"
          }
        ]
      },
      {
        "id": "agendas-et-calendriers",
        "title": "Agendas et calendriers",
        "items": [
          {
            "label": "Calendrier chevalet simple",
            "slug": "calendrier-agenda-entreprise"
          },
          {
            "label": "Calendrier sous-main",
            "slug": "calendrier-agenda-entreprise"
          }
        ]
      },
      {
        "id": "pare-soleil",
        "title": "Pare-soleil",
        "items": [
          {
            "label": "Pare-soleil en carton",
            "slug": "pare-soleil-voiture"
          }
        ]
      },
      {
        "id": "blocs-notes",
        "title": "Blocs-notes",
        "items": [
          {
            "label": "Bloc-notes spirale A4",
            "slug": "bloc-notes"
          },
          {
            "label": "Bloc-notes spirale A5",
            "slug": "bloc-notes"
          },
          {
            "label": "Bloc-notes spirale A6",
            "slug": "bloc-notes"
          }
        ]
      },
      {
        "id": "bloc-notes-skin",
        "title": "Bloc-notes Skin",
        "items": [
          {
            "label": "Bloc-notes Skin A5",
            "slug": "bloc-notes"
          }
        ]
      },
      {
        "id": "stylos-personnalises",
        "title": "Stylos personnalisés",
        "items": [
          {
            "label": "Stylo métal luxe",
            "slug": "stylo-publicitaire"
          },
          {
            "label": "Stylo bois écologique",
            "slug": "goodies-ecologiques-bambou"
          },
          {
            "label": "Stylo carton écologique",
            "slug": "goodies-ecologiques-bambou"
          }
        ]
      },
      {
        "id": "porte-cles",
        "title": "Porte-clés",
        "items": [
          {
            "label": "Porte-clés métallique carré",
            "slug": "porte-cle-personnalise"
          },
          {
            "label": "Porte-clés métallique rond",
            "slug": "porte-cle-personnalise"
          },
          {
            "label": "Porte-clés rond rotatif",
            "slug": "porte-cle-personnalise"
          },
          {
            "label": "Porte-clés sur mesure",
            "slug": "porte-cle-personnalise"
          }
        ]
      },
      {
        "id": "puzzles",
        "title": "Puzzles",
        "items": [
          {
            "label": "Puzzle personnalisé 120 pièces",
            "slug": "puzzle-personnalise"
          }
        ]
      },
      {
        "id": "mugs-et-gourdes",
        "title": "Mugs et gourdes",
        "items": [
          {
            "label": "Mug standard",
            "slug": "mug-personnalise"
          },
          {
            "label": "Gourde isotherme inox",
            "slug": "gourde-bouteille-isotherme"
          },
          {
            "label": "Mug magique",
            "slug": "mug-personnalise"
          }
        ]
      },
      {
        "id": "cles-usb",
        "title": "Clés USB",
        "items": [
          {
            "label": "Clé USB carte",
            "slug": "cle-usb-publicitaire"
          },
          {
            "label": "Clé USB Twister",
            "slug": "cle-usb-publicitaire"
          }
        ]
      },
      {
        "id": "tapis-de-souris",
        "title": "Tapis de souris",
        "items": [
          {
            "label": "Tapis de souris personnalisé",
            "slug": "tapis-souris-personnalise"
          }
        ]
      },
      {
        "id": "power-banks",
        "title": "Power banks",
        "items": [
          {
            "label": "Mini Power Bank modèle 2",
            "slug": "power-bank-personnalise"
          },
          {
            "label": "Mini Power Bank modèle 3",
            "slug": "power-bank-personnalise"
          }
        ]
      },
      {
        "id": "badges",
        "title": "Badges",
        "items": [
          {
            "label": "Tour de cou personnalisé (lanyard)",
            "slug": "badge-publicitaire-epingle"
          },
          {
            "label": "Porte-badge plastique",
            "slug": "badge-publicitaire-epingle"
          },
          {
            "label": "Badge aimanté modèle 1",
            "slug": "badge-publicitaire-epingle"
          },
          {
            "label": "Badge petit format PVC",
            "slug": "badge-publicitaire-epingle"
          }
        ]
      },
      {
        "id": "magnets",
        "title": "Magnets",
        "items": [
          {
            "label": "Photo magnet support aimanté",
            "slug": "accessoires-publicitaires-evenement"
          }
        ]
      },
      {
        "id": "porte-cartes",
        "title": "Porte-cartes",
        "items": [
          {
            "label": "Porte-carte RFID",
            "slug": "porte-carte-publicitaire"
          },
          {
            "label": "Porte-carte aluminium",
            "slug": "porte-carte-publicitaire"
          }
        ]
      },
      {
        "id": "accessoires-publicitaires",
        "title": "Accessoires publicitaires",
        "items": [
          {
            "label": "Bracelets PVC",
            "slug": "accessoires-publicitaires-evenement"
          },
          {
            "label": "Drapeau de bureau",
            "slug": "accessoires-publicitaires-evenement"
          },
          {
            "label": "Tote bag personnalisé",
            "slug": "tote-bag-personnalise"
          }
        ]
      },
      {
        "id": "sacs-a-dos",
        "title": "Sacs à dos",
        "items": [
          {
            "label": "Sac à dos publicitaire",
            "slug": "sac-a-dos-promotionnel"
          },
          {
            "label": "Tote bag personnalisé",
            "slug": "tote-bag-personnalise"
          }
        ]
      },
      {
        "id": "jeux-de-cartes",
        "title": "Jeux de cartes",
        "items": [
          {
            "label": "Jeux de cartes Rami",
            "slug": "jeu-de-cartes-personnalise"
          }
        ]
      }
    ]
  },
  {
    "id": "menus-restaurant",
    "name": "Menus Restaurant",
    "shortName": "Menus Restaurant",
    "iconName": "UtensilsCrossed",
    "image": "/assets/categorie-restaurants.webp",
    "description": "Cartes et menus pour cafés et restaurants : menus indéchirables lavables, menus rigides plastifiés, sets de table et pochettes à couverts.",
    "keywords": [
      "menu restaurant",
      "carte restaurant",
      "set de table papier",
      "menu plastifie",
      "protege menu"
    ],
    "submenus": [
      {
        "id": "menus-standards",
        "title": "Menus standards",
        "items": [
          {
            "label": "Menu A3 — 29,7 × 42 cm",
            "slug": "menu-restaurant-standard"
          },
          {
            "label": "Menu A4 — 21 × 29,7 cm",
            "slug": "menu-restaurant-standard"
          },
          {
            "label": "Menu A5 — 14,8 × 21 cm",
            "slug": "menu-restaurant-standard"
          },
          {
            "label": "Menu A6 — 10,5 × 14,8 cm",
            "slug": "menu-restaurant-standard"
          },
          {
            "label": "Menu taille Slim",
            "slug": "menu-restaurant-standard"
          }
        ]
      },
      {
        "id": "menus-plies-2-volets",
        "title": "Menus pliés 2 volets",
        "items": [
          {
            "label": "Menu 2 volets A4",
            "slug": "menu-restaurant-plie"
          },
          {
            "label": "Menu 2 volets A5",
            "slug": "menu-restaurant-plie"
          },
          {
            "label": "Menu 2 volets A6",
            "slug": "menu-restaurant-plie"
          }
        ]
      },
      {
        "id": "menus-plastifies-rigides",
        "title": "Menus plastifiés rigides",
        "items": [
          {
            "label": "Menu rigide A3",
            "slug": "menu-restaurant-plastifie-rigide"
          },
          {
            "label": "Menu rigide A4",
            "slug": "menu-restaurant-plastifie-rigide"
          },
          {
            "label": "Menu rigide A5",
            "slug": "menu-restaurant-plastifie-rigide"
          }
        ]
      },
      {
        "id": "couverts-personnalises",
        "title": "Couverts personnalisés",
        "items": [
          {
            "label": "Pochette à couverts",
            "slug": "pochette-couverts-serviette"
          },
          {
            "label": "Rond de serviette",
            "slug": "pochette-couverts-serviette"
          },
          {
            "label": "Set de table personnalisé",
            "slug": "pochette-couverts-serviette"
          }
        ]
      },
      {
        "id": "protege-menus-additions",
        "title": "Protège-menus & Additions",
        "items": [
          {
            "label": "Protège-menu rigide similicuir prestige",
            "slug": "protege-menu-carnet-addition"
          },
          {
            "label": "Porte-addition & pochette d'encaissement",
            "slug": "protege-menu-carnet-addition"
          }
        ]
      }
    ]
  }
];

export const CANONICAL_PRODUCTS: Product[] = [
  {
    "id": "accessoires-publicitaires-evenement",
    "slug": "accessoires-publicitaires-evenement",
    "title": "Tours de Cou Lanyards & Accessoires Événementiels",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de tours de cou lanyards & accessoires événementiels avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos tours de cou lanyards & accessoires événementiels chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Tours de Cou Lanyards & Accessoires Événementiels | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos tours de cou lanyards & accessoires événementiels au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "accroche-porte",
    "slug": "accroche-porte",
    "title": "Accroche-porte Hôtels & Établissements",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de accroche-porte hôtels & établissements avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos accroche-porte hôtels & établissements chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Accroche-porte Hôtels & Établissements | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos accroche-porte hôtels & établissements au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "affiche-grand-format-urbaine",
    "slug": "affiche-grand-format-urbaine",
    "title": "Affiches Urbaines Grand Format (Abribus & Sucettes)",
    "categoryId": "affiches-posters",
    "categoryName": "Affiches & Posters",
    "shortDesc": "Impression professionnelle de affiches urbaines grand format (abribus & sucettes) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos affiches urbaines grand format (abribus & sucettes) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "A3 (29,7 × 42 cm)",
      "A2 (42 × 59,4 cm)",
      "A1 (59,4 × 84,1 cm)",
      "A0 (84,1 × 118,9 cm)",
      "Grand format abribus 120 × 176 cm"
    ],
    "papers": [
      "Couché brillant 135g",
      "Couché demi-mat 170g",
      "Papier photo satiné 200g HD",
      "Papier dos bleu pour encollage urbain"
    ],
    "finishes": [
      "Brut massicoté",
      "Plastification encapsulée mate ou brillante",
      "Montage sur cadre clippant aluminium"
    ],
    "quantities": [
      "1 à 10 ex. (Numérique express)",
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex. (Offset)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Affiches Urbaines Grand Format (Abribus & Sucettes) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos affiches urbaines grand format (abribus & sucettes) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "affiche-publicitaire",
    "slug": "affiche-publicitaire",
    "title": "Affiches Publicitaires Grand Format A3 / A2 / A1 / A0",
    "categoryId": "affiches-posters",
    "categoryName": "Affiches & Posters",
    "shortDesc": "Impression professionnelle de affiches publicitaires grand format a3 / a2 / a1 / a0 avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos affiches publicitaires grand format a3 / a2 / a1 / a0 chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "A3 (29,7 × 42 cm)",
      "A2 (42 × 59,4 cm)",
      "A1 (59,4 × 84,1 cm)",
      "A0 (84,1 × 118,9 cm)",
      "Grand format abribus 120 × 176 cm"
    ],
    "papers": [
      "Couché brillant 135g",
      "Couché demi-mat 170g",
      "Papier photo satiné 200g HD",
      "Papier dos bleu pour encollage urbain"
    ],
    "finishes": [
      "Brut massicoté",
      "Plastification encapsulée mate ou brillante",
      "Montage sur cadre clippant aluminium"
    ],
    "quantities": [
      "1 à 10 ex. (Numérique express)",
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex. (Offset)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Affiches Publicitaires Grand Format A3 / A2 / A1 / A0 | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos affiches publicitaires grand format a3 / a2 / a1 / a0 au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "affiche-sur-mesure",
    "slug": "affiche-sur-mesure",
    "title": "Affiches d'Événement sur Mesure",
    "categoryId": "affiches-posters",
    "categoryName": "Affiches & Posters",
    "shortDesc": "Impression professionnelle de affiches d'événement sur mesure avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos affiches d'événement sur mesure chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "A3 (29,7 × 42 cm)",
      "A2 (42 × 59,4 cm)",
      "A1 (59,4 × 84,1 cm)",
      "A0 (84,1 × 118,9 cm)",
      "Grand format abribus 120 × 176 cm"
    ],
    "papers": [
      "Couché brillant 135g",
      "Couché demi-mat 170g",
      "Papier photo satiné 200g HD",
      "Papier dos bleu pour encollage urbain"
    ],
    "finishes": [
      "Brut massicoté",
      "Plastification encapsulée mate ou brillante",
      "Montage sur cadre clippant aluminium"
    ],
    "quantities": [
      "1 à 10 ex. (Numérique express)",
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex. (Offset)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Affiches d'Événement sur Mesure | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos affiches d'événement sur mesure au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "attestation-diplome",
    "slug": "attestation-diplome",
    "title": "Diplômes & Attestations Papier d'Art",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de diplômes & attestations papier d'art avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos diplômes & attestations papier d'art chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Diplômes & Attestations Papier d'Art | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos diplômes & attestations papier d'art au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "bache-pvc-banderole",
    "slug": "bache-pvc-banderole",
    "title": "Bâches PVC Publicitaires & Banderoles Événementielles",
    "categoryId": "supports-souples",
    "categoryName": "Supports Souples",
    "shortDesc": "Impression professionnelle de bâches pvc publicitaires & banderoles événementielles avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos bâches pvc publicitaires & banderoles événementielles chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-bache.webp",
    "formats": [
      "Largeur jusqu'à 3,20 m sans raccord",
      "Longueur sur mesure",
      "Découpe carrée ou à la forme"
    ],
    "papers": [
      "Bâche PVC 510g enduite",
      "Bâche microperforée Mesh coupe-vent",
      "Vinyle adhésif monomère ou polymère",
      "Vinyle microperforé One-Way"
    ],
    "finishes": [
      "Oeillets métalliques périphériques tous les 50 cm",
      "Ourlet de renfort thermo-soudé",
      "Fourreaux haut et bas",
      "Lamination anti-UV"
    ],
    "quantities": [
      "1 pièce sur mesure",
      "Grandes séries événementielles"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Bâches PVC Publicitaires & Banderoles Événementielles | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos bâches pvc publicitaires & banderoles événementielles au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "badge-publicitaire-epingle",
    "slug": "badge-publicitaire-epingle",
    "title": "Badges Publicitaires Épingles & Magnétiques",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de badges publicitaires épingles & magnétiques avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos badges publicitaires épingles & magnétiques chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Badges Publicitaires Épingles & Magnétiques | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos badges publicitaires épingles & magnétiques au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "bloc-notes",
    "slug": "bloc-notes",
    "title": "Bloc-notes Personnalisés (Spirale ou Encollés)",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de bloc-notes personnalisés (spirale ou encollés) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos bloc-notes personnalisés (spirale ou encollés) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Bloc-notes Personnalisés (Spirale ou Encollés) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos bloc-notes personnalisés (spirale ou encollés) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "boite-expedition-ecommerce",
    "slug": "boite-expedition-ecommerce",
    "title": "Boîtes d'Expédition E-commerce Renforcées",
    "categoryId": "boites-packaging",
    "categoryName": "Boîtes & Packaging",
    "shortDesc": "Impression professionnelle de boîtes d'expédition e-commerce renforcées avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos boîtes d'expédition e-commerce renforcées chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Petits étuis produits",
      "Moyennes boîtes pliantes",
      "Grandes boîtes d'expédition",
      "Sur mesure selon gabarit"
    ],
    "papers": [
      "Carton compact SBS 300g à 400g",
      "Carton kraft brun naturel",
      "Micro-cannelure ondulée E/F",
      "Carton contact alimentaire certifié"
    ],
    "finishes": [
      "Découpe à la forme personnalisée",
      "Pelliculage mat anti-rayures",
      "Vernis UV sélectif",
      "Dorure à chaud",
      "Fenêtre PVC transparente"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Boîtes d'Expédition E-commerce Renforcées | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos boîtes d'expédition e-commerce renforcées au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "boite-luxe-rigide",
    "slug": "boite-luxe-rigide",
    "title": "Coffrets & Boîtes Rigides de Prestige",
    "categoryId": "boites-packaging",
    "categoryName": "Boîtes & Packaging",
    "shortDesc": "Impression professionnelle de coffrets & boîtes rigides de prestige avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos coffrets & boîtes rigides de prestige chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Petits étuis produits",
      "Moyennes boîtes pliantes",
      "Grandes boîtes d'expédition",
      "Sur mesure selon gabarit"
    ],
    "papers": [
      "Carton compact SBS 300g à 400g",
      "Carton kraft brun naturel",
      "Micro-cannelure ondulée E/F",
      "Carton contact alimentaire certifié"
    ],
    "finishes": [
      "Découpe à la forme personnalisée",
      "Pelliculage mat anti-rayures",
      "Vernis UV sélectif",
      "Dorure à chaud",
      "Fenêtre PVC transparente"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Coffrets & Boîtes Rigides de Prestige | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos coffrets & boîtes rigides de prestige au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "boite-pliante-souple",
    "slug": "boite-pliante-souple",
    "title": "Boîtes Pliantes & Étuis Produits Personnalisés",
    "categoryId": "boites-packaging",
    "categoryName": "Boîtes & Packaging",
    "shortDesc": "Impression professionnelle de boîtes pliantes & étuis produits personnalisés avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos boîtes pliantes & étuis produits personnalisés chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Petits étuis produits",
      "Moyennes boîtes pliantes",
      "Grandes boîtes d'expédition",
      "Sur mesure selon gabarit"
    ],
    "papers": [
      "Carton compact SBS 300g à 400g",
      "Carton kraft brun naturel",
      "Micro-cannelure ondulée E/F",
      "Carton contact alimentaire certifié"
    ],
    "finishes": [
      "Découpe à la forme personnalisée",
      "Pelliculage mat anti-rayures",
      "Vernis UV sélectif",
      "Dorure à chaud",
      "Fenêtre PVC transparente"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Boîtes Pliantes & Étuis Produits Personnalisés | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos boîtes pliantes & étuis produits personnalisés au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "brochure-agrafee",
    "slug": "brochure-agrafee",
    "title": "Brochures Agrafées 2 Points Métal",
    "categoryId": "catalogues-brochures",
    "categoryName": "Catalogues & Brochures",
    "shortDesc": "Impression professionnelle de brochures agrafées 2 points métal avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos brochures agrafées 2 points métal chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-brochures.webp",
    "formats": [
      "A4 portrait (21 × 29,7 cm)",
      "A5 portrait (14,8 × 21 cm)",
      "A4 paysage à l'italienne",
      "Carré 21 × 21 cm"
    ],
    "papers": [
      "Intérieur couché mat ou brillant 135g/170g",
      "Couverture cartonnée 300g ou 350g pelliculée"
    ],
    "finishes": [
      "Piqûre 2 points métal (agrafes)",
      "Dos carré collé PUR",
      "Reliure spirale métallique Wire-O",
      "Pelliculage soft-touch"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Brochures Agrafées 2 Points Métal | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos brochures agrafées 2 points métal au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "cachet-tampon-encreur",
    "slug": "cachet-tampon-encreur",
    "title": "Tampons Encreurs Automatiques Trodat & Cachets d'Entreprise",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de tampons encreurs automatiques trodat & cachets d'entreprise avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos tampons encreurs automatiques trodat & cachets d'entreprise chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-carnets.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A5 (14,8 × 21 cm)",
      "A6 (10,5 × 14,8 cm)",
      "Enveloppes DL (11 × 22 cm), C5 (16,2 × 22,9 cm), C4 (22,9 × 32,4 cm)"
    ],
    "papers": [
      "Autocopiant NCR 60g (Blanc / Jaune / Rose)",
      "Offset blanc laser garanti 90g et 100g",
      "Papier vergé filigrané"
    ],
    "finishes": [
      "Duplicata (2 feuillets) ou Triplicata (3 feuillets)",
      "Numérotation séquentielle consécutive",
      "Perforation détachable et souche agrafée",
      "Encollage en tête avec carton intercalaire"
    ],
    "quantities": [
      "10 carnets",
      "25 carnets",
      "50 carnets",
      "100 carnets",
      "250 carnets"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Tampons Encreurs Automatiques Trodat & Cachets d'Entreprise | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos tampons encreurs automatiques trodat & cachets d'entreprise au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "cadeaux-photo-personnalises",
    "slug": "cadeaux-photo-personnalises",
    "title": "Cadeaux Photos Personnalisés (Puzzles, Coussins, Tapis de Souris)",
    "categoryId": "souvenirs-photos",
    "categoryName": "Souvenirs Photos",
    "shortDesc": "Impression professionnelle de cadeaux photos personnalisés (puzzles, coussins, tapis de souris) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cadeaux photos personnalisés (puzzles, coussins, tapis de souris) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-luxe.webp",
    "formats": [
      "Formats standards photo : 20×30 cm, 30×40 cm, 50×70 cm, 70×100 cm",
      "Mug 325 ml",
      "Magnets frigo souples"
    ],
    "papers": [
      "Véritable toile canvas coton 380g",
      "Châssis bois en pin massif 2cm ou 4cm",
      "Céramique blanche AAA haute brillance"
    ],
    "finishes": [
      "Impression encres pigmentaires haute fidélité",
      "Vernis de protection UV",
      "Boîte cadeau individuelle"
    ],
    "quantities": [
      "1 pièce",
      "5 pièces",
      "20 pièces",
      "100 pièces (cadeaux d'entreprise)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cadeaux Photos Personnalisés (Puzzles, Coussins, Tapis de Souris) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cadeaux photos personnalisés (puzzles, coussins, tapis de souris) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "cadre-selfie-evenement",
    "slug": "cadre-selfie-evenement",
    "title": "Cadres à Selfie Événementiels Rigides Personnalisés",
    "categoryId": "supports-rigides",
    "categoryName": "Supports Rigides",
    "shortDesc": "Impression professionnelle de cadres à selfie événementiels rigides personnalisés avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cadres à selfie événementiels rigides personnalisés chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "Forex 3mm, 5mm, 10mm",
      "Aluminium Dibond composite 3mm",
      "Plexiglas coulé transparent 5mm / 8mm",
      "Akylux alvéolaire 3,5mm"
    ],
    "papers": [
      "Impression directe UV à plat",
      "Contrecollage vinyle polymère haute durabilité avec plastification protectrice"
    ],
    "finishes": [
      "Découpe numérique fraisée",
      "Perforation aux 4 coins",
      "Entretoises murales inox",
      "Pieds de lestage pour drapeaux"
    ],
    "quantities": [
      "À l'unité",
      "5 à 20 ex.",
      "Grandes quantités pour chantiers et réseaux"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cadres à Selfie Événementiels Rigides Personnalisés | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cadres à selfie événementiels rigides personnalisés au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "calendrier-agenda-entreprise",
    "slug": "calendrier-agenda-entreprise",
    "title": "Calendriers & Agendas d'Entreprise Personnalisés",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de calendriers & agendas d'entreprise personnalisés avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos calendriers & agendas d'entreprise personnalisés chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Calendriers & Agendas d'Entreprise Personnalisés | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos calendriers & agendas d'entreprise personnalisés au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "carnet-autocopiant-ncr",
    "slug": "carnet-autocopiant-ncr",
    "title": "Carnets de Factures Autocopiants NCR & Bons de Commande",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de carnets de factures autocopiants ncr & bons de commande avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos carnets de factures autocopiants ncr & bons de commande chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-carnets.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A5 (14,8 × 21 cm)",
      "A6 (10,5 × 14,8 cm)",
      "Enveloppes DL (11 × 22 cm), C5 (16,2 × 22,9 cm), C4 (22,9 × 32,4 cm)"
    ],
    "papers": [
      "Autocopiant NCR 60g (Blanc / Jaune / Rose)",
      "Offset blanc laser garanti 90g et 100g",
      "Papier vergé filigrané"
    ],
    "finishes": [
      "Duplicata (2 feuillets) ou Triplicata (3 feuillets)",
      "Numérotation séquentielle consécutive",
      "Perforation détachable et souche agrafée",
      "Encollage en tête avec carton intercalaire"
    ],
    "quantities": [
      "10 carnets",
      "25 carnets",
      "50 carnets",
      "100 carnets",
      "250 carnets"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Carnets de Factures Autocopiants NCR & Bons de Commande | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos carnets de factures autocopiants ncr & bons de commande au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "carte-de-fidelite",
    "slug": "carte-de-fidelite",
    "title": "Cartes de Fidélité Commerces & Restaurants",
    "categoryId": "cartes-de-visite",
    "categoryName": "Cartes de visite",
    "shortDesc": "Impression professionnelle de cartes de fidélité commerces & restaurants avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cartes de fidélité commerces & restaurants chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-cartes.webp",
    "formats": [
      "8,5 × 5,5 cm (Standard)",
      "9,0 × 5,0 cm",
      "5,5 × 5,5 cm (Carré)",
      "Mini 8,5 × 2,5 cm",
      "Sur mesure"
    ],
    "papers": [
      "Couché demi-mat 350g",
      "Couché mat 400g prestige",
      "Papier texturé d'art 300g",
      "Kraft naturel 300g",
      "PVC rigide 500 microns"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat soft-touch",
      "Pelliculage brillant",
      "Vernis sélectif 3D relief",
      "Dorure à chaud (Or / Argent)",
      "Coins arrondis"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 000 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cartes de Fidélité Commerces & Restaurants | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cartes de fidélité commerces & restaurants au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "carte-de-visite-double",
    "slug": "carte-de-visite-double",
    "title": "Cartes de Visite Doubles 2 Volets Rainées",
    "categoryId": "cartes-de-visite",
    "categoryName": "Cartes de visite",
    "shortDesc": "Impression professionnelle de cartes de visite doubles 2 volets rainées avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cartes de visite doubles 2 volets rainées chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-cartes.webp",
    "formats": [
      "8,5 × 5,5 cm (Standard)",
      "9,0 × 5,0 cm",
      "5,5 × 5,5 cm (Carré)",
      "Mini 8,5 × 2,5 cm",
      "Sur mesure"
    ],
    "papers": [
      "Couché demi-mat 350g",
      "Couché mat 400g prestige",
      "Papier texturé d'art 300g",
      "Kraft naturel 300g",
      "PVC rigide 500 microns"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat soft-touch",
      "Pelliculage brillant",
      "Vernis sélectif 3D relief",
      "Dorure à chaud (Or / Argent)",
      "Coins arrondis"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 000 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cartes de Visite Doubles 2 Volets Rainées | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cartes de visite doubles 2 volets rainées au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "carte-de-visite-luxe",
    "slug": "carte-de-visite-luxe",
    "title": "Cartes de Visite Luxe (Vernis 3D & Dorure)",
    "categoryId": "cartes-de-visite",
    "categoryName": "Cartes de visite",
    "shortDesc": "Impression professionnelle de cartes de visite luxe (vernis 3d & dorure) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cartes de visite luxe (vernis 3d & dorure) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-cartes.webp",
    "formats": [
      "8,5 × 5,5 cm (Standard)",
      "9,0 × 5,0 cm",
      "5,5 × 5,5 cm (Carré)",
      "Mini 8,5 × 2,5 cm",
      "Sur mesure"
    ],
    "papers": [
      "Couché demi-mat 350g",
      "Couché mat 400g prestige",
      "Papier texturé d'art 300g",
      "Kraft naturel 300g",
      "PVC rigide 500 microns"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat soft-touch",
      "Pelliculage brillant",
      "Vernis sélectif 3D relief",
      "Dorure à chaud (Or / Argent)",
      "Coins arrondis"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 000 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cartes de Visite Luxe (Vernis 3D & Dorure) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cartes de visite luxe (vernis 3d & dorure) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "carte-de-visite-papiers-speciaux",
    "slug": "carte-de-visite-papiers-speciaux",
    "title": "Cartes de Visite Papiers d'Art & Spéciaux",
    "categoryId": "cartes-de-visite",
    "categoryName": "Cartes de visite",
    "shortDesc": "Impression professionnelle de cartes de visite papiers d'art & spéciaux avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cartes de visite papiers d'art & spéciaux chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-cartes.webp",
    "formats": [
      "8,5 × 5,5 cm (Standard)",
      "9,0 × 5,0 cm",
      "5,5 × 5,5 cm (Carré)",
      "Mini 8,5 × 2,5 cm",
      "Sur mesure"
    ],
    "papers": [
      "Couché demi-mat 350g",
      "Couché mat 400g prestige",
      "Papier texturé d'art 300g",
      "Kraft naturel 300g",
      "PVC rigide 500 microns"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat soft-touch",
      "Pelliculage brillant",
      "Vernis sélectif 3D relief",
      "Dorure à chaud (Or / Argent)",
      "Coins arrondis"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 000 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cartes de Visite Papiers d'Art & Spéciaux | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cartes de visite papiers d'art & spéciaux au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "carte-de-visite-pvc",
    "slug": "carte-de-visite-pvc",
    "title": "Cartes de Visite PVC Rigides & RFID",
    "categoryId": "cartes-de-visite",
    "categoryName": "Cartes de visite",
    "shortDesc": "Impression professionnelle de cartes de visite pvc rigides & rfid avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cartes de visite pvc rigides & rfid chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-cartes.webp",
    "formats": [
      "8,5 × 5,5 cm (Standard)",
      "9,0 × 5,0 cm",
      "5,5 × 5,5 cm (Carré)",
      "Mini 8,5 × 2,5 cm",
      "Sur mesure"
    ],
    "papers": [
      "Couché demi-mat 350g",
      "Couché mat 400g prestige",
      "Papier texturé d'art 300g",
      "Kraft naturel 300g",
      "PVC rigide 500 microns"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat soft-touch",
      "Pelliculage brillant",
      "Vernis sélectif 3D relief",
      "Dorure à chaud (Or / Argent)",
      "Coins arrondis"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 000 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cartes de Visite PVC Rigides & RFID | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cartes de visite pvc rigides & rfid au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "carte-de-visite-recyclee",
    "slug": "carte-de-visite-recyclee",
    "title": "Cartes de Visite Écologiques & Recyclées",
    "categoryId": "cartes-de-visite",
    "categoryName": "Cartes de visite",
    "shortDesc": "Impression professionnelle de cartes de visite écologiques & recyclées avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cartes de visite écologiques & recyclées chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-cartes.webp",
    "formats": [
      "8,5 × 5,5 cm (Standard)",
      "9,0 × 5,0 cm",
      "5,5 × 5,5 cm (Carré)",
      "Mini 8,5 × 2,5 cm",
      "Sur mesure"
    ],
    "papers": [
      "Couché demi-mat 350g",
      "Couché mat 400g prestige",
      "Papier texturé d'art 300g",
      "Kraft naturel 300g",
      "PVC rigide 500 microns"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat soft-touch",
      "Pelliculage brillant",
      "Vernis sélectif 3D relief",
      "Dorure à chaud (Or / Argent)",
      "Coins arrondis"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 000 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cartes de Visite Écologiques & Recyclées | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cartes de visite écologiques & recyclées au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "carte-de-visite-standard",
    "slug": "carte-de-visite-standard",
    "title": "Cartes de Visite Professionnelles Standards",
    "categoryId": "cartes-de-visite",
    "categoryName": "Cartes de visite",
    "shortDesc": "Impression professionnelle de cartes de visite professionnelles standards avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cartes de visite professionnelles standards chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-cartes.webp",
    "formats": [
      "8,5 × 5,5 cm (Standard)",
      "9,0 × 5,0 cm",
      "5,5 × 5,5 cm (Carré)",
      "Mini 8,5 × 2,5 cm",
      "Sur mesure"
    ],
    "papers": [
      "Couché demi-mat 350g",
      "Couché mat 400g prestige",
      "Papier texturé d'art 300g",
      "Kraft naturel 300g",
      "PVC rigide 500 microns"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat soft-touch",
      "Pelliculage brillant",
      "Vernis sélectif 3D relief",
      "Dorure à chaud (Or / Argent)",
      "Coins arrondis"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 000 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cartes de Visite Professionnelles Standards | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cartes de visite professionnelles standards au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "carte-de-visite-sur-mesure",
    "slug": "carte-de-visite-sur-mesure",
    "title": "Cartes de Visite Découpe sur Mesure & Tranche Colorée",
    "categoryId": "cartes-de-visite",
    "categoryName": "Cartes de visite",
    "shortDesc": "Impression professionnelle de cartes de visite découpe sur mesure & tranche colorée avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cartes de visite découpe sur mesure & tranche colorée chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-cartes.webp",
    "formats": [
      "8,5 × 5,5 cm (Standard)",
      "9,0 × 5,0 cm",
      "5,5 × 5,5 cm (Carré)",
      "Mini 8,5 × 2,5 cm",
      "Sur mesure"
    ],
    "papers": [
      "Couché demi-mat 350g",
      "Couché mat 400g prestige",
      "Papier texturé d'art 300g",
      "Kraft naturel 300g",
      "PVC rigide 500 microns"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat soft-touch",
      "Pelliculage brillant",
      "Vernis sélectif 3D relief",
      "Dorure à chaud (Or / Argent)",
      "Coins arrondis"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 000 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cartes de Visite Découpe sur Mesure & Tranche Colorée | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cartes de visite découpe sur mesure & tranche colorée au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "carte-evenement-badge",
    "slug": "carte-evenement-badge",
    "title": "Cartes d'Invitation & Badges Événementiels",
    "categoryId": "cartes-de-visite",
    "categoryName": "Cartes de visite",
    "shortDesc": "Impression professionnelle de cartes d'invitation & badges événementiels avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos cartes d'invitation & badges événementiels chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-cartes.webp",
    "formats": [
      "8,5 × 5,5 cm (Standard)",
      "9,0 × 5,0 cm",
      "5,5 × 5,5 cm (Carré)",
      "Mini 8,5 × 2,5 cm",
      "Sur mesure"
    ],
    "papers": [
      "Couché demi-mat 350g",
      "Couché mat 400g prestige",
      "Papier texturé d'art 300g",
      "Kraft naturel 300g",
      "PVC rigide 500 microns"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat soft-touch",
      "Pelliculage brillant",
      "Vernis sélectif 3D relief",
      "Dorure à chaud (Or / Argent)",
      "Coins arrondis"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 000 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Cartes d'Invitation & Badges Événementiels | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos cartes d'invitation & badges événementiels au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "catalogue-dos-carre-colle",
    "slug": "catalogue-dos-carre-colle",
    "title": "Catalogues Produits Dos Carré Collé",
    "categoryId": "catalogues-brochures",
    "categoryName": "Catalogues & Brochures",
    "shortDesc": "Impression professionnelle de catalogues produits dos carré collé avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos catalogues produits dos carré collé chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-brochures.webp",
    "formats": [
      "A4 portrait (21 × 29,7 cm)",
      "A5 portrait (14,8 × 21 cm)",
      "A4 paysage à l'italienne",
      "Carré 21 × 21 cm"
    ],
    "papers": [
      "Intérieur couché mat ou brillant 135g/170g",
      "Couverture cartonnée 300g ou 350g pelliculée"
    ],
    "finishes": [
      "Piqûre 2 points métal (agrafes)",
      "Dos carré collé PUR",
      "Reliure spirale métallique Wire-O",
      "Pelliculage soft-touch"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Catalogues Produits Dos Carré Collé | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos catalogues produits dos carré collé au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "chemise-a-rabat",
    "slug": "chemise-a-rabat",
    "title": "Chemises à Rabats & Pochettes Documentaires",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de chemises à rabats & pochettes documentaires avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos chemises à rabats & pochettes documentaires chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Chemises à Rabats & Pochettes Documentaires | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos chemises à rabats & pochettes documentaires au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "chevalet-bureau",
    "slug": "chevalet-bureau",
    "title": "Chevalets de Table & Calendriers de Bureau",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de chevalets de table & calendriers de bureau avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos chevalets de table & calendriers de bureau chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Chevalets de Table & Calendriers de Bureau | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos chevalets de table & calendriers de bureau au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "cle-usb-publicitaire",
    "slug": "cle-usb-publicitaire",
    "title": "Clés USB Publicitaires Personnalisées avec Logo",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de clés usb publicitaires personnalisées avec logo avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos clés usb publicitaires personnalisées avec logo chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Clés USB Publicitaires Personnalisées avec Logo | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos clés usb publicitaires personnalisées avec logo au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "comptoir-accueil-salon",
    "slug": "comptoir-accueil-salon",
    "title": "Comptoirs d'Accueil Mobiles pour Salons",
    "categoryId": "roll-ups-plv",
    "categoryName": "Roll-ups & PLV",
    "shortDesc": "Impression professionnelle de comptoirs d'accueil mobiles pour salons avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos comptoirs d'accueil mobiles pour salons chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/hero-main-hd.png",
    "formats": [
      "85 × 200 cm (Standard)",
      "100 × 200 cm",
      "120 × 200 cm",
      "150 × 200 cm",
      "Photocall 240 × 240 cm / 300 × 240 cm"
    ],
    "papers": [
      "Bâche PVC 450g M1 anti-incurvation",
      "Tissu polyester stretch anti-reflet",
      "Polypropylène dos gris occultant"
    ],
    "finishes": [
      "Structure aluminium anodisé avec pieds pivotants",
      "Sac de transport matelassé inclus",
      "Double face",
      "Montage prêt à l'emploi"
    ],
    "quantities": [
      "1 ex.",
      "2 ex.",
      "5 ex.",
      "10 ex.",
      "25 ex.",
      "50 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Comptoirs d'Accueil Mobiles pour Salons | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos comptoirs d'accueil mobiles pour salons au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "covering-flocage-vehicule",
    "slug": "covering-flocage-vehicule",
    "title": "Covering & Flocage Publicitaire de Véhicules",
    "categoryId": "supports-souples",
    "categoryName": "Supports Souples",
    "shortDesc": "Impression professionnelle de covering & flocage publicitaire de véhicules avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos covering & flocage publicitaire de véhicules chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-bache.webp",
    "formats": [
      "Largeur jusqu'à 3,20 m sans raccord",
      "Longueur sur mesure",
      "Découpe carrée ou à la forme"
    ],
    "papers": [
      "Bâche PVC 510g enduite",
      "Bâche microperforée Mesh coupe-vent",
      "Vinyle adhésif monomère ou polymère",
      "Vinyle microperforé One-Way"
    ],
    "finishes": [
      "Oeillets métalliques périphériques tous les 50 cm",
      "Ourlet de renfort thermo-soudé",
      "Fourreaux haut et bas",
      "Lamination anti-UV"
    ],
    "quantities": [
      "1 pièce sur mesure",
      "Grandes séries événementielles"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Covering & Flocage Publicitaire de Véhicules | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos covering & flocage publicitaire de véhicules au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "depliant-2-volets",
    "slug": "depliant-2-volets",
    "title": "Dépliants Publicitaires 2 Volets (4 Pages)",
    "categoryId": "flyers-depliants",
    "categoryName": "Flyers & Dépliants",
    "shortDesc": "Impression professionnelle de dépliants publicitaires 2 volets (4 pages) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos dépliants publicitaires 2 volets (4 pages) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "A4 ouvert / A5 fermé (2 volets)",
      "A3 ouvert / A4 fermé (2 volets)",
      "A4 ouvert / 10×21 cm fermé (3 volets)",
      "10×21 cm ouvert / carré fermé"
    ],
    "papers": [
      "Couché brillant 135g",
      "Couché brillant 170g",
      "Couché demi-mat 250g rainé",
      "Couché mat 350g rainé"
    ],
    "finishes": [
      "Pli central",
      "Pli roulé",
      "Pli accordéon",
      "Pli fenêtre",
      "Pelliculage mat ou brillant"
    ],
    "quantities": [
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Dépliants Publicitaires 2 Volets (4 Pages) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos dépliants publicitaires 2 volets (4 pages) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "depliant-3-volets",
    "slug": "depliant-3-volets",
    "title": "Dépliants Publicitaires 3 Volets (6 Pages)",
    "categoryId": "flyers-depliants",
    "categoryName": "Flyers & Dépliants",
    "shortDesc": "Impression professionnelle de dépliants publicitaires 3 volets (6 pages) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos dépliants publicitaires 3 volets (6 pages) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "A4 ouvert / A5 fermé (2 volets)",
      "A3 ouvert / A4 fermé (2 volets)",
      "A4 ouvert / 10×21 cm fermé (3 volets)",
      "10×21 cm ouvert / carré fermé"
    ],
    "papers": [
      "Couché brillant 135g",
      "Couché brillant 170g",
      "Couché demi-mat 250g rainé",
      "Couché mat 350g rainé"
    ],
    "finishes": [
      "Pli central",
      "Pli roulé",
      "Pli accordéon",
      "Pli fenêtre",
      "Pelliculage mat ou brillant"
    ],
    "quantities": [
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Dépliants Publicitaires 3 Volets (6 Pages) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos dépliants publicitaires 3 volets (6 pages) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "depliant-4-volets",
    "slug": "depliant-4-volets",
    "title": "Dépliants Publicitaires 4 Volets (8 Pages)",
    "categoryId": "flyers-depliants",
    "categoryName": "Flyers & Dépliants",
    "shortDesc": "Impression professionnelle de dépliants publicitaires 4 volets (8 pages) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos dépliants publicitaires 4 volets (8 pages) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "A4 ouvert / A5 fermé (2 volets)",
      "A3 ouvert / A4 fermé (2 volets)",
      "A4 ouvert / 10×21 cm fermé (3 volets)",
      "10×21 cm ouvert / carré fermé"
    ],
    "papers": [
      "Couché brillant 135g",
      "Couché brillant 170g",
      "Couché demi-mat 250g rainé",
      "Couché mat 350g rainé"
    ],
    "finishes": [
      "Pli central",
      "Pli roulé",
      "Pli accordéon",
      "Pli fenêtre",
      "Pelliculage mat ou brillant"
    ],
    "quantities": [
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Dépliants Publicitaires 4 Volets (8 Pages) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos dépliants publicitaires 4 volets (8 pages) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "dossier-cartonne",
    "slug": "dossier-cartonne",
    "title": "Dossiers Cartonnés & Sous-chemises",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de dossiers cartonnés & sous-chemises avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos dossiers cartonnés & sous-chemises chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Dossiers Cartonnés & Sous-chemises | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos dossiers cartonnés & sous-chemises au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "drapeau-beach-flag",
    "slug": "drapeau-beach-flag",
    "title": "Drapeaux Publicitaires Beach Flags & Oriflammes Plume",
    "categoryId": "supports-rigides",
    "categoryName": "Supports Rigides",
    "shortDesc": "Impression professionnelle de drapeaux publicitaires beach flags & oriflammes plume avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos drapeaux publicitaires beach flags & oriflammes plume chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "Forex 3mm, 5mm, 10mm",
      "Aluminium Dibond composite 3mm",
      "Plexiglas coulé transparent 5mm / 8mm",
      "Akylux alvéolaire 3,5mm"
    ],
    "papers": [
      "Impression directe UV à plat",
      "Contrecollage vinyle polymère haute durabilité avec plastification protectrice"
    ],
    "finishes": [
      "Découpe numérique fraisée",
      "Perforation aux 4 coins",
      "Entretoises murales inox",
      "Pieds de lestage pour drapeaux"
    ],
    "quantities": [
      "À l'unité",
      "5 à 20 ex.",
      "Grandes quantités pour chantiers et réseaux"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Drapeaux Publicitaires Beach Flags & Oriflammes Plume | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos drapeaux publicitaires beach flags & oriflammes plume au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "enveloppe-personnalisee",
    "slug": "enveloppe-personnalisee",
    "title": "Enveloppes d'Entreprise Personnalisées (DL, C5, C4)",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de enveloppes d'entreprise personnalisées (dl, c5, c4) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos enveloppes d'entreprise personnalisées (dl, c5, c4) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-carnets.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A5 (14,8 × 21 cm)",
      "A6 (10,5 × 14,8 cm)",
      "Enveloppes DL (11 × 22 cm), C5 (16,2 × 22,9 cm), C4 (22,9 × 32,4 cm)"
    ],
    "papers": [
      "Autocopiant NCR 60g (Blanc / Jaune / Rose)",
      "Offset blanc laser garanti 90g et 100g",
      "Papier vergé filigrané"
    ],
    "finishes": [
      "Duplicata (2 feuillets) ou Triplicata (3 feuillets)",
      "Numérotation séquentielle consécutive",
      "Perforation détachable et souche agrafée",
      "Encollage en tête avec carton intercalaire"
    ],
    "quantities": [
      "10 carnets",
      "25 carnets",
      "50 carnets",
      "100 carnets",
      "250 carnets"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Enveloppes d'Entreprise Personnalisées (DL, C5, C4) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos enveloppes d'entreprise personnalisées (dl, c5, c4) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "etiquette-format-standard",
    "slug": "etiquette-format-standard",
    "title": "Étiquettes Adhésives Formats Standards",
    "categoryId": "etiquettes-adhesifs",
    "categoryName": "Étiquettes & Adhésifs",
    "shortDesc": "Impression professionnelle de étiquettes adhésives formats standards avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos étiquettes adhésives formats standards chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Rond (diamètre 3cm, 4cm, 5cm, 6cm)",
      "Rectangle ou Carré",
      "Découpe personnalisée à la forme (Kiss-cut / Die-cut)"
    ],
    "papers": [
      "Papier adhésif couché permanent",
      "Polypropylène (PP) blanc indéchirable étanche",
      "PP transparent",
      "Vinyle adhésif repositionnable"
    ],
    "finishes": [
      "En bobine / rouleau pour poseuse automatique",
      "En planches A4 prédécoupées",
      "À l'unité découpé mi-chair",
      "Pelliculage brillant protecteur"
    ],
    "quantities": [
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex.",
      "10 000 ex.",
      "25 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Étiquettes Adhésives Formats Standards | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos étiquettes adhésives formats standards au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "etiquette-rouleau-bobine",
    "slug": "etiquette-rouleau-bobine",
    "title": "Étiquettes Adhésives en Rouleau / Bobine",
    "categoryId": "etiquettes-adhesifs",
    "categoryName": "Étiquettes & Adhésifs",
    "shortDesc": "Impression professionnelle de étiquettes adhésives en rouleau / bobine avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos étiquettes adhésives en rouleau / bobine chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Rond (diamètre 3cm, 4cm, 5cm, 6cm)",
      "Rectangle ou Carré",
      "Découpe personnalisée à la forme (Kiss-cut / Die-cut)"
    ],
    "papers": [
      "Papier adhésif couché permanent",
      "Polypropylène (PP) blanc indéchirable étanche",
      "PP transparent",
      "Vinyle adhésif repositionnable"
    ],
    "finishes": [
      "En bobine / rouleau pour poseuse automatique",
      "En planches A4 prédécoupées",
      "À l'unité découpé mi-chair",
      "Pelliculage brillant protecteur"
    ],
    "quantities": [
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex.",
      "10 000 ex.",
      "25 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Étiquettes Adhésives en Rouleau / Bobine | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos étiquettes adhésives en rouleau / bobine au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "etiquette-transparente",
    "slug": "etiquette-transparente",
    "title": "Étiquettes Adhésives Transparentes Découpées",
    "categoryId": "etiquettes-adhesifs",
    "categoryName": "Étiquettes & Adhésifs",
    "shortDesc": "Impression professionnelle de étiquettes adhésives transparentes découpées avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos étiquettes adhésives transparentes découpées chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Rond (diamètre 3cm, 4cm, 5cm, 6cm)",
      "Rectangle ou Carré",
      "Découpe personnalisée à la forme (Kiss-cut / Die-cut)"
    ],
    "papers": [
      "Papier adhésif couché permanent",
      "Polypropylène (PP) blanc indéchirable étanche",
      "PP transparent",
      "Vinyle adhésif repositionnable"
    ],
    "finishes": [
      "En bobine / rouleau pour poseuse automatique",
      "En planches A4 prédécoupées",
      "À l'unité découpé mi-chair",
      "Pelliculage brillant protecteur"
    ],
    "quantities": [
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex.",
      "10 000 ex.",
      "25 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Étiquettes Adhésives Transparentes Découpées | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos étiquettes adhésives transparentes découpées au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "flyer-luxe",
    "slug": "flyer-luxe",
    "title": "Flyers de Prestige (Vernis 3D & Dorure)",
    "categoryId": "flyers-depliants",
    "categoryName": "Flyers & Dépliants",
    "shortDesc": "Impression professionnelle de flyers de prestige (vernis 3d & dorure) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos flyers de prestige (vernis 3d & dorure) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "A5 (14,8 × 21 cm)",
      "A6 (10,5 × 14,8 cm)",
      "A4 (21 × 29,7 cm)",
      "Format DL (10 × 21 cm)",
      "Carré 14 × 14 cm"
    ],
    "papers": [
      "Couché brillant 135g (Économique)",
      "Couché brillant 170g",
      "Couché demi-mat 250g",
      "Cartonné 350g prestige"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat recto ou recto/verso",
      "Pelliculage brillant",
      "Vernis sélectif 3D",
      "Pliage / rainage"
    ],
    "quantities": [
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex.",
      "10 000 ex.",
      "20 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Flyers de Prestige (Vernis 3D & Dorure) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos flyers de prestige (vernis 3d & dorure) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "flyer-standard",
    "slug": "flyer-standard",
    "title": "Flyers & Prospectus Publicitaires Standards",
    "categoryId": "flyers-depliants",
    "categoryName": "Flyers & Dépliants",
    "shortDesc": "Impression professionnelle de flyers & prospectus publicitaires standards avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos flyers & prospectus publicitaires standards chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "A5 (14,8 × 21 cm)",
      "A6 (10,5 × 14,8 cm)",
      "A4 (21 × 29,7 cm)",
      "Format DL (10 × 21 cm)",
      "Carré 14 × 14 cm"
    ],
    "papers": [
      "Couché brillant 135g (Économique)",
      "Couché brillant 170g",
      "Couché demi-mat 250g",
      "Cartonné 350g prestige"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat recto ou recto/verso",
      "Pelliculage brillant",
      "Vernis sélectif 3D",
      "Pliage / rainage"
    ],
    "quantities": [
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex.",
      "10 000 ex.",
      "20 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Flyers & Prospectus Publicitaires Standards | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos flyers & prospectus publicitaires standards au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "flyer-sur-mesure",
    "slug": "flyer-sur-mesure",
    "title": "Flyers Découpés sur Mesure",
    "categoryId": "flyers-depliants",
    "categoryName": "Flyers & Dépliants",
    "shortDesc": "Impression professionnelle de flyers découpés sur mesure avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos flyers découpés sur mesure chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "A5 (14,8 × 21 cm)",
      "A6 (10,5 × 14,8 cm)",
      "A4 (21 × 29,7 cm)",
      "Format DL (10 × 21 cm)",
      "Carré 14 × 14 cm"
    ],
    "papers": [
      "Couché brillant 135g (Économique)",
      "Couché brillant 170g",
      "Couché demi-mat 250g",
      "Cartonné 350g prestige"
    ],
    "finishes": [
      "Sans pelliculage",
      "Pelliculage mat recto ou recto/verso",
      "Pelliculage brillant",
      "Vernis sélectif 3D",
      "Pliage / rainage"
    ],
    "quantities": [
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex.",
      "10 000 ex.",
      "20 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Flyers Découpés sur Mesure | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos flyers découpés sur mesure au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "goodies-ecologiques-bambou",
    "slug": "goodies-ecologiques-bambou",
    "title": "Goodies Écologiques en Bambou, Liège & Matières Recyclées",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de goodies écologiques en bambou, liège & matières recyclées avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos goodies écologiques en bambou, liège & matières recyclées chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Goodies Écologiques en Bambou, Liège & Matières Recyclées | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos goodies écologiques en bambou, liège & matières recyclées au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "goodies-ete-plage",
    "slug": "goodies-ete-plage",
    "title": "Goodies d'Été & Articles de Plage Publicitaires",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de goodies d'été & articles de plage publicitaires avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos goodies d'été & articles de plage publicitaires chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Goodies d'Été & Articles de Plage Publicitaires | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos goodies d'été & articles de plage publicitaires au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "gourde-bouteille-isotherme",
    "slug": "gourde-bouteille-isotherme",
    "title": "Gourdes & Bouteilles Isothermes en Inox Gravées",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de gourdes & bouteilles isothermes en inox gravées avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos gourdes & bouteilles isothermes en inox gravées chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Gourdes & Bouteilles Isothermes en Inox Gravées | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos gourdes & bouteilles isothermes en inox gravées au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "jeu-de-cartes-personnalise",
    "slug": "jeu-de-cartes-personnalise",
    "title": "Jeux de Cartes Personnalisés sous Étui Imprimé",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de jeux de cartes personnalisés sous étui imprimé avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos jeux de cartes personnalisés sous étui imprimé chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Jeux de Cartes Personnalisés sous Étui Imprimé | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos jeux de cartes personnalisés sous étui imprimé au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "livre-edition",
    "slug": "livre-edition",
    "title": "Livres & Éditions Reliées (Couverture Souple ou Rigide)",
    "categoryId": "catalogues-brochures",
    "categoryName": "Catalogues & Brochures",
    "shortDesc": "Impression professionnelle de livres & éditions reliées (couverture souple ou rigide) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos livres & éditions reliées (couverture souple ou rigide) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-brochures.webp",
    "formats": [
      "A4 portrait (21 × 29,7 cm)",
      "A5 portrait (14,8 × 21 cm)",
      "A4 paysage à l'italienne",
      "Carré 21 × 21 cm"
    ],
    "papers": [
      "Intérieur couché mat ou brillant 135g/170g",
      "Couverture cartonnée 300g ou 350g pelliculée"
    ],
    "finishes": [
      "Piqûre 2 points métal (agrafes)",
      "Dos carré collé PUR",
      "Reliure spirale métallique Wire-O",
      "Pelliculage soft-touch"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Livres & Éditions Reliées (Couverture Souple ou Rigide) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos livres & éditions reliées (couverture souple ou rigide) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "magnet-photo",
    "slug": "magnet-photo",
    "title": "Magnets Photos pour Frigo & Supports Métalliques",
    "categoryId": "souvenirs-photos",
    "categoryName": "Souvenirs Photos",
    "shortDesc": "Impression professionnelle de magnets photos pour frigo & supports métalliques avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos magnets photos pour frigo & supports métalliques chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-luxe.webp",
    "formats": [
      "Formats standards photo : 20×30 cm, 30×40 cm, 50×70 cm, 70×100 cm",
      "Mug 325 ml",
      "Magnets frigo souples"
    ],
    "papers": [
      "Véritable toile canvas coton 380g",
      "Châssis bois en pin massif 2cm ou 4cm",
      "Céramique blanche AAA haute brillance"
    ],
    "finishes": [
      "Impression encres pigmentaires haute fidélité",
      "Vernis de protection UV",
      "Boîte cadeau individuelle"
    ],
    "quantities": [
      "1 pièce",
      "5 pièces",
      "20 pièces",
      "100 pièces (cadeaux d'entreprise)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Magnets Photos pour Frigo & Supports Métalliques | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos magnets photos pour frigo & supports métalliques au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "marquage-textile-pro",
    "slug": "marquage-textile-pro",
    "title": "Marquage Textile Professionnel & Sérigraphie",
    "categoryId": "supports-souples",
    "categoryName": "Supports Souples",
    "shortDesc": "Impression professionnelle de marquage textile professionnel & sérigraphie avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos marquage textile professionnel & sérigraphie chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-bache.webp",
    "formats": [
      "Largeur jusqu'à 3,20 m sans raccord",
      "Longueur sur mesure",
      "Découpe carrée ou à la forme"
    ],
    "papers": [
      "Bâche PVC 510g enduite",
      "Bâche microperforée Mesh coupe-vent",
      "Vinyle adhésif monomère ou polymère",
      "Vinyle microperforé One-Way"
    ],
    "finishes": [
      "Oeillets métalliques périphériques tous les 50 cm",
      "Ourlet de renfort thermo-soudé",
      "Fourreaux haut et bas",
      "Lamination anti-UV"
    ],
    "quantities": [
      "1 pièce sur mesure",
      "Grandes séries événementielles"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Marquage Textile Professionnel & Sérigraphie | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos marquage textile professionnel & sérigraphie au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "menu-restaurant-plastifie-rigide",
    "slug": "menu-restaurant-plastifie-rigide",
    "title": "Menus Restaurant Plastifiés Rigides Encapsulés Lavables",
    "categoryId": "menus-restaurant",
    "categoryName": "Menus Restaurant",
    "shortDesc": "Impression professionnelle de menus restaurant plastifiés rigides encapsulés lavables avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos menus restaurant plastifiés rigides encapsulés lavables chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-restaurants.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A3 (29,7 × 42 cm)",
      "Format étroit 14 × 29,7 cm",
      "Sets de table 30 × 42 cm"
    ],
    "papers": [
      "Papier indéchirable résistant à l'eau Synaps",
      "Papier offset 90g pour sets de table",
      "Carton 350g avec encapsulage rigide 125 microns"
    ],
    "finishes": [
      "Encapsulage brillant ou mat lavable",
      "Pelliculage antibactérien",
      "Coins arrondis hygiéniques",
      "Rainage pour pliage facile"
    ],
    "quantities": [
      "25 ex.",
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex. (Sets jetables : 2 500 ex. à 10 000 ex.)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Menus Restaurant Plastifiés Rigides Encapsulés Lavables | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos menus restaurant plastifiés rigides encapsulés lavables au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "menu-restaurant-plie",
    "slug": "menu-restaurant-plie",
    "title": "Menus Restaurant Pliés 2 ou 3 Volets",
    "categoryId": "menus-restaurant",
    "categoryName": "Menus Restaurant",
    "shortDesc": "Impression professionnelle de menus restaurant pliés 2 ou 3 volets avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos menus restaurant pliés 2 ou 3 volets chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-restaurants.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A3 (29,7 × 42 cm)",
      "Format étroit 14 × 29,7 cm",
      "Sets de table 30 × 42 cm"
    ],
    "papers": [
      "Papier indéchirable résistant à l'eau Synaps",
      "Papier offset 90g pour sets de table",
      "Carton 350g avec encapsulage rigide 125 microns"
    ],
    "finishes": [
      "Encapsulage brillant ou mat lavable",
      "Pelliculage antibactérien",
      "Coins arrondis hygiéniques",
      "Rainage pour pliage facile"
    ],
    "quantities": [
      "25 ex.",
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex. (Sets jetables : 2 500 ex. à 10 000 ex.)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Menus Restaurant Pliés 2 ou 3 Volets | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos menus restaurant pliés 2 ou 3 volets au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "menu-restaurant-standard",
    "slug": "menu-restaurant-standard",
    "title": "Menus Restaurant Standards Indéchirables ou Pelliculés",
    "categoryId": "menus-restaurant",
    "categoryName": "Menus Restaurant",
    "shortDesc": "Impression professionnelle de menus restaurant standards indéchirables ou pelliculés avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos menus restaurant standards indéchirables ou pelliculés chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-restaurants.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A3 (29,7 × 42 cm)",
      "Format étroit 14 × 29,7 cm",
      "Sets de table 30 × 42 cm"
    ],
    "papers": [
      "Papier indéchirable résistant à l'eau Synaps",
      "Papier offset 90g pour sets de table",
      "Carton 350g avec encapsulage rigide 125 microns"
    ],
    "finishes": [
      "Encapsulage brillant ou mat lavable",
      "Pelliculage antibactérien",
      "Coins arrondis hygiéniques",
      "Rainage pour pliage facile"
    ],
    "quantities": [
      "25 ex.",
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex. (Sets jetables : 2 500 ex. à 10 000 ex.)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Menus Restaurant Standards Indéchirables ou Pelliculés | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos menus restaurant standards indéchirables ou pelliculés au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "mug-personnalise",
    "slug": "mug-personnalise",
    "title": "Mugs Photos & Tasses Personnalisées en Céramique",
    "categoryId": "souvenirs-photos",
    "categoryName": "Souvenirs Photos",
    "shortDesc": "Impression professionnelle de mugs photos & tasses personnalisées en céramique avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos mugs photos & tasses personnalisées en céramique chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-luxe.webp",
    "formats": [
      "Formats standards photo : 20×30 cm, 30×40 cm, 50×70 cm, 70×100 cm",
      "Mug 325 ml",
      "Magnets frigo souples"
    ],
    "papers": [
      "Véritable toile canvas coton 380g",
      "Châssis bois en pin massif 2cm ou 4cm",
      "Céramique blanche AAA haute brillance"
    ],
    "finishes": [
      "Impression encres pigmentaires haute fidélité",
      "Vernis de protection UV",
      "Boîte cadeau individuelle"
    ],
    "quantities": [
      "1 pièce",
      "5 pièces",
      "20 pièces",
      "100 pièces (cadeaux d'entreprise)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Mugs Photos & Tasses Personnalisées en Céramique | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos mugs photos & tasses personnalisées en céramique au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "ordonnance-medicale",
    "slug": "ordonnance-medicale",
    "title": "Ordonnances Médicales Sécurisées A5",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de ordonnances médicales sécurisées a5 avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos ordonnances médicales sécurisées a5 chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-carnets.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A5 (14,8 × 21 cm)",
      "A6 (10,5 × 14,8 cm)",
      "Enveloppes DL (11 × 22 cm), C5 (16,2 × 22,9 cm), C4 (22,9 × 32,4 cm)"
    ],
    "papers": [
      "Autocopiant NCR 60g (Blanc / Jaune / Rose)",
      "Offset blanc laser garanti 90g et 100g",
      "Papier vergé filigrané"
    ],
    "finishes": [
      "Duplicata (2 feuillets) ou Triplicata (3 feuillets)",
      "Numérotation séquentielle consécutive",
      "Perforation détachable et souche agrafée",
      "Encollage en tête avec carton intercalaire"
    ],
    "quantities": [
      "10 carnets",
      "25 carnets",
      "50 carnets",
      "100 carnets",
      "250 carnets"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Ordonnances Médicales Sécurisées A5 | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos ordonnances médicales sécurisées a5 au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "packaging-alimentaire",
    "slug": "packaging-alimentaire",
    "title": "Packaging & Boîtes Alimentaires Certifiées",
    "categoryId": "boites-packaging",
    "categoryName": "Boîtes & Packaging",
    "shortDesc": "Impression professionnelle de packaging & boîtes alimentaires certifiées avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos packaging & boîtes alimentaires certifiées chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Petits étuis produits",
      "Moyennes boîtes pliantes",
      "Grandes boîtes d'expédition",
      "Sur mesure selon gabarit"
    ],
    "papers": [
      "Carton compact SBS 300g à 400g",
      "Carton kraft brun naturel",
      "Micro-cannelure ondulée E/F",
      "Carton contact alimentaire certifié"
    ],
    "finishes": [
      "Découpe à la forme personnalisée",
      "Pelliculage mat anti-rayures",
      "Vernis UV sélectif",
      "Dorure à chaud",
      "Fenêtre PVC transparente"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Packaging & Boîtes Alimentaires Certifiées | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos packaging & boîtes alimentaires certifiées au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "panneau-aluminium-dibond",
    "slug": "panneau-aluminium-dibond",
    "title": "Panneaux Aluminium Composite Dibond Haute Rigidité",
    "categoryId": "supports-rigides",
    "categoryName": "Supports Rigides",
    "shortDesc": "Impression professionnelle de panneaux aluminium composite dibond haute rigidité avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos panneaux aluminium composite dibond haute rigidité chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "Forex 3mm, 5mm, 10mm",
      "Aluminium Dibond composite 3mm",
      "Plexiglas coulé transparent 5mm / 8mm",
      "Akylux alvéolaire 3,5mm"
    ],
    "papers": [
      "Impression directe UV à plat",
      "Contrecollage vinyle polymère haute durabilité avec plastification protectrice"
    ],
    "finishes": [
      "Découpe numérique fraisée",
      "Perforation aux 4 coins",
      "Entretoises murales inox",
      "Pieds de lestage pour drapeaux"
    ],
    "quantities": [
      "À l'unité",
      "5 à 20 ex.",
      "Grandes quantités pour chantiers et réseaux"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Panneaux Aluminium Composite Dibond Haute Rigidité | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos panneaux aluminium composite dibond haute rigidité au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "panneau-forex-pvc",
    "slug": "panneau-forex-pvc",
    "title": "Panneaux Forex PVC Expansé (3mm / 5mm / 10mm)",
    "categoryId": "supports-rigides",
    "categoryName": "Supports Rigides",
    "shortDesc": "Impression professionnelle de panneaux forex pvc expansé (3mm / 5mm / 10mm) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos panneaux forex pvc expansé (3mm / 5mm / 10mm) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "Forex 3mm, 5mm, 10mm",
      "Aluminium Dibond composite 3mm",
      "Plexiglas coulé transparent 5mm / 8mm",
      "Akylux alvéolaire 3,5mm"
    ],
    "papers": [
      "Impression directe UV à plat",
      "Contrecollage vinyle polymère haute durabilité avec plastification protectrice"
    ],
    "finishes": [
      "Découpe numérique fraisée",
      "Perforation aux 4 coins",
      "Entretoises murales inox",
      "Pieds de lestage pour drapeaux"
    ],
    "quantities": [
      "À l'unité",
      "5 à 20 ex.",
      "Grandes quantités pour chantiers et réseaux"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Panneaux Forex PVC Expansé (3mm / 5mm / 10mm) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos panneaux forex pvc expansé (3mm / 5mm / 10mm) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "panneau-plexiglas",
    "slug": "panneau-plexiglas",
    "title": "Plaques & Panneaux Plexiglas Transparent ou Dépoli",
    "categoryId": "supports-rigides",
    "categoryName": "Supports Rigides",
    "shortDesc": "Impression professionnelle de plaques & panneaux plexiglas transparent ou dépoli avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos plaques & panneaux plexiglas transparent ou dépoli chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "Forex 3mm, 5mm, 10mm",
      "Aluminium Dibond composite 3mm",
      "Plexiglas coulé transparent 5mm / 8mm",
      "Akylux alvéolaire 3,5mm"
    ],
    "papers": [
      "Impression directe UV à plat",
      "Contrecollage vinyle polymère haute durabilité avec plastification protectrice"
    ],
    "finishes": [
      "Découpe numérique fraisée",
      "Perforation aux 4 coins",
      "Entretoises murales inox",
      "Pieds de lestage pour drapeaux"
    ],
    "quantities": [
      "À l'unité",
      "5 à 20 ex.",
      "Grandes quantités pour chantiers et réseaux"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Plaques & Panneaux Plexiglas Transparent ou Dépoli | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos plaques & panneaux plexiglas transparent ou dépoli au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "papier-cadeau-soie",
    "slug": "papier-cadeau-soie",
    "title": "Papier Cadeau & Papier de Soie Personnalisé",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de papier cadeau & papier de soie personnalisé avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos papier cadeau & papier de soie personnalisé chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Papier Cadeau & Papier de Soie Personnalisé | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos papier cadeau & papier de soie personnalisé au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "papier-en-tete",
    "slug": "papier-en-tete",
    "title": "Papier En-tête Professionnel A4",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de papier en-tête professionnel a4 avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos papier en-tête professionnel a4 chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-carnets.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A5 (14,8 × 21 cm)",
      "A6 (10,5 × 14,8 cm)",
      "Enveloppes DL (11 × 22 cm), C5 (16,2 × 22,9 cm), C4 (22,9 × 32,4 cm)"
    ],
    "papers": [
      "Autocopiant NCR 60g (Blanc / Jaune / Rose)",
      "Offset blanc laser garanti 90g et 100g",
      "Papier vergé filigrané"
    ],
    "finishes": [
      "Duplicata (2 feuillets) ou Triplicata (3 feuillets)",
      "Numérotation séquentielle consécutive",
      "Perforation détachable et souche agrafée",
      "Encollage en tête avec carton intercalaire"
    ],
    "quantities": [
      "10 carnets",
      "25 carnets",
      "50 carnets",
      "100 carnets",
      "250 carnets"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Papier En-tête Professionnel A4 | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos papier en-tête professionnel a4 au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "papier-peint-personnalise",
    "slug": "papier-peint-personnalise",
    "title": "Papier Peint Décoratif Personnalisé sans Raccord",
    "categoryId": "supports-souples",
    "categoryName": "Supports Souples",
    "shortDesc": "Impression professionnelle de papier peint décoratif personnalisé sans raccord avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos papier peint décoratif personnalisé sans raccord chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-bache.webp",
    "formats": [
      "Largeur jusqu'à 3,20 m sans raccord",
      "Longueur sur mesure",
      "Découpe carrée ou à la forme"
    ],
    "papers": [
      "Bâche PVC 510g enduite",
      "Bâche microperforée Mesh coupe-vent",
      "Vinyle adhésif monomère ou polymère",
      "Vinyle microperforé One-Way"
    ],
    "finishes": [
      "Oeillets métalliques périphériques tous les 50 cm",
      "Ourlet de renfort thermo-soudé",
      "Fourreaux haut et bas",
      "Lamination anti-UV"
    ],
    "quantities": [
      "1 pièce sur mesure",
      "Grandes séries événementielles"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Papier Peint Décoratif Personnalisé sans Raccord | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos papier peint décoratif personnalisé sans raccord au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "pare-soleil-voiture",
    "slug": "pare-soleil-voiture",
    "title": "Pare-soleil de Voiture Publicitaires Pliables",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de pare-soleil de voiture publicitaires pliables avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos pare-soleil de voiture publicitaires pliables chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Pare-soleil de Voiture Publicitaires Pliables | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos pare-soleil de voiture publicitaires pliables au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "photocall-mur-image",
    "slug": "photocall-mur-image",
    "title": "Murs d'Image Photocall Événementiels",
    "categoryId": "roll-ups-plv",
    "categoryName": "Roll-ups & PLV",
    "shortDesc": "Impression professionnelle de murs d'image photocall événementiels avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos murs d'image photocall événementiels chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/hero-main-hd.png",
    "formats": [
      "85 × 200 cm (Standard)",
      "100 × 200 cm",
      "120 × 200 cm",
      "150 × 200 cm",
      "Photocall 240 × 240 cm / 300 × 240 cm"
    ],
    "papers": [
      "Bâche PVC 450g M1 anti-incurvation",
      "Tissu polyester stretch anti-reflet",
      "Polypropylène dos gris occultant"
    ],
    "finishes": [
      "Structure aluminium anodisé avec pieds pivotants",
      "Sac de transport matelassé inclus",
      "Double face",
      "Montage prêt à l'emploi"
    ],
    "quantities": [
      "1 ex.",
      "2 ex.",
      "5 ex.",
      "10 ex.",
      "25 ex.",
      "50 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Murs d'Image Photocall Événementiels | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos murs d'image photocall événementiels au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "plan-architecture",
    "slug": "plan-architecture",
    "title": "Tirage de Plans d'Architecture & DAO",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de tirage de plans d'architecture & dao avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos tirage de plans d'architecture & dao chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Tirage de Plans d'Architecture & DAO | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos tirage de plans d'architecture & dao au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "plan-grand-format",
    "slug": "plan-grand-format",
    "title": "Plans Grand Format Haute Précision Technique",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de plans grand format haute précision technique avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos plans grand format haute précision technique chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Plans Grand Format Haute Précision Technique | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos plans grand format haute précision technique au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "planner-agenda",
    "slug": "planner-agenda",
    "title": "Planners, Semainiers & Agendas d'Entreprise",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de planners, semainiers & agendas d'entreprise avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos planners, semainiers & agendas d'entreprise chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Planners, Semainiers & Agendas d'Entreprise | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos planners, semainiers & agendas d'entreprise au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "plaque-magnetique",
    "slug": "plaque-magnetique",
    "title": "Plaques Magnétiques Amovibles pour Véhicules",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de plaques magnétiques amovibles pour véhicules avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos plaques magnétiques amovibles pour véhicules chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Plaques Magnétiques Amovibles pour Véhicules | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos plaques magnétiques amovibles pour véhicules au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "plaque-professionnelle",
    "slug": "plaque-professionnelle",
    "title": "Plaques Professionnelles Gravées (Médecins, Avocats, Notaires)",
    "categoryId": "supports-rigides",
    "categoryName": "Supports Rigides",
    "shortDesc": "Impression professionnelle de plaques professionnelles gravées (médecins, avocats, notaires) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos plaques professionnelles gravées (médecins, avocats, notaires) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "Forex 3mm, 5mm, 10mm",
      "Aluminium Dibond composite 3mm",
      "Plexiglas coulé transparent 5mm / 8mm",
      "Akylux alvéolaire 3,5mm"
    ],
    "papers": [
      "Impression directe UV à plat",
      "Contrecollage vinyle polymère haute durabilité avec plastification protectrice"
    ],
    "finishes": [
      "Découpe numérique fraisée",
      "Perforation aux 4 coins",
      "Entretoises murales inox",
      "Pieds de lestage pour drapeaux"
    ],
    "quantities": [
      "À l'unité",
      "5 à 20 ex.",
      "Grandes quantités pour chantiers et réseaux"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Plaques Professionnelles Gravées (Médecins, Avocats, Notaires) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos plaques professionnelles gravées (médecins, avocats, notaires) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "plv-exterieur-stop-trottoir",
    "slug": "plv-exterieur-stop-trottoir",
    "title": "Stop-trottoirs & PLV Extérieure Résistante aux Intempéries",
    "categoryId": "roll-ups-plv",
    "categoryName": "Roll-ups & PLV",
    "shortDesc": "Impression professionnelle de stop-trottoirs & plv extérieure résistante aux intempéries avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos stop-trottoirs & plv extérieure résistante aux intempéries chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/hero-main-hd.png",
    "formats": [
      "85 × 200 cm (Standard)",
      "100 × 200 cm",
      "120 × 200 cm",
      "150 × 200 cm",
      "Photocall 240 × 240 cm / 300 × 240 cm"
    ],
    "papers": [
      "Bâche PVC 450g M1 anti-incurvation",
      "Tissu polyester stretch anti-reflet",
      "Polypropylène dos gris occultant"
    ],
    "finishes": [
      "Structure aluminium anodisé avec pieds pivotants",
      "Sac de transport matelassé inclus",
      "Double face",
      "Montage prêt à l'emploi"
    ],
    "quantities": [
      "1 ex.",
      "2 ex.",
      "5 ex.",
      "10 ex.",
      "25 ex.",
      "50 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Stop-trottoirs & PLV Extérieure Résistante aux Intempéries | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos stop-trottoirs & plv extérieure résistante aux intempéries au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "plv-plexiglas",
    "slug": "plv-plexiglas",
    "title": "Présentoirs & Porte-visuels en Plexiglas Transparent",
    "categoryId": "roll-ups-plv",
    "categoryName": "Roll-ups & PLV",
    "shortDesc": "Impression professionnelle de présentoirs & porte-visuels en plexiglas transparent avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos présentoirs & porte-visuels en plexiglas transparent chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/hero-main-hd.png",
    "formats": [
      "85 × 200 cm (Standard)",
      "100 × 200 cm",
      "120 × 200 cm",
      "150 × 200 cm",
      "Photocall 240 × 240 cm / 300 × 240 cm"
    ],
    "papers": [
      "Bâche PVC 450g M1 anti-incurvation",
      "Tissu polyester stretch anti-reflet",
      "Polypropylène dos gris occultant"
    ],
    "finishes": [
      "Structure aluminium anodisé avec pieds pivotants",
      "Sac de transport matelassé inclus",
      "Double face",
      "Montage prêt à l'emploi"
    ],
    "quantities": [
      "1 ex.",
      "2 ex.",
      "5 ex.",
      "10 ex.",
      "25 ex.",
      "50 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Présentoirs & Porte-visuels en Plexiglas Transparent | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos présentoirs & porte-visuels en plexiglas transparent au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "pochette-couverts-serviette",
    "slug": "pochette-couverts-serviette",
    "title": "Pochettes à Couverts & Ronds de Serviette Personnalisés",
    "categoryId": "menus-restaurant",
    "categoryName": "Menus Restaurant",
    "shortDesc": "Impression professionnelle de pochettes à couverts & ronds de serviette personnalisés avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos pochettes à couverts & ronds de serviette personnalisés chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-restaurants.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A3 (29,7 × 42 cm)",
      "Format étroit 14 × 29,7 cm",
      "Sets de table 30 × 42 cm"
    ],
    "papers": [
      "Papier indéchirable résistant à l'eau Synaps",
      "Papier offset 90g pour sets de table",
      "Carton 350g avec encapsulage rigide 125 microns"
    ],
    "finishes": [
      "Encapsulage brillant ou mat lavable",
      "Pelliculage antibactérien",
      "Coins arrondis hygiéniques",
      "Rainage pour pliage facile"
    ],
    "quantities": [
      "25 ex.",
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex. (Sets jetables : 2 500 ex. à 10 000 ex.)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Pochettes à Couverts & Ronds de Serviette Personnalisés | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos pochettes à couverts & ronds de serviette personnalisés au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "pochette-etui-packaging",
    "slug": "pochette-etui-packaging",
    "title": "Pochettes & Fourreaux Produits sur Mesure",
    "categoryId": "boites-packaging",
    "categoryName": "Boîtes & Packaging",
    "shortDesc": "Impression professionnelle de pochettes & fourreaux produits sur mesure avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos pochettes & fourreaux produits sur mesure chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Petits étuis produits",
      "Moyennes boîtes pliantes",
      "Grandes boîtes d'expédition",
      "Sur mesure selon gabarit"
    ],
    "papers": [
      "Carton compact SBS 300g à 400g",
      "Carton kraft brun naturel",
      "Micro-cannelure ondulée E/F",
      "Carton contact alimentaire certifié"
    ],
    "finishes": [
      "Découpe à la forme personnalisée",
      "Pelliculage mat anti-rayures",
      "Vernis UV sélectif",
      "Dorure à chaud",
      "Fenêtre PVC transparente"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Pochettes & Fourreaux Produits sur Mesure | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos pochettes & fourreaux produits sur mesure au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "porte-affiche-cadre",
    "slug": "porte-affiche-cadre",
    "title": "Porte-affiches & Cadres Clippants Aluminium",
    "categoryId": "affiches-posters",
    "categoryName": "Affiches & Posters",
    "shortDesc": "Impression professionnelle de porte-affiches & cadres clippants aluminium avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos porte-affiches & cadres clippants aluminium chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "A3 (29,7 × 42 cm)",
      "A2 (42 × 59,4 cm)",
      "A1 (59,4 × 84,1 cm)",
      "A0 (84,1 × 118,9 cm)",
      "Grand format abribus 120 × 176 cm"
    ],
    "papers": [
      "Couché brillant 135g",
      "Couché demi-mat 170g",
      "Papier photo satiné 200g HD",
      "Papier dos bleu pour encollage urbain"
    ],
    "finishes": [
      "Brut massicoté",
      "Plastification encapsulée mate ou brillante",
      "Montage sur cadre clippant aluminium"
    ],
    "quantities": [
      "1 à 10 ex. (Numérique express)",
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex. (Offset)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Porte-affiches & Cadres Clippants Aluminium | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos porte-affiches & cadres clippants aluminium au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "porte-carte-publicitaire",
    "slug": "porte-carte-publicitaire",
    "title": "Porte-cartes de Visite & Étuis Anti-RFID",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de porte-cartes de visite & étuis anti-rfid avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos porte-cartes de visite & étuis anti-rfid chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Porte-cartes de Visite & Étuis Anti-RFID | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos porte-cartes de visite & étuis anti-rfid au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "porte-cle-personnalise",
    "slug": "porte-cle-personnalise",
    "title": "Porte-clés Publicitaires Métal, Acrylique & Cuir",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de porte-clés publicitaires métal, acrylique & cuir avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos porte-clés publicitaires métal, acrylique & cuir chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Porte-clés Publicitaires Métal, Acrylique & Cuir | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos porte-clés publicitaires métal, acrylique & cuir au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "power-bank-personnalise",
    "slug": "power-bank-personnalise",
    "title": "Batteries Externes Power Banks Personnalisées",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de batteries externes power banks personnalisées avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos batteries externes power banks personnalisées chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Batteries Externes Power Banks Personnalisées | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos batteries externes power banks personnalisées au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "presentoir-carton",
    "slug": "presentoir-carton",
    "title": "Présentoirs PLV en Carton de Sol et Comptoir",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de présentoirs plv en carton de sol et comptoir avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos présentoirs plv en carton de sol et comptoir chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Présentoirs PLV en Carton de Sol et Comptoir | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos présentoirs plv en carton de sol et comptoir au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "protege-menu-carnet-addition",
    "slug": "protege-menu-carnet-addition",
    "title": "Protège-menus Rigides & Porte-additions Similicuir",
    "categoryId": "menus-restaurant",
    "categoryName": "Menus Restaurant",
    "shortDesc": "Impression professionnelle de protège-menus rigides & porte-additions similicuir avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos protège-menus rigides & porte-additions similicuir chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-restaurants.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A3 (29,7 × 42 cm)",
      "Format étroit 14 × 29,7 cm",
      "Sets de table 30 × 42 cm"
    ],
    "papers": [
      "Papier indéchirable résistant à l'eau Synaps",
      "Papier offset 90g pour sets de table",
      "Carton 350g avec encapsulage rigide 125 microns"
    ],
    "finishes": [
      "Encapsulage brillant ou mat lavable",
      "Pelliculage antibactérien",
      "Coins arrondis hygiéniques",
      "Rainage pour pliage facile"
    ],
    "quantities": [
      "25 ex.",
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex. (Sets jetables : 2 500 ex. à 10 000 ex.)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Protège-menus Rigides & Porte-additions Similicuir | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos protège-menus rigides & porte-additions similicuir au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "puzzle-personnalise",
    "slug": "puzzle-personnalise",
    "title": "Puzzles Personnalisés Promotionnels",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de puzzles personnalisés promotionnels avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos puzzles personnalisés promotionnels chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Puzzles Personnalisés Promotionnels | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos puzzles personnalisés promotionnels au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "rapport-activite-wire-o",
    "slug": "rapport-activite-wire-o",
    "title": "Rapports Annuels & Bilans Reliure Spirale Wire-O",
    "categoryId": "catalogues-brochures",
    "categoryName": "Catalogues & Brochures",
    "shortDesc": "Impression professionnelle de rapports annuels & bilans reliure spirale wire-o avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos rapports annuels & bilans reliure spirale wire-o chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-brochures.webp",
    "formats": [
      "A4 portrait (21 × 29,7 cm)",
      "A5 portrait (14,8 × 21 cm)",
      "A4 paysage à l'italienne",
      "Carré 21 × 21 cm"
    ],
    "papers": [
      "Intérieur couché mat ou brillant 135g/170g",
      "Couverture cartonnée 300g ou 350g pelliculée"
    ],
    "finishes": [
      "Piqûre 2 points métal (agrafes)",
      "Dos carré collé PUR",
      "Reliure spirale métallique Wire-O",
      "Pelliculage soft-touch"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Rapports Annuels & Bilans Reliure Spirale Wire-O | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos rapports annuels & bilans reliure spirale wire-o au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "roll-up-luxe-double-face",
    "slug": "roll-up-luxe-double-face",
    "title": "Roll-Up Luxe & Banners Double Face",
    "categoryId": "roll-ups-plv",
    "categoryName": "Roll-ups & PLV",
    "shortDesc": "Impression professionnelle de roll-up luxe & banners double face avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos roll-up luxe & banners double face chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/hero-main-hd.png",
    "formats": [
      "85 × 200 cm (Standard)",
      "100 × 200 cm",
      "120 × 200 cm",
      "150 × 200 cm",
      "Photocall 240 × 240 cm / 300 × 240 cm"
    ],
    "papers": [
      "Bâche PVC 450g M1 anti-incurvation",
      "Tissu polyester stretch anti-reflet",
      "Polypropylène dos gris occultant"
    ],
    "finishes": [
      "Structure aluminium anodisé avec pieds pivotants",
      "Sac de transport matelassé inclus",
      "Double face",
      "Montage prêt à l'emploi"
    ],
    "quantities": [
      "1 ex.",
      "2 ex.",
      "5 ex.",
      "10 ex.",
      "25 ex.",
      "50 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Roll-Up Luxe & Banners Double Face | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos roll-up luxe & banners double face au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "roll-up-standard",
    "slug": "roll-up-standard",
    "title": "Roll-Up Banners Rétractables Standards avec Housse",
    "categoryId": "roll-ups-plv",
    "categoryName": "Roll-ups & PLV",
    "shortDesc": "Impression professionnelle de roll-up banners rétractables standards avec housse avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos roll-up banners rétractables standards avec housse chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/hero-main-hd.png",
    "formats": [
      "85 × 200 cm (Standard)",
      "100 × 200 cm",
      "120 × 200 cm",
      "150 × 200 cm",
      "Photocall 240 × 240 cm / 300 × 240 cm"
    ],
    "papers": [
      "Bâche PVC 450g M1 anti-incurvation",
      "Tissu polyester stretch anti-reflet",
      "Polypropylène dos gris occultant"
    ],
    "finishes": [
      "Structure aluminium anodisé avec pieds pivotants",
      "Sac de transport matelassé inclus",
      "Double face",
      "Montage prêt à l'emploi"
    ],
    "quantities": [
      "1 ex.",
      "2 ex.",
      "5 ex.",
      "10 ex.",
      "25 ex.",
      "50 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Roll-Up Banners Rétractables Standards avec Housse | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos roll-up banners rétractables standards avec housse au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "ruban-adhesif-scotch",
    "slug": "ruban-adhesif-scotch",
    "title": "Ruban Adhésif & Scotch Personnalisé avec Logo",
    "categoryId": "etiquettes-adhesifs",
    "categoryName": "Étiquettes & Adhésifs",
    "shortDesc": "Impression professionnelle de ruban adhésif & scotch personnalisé avec logo avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos ruban adhésif & scotch personnalisé avec logo chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Rond (diamètre 3cm, 4cm, 5cm, 6cm)",
      "Rectangle ou Carré",
      "Découpe personnalisée à la forme (Kiss-cut / Die-cut)"
    ],
    "papers": [
      "Papier adhésif couché permanent",
      "Polypropylène (PP) blanc indéchirable étanche",
      "PP transparent",
      "Vinyle adhésif repositionnable"
    ],
    "finishes": [
      "En bobine / rouleau pour poseuse automatique",
      "En planches A4 prédécoupées",
      "À l'unité découpé mi-chair",
      "Pelliculage brillant protecteur"
    ],
    "quantities": [
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex.",
      "10 000 ex.",
      "25 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Ruban Adhésif & Scotch Personnalisé avec Logo | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos ruban adhésif & scotch personnalisé avec logo au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "sac-a-dos-promotionnel",
    "slug": "sac-a-dos-promotionnel",
    "title": "Sacs à Dos & Sacoches Ordinateur Promotionnels",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de sacs à dos & sacoches ordinateur promotionnels avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos sacs à dos & sacoches ordinateur promotionnels chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Sacs à Dos & Sacoches Ordinateur Promotionnels | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos sacs à dos & sacoches ordinateur promotionnels au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "sac-cartonne-boutique",
    "slug": "sac-cartonne-boutique",
    "title": "Sacs Boutique en Papier & Carton avec Poignées Cordelette",
    "categoryId": "boites-packaging",
    "categoryName": "Boîtes & Packaging",
    "shortDesc": "Impression professionnelle de sacs boutique en papier & carton avec poignées cordelette avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos sacs boutique en papier & carton avec poignées cordelette chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Petits étuis produits",
      "Moyennes boîtes pliantes",
      "Grandes boîtes d'expédition",
      "Sur mesure selon gabarit"
    ],
    "papers": [
      "Carton compact SBS 300g à 400g",
      "Carton kraft brun naturel",
      "Micro-cannelure ondulée E/F",
      "Carton contact alimentaire certifié"
    ],
    "finishes": [
      "Découpe à la forme personnalisée",
      "Pelliculage mat anti-rayures",
      "Vernis UV sélectif",
      "Dorure à chaud",
      "Fenêtre PVC transparente"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Sacs Boutique en Papier & Carton avec Poignées Cordelette | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos sacs boutique en papier & carton avec poignées cordelette au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "set-de-table-restaurant",
    "slug": "set-de-table-restaurant",
    "title": "Sets de Table en Papier Personnalisés Jetables",
    "categoryId": "menus-restaurant",
    "categoryName": "Menus Restaurant",
    "shortDesc": "Impression professionnelle de sets de table en papier personnalisés jetables avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos sets de table en papier personnalisés jetables chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-restaurants.webp",
    "formats": [
      "A4 (21 × 29,7 cm)",
      "A3 (29,7 × 42 cm)",
      "Format étroit 14 × 29,7 cm",
      "Sets de table 30 × 42 cm"
    ],
    "papers": [
      "Papier indéchirable résistant à l'eau Synaps",
      "Papier offset 90g pour sets de table",
      "Carton 350g avec encapsulage rigide 125 microns"
    ],
    "finishes": [
      "Encapsulage brillant ou mat lavable",
      "Pelliculage antibactérien",
      "Coins arrondis hygiéniques",
      "Rainage pour pliage facile"
    ],
    "quantities": [
      "25 ex.",
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex. (Sets jetables : 2 500 ex. à 10 000 ex.)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Sets de Table en Papier Personnalisés Jetables | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos sets de table en papier personnalisés jetables au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "stickers-decoupe-forme",
    "slug": "stickers-decoupe-forme",
    "title": "Stickers Découpés à la Forme (Kiss-cut / Die-cut)",
    "categoryId": "etiquettes-adhesifs",
    "categoryName": "Étiquettes & Adhésifs",
    "shortDesc": "Impression professionnelle de stickers découpés à la forme (kiss-cut / die-cut) avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos stickers découpés à la forme (kiss-cut / die-cut) chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Rond (diamètre 3cm, 4cm, 5cm, 6cm)",
      "Rectangle ou Carré",
      "Découpe personnalisée à la forme (Kiss-cut / Die-cut)"
    ],
    "papers": [
      "Papier adhésif couché permanent",
      "Polypropylène (PP) blanc indéchirable étanche",
      "PP transparent",
      "Vinyle adhésif repositionnable"
    ],
    "finishes": [
      "En bobine / rouleau pour poseuse automatique",
      "En planches A4 prédécoupées",
      "À l'unité découpé mi-chair",
      "Pelliculage brillant protecteur"
    ],
    "quantities": [
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex.",
      "10 000 ex.",
      "25 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Stickers Découpés à la Forme (Kiss-cut / Die-cut) | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos stickers découpés à la forme (kiss-cut / die-cut) au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "stylo-publicitaire",
    "slug": "stylo-publicitaire",
    "title": "Stylos Publicitaires Personnalisés avec Logo",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de stylos publicitaires personnalisés avec logo avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos stylos publicitaires personnalisés avec logo chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Stylos Publicitaires Personnalisés avec Logo | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos stylos publicitaires personnalisés avec logo au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "t-shirt-personnalise",
    "slug": "t-shirt-personnalise",
    "title": "T-shirts & Polos d'Entreprise Personnalisés",
    "categoryId": "souvenirs-photos",
    "categoryName": "Souvenirs Photos",
    "shortDesc": "Impression professionnelle de t-shirts & polos d'entreprise personnalisés avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos t-shirts & polos d'entreprise personnalisés chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-luxe.webp",
    "formats": [
      "Formats standards photo : 20×30 cm, 30×40 cm, 50×70 cm, 70×100 cm",
      "Mug 325 ml",
      "Magnets frigo souples"
    ],
    "papers": [
      "Véritable toile canvas coton 380g",
      "Châssis bois en pin massif 2cm ou 4cm",
      "Céramique blanche AAA haute brillance"
    ],
    "finishes": [
      "Impression encres pigmentaires haute fidélité",
      "Vernis de protection UV",
      "Boîte cadeau individuelle"
    ],
    "quantities": [
      "1 pièce",
      "5 pièces",
      "20 pièces",
      "100 pièces (cadeaux d'entreprise)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "T-shirts & Polos d'Entreprise Personnalisés | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos t-shirts & polos d'entreprise personnalisés au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "tableau-photo-personnalise",
    "slug": "tableau-photo-personnalise",
    "title": "Tableaux Photos Personnalisés sur Toile ou Plexi",
    "categoryId": "souvenirs-photos",
    "categoryName": "Souvenirs Photos",
    "shortDesc": "Impression professionnelle de tableaux photos personnalisés sur toile ou plexi avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos tableaux photos personnalisés sur toile ou plexi chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-luxe.webp",
    "formats": [
      "Formats standards photo : 20×30 cm, 30×40 cm, 50×70 cm, 70×100 cm",
      "Mug 325 ml",
      "Magnets frigo souples"
    ],
    "papers": [
      "Véritable toile canvas coton 380g",
      "Châssis bois en pin massif 2cm ou 4cm",
      "Céramique blanche AAA haute brillance"
    ],
    "finishes": [
      "Impression encres pigmentaires haute fidélité",
      "Vernis de protection UV",
      "Boîte cadeau individuelle"
    ],
    "quantities": [
      "1 pièce",
      "5 pièces",
      "20 pièces",
      "100 pièces (cadeaux d'entreprise)"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Tableaux Photos Personnalisés sur Toile ou Plexi | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos tableaux photos personnalisés sur toile ou plexi au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "tableau-toile-chassis",
    "slug": "tableau-toile-chassis",
    "title": "Tableaux sur Toile d'Art Tendue sur Châssis Bois",
    "categoryId": "supports-rigides",
    "categoryName": "Supports Rigides",
    "shortDesc": "Impression professionnelle de tableaux sur toile d'art tendue sur châssis bois avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos tableaux sur toile d'art tendue sur châssis bois chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-grand-format.webp",
    "formats": [
      "Forex 3mm, 5mm, 10mm",
      "Aluminium Dibond composite 3mm",
      "Plexiglas coulé transparent 5mm / 8mm",
      "Akylux alvéolaire 3,5mm"
    ],
    "papers": [
      "Impression directe UV à plat",
      "Contrecollage vinyle polymère haute durabilité avec plastification protectrice"
    ],
    "finishes": [
      "Découpe numérique fraisée",
      "Perforation aux 4 coins",
      "Entretoises murales inox",
      "Pieds de lestage pour drapeaux"
    ],
    "quantities": [
      "À l'unité",
      "5 à 20 ex.",
      "Grandes quantités pour chantiers et réseaux"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Tableaux sur Toile d'Art Tendue sur Châssis Bois | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos tableaux sur toile d'art tendue sur châssis bois au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "tapis-souris-personnalise",
    "slug": "tapis-souris-personnalise",
    "title": "Tapis de Souris Ergonomiques Publicitaires",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de tapis de souris ergonomiques publicitaires avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos tapis de souris ergonomiques publicitaires chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Tapis de Souris Ergonomiques Publicitaires | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos tapis de souris ergonomiques publicitaires au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "ticket-billetterie",
    "slug": "ticket-billetterie",
    "title": "Billetterie & Tickets d'Événement Numérotés avec Souche Détachable",
    "categoryId": "papeterie-bureautique",
    "categoryName": "Papeterie & Bureautique",
    "shortDesc": "Impression professionnelle de billetterie & tickets d'événement numérotés avec souche détachable avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos billetterie & tickets d'événement numérotés avec souche détachable chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-flyers.webp",
    "formats": [
      "Standard",
      "Sur mesure"
    ],
    "papers": [
      "Standard de qualité supérieure",
      "Couché mat",
      "Couché brillant"
    ],
    "finishes": [
      "Coupe droite standard",
      "Finition mate ou brillante"
    ],
    "quantities": [
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "Sur devis"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Billetterie & Tickets d'Événement Numérotés avec Souche Détachable | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos billetterie & tickets d'événement numérotés avec souche détachable au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "tote-bag-personnalise",
    "slug": "tote-bag-personnalise",
    "title": "Tote Bags en Coton Écologique Personnalisés",
    "categoryId": "goodies-gadgets",
    "categoryName": "Goodies & Gadgets",
    "shortDesc": "Impression professionnelle de tote bags en coton écologique personnalisés avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos tote bags en coton écologique personnalisés chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-textile.webp",
    "formats": [
      "Dimensions standard selon objet publicitaire",
      "Zone de marquage optimisée pour votre logo"
    ],
    "papers": [
      "Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"
    ],
    "finishes": [
      "Tampographie couleur",
      "Gravure laser inaltérable",
      "Sérigraphie textile",
      "Impression numérique UV quadri directe"
    ],
    "quantities": [
      "50 ex.",
      "100 ex.",
      "250 ex.",
      "500 ex.",
      "1 000 ex.",
      "2 500 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Tote Bags en Coton Écologique Personnalisés | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos tote bags en coton écologique personnalisés au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "vinyle-adhesif-grand-format",
    "slug": "vinyle-adhesif-grand-format",
    "title": "Vinyles Adhésifs Grand Format Vitrine & Mur",
    "categoryId": "supports-souples",
    "categoryName": "Supports Souples",
    "shortDesc": "Impression professionnelle de vinyles adhésifs grand format vitrine & mur avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos vinyles adhésifs grand format vitrine & mur chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-bache.webp",
    "formats": [
      "Largeur jusqu'à 3,20 m sans raccord",
      "Longueur sur mesure",
      "Découpe carrée ou à la forme"
    ],
    "papers": [
      "Bâche PVC 510g enduite",
      "Bâche microperforée Mesh coupe-vent",
      "Vinyle adhésif monomère ou polymère",
      "Vinyle microperforé One-Way"
    ],
    "finishes": [
      "Oeillets métalliques périphériques tous les 50 cm",
      "Ourlet de renfort thermo-soudé",
      "Fourreaux haut et bas",
      "Lamination anti-UV"
    ],
    "quantities": [
      "1 pièce sur mesure",
      "Grandes séries événementielles"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Vinyles Adhésifs Grand Format Vitrine & Mur | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos vinyles adhésifs grand format vitrine & mur au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "vinyle-microperfore-one-way",
    "slug": "vinyle-microperfore-one-way",
    "title": "Vinyles Microperforés One-Way pour Vitrines & Véhicules",
    "categoryId": "supports-souples",
    "categoryName": "Supports Souples",
    "shortDesc": "Impression professionnelle de vinyles microperforés one-way pour vitrines & véhicules avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos vinyles microperforés one-way pour vitrines & véhicules chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/realisation-bache.webp",
    "formats": [
      "Largeur jusqu'à 3,20 m sans raccord",
      "Longueur sur mesure",
      "Découpe carrée ou à la forme"
    ],
    "papers": [
      "Bâche PVC 510g enduite",
      "Bâche microperforée Mesh coupe-vent",
      "Vinyle adhésif monomère ou polymère",
      "Vinyle microperforé One-Way"
    ],
    "finishes": [
      "Oeillets métalliques périphériques tous les 50 cm",
      "Ourlet de renfort thermo-soudé",
      "Fourreaux haut et bas",
      "Lamination anti-UV"
    ],
    "quantities": [
      "1 pièce sur mesure",
      "Grandes séries événementielles"
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Vinyles Microperforés One-Way pour Vitrines & Véhicules | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos vinyles microperforés one-way pour vitrines & véhicules au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "vitrophanie-macaron",
    "slug": "vitrophanie-macaron",
    "title": "Vitrophanies & Stickers Vitrines Repositionnables",
    "categoryId": "etiquettes-adhesifs",
    "categoryName": "Étiquettes & Adhésifs",
    "shortDesc": "Impression professionnelle de vitrophanies & stickers vitrines repositionnables avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos vitrophanies & stickers vitrines repositionnables chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/categorie-stickers.webp",
    "formats": [
      "Rond (diamètre 3cm, 4cm, 5cm, 6cm)",
      "Rectangle ou Carré",
      "Découpe personnalisée à la forme (Kiss-cut / Die-cut)"
    ],
    "papers": [
      "Papier adhésif couché permanent",
      "Polypropylène (PP) blanc indéchirable étanche",
      "PP transparent",
      "Vinyle adhésif repositionnable"
    ],
    "finishes": [
      "En bobine / rouleau pour poseuse automatique",
      "En planches A4 prédécoupées",
      "À l'unité découpé mi-chair",
      "Pelliculage brillant protecteur"
    ],
    "quantities": [
      "500 ex.",
      "1 000 ex.",
      "2 500 ex.",
      "5 000 ex.",
      "10 000 ex.",
      "25 000 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "Vitrophanies & Stickers Vitrines Repositionnables | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos vitrophanies & stickers vitrines repositionnables au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  },
  {
    "id": "x-banner",
    "slug": "x-banner",
    "title": "X-Banners Économiques & Légers",
    "categoryId": "roll-ups-plv",
    "categoryName": "Roll-ups & PLV",
    "shortDesc": "Impression professionnelle de x-banners économiques & légers avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK.",
    "description": "Commandez vos x-banners économiques & légers chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure adaptée à vos exigences techniques et à vos délais.",
    "image": "/assets/hero-main-hd.png",
    "formats": [
      "85 × 200 cm (Standard)",
      "100 × 200 cm",
      "120 × 200 cm",
      "150 × 200 cm",
      "Photocall 240 × 240 cm / 300 × 240 cm"
    ],
    "papers": [
      "Bâche PVC 450g M1 anti-incurvation",
      "Tissu polyester stretch anti-reflet",
      "Polypropylène dos gris occultant"
    ],
    "finishes": [
      "Structure aluminium anodisé avec pieds pivotants",
      "Sac de transport matelassé inclus",
      "Double face",
      "Montage prêt à l'emploi"
    ],
    "quantities": [
      "1 ex.",
      "2 ex.",
      "5 ex.",
      "10 ex.",
      "25 ex.",
      "50 ex."
    ],
    "turnaround": "24h à 48h express ou 3 à 5 jours standard",
    "features": [
      "Impression haute définition certifiée MATBAA LIK",
      "Vérification technique PAO gratuite de vos fichiers",
      "Livraison rapide sécurisée partout au Maroc",
      "Tarification dégressive sur volume"
    ],
    "seoTitle": "X-Banners Économiques & Légers | Impression au Maroc - MATBAA LIK",
    "seoDescription": "Commandez vos x-banners économiques & légers au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."
  }
];

export const SLUG_ALIASES: Record<string, string> = {
  "carnets-facturation": "carnet-autocopiant-ncr",
  "cartes-papeterie": "carte-de-visite-standard",
  "flyers-publicite": "flyer-standard",
  "brochures-catalogues": "catalogue-dos-carre-colle",
  "stickers-packaging": "boite-pliante-souple",
  "grand-format": "roll-up-standard",
  "restaurants-commerces": "menu-restaurant-standard",
  "textile-goodies": "tote-bag-personnalise",
  "flyer-a5": "flyer-standard",
  "flyer-a6": "flyer-standard",
  "carte-visite-standard": "carte-de-visite-standard",
  "carte-visite-luxe": "carte-de-visite-luxe",
  "roll-up": "roll-up-standard",
  "rollup": "roll-up-standard",
  "bache-pvc": "bache-pvc-banderole",
  "factures-ncr": "carnet-autocopiant-ncr"
};

// Helper functions for easy querying
export function getAllCategories(): Category[] {
  return CATEGORIES;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.id === slug);
}

export function getAllProducts(): Product[] {
  return CANONICAL_PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  const direct = CANONICAL_PRODUCTS.find(p => p.slug === slug);
  if (direct) return direct;
  const targetSlug = SLUG_ALIASES[slug];
  if (targetSlug) {
    return CANONICAL_PRODUCTS.find(p => p.slug === targetSlug);
  }
  return undefined;
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return [];
  // Collect all unique canonical slugs referenced in this category's submenus
  const referencedSlugs = new Set<string>();
  for (const sub of cat.submenus) {
    for (const item of sub.items) {
      referencedSlugs.add(item.slug);
    }
  }
  return CANONICAL_PRODUCTS.filter(p => referencedSlugs.has(p.slug) || p.categoryId === categorySlug);
}

export function searchCatalog(query: string): Product[] {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase().trim();
  return CANONICAL_PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(q) ||
    p.shortDesc.toLowerCase().includes(q) ||
    p.categoryName.toLowerCase().includes(q) ||
    p.formats.some(f => f.toLowerCase().includes(q)) ||
    p.finishes.some(f => f.toLowerCase().includes(q))
  );
}
