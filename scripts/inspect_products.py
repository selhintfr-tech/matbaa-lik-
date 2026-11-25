import re

with open('src/data/catalog.ts', 'r', encoding='utf-8') as f:
    text = f.read()

canon_start = text.find('export const CANONICAL_PRODUCTS')
canon_end = text.find('export function getProductBySlug')

canon_text = text[canon_start:canon_end]
slugs = re.findall(r'"slug":\s*"([^"]+)"', canon_text)
print('Total canonical products:', len(slugs))
print('Unique canonical product slugs:', len(set(slugs)))

for p in ['carte-de-visite-standard', 'flyer-standard', 'roll-up-standard', 'bache-pvc-banderole']:
    m = re.search(r'\{\s*"id":\s*"[^"]*",\s*"slug":\s*"' + p + r'".*?\n  \},?', canon_text, re.DOTALL)
    if m:
        print(f"\n=== Full record for {p} ===")
        print(m.group(0))
