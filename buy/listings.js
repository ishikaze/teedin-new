const listingsData = [
  {
    type: 'house', price: 3500000, area: 120, img: './assets/img/property-01.jpg', title: 'บ้านเดี่ยว 3 ห้องนอน', location: 'กรุงเทพฯ', bedrooms: 3, bathrooms: 2, parking: 2, year: 2018, description: 'บ้านเดี่ยวสวยพร้อมอยู่ ใกล้รถไฟฟ้าและห้างสรรพสินค้า'
  },
  {
    type: 'apartment', price: 2200000, area: 60, img: './assets/img/property-02.jpg', title: 'อพาร์ทเมนต์ใจกลางเมือง', location: 'เชียงใหม่', bedrooms: 1, bathrooms: 1, parking: 1, year: 2021, description: 'อพาร์ทเมนต์ใหม่ ใกล้มหาวิทยาลัยและร้านอาหาร'
  },
  {
    type: 'villa', price: 7800000, area: 250, img: './assets/img/property-03.jpg', title: 'วิลล่าหรูริมทะเล', location: 'ภูเก็ต', bedrooms: 4, bathrooms: 3, parking: 2, year: 2016, description: 'วิลล่าหรูพร้อมสระว่ายน้ำส่วนตัวและวิวทะเล'
  },
  {
    type: 'land', price: 1500000, area: 400, img: './assets/img/property-04.jpg', title: 'ที่ดินเปล่า', location: 'ขอนแก่น', description: 'ที่ดินเปล่าทำเลดี เหมาะสำหรับสร้างบ้านหรือธุรกิจ'
  },
  {
    type: 'house', price: 4200000, area: 140, img: './assets/img/property-05.jpg', title: 'บ้านใหม่พร้อมอยู่', location: 'นนทบุรี', bedrooms: 3, bathrooms: 2, parking: 2, year: 2022, description: 'บ้านใหม่สไตล์โมเดิร์น ใกล้โรงเรียนและตลาด'
  },
  {
    type: 'apartment', price: 1800000, area: 45, img: './assets/img/property-06.jpg', title: 'อพาร์ทเมนต์วิวสวน', location: 'สมุทรปราการ', bedrooms: 1, bathrooms: 1, parking: 1, year: 2020, description: 'อพาร์ทเมนต์วิวสวนสวย เงียบสงบ'
  },
  {
    type: 'villa', price: 9500000, area: 320, img: './assets/img/property-07.jpg', title: 'วิลล่าหรูสไตล์ยุโรป', location: 'หัวหิน', bedrooms: 5, bathrooms: 4, parking: 3, year: 2015, description: 'วิลล่าหรูสไตล์ยุโรป พร้อมสวนและที่จอดรถกว้างขวาง'
  },
  {
    type: 'land', price: 2000000, area: 500, img: './assets/img/property-08.jpg', title: 'ที่ดินติดถนนใหญ่', location: 'นครราชสีมา', description: 'ที่ดินติดถนนใหญ่ เหมาะสำหรับลงทุน'
  },
  {
    type: 'house', price: 2800000, area: 100, img: './assets/img/property-09.jpg', title: 'บ้านเดี่ยวราคาประหยัด', location: 'ปทุมธานี', bedrooms: 2, bathrooms: 2, parking: 1, year: 2012, description: 'บ้านเดี่ยวราคาประหยัด เหมาะสำหรับครอบครัวเริ่มต้น'
  },
  {
    type: 'apartment', price: 2500000, area: 70, img: './assets/img/img111.jpg', title: 'อพาร์ทเมนต์ใกล้รถไฟฟ้า', location: 'กรุงเทพฯ', bedrooms: 2, bathrooms: 1, parking: 1, year: 2019, description: 'อพาร์ทเมนต์ใกล้รถไฟฟ้า เดินทางสะดวก'
  },
  {
    type: 'villa', price: 12000000, area: 400, img: './assets/img/img112.jpg', title: 'วิลล่าริมทะเลสาบ', location: 'เชียงราย', bedrooms: 6, bathrooms: 5, parking: 4, year: 2017, description: 'วิลล่าหรูริมทะเลสาบ บรรยากาศดีมาก'
  },
  {
    type: 'land', price: 1700000, area: 350, img: './assets/img/img113.jpg', title: 'ที่ดินวิวภูเขา', location: 'แม่ฮ่องสอน', description: 'ที่ดินวิวภูเขา เหมาะสำหรับบ้านพักตากอากาศ'
  },
];

