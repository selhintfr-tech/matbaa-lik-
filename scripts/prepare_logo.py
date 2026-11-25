import cv2
import numpy as np
from PIL import Image
import base64
import os

src = r'C:/Users/amina/.gemini/antigravity/brain/9c3ac0f0-8b0c-41ed-aef9-7ae3c464cd15/.user_uploaded/media_1795567370072_4f38d291.jpg'
img = cv2.imread(src)
h, w = img.shape[:2]

# Compute difference from white canvas background
diff = np.max(np.abs(img.astype(int) - 255), axis=2)

# Create accurate silhouette mask of 3D paper stack icon
mask = np.zeros((h, w), dtype=np.uint8)

for y in range(h):
    row_colored = np.where(diff[y, :] > 12)[0]
    if len(row_colored) > 0:
        x_start = row_colored[0]
        x_end = row_colored[-1]
        mask[y, x_start:x_end+1] = 255

# Anti-alias mask edge gently
alpha = cv2.GaussianBlur(mask.astype(np.float32), (3, 3), 0.7)
alpha = np.clip(alpha, 0, 255).astype(np.uint8)

# Find tight bounding box of icon
coords = cv2.findNonZero(mask)
x, y, bw, bh = cv2.boundingRect(coords)

x0 = max(0, x - 1)
y0 = max(0, y - 1)
x1 = min(w, x + bw + 1)
y1 = min(h, y + bh + 1)

# Ensure letter Meem (and inner paper highlights) is pure crisp solid white #FFFFFF
b, g, r = cv2.split(img)
inner_white = (mask == 255) & (diff < 20)
r[inner_white] = 255
g[inner_white] = 255
b[inner_white] = 255

rgba = cv2.merge([r, g, b, alpha])
cropped = rgba[y0:y1, x0:x1]

pil_img = Image.fromarray(cropped)
pil_img.save('public/assets/logo-symbol.png', 'PNG', optimize=True)
print('Successfully updated public/assets/logo-symbol.png:', pil_img.size)

# Update public/assets/logo-matbaa-lik.svg
with open('public/assets/logo-symbol.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 46" width="230" height="46" fill="none">
  <!-- Official High-Resolution 3D Isometric Symbol with Solid White Letter Meem -->
  <g transform="translate(0, 2)">
    <image href="data:image/png;base64,{b64}" width="38" height="42" preserveAspectRatio="xMidYMid meet" />
  </g>
  <!-- Brand Typography -->
  <text x="48" y="30" font-family="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="22" fill="#111111" letter-spacing="-0.02em">MATBAA LIK</text>
</svg>'''

with open('public/assets/logo-matbaa-lik.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)
print('Successfully updated public/assets/logo-matbaa-lik.svg')

# Remove test images
for p in ['public/assets/test-on-beige.png', 'public/assets/test-on-dark.png', 'public/assets/logo-symbol-test.png']:
    if os.path.exists(p):
        os.remove(p)
