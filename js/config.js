// Configuration file - DO NOT MODIFY THESE VALUES FROM WEB INTERFACE
const CONFIG = {
    // Admin credentials - CANNOT be changed from web
    ADMIN: {
        USERNAME: 'admin',
        PASSWORD: 'thuyettm'
    },

    // Default contact information - Can be overridden from admin panel
    CONTACT: {
        PHONE: '0123 456 789',
        EMAIL: 'info@laptopstore.com', 
        ADDRESS: '123 Đường ABC, Quận 1, TP.HCM'
    },

    // Default social media links - Can be overridden from admin panel
    SOCIAL: {
        FACEBOOK: 'https://facebook.com/laptopstore',
        ZALO: 'https://zalo.me/laptopstore',
        TIKTOK: 'https://tiktok.com/@laptopstore'
    },

    // Website settings - CANNOT be changed from web
    SITE: {
        NAME: 'Laptop Store',
        DESCRIPTION: 'Website thông tin sản phẩm laptop chuyên nghiệp',
        VERSION: '1.0.0'
    },

    // Business rules - CANNOT be changed from web
    BUSINESS: {
        LOW_STOCK_THRESHOLD: 5,
        MAX_PRODUCTS_PER_PAGE: 50,
        SESSION_TIMEOUT: 24 * 60 * 60 * 1000 // 24 hours in milliseconds
    }
};

// Make config read-only
Object.freeze(CONFIG.ADMIN);
Object.freeze(CONFIG.SITE);
Object.freeze(CONFIG.BUSINESS);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}