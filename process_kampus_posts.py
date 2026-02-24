#!/usr/bin/env python3
"""Process kampus post.txt files into JSON blog format."""
import os
import re
import json
from pathlib import Path

KAMPUS_DIR = Path("/Users/kadirerbakar/Downloads/kampus")

# Social media / footer patterns to remove
REMOVE_PATTERNS = [
    r"Diğer blog yazılarımızı okumak için.*",
    r"https://trendakademi\.com\.tr/blog.*",
    r"adresine tıklayabilirsiniz\..*",
    r"Paketlerimizi incelemek için.*",
    r"https://trendakademi\.com\.tr/paketler.*",
    r"E-Ticaret uzmanlarımızın sizleri arayarak.*",
    r"iletişim formumuzu doldurabilirsiniz\..*",
    r"Forma ulaşmak için burayı tıklayabilirsiniz\..*",
    r"Stoksuz E-Ticaret Eğitimi konularında.*",
    r"hemen bizimle iletişime geçin\..*",
    r"Sosyal Medya Hesaplarımız",
    r"Instagram\s*-\s*",
    r"https://www\.instagram\.com/[\w./-]*",
    r"Twitter\s*-\s*",
    r"https://twitter\.com/[\w./-]*",
    r"Facebook Sayfa\s*-\s*",
    r"https://www\.facebook\.com/[\w./-]*",
    r"Facebook Grup\s*-\s*",
    r"https://www\.facebook\.com/groups/[\w./-]*",
    r"YouTube\s*-\s*",
    r"https://www\.youtube\.com/channel/[\w./-]*",
    r"LinkedIn\s*-\s*",
    r"https://www\.linkedin\.com/company/[\w%.-]*",
    r"Telegram\s*-\s*",
    r"https://t\.me/[\w./-]*",
    r"Setrabet\s*-\s*",
    r"https://motoretta\.ca/.*",
    r"Bizi instagramdan takip etmek isterseniz.*",
    r"Instagram kullanıcı adımız @.*",
    r"blog\s+yazılarımızı takip edebilirsiniz\..*",
    r"Instagram:\s*@[\w.]+",
]


def strip_social_section(text: str) -> str:
    """Remove social media and blog links section from content."""
    lines = text.split("\n")
    result_lines = []
    skip_mode = False

    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue

        # Start skipping from footer patterns
        if re.search(r"Diğer blog yazılarımızı", stripped, re.I):
            skip_mode = True
            continue
        if re.search(r"Sosyal Medya Hesaplarımız", stripped, re.I):
            skip_mode = True
            continue
        if re.search(r"^https://trendakademi\.com\.tr", stripped):
            skip_mode = True
            continue
        if stripped in ("adresine tıklayabilirsiniz.", "adresine tıklayabilirsiniz"):
            skip_mode = True
            continue
        if re.search(r"Paketlerimizi incelemek için", stripped, re.I):
            skip_mode = True
            continue
        if re.search(r"Stoksuz E-Ticaret Eğitimi konularında", stripped, re.I):
            skip_mode = True
            continue
        if re.search(r"hemen bizimle iletişime geçin", stripped, re.I):
            skip_mode = True
            continue
        if re.search(r"^https://", stripped) and skip_mode:
            continue
        if re.search(r"^(Instagram|Twitter|Facebook Sayfa|Facebook Grup|YouTube|LinkedIn|Telegram)\s*[-–]", stripped, re.I):
            skip_mode = True
            continue
        if skip_mode and any(x in stripped for x in ["instagram.com", "twitter.com", "facebook.com", "youtube.com", "linkedin.com", "t.me"]):
            continue
        if "Setrabet" in stripped or "motoretta" in stripped:
            continue
        if re.search(r"Bizi instagramdan takip", stripped, re.I):
            skip_mode = True
            continue
        if re.search(r"Instagram kullanıcı adımız", stripped, re.I):
            skip_mode = True
            continue
        if re.search(r"blog\s*yazılarımızı takip", stripped, re.I):
            skip_mode = True
            continue
        if stripped in ("Instagram:", "@Trend.Akademi"):
            skip_mode = True
            continue
        if re.search(r"E-Ticaret uzmanlarımızın sizleri arayarak", stripped, re.I):
            skip_mode = True
            continue
        if re.search(r"Forma ulaşmak için burayı tıklayabilirsiniz", stripped, re.I):
            skip_mode = True
            continue

        skip_mode = False
        result_lines.append(line)

    return "\n".join(result_lines)


def is_section_heading(line: str) -> bool:
    """Detect if a line looks like a section heading."""
    if not line or len(line) > 90:
        return False
    stripped = line.strip()
    if len(stripped) < 10:
        return False
    # Must start with uppercase (real section titles)
    if not re.match(r"^[A-ZÇĞİÖŞÜ\"']", stripped):
        return False
    # Exclude common inline phrases (SEO keywords often in body)
    if stripped.lower() in ("e-ticaret nedir", "e-ticaret nasıl yapılır", "ürün araştırması",
                           "markalaşma", "iş fikrinin önemi", "web sitemiz", "paketlerimiz",
                           "hizmetlerimiz", "iletişim formumuzu", "4 danışmanlık paketimiz"):
        return False
    # Exclude "Facebook Sayfa -" etc
    if re.match(r"^(Facebook|Instagram|Twitter|YouTube|LinkedIn|Telegram)\s", stripped):
        return False
    # Section titles: end with ? or are 15-70 chars
    if stripped.endswith("?") and len(stripped) >= 15:
        return True
    if 15 <= len(stripped) <= 75 and not stripped.endswith("."):
        return True
    return False


