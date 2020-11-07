$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() { /* открывает страницу табов */
	$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');

		
});

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



	
	