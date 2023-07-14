export default class DropdownBuilder {
	static buildIngredientDropdown(searchResult) {
		const list = document.querySelector('.ingredients-list');
		const inputContainer = document.createElement('span');
		const inputIngredients = document.createElement('input');

		inputContainer.classList.add('input-container');
		inputIngredients.classList.add('input-ingredients');
		inputIngredients.setAttribute('placeholder', 'Recherche');

		list.appendChild(inputContainer);
		inputContainer.appendChild(inputIngredients);

		searchResult.listIngredients.forEach((ingredient) => {
			const option = document.createElement('option');
			option.classList.add('ingredients-list-item');
			option.classList.add('tag');
			option.textContent = ingredient;
			list.appendChild(option);
		});
	}

	static buildApplianceDropdown(searchResult) {
		const list = document.querySelector('.appliances-list');
		const inputContainer = document.createElement('span');
		const inputAppliance = document.createElement('input');

		inputContainer.classList.add('input-container');
		inputAppliance.classList.add('input-appliances');
		inputAppliance.setAttribute('placeholder', 'Recherche');
		list.appendChild(inputContainer);
		inputContainer.appendChild(inputAppliance);

		searchResult.listAppliances.forEach((appliance) => {
			const option = document.createElement('option');
			option.classList.add('appliances-list-item');
			option.classList.add('tag');
			option.textContent = appliance;
			list.appendChild(option);
		});
	}

	static buildUstensilsDropdown(searchResult) {
		const list = document.querySelector('.ustensils-list');
		const inputContainer = document.createElement('span');
		const inputUstensils = document.createElement('input');

		inputContainer.classList.add('input-container');
		inputUstensils.classList.add('input-ustensils');
		inputUstensils.setAttribute('placeholder', 'Recherche');
		list.appendChild(inputContainer);
		inputContainer.appendChild(inputUstensils);

		searchResult.listUstensils.forEach((ustensil) => {
			const option = document.createElement('option');
			option.classList.add('ustensils-list-item');
			option.classList.add('tag');
			option.textContent = ustensil;
			list.appendChild(option);
		});
	}
}
