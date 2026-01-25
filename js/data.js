// Sample laptop data
const laptopsData = [
    {
        id: 1,
        name: "Dell XPS 13 9315",
        brand: "Dell",
        price: 28990000,
        category: "Ultrabook",
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
    }
];

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}