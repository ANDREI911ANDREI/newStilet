window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.navbar__menu'),
	menuItem = document.querySelectorAll('.menu_item'),
	hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('navbar__menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('navbar__menu_active');
		})
	})
});
