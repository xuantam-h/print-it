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
for (let i = 0; i < slides.length; i++) {
	let displayDots = document.createElement("div");
	displayDots.classList.add('dot');
	if (i === currentSlide) {
		displayDots.classList.add('dot_selected');
	}
	dots.appendChild(displayDots);
}

const dotsHTML = document.querySelectorAll('.dot');
let dotsList = Array.from(dotsHTML);

const imageDirectory = './assets/images/slideshow/';
const imageSrc = document.querySelector('.banner-img');
const slideDescription = document.querySelector('#banner>p')

// Defining left and right arrows
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener("click", () =>{
	if (currentSlide > 0) {
		currentSlide--;
		changeSlide();
		console.log(currentSlide);
	} else {
		currentSlide = slides.length - 1;
		changeSlide();
		console.log(currentSlide);
	}
});

rightArrow.addEventListener("click", () =>{
	if (currentSlide < slides.length - 1){
		currentSlide++;
		changeSlide();
		console.log(currentSlide);
	} else {
		currentSlide = 0;
		changeSlide();
		console.log(currentSlide);
	}
});

function changeSlide() {
	imageSrc.src = imageDirectory + slides[currentSlide].image;
	slideDescription.innerHTML = slides[currentSlide].tagLine;
	for (let i = 0; i < dotsList.length; i++){
		if (i !== currentSlide) {
			dotsList[i].classList.remove("dot_selected");
		} else {
			dotsList[i].classList.add("dot_selected");
		}
	}
}