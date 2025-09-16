
const images = [
	'./assets/img/banner-01.jpg',
	'./assets/img/banner-02.jpg',
	'./assets/img/banner-03.jpg',
	'./assets/img/banner-04.jpg',
	'./assets/img/banner-05.jpg'
];

const texts = [
	'Welcome to Teedin - Find Your Dream Property',
	'Browse Exclusive Listings in Your Area',
	'Contact Our Agents for Personalized Service',
	'Discover Featured Properties and Deals',
	'Start Your Real Estate Journey Today'
];

let current = 0;
const imageEl = document.getElementById('featured-image');
const textEl = document.getElementById('featured-text');
const textContainer = document.getElementById('featured-text-container');

function fadeOutText() {
	textContainer.classList.remove('slide-up');
	textContainer.classList.add('slide-down');
	textEl.classList.remove('fade-in');
	textEl.classList.add('fade-out');
}

function fadeInText() {
	textContainer.classList.remove('slide-down');
	textContainer.classList.add('slide-up');
	textEl.classList.remove('fade-out');
	textEl.classList.add('fade-in');
}

function fadeImage() {
	imageEl.classList.remove('fade-in-img');
	imageEl.classList.add('fade-out-img');
}

function showImageAndText(idx) {
	imageEl.src = images[idx];
	textEl.textContent = texts[idx];
	fadeInText();
	imageEl.classList.remove('fade-out-img');
	imageEl.classList.add('fade-in-img');
}


function nextSlide() {
	fadeOutText();
	fadeImage();
	const nextIdx = (current + 1) % images.length;
	const nextImgSrc = images[nextIdx];
	const nextText = texts[nextIdx];
	const preloadImg = new Image();
	preloadImg.onload = function() {
		setTimeout(() => {
			current = nextIdx;
			imageEl.src = nextImgSrc;
			textEl.textContent = nextText;
			fadeInText();
			imageEl.classList.remove('fade-out-img');
			imageEl.classList.add('fade-in-img');
		}, 600);
	};
	preloadImg.src = nextImgSrc;
}




window.addEventListener('DOMContentLoaded', () => {
	imageEl.src = images[current];
	textEl.textContent = texts[current];
	imageEl.classList.remove('fade-in-img', 'fade-out-img');
	textEl.classList.remove('fade-in', 'fade-out');
	textContainer.classList.remove('slide-up', 'slide-down');

	requestAnimationFrame(() => {
		imageEl.classList.add('fade-in-img');
		textEl.classList.add('fade-in');
		textContainer.classList.add('slide-up');
	});
});

function nextSlide() {
	imageEl.classList.remove('fade-in-img', 'fade-out-img');
	textEl.classList.remove('fade-in', 'fade-out');
	textContainer.classList.remove('slide-up', 'slide-down');

	imageEl.classList.add('fade-out-img');
	textEl.classList.add('fade-out');
	textContainer.classList.add('slide-down');

	setTimeout(() => {
		current = (current + 1) % images.length;
		imageEl.src = images[current];
		textEl.textContent = texts[current];

		imageEl.classList.remove('fade-out-img');
		textEl.classList.remove('fade-out');
		textContainer.classList.remove('slide-down');

		requestAnimationFrame(() => {
			imageEl.classList.add('fade-in-img');
			textEl.classList.add('fade-in');
			textContainer.classList.add('slide-up');
		});
	}, 600);
}

setInterval(nextSlide, 8000);
