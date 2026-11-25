import re
import json

# Load placements
with open('placements_dump.json', 'r', encoding='utf-8') as f:
    dump = json.load(f)

categories = dump['categories']
unique_labels = dump['unique_labels']

# Rules to map raw labels to canonical product slug
def resolve_canonical_slug(cat_name, sub_title, label):
    l = label.lower()
    s = sub_title.lower()
    c = cat_name.lower()

    # 1. Supers promos
    if 'supers promos' in c:
        if 'flyer' in l: return 'flyer-standard'
        if 'dépliant' in l or 'depliant' in l: return 'depliant-2-volets'
        if 'étiquette' in l or 'etiquette' in l or 'sticker' in l: return 'etiquette-rouleau-bobine'
        if 'en-tête' in l or 'en-tete' in l: return 'papier-en-tete'
        if 'ordonnance' in l: return 'ordonnance-medicale'
        if 'vernis sélectif' in l: return 'carte-de-visite-luxe'
        if 'autocollant' in l: return 'vinyle-adhesif-grand-format'
        if 'bâche' in l or 'bache' in l: return 'bache-pvc-banderole'
        if 'bloc' in l: return 'bloc-notes'

    # 2. Cartes de visite
    if 'cartes de visite' in c:
        if 'pvc' in l or 'rfid' in l or 'nfc' in l: return 'carte-de-visite-pvc'
        if 'texturé' in l or 'vergé' in l or 'kraft' in l or 'métallisé' in l or 'teinté masse' in l: return 'carte-de-visite-papiers-speciaux'
        if 'vernis' in l or 'dorure' in l or 'gaufrage' in l or 'lettrepress' in l: return 'carte-de-visite-luxe'
        if 'recyclé' in l or 'écologique' in l or 'ensemencé' in l: return 'carte-de-visite-recyclee'
        if 'double' in l or 'volet' in l or 'rainée' in l: return 'carte-de-visite-double'
        if 'fidélité' in l or 'gratter' in l: return 'carte-de-fidelite'
        if 'badge' in l or 'invitation' in l or 'salon' in l or 'tour de cou' in l: return 'carte-evenement-badge'
        if 'découpe' in l or 'multipapier' in l or 'sandwich' in l or 'perforation' in l or 'sur mesure' in l: return 'carte-de-visite-sur-mesure'
        return 'carte-de-visite-standard'

    # 3. Flyers & Dépliants
    if 'flyers' in c or 'dépliants' in c:
        if '2 volets' in s or '2 volets' in l: return 'depliant-2-volets'
        if '3 volets' in s or '3 volets' in l: return 'depliant-3-volets'
        if '4 volets' in s or '4 volets' in l: return 'depliant-4-volets'
        if 'chemise' in l or 'chemises' in s: return 'chemise-a-rabat'
        if 'billetterie' in l or 'ticket' in l: return 'ticket-billetterie'
        if 'jetable' in l or 'set' in l: return 'set-de-table-restaurant'
        if 'sur mesure' in l or 'sur mesure' in s: return 'flyer-sur-mesure'
        if 'luxe' in l or 'luxe' in s or 'kraft' in l or 'vernis' in l: return 'flyer-luxe'
        if 'dépliant' in l: return 'depliant-2-volets'
        return 'flyer-standard'

    # 4. Catalogues & Brochures
    if 'catalogues' in c or 'brochures' in c:
        if 'dos carré collé' in s or 'dos carré collé' in l or 'catalogue' in l: return 'catalogue-dos-carre-colle'
        if 'agrafée' in s or 'brochure' in l: return 'brochure-agrafee'
        if 'rapport' in s or 'rapport' in l: return 'rapport-activite-wire-o'
        if 'planner' in s or 'planner' in l: return 'planner-agenda'
        if 'livre' in s or 'livre' in l: return 'livre-edition'
        if 'bloc' in s or 'bloc' in l: return 'bloc-notes'
        return 'brochure-agrafee'

    # 5. Papeterie & Bureautique
    if 'papeterie' in c:
        if 'en-tête' in l or 'en-tête' in s: return 'papier-en-tete'
        if 'enveloppe' in l or 'pochette' in l or 'enveloppes' in s: return 'enveloppe-personnalisee'
        if 'bloc' in l or 'bloc' in s: return 'bloc-notes'
        if 'planner' in l or 'planner' in s: return 'planner-agenda'
        if 'chemise' in l or 'chemise' in s: return 'chemise-a-rabat'
        if 'ordonnance' in l or 'ordonnance' in s: return 'ordonnance-medicale'
        if 'ncr' in l or 'ncr' in s or 'carnet' in l: return 'carnet-autocopiant-ncr'
        if 'attestation' in l or 'diplôme' in l or 'attestations' in s: return 'attestation-diplome'
        if 'plan' in l or 'plans' in s: return 'plan-architecture'
        if 'dossier' in l or 'dossiers' in s: return 'dossier-cartonne'
        if 'accroche' in l or 'accroche' in s: return 'accroche-porte'
        if 'chevalet' in l or 'chevalets' in s: return 'chevalet-bureau'
        return 'papier-en-tete'

    # 6. Boîtes & Packaging
    if 'boîtes' in c or 'packaging' in c:
        if 'alimentaire' in l or 'alimentaire' in s: return 'packaging-alimentaire'
        if 'expédition' in l or 'expedition' in s or 'e-commerce' in l: return 'boite-expedition-ecommerce'
        if 'luxe' in l or 'rigide' in l or 'luxe' in s: return 'boite-luxe-rigide'
        if 'sac' in l and ('carton' in l or 'boutique' in l) or 'carton' in s: return 'sac-cartonne-boutique'
        if 'toile' in l or 'tote' in l: return 'tote-bag-personnalise'
        if 'scotch' in l or 'adhésif' in l: return 'ruban-adhesif-scotch'
        if 'présentoir' in l or 'presentoir' in s: return 'presentoir-carton'
        if 'cadeau' in l or 'soie' in l: return 'papier-cadeau-soie'
        if 'étui' in l or 'pochette' in l: return 'pochette-etui-packaging'
        return 'boite-pliante-souple'

    # 7. Étiquettes & Adhésifs
    if 'étiquettes' in c or 'adhesifs' in c or 'adhésifs' in c:
        if 'transparente' in l or 'transparent' in s: return 'etiquette-transparente'
        if 'bobine' in l or 'bobine' in s or 'rouleau' in l: return 'etiquette-rouleau-bobine'
        if 'vitrophanie' in l or 'macaron' in l or 'vitrophanies' in s: return 'vitrophanie-macaron'
        if 'scotch' in l: return 'ruban-adhesif-scotch'
        if 'forme' in l or 'découpe' in l or 'spéciale' in s: return 'stickers-decoupe-forme'
        return 'etiquette-format-standard'

    # 8. Affiches & Posters
    if 'affiches' in c or 'posters' in c:
        if 'sur mesure' in l or 'sur mesure' in s: return 'affiche-sur-mesure'
        if 'porte' in l or 'cadre' in l or 'porte-' in s: return 'porte-affiche-cadre'
        if 'magnétique' in l or 'magnetique' in s: return 'plaque-magnetique'
        if 'photo' in l or 'poster' in l: return 'poster-photo-hd'
        return 'affiche-publicitaire'

    # 9. Roll-ups & PLV
    if 'roll-ups' in c or 'plv' in c:
        if 'x-banner' in l or 'x-banner' in s: return 'x-banner'
        if 'recharge' in l or 'recharges' in s: return 'recharge-visuel-rollup'
        if 'photocall' in l or 'photocall' in s or 'mur' in l: return 'photocall-mur-image'
        if 'présentoir' in l or 'presentoir' in s: return 'presentoir-carton'
        if 'extérieur' in l or 'exterieur' in s or 'trottoir' in l: return 'plv-exterieur-stop-trottoir'
        if 'plexi' in l or 'plexiglas' in s: return 'plv-plexiglas'
        if 'comptoir' in l or 'comptoirs' in s: return 'comptoir-accueil-salon'
        if 'double' in l or 'luxe' in l: return 'roll-up-luxe-double-face'
        return 'roll-up-standard'

    # 10. Supports Souples
    if 'supports souples' in c:
        if 'autocollant' in l or 'vinyle' in l:
            if 'one way' in l or 'microperforé' in l: return 'vinyle-microperfore-one-way'
            return 'vinyle-adhesif-grand-format'
        if 'bâche' in l or 'tissu' in l or 'baches' in s: return 'bache-pvc-banderole'
        if 'peint' in l or 'papier peint' in s: return 'papier-peint-personnalise'
        if 'grand format' in l or 'affiche' in l: return 'affiche-grand-format-urbaine'
        if 'plan' in l or 'plans' in s: return 'plan-grand-format'
        if 'textile' in l or 'textile' in s: return 'marquage-textile-pro'
        if 'véhicule' in l or 'vehicule' in s: return 'covering-flocage-vehicule'
        return 'vinyle-adhesif-grand-format'

    # 11. Supports Rigides
    if 'supports rigides' in c:
        if 'plexi' in l: return 'panneau-plexiglas'
        if 'forex' in l: return 'panneau-forex-pvc'
        if 'métal' in l or 'metal' in s or 'alu' in l or 'dibond' in l: return 'panneau-aluminium-dibond'
        if 'alvéolaire' in l or 'akylux' in l or 'chantier' in l or 'alveolaire' in s: return 'panneau-alveolaire-chantier'
        if 'drapeau' in l or 'drapeaux' in s or 'flag' in l: return 'drapeau-beach-flag'
        if 'tableau' in l or 'toile' in l or 'tableaux' in s: return 'tableau-toile-chassis'
        if '3d' in l or 'relief' in l: return 'lettres-boitiers-logo-3d'
        if 'plaque' in l: return 'plaque-professionnelle'
        if 'selfie' in l: return 'cadre-selfie-evenement'
        return 'panneau-forex-pvc'

    # 12. Souvenirs Photos
    if 'souvenirs photos' in c:
        if 'tableau' in l or 'toile' in l or 'tableaux' in s: return 'tableau-photo-personnalise'
        if 'vêtement' in l or 't-shirt' in l or 'sweat' in l or 'casquette' in l or 'vetements' in s: return 't-shirt-personnalise'
        if 'mug' in l or 'mugs' in s: return 'mug-personnalise'
        if 'magnet' in l or 'magnets' in s: return 'magnet-photo'
        if 'coussin' in l or 'puzzle' in l or 'tapis' in l or 'porte-clé' in l or 'cadeaux' in s: return 'cadeaux-photo-personnalises'
        return 'tableau-photo-personnalise'

    # 13. Goodies & Gadgets
    if 'goodies' in c:
        if 'stylo' in l or 'stylos' in s: return 'stylo-publicitaire'
        if 'porte-clé' in l or 'porte-cle' in l or 'porte-clés' in s: return 'porte-cle-personnalise'
        if 'usb' in l or 'cles' in s: return 'cle-usb-publicitaire'
        if 'tapis' in l or 'souris' in s: return 'tapis-souris-personnalise'
        if 'power' in l or 'batterie' in l or 'power banks' in s: return 'power-bank-personnalise'
        if 'gourde' in l or 'bouteille' in l or 'mug' in l: return 'gourde-bouteille-isotherme'
        if 'tote' in l or 'sac en toile' in l: return 'tote-bag-personnalise'
        if 'sac' in l and 'dos' in l: return 'sac-a-dos-promotionnel'
        if 'agenda' in l or 'calendrier' in l: return 'calendrier-agenda-entreprise'
        if 'écologique' in l or 'bambou' in l or 'liège' in l or 'ecologiques' in s: return 'goodies-ecologiques-bambou'
        if 'soleil' in l or 'pare-soleil' in s: return 'pare-soleil-voiture'
        if 'badge' in l or 'badges' in s: return 'badge-publicitaire-epingle'
        if 'porte-carte' in l or 'porte-cartes' in s: return 'porte-carte-publicitaire'
        if 'puzzle' in l or 'puzzles' in s: return 'puzzle-personnalise'
        if 'jeu' in l or 'cartes' in s: return 'jeu-de-cartes-personnalise'
        if 'bloc' in l or 'skin' in l: return 'bloc-notes'
        if 'éventail' in l or 'chapeau' in l or 'lunettes' in l or 'gonflable' in l or 'ete' in s: return 'goodies-ete-plage'
        return 'accessoires-publicitaires-evenement'

    # 14. Menus Restaurant
    if 'menus' in c:
        if 'plié' in l or 'volet' in l or 'plies' in s: return 'menu-restaurant-plie'
        if 'rigide' in l or 'plastifié' in l or 'plastifies' in s: return 'menu-restaurant-plastifie-rigide'
        if 'couvert' in l or 'serviette' in l or 'couverts' in s: return 'pochette-couverts-serviette'
        if 'protège' in l or 'addition' in l: return 'protege-menu-carnet-addition'
        if 'set' in l: return 'set-de-table-restaurant'
        return 'menu-restaurant-standard'

    return 'produit-sur-mesure'

# Test resolution for all placements
resolved = []
unresolved = []
canonical_counts = {}

for c in categories:
    for s in c['submenus']:
        for p in s['products']:
            slug = resolve_canonical_slug(c['name'], s['title'], p)
            if not slug:
                unresolved.append((c['name'], s['title'], p))
            else:
                resolved.append((c['name'], s['title'], p, slug))
                canonical_counts[slug] = canonical_counts.get(slug, 0) + 1

print(f"Total resolved: {len(resolved)}")
print(f"Total unresolved: {len(unresolved)}")
print(f"Unique canonical products: {len(canonical_counts)}")
print("\nCanonical products and their placement frequencies:")
for slug, count in sorted(canonical_counts.items(), key=lambda x: -x[1]):
    print(f"  {slug:35s}: {count} placements")
