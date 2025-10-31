import json
from typing import List, Dict, Any, Union
from ..config import SUPPORTED_LANGS
from googletrans import Translator

# Khởi tạo translator (giữ 1 instance duy nhất)
_translator = Translator()

# Cache trong bộ nhớ (tránh dịch lại cùng nội dung)
_CACHE: Dict[str, str] = {}

# Cache theo ngôn ngữ cho kết quả quán ăn (tránh dịch lại)
_RESULT_CACHE: Dict[str, List[Dict]] = {}

def _make_cache_key(text: str, target: str) -> str:
    return f"{text}|||{target}"

def translate_text(text: str, target: str = "en") -> str:
    """Dịch 1 chuỗi văn bản"""
    if not text or not text.strip():
        return text
    if target not in SUPPORTED_LANGS:
        return text
    if target == "vi":
        return text

    cache_key = _make_cache_key(text.strip(), target)
    if cache_key in _CACHE:
        return _CACHE[cache_key]

    lang_map = {
        "en": "en",
        "zh": "zh-cn",
        "ko": "ko",
        "ja": "ja",
        "es": "es"
    }
    dest = lang_map.get(target, "en")

    try:
        result = _translator.translate(text.strip(), dest=dest)
        translated = result.text
        _CACHE[cache_key] = translated
        return translated
    except Exception as e:
        print(f"[Translator] Lỗi dịch '{text}' → {target}: {e}")
        return text  # Fallback: trả về gốc


def translate_batch(texts: List[str], target: str = "en") -> List[str]:
    """Dịch nhiều chuỗi cùng lúc (tối ưu hiệu suất)"""
    if not texts:
        return []
    if target not in SUPPORTED_LANGS or target == "vi":
        return texts

    lang_map = {"en": "en", "zh": "zh-cn", "ko": "ko", "ja": "ja", "es": "es"}
    dest = lang_map.get(target, "en")

    # Lọc ra những text chưa có trong cache
    results = []
    to_translate = []
    indices = []

    for i, text in enumerate(texts):
        if not text or not text.strip():
            results.append(text)
            continue
        cache_key = _make_cache_key(text.strip(), target)
        if cache_key in _CACHE:
            results.append(_CACHE[cache_key])
        else:
            to_translate.append(text.strip())
            indices.append(i)
            results.append(None)  # placeholder

    if to_translate:
        try:
            translated_list = _translator.translate(to_translate, dest=dest)
            if not isinstance(translated_list, list):
                translated_list = [translated_list]

            for idx, orig_text, trans_obj in zip(indices, to_translate, translated_list):
                translated = trans_obj.text
                cache_key = _make_cache_key(orig_text, target)
                _CACHE[cache_key] = translated
                results[idx] = translated
        except Exception as e:
            print(f"[Translator] Batch error: {e}")
            # Fallback: giữ nguyên text gốc
            for i in indices:
                results[i] = texts[i]

    return results


def translate_restaurant(item: Dict[str, Any], lang: str) -> Dict[str, Any]:
    """Dịch toàn bộ thông tin 1 quán ăn"""
    if lang == "vi" or lang not in SUPPORTED_LANGS:
        return item

    # Tạo key cache cho toàn bộ item
    item_key = json.dumps({
        "name": item.get("name"),
        "top_dish": item.get("top_dish"),
        "address": item.get("address")
    }, ensure_ascii=False, sort_keys=True)

    cache_key = f"restaurant:{hash(item_key)}:{lang}"
    if cache_key in _RESULT_CACHE:
        return _RESULT_CACHE[cache_key]

    translated = item.copy()

    # Dịch các trường cần thiết
    fields_to_translate = ["name", "top_dish", "address"]
    texts_to_translate = [item.get(field, "") for field in fields_to_translate]
    translated_texts = translate_batch(texts_to_translate, lang)

    for field, translated_text in zip(fields_to_translate, translated_texts):
        if translated_text:
            translated[field] = translated_text

    # Cache kết quả
    _RESULT_CACHE[cache_key] = translated
    return translated


def translate_recommendations(items: List[Dict], lang: str) -> List[Dict]:
    """Dịch danh sách quán ăn gợi ý"""
    if not items or lang == "vi" or lang not in SUPPORTED_LANGS:
        return items

    # Cache toàn bộ danh sách
    list_key = json.dumps([{
        "name": i.get("name"),
        "top_dish": i.get("top_dish"),
        "address": i.get("address")
    } for i in items], ensure_ascii=False, sort_keys=True)

    cache_key = f"list:{hash(list_key)}:{lang}"
    if cache_key in _RESULT_CACHE:
        return _RESULT_CACHE[cache_key]

    translated_items = [translate_restaurant(item, lang) for item in items]
    _RESULT_CACHE[cache_key] = translated_items
    return translated_items