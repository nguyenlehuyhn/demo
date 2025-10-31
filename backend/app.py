from flask import Flask, request, jsonify
from flask_cors import CORS
from config import CORS_ORIGINS
from services import recommender, chatbot, translator

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": CORS_ORIGINS}})

@app.route("/", methods=["GET"])
def root():
    return jsonify({"ok": True, "service": "smart-food-backend", "endpoints": ["/recommend","/chat","/translate"]})

@app.route("/recommend", methods=["POST"])
def recommend_api():
    payload = request.get_json() or {}
    items = recommender.recommend(payload)  # TODO
    return jsonify({"items": items})

@app.route("/chat", methods=["POST"])
def chat_api():
    data = request.get_json() or {}
    message = (data.get("message") or "").strip()
    lang = (data.get("lang") or "vi").lower()
    reply = chatbot.reply_to(message, lang)      # TODO
    return jsonify({"reply": reply})

@app.route("/translate", methods=["POST"])
def translate_api():
    data = request.get_json() or {}
    text = (data.get("text") or "").strip()
    target = (data.get("target") or "en").lower()
    translated = translator.translate_text(text, target)  # TODO
    return jsonify({"translated": translated})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)
