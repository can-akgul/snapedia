from __future__ import annotations

import json
from typing import Any, Dict, Optional
from urllib.request import Request, urlopen
from urllib.parse import quote
from urllib.error import URLError, HTTPError

from flask import Flask, jsonify, render_template, request

# Flask uygulamasını oluştur
app = Flask(__name__)

# Varsayılan ilgi alanları
DEFAULT_INTERESTS = [
    {"id": "ai", "name": "Yapay Zeka", "name_en": "Artificial Intelligence", "name_ru": "Искусственный интеллект", "name_de": "Künstliche Intelligenz", "categories": ["Machine_learning", "Artificial_intelligence", "Computer_science", "Neural_networks"]},
    {"id": "tech", "name": "Teknoloji", "name_en": "Technology", "name_ru": "Технологии", "name_de": "Technologie", "categories": ["Technology", "Computing", "Internet", "Software", "Electronics"]},
    {"id": "cars", "name": "Otomobil", "name_en": "Automotive", "name_ru": "Автомобили", "name_de": "Automobil", "categories": ["Automobiles", "Cars", "Automotive_industry", "Electric_vehicles", "Motor_vehicles"]},
    {"id": "politics", "name": "Siyaset", "name_en": "Politics", "name_ru": "Политика", "name_de": "Politik", "categories": ["Politics", "Government", "International_relations", "Political_science", "Elections"]},
    {"id": "science", "name": "Bilim", "name_en": "Science", "name_ru": "Наука", "name_de": "Wissenschaft", "categories": ["Science", "Physics", "Chemistry", "Biology", "Mathematics", "Research"]},
    {"id": "sports", "name": "Spor", "name_en": "Sports", "name_ru": "Спорт", "name_de": "Sport", "categories": ["Sports", "Football", "Basketball", "Olympics", "Athletes", "Sports_competitions"]},
    {"id": "music", "name": "Müzik", "name_en": "Music", "name_ru": "Музыка", "name_de": "Musik", "categories": ["Music", "Musicians", "Albums", "Songs", "Music_genres", "Concerts"]},
    {"id": "movies", "name": "Film", "name_en": "Movies", "name_ru": "Фильмы", "name_de": "Filme", "categories": ["Films", "Cinema", "Actors", "Directors", "Film_festivals", "Television"]},
    {"id": "history", "name": "Tarih", "name_en": "History", "name_ru": "История", "name_de": "Geschichte", "categories": ["History", "Historical_events", "Ancient_history", "World_War_II", "Civilizations"]},
    {"id": "space", "name": "Uzay", "name_en": "Space", "name_ru": "Космос", "name_de": "Weltraum", "categories": ["Space", "Astronomy", "NASA", "Planets", "Space_exploration", "Astronauts"]},
    {"id": "health", "name": "Sağlık", "name_en": "Health", "name_ru": "Здоровье", "name_de": "Gesundheit", "categories": ["Health", "Medicine", "Diseases", "Medical_research", "Healthcare", "Nutrition"]},
    {"id": "nature", "name": "Doğa", "name_en": "Nature", "name_ru": "Природа", "name_de": "Natur", "categories": ["Nature", "Animals", "Environment", "Climate_change", "Wildlife", "Conservation"]},
    {"id": "art", "name": "Sanat", "name_en": "Art", "name_ru": "Искусство", "name_de": "Kunst", "categories": ["Art", "Painting", "Artists", "Museums", "Sculpture", "Art_movements"]},
    {"id": "food", "name": "Yemek", "name_en": "Food", "name_ru": "Еда", "name_de": "Essen", "categories": ["Food", "Cuisine", "Cooking", "Restaurants", "Chefs", "Food_culture"]},
    {"id": "travel", "name": "Seyahat", "name_en": "Travel", "name_ru": "Путешествия", "name_de": "Reisen", "categories": ["Travel", "Tourism", "Countries", "Cities", "Landmarks", "Geography"]},
    {"id": "business", "name": "İş Dünyası", "name_en": "Business", "name_ru": "Бизнес", "name_de": "Geschäft", "categories": ["Business", "Economics", "Companies", "Entrepreneurs", "Finance", "Marketing"]}
]

# -----------------------------
# Yardımcı HTTP fonksiyonları
# -----------------------------

