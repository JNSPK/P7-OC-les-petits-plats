export default class ClickListener {
	static listen(searchService) {
		const tags = document.querySelectorAll('.tag');
		const dropdownsMenus = document.querySelector('.dropdowns');
		const selectedTags = document.querySelectorAll('.selected-tag');
		const isCloseButton = document.querySelector('.remove-tag');

		dropdownsMenus.addEventListener('click', (e) => {
			this.toggleMenu(e);
		});

		this.inputListen(searchService);
		this.inputSubmit(searchService);
		this.addSelectedTag(searchService);
	}
	static toggleMenu(e) {
		const isAMenuTrigger = e.target.classList.contains('menu-trigger');

		if (!isAMenuTrigger) {
			return false;
		}

		const dropdownMenu = e.target.nextElementSibling;

		dropdownMenu.classList.toggle('active');
	}

	static addSelectedTag(searchService) {
		const tags = document.querySelectorAll('.tag');

		tags.forEach((tag) => {
			tag.addEventListener('click', (e) => {
				e.target.classList.add('selected');
				const selectedTags = document.querySelector('.selected-tags');
				const selectedTag = document.createElement('div');
				const elementStyles = window.getComputedStyle(e.target);
				const backgroundColor = elementStyles.backgroundColor;
				const isIngredientTag = e.target.classList.contains(
					'ingredients-list-item'
				);
				const isApplianceTag = e.target.classList.contains(
					'appliances-list-item'
				);
				const isUstensilTag = e.target.classList.contains(
					'ustensils-list-item'
				);

				selectedTags.classList.add('active');

				const closeButton = document.createElement('div');

				selectedTag.classList.add('selected-tag');

				if (isIngredientTag) {
					selectedTag.classList.add('ingredient-tag');
				}
				if (isApplianceTag) {
					selectedTag.classList.add('appliance-tag');
				}
				if (isUstensilTag) {
					selectedTag.classList.add('ustensil-tag');
				}

				closeButton.classList.add('remove-tag');

				selectedTag.innerHTML = e.target.textContent;
				selectedTag.appendChild(closeButton);
				selectedTag.style.backgroundColor = backgroundColor;

				selectedTags.appendChild(selectedTag);

				if (e.target.classList.contains('selected')) {
					e.target.style.display = 'none';

					if (isIngredientTag) {
						searchService.searchParams.ingredientsSelected.push(
							e.target.textContent.toUpperCase()
						);
						// searchService.searchResult.listIngredients.delete(e.target);
					}
					if (isApplianceTag) {
						searchService.searchParams.appliancesSelected.push(
							e.target.textContent.toUpperCase()
						);
					}
					if (isUstensilTag) {
						searchService.searchParams.ustensilsSelected.push(
							e.target.textContent.toUpperCase()
						);
					}
					searchService.search(e);
				}
			});
		});
	}
	// static removeTagSelected(searchService) {
	// 	// if (isCloseButton) {
	// 	// 	selectedTags.removeChild(e.target.parentNode);
	// 	// 	const targetedIngredient =
	// 	// 		e.target.parentNode.textContent.toUpperCase();
	// 	// 	const targetedAppliance =
	// 	// 		e.target.parentNode.textContent.toUpperCase();
	// 	// 	const targetedUstensil =
	// 	// 		e.target.parentNode.textContent.toUpperCase();
	// 	// 	const isIngredientTag =
	// 	// 		e.target.parentNode.classList.contains('ingredient-tag');
	// 	// 	const isApplianceTag =
	// 	// 		e.target.parentNode.classList.contains('appliance-tag');
	// 	// 	const isUstensilTag =
	// 	// 		e.target.parentNode.classList.contains('ustensil-tag');
	// 	// 	if (isIngredientTag) {
	// 	// 		searchResult.removeTagIngredient(targetedIngredient);
	// 	// 		DropdownBuilder.buildIngredientsDropdown(searchResult);
	// 	// 	}
	// 	// 	if (isApplianceTag) {
	// 	// 		searchResult.removeTagAppliance(targetedAppliance);
	// 	// 		DropdownBuilder.buildAppliancesDropdown(searchResult);
	// 	// 	}
	// 	// 	if (isUstensilTag) {
	// 	// 		searchResult.removeTagUstensil(targetedUstensil);
	// 	// 		DropdownBuilder.buildUstensilsDropdown(searchResult);
	// 	// 	}
	// }

	static inputListen(searchService) {
		//on key up
		const input = document.querySelector('.search');

		input.addEventListener('keyup', (e) => {
			if (e.target.value.length > 2) {
				searchService.search(e);
			}
			if (document.querySelector('.search').value.length === 0) {
				searchService.search(e);
			}
		});
	}
	static inputSubmit(searchService) {
		//on click sur loupe
		const submit = document.querySelector('.submit');

		submit.addEventListener('click', (e) => {
			e.preventDefault();

			if (document.querySelector('.search').value.length > 2) {
				searchService.search(e);
			}
			if (document.querySelector('.search').value.length === 0) {
				searchService.search(e);
			}
		});
	}
}
