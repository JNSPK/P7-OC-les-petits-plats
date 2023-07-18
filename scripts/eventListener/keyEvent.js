import DropdownBuilder from '../builder/dropdownBuilder.js';
export default class KeyListener {
	static listen(searchResult) {
		const dropdowns = document.querySelector('.dropdowns-and-tags');

		dropdowns.addEventListener('keyup', (e) => {
			const searchValue = e.target.value.toUpperCase();
			const isInputIngredients =
				e.target.classList.contains('input-ingredients');
			const isInputAppliances = e.target.classList.contains('input-appliances');
			const isInputUstensils = e.target.classList.contains('input-ustensils');

			if (isInputIngredients) {
				searchResult.filterIngredients(searchValue);
				DropdownBuilder.buildIngredientsDropdown(searchResult);
			}
			if (isInputAppliances) {
				searchResult.filterAppliances(searchValue);
				DropdownBuilder.buildAppliancesDropdown(searchResult);
			}
			if (isInputUstensils) {
				searchResult.filterUstensils(searchValue);
				DropdownBuilder.buildUstensilsDropdown(searchResult);
			}

			// console.log(searchResult);
		});
	}
}
