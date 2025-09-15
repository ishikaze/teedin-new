// listings.js
// Array of listing objects
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
