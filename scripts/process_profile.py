import os
import rembg
from PIL import Image, ImageFilter, ImageDraw
import numpy as np

src_path = r"C:\Users\Vignesh\.gemini\antigravity\brain\dc5efa92-a80c-439d-9e49-7d4707b4bf9a\.user_uploaded\media_1786989497964.jpg"
out_path = r"C:\Users\Vignesh\.gemini\antigravity\scratch\vignesh-portfolio\public\profile_original.png"

# 1. Open original image
img = Image.open(src_path).convert("RGBA")
w, h = img.size

# 2. Run rembg on full image
nobg = rembg.remove(img)

# 3. Crop portrait with full top headroom including all hair
# Hair top in original is around y=90, chin is y=410, shoulders y=650
box_w = int(w * 0.98)
center_x = int(w * 0.54)
center_y = int(h * 0.38)

x0 = max(0, center_x - box_w // 2)
y0 = max(0, int(center_y - box_w * 0.48)) # Start well above the hair (y0 ~ 0)
x1 = min(w, x0 + box_w)
y1 = min(h, y0 + box_w)

if x1 - x0 < box_w:
    x0 = max(0, x1 - box_w)
if y1 - y0 < box_w:
    y0 = max(0, y1 - box_w)

person = nobg.crop((x0, y0, x1, y1))

# Scale person to 590x590 on 800x800 canvas so there is 100px+ headroom above the hair!
target_w = 600
target_h = 600
person_scaled = person.resize((target_w, target_h), Image.LANCZOS)

person_canvas = Image.new("RGBA", (800, 800), (0, 0, 0, 0))
offset_x = (800 - target_w) // 2
offset_y = 800 - target_h + 10 # leaves ~130px above the hair top!
person_canvas.paste(person_scaled, (offset_x, offset_y), person_scaled)

# 4. Clean up any artifacts on the right
person_np = np.array(person_canvas)
r, g, b, a = person_np[:, :, 0], person_np[:, :, 1], person_np[:, :, 2], person_np[:, :, 3]

for y in range(400, 800):
    for x in range(550, 800):
        factor = (x - 550) / 250.0
        a[y, x] = int(a[y, x] * max(0.0, 1.0 - factor**1.2))

# Bottom soft fade
for y in range(700, 800):
    bottom_factor = (y - 700) / 100.0
    a[y, :] = (a[y, :] * (1.0 - bottom_factor)).astype(np.uint8)

cleaned_person = Image.fromarray(person_np)

# 5. Cyberpunk studio background with lighting
bg = Image.new("RGBA", (800, 800), (5, 8, 20, 255))
glow_layer = Image.new("RGBA", (800, 800), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow_layer)

# Centered radial glows behind head
glow_draw.ellipse((80, 80, 720, 720), fill=(0, 240, 255, 35))
glow_draw.ellipse((140, 120, 660, 660), fill=(138, 43, 226, 50))
glow_draw.ellipse((200, 160, 600, 600), fill=(255, 0, 127, 30))
glow_draw.ellipse((260, 200, 540, 540), fill=(0, 255, 163, 20))
glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(radius=60))

bg.paste(glow_layer, (0, 0), glow_layer)
bg.paste(cleaned_person, (0, 0), cleaned_person)

# Save
bg.save(out_path, "PNG")
print("SUCCESS: Generously padded profile_original.png with hair completely inside saved at", out_path)
