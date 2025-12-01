// Embed data directly to avoid CORS issues
const propertiesData = [
    {
        "Đường": "Nguyễn Thị Thập",
        "Phường": "Tân Phú",
        "Quận": "7",
        "Diện Tích": 80,
        "Giá": 8.0,
        "Loại BDS": "Nhà phố",
        "Số tầng": 3,
        "Số phòng ngủ": 4,
        "số WC": 3,
        "Hình ảnh": "img/1-Nhà phố-Nguyễn_Thị_Thập"
    },
    {
        "Đường": "Lâm Văn Bền",
        "Phường": "Tân Hưng",
        "Quận": "7",
        "Diện Tích": 100,
        "Giá": 10.0,
        "Loại BDS": "Nhà phố",
        "Số tầng": 4,
        "Số phòng ngủ": 6,
        "số WC": 3,
        "Hình ảnh": "img/2-Nhà phố-Lâm_Văn_Bền"
    },
    {
        "Đường": "Huỳnh Tấn Phát",
        "Phường": "Phú Thuận",
        "Quận": "7",
        "Diện Tích": 120,
        "Giá": 12.5,
        "Loại BDS": "Biệt thự",
        "Số tầng": 3,
        "Số phòng ngủ": 5,
        "số WC": 4,
        "Hình ảnh": "img/3-Biệt thự-Huỳnh_Tấn_Phát"
    },
    {
        "Đường": "Nguyễn Văn Linh",
        "Phường": "Tân Phong",
        "Quận": "7",
        "Diện Tích": 60,
        "Giá": 5.8,
        "Loại BDS": "Căn hộ",
        "Số tầng": 1,
        "Số phòng ngủ": 2,
        "số WC": 2,
        "Hình ảnh": "img/4-Căn hộ-Nguyễn_Văn_Linh"
    },

    {
        "Đường": "Trần Xuân Soạn",
        "Phường": "Tân Hưng",
        "Quận": "7",
        "Diện Tích": 90,
        "Giá": 9.2,
        "Loại BDS": "Nhà phố",
        "Số tầng": 4,
        "Số phòng ngủ": 4,
        "số WC": 3,
        "Hình ảnh": "img/5-Nhà phố-Trần_Xuân_Soạn"
        
    },
    {
        "Đường": "Bùi Văn Ba",
        "Phường": "Tân Thuận Đông",
        "Quận": "7",
        "Diện Tích": 150,
        "Giá": 18.0,
        "Loại BDS": "Biệt thự",
        "Số tầng": 2,
        "Số phòng ngủ": 6,
        "số WC": 5,
        "Hình ảnh": "img/6-Biệt thự-Bùi_Văn_Ba"
    
    },
    {
        "Đường": "Lý Thường Kiệt",
        "Phường": "Tân Phú",
        "Quận": "7",
        "Diện Tích": 75,
        "Giá": 7.5,
        "Loại BDS": "Căn hộ",
        "Số tầng": 1,
        "Số phòng ngủ": 3,
        "số WC": 2,
        "Hình ảnh": "img/7-Căn hộ-Lý_Thường_Kiệt"
    },
    {
        "Đường": "Đoàn Văn Bơ",
        "Phường": "Tân Quy",
        "Quận": "7",
        "Diện Tích": 110,
        "Giá": 11.8,
        "Loại BDS": "Nhà phố",
        "Số tầng": 3,
        "Số phòng ngủ": 5,
        "số WC": 4,
        "Hình ảnh": "img/8-Nhà phố-Đoàn_Văn_Bơ"
    },
    {
        "Đường": "Nguyễn Hữu Thọ",
        "Phường": "Tân Hưng",
        "Quận": "7",
        "Diện Tích": 45,
        "Giá": 4.2,
        "Loại BDS": "Căn hộ",
        "Số tầng": 1,
        "Số phòng ngủ": 1,
        "số WC": 1,
        "Hình ảnh": "img/9-Căn hộ-Nguyễn_Hữu_Thọ"
    },
    {
        "Đường": "Phạm Hùng",
        "Phường": "Phú Mỹ",
        "Quận": "7",
        "Diện Tích": 95,
        "Giá": 9.8,
        "Loại BDS": "Nhà phố",
        "Số tầng": 4,
        "Số phòng ngủ": 4,
        "số WC": 3,
        "Hình ảnh": "img/10-Nhà phố-Phạm_Hùng"
    },
    {
        "Đường": "Hoàng Quốc Việt",
        "Phường": "Phú Thuận",
        "Quận": "7",
        "Diện Tích": 200,
        "Giá": 25.0,
        "Loại BDS": "Biệt thự",
        "Số tầng": 3,
        "Số phòng ngủ": 7,
        "số WC": 6,
        "Hình ảnh": "img/11-Biệt thự-Hoàng_Quốc_Việt"
    }
];