def http_get_json(url: str, timeout_seconds: int = 10) -> Dict[str, Any]:
    """Verilen URL'den JSON veri çeker ve dict olarak döner.

    Wikipedia API'ları için uygun bir User-Agent başlığı ekler.
    Hata durumlarında anlamlı istisnalar yükseltir.
    """
    headers = {
        "User-Agent": "FlaskRandomWikiApp/1.0 (contact: local)"
    }
    request = Request(url, headers=headers)
    try:
        with urlopen(request, timeout=timeout_seconds) as response:
            charset = response.headers.get_content_charset() or "utf-8"
            data = response.read().decode(charset)
            return json.loads(data)
    except HTTPError as e:
        raise RuntimeError(f"HTTP hata kodu: {e.code}") from e
    except URLError as e:
        raise RuntimeError("Ağ erişim hatası: Wikipedia API'ına ulaşılamadı") from e
    except json.JSONDecodeError as e:
        raise RuntimeError("Geçersiz JSON yanıtı alındı") from e


def get_wikipedia_lang_code(language: str) -> str:
    """Dil kodunu Wikipedia dil koduna çevirir."""
    lang_mapping = {
        'tr': 'tr',
        'en': 'en', 
        'ru': 'ru',
        'de': 'de'
    }
    return lang_mapping.get(language, 'en')

def fetch_trending_wikipedia_titles(language: str = 'en', limit: int = 50) -> list:
    """Most viewed Wikipedia makalelerini döner."""
    import datetime
    lang_code = get_wikipedia_lang_code(language)
    
    # Dün için most viewed articles
    yesterday = (datetime.datetime.now() - datetime.timedelta(days=1)).strftime('%Y/%m/%d')
    
    try:
        url = f"https://wikimedia.org/api/rest_v1/metrics/pageviews/top/{lang_code}.wikipedia/all-access/{yesterday}"
        data = http_get_json(url)
        
        if "items" in data and data["items"]:
            articles = data["items"][0].get("articles", [])
            # Filtreleme: Main_Page, özel sayfalar vb. hariç
            filtered_articles = [
                article["article"] for article in articles 
                if not article["article"].startswith(("Main_Page", "Special:", "-", "Category:"))
                and ":" not in article["article"]
                and len(article["article"]) > 2
            ]
            return filtered_articles[:limit]
    except Exception as e:
        print(f"Trending makaleler alınamadı: {e}")
    
    return []

def fetch_random_wikipedia_title(categories: Optional[list] = None, language: str = 'en', article_type: str = 'random') -> str:
    """Wikipedia'dan başlık döner. Kategoriler, dil ve makale tipi belirtilmişse ona göre seçer."""
    import random
    lang_code = get_wikipedia_lang_code(language)
    
    # Trending makaleler istenmişse
    if article_type == 'trending':
        trending_titles = fetch_trending_wikipedia_titles(language, 100)
        if trending_titles:
            return random.choice(trending_titles)
    
    if categories:
        # Kategorilerden rastgele bir makale çek (seçilen dilde)
        random.shuffle(categories)  # Kategorileri karıştır
        
        for category in categories:
            try:
                # Farklı limit değerleri dene
                for limit in [100, 50, 25]:
                    url = (
                        f"https://{lang_code}.wikipedia.org/w/api.php?action=query&list=categorymembers"
                        f"&cmtitle=Category:{category}&cmlimit={limit}&cmnamespace=0&format=json&origin=*"
                    )
                    data = http_get_json(url)
                    
                    if "query" in data and "categorymembers" in data["query"]:
                        members = data["query"]["categorymembers"]
                        if members:
                            # Rastgele bir makale seç
                            selected = random.choice(members)
                            return selected["title"]
                    
                # Alternatif kategori isimleri dene
                alt_category = category.replace('_', ' ')
                url = (
                    f"https://{lang_code}.wikipedia.org/w/api.php?action=query&list=categorymembers"
                    f"&cmtitle=Category:{alt_category}&cmlimit=50&cmnamespace=0&format=json&origin=*"
                )
                data = http_get_json(url)
                
                if "query" in data and "categorymembers" in data["query"]:
                    members = data["query"]["categorymembers"]
                    if members:
                        selected = random.choice(members)
                        return selected["title"]
                        
            except Exception as e:
                print(f"Kategori {category} için hata: {e}")
                continue
    
    # Fallback: Genel rastgele makale (seçilen dilde)
    url = (
        f"https://{lang_code}.wikipedia.org/w/api.php?action=query&list=random"
        "&rnnamespace=0&rnlimit=1&format=json&origin=*"
    )
    data = http_get_json(url)
    try:
        random_list = data["query"]["random"]
        if not random_list:
            raise RuntimeError("Rastgele madde bulunamadı")
        return random_list[0]["title"]
    except (KeyError, IndexError, TypeError) as e:
        raise RuntimeError("Wikipedia rastgele başlık yapısı beklenmedik") from e


