import os
import re

with open('dist/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all asset paths
assets = re.findall(r'[\'"](/assets/[^\'"]+)[\'"]', html)
unique_assets = sorted(list(set(assets)))

print(f"Total unique asset paths referenced in index.html: {len(unique_assets)}")
all_ok = True
for a in unique_assets:
    local_p = os.path.join('dist', a.lstrip('/'))
    exists = os.path.exists(local_p)
    status = "OK" if exists else "MISSING"
    if not exists:
        all_ok = False
    print(f"  {status}: {a} -> {local_p}")

if all_ok:
    print("\nALL ASSET REFERENCES EXIST IN DIST!")
else:
    print("\nWARNING: Some assets are missing!")
