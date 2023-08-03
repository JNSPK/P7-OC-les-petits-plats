export default class DropdownBuilder {
	// On récupère les ingredients à afficher dans les menus déroulants via le searchResult

	static buildIngredientsDropdown(searchResult) {
		const list = document.querySelector('.ingredients-list');

		list.innerHTML = '';

		let ingredientsToDisplay = [...searchResult.listIngredients].sort();

		ingredientsToDisplay.forEach((ingredient) => {
			const option = document.createElement('option');
			option.classList.add('ingredients-list-item');
			option.classList.add('tag');
			option.textContent =
				ingredient.slice(0, 1).toUpperCase() +
				ingredient.slice(1).toLowerCase();
			list.appendChild(option);
		});
	}

	static buildAppliancesDropdown(searchResult) {
		const list = document.querySelector('.appliances-list');

		list.innerHTML = '';

		let appliancesToDisplay = [...searchResult.listAppliances].sort();

		appliancesToDisplay.forEach((appliance) => {
			const option = document.createElement('option');
			option.classList.add('appliances-list-item');
			option.classList.add('tag');
			option.textContent =
				appliance.slice(0, 1).toUpperCase() + appliance.slice(1).toLowerCase();
			list.appendChild(option);
		});
	}

	static buildUstensilsDropdown(searchResult) {
		const list = document.querySelector('.ustensils-list');

		list.innerHTML = '';

		let ustensilsToDisplay = [...searchResult.listUstensils].sort();

		ustensilsToDisplay.forEach((ustensil) => {
			const option = document.createElement('option');
			option.classList.add('ustensils-list-item');
			option.classList.add('tag');
			option.textContent =
				ustensil.slice(0, 1).toUpperCase() + ustensil.slice(1).toLowerCase();
			list.appendChild(option);
		});
	}
}