// Global variables
let filteredProperties = [];

// DOM elements
const propertiesGrid = document.getElementById('properties-grid');
const modal = document.getElementById('property-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Filter elements
const wardFilter = document.getElementById('ward-filter');
const areaFilter = document.getElementById('area-filter');
const priceFilter = document.getElementById('price-filter');
const floorFilter = document.getElementById('floor-filter');
const bedroomFilter = document.getElementById('bedroom-filter');
const resetButton = document.getElementById('reset-filters');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    console.log('Properties data:', propertiesData);
    initializeApp();
});

// Initialize application
function initializeApp() {
    try {
        filteredProperties = [...propertiesData];
        
        populateFilterOptions();
        displayProperties(filteredProperties);
        setupEventListeners();
        
        // Initialize mobile enhancements
        if ('ontouchstart' in window) {
            initializeMobileEnhancements();
        }
        
        console.log('App initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        showError('Có lỗi xảy ra khi khởi tạo ứng dụng. Vui lòng tải lại trang.');
    }
}

// Populate filter dropdown options
function populateFilterOptions() {
    console.log('Populating filter options...');
    
    // Get unique wards
    const wards = [...new Set(propertiesData.map(property => property['Phường']))].sort();
    console.log('Wards found:', wards);
    populateSelectOptions(wardFilter, wards);
}

// Helper function to populate select options
function populateSelectOptions(selectElement, options) {
    if (!selectElement) {
        console.error('Select element not found');
        return;
    }
    
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

// Display properties in the grid
function displayProperties(properties) {
    console.log('Displaying properties:', properties.length);
    
    if (!propertiesGrid) {
        console.error('Properties grid element not found');
        return;
    }
    
    if (properties.length === 0) {
        propertiesGrid.innerHTML = '<div class="no-results" style="text-align: center; padding: 2rem; color: #7f8c8d; font-size: 1.2rem;">Không tìm thấy bất động sản phù hợp</div>';
        return;
    }

    const propertiesHTML = properties.map((property, index) => createPropertyCard(property, index)).join('');
    propertiesGrid.innerHTML = propertiesHTML;

    // Add click listeners to property cards
    document.querySelectorAll('.property-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            console.log('Property clicked:', properties[index]);
            showPropertyDetail(properties[index]);
        });
    });
}

