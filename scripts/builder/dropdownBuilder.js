import SearchResultDto from '../dto/searchResultDto.js';

export default class DropdownBuilder {
	static buildIngredientDropdown(searchResult) {
		const list = document.querySelector('.ingredients-list');

		// const ingredients = new SearchResultDto(recipesDto);

		searchResult.listIngredient.forEach((ingredient) => {
			const option = document.createElement('option');
			option.classList.add('ingredients-list-item');
			option.textContent = ingredient;
			list.appendChild(option);
		});
	}

	static buildApplianceDropdown(searchResult) {
		const list = document.querySelector('.appliances-list');

		searchResult.listAppliance.forEach((appliance) => {
			const option = document.createElement('option');
			option.classList.add('appliances-list-item');
			option.textContent = appliance;
			list.appendChild(option);
		});
	}

	static buildUstensilsDropdown(searchResult) {
		const list = document.querySelector('.ustensils-list');

		searchResult.listUstensils.forEach((ustensil) => {
			const option = document.createElement('option');
			option.classList.add('ustensils-list-item');
			option.textContent = ustensil;
			list.appendChild(option);
		});
	}
}
