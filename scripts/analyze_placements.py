import re
import json

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
        title = line_str[3:].strip()
        cat_match = re.match(r'^\d+\.\s*(.+)$', title)
        cat_name = cat_match.group(1).strip() if cat_match else title
        current_cat = {
            'name': cat_name,
            'submenus': []
        }
        categories.append(current_cat)
        current_sub = None
    elif line_str.startswith('### '):
        sub_title = line_str[4:].strip()
        current_sub = {
            'title': sub_title,
            'products': []
        }
        if current_cat:
            current_cat['submenus'].append(current_sub)
    elif line_str.startswith('- '):
        prod_title = line_str[2:].strip()
        if current_sub:
            current_sub['products'].append(prod_title)

all_placements = []
for c in categories:
    for s in c['submenus']:
        for p in s['products']:
            all_placements.append((c['name'], s['title'], p))

print(f"Total placements: {len(all_placements)}")
unique_labels = set(p[2] for p in all_placements)
print(f"Unique raw labels: {len(unique_labels)}")

# Write all placements and unique labels to json for review
with open('placements_dump.json', 'w', encoding='utf-8') as out:
    json.dump({
        'categories': categories,
        'unique_labels': sorted(list(unique_labels))
    }, out, indent=2, ensure_ascii=False)

print("Saved placements_dump.json")
