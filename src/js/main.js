const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-btn');
const footerYear = document.querySelector('.footer__year');
const allNavItems = document.querySelectorAll('.nav__link');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSection = document.querySelectorAll('.section');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;
	allSection.forEach(section => {
		if (section.classList.contains('color-section') && section.offsetTop <= currentSection + 50) {
			navBtnBars.classList.add('white-bars-color');
		} else if (!section.classList.contains('color-section') && section.offsetTop <= currentSection + 50) {
			navBtnBars.classList.remove('white-bars-color');
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
handleCurrentYear();
