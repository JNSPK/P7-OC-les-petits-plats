export default class DropdownBuilder {
	static buildIngredientsDropdown(searchResult, searchParams) {
		const list = document.querySelector('.ingredients-list');

		list.innerHTML = '';

		let ingredientsToDisplay = [];

		if (
			searchParams.ingredientsSelected.length > 0 &&
			searchResult.filteredIngredients.length === 0
		) {
			const selectedIngredients = searchParams.ingredientsSelected;

			ingredientsToDisplay = [...searchResult.listIngredients]
				.filter((ingredient) => !selectedIngredients.includes(ingredient))
				.sort();
		} else if (
			searchParams.ingredientsSelected.length === 0 &&
			searchResult.filteredIngredients.length === 0
		) {
			ingredientsToDisplay = [...searchResult.listIngredients].sort();
		} else if (searchResult.filteredIngredients.length > 0) {
			const selectedIngredients = searchParams.ingredientsSelected;
			const filteredIngredients = searchResult.filteredIngredients;
			ingredientsToDisplay = [...searchResult.listIngredients]
				.filter((ingredient) => filteredIngredients.includes(ingredient))
				.filter((ingredient) => !selectedIngredients.includes(ingredient))
				.sort();
		}

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

		let appliancesToDisplay = [];

		if (
			searchParams.appliancesSelected.length > 0 &&
			searchResult.filteredAppliances.length === 0
		) {
			const selectedAppliances = searchParams.appliancesSelected;

			appliancesToDisplay = [...searchResult.listAppliances]
				.filter((appliance) => !selectedAppliances.includes(appliance))
				.sort();
		} else if (
			searchParams.appliancesSelected.length === 0 &&
			searchResult.filteredAppliances.length === 0
		) {
			appliancesToDisplay = [...searchResult.listAppliances].sort();
		} else if (searchResult.filteredAppliances.length > 0) {
			const selectedAppliances = searchParams.appliancesSelected;
			const filteredAppliances = searchResult.filteredAppliances;
			appliancesToDisplay = [...searchResult.listAppliances]
				.filter((appliance) => filteredAppliances.includes(appliance))
				.filter((appliance) => !selectedAppliances.includes(appliance))
				.sort();
		}

		appliancesToDisplay.forEach((appliance) => {
			const option = document.createElement('option');
			option.classList.add('appliances-list-item');
			option.classList.add('tag');
			option.textContent =
				appliance.slice(0, 1).toUpperCase() + appliance.slice(1).toLowerCase();
			list.appendChild(option);
		});
	}

	static buildUstensilsDropdown(searchResult, searchParams) {
		const list = document.querySelector('.ustensils-list');

		list.innerHTML = '';
		let ustensilsToDisplay = [];
		if (
			searchParams.ustensilsSelected.length > 0 &&
			searchResult.filteredUstensils.length === 0
		) {
			const selectedUstensils = searchParams.ustensilsSelected;

			ustensilsToDisplay = [...searchResult.listUstensils]
				.filter((ustensil) => !selectedUstensils.includes(ustensil))
				.sort();
		} else if (
			searchParams.ustensilsSelected.length === 0 &&
			searchResult.filteredUstensils.length === 0
		) {
			ustensilsToDisplay = [...searchResult.listUstensils].sort();
		} else if (searchResult.filteredUstensils.length > 0) {
			const selectedUstensils = searchParams.ustensilsSelected;
			const filteredUstensils = searchResult.filteredUstensils;
			ustensilsToDisplay = [...searchResult.listUstensils]
				.filter((ustensil) => filteredUstensils.includes(ustensil))
				.filter((ustensil) => !selectedUstensils.includes(ustensil))
				.sort();
		}

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
