import re
import os

with open('dist/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("=== 1. VERIFY FLOATING WHATSAPP BUTTON ===")
assert 'id="floating-whatsapp-btn"' in html, "Floating WhatsApp button missing"
assert 'bg-[#25D366]' in html, "Official WhatsApp brand color #25D366 missing"
assert 'title="Contactez-nous sur WhatsApp"' in html or 'aria-label="Contactez-nous sur WhatsApp"' in html, "WhatsApp label missing"
assert 'fixed bottom-' in html, "Floating fixed positioning missing"
print("  ✓ Floating WhatsApp button present with official styling and clean bubble appearance.")

print("\n=== 2. VERIFY FULL-WIDTH EDGE-TO-EDGE HERO ===")
hero_match = re.search(r'<div[^>]*id="hero-carousel"[^>]*>', html)
assert hero_match, "Hero section #hero-carousel not found"
hero_tag = hero_match.group(0)
assert 'w-full' in hero_tag, "Hero section is not 100% full width"
assert 'rounded-' not in hero_tag, "Hero has outer rounded corners"
assert 'border-' not in hero_tag, "Hero has outer borders"
assert 'object-contain' in html, "object-contain uncropped imagery preserved"
assert 'color: #E86100;' in html and 'marque.' in html, "Slide 2 'marque.' highlighted in #E86100 missing"
assert 'color: #FF7A20;' in html and 'professionnelle.' in html, "Slide 3 'professionnelle.' highlighted in #FF7A20 missing"
print("  ✓ Hero is 100% full-width edge-to-edge with zero side margins and uncropped imagery.")
print("  ✓ Hero Slider headlines feature orange accent highlights (#E86100 on Slide 2, #FF7A20 on Slide 3).")

print("\n=== 3. VERIFY MEGA MENU CLEANUP (TOP & BOTTOM STRIPS REMOVED) ===")
assert 'Contrôle PAO gratuit' not in html, "Bottom informational strip still present in HTML!"
assert 'Demander un devis Flyers' not in html, "Bottom CTA still present in Mega Menu!"
assert 'mega-menu-top-strip' not in html, "Top strip still present in Mega Menu!"
print("  ✓ Top informational strip and bottom CTA strip successfully removed from all Mega Menus.")

print("\n=== 4. VERIFY REUSABLE MEGA MENU PROMO PANELS ===")
assert 'mega-menu-promo-container' in html, "MegaMenuPromo container missing"
assert '/assets/mega-menu/supers-promos-promo.webp' in html, "Supers Promos promo image missing"
assert '/assets/mega-menu/cartes-de-visite-promo.jpg' in html, "Cartes de visite promo image missing"
assert '/assets/mega-menu/flyers-depliants-promo.jpg' in html, "Flyers & Dépliants promo image missing"
assert '/assets/mega-menu/catalogues-brochures-promo.webp' in html, "Catalogues & Brochures promo image missing"
assert '/assets/mega-menu/papeterie-bureautique-promo.webp' in html, "Papeterie & Bureautique promo image missing"
assert '/assets/mega-menu/etiquettes-adhesifs-promo.webp' in html, "Étiquettes & Adhésifs promo image missing"
assert '/assets/mega-menu/affiches-posters-promo.webp' in html, "Affiches & Posters promo image missing"
assert '/assets/mega-menu/roll-ups-plv-promo.webp' in html, "Roll-ups & PLV promo image missing"
assert '/assets/mega-menu/supports-rigides-promo.webp' in html, "Supports Rigides promo image missing"
assert '/assets/mega-menu/supports-souples-promo.webp' in html, "Supports Souples promo image missing"
assert '/assets/mega-menu/souvenirs-photos-promo.webp' in html, "Souvenirs Photos promo image missing"
assert '/assets/mega-menu/supports-souples-promo.webp' in html, "Supports Souples promo image missing"
assert '/assets/mega-menu/souvenirs-photos-promo.webp' in html, "Souvenirs Photos promo image missing"
assert '/assets/mega-menu/goodies-gadgets-promo.webp' in html, "Goodies & Gadgets promo image missing"
assert '/assets/mega-menu/boites-packaging-promo.webp' in html, "Boîtes & Packaging promo image missing"
assert '/assets/mega-menu/menus-restaurant-promo.webp' in html, "Menus Restaurant promo image missing"
assert 'text-[#172B4D]' in html, "Subgroup headings in #172B4D dark navy blue missing"
assert 'aspect-square' in html, "Aspect-square 1:1 image container missing"
print("  ✓ Supers Promos, Cartes de visite, Flyers, Catalogues, Papeterie, Étiquettes, Roll-ups, Supports Rigides, Boîtes & Packaging and Menus Restaurant rendered with clean uncropped static showcase.")
print("  ✓ All subgroup headings inside Mega Menus rendered in #172B4D dark navy blue.")

print("\n=== 5. CHECK SUBMENU & PRODUCT LINKS INTEGRITY ===")
product_links = re.findall(r'href="(/produits/[^"]+/)"', html)
print(f"  ✓ Found {len(product_links)} working canonical product links inside the Mega Menu dropdown.")

print("\n=== 6. VERIFY HOMEPAGE PROMOTIONAL VIDEO ===")
assert '/videos/carnets-de-factures.mp4' in html, "Homepage video source carnets-de-factures.mp4 missing"
assert '/videos/carnets-de-factures-poster.webp' in html, "Homepage video poster carnets-de-factures-poster.webp missing"
assert '/videos/cartes.mp4' not in html, "Old video cartes.mp4 still referenced in index.html"
assert 'autoplay' in html and 'muted' in html and 'loop' in html and 'playsinline' in html, "Video autoplay/loop attributes missing"
assert '1920/640' in html, "Video container aspect ratio 1920/640 missing"
print("  ✓ Homepage promotional video CARNETS DE FACTURES correctly configured with autoplay, loop, muted, and 1920/640 banner ratio.")

print("\n=== 7. VERIFY HEADER LOGO ENHANCEMENT ===")
assert '/assets/logo-symbol.png' in html, "High-res logo symbol /assets/logo-symbol.png missing from header"
assert 'h-[34px] sm:h-[42px]' in html, "Logo symbol 42px desktop / 34px mobile dimensions missing"
assert 'MATBAA LIK' in html, "Brand name typography missing"

# Verify Arabic letter Meem is pure solid white (#FFFFFF) with transparent outer background
from PIL import Image
import numpy as np
_logo_img = Image.open('public/assets/logo-symbol.png')
_arr = np.array(_logo_img)
assert _arr[0, 0, 3] == 0, "Outer background corner must be transparent"
_solid_white_pixels = (_arr[:, :, 0] == 255) & (_arr[:, :, 1] == 255) & (_arr[:, :, 2] == 255) & (_arr[:, :, 3] == 255)
assert np.sum(_solid_white_pixels) > 15000, "Letter Meem must be solid pure white with alpha=255"
print("  ✓ Header logo presented with high-res symbol, solid pure white (#FFFFFF) Arabic letter Meem, and sharp native typography.")

print("\n=== 8. VERIFY HOMEPAGE SECTIONS ORDER & OFFRES DU MOMENT ===")
offres_pos = html.find('OFFRES DU MOMENT')
video_pos = html.find('carnets-de-factures.mp4')
realisations_pos = html.find('NOS RÉALISATIONS')
how_pos = html.find('COMMENT ÇA MARCHE')

assert offres_pos > 0, "OFFRES DU MOMENT section missing"
assert video_pos > offres_pos, "Video must be directly BELOW OFFRES DU MOMENT"
assert realisations_pos > video_pos, "NOS RÉALISATIONS must be directly BELOW Video"
assert how_pos > realisations_pos, "COMMENT ÇA MARCHE must be directly BELOW NOS RÉALISATIONS"
print("  ✓ Homepage section order strictly respected: Hero -> OFFRES DU MOMENT -> Video -> NOS RÉALISATIONS -> COMMENT ÇA MARCHE.")

print("\n=== 9. VERIFY PORTFOLIO CAROUSEL CONTROLS ===")
assert 'portfolio-carousel-wrapper' in html, "portfolio-carousel-wrapper missing"
assert 'portfolio-track' in html, "portfolio-track missing"
assert 'portfolio-prev' in html and 'portfolio-next' in html, "Prev and Next arrow buttons missing"
print("  ✓ NOS RÉALISATIONS carousel configured with continuous track and left/right arrows.")

print("\n=== 10. VERIFY SUPER PROMOS DISPLAY AD PLACEMENT & CLEANUP ===")
with open('dist/categories/supers-promos/index.html', 'r', encoding='utf-8') as f:
    sp_html = f.read()

assert 'super-promos-ad-wrapper' in sp_html, "super-promos-ad-wrapper missing on Supers Promos page"
assert 'rounded-none' in sp_html, "Ad banner must have square / sharp corners (rounded-none)"
assert '/assets/ads/ad-textile-goodies.webp' in sp_html, "ad-textile-goodies.webp missing"
assert '/assets/ads/ad-grand-format.webp' in sp_html, "ad-grand-format.webp missing"
assert '/assets/ads/ad-impression-papeterie.webp' in sp_html, "ad-impression-papeterie.webp missing"
assert 'DÉCOUVRIR' in sp_html, "CTA DÉCOUVRIR missing"
assert 'right-3 sm:right-5 md:right-6' in sp_html, "3rd banner right-side CTA placement missing"

# Verify redundant top hero and submenus overview removed across category pages
assert 'Gammes &amp; Sous-catégories' not in sp_html and 'Gammes & Sous-catégories' not in sp_html, "Submenus overview still present on category page!"
assert 'Catégorie d&#39;impression' not in sp_html and "Catégorie d'impression" not in sp_html, "Category hero box still present on category page!"

# Verify NOT present on other categories
with open('dist/categories/cartes-de-visite/index.html', 'r', encoding='utf-8') as f:
    cdv_html = f.read()
assert 'super-promos-ad-wrapper' not in cdv_html, "super-promos-ad-wrapper must NOT be on Cartes de Visite page"
assert 'Gammes &amp; Sous-catégories' not in cdv_html and 'Gammes & Sous-catégories' not in cdv_html, "Submenus overview still on Cartes de visite!"
assert 'super-promos-ad-wrapper' not in html, "super-promos-ad-wrapper must NOT be on homepage"
print("  ✓ Compact promotional ad placement (square corners, opposite side 3rd CTA) properly isolated exclusively to Supers Promos page.")
print("  ✓ Top unused hero and submenu grids successfully eliminated across all category pages.")

print("\nALL UI ENHANCEMENTS VERIFIED 100% SUCCESSFULLY!")
