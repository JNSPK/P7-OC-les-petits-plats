import TagBuilder from '../builder/tagBuilder.js';

export default class EventListener {
	static listen(searchService) {
		const dropdownsAndTags = document.querySelector('.dropdowns-and-tags');

		dropdownsAndTags.addEventListener('click', (e) => {
			this.toggleMenu(e);
			this.addSelectedTag(e, searchService);

			const isCloseButton = e.target.classList.contains('remove-tag');
			if (isCloseButton) {
				this.removeSelectedTag(e, searchService);
			}
			// searchService.search();
			console.log(searchService);
		});

		dropdownsAndTags.addEventListener('keyup', (e) => {
			this.dropdownTagFilter(e, searchService);
			console.log(searchService);
		});

		this.inputListen(searchService);
		this.inputSubmit(searchService);
	}

	static toggleMenu(e) {
		const isAMenuTrigger = e.target.classList.contains('menu-trigger');

		if (!isAMenuTrigger) {
			return false;
		}

		const dropdownMenu = e.target.nextElementSibling;

		dropdownMenu.classList.toggle('active');
	}

	static addSelectedTag(e, searchService) {
		const isATag = e.target.classList.contains('tag');

		if (!isATag) {
			return;
		}

		e.target.classList.add('selected');

		TagBuilder.buildTag(e);

		const selectedTagsArea = document.querySelector('.selected-tags');
		selectedTagsArea.classList.add('active');

		const isIngredientTag = e.target.classList.contains(
			'ingredients-list-item'
		);
		const isApplianceTag = e.target.classList.contains('appliances-list-item');
		const isUstensilTag = e.target.classList.contains('ustensils-list-item');

		if (e.target.classList.contains('selected')) {
			if (
				isIngredientTag &&
				!searchService.searchParams.ingredientsSelected.includes(
					e.target.textContent.toUpperCase()
				)
			) {
				searchService.searchParams.ingredientsSelected.push(
					e.target.textContent.toUpperCase()
				);
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
			searchService.search();
		}
	}
	static removeSelectedTag(e, searchService) {
		const selectedTagsArea = document.querySelector('.selected-tags');
		selectedTagsArea.removeChild(e.target.parentNode);
		var targetedIngredient =
			searchService.searchParams.ingredientsSelected.indexOf(
				e.target.parentNode
			);

		var targetedAppliance =
			searchService.searchParams.appliancesSelected.indexOf(
				e.target.parentNode
			);
		var targetedUstensil = searchService.searchParams.ustensilsSelected.indexOf(
			e.target.parentNode
		);

		const isIngredientTag =
			e.target.parentNode.classList.contains('ingredient-tag');
		const isApplianceTag =
			e.target.parentNode.classList.contains('appliance-tag');
		const isUstensilTag =
			e.target.parentNode.classList.contains('ustensil-tag');

		if (isIngredientTag) {
			searchService.searchParams.ingredientsSelected.splice(
				targetedIngredient,
				1
			);
		}
		if (isApplianceTag) {
			searchService.searchParams.appliancesSelected.splice(
				targetedAppliance,
				1
			);
		}
		if (isUstensilTag) {
			searchService.searchParams.ustensilsSelected.splice(targetedUstensil, 1);
		}
		searchService.search();
	}

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

	static dropdownTagFilter(e, searchService) {
		const searchValue = e.target.value.toUpperCase();
		const isInputIngredients = e.target.classList.contains('input-ingredients');
		const isInputAppliances = e.target.classList.contains('input-appliances');
		const isInputUstensils = e.target.classList.contains('input-ustensils');

		if (isInputIngredients) {
			searchService.filterIngredients(searchValue);
		}
		if (isInputAppliances) {
			searchService.filterAppliances(searchValue);
		}
		if (isInputUstensils) {
			searchService.filterUstensils(searchValue);
		}

		// console.log(searchResult);
	}
}
