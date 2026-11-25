"""
MATBAA LIK — Export Pricing Database to CSV / Excel
Usage: python scripts/pricing_export_csv.py
Exports src/data/pricing.json to data/matbaa_lik_pricing_catalog.csv (Excel-compatible with UTF-8 BOM).
"""

import json
import csv
import os

PRICING_JSON_PATH = 'src/data/pricing.json'
CSV_EXPORT_PATH = 'data/matbaa_lik_pricing_catalog.csv'

def export_pricing_to_csv():
    if not os.path.exists(PRICING_JSON_PATH):
        print(f"Error: {PRICING_JSON_PATH} not found.")
        return

    with open(PRICING_JSON_PATH, 'r', encoding='utf-8') as f:
        pricing_db = json.load(f)

    csv_rows = []
    for slug, prod in pricing_db.items():
        if prod.get("hasVerifiedPrices") and prod.get("tiers"):
            for t in prod["tiers"]:
                price_ht = t.get("priceHT", 0)
                price_ttc = round(price_ht * 1.20, 2) if price_ht else ""
                csv_rows.append({
                    "product_slug": slug,
                    "product_title": prod.get("title", ""),
                    "category_id": prod.get("categoryId", ""),
                    "category_name": prod.get("categoryName", ""),
                    "format": t.get("format", ""),
                    "paper": t.get("paper", ""),
                    "finish": t.get("finish", ""),
                    "quantity": t.get("quantity", ""),
                    "price_mad_ht": price_ht if price_ht else "",
                    "price_mad_ttc": price_ttc,
                    "currency": prod.get("currency", "MAD"),
                    "tax_basis": prod.get("taxBasis", "HT"),
                    "source_url": prod.get("sourceUrl", ""),
                    "verification_date": prod.get("verificationDate", ""),
                    "is_provisional": "TRUE" if prod.get("isProvisional") else "FALSE",
                    "pricing_status": "VERIFIED_REFERENCE"
                })
        else:
            csv_rows.append({
                "product_slug": slug,
                "product_title": prod.get("title", ""),
                "category_id": prod.get("categoryId", ""),
                "category_name": prod.get("categoryName", ""),
                "format": "Sur mesure",
                "paper": "Au choix",
                "finish": "Personnalisée",
                "quantity": "Sur demande",
                "price_mad_ht": "",
                "price_mad_ttc": "",
                "currency": prod.get("currency", "MAD"),
                "tax_basis": prod.get("taxBasis", "HT"),
                "source_url": prod.get("sourceUrl", "https://matbaalik.ma/devis"),
                "verification_date": prod.get("verificationDate", ""),
                "is_provisional": "TRUE",
                "pricing_status": "PRIX_SUR_DEVIS"
            })

    fieldnames = [
        "product_slug", "product_title", "category_id", "category_name",
        "format", "paper", "finish", "quantity",
        "price_mad_ht", "price_mad_ttc", "currency", "tax_basis",
        "source_url", "verification_date", "is_provisional", "pricing_status"
    ]

    os.makedirs(os.path.dirname(CSV_EXPORT_PATH), exist_ok=True)
    with open(CSV_EXPORT_PATH, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, delimiter=';')
        writer.writeheader()
        writer.writerows(csv_rows)

    print(f"Export successful: {len(csv_rows)} rows written to {CSV_EXPORT_PATH}")

if __name__ == "__main__":
    export_pricing_to_csv()