def text_to_html(content: str) -> str:
    """Convert plain text to HTML with p and h3 tags."""
    content = strip_social_section(content)
    lines = [l.strip() for l in content.split("\n") if l.strip()]

    html_parts = []
    i = 0
    while i < len(lines):
        line = lines[i]
        # Skip duplicate title at start
        if i == 0 and len(lines) > 1 and line == lines[1]:
            i += 1
            continue

        # Bullet points - keep as content
        if line.startswith("●") or line.startswith("·") or re.match(r"^\d+\s+[A-ZÇĞİÖŞÜ]", line):
            html_parts.append(f"<p>{line}</p>")
            i += 1
            continue

        # Check if this looks like a heading (short, standalone)
        if is_section_heading(line) and (i + 1 >= len(lines) or len(lines[i + 1]) > 40):
            html_parts.append(f"<h3>{line}</h3>")
            i += 1
            continue

        # Regular paragraph
        html_parts.append(f"<p>{line}</p>")
        i += 1

    return "".join(html_parts)


def parse_meta(content: str) -> dict:
    """Extract META section."""
    match = re.search(r"--- META ---\s*(.*?)\s*--- /META ---", content, re.DOTALL)
    if not match:
        return {}
    meta_text = match.group(1)
    meta = {}
    for line in meta_text.split("\n"):
        if ":" in line:
            k, v = line.split(":", 1)
            meta[k.strip()] = v.strip()
    return meta


def get_content_after_meta(content: str) -> str:
    """Get content after META section."""
    match = re.search(r"--- /META ---\s*(.*)", content, re.DOTALL)
    if match:
        return match.group(1).strip()
    return content


def parse_date(created_date: str) -> str:
    """Convert date to YYYY-MM-DD."""
    if not created_date:
        return ""
    # Format: 17.01.2022 14:41:24 or 09.11.2021 11:42:04
    m = re.search(r"(\d{2})\.(\d{2})\.(\d{4})", created_date)
    if m:
        return f"{m.group(3)}-{m.group(2)}-{m.group(1)}"
    return created_date


def estimate_read_time(text: str) -> int:
    """Estimate read time in minutes (Turkish ~200 words/min)."""
    words = len(re.findall(r"\S+", text))
    return max(1, round(words / 200))


def get_category(meta: dict, title: str, slug: str) -> str:
    """Determine category from meta or content."""
    cat_id = meta.get("category_id", "")
    if cat_id == "2":
        return "Dropshipping"
    if "dropshipping" in slug or "dropshipping" in title.lower():
        return "Dropshipping"
    if "e-ihracat" in slug or "ihracat" in title.lower():
        return "E-İhracat"
    if "sosyal medya" in slug or "sosyal medya" in title.lower():
        return "Sosyal Medya"
    if "sirket" in slug or "teşvik" in title.lower():
        return "Girişimcilik"
    if "logo" in slug or "marka" in slug:
        return "Markalaşma"
    return "E-Ticaret"


def process_post(folder_path: Path) -> dict | None:
    """Process a single post folder."""
    post_file = folder_path / "post.txt"
    if not post_file.exists():
        return None

    content = post_file.read_text(encoding="utf-8")
    meta = parse_meta(content)
    body = get_content_after_meta(content)

    title = meta.get("title", "")
    slug = meta.get("slug", folder_path.name)
    created = meta.get("created_date", "")
    image_url = meta.get("image_url", "")

    # Clean content and convert to HTML
    html_content = text_to_html(body)

    # Excerpt: first 150 chars of plain text (replace tags with space to avoid word concatenation)
    plain = re.sub(r"<[^>]+>", " ", html_content)
    plain = re.sub(r"\s+", " ", plain).strip()
    excerpt = plain[:150] + ("..." if len(plain) > 150 else "")

    return {
        "slug": slug,
        "title": title,
        "excerpt": excerpt,
        "content": html_content,
        "category": get_category(meta, title, slug),
        "date": parse_date(created),
        "readTime": estimate_read_time(plain),
        "image_url": image_url,
    }


def main():
    posts = []
    slugs_titles = []

    for item in sorted(KAMPUS_DIR.iterdir()):
        if item.is_dir():
            post = process_post(item)
            if post and post.get("title"):
                posts.append(post)
                slugs_titles.append((post["slug"], post["title"]))

    # Sort by date
    posts.sort(key=lambda p: p["date"] or "0000-00-00")

    output = {
        "posts": posts,
        "total": len(posts),
    }

    out_path = Path("/Users/kadirerbakar/Documents/projects/trendmaxFE/kampus_blog_posts.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print("=== 31 POSTS - SLUGS AND TITLES ===\n")
    for i, (slug, title) in enumerate(slugs_titles, 1):
        print(f"{i:2}. {slug}")
        print(f"    {title}\n")

    print(f"\nJSON written to {out_path}")


if __name__ == "__main__":
    main()
