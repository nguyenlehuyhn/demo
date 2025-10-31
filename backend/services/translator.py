from ..config import SUPPORTED_LANGS

def translate_text(text: str, target: str = "en") -> str:
    if not text or target not in SUPPORTED_LANGS:
        return text
    if target == "vi":
        return text
    # TODO: implement real translation
    return f"{text} ({target})"
