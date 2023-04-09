const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const dots = document.querySelector('.dots');
const dotsCount = slides.length;
let currentSlide = 0;

// Looping "slides" array to add dot in each slide
for (let i = 0; i < dotsCount; i++) {
	let displayDots = document.createElement("div");
	displayDots.classList.add('dot');
	if (i === currentSlide) {
		displayDots.classList.add('dot_selected');
	}
	dots.appendChild(displayDots);
}

const imageDirectory = './assets/images/slideshow/';
const imageSrc = document.querySelector('.banner-img');
const slideDescription = document.querySelector('#banner>p')

function changeSlide() {
	imageSrc.src = imageDirectory + slides[currentSlide++].image;
	slideDescription.innerHTML = slides[currentSlide++].tagLine;
}

// Defining left and right arrows
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener("click", changeSlide, false);
rightArrow.addEventListener("click", changeSlide, false);

