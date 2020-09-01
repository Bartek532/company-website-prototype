gsap.registerPlugin(ScrollTrigger);

const desktop = document.querySelectorAll('.menu__option');
const mobile = document.querySelectorAll('.menu__mobile');
const identifiers = ['home', 'about', 'services', 'social', 'contact'];

for (const identifier of identifiers) {
	const activeSection = document.querySelector(`#${identifier}`);
	const activeLink = document.querySelector(`a[href="#${identifier}"] [class^="menu"]`);

	gsap.to(activeLink, {
		scrollTrigger: {
			trigger: activeSection,
			start: 'top 50%',
			end: 'bottom center',
			onToggle: ({ progress, direction, isActive }) => {
				isActive ? (activeLink.style.color = '#4125c7') : (activeLink.style.color = '#303d67');
			}
		}
	});
}
