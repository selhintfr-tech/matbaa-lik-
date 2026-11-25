import os
from PIL import Image, ImageEnhance, ImageFilter

assets_dir = 'public/assets'

for fname in os.listdir(assets_dir):
    if fname.startswith(('categorie-', 'realisation-', 'hero-')) and fname.endswith('.webp'):
        fpath = os.path.join(assets_dir, fname)
        img = Image.open(fpath)
        w, h = img.size
        # upscale 3x with Lanczos
        new_w, new_h = w * 3, h * 3
        enhanced = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        # Subtle unsharp mask to keep edges crisp
        enhanced = enhanced.filter(ImageFilter.UnsharpMask(radius=1.5, percent=120, threshold=3))
        # Slight contrast pop
        enhancer = ImageEnhance.Contrast(enhanced)
        enhanced = enhancer.enhance(1.05)
        enhanced.save(fpath, 'WEBP', quality=95)
        print(f"Enhanced {fname} -> {new_w}x{new_h}")

print("Assets enhancement complete!")
