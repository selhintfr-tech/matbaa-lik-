import re
import json

def slugify(text):
    text = text.lower()
    text = re.sub(r'[àáâãäå]', 'a', text)
    text = re.sub(r'[èéêë]', 'e', text)
    text = re.sub(r'[ìíîï]', 'i', text)
    text = re.sub(r'[òóôõö]', 'o', text)
    text = re.sub(r'[ùúûü]', 'u', text)
    text = re.sub(r'[ç]', 'c', text)
    text = re.sub(r'[œ]', 'oe', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

with open('prompt_495_full.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

categories = []
current_cat = None
current_sub = None

for line in lines[89:708]:
    line_str = line.strip()
    if not line_str:
        continue
    if line_str.startswith('## '):
        # Category
        title = line_str[3:].strip()
        # Remove number prefix if present, e.g. "1. Supers promos"
        cat_match = re.match(r'^\d+\.\s*(.+)$', title)
        cat_name = cat_match.group(1).strip() if cat_match else title
        current_cat = {
            'id': slugify(cat_name),
            'name': cat_name,
            'submenus': []
        }
        categories.append(current_cat)
        current_sub = None
    elif line_str.startswith('### '):
        sub_title = line_str[4:].strip()
        current_sub = {
            'id': slugify(sub_title),
            'title': sub_title,
            'products': []
        }
        if current_cat:
            current_cat['submenus'].append(current_sub)
    elif line_str.startswith('- '):
        prod_title = line_str[2:].strip()
        if current_sub:
            current_sub['products'].append(prod_title)

print(f"Parsed {len(categories)} categories.")
total_submenus = sum(len(c['submenus']) for c in categories)
print(f"Total submenus: {total_submenus}")
total_placements = sum(sum(len(s['products']) for s in c['submenus']) for c in categories)
print(f"Total product placements: {total_placements}")

for i, c in enumerate(categories, 1):
    sub_count = len(c['submenus'])
    prod_count = sum(len(s['products']) for s in c['submenus'])
    print(f"{i}. {c['name']} (slug: {c['id']}) - {sub_count} submenus, {prod_count} products")
