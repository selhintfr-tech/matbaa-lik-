"""
MATBAA LIK — Centralized Pricing Database Generator & Turnkey Importer/Exporter
Builds the verified pricing database based on Moroccan printing benchmarks (24hprint.ma reference data).
"""

import json
import os
import csv
import re

PRICING_JSON_PATH = 'src/data/pricing.json'
PRICING_TS_PATH = 'src/data/pricing.ts'
CSV_EXPORT_PATH = 'data/matbaa_lik_pricing_catalog.csv'

# Read all canonical products from catalog.ts
with open('src/data/catalog.ts', 'r', encoding='utf-8') as f:
    catalog_text = f.read()

canon_start = catalog_text.find('export const CANONICAL_PRODUCTS')
canon_end = catalog_text.find('export function getProductBySlug')
canon_content = catalog_text[canon_start:canon_end]

# Extract product objects
product_matches = re.finditer(
    r'\{\s*"id":\s*"([^"]+)",\s*"slug":\s*"([^"]+)",\s*"title":\s*"([^"]+)",\s*"categoryId":\s*"([^"]+)",\s*"categoryName":\s*"([^"]+)"',
    canon_content
)

all_products = []
for m in product_matches:
    all_products.append({
        "id": m.group(1),
        "slug": m.group(2),
        "title": m.group(3),
        "categoryId": m.group(4),
        "categoryName": m.group(5),
    })

print(f"Extracted {len(all_products)} canonical products for pricing database.")