let currentFilteredListings = [...listingsData];

function renderListings(data) {
  const listingsDiv = document.getElementById('listings');
  if (!listingsDiv) return;
  let html = '';
  data.forEach((listing, idx) => {
    html += `<div class="listing ${listing.type} fade-in-listing" data-idx="${idx}" style="cursor:pointer;" data-price="${listing.price}" data-area="${listing.area}">
      <img src=".${listing.img}" alt="${listing.type}">
      <div class="listing-info">
        <h3><i class="fa-solid fa-house"></i> ${listing.title}</h3>
        <div class="listing-price"><i class="fa-solid fa-tag"></i> ${listing.price.toLocaleString()} บาท</div>
        <div class="listing-area"><i class="fa-solid fa-ruler-combined"></i> ${listing.area} ตร.m.</div>
        <div class="listing-location"><i class="fa-solid fa-location-dot"></i> ${listing.location}</div>
      </div>
    </div>`;
  });
  listingsDiv.innerHTML = html;

  // Add click listeners to newly rendered listings
  setTimeout(() => {
    document.querySelectorAll('.listing').forEach(listing => {
      listing.addEventListener('click', function() {
        const idx = parseInt(listing.getAttribute('data-idx'));
        const data = currentFilteredListings[idx]; // Use currentFilteredListings
        localStorage.setItem('selectedListing', JSON.stringify(data));
        window.location.href = './property/index.html';
      });
    });
  }, 100);
}

function applyFiltersAndSort() {
  let filteredAndSorted = [...listingsData];

  // Apply type filter from sorter buttons
  // Only consider buttons that are NOT the advanced sorter button
  const activeTypeButton = document.querySelector('.sorter-button.active:not(#advanced-sorter-btn)');
  
  if (activeTypeButton) { // Ensure a type filter button is active
    const filterData = activeTypeButton.getAttribute('data-filter');
    if (filterData && filterData !== '*') { // Only slice if it's a specific type filter
      const filterValue = filterData.slice(1);
      filteredAndSorted = filteredAndSorted.filter(l => l.type === filterValue);
    }
    // If filterData is '*', no filtering by type is needed (already handled by default)
  } else {
    // If no specific type button is active, assume "All" (no type filtering)
    // This scenario should ideally not happen if "All" is active by default.
  }


  // Apply advanced price range filter
  const minPrice = parseInt(document.getElementById('min-price-slider').value) || 0;
  const maxPrice = parseInt(document.getElementById('max-price-slider').value) || Infinity;
  filteredAndSorted = filteredAndSorted.filter(l => l.price >= minPrice && l.price <= maxPrice);

  // Apply advanced location filter
  const selectedLocation = document.getElementById('location-dropdown').value;
  if (selectedLocation) {
    filteredAndSorted = filteredAndSorted.filter(l => l.location === selectedLocation);
  }

  // Apply advanced sorting
  const activeSortButton = document.querySelector('.adv-sort.active');
  if (activeSortButton) {
    const sortType = activeSortButton.getAttribute('data-sort');
    if (sortType === 'price-asc') {
      filteredAndSorted.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-desc') {
      filteredAndSorted.sort((a, b) => b.price - a.price);
    } else if (sortType === 'location') {
      filteredAndSorted.sort((a, b) => a.location.localeCompare(b.location, 'th'));
    }
  }

  currentFilteredListings = filteredAndSorted; // Update global variable
  renderListings(currentFilteredListings);
}

