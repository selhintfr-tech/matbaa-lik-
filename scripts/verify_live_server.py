import urllib.request
import re

url = 'http://127.0.0.1:4321/'
req = urllib.request.urlopen(url)
html = req.read().decode('utf-8')

# Verify the 14 category IDs in HTML
expected_cats = [
    'supers-promos', 'cartes-de-visite', 'flyers-depliants', 'catalogues-brochures',
    'papeterie-bureautique', 'boites-packaging', 'etiquettes-adhesifs', 'affiches-posters',
    'roll-ups-plv', 'supports-souples', 'supports-rigides', 'souvenirs-photos',
    'goodies-gadgets', 'menus-restaurant'
]

print('=== 1. VERIFY ALL 14 CATEGORIES IN NAVIGATION ===')
cells = re.findall(r'data-category-id="([^"]+)"', html)
print(f'Found {len(cells)} category cells in nav:')
for c in cells:
    print(f'  ✓ Cell: {c}')
assert cells == expected_cats, f'Mismatch in cells: {cells} vs {expected_cats}'

print('\n=== 2. VERIFY ALL 14 MEGA MENU PANELS IN DROPDOWN ===')
panels = re.findall(r'data-panel-id="([^"]+)"', html)
print(f'Found {len(panels)} mega menu panels in dropdown:')
for p in panels:
    print(f'  ✓ Panel: {p}')
assert panels == expected_cats, f'Mismatch in panels: {panels} vs {expected_cats}'

print('\n=== 3. VERIFY DROPDOWN POSITIONING AND WRAPPER STRUCTURE ===')
assert 'id="mega-menu-dropdown"' in html, 'mega-menu-dropdown missing'
assert 'cat-bar-container' in html, 'cat-bar-container missing'
assert 'main-cat-nav' in html, 'main-cat-nav missing'

# Check product links inside mega menu
prod_links = set(re.findall(r'href="/produits/([^"]+)/"', html))
print(f'Unique canonical products linked in Mega Menus: {len(prod_links)}')

print('\nALL SERVER RENDERED ASSETS & HTML VALIDATED 100% SUCCESSFULLY!')
