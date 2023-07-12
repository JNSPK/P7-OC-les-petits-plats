export default class ClickListener {
	static listen() {
		const dropdowns = document.querySelector('.dropdowns');

		dropdowns.addEventListener('click', (e) => {
			this.toggleMenu(e);
		});
	}
	static toggleMenu(e) {
		const isAMenuTrigger = e.target.classList.contains('menu-trigger');

		if (!isAMenuTrigger) {
			return false;
		}

		e.target.nextElementSibling.classList.toggle('active');
	}
}