document.addEventListener('DOMContentLoaded', function() {
  const advBtn = document.getElementById('advanced-sorter-btn');
  const advPopup = document.getElementById('advanced-sorter-popup');
  const closeAdv = document.getElementById('close-adv-sorter');
  const minSlider = document.getElementById('min-price-slider');
  const maxSlider = document.getElementById('max-price-slider');
  const minLabel = document.getElementById('min-price-label');
  const maxLabel = document.getElementById('max-price-label');
  const locationDropdown = document.getElementById('location-dropdown');
  const sorterButtons = document.querySelectorAll('.sorter-button'); // Includes advanced button
  const typeFilterButtons = document.querySelectorAll('.sorter-button:not(#advanced-sorter-btn)'); // Only type buttons
  const advSortButtons = document.querySelectorAll('.adv-sort');
  const clearAdvFiltersBtn = document.getElementById('clear-adv-filters');

  // Initialize sorter buttons: Ensure "All" is active and adv button is not
  if (advBtn) advBtn.classList.remove('active');
  const allButton = document.querySelector('.sorter-button[data-filter="*"]');
  if (allButton) {
    typeFilterButtons.forEach(btn => btn.classList.remove('active')); // Remove active from any type button
    allButton.classList.add('active'); // Set "All" as active
  }

  // Populate location dropdown
  if (locationDropdown) {
    const locations = Array.from(new Set(listingsData.map(l => l.location))).sort((a, b) => a.localeCompare(b, 'th'));
    locations.forEach(loc => {
      const opt = document.createElement('option');
      opt.value = loc;
      opt.textContent = loc;
      locationDropdown.appendChild(opt);
    });
  }

  // Price slider formatting
  function formatPrice(val) {
    return parseInt(val).toLocaleString();
  }

  function syncSliderLabels() {
    if (minSlider && minLabel) minLabel.textContent = formatPrice(minSlider.value);
    if (maxSlider && maxLabel) maxLabel.textContent = formatPrice(maxSlider.value);
  }

  if (minSlider && maxSlider) {
    minSlider.addEventListener('input', function() {
      if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
        maxSlider.value = minSlider.value;
      }
      syncSliderLabels();
      applyFiltersAndSort(); // Update on slider change
    });
    maxSlider.addEventListener('input', function() {
      if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
        minSlider.value = maxSlider.value;
      }
      syncSliderLabels();
      applyFiltersAndSort(); // Update on slider change
    });
    syncSliderLabels();
  }

  // Advanced sorter popup functionality
  if (advBtn && advPopup && closeAdv) {
    advBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      advPopup.style.display = 'flex';
    });
    closeAdv.addEventListener('click', function() {
      advPopup.style.display = 'none';
    });
    window.addEventListener('click', function(e) {
      if (e.target === advPopup) advPopup.style.display = 'none';
    });
  }

  // Event listeners for basic type sorter buttons
  typeFilterButtons.forEach(button => { // Use specific type filter buttons
    button.addEventListener('click', function() {
      typeFilterButtons.forEach(btn => btn.classList.remove('active')); // Remove active from other type buttons
      advBtn.classList.remove('active'); // Ensure advanced button is not active
      this.classList.add('active'); // Activate clicked type button
      applyFiltersAndSort();
    });
  });

  // Event listeners for advanced sorting buttons
  advSortButtons.forEach(button => {
    button.addEventListener('click', function() {
      advSortButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      applyFiltersAndSort(); // Update on sort change
    });
  });

  // Event listener for location dropdown
  if (locationDropdown) {
    locationDropdown.addEventListener('change', function() {
      applyFiltersAndSort(); // Update on location change
    });
  }

  // Clear advanced filters
  if (clearAdvFiltersBtn) {
    clearAdvFiltersBtn.addEventListener('click', function() {
      document.getElementById('min-price-slider').value = 0;
      document.getElementById('max-price-slider').value = 15000000;
      document.getElementById('location-dropdown').value = '';
      syncSliderLabels();
      advSortButtons.forEach(btn => btn.classList.remove('active')); // Clear active sort
      
      // Re-activate the '*' filter button
      const allFilterButton = document.querySelector('.sorter-button[data-filter="*"]');
      if (allFilterButton) {
        typeFilterButtons.forEach(btn => btn.classList.remove('active')); // Clear active from other type buttons
        allFilterButton.classList.add('active');
      }

      applyFiltersAndSort();
    });
  }

  // Initial rendering
  applyFiltersAndSort(); // Call once on load to apply initial filters (e.g., '*' type)
});