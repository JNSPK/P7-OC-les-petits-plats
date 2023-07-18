export default class DropdownBuilder {
	static buildIngredientsDropdown(searchResult) {
		const list = document.querySelector('.ingredients-list');

		list.innerHTML = '';

		const ingredientsToDisplay =
			searchResult.filteredIngredients.length > 0
				? searchResult.filteredIngredients
				: [...searchResult.listIngredients].sort();

		ingredientsToDisplay.forEach((ingredient) => {
			const option = document.createElement('option');
			option.classList.add('ingredients-list-item');
			option.classList.add('tag');
			option.textContent =
				ingredient.slice(0, 1).toUpperCase() +
				ingredient.slice(1).toLowerCase();
			list.appendChild(option);
		});
		console.log(ingredientsToDisplay);
	}

	static buildAppliancesDropdown(searchResult) {
		const list = document.querySelector('.appliances-list');

		list.innerHTML = '';

		const appliancesToDisplay =
			searchResult.filteredAppliances.length > 0
				? searchResult.filteredAppliances
				: [...searchResult.listAppliances].sort();

		appliancesToDisplay.forEach((appliance) => {
			const option = document.createElement('option');
			option.classList.add('appliances-list-item');
			option.classList.add('tag');
			option.textContent =
				appliance.slice(0, 1).toUpperCase() + appliance.slice(1).toLowerCase();
			list.appendChild(option);
		});
		console.log(appliancesToDisplay);
	}

	static buildUstensilsDropdown(searchResult) {
		const list = document.querySelector('.ustensils-list');

		list.innerHTML = '';
		const ustensilsToDisplay =
			searchResult.filteredUstensils.length > 0
				? searchResult.filteredUstensils
				: [...searchResult.listUstensils].sort();

		ustensilsToDisplay.forEach((ustensil) => {
			const option = document.createElement('option');
			option.classList.add('ustensils-list-item');
			option.classList.add('tag');
			option.textContent =
				ustensil.slice(0, 1).toUpperCase() + ustensil.slice(1).toLowerCase();
			list.appendChild(option);
		});
		console.log(ustensilsToDisplay);
	}
}
