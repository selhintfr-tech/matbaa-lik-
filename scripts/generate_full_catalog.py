import json
import re

with open('placements_dump.json', 'r', encoding='utf-8') as f:
    dump = json.load(f)

categories_raw = dump['categories']

# Category metadata mapping
CAT_META = {
    'supers-promos': {
        'name': 'Supers promos',
        'shortName': 'Promos',
        'iconName': 'Tag',
        'image': '/assets/categorie-flyers.webp',
        'description': 'Offres promotionnelles exclusives et tirages économiques pour booster la communication de votre entreprise au meilleur tarif.',
        'keywords': ['promo', 'offre', 'remise', 'economique', 'flyer pas cher', 'devis rapide']
    },
    'cartes-de-visite': {
        'name': 'Cartes de visite',
        'shortName': 'Cartes de visite',
        'iconName': 'Contact',
        'image': '/assets/categorie-cartes.webp',
        'description': 'Cartes de visite professionnelles de prestige : standard, luxe, PVC, vernis sélectif 3D, dorure à chaud et finitions haut de gamme.',
        'keywords': ['carte de visite', 'business card', 'pvc', 'vernis 3d', 'dorure', 'gaufrage', 'carte fidelite']
    },
    'flyers-depliants': {
        'name': 'Flyers & Dépliants',
        'shortName': 'Flyers & Dépliants',
        'iconName': 'Files',
        'image': '/assets/categorie-flyers.webp',
        'description': 'Flyers publicitaires, prospectus et dépliants 2, 3 ou 4 volets pour vos campagnes promotionnelles, salons et événements.',
        'keywords': ['flyer', 'prospectus', 'tract', 'depliant', 'plaquette', 'volet', 'a5', 'a4', 'dl']
    },
    'catalogues-brochures': {
        'name': 'Catalogues & Brochures',
        'shortName': 'Catalogues & Brochures',
        'iconName': 'BookOpen',
        'image': '/assets/categorie-brochures.webp',
        'description': 'Catalogues produits dos carré collé, brochures piquées 2 points métal, livrets d\'accueil et rapports annuels d\'entreprise.',
        'keywords': ['catalogue', 'brochure', 'magazine', 'livret', 'dos carre colle', 'piqure', 'rapport']
    },
    'papeterie-bureautique': {
        'name': 'Papeterie & Bureautique',
        'shortName': 'Papeterie',
        'iconName': 'NotebookPen',
        'image': '/assets/categorie-carnets.webp',
        'description': 'Papeterie institutionnelle : têtes de lettre, enveloppes, carnets de factures autocopiants NCR, ordonnances et chemises à rabat.',
        'keywords': ['papier en-tete', 'enveloppe', 'carnet ncr', 'facture', 'ordonnance', 'chemise a rabat', 'bloc-notes']
    },
    'boites-packaging': {
        'name': 'Boîtes & Packaging',
        'shortName': 'Packaging',
        'iconName': 'Package',
        'image': '/assets/categorie-stickers.webp',
        'description': 'Emballages sur mesure, boîtes pliantes carton, packaging alimentaire, boîtes d\'expédition e-commerce et sacs boutiques.',
        'keywords': ['boite', 'packaging', 'emballage', 'carton', 'sac boutique', 'e-commerce', 'contact alimentaire']
    },
    'etiquettes-adhesifs': {
        'name': 'Étiquettes & Adhésifs',
        'shortName': 'Étiquettes',
        'iconName': 'Sticker',
        'image': '/assets/categorie-stickers.webp',
        'description': 'Étiquettes adhésives en bobine, stickers découpés sur mesure à la forme, étiquettes transparentes et vitrophanies.',
        'keywords': ['etiquette', 'sticker', 'adhesif', 'bobine', 'rouleau', 'vitrophanie', 'decoupe mi-chair']
    },
    'affiches-posters': {
        'name': 'Affiches & Posters',
        'shortName': 'Affiches',
        'iconName': 'Image',
        'image': '/assets/categorie-grand-format.webp',
        'description': 'Affiches publicitaires A3, A2, A1, A0, posters photo haute définition et cadres clippants pour intérieur et vitrine.',
        'keywords': ['affiche', 'poster', 'grand format', 'cadre clippant', 'affiche promo', 'hd']
    },
    'roll-ups-plv': {
        'name': 'Roll-ups & PLV',
        'shortName': 'Roll-ups & PLV',
        'iconName': 'PanelsTopLeft',
        'image': '/assets/categorie-grand-format.webp',
        'description': 'Supports de communication événementielle : Roll-up banners, X-banners, photocalls, comptoirs d\'accueil et présentoirs PLV.',
        'keywords': ['roll-up', 'rollup', 'kakemono', 'x-banner', 'photocall', 'plv', 'presentoir', 'comptoir']
    },
    'supports-souples': {
        'name': 'Supports Souples',
        'shortName': 'Supports Souples',
        'iconName': 'Maximize2',
        'image': '/assets/realisation-bache.webp',
        'description': 'Impression grand format sur supports souples : bâches PVC, vinyles adhésifs vitrines et murs, microperforé One-Way et covering véhicule.',
        'keywords': ['bache', 'banderole', 'vinyle grand format', 'one-way', 'microperfore', 'covering', 'marquage textile']
    },
    'supports-rigides': {
        'name': 'Supports Rigides',
        'shortName': 'Supports Rigides',
        'iconName': 'Layers',
        'image': '/assets/categorie-grand-format.webp',
        'description': 'Panneaux rigides extérieurs et intérieurs : Forex PVC, Aluminium Dibond, Plexiglas, Akylux alvéolaire et drapeaux oriflammes.',
        'keywords': ['forex', 'dibond', 'plexiglas', 'akylux', 'panneau chantier', 'drapeau', 'beach flag', 'enseigne']
    },
    'souvenirs-photos': {
        'name': 'Souvenirs Photos',
        'shortName': 'Souvenirs Photos',
        'iconName': 'Camera',
        'image': '/assets/realisation-luxe.webp',
        'description': 'Tableaux personnalisés sur toile, vêtements photos, mugs thermo-réactifs, magnets et cadeaux photo personnalisés sur mesure.',
        'keywords': ['tableau photo', 'toile photo', 'mug photo', 'magnet frigo', 't-shirt photo', 'cadeau personnalise']
    },
    'goodies-gadgets': {
        'name': 'Goodies & Gadgets',
        'shortName': 'Goodies',
        'iconName': 'Gift',
        'image': '/assets/categorie-textile.webp',
        'description': 'Objets publicitaires personnalisés avec votre logo : stylos, clés USB, gourdes isothermes, power banks, tote bags et porte-clés.',
        'keywords': ['goodies', 'cadeau entreprise', 'stylo publicitaire', 'cle usb', 'gourde inox', 'tote bag', 'power bank']
    },
    'menus-restaurant': {
        'name': 'Menus Restaurant',
        'shortName': 'Menus Restaurant',
        'iconName': 'UtensilsCrossed',
        'image': '/assets/categorie-restaurants.webp',
        'description': 'Cartes et menus de restaurant lavables, indéchirables ou plastifiés rigides, sets de table jetables et protège-menus élégants.',
        'keywords': ['menu restaurant', 'carte restaurant', 'set de table', 'menu plastifie', 'protege menu', 'porte addition']
    }
}

print("Loaded CAT_META for all 14 categories.")