def fetch_wikipedia_summary(title: str, language: str = 'en') -> Dict[str, Any]:
    """Verilen başlık için Wikipedia özetini ve görsel bilgisini döner."""
    lang_code = get_wikipedia_lang_code(language)
    encoded_title = quote(title, safe="")
    url = f"https://{lang_code}.wikipedia.org/api/rest_v1/page/summary/{encoded_title}"

    data = http_get_json(url)

    # Güvenli çekimler ve varsayılanlar
    result_title: str = data.get("title", title)
    extract: str = data.get("extract", "")

    thumbnail_url: Optional[str] = None
    thumb = data.get("thumbnail")
    if isinstance(thumb, dict):
        thumbnail_url = thumb.get("source")

    # İçerik URL'leri varsa kullan, yoksa klasik wiki bağlantısı kur
    page_url: str = (
        data.get("content_urls", {})
        .get("desktop", {})
        .get("page")
        or f"https://{lang_code}.wikipedia.org/wiki/{encoded_title}"
    )

    return {
        "title": result_title,
        "extract": extract,
        "thumbnail": thumbnail_url,  # Yoksa null dönecek
        "page_url": page_url,
    }


# -----------------------------
# Rotalar
# -----------------------------

@app.route("/")
def index():
    """Ana sayfa: HTML şablonunu döner."""
    return render_template("index.html")


@app.route("/random")
def random_article():
    """Rastgele bir Wikipedia maddesini JSON olarak döner."""
    try:
        # Request parametrelerini al
        selected_interests = request.args.get('interests', '').split(',') if request.args.get('interests') else []
        language = request.args.get('language', 'en')
        article_type = request.args.get('type', 'random')  # 'random' veya 'trending'
        
        # Seçili ilgi alanlarına göre kategorileri topla
        categories = []
        if selected_interests:
            for interest_id in selected_interests:
                if interest_id:
                    interest = next((i for i in DEFAULT_INTERESTS if i["id"] == interest_id), None)
                    if interest and "categories" in interest:
                        categories.extend(interest["categories"])
        
        # Fotoğraflı makale bulana kadar dene (maksimum 10 deneme)
        for attempt in range(10):
            title = fetch_random_wikipedia_title(
                categories if categories else None, 
                language, 
                article_type
            )
            data = fetch_wikipedia_summary(title, language)
            
            # Fotoğraf varsa kabul et
            if data.get("thumbnail"):
                data["id"] = f"wiki_{hash(data['title']) % 10000000}"
                data["article_type"] = article_type
                return jsonify(data)
        
        # 10 denemeden sonra fotoğraf bulunamadıysa genel rastgele makale dön
        title = fetch_random_wikipedia_title(language=language)
        data = fetch_wikipedia_summary(title, language)
        data["id"] = f"wiki_{hash(data['title']) % 10000000}"
        data["article_type"] = "random"
        return jsonify(data)
        
    except Exception as e:
        # Hata durumunda JSON içinde error anahtarı dön
        return jsonify({"error": str(e)}), 500


@app.route("/api/interests")
def get_interests():
    """Mevcut ilgi alanlarını döner."""
    return jsonify({"interests": DEFAULT_INTERESTS})


@app.route("/api/bookmarks", methods=["GET", "POST", "DELETE"])
def handle_bookmarks():
    """Bookmark işlemlerini yönetir (client-side storage kullanıldığı için sadece structure)."""
    if request.method == "GET":
        # Client-side'da localStorage'dan alınacak
        return jsonify({"message": "Use localStorage for bookmarks"})
    elif request.method == "POST":
        # Client-side'da localStorage'a kaydedilecek
        return jsonify({"message": "Bookmark saved on client-side"})
    elif request.method == "DELETE":
        # Client-side'da localStorage'dan silinecek
        return jsonify({"message": "Bookmark removed on client-side"})


if __name__ == "__main__":
    # Geliştirme modunda yerel çalıştırma
    app.run(debug=True) 