import os
from PIL import Image

src_path = r'C:/Users/amina/.gemini/antigravity/brain/9c3ac0f0-8b0c-41ed-aef9-7ae3c464cd15/.user_uploaded/media_1795296940977_723c9d13.jpg'
out_dir = r'c:/Users/amina/OneDrive/Documents/matb3aa lik/public/assets'
os.makedirs(out_dir, exist_ok=True)

img = Image.open(src_path)
w, h = img.size
print(f"Original size: {w}x{h}")

# Coordinates on 448x803 image:
# 1. Logo area: around top: y in [24, 52], x in [10, 100]
logo = img.crop((10, 24, 98, 50))
logo.save(os.path.join(out_dir, "logo-extracted.png"))

# 2. Hero right product showcase:
# Hero box: x from ~185 to ~438, y from ~90 to ~256
hero_showcase = img.crop((185, 90, 440, 258))
hero_showcase.save(os.path.join(out_dir, "hero-impression-packaging.webp"), "WEBP", quality=95)

# 3. Eight categories in 4x2 grid:
# Categories section is around y=290 to y=500
# Row 1 cards: y around 300 to 395
# Row 2 cards: y around 400 to 495
# Col 1: x ~15 to ~115
# Col 2: x ~123 to ~223
# Col 3: x ~231 to ~331
# Col 4: x ~339 to ~439

# Let's crop the actual product image area inside each card:
# Card 1: Carnets (col 1, row 1)
# Title is at y ~300 to 312, Image is ~313 to 392
cat1 = img.crop((18, 312, 116, 394))
cat1.save(os.path.join(out_dir, "categorie-carnets.webp"), "WEBP", quality=95)

# Card 2: Cartes & Papeterie (col 2, row 1)
cat2 = img.crop((126, 312, 224, 394))
cat2.save(os.path.join(out_dir, "categorie-cartes.webp"), "WEBP", quality=95)

# Card 3: Flyers & Publicite (col 3, row 1)
cat3 = img.crop((234, 312, 332, 394))
cat3.save(os.path.join(out_dir, "categorie-flyers.webp"), "WEBP", quality=95)

# Card 4: Brochures & Catalogues (col 4, row 1)
cat4 = img.crop((342, 312, 440, 394))
cat4.save(os.path.join(out_dir, "categorie-brochures.webp"), "WEBP", quality=95)

# Card 5: Stickers & Packaging (col 1, row 2)
cat5 = img.crop((18, 412, 116, 494))
cat5.save(os.path.join(out_dir, "categorie-stickers.webp"), "WEBP", quality=95)

# Card 6: Grand Format & Signaletique (col 2, row 2)
cat6 = img.crop((126, 412, 224, 494))
cat6.save(os.path.join(out_dir, "categorie-grand-format.webp"), "WEBP", quality=95)

# Card 7: Restaurants & Commerces (col 3, row 2)
cat7 = img.crop((234, 412, 332, 494))
cat7.save(os.path.join(out_dir, "categorie-restaurants.webp"), "WEBP", quality=95)

# Card 8: Textile & Goodies (col 4, row 2)
cat8 = img.crop((342, 412, 440, 494))
cat8.save(os.path.join(out_dir, "categorie-textile.webp"), "WEBP", quality=95)

# 4. Four portfolio cards:
# Nos Realisations: y from ~528 to ~618
# Card 1: Le Bistrot menu
port1 = img.crop((14, 532, 120, 618))
port1.save(os.path.join(out_dir, "realisation-menu.webp"), "WEBP", quality=95)

# Card 2: Packaging luxe noir & or
port2 = img.crop((128, 532, 228, 618))
port2.save(os.path.join(out_dir, "realisation-luxe.webp"), "WEBP", quality=95)

# Card 3: Grand format bache Casablanca
port3 = img.crop((236, 532, 336, 618))
port3.save(os.path.join(out_dir, "realisation-bache.webp"), "WEBP", quality=95)

# Card 4: Carnet spirale MATBAA LIK
port4 = img.crop((344, 532, 444, 618))
port4.save(os.path.join(out_dir, "realisation-carnet.webp"), "WEBP", quality=95)

# Additional slides for hero:
# Slide 2: Papeterie professionnelle (derived / high-res composition)
# Slide 3: Grand format & communication
# We can create slide 2 and slide 3 using the high quality crops and composition
cat2.resize((480, 320)).save(os.path.join(out_dir, "hero-papeterie.webp"), "WEBP", quality=95)
cat6.resize((480, 320)).save(os.path.join(out_dir, "hero-grand-format.webp"), "WEBP", quality=95)

print("Extracted all images successfully!")
