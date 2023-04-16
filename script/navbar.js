const navbar = document.querySelector('.left');
const toggleMenuBtn = document.querySelector('.nav-btn');
const navItem = document.querySelectorAll('.nav-item');

toggleMenuBtn.addEventListener('click', function (e) {
	navbar.classList.toggle('display-nav');
	toggleMenuBtn.classList.toggle('menu-x');
});

navItem.forEach(element => {
	element.addEventListener('click', e => {
		navbar.classList.remove('display-nav');
		toggleMenuBtn.classList.remove('menu-x');
	});
});
