import json
import re

# Load raw dump
with open('placements_dump.json', 'r', encoding='utf-8') as f:
    dump = json.load(f)

categories_raw = dump['categories']

def slugify(text):
    text = text.lower()
    text = re.sub(r'[àáâãäå]', 'a', text)
    text = re.sub(r'[èéêë]', 'e', text)
    text = re.sub(r'[ìíîï]', 'i', text)
    text = re.sub(r'[òóôõö]', 'o', text)
    text = re.sub(r'[ùúûü]', 'u', text)
    text = re.sub(r'[ç]', 'c', text)
    text = re.sub(r'[œ]', 'oe', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

from test_exact_mapping import resolve_exact_slug

CAT_META = {
    'supers-promos': {
        'name': 'Supers promos',
        'shortName': 'Promos',
        'iconName': 'Tag',
        'image': '/assets/categorie-flyers.webp',
        'description': 'Sélection des offres promotionnelles MATBAA LIK : tirages économiques à tarifs avantageux pour vos flyers, dépliants, papeterie et adhésifs.',
        'keywords': ['supers promos', 'offres d\'impression', 'tirages economiques', 'devis rapide']
    },
    'cartes-de-visite': {
        'name': 'Cartes de visite',
        'shortName': 'Cartes de visite',
        'iconName': 'Contact',
        'image': '/assets/categorie-cartes.webp',
        'description': 'Cartes de visite professionnelles de prestige : standard, vernis sélectif 3D, dorure à chaud, cartes PVC rigides et papiers d\'art texturés.',
        'keywords': ['cartes de visite', 'business cards', 'carte pvc', 'carte luxe', 'dorure', 'vernis 3d']
    },
    'flyers-depliants': {
        'name': 'Flyers & Dépliants',
        'shortName': 'Flyers & Dépliants',
        'iconName': 'Files',
        'image': '/assets/categorie-flyers.webp',
        'description': 'Flyers publicitaires, prospectus et dépliants 2, 3 ou 4 volets pour booster votre visibilité commerciale et promouvoir vos événements.',
        'keywords': ['flyers', 'depliants', 'plaquettes commerciales', 'prospectus', 'tracts']
    },
    'catalogues-brochures': {
        'name': 'Catalogues & Brochures',
        'shortName': 'Catalogues & Brochures',
        'iconName': 'BookOpen',
        'image': '/assets/categorie-brochures.webp',
        'description': 'Catalogues produits dos carré collé, brochures agrafées 2 points métal, livrets d\'accueil et rapports annuels d\'entreprise.',
        'keywords': ['catalogues', 'brochures', 'magazines', 'livrets', 'rapports annuels']
    },
    'papeterie-bureautique': {
        'name': 'Papeterie & Bureautique',
        'shortName': 'Papeterie',
        'iconName': 'NotebookPen',
        'image': '/assets/categorie-carnets.webp',
        'description': 'Papeterie d\'entreprise sur mesure : papier en-tête, enveloppes, carnets autocopiants NCR (factures/bons), ordonnances et chemises à rabat.',
        'keywords': ['papier en-tete', 'enveloppes', 'carnets ncr', 'facturiers', 'ordonnances', 'chemises rabats']
    },
    'boites-packaging': {
        'name': 'Boîtes & Packaging',
        'shortName': 'Packaging',
        'iconName': 'Package',
        'image': '/assets/categorie-stickers.webp',
        'description': 'Solutions d\'emballage et packaging sur mesure : étuis pliants, coffrets luxe, packaging alimentaire, boîtes d\'expédition et sacs boutique.',
        'keywords': ['boites', 'packaging', 'emballage carton', 'sacs kraft', 'boite expedition']
    },
    'etiquettes-adhesifs': {
        'name': 'Étiquettes & Adhésifs',
        'shortName': 'Étiquettes',
        'iconName': 'Sticker',
        'image': '/assets/categorie-stickers.webp',
        'description': 'Étiquettes adhésives en rouleaux et planches, stickers découpés sur mesure à la forme, étiquettes transparentes et vitrophanies vitrine.',
        'keywords': ['etiquettes rouleaux', 'stickers sur mesure', 'autocollants', 'vitrophanie']
    },
    'affiches-posters': {
        'name': 'Affiches & Posters',
        'shortName': 'Affiches',
        'iconName': 'Image',
        'image': '/assets/categorie-grand-format.webp',
        'description': 'Affiches grand format A3, A2, A1, A0, posters photo haute définition et cadres clippants d\'affichage pour vos campagnes visuelles.',
        'keywords': ['affiches publicitaires', 'posters hd', 'cadres clippants', 'impression affiche']
    },
    'roll-ups-plv': {
        'name': 'Roll-ups & PLV',
        'shortName': 'Roll-ups & PLV',
        'iconName': 'PanelsTopLeft',
        'image': '/assets/hero-main-hd.png',
        'description': 'Supports signalétiques et PLV événementielle : Roll-up banners rétractables, X-banners, murs d\'image photocall et comptoirs d\'accueil salon.',
        'keywords': ['roll-up', 'kakemono', 'x-banner', 'photocall', 'plv evenementielle', 'comptoir salon']
    },
    'supports-souples': {
        'name': 'Supports Souples',
        'shortName': 'Supports Souples',
        'iconName': 'Maximize2',
        'image': '/assets/realisation-bache.webp',
        'description': 'Impression grand format sur supports souples : bâches PVC tendues, vinyles microperforés One-Way, papiers peints et marquage de véhicules.',
        'keywords': ['baches pvc', 'vinyle grand format', 'one way', 'marquage vehicule', 'papier peint']
    },
    'supports-rigides': {
        'name': 'Supports Rigides',
        'shortName': 'Supports Rigides',
        'iconName': 'Layers',
        'image': '/assets/categorie-grand-format.webp',
        'description': 'Panneaux rigides grand format : Forex PVC, Aluminium Dibond, Plexiglas transparent découpé, Akylux de chantier et drapeaux publicitaires.',
        'keywords': ['panneaux forex', 'alu dibond', 'plexiglas', 'akylux chantier', 'drapeaux oriflammes']
    },
    'souvenirs-photos': {
        'name': 'Souvenirs Photos',
        'shortName': 'Souvenirs Photos',
        'iconName': 'Camera',
        'image': '/assets/realisation-luxe.webp',
        'description': 'Impressions photos personnalisées : tableaux sur toile avec châssis bois, vêtements imprimés, mugs personnalisés et magnets photos.',
        'keywords': ['tableau photo', 'toile photo', 'mug personnalise', 'magnets', 'textile photo']
    },
    'goodies-gadgets': {
        'name': 'Goodies & Gadgets',
        'shortName': 'Goodies',
        'iconName': 'Gift',
        'image': '/assets/categorie-textile.webp',
        'description': 'Objets publicitaires et cadeaux d\'entreprise personnalisés avec votre logo : stylos, tote bags, clés USB, gourdes inox et power banks.',
        'keywords': ['goodies entreprise', 'stylos logo', 'tote bag personnalise', 'gourde inox', 'cle usb publicitaire']
    },
    'menus-restaurant': {
        'name': 'Menus Restaurant',
        'shortName': 'Menus Restaurant',
        'iconName': 'UtensilsCrossed',
        'image': '/assets/categorie-restaurants.webp',
        'description': 'Cartes et menus pour cafés et restaurants : menus indéchirables lavables, menus rigides plastifiés, sets de table et pochettes à couverts.',
        'keywords': ['menu restaurant', 'carte restaurant', 'set de table papier', 'menu plastifie', 'protege menu']
    }
}

# Parse categories and submenus
parsed_categories = []
canonical_products_dict = {}

for cat_idx, cat in enumerate(categories_raw):
    cat_name = cat['name']
    cat_slug = slugify(cat_name)
    meta = CAT_META.get(cat_slug, {
        'name': cat_name,
        'shortName': cat_name,
        'iconName': 'Package',
        'image': '/assets/categorie-flyers.webp',
        'description': f'Découvrez tous nos produits d\'impression pour la catégorie {cat_name}.',
        'keywords': [cat_slug]
    })
    
    submenus_list = []
    for sub in cat['submenus']:
        sub_title = sub['title']
        sub_slug = slugify(sub_title)
        items_list = []
        for p_label in sub['products']:
            canonical_slug = resolve_exact_slug(cat_name, sub_title, p_label)
            items_list.append({
                'label': p_label,
                'slug': canonical_slug
            })
            
            # Register in canonical_products_dict if not exists
            if canonical_slug not in canonical_products_dict:
                canonical_products_dict[canonical_slug] = {
                    'slug': canonical_slug,
                    'primaryCategorySlug': cat_slug,
                    'primaryCategoryName': cat_name,
                    'placements': []
                }
            canonical_products_dict[canonical_slug]['placements'].append((cat_name, sub_title, p_label))
            
        submenus_list.append({
            'id': sub_slug,
            'title': sub_title,
            'items': items_list
        })
        
    parsed_categories.append({
        'id': cat_slug,
        'name': meta['name'],
        'shortName': meta['shortName'],
        'iconName': meta['iconName'],
        'image': meta['image'],
        'description': meta['description'],
        'keywords': meta['keywords'],
        'submenus': submenus_list
    })

print(f"Categories parsed: {len(parsed_categories)}")
print(f"Unique canonical products registered: {len(canonical_products_dict)}")

# Save intermediate JSON
with open('parsed_catalog_intermediate.json', 'w', encoding='utf-8') as out:
    json.dump({
        'categories': parsed_categories,
        'canonical_slugs': sorted(list(canonical_products_dict.keys()))
    }, out, indent=2, ensure_ascii=False)
print("Saved parsed_catalog_intermediate.json")
