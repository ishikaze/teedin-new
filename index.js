
const images = [
	'./assets/img/banner-01.jpg',
	'./assets/img/banner-02.jpg',
	'./assets/img/banner-03.jpg',
	'./assets/img/banner-04.jpg',
	'./assets/img/banner-05.jpg'
];

const heroTexts = [
	`ที่ดินกรุงเทพฯ`,
	'text2',
	'text3',
	'text4',
	'text5'
];

const texts = [
	`ซื้อหรือขาย
	ก็ทำได้ทั้งนั้น`
]

const textColors = [
	'#FFF',
	'#FFF',
	'#FFF',
	'#FFF',
	'#FFF'
]

let current = 0;
const imageEl = document.getElementById('featured-image');
const textEl = document.getElementById('featured-text');
const textHeroEl = document.getElementById('featured-hero-text');
const textContainer = document.getElementById('featured-text-container');
const heroBtn = document.getElementById('featured-btn');
const buySellOverlay = document.getElementById('buySellOverlay')

function fadeOutText() {
	textContainer.classList.remove('slide-up');
	textContainer.classList.add('slide-down');
	textEl.classList.remove('fade-in');
	textEl.classList.add('fade-out');
	textHeroEl.classList.remove('fade-in');
	textHeroEl.classList.add('fade-out');
	heroBtn.classList.remove('fade-in');
	heroBtn.classList.add('fade-out');
}


function fadeInText() {
	textContainer.classList.remove('slide-down');
	textContainer.classList.add('slide-up');
	textEl.classList.remove('fade-out');
	textEl.classList.add('fade-in');
	textHeroEl.classList.remove('fade-out');
	textHeroEl.classList.add('fade-in');
	heroBtn.classList.remove('fade-out');
	heroBtn.classList.add('fade-in');
}

function fadeImage() {
	imageEl.classList.remove('fade-in-img');
	imageEl.classList.add('fade-out-img');
}

function showImageAndText(idx) {
	imageEl.src = images[idx];
	textEl.innerHTML = texts[0];
	textHeroEl.innerHTML = heroTexts[idx]
	fadeInText();
	imageEl.classList.remove('fade-out-img');
	imageEl.classList.add('fade-in-img');
}


function nextSlide() {
	fadeOutText();
	fadeImage();
	const nextIdx = (current + 1) % images.length;
	const nextImgSrc = images[nextIdx];
	const nextText = texts[0];
	const nextTextHeroEl = textHeroEl[nextIdx]
	const nextTextColor = textColors[nextIdx]
	const preloadImg = new Image();
	preloadImg.onload = function() {
		setTimeout(() => {
			current = nextIdx;
			imageEl.src = nextImgSrc;
			textEl.textContent = nextText;
			textHeroEl.textContent = nextTextHeroEl;
			buySellOverlay.style.color = nextTextColor
			fadeInText();
			imageEl.classList.remove('fade-out-img');
			imageEl.classList.add('fade-in-img');
		}, 600);
	};
	preloadImg.src = nextImgSrc;
}




window.addEventListener('DOMContentLoaded', () => {
	imageEl.src = images[current];
	textEl.textContent = texts[0];
	textHeroEl.textContent = heroTexts[current]
	buySellOverlay.style.color = textColors[current]
	imageEl.classList.remove('fade-in-img', 'fade-out-img');
	textEl.classList.remove('fade-in', 'fade-out');
	textHeroEl.classList.remove('fade-in', 'fade-out');
	heroBtn.classList.remove('fade-in', 'fade-out');
	textContainer.classList.remove('slide-up', 'slide-down');

	requestAnimationFrame(() => {
		imageEl.classList.add('fade-in-img');
		textEl.classList.add('fade-in');
		buySellOverlay.style.color = textColors[current]
		textHeroEl.classList.add('fade-in');
		heroBtn.classList.add('fade-in');
		textContainer.classList.add('slide-up');
	});
});

function nextSlide() {
	imageEl.classList.remove('fade-in-img', 'fade-out-img');
	textEl.classList.remove('fade-in', 'fade-out');
	textHeroEl.classList.remove('fade-in', 'fade-out');
	heroBtn.classList.remove('fade-in', 'fade-out');
	textContainer.classList.remove('slide-up', 'slide-down');

	imageEl.classList.add('fade-out-img');
	textEl.classList.add('fade-out');
	textHeroEl.classList.add('fade-out');
	heroBtn.classList.add('fade-out');
	textContainer.classList.add('slide-down');

	setTimeout(() => {
		current = (current + 1) % images.length;
		imageEl.src = images[current];
		textEl.textContent = texts[0];
		textHeroEl.textContent = heroTexts[current]


		imageEl.classList.remove('fade-out-img');
		textEl.classList.remove('fade-out');
		textHeroEl.classList.remove('fade-out');
		heroBtn.classList.remove('fade-out');
		textContainer.classList.remove('slide-down');

		requestAnimationFrame(() => {
			imageEl.classList.add('fade-in-img');
			textEl.classList.add('fade-in');
			textHeroEl.classList.add('fade-in');
			heroBtn.classList.add('fade-in');
			textContainer.classList.add('slide-up');
		});
	}, 600);
}

setInterval(nextSlide, 8000);

function showOverlay(value) {
	if (value) {
		buySellOverlay.style.opacity = 1
		buySellOverlay.style.pointerEvents = 'auto'
	} else {
		buySellOverlay.style.opacity = 0
		buySellOverlay.style.pointerEvents = 'none'
	}
}

setInterval(() => {
	buySellOverlay.style.color = textColors[current]
},10)