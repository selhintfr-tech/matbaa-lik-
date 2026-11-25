from PIL import Image

im = Image.open('test_desktop_1920.png')
print('Full screenshot size:', im.size)

# Crop the header and navigation bar area (top 200px)
header_crop = im.crop((0, 0, 1920, 200))
header_crop.save('header_crop_1920.png')
print('Saved header_crop_1920.png')
