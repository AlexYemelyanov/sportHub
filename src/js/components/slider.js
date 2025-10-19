'use strict';
const slider = () => {
	const slides = document.querySelectorAll('.special__slider-slide');
	const slider = document.querySelector('.special__slider');
	const nextSlides = document.querySelectorAll('.next-folder__slider-slide'),
		nextSlider = document.querySelector('.next-folder__slider'),
		sliderBlock = document.querySelector('.slider');

	const slideWidth = sliderBlock.getBoundingClientRect().width;
	let currentSlide = 0;
	let current = 0;
	const changeSlide = () => {
		let slideNum = currentSlide;
		if (slideNum >= slides.length) {
			currentSlide = 0;
			return currentSlide;
		}
		currentSlide++;
		slider.style.transform = `translateX(-${slideNum * slideWidth}px)`;

		return currentSlide;
	};

	const nextSlide = () => {
		let slideNext = current;
		if (slideNext >= nextSlides.length) {
			current = 0;
			return current;
		}
		current++;
		nextSlider.style.transform = `translateX(-${slideNext * slideWidth}px)`;
		return current;
	};

	setInterval(changeSlide, 30000000);
	setInterval(nextSlide, 25000000);
};

slider();
