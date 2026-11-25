import json

with open('parsed_catalog_intermediate.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

categories = data['categories']
canonical_slugs = data['canonical_slugs']

# Add MATBAA LIK specialties if not present
if 'cachet-tampon-encreur' not in canonical_slugs:
    canonical_slugs.append('cachet-tampon-encreur')
if 'protege-menu-carnet-addition' not in canonical_slugs:
    canonical_slugs.append('protege-menu-carnet-addition')

canonical_slugs.sort()

# Also link cachet-tampon-encreur into papeterie-bureautique submenu
for cat in categories:
    if cat['id'] == 'papeterie-bureautique':
        # Add Tampons & cachets submenu or add to existing
        cat['submenus'].append({
            'id': 'tampons-cachets',
            'title': 'Tampons & cachets d\'entreprise',
            'items': [
                {'label': 'Tampon encreur Trodat automatique', 'slug': 'cachet-tampon-encreur'},
                {'label': 'Cachet d\'entreprise bois traditionnel', 'slug': 'cachet-tampon-encreur'},
                {'label': 'Dateur et numéroteur professionnel', 'slug': 'cachet-tampon-encreur'}
            ]
        })
    elif cat['id'] == 'menus-restaurant':
        # Ensure protege-menu-carnet-addition is explicitly present in menus restaurant
        cat['submenus'].append({
            'id': 'protege-menus-additions',
            'title': 'Protège-menus & Additions',
            'items': [
                {'label': 'Protège-menu rigide similicuir prestige', 'slug': 'protege-menu-carnet-addition'},
                {'label': 'Porte-addition & pochette d\'encaissement', 'slug': 'protege-menu-carnet-addition'}
            ]
        })

print(f"Total categories: {len(categories)}")
total_submenus = sum(len(c['submenus']) for c in categories)
print(f"Total submenus: {total_submenus}")
print(f"Total canonical products: {len(canonical_slugs)}")

# Product metadata database dictionary
def get_product_details(slug):
    # Formulate friendly Title from slug
    words = slug.split('-')
    raw_title = " ".join(words).capitalize()

    # Default category mapping
    cat_id = "papeterie-bureautique"
    cat_name = "Papeterie & Bureautique"
    img = "/assets/categorie-flyers.webp"
    formats = ["Standard", "Sur mesure"]
    papers = ["Standard de qualité supérieure", "Couché mat", "Couché brillant"]
    finishes = ["Coupe droite standard", "Finition mate ou brillante"]
    quantities = ["100 ex.", "250 ex.", "500 ex.", "1 000 ex.", "2 500 ex.", "Sur devis"]
    turnaround = "24h à 48h express ou 3 à 5 jours standard"
    features = [
        "Impression haute définition certifiée MATBAA LIK",
        "Vérification technique PAO gratuite de vos fichiers",
        "Livraison rapide sécurisée partout au Maroc",
        "Tarification dégressive sur volume"
    ]

    # Specific overrides
    if 'carte-de-visite' in slug or 'carte-de-fidelite' in slug or 'carte-evenement' in slug:
        cat_id = "cartes-de-visite"
        cat_name = "Cartes de visite"
        img = "/assets/categorie-cartes.webp"
        formats = ["8,5 × 5,5 cm (Standard)", "9,0 × 5,0 cm", "5,5 × 5,5 cm (Carré)", "Mini 8,5 × 2,5 cm", "Sur mesure"]
        papers = ["Couché demi-mat 350g", "Couché mat 400g prestige", "Papier texturé d'art 300g", "Kraft naturel 300g", "PVC rigide 500 microns"]
        finishes = ["Sans pelliculage", "Pelliculage mat soft-touch", "Pelliculage brillant", "Vernis sélectif 3D relief", "Dorure à chaud (Or / Argent)", "Coins arrondis"]
        quantities = ["100 ex.", "250 ex.", "500 ex.", "1 000 ex.", "2 000 ex.", "5 000 ex."]
    elif 'flyer' in slug:
        cat_id = "flyers-depliants"
        cat_name = "Flyers & Dépliants"
        img = "/assets/categorie-flyers.webp"
        formats = ["A5 (14,8 × 21 cm)", "A6 (10,5 × 14,8 cm)", "A4 (21 × 29,7 cm)", "Format DL (10 × 21 cm)", "Carré 14 × 14 cm"]
        papers = ["Couché brillant 135g (Économique)", "Couché brillant 170g", "Couché demi-mat 250g", "Cartonné 350g prestige"]
        finishes = ["Sans pelliculage", "Pelliculage mat recto ou recto/verso", "Pelliculage brillant", "Vernis sélectif 3D", "Pliage / rainage"]
        quantities = ["500 ex.", "1 000 ex.", "2 500 ex.", "5 000 ex.", "10 000 ex.", "20 000 ex."]
    elif 'depliant' in slug:
        cat_id = "flyers-depliants"
        cat_name = "Flyers & Dépliants"
        img = "/assets/categorie-flyers.webp"
        formats = ["A4 ouvert / A5 fermé (2 volets)", "A3 ouvert / A4 fermé (2 volets)", "A4 ouvert / 10×21 cm fermé (3 volets)", "10×21 cm ouvert / carré fermé"]
        papers = ["Couché brillant 135g", "Couché brillant 170g", "Couché demi-mat 250g rainé", "Couché mat 350g rainé"]
        finishes = ["Pli central", "Pli roulé", "Pli accordéon", "Pli fenêtre", "Pelliculage mat ou brillant"]
        quantities = ["250 ex.", "500 ex.", "1 000 ex.", "2 500 ex.", "5 000 ex."]
    elif 'brochure' in slug or 'catalogue' in slug or 'rapport' in slug or 'livre' in slug:
        cat_id = "catalogues-brochures"
        cat_name = "Catalogues & Brochures"
        img = "/assets/categorie-brochures.webp"
        formats = ["A4 portrait (21 × 29,7 cm)", "A5 portrait (14,8 × 21 cm)", "A4 paysage à l'italienne", "Carré 21 × 21 cm"]
        papers = ["Intérieur couché mat ou brillant 135g/170g", "Couverture cartonnée 300g ou 350g pelliculée"]
        finishes = ["Piqûre 2 points métal (agrafes)", "Dos carré collé PUR", "Reliure spirale métallique Wire-O", "Pelliculage soft-touch"]
        quantities = ["50 ex.", "100 ex.", "250 ex.", "500 ex.", "1 000 ex.", "2 500 ex."]
    elif 'boite' in slug or 'packaging' in slug or 'sac-cartonne' in slug or 'pochette-etui' in slug:
        cat_id = "boites-packaging"
        cat_name = "Boîtes & Packaging"
        img = "/assets/categorie-stickers.webp"
        formats = ["Petits étuis produits", "Moyennes boîtes pliantes", "Grandes boîtes d'expédition", "Sur mesure selon gabarit"]
        papers = ["Carton compact SBS 300g à 400g", "Carton kraft brun naturel", "Micro-cannelure ondulée E/F", "Carton contact alimentaire certifié"]
        finishes = ["Découpe à la forme personnalisée", "Pelliculage mat anti-rayures", "Vernis UV sélectif", "Dorure à chaud", "Fenêtre PVC transparente"]
        quantities = ["100 ex.", "250 ex.", "500 ex.", "1 000 ex.", "2 500 ex.", "5 000 ex."]
    elif 'etiquette' in slug or 'stickers' in slug or 'vitrophanie' in slug or 'ruban-adhesif' in slug:
        cat_id = "etiquettes-adhesifs"
        cat_name = "Étiquettes & Adhésifs"
        img = "/assets/categorie-stickers.webp"
        formats = ["Rond (diamètre 3cm, 4cm, 5cm, 6cm)", "Rectangle ou Carré", "Découpe personnalisée à la forme (Kiss-cut / Die-cut)"]
        papers = ["Papier adhésif couché permanent", "Polypropylène (PP) blanc indéchirable étanche", "PP transparent", "Vinyle adhésif repositionnable"]
        finishes = ["En bobine / rouleau pour poseuse automatique", "En planches A4 prédécoupées", "À l'unité découpé mi-chair", "Pelliculage brillant protecteur"]
        quantities = ["500 ex.", "1 000 ex.", "2 500 ex.", "5 000 ex.", "10 000 ex.", "25 000 ex."]
    elif 'affiche' in slug or 'poster' in slug or 'porte-affiche' in slug:
        cat_id = "affiches-posters"
        cat_name = "Affiches & Posters"
        img = "/assets/categorie-grand-format.webp"
        formats = ["A3 (29,7 × 42 cm)", "A2 (42 × 59,4 cm)", "A1 (59,4 × 84,1 cm)", "A0 (84,1 × 118,9 cm)", "Grand format abribus 120 × 176 cm"]
        papers = ["Couché brillant 135g", "Couché demi-mat 170g", "Papier photo satiné 200g HD", "Papier dos bleu pour encollage urbain"]
        finishes = ["Brut massicoté", "Plastification encapsulée mate ou brillante", "Montage sur cadre clippant aluminium"]
        quantities = ["1 à 10 ex. (Numérique express)", "50 ex.", "100 ex.", "250 ex.", "500 ex.", "1 000 ex. (Offset)"]
    elif 'roll-up' in slug or 'banner' in slug or 'photocall' in slug or 'plv' in slug or 'comptoir' in slug:
        cat_id = "roll-ups-plv"
        cat_name = "Roll-ups & PLV"
        img = "/assets/hero-main-hd.png"
        formats = ["85 × 200 cm (Standard)", "100 × 200 cm", "120 × 200 cm", "150 × 200 cm", "Photocall 240 × 240 cm / 300 × 240 cm"]
        papers = ["Bâche PVC 450g M1 anti-incurvation", "Tissu polyester stretch anti-reflet", "Polypropylène dos gris occultant"]
        finishes = ["Structure aluminium anodisé avec pieds pivotants", "Sac de transport matelassé inclus", "Double face", "Montage prêt à l'emploi"]
        quantities = ["1 ex.", "2 ex.", "5 ex.", "10 ex.", "25 ex.", "50 ex."]
    elif 'bache' in slug or 'vinyle' in slug or 'papier-peint' in slug or 'marquage-textile' in slug or 'covering' in slug:
        cat_id = "supports-souples"
        cat_name = "Supports Souples"
        img = "/assets/realisation-bache.webp"
        formats = ["Largeur jusqu'à 3,20 m sans raccord", "Longueur sur mesure", "Découpe carrée ou à la forme"]
        papers = ["Bâche PVC 510g enduite", "Bâche microperforée Mesh coupe-vent", "Vinyle adhésif monomère ou polymère", "Vinyle microperforé One-Way"]
        finishes = ["Oeillets métalliques périphériques tous les 50 cm", "Ourlet de renfort thermo-soudé", "Fourreaux haut et bas", "Lamination anti-UV"]
        quantities = ["1 pièce sur mesure", "Grandes séries événementielles"]
    elif 'panneau' in slug or 'drapeau' in slug or 'tableau-toile' in slug or 'lettres-boitiers' in slug or 'plaque-pro' in slug or 'cadre-selfie' in slug:
        cat_id = "supports-rigides"
        cat_name = "Supports Rigides"
        img = "/assets/categorie-grand-format.webp"
        formats = ["Forex 3mm, 5mm, 10mm", "Aluminium Dibond composite 3mm", "Plexiglas coulé transparent 5mm / 8mm", "Akylux alvéolaire 3,5mm"]
        papers = ["Impression directe UV à plat", "Contrecollage vinyle polymère haute durabilité avec plastification protectrice"]
        finishes = ["Découpe numérique fraisée", "Perforation aux 4 coins", "Entretoises murales inox", "Pieds de lestage pour drapeaux"]
        quantities = ["À l'unité", "5 à 20 ex.", "Grandes quantités pour chantiers et réseaux"]
    elif 'tableau-photo' in slug or 'mug-personnalise' in slug or 'magnet-photo' in slug or 'cadeaux-photo' in slug or 't-shirt-personnalise' in slug:
        cat_id = "souvenirs-photos"
        cat_name = "Souvenirs Photos"
        img = "/assets/realisation-luxe.webp"
        formats = ["Formats standards photo : 20×30 cm, 30×40 cm, 50×70 cm, 70×100 cm", "Mug 325 ml", "Magnets frigo souples"]
        papers = ["Véritable toile canvas coton 380g", "Châssis bois en pin massif 2cm ou 4cm", "Céramique blanche AAA haute brillance"]
        finishes = ["Impression encres pigmentaires haute fidélité", "Vernis de protection UV", "Boîte cadeau individuelle"]
        quantities = ["1 pièce", "5 pièces", "20 pièces", "100 pièces (cadeaux d'entreprise)"]
    elif 'stylo' in slug or 'porte-cle' in slug or 'cle-usb' in slug or 'tapis-souris' in slug or 'power-bank' in slug or 'gourde' in slug or 'tote-bag' in slug or 'agenda' in slug or 'goodies' in slug or 'badge' in slug or 'sac-a-dos' in slug or 'accessoires' in slug:
        cat_id = "goodies-gadgets"
        cat_name = "Goodies & Gadgets"
        img = "/assets/categorie-textile.webp"
        formats = ["Dimensions standard selon objet publicitaire", "Zone de marquage optimisée pour votre logo"]
        papers = ["Métal, plastique recyclé, bambou, acier inoxydable, coton naturel 140g à 280g"]
        finishes = ["Tampographie couleur", "Gravure laser inaltérable", "Sérigraphie textile", "Impression numérique UV quadri directe"]
        quantities = ["50 ex.", "100 ex.", "250 ex.", "500 ex.", "1 000 ex.", "2 500 ex."]
    elif 'menu-restaurant' in slug or 'set-de-table' in slug or 'pochette-couverts' in slug or 'protege-menu' in slug:
        cat_id = "menus-restaurant"
        cat_name = "Menus Restaurant"
        img = "/assets/categorie-restaurants.webp"
        formats = ["A4 (21 × 29,7 cm)", "A3 (29,7 × 42 cm)", "Format étroit 14 × 29,7 cm", "Sets de table 30 × 42 cm"]
        papers = ["Papier indéchirable résistant à l'eau Synaps", "Papier offset 90g pour sets de table", "Carton 350g avec encapsulage rigide 125 microns"]
        finishes = ["Encapsulage brillant ou mat lavable", "Pelliculage antibactérien", "Coins arrondis hygiéniques", "Rainage pour pliage facile"]
        quantities = ["25 ex.", "50 ex.", "100 ex.", "250 ex.", "500 ex.", "1 000 ex. (Sets jetables : 2 500 ex. à 10 000 ex.)"]
    elif 'carnet' in slug or 'facture' in slug or 'ordonnance' in slug or 'papier-en-tete' in slug or 'enveloppe' in slug or 'tampon' in slug:
        cat_id = "papeterie-bureautique"
        cat_name = "Papeterie & Bureautique"
        img = "/assets/categorie-carnets.webp"
        formats = ["A4 (21 × 29,7 cm)", "A5 (14,8 × 21 cm)", "A6 (10,5 × 14,8 cm)", "Enveloppes DL (11 × 22 cm), C5 (16,2 × 22,9 cm), C4 (22,9 × 32,4 cm)"]
        papers = ["Autocopiant NCR 60g (Blanc / Jaune / Rose)", "Offset blanc laser garanti 90g et 100g", "Papier vergé filigrané"]
        finishes = ["Duplicata (2 feuillets) ou Triplicata (3 feuillets)", "Numérotation séquentielle consécutive", "Perforation détachable et souche agrafée", "Encollage en tête avec carton intercalaire"]
        quantities = ["10 carnets", "25 carnets", "50 carnets", "100 carnets", "250 carnets"]

    # Refined titles & descriptions
    TITLE_MAP = {
        'flyer-standard': "Flyers & Prospectus Publicitaires Standards",
        'flyer-sur-mesure': "Flyers Découpés sur Mesure",
        'flyer-luxe': "Flyers de Prestige (Vernis 3D & Dorure)",
        'depliant-2-volets': "Dépliants Publicitaires 2 Volets (4 Pages)",
        'depliant-3-volets': "Dépliants Publicitaires 3 Volets (6 Pages)",
        'depliant-4-volets': "Dépliants Publicitaires 4 Volets (8 Pages)",
        'carte-de-visite-standard': "Cartes de Visite Professionnelles Standards",
        'carte-de-visite-luxe': "Cartes de Visite Luxe (Vernis 3D & Dorure)",
        'carte-de-visite-pvc': "Cartes de Visite PVC Rigides & RFID",
        'carte-de-visite-papiers-speciaux': "Cartes de Visite Papiers d'Art & Spéciaux",
        'carte-de-visite-recyclee': "Cartes de Visite Écologiques & Recyclées",
        'carte-de-visite-double': "Cartes de Visite Doubles 2 Volets Rainées",
        'carte-de-visite-sur-mesure': "Cartes de Visite Découpe sur Mesure & Tranche Colorée",
        'carte-de-fidelite': "Cartes de Fidélité Commerces & Restaurants",
        'carte-evenement-badge': "Cartes d'Invitation & Badges Événementiels",
        'brochure-agrafee': "Brochures Agrafées 2 Points Métal",
        'catalogue-dos-carre-colle': "Catalogues Produits Dos Carré Collé",
        'rapport-activite-wire-o': "Rapports Annuels & Bilans Reliure Spirale Wire-O",
        'planner-agenda': "Planners, Semainiers & Agendas d'Entreprise",
        'livre-edition': "Livres & Éditions Reliées (Couverture Souple ou Rigide)",
        'bloc-notes': "Bloc-notes Personnalisés (Spirale ou Encollés)",
        'papier-en-tete': "Papier En-tête Professionnel A4",
        'enveloppe-personnalisee': "Enveloppes d'Entreprise Personnalisées (DL, C5, C4)",
        'chemise-a-rabat': "Chemises à Rabats & Pochettes Documentaires",
        'ordonnance-medicale': "Ordonnances Médicales Sécurisées A5",
        'carnet-autocopiant-ncr': "Carnets de Factures Autocopiants NCR & Bons de Commande",
        'cachet-tampon-encreur': "Tampons Encreurs Automatiques Trodat & Cachets d'Entreprise",
        'attestation-diplome': "Diplômes & Attestations Papier d'Art",
        'plan-architecture': "Tirage de Plans d'Architecture & DAO",
        'dossier-cartonne': "Dossiers Cartonnés & Sous-chemises",
        'accroche-porte': "Accroche-porte Hôtels & Établissements",
        'chevalet-bureau': "Chevalets de Table & Calendriers de Bureau",
        'boite-pliante-souple': "Boîtes Pliantes & Étuis Produits Personnalisés",
        'packaging-alimentaire': "Packaging & Boîtes Alimentaires Certifiées",
        'boite-expedition-ecommerce': "Boîtes d'Expédition E-commerce Renforcées",
        'boite-luxe-rigide': "Coffrets & Boîtes Rigides de Prestige",
        'sac-cartonne-boutique': "Sacs Boutique en Papier & Carton avec Poignées Cordelette",
        'pochette-etui-packaging': "Pochettes & Fourreaux Produits sur Mesure",
        'papier-cadeau-soie': "Papier Cadeau & Papier de Soie Personnalisé",
        'etiquette-rouleau-bobine': "Étiquettes Adhésives en Rouleau / Bobine",
        'etiquette-format-standard': "Étiquettes Adhésives Formats Standards",
        'etiquette-transparente': "Étiquettes Adhésives Transparentes Découpées",
        'stickers-decoupe-forme': "Stickers Découpés à la Forme (Kiss-cut / Die-cut)",
        'vitrophanie-macaron': "Vitrophanies & Stickers Vitrines Repositionnables",
        'ruban-adhesif-scotch': "Ruban Adhésif & Scotch Personnalisé avec Logo",
        'affiche-publicitaire': "Affiches Publicitaires Grand Format A3 / A2 / A1 / A0",
        'affiche-sur-mesure': "Affiches d'Événement sur Mesure",
        'poster-photo-hd': "Posters Photos Haute Définition Satinés",
        'porte-affiche-cadre': "Porte-affiches & Cadres Clippants Aluminium",
        'plaque-magnetique': "Plaques Magnétiques Amovibles pour Véhicules",
        'roll-up-standard': "Roll-Up Banners Rétractables Standards avec Housse",
        'roll-up-luxe-double-face': "Roll-Up Luxe & Banners Double Face",
        'x-banner': "X-Banners Économiques & Légers",
        'recharge-visuel-rollup': "Recharges de Visuel pour Roll-Up",
        'photocall-mur-image': "Murs d'Image Photocall Événementiels",
        'presentoir-carton': "Présentoirs PLV en Carton de Sol et Comptoir",
        'plv-exterieur-stop-trottoir': "Stop-trottoirs & PLV Extérieure Résistante aux Intempéries",
        'plv-plexiglas': "Présentoirs & Porte-visuels en Plexiglas Transparent",
        'comptoir-accueil-salon': "Comptoirs d'Accueil Mobiles pour Salons",
        'vinyle-adhesif-grand-format': "Vinyles Adhésifs Grand Format Vitrine & Mur",
        'vinyle-microperfore-one-way': "Vinyles Microperforés One-Way pour Vitrines & Véhicules",
        'bache-pvc-banderole': "Bâches PVC Publicitaires & Banderoles Événementielles",
        'papier-peint-personnalise': "Papier Peint Décoratif Personnalisé sans Raccord",
        'affiche-grand-format-urbaine': "Affiches Urbaines Grand Format (Abribus & Sucettes)",
        'plan-grand-format': "Plans Grand Format Haute Précision Technique",
        'marquage-textile-pro': "Marquage Textile Professionnel & Sérigraphie",
        'covering-flocage-vehicule': "Covering & Flocage Publicitaire de Véhicules",
        'panneau-forex-pvc': "Panneaux Forex PVC Expansé (3mm / 5mm / 10mm)",
        'panneau-aluminium-dibond': "Panneaux Aluminium Composite Dibond Haute Rigidité",
        'panneau-plexiglas': "Plaques & Panneaux Plexiglas Transparent ou Dépoli",
        'panneau-alveolaire-chantier': "Panneaux Akylux Alvéolaires pour Chantiers & Permis de Construire",
        'drapeau-beach-flag': "Drapeaux Publicitaires Beach Flags & Oriflammes Plume",
        'tableau-toile-chassis': "Tableaux sur Toile d'Art Tendue sur Châssis Bois",
        'lettres-boitiers-logo-3d': "Logos 3D Relief Découpés & Enseignes Lettres Boîtiers",
        'plaque-professionnelle': "Plaques Professionnelles Gravées (Médecins, Avocats, Notaires)",
        'cadre-selfie-evenement': "Cadres à Selfie Événementiels Rigides Personnalisés",
        'tableau-photo-personnalise': "Tableaux Photos Personnalisés sur Toile ou Plexi",
        't-shirt-personnalise': "T-shirts & Polos d'Entreprise Personnalisés",
        'mug-personnalise': "Mugs Photos & Tasses Personnalisées en Céramique",
        'magnet-photo': "Magnets Photos pour Frigo & Supports Métalliques",
        'cadeaux-photo-personnalises': "Cadeaux Photos Personnalisés (Puzzles, Coussins, Tapis de Souris)",
        'stylo-publicitaire': "Stylos Publicitaires Personnalisés avec Logo",
        'porte-cle-personnalise': "Porte-clés Publicitaires Métal, Acrylique & Cuir",
        'cle-usb-publicitaire': "Clés USB Publicitaires Personnalisées avec Logo",
        'tapis-souris-personnalise': "Tapis de Souris Ergonomiques Publicitaires",
        'power-bank-personnalise': "Batteries Externes Power Banks Personnalisées",
        'gourde-bouteille-isotherme': "Gourdes & Bouteilles Isothermes en Inox Gravées",
        'tote-bag-personnalise': "Tote Bags en Coton Écologique Personnalisés",
        'calendrier-agenda-entreprise': "Calendriers & Agendas d'Entreprise Personnalisés",
        'goodies-ecologiques-bambou': "Goodies Écologiques en Bambou, Liège & Matières Recyclées",
        'goodies-ete-plage': "Goodies d'Été & Articles de Plage Publicitaires",
        'pare-soleil-voiture': "Pare-soleil de Voiture Publicitaires Pliables",
        'badge-publicitaire-epingle': "Badges Publicitaires Épingles & Magnétiques",
        'porte-carte-publicitaire': "Porte-cartes de Visite & Étuis Anti-RFID",
        'puzzle-personnalise': "Puzzles Personnalisés Promotionnels",
        'jeu-de-cartes-personnalise': "Jeux de Cartes Personnalisés sous Étui Imprimé",
        'sac-a-dos-promotionnel': "Sacs à Dos & Sacoches Ordinateur Promotionnels",
        'accessoires-publicitaires-evenement': "Tours de Cou Lanyards & Accessoires Événementiels",
        'menu-restaurant-standard': "Menus Restaurant Standards Indéchirables ou Pelliculés",
        'menu-restaurant-plie': "Menus Restaurant Pliés 2 ou 3 Volets",
        'menu-restaurant-plastifie-rigide': "Menus Restaurant Plastifiés Rigides Encapsulés Lavables",
        'protege-menu-carnet-addition': "Protège-menus Rigides & Porte-additions Similicuir",
        'set-de-table-restaurant': "Sets de Table en Papier Personnalisés Jetables",
        'pochette-couverts-serviette': "Pochettes à Couverts & Ronds de Serviette Personnalisés",
        'ticket-billetterie': "Billetterie & Tickets d'Événement Numérotés avec Souche Détachable"
    }

    title = TITLE_MAP.get(slug, raw_title)
    shortDesc = f"Impression professionnelle de {title.lower()} avec finitions soignées et livraison rapide partout au Maroc par MATBAA LIK."
    description = (
        f"Commandez vos {title.lower()} chez MATBAA LIK, votre imprimeur professionnel de référence au Maroc. "
        f"Nous combinons les technologies d'impression numérique et offset les plus performantes pour vous garantir "
        f"des couleurs éclatantes, un repérage parfait et une restitution fidèle de votre identité visuelle. "
        f"Chaque commande bénéficie d'une vérification PAO minutieuse avant mise sous presse et d'une prise en charge sur mesure "
        f"adaptée à vos exigences techniques et à vos délais."
    )
    seoTitle = f"{title} | Impression au Maroc - MATBAA LIK"
    seoDescription = f"Commandez vos {title.lower()} au Maroc chez MATBAA LIK. Qualité d'impression supérieure, finitions personnalisées et devis express sous 2h."

    return {
        'id': slug,
        'slug': slug,
        'title': title,
        'categoryId': cat_id,
        'categoryName': cat_name,
        'shortDesc': shortDesc,
        'description': description,
        'image': img,
        'formats': formats,
        'papers': papers,
        'finishes': finishes,
        'quantities': quantities,
        'turnaround': turnaround,
        'features': features,
        'seoTitle': seoTitle,
        'seoDescription': seoDescription
    }

canonical_products = [get_product_details(s) for s in canonical_slugs]

# Legacy slug aliases
slug_aliases = {
    'carnets-facturation': 'carnet-autocopiant-ncr',
    'cartes-papeterie': 'carte-de-visite-standard',
    'flyers-publicite': 'flyer-standard',
    'brochures-catalogues': 'catalogue-dos-carre-colle',
    'stickers-packaging': 'boite-pliante-souple',
    'grand-format': 'roll-up-standard',
    'restaurants-commerces': 'menu-restaurant-standard',
    'textile-goodies': 'tote-bag-personnalise',
    'flyer-a5': 'flyer-standard',
    'flyer-a6': 'flyer-standard',
    'carte-visite-standard': 'carte-de-visite-standard',
    'carte-visite-luxe': 'carte-de-visite-luxe',
    'roll-up': 'roll-up-standard',
    'rollup': 'roll-up-standard',
    'bache-pvc': 'bache-pvc-banderole',
    'factures-ncr': 'carnet-autocopiant-ncr'
}

# Output TypeScript file
ts_code = """// Centralized Catalog Registry for MATBAA LIK
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

export const CATEGORIES: Category[] = """ + json.dumps(categories, indent=2, ensure_ascii=False) + """;

export const CANONICAL_PRODUCTS: Product[] = """ + json.dumps(canonical_products, indent=2, ensure_ascii=False) + """;

export const SLUG_ALIASES: Record<string, string> = """ + json.dumps(slug_aliases, indent=2, ensure_ascii=False) + """;

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
"""

with open('src/data/catalog.ts', 'w', encoding='utf-8') as out:
    out.write(ts_code)

print("Generated src/data/catalog.ts successfully!")
