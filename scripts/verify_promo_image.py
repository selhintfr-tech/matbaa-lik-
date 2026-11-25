import os
import re

with open('dist/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Check for cartes-de-visite-promo.jpg
assert '/assets/mega-menu/cartes-de-visite-promo.jpg' in html, 'Promo image URL missing from dist/index.html'

# Find the panel for cartes-de-visite
panel_match = re.search(r'data-category-panel="cartes-de-visite"[^>]*>(.*?)</section>', html, re.DOTALL)
if not panel_match:
    panel_match = re.search(r'data-category-panel="cartes-de-visite"(.*?)data-category-panel=', html, re.DOTALL)

assert panel_match, 'cartes-de-visite panel not found'
panel_html = panel_match.group(1)

# Check that the old texts are completely absent from this panel
for forbidden in ['FINITION LUXE', 'Finition Luxe', 'Cartes de Visite Prestige', 'Découvrir']:
    assert forbidden not in panel_html, f'Forbidden text "{forbidden}" still found in cartes-de-visite panel!'

# Verify object-contain and square aspect ratio
assert 'object-contain' in panel_html, 'object-contain missing'
assert 'aspect-square' in panel_html, 'aspect-square missing'
assert 'hidden md:flex' in panel_html, 'hidden md:flex missing'

# Verify file existence and size in dist
dist_img = 'dist/assets/mega-menu/cartes-de-visite-promo.jpg'
assert os.path.exists(dist_img), 'Image file missing in dist'
assert os.path.getsize(dist_img) > 300000, f'Image file too small: {os.path.getsize(dist_img)}'

print(f'SUCCESS: Verified! Image size in dist: {os.path.getsize(dist_img)} bytes.')
print('All checks passed!')