// Create HTML for a property card
function createPropertyCard(property, index) {
    // Get main image from property folder
    const imageFolder = property['Hình ảnh'];
    const mainImage = `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3`; // Default fallback
    
    // Try to get first available image
    getFirstAvailableImage(imageFolder).then(imagePath => {
        const imgElement = document.querySelector(`.property-card[data-index="${index}"] .property-image img`);
        if (imgElement && imagePath !== mainImage) {
            imgElement.src = imagePath;
        }
    }).catch(error => {
        console.log('Using fallback image for property', index);
    });
    
    return `
        <div class="property-card" data-index="${index}">
            <div class="property-image">
                <img src="${mainImage}" alt="Property Image" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
                <div class="property-type">${property['Loại BDS']}</div>
            </div>
            <div class="property-details">
                <div class="property-title">${property['Loại BDS']} - ${property['Đường']}</div>
                <div class="property-address">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property['Đường']}, ${property['Phường']}, Quận ${property['Quận']}
                </div>
                <div class="property-price">${formatPrice(property['Giá'])} tỷ VNĐ</div>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <span>${property['Diện Tích']}m²</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-building"></i>
                        <span>${property['Số tầng']} tầng</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${property['Số phòng ngủ']} phòng ngủ</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${property['số WC']} WC</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Show property detail in modal
function showPropertyDetail(property) {
    console.log('Showing property detail for:', property);
    
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    // Show modal immediately with loading state
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${property['Loại BDS']} tại ${property['Đường']}</h2>
            <div class="property-address">
                <i class="fas fa-map-marker-alt"></i>
                ${property['Đường']}, ${property['Phường']}, Quận ${property['Quận']}
            </div>
        </div>
        
        <div class="modal-images">
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: #3498db;"></i>
                <p>Đang tải hình ảnh...</p>
            </div>
        </div>
        
        <div class="modal-details">
            <div class="modal-price">${formatPrice(property['Giá'])} tỷ VNĐ</div>
            
            <div class="modal-features">
                <div class="modal-feature">
                    <i class="fas fa-expand-arrows-alt"></i>
                    <div>
                        <strong>Diện tích:</strong><br>
                        ${property['Diện Tích']}m²
                    </div>
                </div>
                <div class="modal-feature">
                    <i class="fas fa-building"></i>
                    <div>
                        <strong>Số tầng:</strong><br>
                        ${property['Số tầng']} tầng
                    </div>
                </div>
                <div class="modal-feature">
                    <i class="fas fa-bed"></i>
                    <div>
                        <strong>Phòng ngủ:</strong><br>
                        ${property['Số phòng ngủ']} phòng
                    </div>
                </div>
                <div class="modal-feature">
                    <i class="fas fa-bath"></i>
                    <div>
                        <strong>Phòng tắm:</strong><br>
                        ${property['số WC']} phòng
                    </div>
                </div>
                <div class="modal-feature">
                    <i class="fas fa-home"></i>
                    <div>
                        <strong>Loại BDS:</strong><br>
                        ${property['Loại BDS']}
                    </div>
                </div>
                <div class="modal-feature">
                    <i class="fas fa-dollar-sign"></i>
                    <div>
                        <strong>Giá bán:</strong><br>
                        ${formatPrice(property['Giá'])} tỷ VNĐ
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px;">
                <h3 style="margin-bottom: 1rem; color: #2c3e50;">Liên hệ để xem nhà</h3>
                <p style="margin-bottom: 0.5rem;"><i class="fas fa-phone" style="color: #3498db; margin-right: 0.5rem;"></i> <strong>Hotline:</strong> 0358965708</p>
                <p style="margin-bottom: 1rem;"><i class="fas fa-envelope" style="color: #3498db; margin-right: 0.5rem;"></i> <strong>Email:</strong> congnt4u@gmail.com</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Get images from property folder - automatically detect all images
    const imageFolder = property['Hình ảnh'];
    
    // Load images asynchronously - use fallback immediately then update with detected images
    const modalImagesSection = document.querySelector('.modal-images');
    if (modalImagesSection) {
        // Show fallback images immediately
        modalImagesSection.innerHTML = `
            <div class="modal-image">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Property Image 1" 
                     onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            </div>
            <div class="modal-image">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Property Image 2" 
                     onerror="this.style.display='none'">
            </div>
            <div class="modal-image">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Property Image 3" 
                     onerror="this.style.display='none'">
            </div>
            <div class="modal-image">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Property Image 4" 
                     onerror="this.style.display='none'">
            </div>
            <div class="modal-image">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Property Image 5" 
                     onerror="this.style.display='none'">
            </div>
            <div class="modal-image">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Property Image 6" 
                     onerror="this.style.display='none'">
            </div>
            <div class="modal-image">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Property Image 7" 
                     onerror="this.style.display='none'">
            </div>
            <div class="modal-image">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Property Image 8" 
                     onerror="this.style.display='none'">
            </div>
            <div class="modal-image">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Property Image 9" 
                     onerror="this.style.display='none'">
            </div>
            <div class="modal-image">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" alt="Property Image 10" 
                     onerror="this.style.display='none'">
            </div>
        `;
    }
}

// Setup event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Filter change listeners
    if (wardFilter) wardFilter.addEventListener('change', applyFilters);
    if (areaFilter) areaFilter.addEventListener('change', applyFilters);
    if (priceFilter) priceFilter.addEventListener('change', applyFilters);
    if (floorFilter) floorFilter.addEventListener('change', applyFilters);
    if (bedroomFilter) bedroomFilter.addEventListener('change', applyFilters);

    // Reset filters
    if (resetButton) resetButton.addEventListener('click', resetFilters);

    // Modal close
    if (closeModal) closeModal.addEventListener('click', closePropertyModal);
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closePropertyModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePropertyModal();
        }
    });
}

// Apply filters
function applyFilters() {
    console.log('Applying filters...');
    
    filteredProperties = propertiesData.filter(property => {
        const ward = wardFilter ? wardFilter.value : '';
        const area = areaFilter ? areaFilter.value : '';
        const price = priceFilter ? priceFilter.value : '';
        const floor = floorFilter ? floorFilter.value : '';
        const bedroom = bedroomFilter ? bedroomFilter.value : '';

        // Ward filter
        if (ward && property['Phường'] !== ward) return false;

        // Area filter
        if (area && !checkAreaRange(property['Diện Tích'], area)) return false;

        // Price filter
        if (price && !checkPriceRange(property['Giá'], price)) return false;

        // Floor filter
        if (floor && property['Số tầng'].toString() !== floor) return false;

        // Bedroom filter
        if (bedroom && !checkBedroomRange(property['Số phòng ngủ'], bedroom)) return false;

        return true;
    });

    console.log('Filtered properties:', filteredProperties.length);
    displayProperties(filteredProperties);
}

// Check if area is in range
function checkAreaRange(area, range) {
    switch (range) {
        case '0-50':
            return area <= 50;
        case '50-100':
            return area > 50 && area <= 100;
        case '100-150':
            return area > 100 && area <= 150;
        case '150+':
            return area > 150;
        default:
            return true;
    }
}

// Check if price is in range
function checkPriceRange(price, range) {
    switch (range) {
        case '0-5':
            return price <= 5;
        case '5-10':
            return price > 5 && price <= 10;
        case '10-15':
            return price > 10 && price <= 15;
        case '15-20':
            return price > 15 && price <= 20;
        case '20+':
            return price > 20;
        default:
            return true;
    }
}

// Check if bedroom count is in range
function checkBedroomRange(bedrooms, range) {
    switch (range) {
        case '6+':
            return bedrooms >= 6;
        default:
            return bedrooms.toString() === range;
    }
}

// Reset all filters
function resetFilters() {
    console.log('Resetting filters...');
    
    if (wardFilter) wardFilter.value = '';
    if (areaFilter) areaFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    if (floorFilter) floorFilter.value = '';
    if (bedroomFilter) bedroomFilter.value = '';
    
    filteredProperties = [...propertiesData];
    displayProperties(filteredProperties);
}

// Close property modal
function closePropertyModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Format price for display
function formatPrice(price) {
    return parseFloat(price).toLocaleString('vi-VN', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
}


// Function to get first available image for property card
async function getFirstAvailableImage(folderPath) {
    const commonFirstImages = [
        'hinh_1.jpg'
    ];
    
    for (const imageName of commonFirstImages) {
        const imagePath = `${folderPath}/${imageName}`;
        try {
            const response = await fetch(imagePath, { method: 'HEAD' });
            if (response.ok) {
                // return imagePath;
                return "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" ;
            }
        } catch (error) {
            // Continue to next image
        }
    }
    
    // Fallback
    // return `${folderPath}/${commonFirstImages[0]}`;
    return "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3";
}

// Show error message
function showError(message) {
    if (propertiesGrid) {
        propertiesGrid.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #e74c3c;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <h3>Có lỗi xảy ra</h3>
                <p>${message}</p>
            </div>
        `;
    }
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

// Add scroll-to-top functionality
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// Mobile-friendly enhancements
function initializeMobileEnhancements() {
    // Improve touch scrolling
    document.addEventListener('touchstart', function() {}, { passive: true });
    document.addEventListener('touchmove', function() {}, { passive: true });
    
    // Add visual feedback for touch
    function addTouchFeedback() {
        const cards = document.querySelectorAll('.property-card');
        cards.forEach(card => {
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });
            
            card.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }, { passive: true });
        });
    }
    
    // Optimize modal for mobile
    const modal = document.getElementById('property-modal');
    if (modal) {
        modal.addEventListener('touchmove', function(e) {
            // Allow normal scrolling in modal
        }, { passive: true });
    }
    
    // Call touch feedback when properties are displayed
    addTouchFeedback();
    
    // Add touch feedback when new properties are loaded
    const originalDisplayProperties = displayProperties;
    displayProperties = function(properties) {
        originalDisplayProperties.call(this, properties);
        setTimeout(addTouchFeedback, 100); // Add delay to ensure DOM is updated
    };
}
