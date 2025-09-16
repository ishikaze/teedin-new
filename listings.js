
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

function renderListings() {
  const listingsDiv = document.getElementById('listings');
  if (!listingsDiv) return;
  let html = '';
  listingsData.forEach((listing, idx) => {
    html += `<div class="listing ${listing.type} fade-in-listing" data-idx="${idx}" style="cursor:pointer;" data-price="${listing.price}" data-area="${listing.area}">
      <img src="${listing.img}" alt="${listing.type}">
      <div class="listing-info">
        <h3></i> ${listing.title}</h3>
        <div class="listing-price"><i class="fa-solid fa-tag"></i> ${listing.price.toLocaleString()} บาท</div>
        <div class="listing-area"><i class="fa-solid fa-ruler-combined"></i> ${listing.area} ตร.ม.</div>
        <div class="listing-location"><i class="fa-solid fa-location-dot"></i> ${listing.location}</div>
      </div>
    </div>`;
  });
  listingsDiv.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
  
  var advBtn = document.getElementById('advanced-sorter-btn');
  if (advBtn) advBtn.classList.remove('active');

  var applyAdvFiltersBtn = document.getElementById('apply-adv-filters');
  var clearAdvFiltersBtn = document.getElementById('clear-adv-filters');
  if (applyAdvFiltersBtn) {
    applyAdvFiltersBtn.addEventListener('click', function() {
      var min = parseInt(document.getElementById('min-price-slider').value) || 0;
      var max = parseInt(document.getElementById('max-price-slider').value) || Infinity;
      var selectedLoc = document.getElementById('location-dropdown').value;
      let filtered = listingsData.filter(l => l.price >= min && l.price <= max);
      if (selectedLoc) {
        filtered = filtered.filter(l => l.location === selectedLoc);
      }
      updateListings(filtered);
      advPopup.style.display = 'none';
    });
  }
  if (clearAdvFiltersBtn) {
    clearAdvFiltersBtn.addEventListener('click', function() {
      document.getElementById('min-price-slider').value = 0;
      document.getElementById('max-price-slider').value = 15000000;
      document.getElementById('location-dropdown').value = '';
      syncSliderLabels();
      updateListings(listingsData);
      advPopup.style.display = 'none';
    });
  }
  var locationDropdown = document.getElementById('location-dropdown');
  if (locationDropdown) {
    var locations = Array.from(new Set(listingsData.map(l => l.location))).sort((a, b) => a.localeCompare(b, 'th'));
    locations.forEach(loc => {
      var opt = document.createElement('option');
      opt.value = loc;
      opt.textContent = loc;
      locationDropdown.appendChild(opt);
    });
  }

  var applyLocationBtn = document.getElementById('apply-location-filter');
  if (applyLocationBtn && locationDropdown) {
    applyLocationBtn.addEventListener('click', function() {
      var selectedLoc = locationDropdown.value;
      let filtered = selectedLoc ? listingsData.filter(l => l.location === selectedLoc) : listingsData;
      updateListings(filtered);
      advPopup.style.display = 'none';
    });
  }
  var minSlider = document.getElementById('min-price-slider');
  var maxSlider = document.getElementById('max-price-slider');
  var minLabel = document.getElementById('min-price-label');
  var maxLabel = document.getElementById('max-price-label');
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
    });
    maxSlider.addEventListener('input', function() {
      if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
        minSlider.value = maxSlider.value;
      }
      syncSliderLabels();
    });
    syncSliderLabels();
  }
  var advBtn = document.getElementById('advanced-sorter-btn');
  var advPopup = document.getElementById('advanced-sorter-popup');
  var closeAdv = document.getElementById('close-adv-sorter');
  if (advBtn && advPopup && closeAdv) {
    advBtn.addEventListener('click', function(e) {
      advPopup.style.display = 'flex';
    });
    closeAdv.addEventListener('click', function() {
      advPopup.style.display = 'none';
    });
    window.addEventListener('click', function(e) {
      if (e.target === advPopup) advPopup.style.display = 'none';
    });
  }

  function updateListings(sortedData) {
    const listingsDiv = document.getElementById('listings');
    let html = '';
    sortedData.forEach((listing, idx) => {
      html += `<div class="listing ${listing.type} fade-in-listing" data-idx="${idx}" style="cursor:pointer;" data-price="${listing.price}" data-area="${listing.area}">
        <img src="${listing.img}" alt="${listing.type}">
        <div class="listing-info">
          <h3></i> ${listing.title}</h3>
          <div class="listing-price"><i class="fa-solid fa-tag"></i> ${listing.price.toLocaleString()} บาท</div>
          <div class="listing-area"><i class="fa-solid fa-ruler-combined"></i> ${listing.area} ตร.ม.</div>
          <div class="listing-location"><i class="fa-solid fa-location-dot"></i> ${listing.location}</div>
        </div>
      </div>`;
    });
    listingsDiv.innerHTML = html;
    setTimeout(function() {
      var listings = document.querySelectorAll('.listing');
      listings.forEach(function(listing) {
        listing.addEventListener('click', function() {
          var idx = parseInt(listing.getAttribute('data-idx'));
          var data = sortedData[idx];
          localStorage.setItem('selectedListing', JSON.stringify(data));
          window.location.href = 'property/index.html';
        });
      });
      var sorterButtons = document.querySelectorAll('.sorter-button');
      sorterButtons.forEach(function(btn) {
        if (btn.classList.contains('advanced-sorter-btn')) {
          btn.classList.remove('active'); 
          btn.onclick = function(e) {
            e.stopPropagation();
            btn.classList.remove('active'); 
            var advPopup = document.getElementById('advanced-sorter-popup');
            if (advPopup) advPopup.style.display = 'flex';
          };
        } else {
          btn.onclick = function() {
            var filterValue = btn.getAttribute('data-filter');
            sorterButtons.forEach(b => {
              if (!b.classList.contains('advanced-sorter-btn')) b.classList.remove('active');
            });
            btn.classList.add('active');
            var advBtn = document.getElementById('advanced-sorter-btn');
            if (advBtn) advBtn.classList.remove('active');
            listings.forEach(function(listing) {
              if (filterValue === '*') {
                listing.style.display = '';
              } else {
                listing.style.display = listing.classList.contains(filterValue.slice(1)) ? '' : 'none';
              }
            });
          };
        }
      });
      
      var advBtn2 = document.getElementById('advanced-sorter-btn');
      if (advBtn2) advBtn2.classList.remove('active');
    }, 100);
  }


  document.querySelectorAll('.adv-sort').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var sortType = btn.getAttribute('data-sort');
      let sorted = [...listingsData];
      if (sortType === 'price-asc') {
        sorted.sort((a, b) => a.price - b.price);
      } else if (sortType === 'price-desc') {
        sorted.sort((a, b) => b.price - a.price);
      } else if (sortType === 'location') {
        sorted.sort((a, b) => a.location.localeCompare(b.location, 'th'));
      }
      updateListings(sorted);
      advPopup.style.display = 'none';
    });
  });

  var applyPriceRangeBtn = document.getElementById('apply-price-range');
  if (applyPriceRangeBtn) {
    applyPriceRangeBtn.addEventListener('click', function() {
      var min = parseInt(minSlider.value) || 0;
      var max = parseInt(maxSlider.value) || Infinity;
      let filtered = listingsData.filter(l => l.price >= min && l.price <= max);
      updateListings(filtered);
      advPopup.style.display = 'none';
    });
  }
  setTimeout(function() {
    var listings = document.querySelectorAll('.listing');
    listings.forEach(function(listing) {
      listing.addEventListener('click', function() {
        var idx = parseInt(listing.getAttribute('data-idx'));
        var data = listingsData[idx];
        localStorage.setItem('selectedListing', JSON.stringify(data));
        window.location.href = './property';
      });
    });
  }, 100);
  renderListings();
  var sorterButtons = document.querySelectorAll('.sorter-button');
  var listings = document.querySelectorAll('.listing');
  sorterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var filterValue = btn.getAttribute('data-filter');
      let visibleIdx = 0;
      listings.forEach(function(listing) {
        listing.classList.remove('fade-in-listing');
        listing.style.transitionDelay = '';
        if (filterValue === '*') {
          listing.style.display = '';
          let delay = visibleIdx * 80;
          requestAnimationFrame(function() {
            listing.style.transitionDelay = delay + 'ms';
            listing.classList.add('fade-in-listing');
          });
          visibleIdx++;
        } else if (listing.classList.contains(filterValue.slice(1))) {
          listing.style.display = '';
          let delay = visibleIdx * 80;
          requestAnimationFrame(function() {
            listing.style.transitionDelay = delay + 'ms';
            listing.classList.add('fade-in-listing');
          });
          visibleIdx++;
        } else {
          listing.style.display = 'none';
          listing.classList.remove('fade-in-listing');
        }
      });
    });
  });
});
