'use strict';

const togglePopup = () => {
	const burger = document.querySelector('.header__burger-menu'),
		checkbox = document.getElementById('burger-checkbox'),
		popup = document.querySelector('.popup');

	const openPopup = () => {
		popup.classList.add('hidden');
		popup.classList.remove('open');
	};

	const closePopup = () => {
		popup.classList.add('open');
		popup.classList.remove('hidden');
	};

	checkbox.addEventListener('click', (e) => {
		if (checkbox.checked) {
			closePopup();
		} else {
			openPopup();
		}
	});
};

export default togglePopup;
