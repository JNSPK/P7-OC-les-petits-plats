import DropdownBuilder from '../builder/dropdownBuilder.js';
export default class KeyListener {
	static listen(searchResult) {
		const dropdowns = document.querySelector('.dropdowns-and-tags');

		dropdowns.addEventListener('keyup', (e) => {
			const searchValue = e.target.value;
			searchResult.filterIngredients(searchValue.toUpperCase());
			DropdownBuilder.buildIngredientDropdown(searchResult);
			// console.log(searchResult);
		});
	}
}
