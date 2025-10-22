Hướng dẫn git
# 1) Lấy code mới nhất trước khi làm
git pull
# 2) Lưu thay đổi
git add .
git commit -m "<mô tả ngắn>"
# 3) Kéo về nếu người khác vừa đẩy (để gỡ xung đột trước)
git pull --rebase
# 4) Đẩy lên main
git push -u origin main


-data/
    +Chứa file CSV giả lập để test offline
    +Quan trọng khi không có API key hoặc mất mạng, vẫn chạy demo được
-common/
    +Nơi đặt hàm dùng chung, ví dụ: tính khoảng cách Haversine, chuẩn hóa chuỗi khẩu vị.
    +Để tránh lặp code ở nhiều module
-recommender/
    +recommender.py: dùng dữ liệu CSV offline (demo cơ bản).
    +google_places.py: gọi Google Places API (Nearby Search, Text Search) → trả về danh sách quán ăn thật.