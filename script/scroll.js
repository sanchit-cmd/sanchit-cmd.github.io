const navElement = document.querySelectorAll('.nav-item');
const right = document.querySelector('.right');

navElement.forEach(element => {
	const child = element.firstElementChild;

	element.addEventListener('click', function (event) {
		event.preventDefault();
		const id = child.getAttribute('href');
		const section = document.querySelector(id);
		section.scrollIntoView({ behavior: 'smooth' });
	});
});

const btnSection = document.querySelector('.btn-section');

btnSection.addEventListener('click', function (e) {
	e.preventDefault();
	const id = btnSection.getAttribute('href');
	document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});
