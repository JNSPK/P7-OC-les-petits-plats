export default class DropdownBuilder {
	static buildIngredientsDropdown(searchResult, searchParams) {
		const list = document.querySelector('.ingredients-list');

		list.innerHTML = '';

		const ingredientsToDisplay =
			searchParams.ingredientsSelected.length > 0
				? [...searchResult.listIngredients].filter(
						(ingredient) =>
							!searchParams.ingredientsSelected.includes(ingredient)
				  )
				: [...searchResult.listIngredients].sort();

		console.log(ingredientsToDisplay);

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

	static buildAppliancesDropdown(searchResult, searchParams) {
		const list = document.querySelector('.appliances-list');

		list.innerHTML = '';

		const appliancesToDisplay =
			searchParams.appliancesSelected.length > 0
				? [...searchResult.listAppliances].filter(
						(appliance) => !searchParams.appliancesSelected.includes(appliance)
				  )
				: [...searchResult.listAppliances].sort();

		appliancesToDisplay.forEach((appliance) => {
			const option = document.createElement('option');
			option.classList.add('appliances-list-item');
			option.classList.add('tag');
			option.textContent =
				appliance.slice(0, 1).toUpperCase() + appliance.slice(1).toLowerCase();
			list.appendChild(option);
		});
		// console.log(appliancesToDisplay);
	}

	static buildUstensilsDropdown(searchResult, searchParams) {
		const list = document.querySelector('.ustensils-list');

		list.innerHTML = '';
		const ustensilsToDisplay =
			searchParams.ustensilsSelected.length > 0
				? [...searchResult.listUstensils].filter(
						(ustensil) => !searchParams.ustensilsSelected.includes(ustensil)
				  )
				: [...searchResult.listUstensils].sort();

		ustensilsToDisplay.forEach((ustensil) => {
			const option = document.createElement('option');
			option.classList.add('ustensils-list-item');
			option.classList.add('tag');
			option.textContent =
				ustensil.slice(0, 1).toUpperCase() + ustensil.slice(1).toLowerCase();
			list.appendChild(option);
		});
		// console.log(ustensilsToDisplay);
	}
}
