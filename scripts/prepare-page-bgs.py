from pathlib import Path
from PIL import Image

src_dir = Path(r"C:\Users\ASUS\.cursor\projects\c-Users-ASUS-Desktop-AzevsmAi\assets")
out_dir = Path(r"c:\Users\ASUS\Desktop\AzevsmAi\public\page-bg")
out_dir.mkdir(parents=True, exist_ok=True)

pages = [
    "platform",
    "products",
    "technology",
    "whitebox",
    "trust",
    "data-security",
    "legal",
    "company",
    "index",
    "institutional",
    "plus",
    "result",
]


def fit_cover(img: Image.Image, size: tuple[int, int]) -> Image.Image:
    tw, th = size
    scale = max(tw / img.width, th / img.height)
    nw, nh = int(img.width * scale), int(img.height * scale)
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    # Bias mobile crop slightly lower so terrace stays visible like homepage.
    if th > tw:
        top = min(max(int((nh - th) * 0.58), 0), nh - th)
    return resized.crop((left, top, left + tw, top + th))


for name in pages:
    candidates = [
        src_dir / f"page-bg-{name}-desktop.jpg",
        src_dir / f"page-bg-{name}-desktop.png",
    ]
    src = next((p for p in candidates if p.exists()), None)
    if not src:
        print("MISSING", name)
        continue
    img = Image.open(src).convert("RGB")
    desktop = fit_cover(img, (960, 640))
    mobile = fit_cover(img, (540, 960))
    d_path = out_dir / f"{name}-desktop.webp"
    m_path = out_dir / f"{name}-mobile.webp"
    desktop.save(d_path, "WEBP", quality=82, method=6)
    mobile.save(m_path, "WEBP", quality=82, method=6)
    print(name, "->", d_path.name, d_path.stat().st_size, m_path.name, m_path.stat().st_size)

print("done", len(list(out_dir.glob("*.webp"))))