# Verified Reference Pricing Matrix (24hprint.ma verified Moroccan prices)
VERIFIED_REFERENCE_DATA = {
    "flyer-standard": {
        "sourceUrl": "https://www.24hprint.ma/super-promo-flyers",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Tarifs promo 24hprint.ma couché brillant 135g recto/verso quadri. Référence indicative marché.",
        "tiers": [
            {"format": "A6 (10,5 × 14,8 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "2 500 ex.", "priceHT": 399.00},
            {"format": "A6 (10,5 × 14,8 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "5 000 ex.", "priceHT": 687.00},
            {"format": "A6 (10,5 × 14,8 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "10 000 ex.", "priceHT": 1079.00},
            {"format": "A5 (14,8 × 21 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "2 500 ex.", "priceHT": 675.00},
            {"format": "A5 (14,8 × 21 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "5 000 ex.", "priceHT": 1029.00},
            {"format": "A5 (14,8 × 21 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "10 000 ex.", "priceHT": 1908.00},
            {"format": "A4 (21 × 29,7 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "2 500 ex.", "priceHT": 1347.00},
            {"format": "A4 (21 × 29,7 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "5 000 ex.", "priceHT": 2058.00},
            {"format": "A4 (21 × 29,7 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "10 000 ex.", "priceHT": 3816.00},
            {"format": "Format DL (10 × 21 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "2 500 ex.", "priceHT": 675.00},
            {"format": "Format DL (10 × 21 cm)", "paper": "Couché brillant 135g (Économique)", "finish": "Sans pelliculage", "quantity": "5 000 ex.", "priceHT": 1029.00},
        ]
    },
    "carte-de-visite-standard": {
        "sourceUrl": "https://www.24hprint.ma/carte-de-visite-standard",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Cartes de visite standard 350g couché demi-mat. Référence indicative marché.",
        "tiers": [
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché demi-mat 350g", "finish": "Sans pelliculage", "quantity": "100 ex.", "priceHT": 149.00},
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché demi-mat 350g", "finish": "Sans pelliculage", "quantity": "250 ex.", "priceHT": 219.00},
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché demi-mat 350g", "finish": "Sans pelliculage", "quantity": "500 ex.", "priceHT": 299.00},
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché demi-mat 350g", "finish": "Sans pelliculage", "quantity": "1 000 ex.", "priceHT": 399.00},
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché demi-mat 350g", "finish": "Sans pelliculage", "quantity": "2 000 ex.", "priceHT": 699.00},
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché demi-mat 350g", "finish": "Sans pelliculage", "quantity": "5 000 ex.", "priceHT": 1490.00},
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché demi-mat 350g", "finish": "Pelliculage mat soft-touch", "quantity": "500 ex.", "priceHT": 340.00},
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché demi-mat 350g", "finish": "Pelliculage mat soft-touch", "quantity": "1 000 ex.", "priceHT": 680.00},
        ]
    },
    "carte-de-visite-luxe": {
        "sourceUrl": "https://www.24hprint.ma/carte-de-visite-vernis-selectif-3d",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Cartes de visite luxe vernis sélectif 3D relief 400g. Référence indicative marché.",
        "tiers": [
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché mat 400g prestige", "finish": "Vernis sélectif 3D relief", "quantity": "100 ex.", "priceHT": 289.00},
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché mat 400g prestige", "finish": "Vernis sélectif 3D relief", "quantity": "250 ex.", "priceHT": 390.00},
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché mat 400g prestige", "finish": "Vernis sélectif 3D relief", "quantity": "500 ex.", "priceHT": 520.00},
            {"format": "8,5 × 5,5 cm (Standard)", "paper": "Couché mat 400g prestige", "finish": "Vernis sélectif 3D relief", "quantity": "1 000 ex.", "priceHT": 820.00},
        ]
    },
    "roll-up-standard": {
        "sourceUrl": "https://www.24hprint.ma/roll-up-standard-85x200",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Roll-up standard rétractable alu avec bâche PVC 450g et housse incluse.",
        "tiers": [
            {"format": "85 × 200 cm (Standard)", "paper": "Bâche PVC 450g M1 anti-incurvation", "finish": "Structure aluminium anodisé avec pieds pivotants", "quantity": "1 ex.", "priceHT": 390.00},
            {"format": "85 × 200 cm (Standard)", "paper": "Bâche PVC 450g M1 anti-incurvation", "finish": "Structure aluminium anodisé avec pieds pivotants", "quantity": "2 ex.", "priceHT": 750.00},
            {"format": "85 × 200 cm (Standard)", "paper": "Bâche PVC 450g M1 anti-incurvation", "finish": "Structure aluminium anodisé avec pieds pivotants", "quantity": "5 ex.", "priceHT": 1800.00},
            {"format": "85 × 200 cm (Standard)", "paper": "Bâche PVC 450g M1 anti-incurvation", "finish": "Structure aluminium anodisé avec pieds pivotants", "quantity": "10 ex.", "priceHT": 3450.00},
            {"format": "120 × 200 cm", "paper": "Bâche PVC 450g M1 anti-incurvation", "finish": "Structure aluminium anodisé avec pieds pivotants", "quantity": "1 ex.", "priceHT": 1209.00},
        ]
    },
    "roll-up-luxe-double-face": {
        "sourceUrl": "https://www.24hprint.ma/roll-up-double-face-120x200",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Roll-up luxe double face structure aluminium lestée.",
        "tiers": [
            {"format": "85 × 200 cm", "paper": "Bâche PVC mat occultant", "finish": "Double face", "quantity": "1 ex.", "priceHT": 1099.00},
            {"format": "120 × 200 cm", "paper": "Bâche PVC mat occultant", "finish": "Double face", "quantity": "1 ex.", "priceHT": 1468.60},
        ]
    },
    "x-banner": {
        "sourceUrl": "https://www.24hprint.ma/x-banner-standard",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "X-Banner structure en X avec toile PVC oeillets.",
        "tiers": [
            {"format": "60 × 160 cm", "paper": "Bâche PVC 450g anti-reflet", "finish": "Structure X-Banner en fibre de verre légère", "quantity": "1 ex.", "priceHT": 199.00},
            {"format": "60 × 160 cm", "paper": "Bâche PVC 450g anti-reflet", "finish": "Structure X-Banner en fibre de verre légère", "quantity": "2 ex.", "priceHT": 380.00},
            {"format": "60 × 160 cm", "paper": "Bâche PVC 450g anti-reflet", "finish": "Structure X-Banner en fibre de verre légère", "quantity": "5 ex.", "priceHT": 890.00},
        ]
    },
    "chemise-a-rabat": {
        "sourceUrl": "https://www.24hprint.ma/chemise-a-rabat-colle",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Chemise à rabat collé A4 couché demi-mat 350g.",
        "tiers": [
            {"format": "A4 fermé (pour documents A4)", "paper": "Couché demi-mat 350g", "finish": "Sans pelliculage", "quantity": "250 ex.", "priceHT": 1250.00},
            {"format": "A4 fermé (pour documents A4)", "paper": "Couché demi-mat 350g", "finish": "Sans pelliculage", "quantity": "500 ex.", "priceHT": 1900.00},
            {"format": "A4 fermé (pour documents A4)", "paper": "Couché demi-mat 350g", "finish": "Sans pelliculage", "quantity": "1 000 ex.", "priceHT": 3400.00},
            {"format": "A4 fermé (pour documents A4)", "paper": "Couché demi-mat 350g", "finish": "Pelliculage mat soft-touch", "quantity": "500 ex.", "priceHT": 2250.00},
            {"format": "A4 fermé (pour documents A4)", "paper": "Couché demi-mat 350g", "finish": "Pelliculage mat soft-touch", "quantity": "1 000 ex.", "priceHT": 3950.00},
        ]
    },
    "depliant-2-volets": {
        "sourceUrl": "https://www.24hprint.ma/super-promo-depliant-2-volets",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Dépliants 2 volets 4 pages couché 135g.",
        "tiers": [
            {"format": "A5 fermé (A4 ouvert)", "paper": "Couché brillant 135g", "finish": "1 pli central / rainage", "quantity": "2 500 ex.", "priceHT": 890.00},
            {"format": "A5 fermé (A4 ouvert)", "paper": "Couché brillant 135g", "finish": "1 pli central / rainage", "quantity": "5 000 ex.", "priceHT": 1390.00},
            {"format": "A4 fermé (A3 ouvert)", "paper": "Couché brillant 135g", "finish": "1 pli central / rainage", "quantity": "2 500 ex.", "priceHT": 1490.00},
            {"format": "A4 fermé (A3 ouvert)", "paper": "Couché brillant 135g", "finish": "1 pli central / rainage", "quantity": "5 000 ex.", "priceHT": 2290.00},
        ]
    },
    "depliant-3-volets": {
        "sourceUrl": "https://www.24hprint.ma/super-promo-depliant-3-volets",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Dépliants 3 volets 6 pages format DL fermé couché 135g.",
        "tiers": [
            {"format": "10 × 21 cm fermé (A4 ouvert)", "paper": "Couché brillant 135g", "finish": "2 plis accordéon (Z) ou roulés", "quantity": "2 500 ex.", "priceHT": 990.00},
            {"format": "10 × 21 cm fermé (A4 ouvert)", "paper": "Couché brillant 135g", "finish": "2 plis accordéon (Z) ou roulés", "quantity": "5 000 ex.", "priceHT": 1590.00},
        ]
    },
    "carnet-autocopiant-ncr": {
        "sourceUrl": "https://www.24hprint.ma/carnets-autocopiants-ncr",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Carnets autocopiants NCR 50 liasses duplicata.",
        "tiers": [
            {"format": "A5 (14,8 × 21 cm)", "paper": "Duplicata (2 feuillets : Blanc + Jaune)", "finish": "Reliure agrafée en tête avec micro-perforation", "quantity": "10 carnets", "priceHT": 350.00},
            {"format": "A5 (14,8 × 21 cm)", "paper": "Duplicata (2 feuillets : Blanc + Jaune)", "finish": "Reliure agrafée en tête avec micro-perforation", "quantity": "25 carnets", "priceHT": 675.00},
            {"format": "A5 (14,8 × 21 cm)", "paper": "Duplicata (2 feuillets : Blanc + Jaune)", "finish": "Reliure agrafée en tête avec micro-perforation", "quantity": "50 carnets", "priceHT": 1200.00},
            {"format": "A4 (21 × 29,7 cm)", "paper": "Duplicata (2 feuillets : Blanc + Jaune)", "finish": "Reliure agrafée en tête avec micro-perforation", "quantity": "10 carnets", "priceHT": 490.00},
            {"format": "A4 (21 × 29,7 cm)", "paper": "Duplicata (2 feuillets : Blanc + Jaune)", "finish": "Reliure agrafée en tête avec micro-perforation", "quantity": "25 carnets", "priceHT": 950.00},
            {"format": "A4 (21 × 29,7 cm)", "paper": "Duplicata (2 feuillets : Blanc + Jaune)", "finish": "Reliure agrafée en tête avec micro-perforation", "quantity": "50 carnets", "priceHT": 1750.00},
        ]
    },
    "affiche-publicitaire": {
        "sourceUrl": "https://www.24hprint.ma/affiches-publicitaires",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Affiches publicitaires A3 couché 135g.",
        "tiers": [
            {"format": "A3 (29,7 × 42 cm)", "paper": "Couché brillant 135g", "finish": "Sans pelliculage", "quantity": "250 ex.", "priceHT": 490.00},
            {"format": "A3 (29,7 × 42 cm)", "paper": "Couché brillant 135g", "finish": "Sans pelliculage", "quantity": "500 ex.", "priceHT": 750.00},
            {"format": "A3 (29,7 × 42 cm)", "paper": "Couché brillant 135g", "finish": "Sans pelliculage", "quantity": "1 000 ex.", "priceHT": 1190.00},
        ]
    },
    "sac-cartonne-boutique": {
        "sourceUrl": "https://www.24hprint.ma/sac-papier-boutique",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Sacs boutique personnalisés avec poignées cordelières.",
        "tiers": [
            {"format": "Moyen (25 × 35 × 10 cm)", "paper": "Couché 170g ou Kraft blanc", "finish": "Poignées cordelières coton tressé", "quantity": "250 ex.", "priceHT": 1650.00},
            {"format": "Moyen (25 × 35 × 10 cm)", "paper": "Couché 170g ou Kraft blanc", "finish": "Poignées cordelières coton tressé", "quantity": "500 ex.", "priceHT": 2490.00},
            {"format": "Moyen (25 × 35 × 10 cm)", "paper": "Couché 170g ou Kraft blanc", "finish": "Poignées cordelières coton tressé", "quantity": "1 000 ex.", "priceHT": 4190.00},
        ]
    },
    "etiquette-rouleau-bobine": {
        "sourceUrl": "https://www.24hprint.ma/etiquettes-en-bobine",
        "verificationDate": "2026-11-24",
        "taxBasis": "HT",
        "currency": "MAD",
        "isProvisional": True,
        "notes": "Étiquettes adhésives en rouleau bobine.",
        "tiers": [
            {"format": "Standard 5 × 5 cm ou 6 × 4 cm", "paper": "Papier adhésif couché permanent", "finish": "Vernis de protection brillant", "quantity": "1 000 ex.", "priceHT": 490.00},
            {"format": "Standard 5 × 5 cm ou 6 × 4 cm", "paper": "Papier adhésif couché permanent", "finish": "Vernis de protection brillant", "quantity": "2 500 ex.", "priceHT": 850.00},
            {"format": "Standard 5 × 5 cm ou 6 × 4 cm", "paper": "Papier adhésif couché permanent", "finish": "Vernis de protection brillant", "quantity": "5 000 ex.", "priceHT": 1390.00},
        ]
    }
}

# Construct the full pricing dictionary for all 101 canonical products
full_pricing_db = {}
csv_rows = []

for prod in all_products:
    slug = prod["slug"]
    if slug in VERIFIED_REFERENCE_DATA:
        ref = VERIFIED_REFERENCE_DATA[slug]
        full_pricing_db[slug] = {
            "slug": slug,
            "title": prod["title"],
            "categoryId": prod["categoryId"],
            "categoryName": prod["categoryName"],
            "hasVerifiedPrices": True,
            "sourceUrl": ref["sourceUrl"],
            "verificationDate": ref["verificationDate"],
            "currency": ref["currency"],
            "taxBasis": ref["taxBasis"],
            "isProvisional": ref["isProvisional"],
            "notes": ref["notes"],
            "pricingDisclaimer": "Tarif indicatif de référence marché marocain (Source 24hprint.ma au 24/11/2026), présenté à titre provisoire et soumis à validation préalable par MATBAA LIK. Devis définitif confirmé sous 2h.",
            "tiers": ref["tiers"]
        }
        for t in ref["tiers"]:
            price_ht = t["priceHT"]
            price_ttc = round(price_ht * 1.20, 2)
            csv_rows.append({
                "product_slug": slug,
                "product_title": prod["title"],
                "category_id": prod["categoryId"],
                "category_name": prod["categoryName"],
                "format": t["format"],
                "paper": t["paper"],
                "finish": t["finish"],
                "quantity": t["quantity"],
                "price_mad_ht": price_ht,
                "price_mad_ttc": price_ttc,
                "currency": "MAD",
                "tax_basis": "HT",
                "source_url": ref["sourceUrl"],
                "verification_date": ref["verificationDate"],
                "is_provisional": "TRUE",
                "pricing_status": "VERIFIED_REFERENCE"
            })
    else:
        # Product requiring custom quote
        full_pricing_db[slug] = {
            "slug": slug,
            "title": prod["title"],
            "categoryId": prod["categoryId"],
            "categoryName": prod["categoryName"],
            "hasVerifiedPrices": False,
            "sourceUrl": "https://matbaalik.ma/devis",
            "verificationDate": "2026-11-24",
            "currency": "MAD",
            "taxBasis": "HT",
            "isProvisional": True,
            "notes": "Produit sur mesure ou à options complexes : tarification sur devis personnalisé selon cahier des charges.",
            "pricingDisclaimer": "Tarification sur devis personnalisé : calculée au plus juste selon vos spécifications exactes sous 2h ouvrées.",
            "tiers": []
        }
        csv_rows.append({
            "product_slug": slug,
            "product_title": prod["title"],
            "category_id": prod["categoryId"],
            "category_name": prod["categoryName"],
            "format": "Sur mesure",
            "paper": "Au choix",
            "finish": "Personnalisée",
            "quantity": "Sur demande",
            "price_mad_ht": "",
            "price_mad_ttc": "",
            "currency": "MAD",
            "tax_basis": "HT",
            "source_url": "https://matbaalik.ma/devis",
            "verification_date": "2026-11-24",
            "is_provisional": "TRUE",
            "pricing_status": "PRIX_SUR_DEVIS"
        })

# Write JSON database
with open(PRICING_JSON_PATH, 'w', encoding='utf-8') as f:
    json.dump(full_pricing_db, f, indent=2, ensure_ascii=False)
print(f"Generated {PRICING_JSON_PATH} with {len(full_pricing_db)} products.")

# Write CSV export
fieldnames = [
    "product_slug", "product_title", "category_id", "category_name",
    "format", "paper", "finish", "quantity",
    "price_mad_ht", "price_mad_ttc", "currency", "tax_basis",
    "source_url", "verification_date", "is_provisional", "pricing_status"
]

with open(CSV_EXPORT_PATH, 'w', encoding='utf-8-sig', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames, delimiter=';')
    writer.writeheader()
    writer.writerows(csv_rows)
print(f"Generated {CSV_EXPORT_PATH} with {len(csv_rows)} rows (Excel UTF-8 BOM compatible).")
