# API Contract (Frontend ↔ Backend)

## 1) POST /recommend
Request:
```json
{ "budget": 100000, "taste": "cay", "location": { "lat": 10.776, "lng": 106.700 } }
```
Response:
```json
{ "items": [ { "id":"r1","name":"Bún Bò","avgPrice":45000,"lat":10.77,"lng":106.70,
"topDish":"Bún bò cay","rating":4.3,"address":"123 Lê Lợi","image":"..." } ] }
```

## 2) POST /chat
Request:
```json
{ "message": "Xin chào", "lang": "vi" }
```
Response:
```json
{ "reply": "..." }
```

## 3) POST /translate
Request:
```json
{ "text": "Bún bò cay", "target": "en" }
```
Response:
```json
{ "translated": "Spicy beef noodle soup" }
```

Notes:
- CORS enabled; FE may be on a different domain.
- FE can render immediately and update translations asynchronously.
