// Backend translation API endpoint (optional)
        const TRANSLATE_API = "";

        // I18N translations
        const I18N = {
            vi: {
                app_title: "🍜 Trợ lý gợi ý quán ăn",
                language_title: "Chọn ngôn ngữ",
                budget_label: "Ngân sách tối đa (VND)",
                budget_placeholder: "100000",
                taste_label: "Khẩu vị (vd: cay, chay, hải sản)",
                taste_placeholder: "cay / chay / hải sản",
                location_label: "Vị trí (lat,lng) — bấm \"Lấy vị trí\"",
                location_placeholder: "10.776,106.700",
                geoloc_btn: "📍 Lấy vị trí của tôi",
                search_btn: "🔎 Tìm quán ăn",
                status_idle: "Nhập thông tin và nhấn \"Tìm quán ăn\" để bắt đầu",
                status_loading: "Đang tìm kiếm...",
                status_error: "Lỗi xảy ra. Vui lòng thử lại.",
                status_empty: "Không tìm thấy quán ăn phù hợp.",
                results_title: "Kết quả",
                label_price: "Giá TB:",
                label_distance: "Khoảng cách:",
                label_rating: "Đánh giá:",
                label_topdish: "⭐",
                route_btn: "🗺️ Xem đường đi",
                close_btn: "Đóng"
            },
            en: {
                app_title: "🍜 Food Recommender",
                language_title: "Choose language",
                budget_label: "Max budget (VND)",
                budget_placeholder: "100000",
                taste_label: "Taste (e.g., spicy, vegan, seafood)",
                taste_placeholder: "spicy / vegan / seafood",
                location_label: "Location (lat,lng) — press \"Use my location\"",
                location_placeholder: "10.776,106.700",
                geoloc_btn: "📍 Use my location",
                search_btn: "🔎 Search",
                status_idle: "Enter info then click \"Search\"",
                status_loading: "Searching...",
                status_error: "Error occurred. Please try again.",
                status_empty: "No restaurants found matching your criteria.",
                results_title: "Results",
                label_price: "Avg price:",
                label_distance: "Distance:",
                label_rating: "Rating:",
                label_topdish: "⭐",
                route_btn: "🗺️ View directions",
                close_btn: "Close"
            },
            zh: {
                app_title: "🍜 美食推荐",
                language_title: "选择语言",
                budget_label: "最高预算 (VND)",
                budget_placeholder: "100000",
                taste_label: "口味（如：辣、素、海鲜）",
                taste_placeholder: "辣 / 素 / 海鲜",
                location_label: "位置 (纬度,经度) — 点击\"我的位置\"",
                location_placeholder: "10.776,106.700",
                geoloc_btn: "📍 我的位置",
                search_btn: "🔎 搜索",
                status_idle: "输入信息后点击\"搜索\"",
                status_loading: "搜索中...",
                status_error: "发生错误，请重试。",
                status_empty: "未找到符合条件的餐厅。",
                results_title: "结果",
                label_price: "平均价格：",
                label_distance: "距离：",
                label_rating: "评分：",
                label_topdish: "⭐",
                route_btn: "🗺️ 查看路线",
                close_btn: "关闭"
            },
            ko: {
                app_title: "🍜 맛집 추천",
                language_title: "언어 선택",
                budget_label: "최대 예산 (VND)",
                budget_placeholder: "100000",
                taste_label: "취향 (예: 매운맛, 비건, 해산물)",
                taste_placeholder: "매운맛 / 비건 / 해산물",
                location_label: "위치 (위도,경도) — \"내 위치\" 버튼",
                location_placeholder: "10.776,106.700",
                geoloc_btn: "📍 내 위치",
                search_btn: "🔎 검색",
                status_idle: "정보 입력 후 \"검색\"을 누르세요",
                status_loading: "검색 중...",
                status_error: "오류가 발생했습니다. 다시 시도하세요.",
                status_empty: "조건에 맞는 음식점을 찾을 수 없습니다.",
                results_title: "결과",
                label_price: "평균 가격:",
                label_distance: "거리:",
                label_rating: "평점:",
                label_topdish: "⭐",
                route_btn: "🗺️ 길찾기",
                close_btn: "닫기"
            },
            ja: {
                app_title: "🍜 フードレコメンダー",
                language_title: "言語を選択",
                budget_label: "最大予算 (VND)",
                budget_placeholder: "100000",
                taste_label: "好み（辛い・ベジ・海鮮）",
                taste_placeholder: "辛い / ベジ / 海鮮",
                location_label: "位置 (緯度,経度) — 「現在地」",
                location_placeholder: "10.776,106.700",
                geoloc_btn: "📍 現在地",
                search_btn: "🔎 検索",
                status_idle: "情報を入力して「検索」",
                status_loading: "検索中...",
                status_error: "エラーが発生しました。もう一度お試しください。",
                status_empty: "条件に合うレストランが見つかりません。",
                results_title: "結果",
                label_price: "平均価格：",
                label_distance: "距離：",
                label_rating: "評価：",
                label_topdish: "⭐",
                route_btn: "🗺️ 経路を表示",
                close_btn: "閉じる"
            },
            es: {
                app_title: "🍜 Recomendador de comida",
                language_title: "Elegir idioma",
                budget_label: "Presupuesto máx. (VND)",
                budget_placeholder: "100000",
                taste_label: "Gusto (p. ej., picante, vegano, mariscos)",
                taste_placeholder: "picante / vegano / mariscos",
                location_label: "Ubicación (lat,lng) — pulsa \"Mi ubicación\"",
                location_placeholder: "10.776,106.700",
                geoloc_btn: "📍 Mi ubicación",
                search_btn: "🔎 Buscar",
                status_idle: "Introduce info y pulsa \"Buscar\"",
                status_loading: "Buscando...",
                status_error: "Error. Por favor, inténtalo de nuevo.",
                status_empty: "No se encontraron restaurantes que coincidan.",
                results_title: "Resultados",
                label_price: "Precio prom.:",
                label_distance: "Distancia:",
                label_rating: "Calificación:",
                label_topdish: "⭐",
                route_btn: "🗺️ Ver ruta",
                close_btn: "Cerrar"
            }
        };

        // Configuration
        const MODE = "MOCK";
        const MAX_DISTANCE_KM = 3;
        const MAX_RESULTS = 5;

        // Mock data - 10 Vietnamese restaurants
        const MOCK_RESTAURANTS = [
            {
                id: 1,
                name: "Phở Hà Nội",
                image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&h=300&fit=crop",
                avgPrice: 50000,
                location: { lat: 21.0285, lng: 105.8542 },
                topDish: "Phở bò tái",
                address: "123 Đường Láng, Đống Đa, Hà Nội",
                rating: 4.5,
                tags: ["phở", "bún", "món việt"]
            },
            {
                id: 2,
                name: "Bún Chả Obama",
                image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop",
                avgPrice: 60000,
                location: { lat: 21.0245, lng: 105.8412 },
                topDish: "Bún chả đặc biệt",
                address: "1 Lê Văn Hưu, Hai Bà Trưng, Hà Nội",
                rating: 4.8,
                tags: ["bún chả", "bún", "món việt", "nướng"]
            },
            {
                id: 3,
                name: "Cơm Tấm Sài Gòn",
                image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop",
                avgPrice: 45000,
                location: { lat: 21.0305, lng: 105.8485 },
                topDish: "Cơm tấm sườn bì chả",
                address: "45 Nguyễn Thái Học, Ba Đình, Hà Nội",
                rating: 4.3,
                tags: ["cơm", "cơm tấm", "món việt", "nướng"]
            },
            {
                id: 4,
                name: "Bánh Mì 25",
                image: "https://images.unsplash.com/photo-1603893287714-835624eb1cd9?w=400&h=300&fit=crop",
                avgPrice: 25000,
                location: { lat: 21.0267, lng: 105.8525 },
                topDish: "Bánh mì pate thịt nguội",
                address: "25 Hàng Cá, Hoàn Kiếm, Hà Nội",
                rating: 4.6,
                tags: ["bánh mì", "ăn sáng", "món việt"]
            },
            {
                id: 5,
                name: "Bún Bò Huế Đông Ba",
                image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
                avgPrice: 55000,
                location: { lat: 21.0295, lng: 105.8502 },
                topDish: "Bún bò Huế đặc biệt",
                address: "78 Kim Mã, Ba Đình, Hà Nội",
                rating: 4.4,
                tags: ["bún", "bún bò", "món huế", "món việt"]
            },
            {
                id: 6,
                name: "Quán Nem Rán",
                image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop",
                avgPrice: 40000,
                location: { lat: 21.0255, lng: 105.8555 },
                topDish: "Nem rán giòn",
                address: "90 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội",
                rating: 4.2,
                tags: ["nem", "món chiên", "món việt", "ăn vặt"]
            },
            {
                id: 7,
                name: "Lẩu Thái Tomyum",
                image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop",
                avgPrice: 120000,
                location: { lat: 21.0315, lng: 105.8472 },
                topDish: "Lẩu Tomyum hải sản",
                address: "12 Liễu Giai, Ba Đình, Hà Nội",
                rating: 4.7,
                tags: ["lẩu", "món thái", "hải sản"]
            },
            {
                id: 8,
                name: "Phở Cuốn Ngũ Xã",
                image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
                avgPrice: 35000,
                location: { lat: 21.0275, lng: 105.8532 },
                topDish: "Phở cuốn tươi",
                address: "67 Nguyễn Khang, Cầu Giấy, Hà Nội",
                rating: 4.5,
                tags: ["phở cuốn", "phở", "món việt", "ăn vặt"]
            },
            {
                id: 9,
                name: "Miến Xào Lươn",
                image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop",
                avgPrice: 70000,
                location: { lat: 21.0240, lng: 105.8495 },
                topDish: "Miến xào lươn đồng",
                address: "34 Phan Chu Trinh, Hoàn Kiếm, Hà Nội",
                rating: 4.6,
                tags: ["miến", "xào", "lươn", "món việt"]
            },
            {
                id: 10,
                name: "Cà Phê Trứng Giảng",
                image: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=400&h=300&fit=crop",
                avgPrice: 30000,
                location: { lat: 21.0285, lng: 105.8520 },
                topDish: "Cà phê trứng đặc biệt",
                address: "39 Nguyễn Hữu Huân, Hoàn Kiếm, Hà Nội",
                rating: 4.9,
                tags: ["cà phê", "đồ uống", "món việt", "trứng"]
            }
        ];

        // User location state
        let userLocation = null;

        // Language management
        function getLang() {
            let saved = localStorage.getItem('lang');
            if (saved && I18N[saved]) return saved;
            
            const navLang = navigator.language || navigator.userLanguage;
            if (navLang.startsWith('vi')) return 'vi';
            if (navLang.startsWith('en')) return 'en';
            if (navLang.startsWith('zh')) return 'zh';
            if (navLang.startsWith('ko')) return 'ko';
            if (navLang.startsWith('ja')) return 'ja';
            if (navLang.startsWith('es')) return 'es';
            return 'vi';
        }

        function setLang(lang) {
            if (!I18N[lang]) return;
            localStorage.setItem('lang', lang);
            applyI18n();
        }

        function t(key) {
            const lang = getLang();
            return I18N[lang][key] || I18N['vi'][key] || key;
        }

        function applyI18n() {
            const lang = getLang();
            
            // Update elements with data-i18n attribute
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.textContent = t(key);
            });

            // Update placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                el.placeholder = t(key);
            });

            // Update document title
            document.title = t('app_title');

            // Update active language button
            document.querySelectorAll('.lang-item').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
        }

        // Backend translation function (optional)
        async function translateText(text, target) {
            if (!TRANSLATE_API || target === 'vi') return text;
            try {
                const r = await fetch(TRANSLATE_API, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text, target })
                });
                if (!r.ok) return text;
                const j = await r.json();
                return j.translated || text;
            } catch {
                return text;
            }
        }

        // Modal management
        function openLangModal() {
            document.getElementById('langOverlay').hidden = false;
            document.getElementById('langModal').hidden = false;
            const firstLangItem = document.querySelector('.lang-item');
            if (firstLangItem) firstLangItem.focus();
        }

        function closeLangModal() {
            document.getElementById('langOverlay').hidden = true;
            document.getElementById('langModal').hidden = true;
            document.getElementById('btnLang').focus();
        }

        // Helper: Normalize Vietnamese text (remove accents)
        function normalizeText(text) {
            if (!text) return '';
            return text
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd')
                .replace(/Đ/g, 'd');
        }

        // Helper: Calculate distance between two coordinates (Haversine formula)
        function calculateDistance(lat1, lng1, lat2, lng2) {
            const R = 6371;
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLng = (lng2 - lng1) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                      Math.sin(dLng/2) * Math.sin(dLng/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        }

        // Helper: Render a single restaurant card
        function renderCard(restaurant) {
            return `
                <div class="restaurant-card" data-restaurant-id="${restaurant.id}">
                    <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
                    <div class="restaurant-info">
                        <h3 class="restaurant-name">${restaurant.name}</h3>
                        <div class="restaurant-dish" data-dish="${restaurant.id}">${t('label_topdish')} ${restaurant.topDish}</div>
                        <div class="restaurant-details">
                            <div class="detail-item">
                                <strong>${t('label_price')}</strong> ${restaurant.avgPrice.toLocaleString('vi-VN')} đ
                            </div>
                            <div class="detail-item">
                                <strong>${t('label_distance')}</strong> ${restaurant.distanceKm.toFixed(2)} km
                            </div>
                            <div class="detail-item rating">
                                <strong>${t('label_rating')}</strong> ${restaurant.rating} ⭐
                            </div>
                        </div>
                        <div class="restaurant-address">📍 ${restaurant.address}</div>
                        <button class="btn-route" data-address="${encodeURIComponent(restaurant.address)}">
                            ${t('route_btn')}
                        </button>
                    </div>
                </div>
            `;
        }

        // Helper: Render list of restaurants
        async function renderList(restaurants) {
            const resultsDiv = document.getElementById('results');
            
            if (restaurants.length === 0) {
                resultsDiv.innerHTML = `
                    <div class="status-message">
                        😔 ${t('status_empty')}
                    </div>
                `;
                return;
            }

            resultsDiv.innerHTML = `
                <div class="restaurant-grid">
                    ${restaurants.map(renderCard).join('')}
                </div>
            `;

            // Optionally translate dish names if backend API is available
            const currentLang = getLang();
            if (TRANSLATE_API && currentLang !== 'vi') {
                for (const restaurant of restaurants) {
                    const dishEl = document.querySelector(`[data-dish="${restaurant.id}"]`);
                    if (dishEl) {
                        const translated = await translateText(restaurant.topDish, currentLang);
                        dishEl.textContent = `${t('label_topdish')} ${translated}`;
                    }
                }
            }
        }

        // Helper: Set status message
        function setStatus(message, type = 'info') {
            const resultsDiv = document.getElementById('results');
            const spinner = type === 'loading' ? '<div class="spinner"></div>' : '';
            resultsDiv.innerHTML = `
                <div class="status-message ${type}">
                    ${spinner}
                    ${message}
                </div>
            `;
        }

        // Parse location input (can be "lat,lng" or address text)
        function parseLocation(locationInput) {
            const coords = locationInput.split(',').map(s => s.trim());
            if (coords.length === 2) {
                const lat = parseFloat(coords[0]);
                const lng = parseFloat(coords[1]);
                if (!isNaN(lat) && !isNaN(lng)) {
                    return { lat, lng };
                }
            }
            return userLocation || { lat: 21.0285, lng: 105.8542 };
        }

        // Filter and sort restaurants
        function findRestaurants(budget, taste, location) {
            const normalizedTaste = normalizeText(taste);
            const userLoc = parseLocation(location);

            const restaurantsWithDistance = MOCK_RESTAURANTS.map(restaurant => ({
                ...restaurant,
                distanceKm: calculateDistance(
                    userLoc.lat, userLoc.lng,
                    restaurant.location.lat, restaurant.location.lng
                )
            }));

            const filtered = restaurantsWithDistance.filter(restaurant => {
                const withinDistance = restaurant.distanceKm <= MAX_DISTANCE_KM;
                const withinBudget = restaurant.avgPrice <= budget;
                const matchesTaste = restaurant.tags.some(tag => 
                    normalizeText(tag).includes(normalizedTaste)
                );
                return withinDistance && withinBudget && matchesTaste;
            });

            filtered.sort((a, b) => {
                if (a.distanceKm !== b.distanceKm) {
                    return a.distanceKm - b.distanceKm;
                }
                return b.rating - a.rating;
            });

            return filtered.slice(0, MAX_RESULTS);
        }

        // Event: Language button
        document.getElementById('btnLang').addEventListener('click', openLangModal);

        // Event: Language selection
        document.querySelectorAll('.lang-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                setLang(lang);
                closeLangModal();
            });
        });

        // Event: Close modal button
        document.getElementById('btnLangClose').addEventListener('click', closeLangModal);

        // Event: Close on overlay click
        document.getElementById('langOverlay').addEventListener('click', closeLangModal);

        // Event: Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !document.getElementById('langModal').hidden) {
                closeLangModal();
            }
        });

        // Event: Get user location
        document.getElementById('getLocationBtn').addEventListener('click', function() {
            if (!navigator.geolocation) {
                alert(t('status_error'));
                return;
            }

            setStatus(t('status_loading'), 'loading');

            navigator.geolocation.getCurrentPosition(
                function(position) {
                    userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    const locationInput = document.getElementById('location');
                    locationInput.value = `${userLocation.lat}, ${userLocation.lng}`;
                    setStatus(t('status_idle'));
                },
                function(error) {
                    setStatus(t('status_error'), 'error');
                }
            );
        });

        // Event: Form submission
        document.getElementById('searchForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const budget = parseInt(document.getElementById('budget').value);
            const taste = document.getElementById('taste').value.trim();
            const location = document.getElementById('location').value.trim();

            if (!budget || !taste || !location) {
                setStatus(t('status_error'), 'error');
                return;
            }

            setStatus(t('status_loading'), 'loading');

            setTimeout(() => {
                try {
                    const results = findRestaurants(budget, taste, location);
                    renderList(results);
                } catch (error) {
                    setStatus(t('status_error'), 'error');
                    console.error('Search error:', error);
                }
            }, 500);
        });

        // Event delegation: Handle route buttons
        document.getElementById('results').addEventListener('click', function(e) {
            if (e.target.classList.contains('btn-route')) {
                const address = e.target.getAttribute('data-address');
                const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
                window.open(mapsUrl, '_blank');
            }
        });

        // Initialize language on page load
        applyI18n();

        // ========== Chat Widget Functionality ==========
        const chatButton = document.getElementById('chatButton');
        const chatPanel = document.getElementById('chatPanel');
        const chatCloseBtn = document.getElementById('chatCloseBtn');
        const chatForm = document.getElementById('chatForm');
        const chatInput = document.getElementById('chatInput');
        const chatMessages = document.getElementById('chatMessages');

        // Toggle chat panel
        function toggleChat() {
            chatPanel.classList.toggle('open');
            if (chatPanel.classList.contains('open')) {
                chatButton.classList.add('hidden');
                chatInput.focus();
            } else {
                chatButton.classList.remove('hidden');
            }
        }

        // Close chat panel
        function closeChat() {
            chatPanel.classList.remove('open');
            chatButton.classList.remove('hidden');
        }

        // Add message to chat
        function addMessage(text, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'chat-message' + (isUser ? ' user' : '');
            
            const avatar = document.createElement('div');
            avatar.className = 'chat-avatar';
            avatar.textContent = isUser ? '👤' : '🤖';
            
            const content = document.createElement('div');
            content.className = 'chat-message-content';
            content.textContent = text;
            
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(content);
            
            chatMessages.appendChild(messageDiv);
            
            // Scroll to bottom
            chatMessages.parentElement.scrollTop = chatMessages.parentElement.scrollHeight;
        }

        // Handle bot response
        function getBotResponse(userMessage) {
            const lowerMsg = userMessage.toLowerCase();
            
            if (lowerMsg.includes('restaurant') || lowerMsg.includes('find') || lowerMsg.includes('food')) {
                return "Sure! Use the search form above to find restaurants near you. Enter your budget, taste preferences, and location to get personalized recommendations! 🍜";
            } else if (lowerMsg.includes('help') || lowerMsg.includes('how')) {
                return "I can help you find the perfect restaurant! Just fill in:\n1. Your budget (in VND)\n2. What you're craving (like phở, cơm, bún)\n3. Your location (or use the location button)\nThen click Search! 🔎";
            } else if (lowerMsg.includes('about') || lowerMsg.includes('app')) {
                return "This is a Food Recommender app that helps you discover restaurants based on your budget, taste preferences, and location. It supports 6 languages and uses smart filtering to find the best matches within 3km of you! 🌏";
            } else if (lowerMsg.includes('language') || lowerMsg.includes('translate')) {
                return "You can change the language by clicking the '🌐 Language' button in the top right. We support Vietnamese, English, Chinese, Korean, Japanese, and Spanish! 🌍";
            } else if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
                return "Hello! 👋 How can I assist you with finding a great restaurant today?";
            } else if (lowerMsg.includes('thank')) {
                return "You're welcome! Feel free to ask if you need anything else. Happy dining! 😊";
            } else {
                return "I'm here to help you find restaurants! You can ask me about:\n• How to search for restaurants\n• Changing the language\n• About this app\n\nOr just start using the search form above! 🍽️";
            }
        }

        // Event: Chat button click
        chatButton.addEventListener('click', toggleChat);

        // Event: Close button click
        chatCloseBtn.addEventListener('click', closeChat);

        // Event: Chat form submit
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const message = chatInput.value.trim();
            if (!message) return;
            
            // Add user message
            addMessage(message, true);
            chatInput.value = '';
            
            // Simulate bot typing delay
            setTimeout(() => {
                const response = getBotResponse(message);
                addMessage(response, false);
            }, 500);
        });

        // Event: Suggestion chip clicks
        chatMessages.addEventListener('click', function(e) {
            if (e.target.classList.contains('chat-chip')) {
                const suggestion = e.target.getAttribute('data-suggestion');
                chatInput.value = suggestion;
                chatInput.focus();
            }
        });

        // Event: Close chat when clicking outside (optional)
        document.addEventListener('click', function(e) {
            if (chatPanel.classList.contains('open') && 
                !chatPanel.contains(e.target) && 
                !chatButton.contains(e.target)) {
                // Uncomment below to enable click-outside-to-close
                // closeChat();
            }
        });
