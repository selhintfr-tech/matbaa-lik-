import base64

with open('public/assets/logo-icon.png', 'rb') as f:
    icon_b64 = base64.b64encode(f.read()).decode('utf-8')

# Header logo: icon + "MATBAA LIK"
svg_header = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" width="200" height="40" fill="none">
  <!-- Official 3D Isometric Icon -->
  <g transform="translate(0, 4)">
    <image href="data:image/png;base64,{icon_b64}" width="34" height="32" preserveAspectRatio="xMidYMid meet" />
  </g>
  <!-- Brand Typography -->
  <text x="42" y="27" font-family="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="21" fill="#111111" letter-spacing="-0.02em">MATBAA LIK</text>
</svg>'''

with open('public/assets/logo-matbaa-lik.svg', 'w', encoding='utf-8') as f:
    f.write(svg_header)

# Footer logo: icon + "MATBAA LIK" + subtitle "IMPRESSION & CRÉATION AU MAROC"
svg_footer = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 54" width="220" height="54" fill="none">
  <!-- Official 3D Isometric Icon -->
  <g transform="translate(0, 4)">
    <image href="data:image/png;base64,{icon_b64}" width="36" height="34" preserveAspectRatio="xMidYMid meet" />
  </g>
  <!-- Brand Typography -->
  <text x="44" y="26" font-family="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="20" fill="#111111" letter-spacing="-0.02em">MATBAA LIK</text>
  <text x="44" y="42" font-family="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="9" fill="#555555" letter-spacing="0.08em">IMPRESSION &amp; CRÉATION AU MAROC</text>
</svg>'''

with open('public/assets/logo-matbaa-lik-footer.svg', 'w', encoding='utf-8') as f:
    f.write(svg_footer)

print("Generated SVG logos successfully!")
