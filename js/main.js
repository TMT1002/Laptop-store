// Main JavaScript for homepage functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample laptop data (moved to external file)
    const laptopsData = [
     {
        "id": 1,
        "name": "Dell Vostro 15",
        "brand": "Dell",
        "price": 3500000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
        "specs": {
            "cpu": "i5-7200U",
            "ram": "8GB",
            "storage": "SSD 256GB",
            "gpu": "Intel HD",
            "screen": "15.6”"
        },
        "description": "Laptop phổ thông, màn hình lớn, phù hợp nhu cầu cơ bản, giá rẻ."
    },
    {
        "id": 2,
        "name": "Dell Latitude 5300 i5/8th/8gb/256",
        "brand": "Dell",
        "price": 3650000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
        "specs": {
            "cpu": "i5-8365U",
            "ram": "8GB",
            "storage": "SSD 256GB",
            "gpu": "Intel UHD Graphics 620",
            "screen": "13.3”"
        },
        "description": "Laptop nhỏ gọn, giá hợp lý, phù hợp nhu cầu cơ bản: soạn thảo, học tập."
    },
    {
        "id": 3,
        "name": "Dell Latitude 5310 i5/10th/8/256",
        "brand": "Dell",
        "price": 4250000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
        "specs": {
            "cpu": "i5-10210U",
            "ram": "16GB",
            "storage": "SSD 256GB",
            "gpu": "Intel UHD Graphics 621",
            "screen": "13.3”"
        },
        "description": "Laptop nhỏ gọn, giá hợp lý, phù hợp nhu cầu cơ bản: soạn thảo, học tập."
    },
    {
        "id": 4,
        "name": "Dell Latitude 5320 i5/11th/16/256",
        "brand": "Dell",
        "price": 6250000,
        "category": "Laptop phổ thông",
        "quantity": 2,
        "image": "https://res.cloudinary.com/dp8glqsir/image/upload/v1769525895/z7191080894590_fa266823caafbcd35b785d7c5464f4dd_tznxyk.jpg",
        "specs": {
            "cpu": "i5-1145G7",
            "ram": "16GB",
            "storage": "SSD 256GB",
            "gpu": "Intel Iris Xe Graphics",
            "screen": "13.3”"
        },
        "description": "Laptop Latitude, hiệu năng ổn định, phù hợp cho công việc văn phòng & học tập."
    },
    {
        "id": 5,
        "name": "Dell Latitude 5320 i7/11th/16/256",
        "brand": "Dell",
        "price": 7000000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1587202372775-98907f1e0a57?w=500&q=80",
        "specs": {
            "cpu": "i7-1185G7",
            "ram": "16GB",
            "storage": "SSD 256GB",
            "gpu": "Intel Iris Xe Graphics",
            "screen": "13.3”"
        },
        "description": "Laptop cao cấp, màn hình cảm ứng, mạnh mẽ cho công việc sáng tạo & di chuyển."
    },
    {
        "id": 6,
        "name": "Dell Latitude 5330 i5/12th/8/256",
        "brand": "Dell",
        "price": 6850000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
        "specs": {
            "cpu": "i5-1245U",
            "ram": "8GB",
            "storage": "SSD 256GB",
            "gpu": "Intel Iris Xe Graphics",
            "screen": "13.3”"
        },
        "description": "Laptop đời mới, CPU Gen 12, hiệu năng mạnh mẽ cho văn phòng & học tập."
    },
    {
        "id": 7,
        "name": "Dell Latitude 5400 i5/8th/8/256",
        "brand": "Dell",
        "price": 3850000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
        "specs": {
            "cpu": "i5-8265U",
            "ram": "8GB",
            "storage": "SSD 256GB",
            "gpu": "Intel UHD Graphics 620",
            "screen": "14”"
        },
        "description": "nan"
    },
    {
        "id": 8,
        "name": "Dell Latitude 5420 i5/11th/16/256",
        "brand": "Dell",
        "price": 7200000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
        "specs": {
            "cpu": "i7-1185G7",
            "ram": "8GB",
            "storage": "SSD 256GB",
            "gpu": "Intel Iris Xe Graphics",
            "screen": "14”"
        },
        "description": "Laptop Latitude dòng bền, CPU i7 mạnh mẽ, thích hợp cho dân IT & văn phòng."
    },
    {
        "id": 9,
        "name": "Dell Latitude 5430 i5/12th/16/256",
        "brand": "Dell",
        "price": 7500000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&q=80",
        "specs": {
            "cpu": "i5-1245U (Gen 12)",
            "ram": "16GB",
            "storage": "SSD 256GB",
            "gpu": "Intel Iris Xe Graphics",
            "screen": "14”"
        },
        "description": "nan"
    },
    {
        "id": 10,
        "name": "Dell Latitude 7320 i7/11th/16/256",
        "brand": "Dell",
        "price": 7300000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://res.cloudinary.com/dp8glqsir/image/upload/v1769620444/z7439546531147_eee457698d2fee5df50616dcbb788679_f8mnrw.jpg",
        "specs": {
            "cpu": "i7-1185G7 @3.0GHz",
            "ram": "16GB",
            "storage": "SSD 256GB",
            "gpu": "Intel Iris Xe Graphics",
            "screen": "13.3”"
        },
        "description": "Laptop doanh nhân cao cấp, CPU i7 mạnh mẽ, thích hợp cho công việc nặng."
    },
    {
        "id": 11,
        "name": "Dell Vostro 5301 i5/11th/16/256",
        "brand": "Dell",
        "price": 6250000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
        "specs": {
            "cpu": "i5-1135G7 @2.40GHz",
            "ram": "8GB",
            "storage": "SSD 256GB",
            "gpu": "Intel Iris Xe Graphics",
            "screen": "13.3”"
        },
        "description": "Laptop siêu mỏng nhẹ, thiết kế premium, hiệu năng tốt cho văn phòng & học tập."
    },
    {
        "id": 12,
        "name": "Dell Latitude 3301 i5/8th/8gb/256",
        "brand": "Dell",
        "price": 4250000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
        "specs": {
            "cpu": "i5-8365U",
            "ram": "8GB",
            "storage": "SSD 256GB",
            "gpu": "Intel UHD Graphics 620",
            "screen": "13.3”"
        },
        "description": "nan"
    },
    {
        "id": 13,
        "name": "HP ProBook 430 G8 i5/11th/16/256",
        "brand": "HP",
        "price": 5800000,
        "category": "Laptop phổ thông",
        "quantity": 1,
        "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
        "specs": {
            "cpu": "i5-1135G7",
            "ram": "16GB",
            "storage": "SSD 256GB",
            "gpu": "Intel Iris Xe Graphics",
            "screen": "13.3”"
        },
        "description": "Laptop HP ProBook, thiết kế gọn gàng, RAM lớn, phù hợp học sinh sinh viên."
    }
    ];

    // DOM elements
    const productsGrid = document.getElementById('productsGrid');
    const searchInput = document.getElementById('searchInput');
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const noResults = document.getElementById('noResults');
    const productModal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Current filtered laptops
    let currentLaptops = [...laptopsData];

    // Initialize page
    function init() {
        renderProducts(currentLaptops);
        setupEventListeners();
        loadContactInfo();
        loadSocialLinks();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search and filters
        searchInput?.addEventListener('input', debounce(filterProducts, 300));
        brandFilter?.addEventListener('change', filterProducts);
        priceFilter?.addEventListener('change', filterProducts);
        categoryFilter?.addEventListener('change', filterProducts);

        // Modal events
        closeModal?.addEventListener('click', closeProductModal);
        productModal?.addEventListener('click', function(e) {
            if (e.target === productModal) {
                closeProductModal();
            }
        });

        // Mobile menu
        mobileMenuToggle?.addEventListener('click', function() {
            navMenu?.classList.toggle('active');
        });

        // Escape key to close modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeProductModal();
            }
        });
    }

    // Format price in Vietnamese currency
    function formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    }

    // Filter products based on search and filter criteria
    function filterProducts() {
        const searchTerm = searchInput?.value.toLowerCase() || '';
        const selectedBrand = brandFilter?.value || '';
        const selectedPrice = priceFilter?.value || '';
        const selectedCategory = categoryFilter?.value || '';

        currentLaptops = laptopsData.filter(laptop => {
            // Search filter
            const matchesSearch = !searchTerm || 
                laptop.name.toLowerCase().includes(searchTerm) ||
                laptop.brand.toLowerCase().includes(searchTerm) ||
                laptop.category.toLowerCase().includes(searchTerm) ||
                laptop.specs.cpu.toLowerCase().includes(searchTerm) ||
                laptop.specs.ram.toLowerCase().includes(searchTerm) ||
                laptop.specs.storage.toLowerCase().includes(searchTerm) ||
                laptop.specs.gpu.toLowerCase().includes(searchTerm);

            // Brand filter
            const matchesBrand = !selectedBrand || laptop.brand === selectedBrand;

            // Category filter
            const matchesCategory = !selectedCategory || laptop.category === selectedCategory;

            // Price filter
            let matchesPrice = true;
            if (selectedPrice) {
                const price = laptop.price / 1000000; // Convert to millions
                switch (selectedPrice) {
                    case '0-15':
                        matchesPrice = price < 15;
                        break;
                    case '15-25':
                        matchesPrice = price >= 15 && price < 25;
                        break;
                    case '25-35':
                        matchesPrice = price >= 25 && price < 35;
                        break;
                    case '35+':
                        matchesPrice = price >= 35;
                        break;
                }
            }

            return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
        });

        renderProducts(currentLaptops);
    }

    // Render products grid
    function renderProducts(laptops) {
        if (!productsGrid) return;

        if (laptops.length === 0) {
            productsGrid.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }

        productsGrid.style.display = 'grid';
        noResults.style.display = 'none';

        productsGrid.innerHTML = laptops.map(laptop => {
            const shortSpecs = `${laptop.specs.cpu} • ${laptop.specs.ram} • ${laptop.specs.gpu}`;
            
            return `
                <div class="product-card" onclick="showProductDetail(${laptop.id})">
                    <div class="product-image">
                        ${laptop.image 
                            ? `<img src="${laptop.image}" alt="${laptop.name}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-laptop placeholder-icon\\'></i>'">`
                            : `<i class="fas fa-laptop placeholder-icon"></i>`
                        }
                    </div>
                    <div class="product-info">
                        <div class="product-brand">${laptop.brand}</div>
                        <h3 class="product-title">${laptop.name}</h3>
                        <div class="product-category">${laptop.category}</div>
                        <div class="product-specs">${shortSpecs}</div>
                        <div class="product-price">${formatPrice(laptop.price)}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Show product detail modal
    window.showProductDetail = function(laptopId) {
        const laptop = laptopsData.find(l => l.id === laptopId);
        if (!laptop || !productModal || !modalBody) return;

        modalBody.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-image-container">
                    ${laptop.image 
                        ? `<img src="${laptop.image}" alt="${laptop.name}" class="product-detail-image" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'product-image\\' style=\\'height: 300px;\\'><i class=\\'fas fa-laptop placeholder-icon\\'></i></div>'">`
                        : `<div class="product-image" style="height: 300px;"><i class="fas fa-laptop placeholder-icon"></i></div>`
                    }
                </div>
                <div class="product-detail-info">
                    <div class="product-detail-brand">${laptop.brand}</div>
                    <h3>${laptop.name}</h3>
                    <div class="product-detail-category">${laptop.category}</div>
                    <div class="product-detail-price">${formatPrice(laptop.price)}</div>
                    
                    <div class="product-specs-detail">
                        <h4>Thông số kỹ thuật</h4>
                        <div class="specs-grid">
                            <div class="spec-item">
                                <span class="spec-label">CPU:</span>
                                <span class="spec-value">${laptop.specs.cpu}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">RAM:</span>
                                <span class="spec-value">${laptop.specs.ram}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Ổ cứng:</span>
                                <span class="spec-value">${laptop.specs.storage}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Card đồ họa:</span>
                                <span class="spec-value">${laptop.specs.gpu}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Màn hình:</span>
                                <span class="spec-value">${laptop.specs.screen}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Trọng lượng:</span>
                                <span class="spec-value">${laptop.specs.weight}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-description">
                        <h4>Mô tả sản phẩm</h4>
                        <p>${laptop.description}</p>
                    </div>
                </div>
            </div>
        `;

        productModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    // Close product modal
    function closeProductModal() {
        if (productModal) {
            productModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Debounce function for search
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize the page
    init();

    // Load contact info from localStorage
    function loadContactInfo() {
        const contactInfo = JSON.parse(localStorage.getItem('contactInfo') || '{}');
        
        if (contactInfo.phone) {
            const phoneEl = document.querySelector('.footer-section p:has(i.fa-phone)');
            if (phoneEl) phoneEl.innerHTML = `<i class="fas fa-phone"></i> ${contactInfo.phone}`;
        }
        
        if (contactInfo.email) {
            const emailEl = document.querySelector('.footer-section p:has(i.fa-envelope)');
            if (emailEl) emailEl.innerHTML = `<i class="fas fa-envelope"></i> ${contactInfo.email}`;
        }
        
        if (contactInfo.address) {
            const addressEl = document.querySelector('.footer-section p:has(i.fa-map-marker-alt)');
            if (addressEl) addressEl.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${contactInfo.address}`;
        }
    }

    // Load social links from localStorage
    function loadSocialLinks() {
        const socialLinks = JSON.parse(localStorage.getItem('socialLinks') || '{}');
        
        if (socialLinks.facebook) {
            const fbLink = document.getElementById('facebookLink');
            if (fbLink) fbLink.href = socialLinks.facebook;
        }
        
        if (socialLinks.zalo) {
            const zaloLink = document.getElementById('zaloLink');
            if (zaloLink) zaloLink.href = socialLinks.zalo;
        }
        
        if (socialLinks.tiktok) {
            const tiktokLink = document.getElementById('tiktokLink');
            if (tiktokLink) tiktokLink.href = socialLinks.tiktok;
        }
    }
});