const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(evt) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
};

const burgerButton = document.querySelector('.burger-menu__button');
if (burgerButton) {
	const menuBurger = document.querySelector('.burger-menu');
	burgerButton.addEventListener("click", function (e) {
		burgerButton.classList.toggle('burger-menu_active')
		menuBurger.classList.toggle('burger-menu_active')
	})
};