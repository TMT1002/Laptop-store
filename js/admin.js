// Admin panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sample laptop data - in a real app, this would come from a backend
    let laptopsData = [
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
        }
    ];

    // DOM elements
    const loginContainer = document.getElementById('loginContainer');
    const adminDashboard = document.getElementById('adminDashboard');
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const productsTableBody = document.getElementById('productsTableBody');
    const addProductBtn = document.getElementById('addProductBtn');
    const productFormModal = document.getElementById('productFormModal');
    const productForm = document.getElementById('productForm');
    const modalTitle = document.getElementById('modalTitle');
    const cancelBtn = document.getElementById('cancelBtn');
    const closeModalBtns = document.querySelectorAll('.close-modal');

    // Current editing product ID
    let currentEditingId = null;

    // Initialize
    function init() {
        checkAuth();
        setupEventListeners();
    }

    // Setup event listeners
    function setupEventListeners() {
        // Login form
        loginForm?.addEventListener('submit', handleLogin);
        
        // Logout
        logoutBtn?.addEventListener('click', handleLogout);
        
        // Add product button
        addProductBtn?.addEventListener('click', showAddProductForm);
        
        // Product form
        productForm?.addEventListener('submit', handleProductSubmit);
        
        // Cancel button
        cancelBtn?.addEventListener('click', closeProductForm);
        
        // Settings forms
        document.getElementById('contactForm')?.addEventListener('submit', handleContactSubmit);
        document.getElementById('socialForm')?.addEventListener('submit', handleSocialSubmit);
        
        // Close modal buttons
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const modal = this.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            });
        });

        // Click outside modal to close
        productFormModal?.addEventListener('click', function(e) {
            if (e.target === productFormModal) {
                closeProductForm();
            }
        });
    }

    // Check authentication
    function checkAuth() {
        const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
        if (isLoggedIn) {
            showDashboard();
        } else {
            showLogin();
        }
    }

    // Handle login
    function handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple demo authentication - in real app, this would be secure
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('adminLoggedIn', 'true');
            showDashboard();
            showAlert('Đăng nhập thành công!', 'success');
        } else {
            showAlert('Tên đăng nhập hoặc mật khẩu không đúng!', 'error');
        }
    }

    // Handle logout
    function handleLogout() {
        localStorage.removeItem('adminLoggedIn');
        showAlert('Đăng xuất thành công!', 'success');
        
        // Redirect to home page after a short delay
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }

    // Show login screen
    function showLogin() {
        if (loginContainer && adminDashboard) {
            loginContainer.style.display = 'flex';
            adminDashboard.style.display = 'none';
        }
    }

    function showDashboard() {
        if (loginContainer && adminDashboard) {
            loginContainer.style.display = 'none';
            adminDashboard.style.display = 'block';
            loadProducts();
            loadSettings();
        }
    }

    // Load and render products in admin table
    function loadProducts() {
        if (!productsTableBody) return;

        productsTableBody.innerHTML = laptopsData.map(laptop => `
            <tr>
                <td>${laptop.id}</td>
                <td>
                    ${laptop.image 
                        ? `<img src="${laptop.image}" alt="${laptop.name}" class="product-image-small" onerror="this.parentElement.innerHTML='<div class=\\'product-image-placeholder\\'><i class=\\'fas fa-laptop\\'></i></div>'">`
                        : `<div class="product-image-placeholder"><i class="fas fa-laptop"></i></div>`
                    }
                </td>
                <td>${laptop.name}</td>
                <td>${laptop.brand}</td>
                <td>${formatPrice(laptop.price)}</td>
                <td>
                    <span class="quantity-badge ${laptop.quantity < 5 ? 'low-stock' : ''}">
                        ${laptop.quantity || 0}
                    </span>
                </td>
                <td>${laptop.category}</td>
                <td class="product-actions">
                    <button class="btn-small btn-edit" onclick="editProduct(${laptop.id})" title="Chỉnh sửa">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-small btn-delete" onclick="deleteProduct(${laptop.id})" title="Xóa">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    // Format price
    function formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    }

    // Show add product form
    function showAddProductForm() {
        currentEditingId = null;
        modalTitle.textContent = 'Thêm sản phẩm mới';
        resetProductForm();
        productFormModal.style.display = 'block';
    }

    // Edit product
    window.editProduct = function(id) {
        const laptop = laptopsData.find(l => l.id === id);
        if (!laptop) return;

        currentEditingId = id;
        modalTitle.textContent = 'Chỉnh sửa sản phẩm';
        
        // Fill form with existing data
        document.getElementById('productId').value = laptop.id;
        document.getElementById('productName').value = laptop.name;
        document.getElementById('productBrand').value = laptop.brand;
        document.getElementById('productPrice').value = laptop.price;
        document.getElementById('productQuantity').value = laptop.quantity || 0;
        document.getElementById('productCategory').value = laptop.category;
        document.getElementById('productImage').value = laptop.image || '';
        document.getElementById('productCpu').value = laptop.specs.cpu || '';
        document.getElementById('productRam').value = laptop.specs.ram || '';
        document.getElementById('productStorage').value = laptop.specs.storage || '';
        document.getElementById('productGpu').value = laptop.specs.gpu || '';
        document.getElementById('productScreen').value = laptop.specs.screen || '';
        document.getElementById('productWeight').value = laptop.specs.weight || '';
        document.getElementById('productDescription').value = laptop.description || '';

        productFormModal.style.display = 'block';
    };

    // Delete product
    window.deleteProduct = function(id) {
        if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
            laptopsData = laptopsData.filter(laptop => laptop.id !== id);
            loadProducts();
            showAlert('Đã xóa sản phẩm thành công!', 'success');
        }
    };

    // Handle product form submission
    function handleProductSubmit(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('productName').value,
            brand: document.getElementById('productBrand').value,
            price: parseInt(document.getElementById('productPrice').value),
            quantity: parseInt(document.getElementById('productQuantity').value) || 0,
            category: document.getElementById('productCategory').value,
            image: document.getElementById('productImage').value,
            specs: {
                cpu: document.getElementById('productCpu').value,
                ram: document.getElementById('productRam').value,
                storage: document.getElementById('productStorage').value,
                gpu: document.getElementById('productGpu').value,
                screen: document.getElementById('productScreen').value,
                weight: document.getElementById('productWeight').value
            },
            description: document.getElementById('productDescription').value
        };

        if (currentEditingId) {
            // Update existing product
            const index = laptopsData.findIndex(laptop => laptop.id === currentEditingId);
            if (index !== -1) {
                laptopsData[index] = {
                    id: currentEditingId,
                    ...formData
                };
                showAlert('Cập nhật sản phẩm thành công!', 'success');
            }
        } else {
            // Add new product
            const newId = Math.max(...laptopsData.map(l => l.id)) + 1;
            laptopsData.push({
                id: newId,
                ...formData
            });
            showAlert('Thêm sản phẩm mới thành công!', 'success');
        }

        closeProductForm();
        loadProducts();
    }

    // Reset product form
    function resetProductForm() {
        if (productForm) {
            productForm.reset();
            document.getElementById('productId').value = '';
        }
    }

    // Close product form
    function closeProductForm() {
        productFormModal.style.display = 'none';
        resetProductForm();
        currentEditingId = null;
    }

    // Show alert message
    function showAlert(message, type = 'info') {
        // Remove existing alerts
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());

        // Create new alert
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" style="float: right; background: none; border: none; font-size: 1.2em; cursor: pointer;">&times;</button>
        `;

        // Insert at the top of the main content
        const adminMain = document.querySelector('.admin-main .container');
        if (adminMain) {
            adminMain.insertBefore(alert, adminMain.firstChild);
        }

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (alert.parentElement) {
                alert.remove();
            }
        }, 5000);
    }

    // Initialize the admin panel
    init();

    // Navigation functions
    window.showSection = function(sectionName) {
        // Hide all sections
        document.getElementById('productsSection').style.display = 'none';
        document.getElementById('settingsSection').style.display = 'none';
        
        // Show selected section
        if (sectionName === 'products') {
            document.getElementById('productsSection').style.display = 'block';
            loadProducts();
        } else if (sectionName === 'settings') {
            document.getElementById('settingsSection').style.display = 'block';
            loadSettings();
        }
        
        // Update menu active state
        document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    };

    // Load settings from localStorage
    function loadSettings() {
        const contactInfo = JSON.parse(localStorage.getItem('contactInfo') || '{}');
        const socialLinks = JSON.parse(localStorage.getItem('socialLinks') || '{}');
        
        // Load contact info
        if (contactInfo.phone) document.getElementById('contactPhone').value = contactInfo.phone;
        if (contactInfo.email) document.getElementById('contactEmail').value = contactInfo.email;
        if (contactInfo.address) document.getElementById('contactAddress').value = contactInfo.address;
        
        // Load social links
        if (socialLinks.facebook) document.getElementById('facebookLink').value = socialLinks.facebook;
        if (socialLinks.zalo) document.getElementById('zaloLink').value = socialLinks.zalo;
        if (socialLinks.tiktok) document.getElementById('tiktokLink').value = socialLinks.tiktok;
    }

    // Handle contact form submit
    function handleContactSubmit(e) {
        e.preventDefault();
        
        const contactInfo = {
            phone: document.getElementById('contactPhone').value,
            email: document.getElementById('contactEmail').value,
            address: document.getElementById('contactAddress').value
        };
        
        localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
        showAlert('Cập nhật thông tin liên hệ thành công!', 'success');
    }

    // Handle social form submit
    function handleSocialSubmit(e) {
        e.preventDefault();
        
        const socialLinks = {
            facebook: document.getElementById('facebookLink').value,
            zalo: document.getElementById('zaloLink').value,
            tiktok: document.getElementById('tiktokLink').value
        };
        
        localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
        showAlert('Cập nhật liên kết mạng xã hội thành công!', 'success');
    }
});