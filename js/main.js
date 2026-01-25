// Main JavaScript for homepage functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample laptop data (moved to external file)
    const laptopsData = [
        {
            id: 1,
            name: "Dell XPS 13 9315",
            brand: "Dell",
            price: 28990000,
            category: "Ultrabook",
            quantity: 15,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&w=500&q=80",
            specs: {
                cpu: "Intel Core i5-1230U",
                ram: "8GB LPDDR5",
                storage: "256GB SSD",
                gpu: "Intel Iris Xe",
                screen: "13.4\" FHD+ (1920x1200)",
                weight: "1.17 kg"
            },
            description: "Laptop siêu mỏng nhẹ với thiết kế premium, hiệu năng vượt trội cho công việc văn phòng và học tập."
        },
        {
            id: 2,
            name: "HP Pavilion Gaming 15-dk2055wm",
            brand: "HP",
            price: 22500000,
            category: "Gaming",
            quantity: 8,
            image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&w=500&q=80",
            specs: {
                cpu: "Intel Core i5-11300H",
                ram: "8GB DDR4",
                storage: "512GB SSD",
                gpu: "NVIDIA GTX 1650",
                screen: "15.6\" FHD (1920x1080) 144Hz",
                weight: "2.23 kg"
            },
            description: "Laptop gaming tầm trung với màn hình 144Hz, card đồ họa rời mang lại trải nghiệm gaming mượt mà."
        },
        {
            id: 3,
            name: "Lenovo ThinkPad E14 Gen 4",
            brand: "Lenovo",
            price: 18990000,
            category: "Văn phòng",
            quantity: 12,
            image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&w=500&q=80",
            specs: {
                cpu: "AMD Ryzen 5 5625U",
                ram: "8GB DDR4",
                storage: "256GB SSD",
                gpu: "AMD Radeon Graphics",
                screen: "14\" FHD (1920x1080) IPS",
                weight: "1.64 kg"
            },
            description: "Laptop doanh nhân với độ bền cao, bàn phím thoải mái và thời lượng pin dài."
        },
        {
            id: 4,
            name: "Asus ROG Strix G15 G513",
            brand: "Asus",
            price: 35990000,
            category: "Gaming",
            quantity: 6,
            image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&w=500&q=80",
            specs: {
                cpu: "AMD Ryzen 7 5800H",
                ram: "16GB DDR4",
                storage: "512GB SSD",
                gpu: "NVIDIA RTX 3060",
                screen: "15.6\" FHD (1920x1080) 144Hz",
                weight: "2.30 kg"
            },
            description: "Laptop gaming cao cấp với RTX 3060, hiệu năng mạnh mẽ cho các game AAA và công việc sáng tạo."
        },
        {
            id: 5,
            name: "MSI Creator 15 A10SFS",
            brand: "MSI",
            price: 42000000,
            category: "Đồ họa",
            quantity: 3,
            image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&w=500&q=80",
            specs: {
                cpu: "Intel Core i7-10875H",
                ram: "32GB DDR4",
                storage: "1TB SSD",
                gpu: "NVIDIA RTX 2070 Super",
                screen: "15.6\" 4K UHD (3840x2160)",
                weight: "2.10 kg"
            },
            description: "Laptop workstation dành cho creator với màn hình 4K, cấu hình mạnh mẽ cho render video và thiết kế đồ họa."
        },
        {
            id: 6,
            name: "Acer Aspire 5 A515-57",
            brand: "Acer",
            price: 14990000,
            category: "Văn phòng",
            quantity: 20,
            image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-4.0.3&w=500&q=80",
            specs: {
                cpu: "Intel Core i3-1215U",
                ram: "4GB DDR4",
                storage: "256GB SSD",
                gpu: "Intel UHD Graphics",
                screen: "15.6\" FHD (1920x1080)",
                weight: "1.70 kg"
            },
            description: "Laptop giá rẻ phù hợp cho học sinh, sinh viên với hiệu năng đủ dùng cho các tác vụ cơ bản."
        },
        {
            id: 7,
            name: "MSI GF63 Thin 11UC",
            brand: "MSI",
            price: 19990000,
            category: "Gaming",
            quantity: 10,
            image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&w=500&q=80",
            specs: {
                cpu: "Intel Core i5-11400H",
                ram: "8GB DDR4",
                storage: "256GB SSD",
                gpu: "NVIDIA RTX 3050",
                screen: "15.6\" FHD (1920x1080) 144Hz",
                weight: "1.86 kg"
            },
            description: "Gaming laptop mỏng nhẹ với giá tốt, phù hợp cho game thủ mới bắt đầu và sinh viên."
        },
        {
            id: 8,
            name: "Asus ZenBook 14 UX3402",
            brand: "Asus",
            price: 24990000,
            category: "Ultrabook",
            quantity: 7,
            image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&w=500&q=80",
            specs: {
                cpu: "Intel Core i5-12500H",
                ram: "8GB LPDDR5",
                storage: "512GB SSD",
                gpu: "Intel Iris Xe",
                screen: "14\" 2.8K (2880x1800) OLED",
                weight: "1.39 kg"
            },
            description: "Ultrabook với màn hình OLED tuyệt đẹp, thiết kế cao cấp và hiệu năng vượt trội cho công việc sáng tạo."
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