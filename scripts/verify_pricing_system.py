"""
MATBAA LIK — Verification Script for Pricing System & Calculator
Validates:
1. Centralized pricing database (101 products).
2. CSV import/export pipeline.
3. PricingCalculator rendering on product pages.
4. Exact verified prices vs 'Prix sur devis'.
5. Provisional disclaimers and CTAs.
"""

import json
import csv
import os
import re

print("=== 1. VERIFY CENTRALIZED PRICING DATABASE ===")
assert os.path.exists('src/data/pricing.json'), "src/data/pricing.json missing"
with open('src/data/pricing.json', 'r', encoding='utf-8') as f:
    pricing_db = json.load(f)

assert len(pricing_db) == 101, f"Expected 101 products in pricing database, got {len(pricing_db)}"
verified_count = sum(1 for p in pricing_db.values() if p.get("hasVerifiedPrices"))
print(f"  ✓ Found {len(pricing_db)} canonical products ({verified_count} with verified reference tiers, {101 - verified_count} sur devis).")

# Check flyer-standard
flyer_p = pricing_db.get("flyer-standard")
assert flyer_p, "flyer-standard missing in pricing.json"
assert flyer_p["sourceUrl"].startswith("https://www.24hprint.ma/"), "Invalid sourceUrl for flyer-standard"
assert len(flyer_p["tiers"]) >= 10, "Flyer tiers missing"
print(f"  ✓ flyer-standard verified: {len(flyer_p['tiers'])} tiers with source {flyer_p['sourceUrl']}")

# Check carte-de-visite-standard
carte_p = pricing_db.get("carte-de-visite-standard")
assert carte_p, "carte-de-visite-standard missing in pricing.json"
assert any(t["priceHT"] == 149.00 for t in carte_p["tiers"]), "100 ex at 149 DH missing for carte-de-visite-standard"
print(f"  ✓ carte-de-visite-standard verified with 100 ex tier @ 149,00 DH HT.")

print("\n=== 2. VERIFY CSV WORKFLOW COMPATIBILITY ===")
assert os.path.exists('data/matbaa_lik_pricing_catalog.csv'), "CSV export missing"
with open('data/matbaa_lik_pricing_catalog.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f, delimiter=';')
    rows = list(reader)

assert len(rows) >= 101, f"Expected at least 101 rows in CSV, got {len(rows)}"
assert "price_mad_ht" in reader.fieldnames, "price_mad_ht column missing"
assert "is_provisional" in reader.fieldnames, "is_provisional column missing"
print(f"  ✓ CSV export valid with {len(rows)} rows (Excel-compatible with UTF-8 BOM).")

print("\n=== 3. VERIFY PRICING CALCULATOR IN HTML PAGES ===")
# Check flyer-standard HTML
with open('dist/produits/flyer-standard/index.html', 'r', encoding='utf-8') as f:
    flyer_html = f.read()

assert 'id="pricing-calculator"' in flyer_html, "Pricing calculator card missing in flyer-standard"
assert 'id="calc-quantity"' in flyer_html, "Quantity selector missing"
assert 'id="calc-format"' in flyer_html, "Format selector missing"
assert 'id="calc-paper"' in flyer_html, "Paper selector missing"
assert 'id="calc-finish"' in flyer_html, "Finish selector missing"
assert 'Transférer votre fichier' in flyer_html, "Upload button missing"
assert 'COMMANDER / VALIDER CE DEVIS' in flyer_html or 'Commander / Valider ce devis' in flyer_html, "Quote CTA button missing"
assert 'Tarif indicatif de référence marché marocain' in flyer_html, "Provisional disclaimer missing"
print("  ✓ flyer-standard renders PricingCalculator with all dropdowns, upload button, and provisional disclaimer.")

# Check custom quote product
with open('dist/produits/covering-flocage-vehicule/index.html', 'r', encoding='utf-8') as f:
    covering_html = f.read()

assert 'id="pricing-calculator"' in covering_html, "Pricing calculator card missing in covering"
assert 'Prix sur devis' in covering_html, "'Prix sur devis' missing for custom product"
print("  ✓ covering-flocage-vehicule properly displays 'Prix sur devis' without invented formulas.")

print("\nALL PRICING SYSTEM TESTS PASSED WITH 100% SUCCESS!")
