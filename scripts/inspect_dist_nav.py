with open('dist/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

nav_start = html.find('id="main-cat-nav"')
print('Found main-cat-nav at index:', nav_start)
if nav_start != -1:
    print(html[nav_start:nav_start+2500])

print("\n--- Mega menu dropdown container ---")
drop_start = html.find('id="mega-menu-dropdown"')
print('Found mega-menu-dropdown at index:', drop_start)
if drop_start != -1:
    print(html[drop_start:drop_start+1500])
