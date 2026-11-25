"""
MATBAA LIK — Import & Validate Pricing from CSV / Excel
Usage: python scripts/pricing_import_csv.py [optional_path_to_csv]
Reads the CSV/Excel file, validates prices, and updates src/data/pricing.json.
Allows the business owner to modify prices in Excel and update the entire site instantly.
"""

import json
import csv
import os
import sys

PRICING_JSON_PATH = 'src/data/pricing.json'
DEFAULT_CSV_PATH = 'data/matbaa_lik_pricing_catalog.csv'

def import_pricing_from_csv(csv_path=DEFAULT_CSV_PATH):
    if not os.path.exists(csv_path):
        print(f"Error: CSV file '{csv_path}' not found.")
        return False

    # Load existing pricing JSON to preserve structure and metadata
    if os.path.exists(PRICING_JSON_PATH):
        with open(PRICING_JSON_PATH, 'r', encoding='utf-8') as f:
            pricing_db = json.load(f)
    else:
        pricing_db = {}

    # Read CSV
    with open(csv_path, 'r', encoding='utf-8-sig') as f:
        # Detect delimiter (semicolon or comma)
        sample = f.read(2048)
        f.seek(0)
        delimiter = ';' if ';' in sample else ','
        reader = csv.DictReader(f, delimiter=delimiter)

        # Group by product_slug
        imported_tiers = {}
        for row_num, row in enumerate(reader, start=2):
            slug = (row.get("product_slug") or "").strip()
            if not slug:
                continue

            raw_price = (row.get("price_mad_ht") or "").strip().replace(',', '.')
            status = (row.get("pricing_status") or "").strip().upper()
            is_provisional = (row.get("is_provisional") or "").strip().upper() in ["TRUE", "VRAI", "1", "YES"]

            price_ht = None
            if raw_price:
                try:
                    price_ht = float(raw_price)
                except ValueError:
                    print(f"Warning line {row_num}: Invalid price '{raw_price}' for {slug}. Treated as 'sur devis'.")
                    price_ht = None

            if slug not in imported_tiers:
                imported_tiers[slug] = {
                    "tiers": [],
                    "title": row.get("product_title", slug),
                    "categoryId": row.get("category_id", ""),
                    "categoryName": row.get("category_name", ""),
                    "sourceUrl": row.get("source_url", "https://matbaalik.ma/devis"),
                    "verificationDate": row.get("verification_date", "2026-11-24"),
                    "isProvisional": is_provisional,
                    "currency": row.get("currency", "MAD"),
                    "taxBasis": row.get("tax_basis", "HT"),
                }

            if price_ht is not None and price_ht > 0:
                imported_tiers[slug]["tiers"].append({
                    "format": (row.get("format") or "").strip(),
                    "paper": (row.get("paper") or "").strip(),
                    "finish": (row.get("finish") or "").strip(),
                    "quantity": (row.get("quantity") or "").strip(),
                    "priceHT": price_ht,
                })

    # Update database
    updated_count = 0
    for slug, data in imported_tiers.items():
        if slug in pricing_db:
            pricing_db[slug]["tiers"] = data["tiers"]
            pricing_db[slug]["hasVerifiedPrices"] = len(data["tiers"]) > 0
            pricing_db[slug]["sourceUrl"] = data["sourceUrl"]
            pricing_db[slug]["verificationDate"] = data["verificationDate"]
            pricing_db[slug]["isProvisional"] = data["isProvisional"]
            if not pricing_db[slug]["hasVerifiedPrices"]:
                pricing_db[slug]["pricingDisclaimer"] = "Tarification sur devis personnalisé : calculée au plus juste selon vos spécifications exactes sous 2h ouvrées."
            else:
                pricing_db[slug]["pricingDisclaimer"] = "Tarif indicatif de référence marché marocain (Source 24hprint.ma au 24/11/2026), présenté à titre provisoire et soumis à validation préalable par MATBAA LIK. Devis définitif confirmé sous 2h."
            updated_count += 1
        else:
            pricing_db[slug] = {
                "slug": slug,
                "title": data["title"],
                "categoryId": data["categoryId"],
                "categoryName": data["categoryName"],
                "hasVerifiedPrices": len(data["tiers"]) > 0,
                "sourceUrl": data["sourceUrl"],
                "verificationDate": data["verificationDate"],
                "currency": data["currency"],
                "taxBasis": data["taxBasis"],
                "isProvisional": data["isProvisional"],
                "notes": "Imported from CSV catalog.",
                "pricingDisclaimer": "Tarif indicatif de référence marché marocain soumis à validation MATBAA LIK.",
                "tiers": data["tiers"]
            }
            updated_count += 1

    # Save updated JSON
    with open(PRICING_JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(pricing_db, f, indent=2, ensure_ascii=False)

    print(f"Import successful! Updated {updated_count} products in {PRICING_JSON_PATH}.")
    return True

if __name__ == "__main__":
    csv_file = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_CSV_PATH
    import_pricing_from_csv(csv_file)
