# 🍽️ Smart Food Recommender Project — *Computational Thinking*

### 🎯 Input:
- **Ngân sách (budget)**  
- **Khẩu vị (taste)**  
- **Vị trí (location: lat, lng)**  

### 🎯 Output:
- **Danh sách quán ăn phù hợp**
- **Món nổi bật, khoảng cách, đánh giá**
- **Chatbot hỗ trợ hỏi đáp**
- **Dịch 6 ngôn ngữ** *(VN, EN, CN, KR, JP, ES)*

---

## 👥 Thành viên & Phân công

| Thành viên | Vai trò | Mô tả |
|-------------|----------|-------|
| **Huy** | Frontend | Giao diện web (HTML/CSS/JS), form nhập, bản đồ, chatbot UI |
| **Vĩ** | Backend – Output | Thuật toán lọc 3km, top 5 quán |
| **An** | Backend – Google Maps | Kết nối Google Maps API |
| **Phước** | Backend – Chatbot | Xử lý logic hội thoại |
| **Tuân** | Backend – Translation | Dịch 6 ngôn ngữ |
| **Bảo** | Tester | Kiểm thử toàn hệ thống |

---

## 🧱 Cấu trúc thư mục

```
smart-food-team-skeleton/
├─ frontend/             
│  ├─ index.html          # Giao diện chính
│  ├─ style.css           # CSS
│  └─ app.js              # Logic JS, gọi API
│
├─ backend/              
│  ├─ app.py              # Flask Server chính (/recommend /chat /translate)
│  ├─ config.py           # Cấu hình chung
│  ├─ requirements.txt    # Danh sách gói cần cài (flask, flask-cors)
│  ├─ services/
│  │  ├─ recommender.py   # Lọc quán ăn trong 3km (Vĩ, An)
│  │  ├─ chatbot.py       # Chatbot trả lời người dùng (Phước)
│  │  ├─ translator.py    # Dịch ngôn ngữ (Tuân)
│  │  └─ utils.py         # Hàm phụ trợ: tính khoảng cách, normalize
│  └─ data/
│     └─ restaurants.json # Dữ liệu quán ăn mẫu
│
├─ docs/
│  ├─ api.md              # Mô tả request/response giữa FE ↔ BE
│  └─ architecture.md     # Sơ đồ & quy trình hoạt động
│
└─ tests/
   └─ test_recommender.py
```

---

## ⚙️ 1. Cài đặt môi trường Backend (Flask)

### 🔹 Bước 1 – Mở VSCode
Giải nén project `smart-food-team-skeleton.zip`  
Mở thư mục đó trong VSCode.

### 🔹 Bước 2 – Tạo môi trường ảo (chỉ 1 lần)
```bash
cd backend
py -3.13 -m venv venv
venv\Scripts\activate.bat
```

### 🔹 Bước 3 – Cài gói Flask
```bash
python -m pip install -r requirements.txt
```

### 🔹 Bước 4 – Chạy backend
```bash
python app.py
```

Khi thấy dòng:
```
 * Running on http://127.0.0.1:8000
```
→ **Backend đã hoạt động thành công ✅**  
Mở thử trên trình duyệt:  
👉 [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 💻 2. Chạy Frontend 

### 🔹 Bước 1 – Mở terminal mới
Trong VSCode, mở terminal thứ 2:
```bash
cd frontend
python -m http.server 5500
```

Khi thấy:
```
Serving HTTP on port 5500 (http://127.0.0.1:5500/)
```
→ **Frontend đang chạy.**

### 🔹 Bước 2 – Mở web trên trình duyệt:
Truy cập:
👉 [http://127.0.0.1:5500/frontend/index.html](http://127.0.0.1:5500/frontend/index.html)

Nếu muốn FE gọi đúng API backend, mở kèm query:
```
http://127.0.0.1:5500/frontend/index.html?api=http://127.0.0.1:8000
```
FE sẽ tự lưu **API link** trong `localStorage`.

---

## 🌐 3. Kiểm tra hoạt động

### ✅ Kiểm tra Backend
Mở [http://127.0.0.1:8000](http://127.0.0.1:8000)  
→ thấy JSON `{ ok: true }` là BE chạy.

Dùng Postman/Thunder Client test:
```
POST http://127.0.0.1:8000/recommend
Body: {
  "budget": 100000,
  "taste": "cay",
  "location": {"lat": 10.776, "lng": 106.700}
}
```
→ Nếu trả về `{ "items": [...] }` là OK.

### ✅ Kiểm tra Frontend
Mở `index.html`  
Nhập:
- Ngân sách: 100000  
- Khẩu vị: cay  
- Vị trí: 10.776, 106.700  

Bấm **Tìm quán ăn** → Hiện danh sách 3–5 quán mẫu ✅  
Chat thử chatbot → nếu chưa nối API thật, bot phản hồi:  
`[demo vi] bạn vừa hỏi: ...` ✅  
Thử đổi ngôn ngữ (🌐) → UI thay đổi ✅

---

## 🧠 4. Cách hoạt động tổng quát (FE ↔ BE)

```
Frontend (HTML + JS)
      |
      | fetch('http://127.0.0.1:8000/recommend', {...})
      ↓
Backend Flask
      |
      | xử lý -> trả JSON
      ↓
Frontend nhận JSON -> render ra giao diện
```

---

## 🚀 5. Triển khai Online (Replit)

Khi backend hoàn thiện:

1. **Tạo Replit mới (Python)** → dán code trong `backend/`  
2. **Run** → Replit tạo URL dạng:
   ```
   https://smartfood-be.<user>.repl.co
   ```
3. Mở `frontend/index.html` trên Replit (HTML/CSS/JS)  
4. Trong `app.js` đặt:
   ```js
   const API_BASE = "https://smartfood-be.<user>.repl.co";
   ```

---

## 💬 7. Ghi chú thêm

- FE lưu **ngôn ngữ & API link** trong `localStorage`, chỉ cần đặt 1 lần.  
- Nếu FE bị lỗi **CORS**, kiểm tra:
  ```python
  from flask_cors import CORS
  CORS(app)
  ```
- Khi cần tắt server:  
  **Ctrl + C** trong terminal.

---

## 🧾 8. Kết quả mong đợi khi chạy thành công

### ✅ Frontend:
- Giao diện hiển thị form + nút + chatbot  
- Đổi ngôn ngữ tự động  
- Lấy vị trí (geolocation)  
- Mở Google Maps chỉ đường  

### ✅ Backend:
- Chạy được Flask tại `http://127.0.0.1:8000`
- Trả JSON hợp lệ cho 3 API:
  - `/recommend` – danh sách quán ăn  
  - `/chat` – phản hồi hội thoại  
  - `/translate` – dịch ngôn ngữ  

### ✅ Kết nối:
- FE gọi được BE qua `fetch()`
- 3 API hoạt động đúng theo `docs/api.md`

---

