from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUTPUT = Path("assets/images/social-preview.png")
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

W, H = 1200, 630
img = Image.new("RGB", (W, H), "#0b0b0b")
draw = ImageDraw.Draw(img)

def get_font(size: int, bold: bool = False):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ]
    for candidate in candidates:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()

white = "#ffffff"
muted = "#b5b5b5"
accent = "#2f62d6"

draw.rectangle([70, 70, 1130, 560], outline="#1f1f1f", width=2)
draw.line([(70, 170), (1130, 170)], fill="#1f1f1f", width=2)
draw.rectangle([70, 70, 220, 170], fill=accent)

draw.text((100, 102), "DL", font=get_font(44, True), fill=white)
draw.text((280, 95), "Dan Luo", font=get_font(74, True), fill=white)
draw.text((280, 194), "Strategy • AI adoption • CX • Data-driven innovation", font=get_font(34), fill=muted)

body = (
    "Personal portfolio website presenting selected work,\n"
    "strategic thinking, and a structured public GitHub repository."
)
draw.multiline_text((95, 305), body, font=get_font(28), fill="#d6d6d6", spacing=12)
draw.text((95, 505), "luodan3847.github.io/portfolio", font=get_font(28), fill=accent)

img.save(OUTPUT)
print(f"Generated {OUTPUT}")
