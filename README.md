# MATBAA LIK — Plateforme E-Commerce Impression & Création 🇲🇦

Plateforme web-to-print moderne, ultra-rapide et responsive développée sur mesure pour **MATBAA LIK**, le spécialiste de l'impression professionnelle et de la création graphique au Maroc.

---

## ⚡ Stack Technologique

- **Framework :** [Astro 4](https://astro.build/) (Static Site Generation — SSG ultra-rapide)
- **Styling :** [Tailwind CSS 3](https://tailwindcss.com/)
- **Icônes :** Lucide Icons (`lucide-astro`)
- **Typographie :** Inter (Google Fonts)
- **Multimédia :** Vidéo HTML5 responsive optimisée & images WebP / SVG haute définition
- **Hébergement & Déploiement :** [Cloudflare Pages](https://pages.cloudflare.com/) (0 DH / mois)
- **Calculateur de Prix :** Moteur TypeScript modulaire avec base de données centralisée & export/import CSV

---

## 🚀 Démarrage Rapide

### Prérequis
- [Node.js](https://nodejs.org/) v18.x, v20.x (recommandé LTS), ou v22.x
- `npm` ou `pnpm`
- [Python 3.10+](https://www.python.org/) *(optionnel, uniquement pour les scripts de vérification et de gestion de grille tarifaire CSV)*

### Installation des dépendances
```bash
npm install
```
*(ou `pnpm install`)*

### Lancement en mode développement
```bash
npm run dev
```
Le serveur local démarre sur [http://localhost:4321](http://localhost:4321).

### Compilation pour la production
```bash
npm run build
```
Les 118 pages HTML statiques optimisées, feuilles de styles et assets sont générés dans le dossier `dist/`.

### Prévisualisation locale du build
```bash
npm run preview
```

---

## ☁️ Déploiement sur Cloudflare Pages

Le projet est conçu pour un déploiement continu à coût zéro sur **Cloudflare Pages** :

1. Connectez votre dépôt GitHub (`https://github.com/selhintfr-tech/matbaa-lik-.git`) dans le tableau de bord Cloudflare Pages.
2. Paramètres de compilation :
   - **Framework preset :** `Astro`
   - **Build command :** `npm run build`
   - **Build output directory :** `dist`
3. Variables d'environnement Cloudflare (Settings > Environment variables) :
   - `NODE_VERSION` = `20`
   - `ASTRO_TELEMETRY_DISABLED` = `1`
4. Cliquez sur **Save and Deploy**. Le site sera automatiquement déployé avec CDN mondial ultra-rapide et certificat SSL gratuit.

---

## 🔑 Variables d'Environnement

Un fichier `.env.example` est fourni à la racine. Aucun secret, mot de passe ou clé privée n'est requis pour compiler ou faire fonctionner le site en SSG.

```env
ASTRO_TELEMETRY_DISABLED=1
```

---

## 📁 Structure du Projet

```text
matbaa-lik/
├── data/
│   └── matbaa_lik_pricing_catalog.csv  # Base de données tarifaire exportable/éditable
├── public/
│   ├── assets/                         # Logos officiels (SVG), visuels héros, bannières méga-menu
│   └── videos/
│       └── carnets-de-factures.mp4     # Vidéo promotionnelle MP4 responsive
├── scripts/                            # Scripts de vérification automatique & gestion CSV
│   ├── build_pricing_database.py       # Compilation CSV -> TypeScript
│   ├── pricing_export_csv.py           # Export TS -> CSV
│   ├── verify_catalog_audit.py         # Validation des 14 catégories et 101 produits
│   ├── verify_pricing_system.py        # Vérification du système de calcul de prix
│   ├── verify_redesigned_product_page.py # Vérification des pages produits
│   └── verify_ui_enhancements.py       # Vérification UI & méga menus
├── src/
│   ├── components/
│   │   ├── header/                     # AnnouncementBar, SiteHeader, SearchBar, CategoryNavigation, MegaMenu
│   │   ├── home/                       # HeroSlider, FeaturedOffers, VideoShowcase, PortfolioCarousel, HowItWorks
│   │   ├── product/                    # ProductGallery, PricingCalculator, ProductSpecs, WhatsAppOrderCTA
│   │   ├── promos/                     # CategoryDisplayAd (bannière pub Super Promos)
│   │   └── ui/                         # FloatingWhatsApp, Badge, Breadcrumb
│   ├── data/
│   │   ├── catalog.ts                  # Définition des 14 catégories et produits
│   │   └── pricing-database.ts         # Grille tarifaire des 101 produits canoniques
│   ├── layouts/
│   │   └── Layout.astro                # Layout principal (SEO, fonts, header, footer)
│   ├── pages/
│   │   ├── index.astro                 # Page d'accueil
│   │   ├── categories/[slug].astro     # Modèle dynamique des 14 catégories (12 produits par page)
│   │   └── produits/[slug].astro       # Modèle dynamique des 101 fiches produits canoniques
│   └── styles/
│       └── global.css                  # Directives Tailwind et styles globaux
├── astro.config.mjs                    # Configuration Astro (intégration Tailwind, output static)
├── build.js                            # Wrapper de build Astro
├── package.json                        # Dépendances et scripts npm
├── tailwind.config.mjs                 # Thème Tailwind (couleurs MATBAA LIK, beige, orange, bleu)
└── tsconfig.json                       # Configuration TypeScript
```

---

## ✨ Fonctionnalités Existantes

1. **En-tête & Recherche Intelligente :**
   - Barre d'annonce supérieure élégante.
   - Logo haute fidélité MATBAA LIK avec lettre arabe « م » blanche opaque intégrée.
   - Barre de recherche instantanée avec filtre en direct sur l'ensemble du catalogue.
   - Navigation 14 catégories avec méga-menus déroulants, visuels promotionnels dédiés et titres en bleu marine `#172B4D`.

2. **Page d'Accueil :**
   - Slider Hero pleine largeur (edge-to-edge) avec transitions fluides et typographie accentuée en orange.
   - Section **OFFRES DU MOMENT** (grille 4×2 de 8 produits vedettes avec tarifs et badges).
   - Bannière vidéo promotionnelle responsive **CARNETS DE FACTURES** (autoplay, boucle, muet, ratio 1920×640).
   - Section **NOS RÉALISATIONS** avec carrousel défilant et boutons de contrôle fléchés.
   - Section pédagogique **COMMENT ÇA MARCHE ?** en 3 étapes.

3. **Pages Catégories (14 catégories complètes) :**
   - En-tête compact et clair menant directement à la grille de produits.
   - Grille responsive de 12 cartes produits par catégorie.
   - Bannière publicitaire dynamique (Display Ad) intégrée exclusivement sous la grille de la catégorie **Super Promos**, avec angles droits épurés et CTA alterné.

4. **Fiches Produits Canoniques (101 produits) :**
   - Structure inspirée des leaders du web-to-print (AL PRINT).
   - Galerie visuelle avec zoom.
   - Calculateur interactif de configuration (quantités, finitions, formats, papiers).
   - Zone de téléversement de fichier / BAT.
   - Bouton de commande directe via WhatsApp pré-rempli avec les spécifications sélectionnées.
   - Tableaux détaillés de spécifications techniques.

5. **Gestion Tarifaire Centralisée :**
   - Base de données tarifaire dans `src/data/pricing-database.ts` et miroir CSV dans `data/matbaa_lik_pricing_catalog.csv`.
   - Scripts bidirectionnels pour exporter/importer les tarifs directement depuis Microsoft Excel.

6. **Assistance Client :**
   - Bouton flottant WhatsApp toujours accessible sur l'ensemble du site.

---

## 📋 Prochaines Étapes / Travaux Restants

- **Photographies Produits Définitives :** Remplacer progressivement les images de maquette des 101 produits par les photographies HD réelles prises en atelier.
- **Passerelle de Paiement Direct (Optionnelle) :** Si souhaité ultérieurement, intégrer une passerelle de paiement en ligne (CMI / Stripe) en complément de la commande WhatsApp actuelle.
- **Espace Client / Compte :** Ajouter une authentification client pour le suivi des commandes et l'historique des factures si le passage en full e-commerce est requis.

---

## 🛠️ Validation & Tests

Pour lancer la suite complète de vérification de l'intégrité du catalogue et de l'interface utilisateur :

```bash
python scripts/verify_catalog_audit.py
python scripts/verify_pricing_system.py
python scripts/verify_redesigned_product_page.py
python scripts/verify_ui_enhancements.py
```
*(Toutes les suites affichent 100% de réussite sur les 118 pages générées).*
